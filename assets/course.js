/* English Course A1→B2 — lesson logic with full block validation */

const BUILD_VERSION = '7';
const STORAGE_PREFIX = 'english-course-';

/* ── Storage ── */
function getCompletedLessons() {
  try { return JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'completed') || '[]'); }
  catch { return []; }
}

function markLessonComplete(id, stats) {
  const completed = getCompletedLessons();
  const entry = { id, date: new Date().toISOString(), ...stats };
  const idx = completed.findIndex(c => c.id === id);
  if (idx >= 0) completed[idx] = entry;
  else completed.push(entry);
  localStorage.setItem(STORAGE_PREFIX + 'completed', JSON.stringify(completed));
  return completed.length;
}

function getLessonParam() {
  return parseInt(new URLSearchParams(location.search).get('id') || '1', 10);
}

function getLesson(id) {
  return CURRICULUM.find(l => l.id === id);
}

function levelBadge(level) {
  return `<span class="badge badge-${level.toLowerCase()}">${level}</span>`;
}

function escapeHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function simpleMd(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^- `(.+?)`$/gm, '<li><code>$1</code></li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
}

/* ── Answer validation ── */
function normalizeText(s) {
  return (s || '').toLowerCase()
    .replace(/['']/g, "'")
    .replace(/[^\w\s']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function wordCount(s) {
  const n = normalizeText(s);
  return n ? n.split(' ').filter(Boolean).length : 0;
}

function keywordScore(text, keywords) {
  if (!keywords?.length) return 1;
  const n = normalizeText(text);
  const hits = keywords.filter(kw => n.includes(kw.toLowerCase()));
  const need = Math.max(2, Math.ceil(keywords.length * 0.3));
  return hits.length / need;
}

function phraseSimilarity(spoken, expected) {
  const a = normalizeText(spoken).split(' ').filter(Boolean);
  const b = normalizeText(expected).split(' ').filter(Boolean);
  if (!a.length || !b.length) return 0;
  const setB = new Set(b);
  const overlap = a.filter(w => setB.has(w)).length;
  return overlap / Math.max(a.length, b.length);
}

function matchesPattern(text, pattern) {
  if (!pattern) return true;
  try {
    return new RegExp(pattern, 'i').test(text);
  } catch {
    return true;
  }
}

function includesAnyGroup(text, groups) {
  if (!groups?.length) return true;
  const n = normalizeText(text);
  return groups.every(group =>
    group.some(term => n.includes(normalizeText(term)))
  );
}

function matchesAcceptable(text, answers) {
  if (!answers?.length) return false;
  return answers.some(a => phraseSimilarity(text, a) >= 0.42);
}

function validateOpenAnswer(text, spec) {
  const raw = (text || '').trim();
  if (!raw) {
    return { ok: false, msg: 'Введите ответ на английском.' };
  }

  const n = normalizeText(raw);
  const words = wordCount(raw);
  const min = spec.minWords || 3;

  if (spec.mustNotInclude?.some(p => n.includes(normalizeText(p)))) {
    return {
      ok: false,
      msg: spec.hintWrong || 'Этот ответ не подходит к вопросу. Прочитай вопрос ещё раз.',
      sample: spec.acceptableAnswers?.[0],
      explain: spec.explain,
    };
  }

  if (words < min) {
    return {
      ok: false,
      msg: `Нужно минимум ${min} слов (сейчас ${words}).`,
      sample: spec.acceptableAnswers?.[0],
      explain: spec.explain,
    };
  }

  if (!matchesPattern(raw, spec.mustIncludePattern)) {
    return {
      ok: false,
      msg: spec.hintWrong || 'В ответе не хватает нужной формы (число, время, буквы и т.д.).',
      sample: spec.acceptableAnswers?.[0],
      explain: spec.explain,
    };
  }

  const groupsOk = includesAnyGroup(raw, spec.mustIncludeAny);
  const hasGroups = Boolean(spec.mustIncludeAny?.length);
  const topicHits = (spec.topicKeywords || spec.keywords || [])
    .filter(kw => n.includes(normalizeText(kw))).length;
  const topicNeed = spec.topicKeywords?.length
    ? Math.max(1, Math.ceil(spec.topicKeywords.length * 0.2))
    : 0;
  const topicOk = !topicNeed || topicHits >= topicNeed;
  const sampleOk = matchesAcceptable(raw, spec.acceptableAnswers);

  if (sampleOk) {
    return {
      ok: true,
      msg: spec.explain ? `Верно! ${spec.explain}` : 'Отлично! Ответ принят.',
      sample: spec.acceptableAnswers?.[0],
    };
  }

  if (hasGroups && !groupsOk) {
    return {
      ok: false,
      msg: spec.hintWrong || 'Ответ не соответствует вопросу. Используй нужную конструкцию.',
      sample: spec.acceptableAnswers?.[0],
      explain: spec.explain,
    };
  }

  if (!hasGroups && spec.topicKeywords?.length && !topicOk) {
    return {
      ok: false,
      msg: spec.hintWrong || 'Ответь по теме урока — используй лексику модуля.',
      sample: spec.acceptableAnswers?.[0],
      explain: spec.explain,
    };
  }

  if (spec.keywords?.length && keywordScore(raw, spec.keywords) < 1) {
    return {
      ok: false,
      msg: spec.hintWrong || 'Добавь слова и конструкции из урока (лексика / грамматика).',
      sample: spec.sample || spec.acceptableAnswers?.[0],
      explain: spec.explain,
    };
  }

  return {
    ok: true,
    msg: spec.explain ? `Верно! ${spec.explain}` : 'Отлично! Ответ принят.',
    sample: spec.acceptableAnswers?.[0],
  };
}

function validateSpeech(text, spec) {
  const open = validateOpenAnswer(text, spec);
  if (!open.ok) return open;
  if (spec.sample) {
    const sim = phraseSimilarity(text, spec.sample);
    if (sim >= 0.35) return { ok: true, msg: 'Устный ответ засчитан!' };
  }
  if (spec.expected) {
    const sim = phraseSimilarity(text, spec.expected);
    if (sim >= 0.5) return { ok: true, msg: 'Произношение близко к образцу!' };
  }
  return { ok: true, msg: 'Ответ принят. Сравни с образцом и повтори вслух.' };
}

/* ── Lesson progress gate ── */
const blockState = {
  theory: false,
  theoryCheck: false,
  warmup: [],
  vocab: false,
  grammar: false,
  contextDrill: [],
  quiz: false,
  pronunciation: [],
  flashcards: false,
  culture: [],
  speaking: [],
  homework: [],
};

function allBlocksDone(lesson) {
  if (!blockState.theory) return false;
  if (lesson.theoryCheck?.length && !blockState.theoryCheck) return false;
  if (!blockState.warmup.every(Boolean)) return false;
  if (!blockState.vocab) return false;
  if (!blockState.grammar) return false;
  if (lesson.contextDrill?.length && !blockState.contextDrill.every(Boolean)) return false;
  if (!blockState.quiz) return false;
  if (!blockState.pronunciation.every(Boolean)) return false;
  if (!blockState.flashcards) return false;
  if (!blockState.culture.every(Boolean)) return false;
  if (!blockState.speaking.every(Boolean)) return false;
  if (!blockState.homework.every(Boolean)) return false;
  return true;
}

function updateProgressUI(lesson) {
  const bar = document.getElementById('sectionProgress');
  if (!bar) return;
  const hw = lesson.homework || [];
  const theoryN = lesson.theoryCheck?.length ? 1 : 0;
  const drillN = lesson.contextDrill?.length || 0;
  const total = 1 + theoryN + lesson.warmup.length + 1 + 1 + drillN + 1
    + lesson.pronunciation.length + 1 + lesson.cultureCheck.length + lesson.speaking.length + hw.length;
  let done = 0;
  if (blockState.theory) done++;
  if (blockState.theoryCheck) done++;
  done += blockState.warmup.filter(Boolean).length;
  if (blockState.vocab) done++;
  if (blockState.grammar) done++;
  done += blockState.contextDrill.filter(Boolean).length;
  if (blockState.quiz) done++;
  done += blockState.pronunciation.filter(Boolean).length;
  if (blockState.flashcards) done++;
  done += blockState.culture.filter(Boolean).length;
  done += blockState.speaking.filter(Boolean).length;
  done += blockState.homework.filter(Boolean).length;
  const pct = Math.round(done / total * 100);
  bar.querySelector('.section-progress-fill').style.width = pct + '%';
  bar.querySelector('.section-progress-label').textContent = `Блоки: ${done}/${total} (${pct}%)`;

  const btn = document.getElementById('finishBtn');
  const hint = document.getElementById('finishHint');
  if (allBlocksDone(lesson)) {
    btn.disabled = false;
    btn.classList.remove('btn-disabled');
    hint.textContent = 'Все блоки проверены — можно завершить урок!';
    hint.style.color = 'var(--success)';
  } else {
    btn.disabled = true;
    btn.classList.add('btn-disabled');
    hint.textContent = 'Пройди платформу и отметь все домашние задания (~2.5 ч на модуль).';
    hint.style.color = 'var(--text-muted)';
  }
}

function markBlock(key, idx, lesson) {
  if (idx === undefined) blockState[key] = true;
  else blockState[key][idx] = true;
  updateProgressUI(lesson);
}

/* ── Check button helper ── */
function attachCheckButton(container, onCheck) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn btn-secondary check-btn';
  btn.textContent = 'Проверить';
  const feedback = document.createElement('div');
  feedback.className = 'check-feedback';
  btn.addEventListener('click', () => {
    const result = onCheck();
    feedback.className = 'check-feedback ' + (result.ok ? 'ok' : 'fail');
    feedback.textContent = result.msg;
    if (result.sample) {
      feedback.innerHTML += `<div class="sample-answer">Образец: ${escapeHtml(result.sample)}</div>`;
    }
  });
  container.appendChild(btn);
  container.appendChild(feedback);
  return { btn, feedback };
}

function setCheckResult(feedback, result, sample) {
  feedback.className = 'check-feedback ' + (result.ok ? 'ok' : 'fail');
  feedback.textContent = result.msg;
  const show = sample || result.sample;
  if (show) {
    feedback.innerHTML += `<div class="sample-answer">Образец: ${escapeHtml(show)}</div>`;
  }
  if (!result.ok && result.explain) {
    feedback.innerHTML += `<div class="sample-answer" style="opacity:0.85">${escapeHtml(result.explain)}</div>`;
  }
  return result.ok;
}

/* ── Speech recognition ── */
function getSpeechRecognition() {
  const C = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!C) return null;
  const r = new C();
  r.lang = 'en-US';
  r.interimResults = false;
  r.maxAlternatives = 1;
  return r;
}

function attachMicButton(textarea, onResult) {
  const rec = getSpeechRecognition();
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'mic-btn';
  btn.textContent = rec ? '🎤 Сказать' : '🎤 Недоступно';
  btn.disabled = !rec;
  if (!rec) btn.title = 'Распознавание речи поддерживается в Chrome / Edge';
  let listening = false;
  btn.addEventListener('click', () => {
    if (!rec || listening) return;
    listening = true;
    btn.textContent = '🔴 Слушаю…';
    btn.classList.add('listening');
    rec.onresult = e => {
      const t = e.results[0][0].transcript;
      textarea.value = (textarea.value ? textarea.value + ' ' : '') + t;
      if (onResult) onResult(t);
    };
    rec.onerror = () => { listening = false; btn.textContent = '🎤 Сказать'; btn.classList.remove('listening'); };
    rec.onend = () => { listening = false; btn.textContent = '🎤 Сказать'; btn.classList.remove('listening'); };
    rec.start();
  });
  return btn;
}

/* ── Render lesson ── */
let quizCorrect = 0, quizAnswered = 0;

function renderLesson(lesson) {
  document.title = `Урок ${lesson.id} — ${lesson.titleRu}`;
  const root = document.getElementById('lessonRoot');
  if (!root) return;

  Object.assign(blockState, {
    theory: false,
    theoryCheck: false,
    warmup: lesson.warmup.map(() => false),
    vocab: false,
    grammar: false,
    contextDrill: (lesson.contextDrill || []).map(() => false),
    quiz: false,
    pronunciation: lesson.pronunciation.map(() => false),
    flashcards: false,
    culture: lesson.cultureCheck.map(() => false),
    speaking: lesson.speaking.map(() => false),
    homework: (lesson.homework || []).map(() => false),
  });
  quizCorrect = 0; quizAnswered = 0;

  const g = lesson.grammar;
  const th = lesson.theory || {};
  const st = lesson.studyTime || { interactiveMin: 40, homeworkMin: 140, totalMin: 180, sessions: [] };

  root.innerHTML = `
    <div class="section-progress" id="sectionProgress">
      <div class="section-progress-label">Блоки: 0%</div>
      <div class="section-progress-track"><div class="section-progress-fill"></div></div>
    </div>

    <div class="lesson-hero reveal visible">
      <div class="breadcrumb"><a href="index.html">Курс</a> / Урок ${lesson.id}</div>
      ${levelBadge(lesson.level)}
      <h1 style="margin:12px 0 8px">${escapeHtml(lesson.titleRu)}</h1>
      <p class="lead">${escapeHtml(lesson.description)}</p>
      <p style="color:var(--text-muted);font-size:0.9rem;margin-top:8px">${lesson.duration} · ${escapeHtml(lesson.topic)}</p>
      <div class="study-plan-box card" style="margin-top:20px;padding:20px;text-align:left">
        <strong>Время на модуль: ~${Math.round(st.totalMin / 60 * 10) / 10} ч</strong>
        <p style="font-size:0.88rem;color:var(--text-secondary);margin:8px 0 12px">
          ${st.interactiveMin} мин на платформе + ${st.homeworkMin} мин самостоятельно (чтение, письмо, устная практика).
        </p>
        <ul class="session-list">
          ${st.sessions.map(s => `<li><span class="session-time">${s.minutes} мин</span> <strong>${escapeHtml(s.title)}</strong> — ${escapeHtml(s.desc)}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="timeline reveal visible">
      ${['Теория','Разогрев','Лексика','Практика','Произношение','Говорение'].map((l,i) =>
        `<div class="timeline-step"><div class="time">${i+1}</div><div>${l}</div></div>`
      ).join('')}
    </div>

    <section id="theory" class="reveal">
      <div class="section-header">
        <span class="section-tag">Теория</span>
        <h2>Теоретический блок</h2>
        <p>${escapeHtml(th.source || 'Oxford/Cambridge communicative approach')}</p>
      </div>
      <div class="theory-card card">
        <p class="theory-cefr">${escapeHtml(th.cefr || '')}</p>
        <div class="theory-reading">${simpleMd(th.reading || th.intro || lesson.description)}</div>
        ${th.keyPoints ? `<ul class="theory-points">${th.keyPoints.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul>` : ''}
        <button class="btn btn-primary" id="theoryDoneBtn" style="margin-top:16px">✓ Теорию изучил</button>
        <div class="check-feedback" id="theoryFeedback"></div>
      </div>
    </section>

    <section id="theoryCheck" class="reveal">
      <div class="section-header">
        <span class="section-tag">Проверка</span>
        <h2>Понимание теории</h2>
        <p>Короткий тест: убедись, что усвоил грамматику модуля.</p>
      </div>
      <div id="theoryCheckContainer"></div>
    </section>

    <section id="warmup" class="reveal">
      <div class="section-header"><span class="section-tag">Разогрев</span><h2>Разминка</h2><p>Ответь по-английски и нажми «Проверить».</p></div>
      <div class="card-grid" id="warmupGrid"></div>
    </section>

    <section id="vocab" class="reveal">
      <div class="section-header"><span class="section-tag">Лексика</span><h2>Слова урока</h2><p>Изучи карточки, затем пройди мини-тест.</p></div>
      <div class="vocab-grid" id="vocabGrid"></div>
      <div id="vocabQuizBox" style="margin-top:24px"></div>
    </section>

    <section id="grammar" class="reveal">
      <div class="section-header"><span class="section-tag">Грамматика</span><h2>${escapeHtml(g.title)}</h2></div>
      <div class="grammar-compare">
        ${g.blocks.map(b => `
          <div class="grammar-box">
            <h3>${escapeHtml(b.title)}</h3>
            <div class="ru-desc">${escapeHtml(b.desc)}</div>
            <div class="example">${escapeHtml(b.example)}</div>
          </div>`).join('')}
      </div>
      <div class="formula-box"><strong>Формулы</strong>
        ${g.formulas.map(f => `<code>${escapeHtml(f)}</code>`).join('')}
      </div>
      ${g.extraExamples ? `<div class="card-grid" style="margin-bottom:20px">${g.extraExamples.map(ex => `
        <div class="card"><div style="color:var(--text-muted);font-size:0.85rem;margin-bottom:8px">${escapeHtml(ex.label)}</div>
        ${ex.items.map(i => `<div>${escapeHtml(i)}</div>`).join('')}</div>`).join('')}</div>` : ''}
      <div class="mistake-box">
        <div class="mistake-wrong"><div class="mistake-label">Неправильно</div>${escapeHtml(g.mistake.wrong)}</div>
        <div class="mistake-right"><div class="mistake-label">Правильно</div>${escapeHtml(g.mistake.right)}</div>
      </div>
      <div class="section-header" style="margin-top:28px"><h3>Проверка грамматики</h3></div>
      <div id="grammarCheckContainer"></div>
    </section>

    <section id="contextDrill" class="reveal">
      <div class="section-header">
        <span class="section-tag">Контекст</span>
        <h2>Вставь слово в предложение</h2>
        <p>Напиши пропущенное слово — проверка по точному ответу.</p>
      </div>
      <div id="contextDrillContainer"></div>
    </section>

    <section id="quiz" class="reveal">
      <div class="section-header"><span class="section-tag">Практика</span><h2>Тест</h2><p>Выбери правильный вариант.</p></div>
      <div id="quizContainer"></div>
      <div class="quiz-score" id="quizScore"><div class="score-num" id="scoreNum">0/5</div>
      <p style="color:var(--text-muted);margin-top:8px">Нужно ответить на все вопросы.</p></div>
    </section>

    <section id="pronunciation" class="reveal">
      <div class="section-header"><span class="section-tag">Произношение</span><h2>Фонетика</h2><p>Прослушай, повтори вслух и проверь.</p></div>
      <div class="card-grid" id="pronGrid"></div>
    </section>

    <section id="flashcards" class="reveal">
      <div class="section-header"><span class="section-tag">Повторение</span><h2>Карточки</h2><p>Отметь, знаешь ли слово. Пройди все карточки.</p></div>
      <div class="fc-counter" id="fcCounter">1 / ${lesson.flashcards.length}</div>
      <div class="flashcard-deck"><div class="flashcard" id="flashcard">
        <div class="flashcard-face flashcard-front"><div class="fc-word" id="fcWord"></div><div style="color:var(--text-muted);font-size:0.85rem">нажми для перевода</div></div>
        <div class="flashcard-face flashcard-back"><div class="fc-trans" id="fcTrans"></div><div class="fc-example" id="fcExample"></div></div>
      </div></div>
      <div class="fc-nav">
        <button id="fcPrev">←</button>
        <button id="fcKnow" class="fc-grade know">Знаю ✓</button>
        <button id="fcFlip" style="width:auto;padding:0 16px;border-radius:8px;font-size:0.85rem">Перевернуть</button>
        <button id="fcUnknown" class="fc-grade unknown">Ещё раз</button>
        <button id="fcNext">→</button>
      </div>
      <div class="check-feedback" id="fcFeedback"></div>
    </section>

    <section id="culture" class="reveal">
      <div class="section-header"><span class="section-tag">Культура</span><h2>Материалы для погружения</h2></div>
      <div class="culture-grid">
        <div class="culture-item"><h4>Посмотреть</h4><ul>${lesson.culture.watch.map(w => `<li>${escapeHtml(w)}</li>`).join('')}</ul></div>
        <div class="culture-item"><h4>Послушать</h4><ul>${lesson.culture.listen.map(w => `<li>${escapeHtml(w)}</li>`).join('')}</ul></div>
        <div class="culture-item"><h4>Почитать</h4><ul>${lesson.culture.read.map(w => `<li>${escapeHtml(w)}</li>`).join('')}</ul></div>
      </div>
      <div class="card-grid" id="cultureGrid"></div>
    </section>

    <section id="speaking" class="reveal">
      <div class="section-header"><span class="section-tag">Говорение</span><h2>Устная практика (сессия 1)</h2><p>Напиши или скажи ответ — система проверит содержание.</p></div>
      <div id="speakingTasks"></div>
    </section>

    <section id="homework" class="reveal">
      <div class="section-header">
        <span class="section-tag">Домашка</span>
        <h2>Самостоятельная работа (сессии 2–3)</h2>
        <p>~${st.homeworkMin} минут вне платформы. Отметь каждое задание после выполнения.</p>
      </div>
      <div id="homeworkList"></div>
      <div class="check-feedback" id="homeworkFeedback"></div>
    </section>

    <section class="finish-section reveal" id="finish">
      <button class="btn btn-success btn-disabled" id="finishBtn" disabled style="padding:16px 40px;font-size:1rem">✓ Завершить урок</button>
      <p class="finish-hint" id="finishHint">Пройди и проверь все блоки</p>
    </section>

    <div class="lesson-nav">
      ${lesson.id > 1 ? `<a href="lesson.html?id=${lesson.id-1}" class="btn btn-secondary">← Урок ${lesson.id-1}</a>` : '<span></span>'}
      <a href="index.html" class="btn btn-secondary">К курсу</a>
      ${lesson.id < CURRICULUM.length ? `<a href="lesson.html?id=${lesson.id+1}" class="btn btn-primary">Урок ${lesson.id+1} →</a>` : '<span></span>'}
    </div>
  `;

  initTheory(lesson);
  initTheoryCheck(lesson);
  initWarmup(lesson);
  initVocab(lesson);
  initGrammarCheck(lesson);
  initContextDrill(lesson);
  initQuiz(lesson.quiz, lesson);
  initPronunciation(lesson);
  initFlashcards(lesson);
  initCulture(lesson);
  initSpeaking(lesson);
  initHomework(lesson);
  initFinish(lesson);
  initReveal();
  initProgressBar();
  updateProgressUI(lesson);
}

function initTheory(lesson) {
  document.getElementById('theoryDoneBtn').addEventListener('click', () => {
    markBlock('theory', undefined, lesson);
    const fb = document.getElementById('theoryFeedback');
    fb.className = 'check-feedback ok';
    fb.textContent = 'Теория засчитана. Переходи к практике!';
    document.getElementById('theoryDoneBtn').disabled = true;
  });
}

function initWarmup(lesson) {
  const grid = document.getElementById('warmupGrid');
  lesson.warmup.forEach((q, i) => {
    const spec = typeof q === 'string' ? { prompt: q, keywords: [], minWords: 3 } : q;
    const card = document.createElement('div');
    card.className = 'card question-card';
    card.innerHTML = `<div class="q-num">${i+1}</div><div style="flex:1">
      <div class="q-text">${escapeHtml(spec.prompt)}</div>
      <textarea class="answer-input" rows="2" placeholder="Your answer…"></textarea>
      <div class="answer-actions"></div></div>`;
    const ta = card.querySelector('textarea');
    const actions = card.querySelector('.answer-actions');
    const fb = document.createElement('div');
    fb.className = 'check-feedback';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-secondary check-btn';
    btn.textContent = 'Проверить';
    btn.addEventListener('click', () => {
      const r = validateOpenAnswer(ta.value, spec);
      setCheckResult(fb, r);
      if (r.ok) markBlock('warmup', i, lesson);
    });
    actions.appendChild(btn);
    if (spec.useSpeech !== false) actions.appendChild(attachMicButton(ta));
    actions.appendChild(fb);
    grid.appendChild(card);
  });
}

function initVocab(lesson) {
  const grid = document.getElementById('vocabGrid');
  lesson.vocab.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    card.innerHTML = `<div class="vocab-inner">
      <div class="vocab-front"><div class="vocab-word">${escapeHtml(v.en)}</div><div class="vocab-hint">нажми</div></div>
      <div class="vocab-back"><div class="vocab-trans">${escapeHtml(v.ru)}</div></div></div>`;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    grid.appendChild(card);
  });

  const box = document.getElementById('vocabQuizBox');
  const quiz = lesson.vocabQuiz || [];
  let vCorrect = 0, vDone = 0;
  box.innerHTML = '<h3 style="margin-bottom:16px">Мини-тест по словам</h3>';
  quiz.forEach((q, i) => {
    const item = document.createElement('div');
    item.className = 'quiz-item';
    if (q.type === 'gap') {
      item.innerHTML = `<div class="quiz-sentence">${i+1}. ${escapeHtml(q.sentence.replace('___', '______'))}</div>
        <input class="answer-input gap-input" placeholder="English word…" />
        <div class="answer-actions"></div>`;
      const inp = item.querySelector('input');
      const fb = document.createElement('div');
      fb.className = 'check-feedback';
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn btn-secondary check-btn';
      btn.textContent = 'Проверить';
      btn.addEventListener('click', () => {
        if (item.dataset.done) return;
        const ok = normalizeText(inp.value) === normalizeText(q.answer);
        fb.className = 'check-feedback ' + (ok ? 'ok' : 'fail');
        fb.textContent = ok ? 'Верно!' : `Неверно. Ответ: ${q.answer}`;
        if (ok) vCorrect++;
        vDone++;
        item.dataset.done = '1';
        if (vDone === quiz.length) {
          if (vCorrect >= Math.ceil(quiz.length * 0.6)) markBlock('vocab', undefined, lesson);
          box.insertAdjacentHTML('beforeend', `<div class="check-feedback ${vCorrect >= Math.ceil(quiz.length*0.6) ? 'ok' : 'fail'}">Лексика: ${vCorrect}/${quiz.length}</div>`);
        }
      });
      item.querySelector('.answer-actions').append(btn, fb);
    } else {
      item.innerHTML = `<div class="quiz-sentence">${i+1}. ${escapeHtml(q.question)}</div><div class="quiz-options"></div>`;
      const opts = item.querySelector('.quiz-options');
      q.options.forEach(opt => {
        const b = document.createElement('button');
        b.className = 'quiz-btn';
        b.textContent = opt;
        b.addEventListener('click', () => {
          if (item.dataset.done) return;
          item.dataset.done = '1';
          const ok = opt === q.answer;
          b.classList.add(ok ? 'selected-correct' : 'selected-wrong');
          if (!ok) opts.querySelectorAll('.quiz-btn').forEach(x => { if (x.textContent === q.answer) x.classList.add('selected-correct'); });
          item.classList.add(ok ? 'correct' : 'wrong');
          opts.querySelectorAll('.quiz-btn').forEach(x => x.disabled = true);
          if (ok) vCorrect++;
          vDone++;
          if (vDone === quiz.length) {
            if (vCorrect >= Math.ceil(quiz.length * 0.6)) markBlock('vocab', undefined, lesson);
          }
        });
        opts.appendChild(b);
      });
    }
    box.appendChild(item);
  });
}

function initTheoryCheck(lesson) {
  const container = document.getElementById('theoryCheckContainer');
  const section = document.getElementById('theoryCheck');
  const items = lesson.theoryCheck || [];
  if (!items.length) {
    if (section) section.style.display = 'none';
    blockState.theoryCheck = true;
    return;
  }
  let done = 0;
  let ok = 0;
  items.forEach((q, i) => {
    const item = document.createElement('div');
    item.className = 'quiz-item';
    item.innerHTML = `<div class="quiz-sentence">${i + 1}. ${escapeHtml(q.question)}</div><div class="quiz-options"></div>`;
    const opts = item.querySelector('.quiz-options');
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        if (item.dataset.answered) return;
        item.dataset.answered = '1';
        const correct = opt === q.answer;
        btn.classList.add(correct ? 'selected-correct' : 'selected-wrong');
        if (!correct) {
          opts.querySelectorAll('.quiz-btn').forEach(b => {
            if (b.textContent === q.answer) b.classList.add('selected-correct');
          });
        }
        item.classList.add(correct ? 'correct' : 'wrong');
        opts.querySelectorAll('.quiz-btn').forEach(b => b.disabled = true);
        done++;
        if (correct) ok++;
        if (done === items.length && ok >= Math.ceil(items.length * 0.6)) {
          markBlock('theoryCheck', undefined, lesson);
        }
      });
      opts.appendChild(btn);
    });
    container.appendChild(item);
  });
}

function initContextDrill(lesson) {
  const container = document.getElementById('contextDrillContainer');
  const section = document.getElementById('contextDrill');
  const drills = lesson.contextDrill || [];
  if (!drills.length) {
    if (section) section.style.display = 'none';
    return;
  }
  drills.forEach((d, i) => {
    const item = document.createElement('div');
    item.className = 'quiz-item';
    item.innerHTML = `<div class="quiz-sentence">${d.id || i + 1}. ${escapeHtml(d.prompt)}</div>
      <input class="answer-input gap-input" placeholder="Type the missing word…" />
      <div class="answer-actions"></div>`;
    const inp = item.querySelector('input');
    const fb = document.createElement('div');
    fb.className = 'check-feedback';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-secondary check-btn';
    btn.textContent = 'Проверить';
    btn.addEventListener('click', () => {
      if (item.dataset.done) return;
      const val = normalizeText(inp.value);
      const alts = [d.answer, ...(d.altAnswers || [])].map(a => normalizeText(a));
      const hit = alts.includes(val);
      fb.className = 'check-feedback ' + (hit ? 'ok' : 'fail');
      fb.textContent = hit ? 'Верно!' : `Неверно. Ответ: ${d.answer}`;
      if (!hit && d.hint) {
        fb.innerHTML += `<div class="sample-answer">${escapeHtml(d.hint)}</div>`;
      }
      item.dataset.done = '1';
      if (hit) markBlock('contextDrill', i, lesson);
    });
    item.querySelector('.answer-actions').append(btn, fb);
    container.appendChild(item);
  });
}

function initGrammarCheck(lesson) {
  const container = document.getElementById('grammarCheckContainer');
  const items = lesson.grammarCheck || [];
  let gDone = 0, gOk = 0;
  items.forEach((q, i) => {
    const item = document.createElement('div');
    item.className = 'quiz-item';
    const parts = q.sentence.split('___');
    item.innerHTML = `<div class="quiz-sentence">${i+1}. ${escapeHtml(parts[0])}<strong style="color:var(--accent)"> ___ </strong>${escapeHtml(parts[1]||'')}</div><div class="quiz-options"></div>`;
    const opts = item.querySelector('.quiz-options');
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        if (item.dataset.answered) return;
        item.dataset.answered = '1';
        const ok = opt === q.answer;
        btn.classList.add(ok ? 'selected-correct' : 'selected-wrong');
        if (!ok) opts.querySelectorAll('.quiz-btn').forEach(b => { if (b.textContent === q.answer) b.classList.add('selected-correct'); });
        item.classList.add(ok ? 'correct' : 'wrong');
        opts.querySelectorAll('.quiz-btn').forEach(b => b.disabled = true);
        gDone++;
        if (ok) gOk++;
        if (gDone === items.length && gOk >= Math.ceil(items.length * 0.5)) markBlock('grammar', undefined, lesson);
      });
      opts.appendChild(btn);
    });
    container.appendChild(item);
  });
}

function initQuiz(quizData, lesson) {
  const container = document.getElementById('quizContainer');
  quizCorrect = 0; quizAnswered = 0;
  quizData.forEach((q, i) => {
    const item = document.createElement('div');
    item.className = 'quiz-item';
    const parts = q.sentence.split('___');
    item.innerHTML = `<div class="quiz-sentence">${i+1}. ${escapeHtml(parts[0])}<strong style="color:var(--accent)">___</strong>${escapeHtml(parts[1]||'')}</div><div class="quiz-options"></div>`;
    const opts = item.querySelector('.quiz-options');
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        if (item.dataset.answered) return;
        item.dataset.answered = '1';
        const ok = opt === q.answer;
        btn.classList.add(ok ? 'selected-correct' : 'selected-wrong');
        if (!ok) opts.querySelectorAll('.quiz-btn').forEach(b => { if (b.textContent === q.answer) b.classList.add('selected-correct'); });
        item.classList.add(ok ? 'correct' : 'wrong');
        opts.querySelectorAll('.quiz-btn').forEach(b => b.disabled = true);
        quizAnswered++;
        if (ok) quizCorrect++;
        if (quizAnswered === quizData.length) {
          document.getElementById('scoreNum').textContent = `${quizCorrect}/${quizData.length}`;
          document.getElementById('quizScore').classList.add('visible');
          if (quizCorrect >= Math.ceil(quizData.length * 0.6)) markBlock('quiz', undefined, lesson);
        }
      });
      opts.appendChild(btn);
    });
    container.appendChild(item);
  });
}

function initPronunciation(lesson) {
  const grid = document.getElementById('pronGrid');
  lesson.pronunciation.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'card pron-card';
    card.innerHTML = `<div class="pron-phrase">${escapeHtml(p.phrase)}</div>
      <div class="pron-ipa">${escapeHtml(p.ipa)}</div>
      <div class="pron-tip">${escapeHtml(p.tip)}</div>
      <div class="pron-actions">
        <button type="button" class="speak-btn listen-btn">🔊 Прослушать</button>
      </div>
      <div class="check-feedback pron-feedback"></div>`;
    card.querySelector('.listen-btn').addEventListener('click', e => {
      e.stopPropagation();
      const u = new SpeechSynthesisUtterance(p.phrase);
      u.lang = 'en-US'; u.rate = 0.85;
      speechSynthesis.speak(u);
    });
    const ta = document.createElement('textarea');
    ta.className = 'answer-input';
    ta.rows = 2;
    ta.placeholder = 'Напиши или продиктуй фразу…';
    const actions = card.querySelector('.pron-actions');
    actions.appendChild(attachMicButton(ta, () => {}));
    const checkBtn = document.createElement('button');
    checkBtn.type = 'button';
    checkBtn.className = 'speak-btn check-pron-btn';
    checkBtn.textContent = '✓ Проверить';
    const fb = card.querySelector('.pron-feedback');
    checkBtn.addEventListener('click', () => {
      const expected = p.expected || p.phrase;
      const sim = phraseSimilarity(ta.value, expected);
      const ok = sim >= 0.45 || normalizeText(ta.value) === normalizeText(expected);
      fb.className = 'check-feedback pron-feedback ' + (ok ? 'ok' : 'fail');
      fb.textContent = ok ? 'Фраза принята! Отличное произношение.' : `Попробуй ещё. Близость: ${Math.round(sim*100)}%. Образец: ${expected}`;
      if (ok) markBlock('pronunciation', i, lesson);
    });
    actions.appendChild(checkBtn);
    card.appendChild(ta);
    grid.appendChild(card);
  });
}

function initFlashcards(lesson) {
  const cards = lesson.flashcards;
  let idx = 0;
  const reviewed = new Set();
  const fc = document.getElementById('flashcard');
  const fcWord = document.getElementById('fcWord');
  const fcTrans = document.getElementById('fcTrans');
  const fcExample = document.getElementById('fcExample');
  const fcCounter = document.getElementById('fcCounter');
  const fb = document.getElementById('fcFeedback');

  function update() {
    fc.classList.remove('flipped');
    const c = cards[idx];
    fcWord.textContent = c.word;
    fcTrans.textContent = c.trans;
    fcExample.textContent = c.example;
    fcCounter.textContent = `${idx+1} / ${cards.length} · просмотрено ${reviewed.size}`;
  }

  function grade() {
    reviewed.add(idx);
    if (reviewed.size >= Math.min(cards.length, 10)) {
      markBlock('flashcards', undefined, lesson);
      fb.className = 'check-feedback ok';
      fb.textContent = `Карточки пройдены (${reviewed.size} слов).`;
    }
  }

  fc.addEventListener('click', () => fc.classList.toggle('flipped'));
  document.getElementById('fcFlip').addEventListener('click', () => fc.classList.toggle('flipped'));
  document.getElementById('fcPrev').addEventListener('click', () => { idx = (idx-1+cards.length)%cards.length; update(); });
  document.getElementById('fcNext').addEventListener('click', () => { idx = (idx+1)%cards.length; update(); });
  document.getElementById('fcKnow').addEventListener('click', () => { grade(); idx = (idx+1)%cards.length; update(); });
  document.getElementById('fcUnknown').addEventListener('click', () => { grade(); idx = (idx+1)%cards.length; update(); });

  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowLeft') { idx = (idx-1+cards.length)%cards.length; update(); }
    if (e.key === 'ArrowRight') { idx = (idx+1)%cards.length; update(); }
    if (e.key === ' ') { e.preventDefault(); fc.classList.toggle('flipped'); }
  });
  update();
}

function initCulture(lesson) {
  const grid = document.getElementById('cultureGrid');
  lesson.cultureCheck.forEach((q, i) => {
    const spec = typeof q === 'string' ? { prompt: q, keywords: [], minWords: 3 } : q;
    const card = document.createElement('div');
    card.className = 'card question-card';
    card.innerHTML = `<div class="q-num">${i+1}</div><div style="flex:1">
      <div class="q-text">${escapeHtml(spec.prompt)}</div>
      <textarea class="answer-input" rows="2" placeholder="Your answer…"></textarea>
      <div class="answer-actions"></div></div>`;
    const ta = card.querySelector('textarea');
    const fb = document.createElement('div');
    fb.className = 'check-feedback';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-secondary check-btn';
    btn.textContent = 'Проверить';
    btn.addEventListener('click', () => {
      const r = validateOpenAnswer(ta.value, spec);
      setCheckResult(fb, r);
      if (r.ok) markBlock('culture', i, lesson);
    });
    const actions = card.querySelector('.answer-actions');
    actions.appendChild(btn);
    actions.appendChild(attachMicButton(ta));
    actions.appendChild(fb);
    grid.appendChild(card);
  });
}

function initSpeaking(lesson) {
  const root = document.getElementById('speakingTasks');
  lesson.speaking.forEach((s, i) => {
    const spec = typeof s === 'string' ? { task: s, keywords: [], minWords: 7, useSpeech: true } : s;
    const box = document.createElement('div');
    box.className = 'challenge-box';
    box.style.marginBottom = '16px';
    box.innerHTML = `<div class="q-text" style="text-align:left;margin-bottom:12px">${i+1}. ${escapeHtml(spec.task)}</div>`;
    const ta = document.createElement('textarea');
    ta.className = 'answer-input';
    ta.rows = 4;
    ta.placeholder = 'Write or dictate your answer in English…';
    ta.style.maxWidth = '100%';
    const actions = document.createElement('div');
    actions.className = 'answer-actions';
    actions.style.justifyContent = 'center';
    const fb = document.createElement('div');
    fb.className = 'check-feedback';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-primary check-btn';
    btn.textContent = 'Проверить ответ';
    btn.addEventListener('click', () => {
      const r = spec.useSpeech ? validateSpeech(ta.value, spec) : validateOpenAnswer(ta.value, spec);
      setCheckResult(fb, r);
      if (r.ok) markBlock('speaking', i, lesson);
    });
    actions.appendChild(btn);
    if (spec.useSpeech) actions.appendChild(attachMicButton(ta));
    actions.appendChild(fb);
    box.appendChild(ta);
    box.appendChild(actions);
    root.appendChild(box);
  });
}

function initHomework(lesson) {
  const list = document.getElementById('homeworkList');
  const fb = document.getElementById('homeworkFeedback');
  const tasks = lesson.homework || [];
  if (!list || !tasks.length) return;

  tasks.forEach((hw, i) => {
    const row = document.createElement('label');
    row.className = 'homework-item card';
    row.innerHTML = `
      <input type="checkbox" class="hw-check" />
      <div>
        <div class="hw-meta"><span class="hw-type">${escapeHtml(hw.type)}</span> · ${hw.minutes} мин</div>
        <div class="hw-task">${escapeHtml(hw.task)}</div>
      </div>`;
    row.querySelector('.hw-check').addEventListener('change', e => {
      blockState.homework[i] = e.target.checked;
      row.classList.toggle('hw-done', e.target.checked);
      const all = blockState.homework.every(Boolean);
      if (fb) {
        fb.className = 'check-feedback ' + (all ? 'ok' : '');
        fb.style.display = all ? 'block' : 'none';
        fb.textContent = all ? 'Домашняя работа отмечена. Модуль можно завершать после всех блоков на платформе.' : '';
      }
      updateProgressUI(lesson);
    });
    list.appendChild(row);
  });
}

function initFinish(lesson) {
  const btn = document.getElementById('finishBtn');
  const hint = document.getElementById('finishHint');
  const overlay = document.getElementById('finishOverlay');
  const completed = getCompletedLessons();

  if (completed.some(c => c.id === lesson.id)) {
    btn.textContent = '✓ Урок пройден';
    btn.classList.add('done');
    btn.disabled = false;
    btn.classList.remove('btn-disabled');
  }

  btn.addEventListener('click', () => {
    if (!allBlocksDone(lesson) && !completed.some(c => c.id === lesson.id)) return;
    const total = markLessonComplete(lesson.id, {
      quizScore: quizCorrect,
      quizTotal: quizAnswered || lesson.quiz.length,
    });
    btn.textContent = '✓ Урок пройден';
    btn.classList.add('done');
    document.getElementById('modalQuizScore').textContent = quizAnswered ? `${quizCorrect}/${quizAnswered}` : '—';
    document.getElementById('modalProgress').textContent = `${total}/${CURRICULUM.length}`;
    document.getElementById('modalLevel').textContent = lesson.level;
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
    hint.textContent = `Завершено · пройдено ${total} из ${CURRICULUM.length}`;
  });

  document.getElementById('closeModalBtn').addEventListener('click', () => {
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  });
  overlay.addEventListener('click', e => {
    if (e.target === overlay) { overlay.classList.remove('visible'); document.body.style.overflow = ''; }
  });
}

function initReveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible'); }, { threshold: 0.08 }).observe(el);
  });
}

function initProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / h * 100) + '%';
  });
}

/* ── Index page ── */
function renderIndex() {
  const completed = getCompletedLessons();
  const doneIds = new Set(completed.map(c => c.id));
  const total = CURRICULUM.length;
  const done = doneIds.size;
  const pct = Math.round(done / total * 100);

  const pctEl = document.getElementById('progressPct');
  const fillEl = document.getElementById('progressFill');
  const doneEl = document.getElementById('statDone');
  const totalEl = document.getElementById('statTotal');
  if (pctEl) pctEl.textContent = pct + '%';
  if (fillEl) fillEl.style.width = pct + '%';
  if (doneEl) doneEl.textContent = done;
  if (totalEl) totalEl.textContent = total;

  const meta = typeof COURSE_META !== 'undefined' ? COURSE_META : null;
  const hoursEl = document.getElementById('statHours');
  if (hoursEl && meta) hoursEl.textContent = meta.hoursTarget;

  const sub = document.getElementById('courseSubtitle');
  if (sub) sub.textContent = meta
    ? `A1 → B2 · ${total} модулей · ~${meta.hoursTarget} ч`
    : `A1 → B2 · ${total} модулей`;
  const foot = document.getElementById('footerSubtitle');
  if (foot) foot.textContent = `English Course A1 → B2 · ${total} уроков · v${BUILD_VERSION}`;

  const levels = ['A1', 'A2', 'B1', 'B2'];
  const container = document.getElementById('courseLevels');
  if (!container) return;

  const loading = document.getElementById('courseLoading');
  if (typeof CURRICULUM === 'undefined' || !CURRICULUM.length) {
    if (loading) loading.textContent = 'Ошибка загрузки курса. Обновите страницу (Ctrl+Shift+R).';
    return;
  }
  if (loading) loading.remove();

  const perLevel = total / 4;
  document.getElementById('levelHint').textContent =
    `${perLevel} модулей на уровень · ~${meta ? meta.levels.A1.hours : 48} ч на уровень · ${meta ? meta.hoursTarget : 192} ч на весь путь A1→B2`;

  container.innerHTML = levels.map(lvl => {
    const lessons = CURRICULUM.filter(l => l.level === lvl);
    return `<div class="level-section">
      <div class="level-header"><h2>${lvl}</h2>${levelBadge(lvl)}<span style="color:var(--text-muted);font-size:0.9rem;margin-left:auto">${lessons.filter(l=>doneIds.has(l.id)).length}/${lessons.length}</span></div>
      <div class="lesson-list">${lessons.map(l => `
        <a href="lesson.html?id=${l.id}" class="lesson-card ${doneIds.has(l.id)?'completed':''}">
          <div class="lesson-num">${doneIds.has(l.id)?'✓':l.id}</div>
          <div class="lesson-info"><h3>${escapeHtml(l.titleRu)}</h3><p>${escapeHtml(l.topic)} · ${l.duration}</p></div>
          <div class="lesson-meta">${levelBadge(l.level)}<span class="lesson-duration">${escapeHtml(l.title)}</span></div>
        </a>`).join('')}
      </div></div>`;
  }).join('');
}
