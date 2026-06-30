/* English Course A1→B2 — shared logic */

const STORAGE_PREFIX = 'english-course-';

function getCompletedLessons() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'completed') || '[]');
  } catch { return []; }
}

function markLessonComplete(id, quizScore, quizTotal) {
  const completed = getCompletedLessons();
  const entry = { id, date: new Date().toISOString(), quizScore, quizTotal };
  const idx = completed.findIndex(c => c.id === id);
  if (idx >= 0) completed[idx] = entry;
  else completed.push(entry);
  localStorage.setItem(STORAGE_PREFIX + 'completed', JSON.stringify(completed));
  return completed.length;
}

function getLessonParam() {
  const p = new URLSearchParams(location.search);
  return parseInt(p.get('id') || '1', 10);
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

/* ── Render lesson page ── */
function renderLesson(lesson) {
  document.title = `Урок ${lesson.id} — ${lesson.titleRu}`;
  const root = document.getElementById('lessonRoot');
  if (!root) return;

  const g = lesson.grammar;
  root.innerHTML = `
    <div class="lesson-hero reveal visible">
      <div class="breadcrumb"><a href="index.html">Курс</a> / Урок ${lesson.id}</div>
      ${levelBadge(lesson.level)}
      <h1 style="margin:12px 0 8px">${escapeHtml(lesson.titleRu)}</h1>
      <p class="lead">${escapeHtml(lesson.description)}</p>
      <p style="color:var(--text-muted);font-size:0.9rem;margin-top:8px">${lesson.duration} · ${escapeHtml(lesson.topic)}</p>
    </div>

    <div class="timeline reveal visible">
      ${['Разогрев','Лексика','Грамматика','Практика','Итог'].map((l,i) =>
        `<div class="timeline-step"><div class="time">${i*4}–${Math.min((i+1)*4,25)} мин</div><div>${l}</div></div>`
      ).join('')}
    </div>

    <section id="warmup" class="reveal">
      <div class="section-header"><span class="section-tag">Разогрев</span><h2>Разминка</h2><p>Ответь на вопросы по-английски.</p></div>
      <div class="card-grid">${lesson.warmup.map((q,i) => `
        <div class="card question-card">
          <div class="q-num">${i+1}</div>
          <div><div class="q-text">${escapeHtml(q)}</div>
          <textarea class="answer-input" placeholder="Your answer..." rows="2"></textarea></div>
        </div>`).join('')}
      </div>
    </section>

    <section id="vocab" class="reveal">
      <div class="section-header"><span class="section-tag">Лексика</span><h2>Слова урока</h2><p>Нажми на карточку, чтобы увидеть перевод.</p></div>
      <div class="vocab-grid" id="vocabGrid"></div>
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
    </section>

    <section id="quiz" class="reveal">
      <div class="section-header"><span class="section-tag">Практика</span><h2>Тест</h2><p>Выбери правильный вариант.</p></div>
      <div id="quizContainer"></div>
      <div class="quiz-score" id="quizScore"><div class="score-num" id="scoreNum">0/5</div>
      <p style="color:var(--text-muted);margin-top:8px">Продолжай практиковаться!</p></div>
    </section>

    <section id="pronunciation" class="reveal">
      <div class="section-header"><span class="section-tag">Произношение</span><h2>Фонетика</h2></div>
      <div class="card-grid" id="pronGrid"></div>
    </section>

    <section id="flashcards" class="reveal">
      <div class="section-header"><span class="section-tag">Повторение</span><h2>Карточки</h2><p>Нажми или нажми пробел для переворота. Стрелки — навигация.</p></div>
      <div class="fc-counter" id="fcCounter">1 / ${lesson.flashcards.length}</div>
      <div class="flashcard-deck"><div class="flashcard" id="flashcard">
        <div class="flashcard-face flashcard-front"><div class="fc-word" id="fcWord"></div><div style="color:var(--text-muted);font-size:0.85rem">нажми для перевода</div></div>
        <div class="flashcard-face flashcard-back"><div class="fc-trans" id="fcTrans"></div><div class="fc-example" id="fcExample"></div></div>
      </div></div>
      <div class="fc-nav">
        <button id="fcPrev">←</button>
        <button id="fcFlip" style="width:auto;padding:0 16px;border-radius:8px;font-size:0.85rem">Перевернуть</button>
        <button id="fcNext">→</button>
      </div>
    </section>

    <section id="culture" class="reveal">
      <div class="section-header"><span class="section-tag">Культура</span><h2>Материалы для погружения</h2></div>
      <div class="culture-grid">
        <div class="culture-item"><h4>Посмотреть</h4><ul>${lesson.culture.watch.map(w => `<li>${escapeHtml(w)}</li>`).join('')}</ul></div>
        <div class="culture-item"><h4>Послушать</h4><ul>${lesson.culture.listen.map(w => `<li>${escapeHtml(w)}</li>`).join('')}</ul></div>
        <div class="culture-item"><h4>Почитать</h4><ul>${lesson.culture.read.map(w => `<li>${escapeHtml(w)}</li>`).join('')}</ul></div>
      </div>
      <div class="card-grid">${lesson.cultureCheck.map((q,i) => `
        <div class="card question-card"><div class="q-num">${i+1}</div>
        <div><div class="q-text">${escapeHtml(q)}</div>
        <textarea class="answer-input" placeholder="Your answer..." rows="2"></textarea></div></div>`).join('')}
      </div>
    </section>

    <section id="speaking" class="reveal">
      <div class="section-header"><span class="section-tag">Говорение</span><h2>Устная практика</h2></div>
      <div class="challenge-box">
        <ul class="challenge-list">${lesson.speaking.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul>
        <textarea class="answer-input" id="speakingAnswer" placeholder="Напиши свои ответы здесь..." rows="5" style="max-width:520px;margin:0 auto"></textarea>
      </div>
    </section>

    <section class="finish-section reveal" id="finish">
      <button class="btn btn-success" id="finishBtn" style="padding:16px 40px;font-size:1rem">✓ Завершить урок</button>
      <p class="finish-hint" id="finishHint">Сохрани прогресс после прохождения всех блоков</p>
    </section>

    <div class="lesson-nav">
      ${lesson.id > 1 ? `<a href="lesson.html?id=${lesson.id-1}" class="btn btn-secondary">← Урок ${lesson.id-1}</a>` : '<span></span>'}
      <a href="index.html" class="btn btn-secondary">К курсу</a>
      ${lesson.id < CURRICULUM.length ? `<a href="lesson.html?id=${lesson.id+1}" class="btn btn-primary">Урок ${lesson.id+1} →</a>` : '<span></span>'}
    </div>
  `;

  initVocab(lesson.vocab);
  initQuiz(lesson.quiz);
  initPronunciation(lesson.pronunciation);
  initFlashcards(lesson.flashcards);
  initFinish(lesson.id);
  initReveal();
  initProgressBar();
}

function initVocab(vocab) {
  const grid = document.getElementById('vocabGrid');
  if (!grid) return;
  vocab.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    card.innerHTML = `<div class="vocab-inner">
      <div class="vocab-front"><div class="vocab-word">${escapeHtml(v.en)}</div><div class="vocab-hint">нажми</div></div>
      <div class="vocab-back"><div class="vocab-trans">${escapeHtml(v.ru)}</div></div></div>`;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    grid.appendChild(card);
  });
}

let quizCorrect = 0, quizAnswered = 0;

function initQuiz(quizData) {
  const container = document.getElementById('quizContainer');
  if (!container) return;
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
        }
      });
      opts.appendChild(btn);
    });
    container.appendChild(item);
  });
}

function initPronunciation(data) {
  const grid = document.getElementById('pronGrid');
  if (!grid) return;
  data.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card pron-card';
    card.innerHTML = `<div class="pron-phrase">${escapeHtml(p.phrase)}</div>
      <div class="pron-ipa">${escapeHtml(p.ipa)}</div>
      <div class="pron-tip">${escapeHtml(p.tip)}</div>
      <button class="speak-btn">🔊 Прослушать</button>`;
    card.querySelector('.speak-btn').addEventListener('click', e => {
      e.stopPropagation();
      const u = new SpeechSynthesisUtterance(p.phrase);
      u.lang = 'en-US'; u.rate = 0.85;
      speechSynthesis.speak(u);
    });
    grid.appendChild(card);
  });
}

function initFlashcards(cards) {
  let idx = 0;
  const fc = document.getElementById('flashcard');
  const fcWord = document.getElementById('fcWord');
  const fcTrans = document.getElementById('fcTrans');
  const fcExample = document.getElementById('fcExample');
  const fcCounter = document.getElementById('fcCounter');
  if (!fc) return;

  function update() {
    fc.classList.remove('flipped');
    const c = cards[idx];
    fcWord.textContent = c.word;
    fcTrans.textContent = c.trans;
    fcExample.textContent = c.example;
    fcCounter.textContent = `${idx+1} / ${cards.length}`;
  }

  fc.addEventListener('click', () => fc.classList.toggle('flipped'));
  document.getElementById('fcFlip').addEventListener('click', () => fc.classList.toggle('flipped'));
  document.getElementById('fcPrev').addEventListener('click', () => { idx = (idx-1+cards.length)%cards.length; update(); });
  document.getElementById('fcNext').addEventListener('click', () => { idx = (idx+1)%cards.length; update(); });

  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft') { idx = (idx-1+cards.length)%cards.length; update(); }
    if (e.key === 'ArrowRight') { idx = (idx+1)%cards.length; update(); }
    if (e.key === ' ') { e.preventDefault(); fc.classList.toggle('flipped'); }
  });
  update();
}

function initFinish(lessonId) {
  const btn = document.getElementById('finishBtn');
  const hint = document.getElementById('finishHint');
  const overlay = document.getElementById('finishOverlay');
  const completed = getCompletedLessons();

  function showDone(total) {
    btn.textContent = '✓ Урок пройден';
    btn.classList.add('done');
    const entry = completed.find(c => c.id === lessonId);
    hint.textContent = entry
      ? `Завершено ${new Date(entry.date).toLocaleDateString('ru-RU')} · пройдено ${total} из ${CURRICULUM.length}`
      : '';
  }

  if (completed.some(c => c.id === lessonId)) showDone(completed.length);

  btn.addEventListener('click', () => {
    const total = markLessonComplete(lessonId, quizCorrect, quizAnswered || 5);
    showDone(total);
    document.getElementById('modalQuizScore').textContent = quizAnswered ? `${quizCorrect}/${quizAnswered}` : '—';
    document.getElementById('modalProgress').textContent = `${total}/${CURRICULUM.length}`;
    document.getElementById('modalLevel').textContent = getLesson(lessonId).level;
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
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

/* ── Render index page ── */
function renderIndex() {
  const completed = getCompletedLessons();
  const doneIds = new Set(completed.map(c => c.id));
  const total = CURRICULUM.length;
  const done = doneIds.size;
  const pct = Math.round(done / total * 100);

  document.getElementById('progressPct').textContent = pct + '%';
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('statDone').textContent = done;
  document.getElementById('statTotal').textContent = total;

  const levels = ['A1', 'A2', 'B1', 'B2'];
  const container = document.getElementById('courseLevels');
  if (!container) return;

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
