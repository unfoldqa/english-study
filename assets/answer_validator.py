#!/usr/bin/env python3
"""Build per-question answer validation specs from prompts and lesson context."""
import re


def _pick_vocab(lesson, n=6):
    return [v["en"].lower() for v in lesson.get("vocab", [])[:n]]


def _grammar_examples(lesson):
    g = lesson.get("grammar", {})
    ex = []
    for b in g.get("blocks", []):
        ex.append(b.get("example", ""))
    for group in g.get("extraExamples", []):
        ex.extend(group.get("items", []))
    return [e for e in ex if e]


def build_warmup_spec(prompt: str, lesson: dict) -> dict:
    p = prompt.lower().strip()
    vocab = _pick_vocab(lesson)

    # ── Greetings & feelings ──
    if "how are you" in p:
        return {
            "prompt": prompt,
            "minWords": 2,
            "mustIncludeAny": [
                ["fine", "good", "great", "well", "ok", "okay", "not bad", "tired", "busy", "happy", "alright"],
            ],
            "acceptableAnswers": [
                "I'm fine, thank you.",
                "I'm good, thanks.",
                "Fine, thanks. And you?",
                "I'm very well, thank you.",
                "Not bad, thanks.",
            ],
            "hintWrong": "Ответь на How are you?: состояние (fine/good/great) + thanks.",
            "explain": "На «How are you?» отвечают о самочувствии, не называют имя.",
        }

    if "what" in p and "name" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [
                ["my name is", "i'm", "i am", "call me", "name is", "name's"],
            ],
            "mustNotInclude": ["thank you very much", "i'm from", "nice to meet"],
            "acceptableAnswers": [
                "My name is Anna.",
                "I'm Alex.",
                "I am Maria.",
                "My name's Tom.",
            ],
            "hintWrong": "Назови имя: My name is … / I'm …",
            "explain": "На «What is your name?» нужно имя, не благодарность.",
        }

    if "where" in p and "from" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["from", "come from"]],
            "acceptableAnswers": [
                "I'm from Russia.",
                "I am from Moscow.",
                "I come from Spain.",
            ],
            "hintWrong": "Укажи страну/город: I'm from … / I come from …",
            "explain": "На «Where are you from?» — место происхождения.",
        }

    if "how old" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [
                ["years old", "year old"],
                ["i'm", "i am", "im"],
            ],
            "mustIncludePattern": r"\d",
            "acceptableAnswers": ["I'm 25 years old.", "I am thirty years old."],
            "hintWrong": "Укажи возраст: I'm 25 years old.",
            "explain": "How old are you? → число + years old.",
        }

    # where is / where are (location)
    if p.startswith("where is") or p.startswith("where are"):
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [
                ["is", "are", "it's", "it is", "they are", "near", "next to", "on", "in", "at", "there"],
            ],
            "acceptableAnswers": [
                "The station is near the park.",
                "It is on Main Street.",
                "There is a bank next to the hotel.",
            ],
            "hintWrong": "Укажи место: It is … / There is … + предлог.",
            "explain": "Ответ — расположение объекта, не страна.",
        }

    # Yes/No: Are you...
    if p.startswith("are you") or p.startswith("is he") or p.startswith("is she"):
        return {
            "prompt": prompt,
            "minWords": 2,
            "mustIncludeAny": [
                ["yes", "no", "i am", "i'm", "i'm not", "i am not", "he is", "she is", "they are"],
            ],
            "acceptableAnswers": ["Yes, I am.", "No, I'm not.", "Yes, I am a student."],
            "hintWrong": "Ответь Yes/No + короткое пояснение.",
            "explain": "На Are you…? — Yes, I am. / No, I'm not.",
        }

    # Can you / Can I
    if p.startswith("can you") or p.startswith("can i"):
        return {
            "prompt": prompt,
            "minWords": 2,
            "mustIncludeAny": [
                ["yes", "no", "i can", "i can't", "cannot", "sure", "of course", "sorry"],
            ],
            "acceptableAnswers": [
                "Yes, I can.",
                "No, I can't.",
                "Yes, of course.",
                "Sure, no problem.",
            ],
            "hintWrong": "Yes, I can. / No, I can't. / Sure!",
            "explain": "На Can…? — can или can't в ответе.",
        }

    # Do you / Does
    if p.startswith("do you") or p.startswith("does ") or "do they" in p or "does she" in p:
        return {
            "prompt": prompt,
            "minWords": 2,
            "mustIncludeAny": [["yes", "no", "i do", "i don't", "she does", "he does", "they do"]],
            "acceptableAnswers": ["Yes, I do.", "No, I don't.", "Yes, she does."],
            "hintWrong": "Yes, I do. / No, I don't.",
            "explain": "На Do/Does…? — do или don't.",
        }

    # What do you / What does
    if "what do you" in p or "what does" in p:
        return {
            "prompt": prompt,
            "minWords": 4,
            "mustIncludeAny": [["i", "he", "she", "they", "we"]],
            "topicKeywords": vocab[:4],
            "acceptableAnswers": [
                "I work in an office.",
                "I study English every day.",
                "She speaks English well.",
            ],
            "hintWrong": "Полное предложение с глаголом по теме урока.",
            "explain": "What do you…? → I + глагол + детали.",
        }

    # What's your job / what is your job
    if "job" in p or "work" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [
                ["i'm a", "i am a", "i'm an", "i work", "work as", "student", "teacher", "engineer"],
            ],
            "acceptableAnswers": ["I'm a teacher.", "I work as a designer.", "I am a student."],
            "hintWrong": "I'm a … / I work as a …",
            "explain": "Спросили о работе — ответь о профессии.",
        }

    if "where do you live" in p or "where do you work" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["i live", "i work", "in", "at", "near", "from"]],
            "acceptableAnswers": ["I live in Moscow.", "I work in the city centre."],
            "hintWrong": "I live in … / I work in …",
            "explain": "Where do you…? → I + live/work + место.",
        }

    if "spell" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludePattern": r"[a-z]-[a-z]|[a-z] [a-z]-[a-z]",
            "acceptableAnswers": ["It's A-N-N-A.", "A-N-N-A."],
            "hintWrong": "Произнеси по буквам: A-N-N-A.",
            "explain": "How do you spell…? → буквы через дефис.",
        }

    # Is there / Are there
    if "is there" in p or "are there" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["yes", "no", "there is", "there are", "there isn't", "there aren't"]],
            "acceptableAnswers": [
                "Yes, there is a bank near here.",
                "No, there aren't any parks.",
            ],
            "hintWrong": "Yes, there is… / No, there isn't…",
            "explain": "На Is/Are there…? — there is/are в ответе.",
        }

    if "how many" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludePattern": r"\d|one|two|three|four|five|six|seven|eight|nine|ten",
            "mustIncludeAny": [["there are", "there is", "i have", "rooms", "people"]],
            "acceptableAnswers": ["There are three rooms.", "I have two brothers."],
            "hintWrong": "Число + существительное: There are three …",
            "explain": "How many…? → число + мн.ч.",
        }

    if "how much" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludePattern": r"\d|pound|dollar|euro|free",
            "mustIncludeAny": [["it is", "it's", "costs", "is", "price"]],
            "acceptableAnswers": ["It costs ten pounds.", "It's five dollars."],
            "hintWrong": "It costs … / It's … pounds.",
            "explain": "How much…? → цена.",
        }

    if "what time" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [
                ["it's", "it is", "o'clock", "half", "quarter", "am", "pm", "past", "to"],
            ],
            "mustIncludePattern": r"\d|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve",
            "acceptableAnswers": ["It's three o'clock.", "It's half past two."],
            "hintWrong": "It's + время (three o'clock / half past two).",
            "explain": "What time is it? → It's …",
        }

    if "where were" in p or "was" in p and "?" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["was", "were", "at", "in", "home", "yesterday", "i was", "they were"]],
            "acceptableAnswers": ["I was at home yesterday.", "They were at school."],
            "hintWrong": "I was … / They were … + место + yesterday.",
            "explain": "Прошедшее to be: was/were.",
        }

    if "have you ever" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["yes", "no", "i have", "i haven't", "never", "ever"]],
            "acceptableAnswers": ["Yes, I have.", "No, I have never been there."],
            "hintWrong": "Yes, I have. / No, I have never…",
            "explain": "Present Perfect: have/has + V3.",
        }

    # Wh- generic fallback using lesson examples
    examples = _grammar_examples(lesson)
    return {
        "prompt": prompt,
        "minWords": 4,
        "topicKeywords": vocab,
        "acceptableAnswers": examples[:3] if examples else [
            f"I use words from this lesson about {lesson.get('topic', 'English')}."
        ],
        "hintWrong": "Полный ответ по теме урока на английском.",
        "explain": f"Ответь по теме: {lesson.get('topic', '')}.",
    }


def build_culture_spec(prompt: str, lesson: dict) -> dict:
    p = prompt.lower()
    if "introduce" in p or "introduction" in p:
        return {
            "prompt": prompt,
            "minWords": 4,
            "mustIncludeAny": [["name", "hello", "hi", "my name", "nice to meet", "i'm", "call"]],
            "acceptableAnswers": ["They say hello and their name.", "My name is…"],
            "hintWrong": "Как представляются: hello + name.",
            "explain": "Ищи приветствие и имя.",
        }
    if "greeting" in p and "morning" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["good morning", "morning", "hello"]],
            "acceptableAnswers": ["They say good morning."],
            "hintWrong": "Good morning / Hello.",
            "explain": "Утреннее приветствие.",
        }
    if "goodbye" in p or "say goodbye" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["bye", "goodbye", "see you", "later"]],
            "acceptableAnswers": ["They say goodbye.", "See you later."],
            "hintWrong": "Goodbye / See you…",
            "explain": "Прощание.",
        }
    if "from" in p and ("where" in p or "person" in p):
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["from", "country", "city", "london", "russia", "america", "is"]],
            "acceptableAnswers": ["They are from London."],
            "hintWrong": "From + место.",
            "explain": "Откуда человек.",
        }
    if "polite" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["please", "thank", "sorry", "excuse"]],
            "acceptableAnswers": ["Please and thank you."],
            "hintWrong": "Please / Thank you / Sorry.",
            "explain": "Вежливые слова.",
        }
    if "how old" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludePattern": r"\d|years old|young|old",
            "acceptableAnswers": ["They are 25 years old."],
            "hintWrong": "Возраст: … years old.",
            "explain": "Сколько лет.",
        }
    if "job" in p or "work" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["work", "job", "teacher", "student", "doctor", "is a", "works"]],
            "acceptableAnswers": ["He is a teacher."],
            "hintWrong": "Профессия: is a … / works as …",
            "explain": "Работа персонажа.",
        }
    if "happy" in p or "sad" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["happy", "sad", "angry", "tired", "feel", "they are", "he is"]],
            "acceptableAnswers": ["They are happy."],
            "hintWrong": "Happy / sad / tired…",
            "explain": "Настроение.",
        }
    if "every day" in p or "wake" in p or "routine" in p:
        return {
            "prompt": prompt,
            "minWords": 4,
            "mustIncludeAny": [["every", "wake", "work", "go", "eat", "morning", "usually"]],
            "acceptableAnswers": ["They wake up at seven every day."],
            "hintWrong": "Действие + every day / usually.",
            "explain": "Распядок дня.",
        }
    if "can" in p and "what" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["can", "can't", "cannot", "swim", "speak", "drive", "play"]],
            "acceptableAnswers": ["They can swim."],
            "hintWrong": "Can / can't + действие.",
            "explain": "Умения персонажа.",
        }
    if "how many" in p or "how much" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludePattern": r"\d|one|two|three|many|much|some|few",
            "acceptableAnswers": ["There are three people."],
            "hintWrong": "Число или количество.",
            "explain": "Сколько.",
        }
    if "plural" in p or "irregular" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["children", "people", "men", "women", "feet", "teeth", "mice"]],
            "acceptableAnswers": ["children, people"],
            "hintWrong": "Неправильная форма мн.ч.",
            "explain": "Irregular plurals.",
        }
    vocab = _pick_vocab(lesson, 5)
    return {
        "prompt": prompt,
        "minWords": 4,
        "topicKeywords": vocab,
        "acceptableAnswers": _grammar_examples(lesson)[:2] or ["Answer about the material in English."],
        "hintWrong": "Ответ по материалу урока на английском.",
        "explain": "Опиши, что видел/слышал в материале.",
    }


def build_speaking_spec(task: str, lesson: dict) -> dict:
    t = task.lower()
    vocab = _pick_vocab(lesson, 8)
    base = {
        "task": task,
        "minWords": 8,
        "useSpeech": True,
        "topicKeywords": vocab,
        "mustIncludeAny": [vocab[:4]] if vocab else [["i", "my"]],
    }

    if "представь" in t or "introduce" in t:
        base.update({
            "mustIncludeAny": [
                ["my name is", "i'm", "i am", "from", "nice to meet"],
            ],
            "minWords": 10,
            "acceptableAnswers": [
                "Hello! My name is Anna. I'm from Russia. Nice to meet you.",
            ],
            "hintWrong": "Имя + страна + 2–3 предложения.",
        })
    elif "утр" in t or "morning" in t or "приветств" in t:
        base.update({
            "mustIncludeAny": [
                ["good morning", "good afternoon", "good evening", "hello", "hi"],
            ],
            "minWords": 8,
            "acceptableAnswers": ["Good morning! Hello! Good evening!"],
            "hintWrong": "Good morning / afternoon / evening.",
        })
    elif "how are you" in t:
        base.update({
            "mustIncludeAny": [["fine", "good", "how are you", "thanks"]],
            "acceptableAnswers": ["I'm fine, thanks. How are you?"],
            "hintWrong": "Ответ + How are you? в ответ.",
        })
    elif "предложен" in t or "sentences" in t or "предложени" in t:
        base.update({
            "minWords": 12,
            "mustIncludeAny": [vocab[:3]] if vocab else [["i"]],
            "hintWrong": f"Минимум {base['minWords']} слов, лексика урока.",
        })
    elif "вопрос" in t or "questions" in t:
        base.update({
            "minWords": 6,
            "mustIncludePattern": r"\?",
            "mustIncludeAny": [["do you", "are you", "can you", "what", "where", "how"]],
            "hintWrong": "Вопросы с Do/Are/Can/What…?",
        })
    else:
        base.update({
            "acceptableAnswers": _grammar_examples(lesson)[:1],
            "hintWrong": "Развёрнутый ответ по заданию на английском.",
        })
    return base


def build_context_drill(lesson: dict) -> list:
    """Typed gap-fill drills with exact answers from quiz."""
    drills = []
    quiz = lesson.get("quiz", [])
    for i, q in enumerate(quiz[:4]):
        parts = q["sentence"].split("___")
        before = parts[0].strip()
        after = parts[1].strip() if len(parts) > 1 else ""
        prompt = f"{before} ______ {after}".strip()
        drills.append({
            "id": i + 1,
            "prompt": prompt,
            "answer": q["answer"],
            "altAnswers": _alt_forms(q["answer"]),
            "hint": f"Подсказка: слово из урока «{lesson.get('topic', '')}».",
        })
    return drills


def _alt_forms(word: str) -> list:
    w = word.strip()
    alts = {w, w.lower(), w.capitalize()}
    if w.lower() == "don't":
        alts.add("do not")
    if w.lower() == "doesn't":
        alts.add("does not")
    if w.lower() == "can't":
        alts.add("cannot")
    return list(alts)


def build_theory_check(lesson: dict) -> list:
    """MC questions about lesson grammar."""
    g = lesson.get("grammar", {})
    title = g.get("title", lesson.get("title", ""))
    mistake = g.get("mistake", {})
    blocks = g.get("blocks", [])
    checks = []

    if mistake.get("wrong") and mistake.get("right"):
        checks.append({
            "question": "Какая форма правильная?",
            "options": [mistake["right"], mistake["wrong"]],
            "answer": mistake["right"],
        })

    if blocks:
        b = blocks[0]
        checks.append({
            "question": f"Пример по теме «{b['title']}»:",
            "options": [b["example"], "This example is wrong syntax."],
            "answer": b["example"],
        })

    formulas = g.get("formulas", [])
    if formulas:
        checks.append({
            "question": f"Какая формула относится к «{title}»?",
            "options": [formulas[0], "Subject + V2 + object (Past only)"],
            "answer": formulas[0],
        })

    quiz = lesson.get("quiz", [])
    if quiz and len(checks) < 3:
        q = quiz[0]
        wrong = next((o for o in q["options"] if o != q["answer"]), q["options"][0])
        checks.append({
            "question": q["sentence"].replace("___", "______"),
            "options": [q["answer"], wrong],
            "answer": q["answer"],
        })

    return checks[:3]
