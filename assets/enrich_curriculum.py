#!/usr/bin/env python3
"""Add theory, validation specs, extra blocks to curriculum.js."""
import json
import os
import sys

DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, DIR)

from answer_validator import (
    build_context_drill,
    build_culture_spec,
    build_speaking_spec,
    build_theory_check,
    build_warmup_spec,
)
from content_utils import allocate_practice_sources, build_grammar_check

CUR_PATH = os.path.join(DIR, "curriculum.js")

CEFR = {
    "A1": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
    "A2": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
    "B1": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
    "B2": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
}

PEDAGOGY = {
    "A1": "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.",
    "A2": "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.",
    "B1": "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.",
    "B2": "Academic English (Swales): учите не только правило, но и регистр — где фраза уместен в речи и письме.",
}

COURSE_META = {
    "modules": 64,
    "hoursMin": 150,
    "hoursMax": 200,
    "hoursTarget": 192,
    "interactiveHours": 43,
    "homeworkHours": 149,
    "weeksAt5h": 38,
    "cefrNote": "По CEFR (Cambridge/Oxford) путь A1→B2 — примерно 500–600 академических часов в вузе; интенсивный курс с самостоятельной работой — 150–200 ч.",
    "b1Milestone": "Модули 33–48: при прохождении с домашкой — уровень B1 (Cambridge Preliminary B1 / Oxford B1). Ключевые темы: модали, 1–3 условные, пассив, косвенная речь, relative clauses, phrasal verbs, narrative tenses.",
    "levels": {
        "A1": {"modules": 16, "hours": 48, "cefr": "90–100 ч в академической программе"},
        "A2": {"modules": 16, "hours": 48, "cefr": "+90–100 ч"},
        "B1": {"modules": 16, "hours": 48, "cefr": "+100–120 ч"},
        "B2": {"modules": 16, "hours": 48, "cefr": "+100–120 ч"},
    },
}


def load_curriculum():
    raw = open(CUR_PATH, encoding="utf-8").read()
    if raw.startswith("const COURSE_META"):
        raw = raw.split("\n\n", 1)[1]
    return json.loads(raw.split("=", 1)[1].rstrip(";\n"))


def save_curriculum(data, meta=None):
    with open(CUR_PATH, "w", encoding="utf-8") as f:
        if meta:
            f.write("const COURSE_META = ")
            json.dump(meta, f, ensure_ascii=False, indent=2)
            f.write(";\n\n")
        f.write("const CURRICULUM = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n")


def build_theory(lesson):
    g = lesson.get("grammar", {})
    blocks = g.get("blocks", [])
    formulas = g.get("formulas", [])
    reading_parts = [
        f"**{lesson['titleRu']}** — {lesson['description']}",
        "",
        PEDAGOGY.get(lesson["level"], PEDAGOGY["B1"]),
        "",
        CEFR.get(lesson["level"], ""),
    ]
    for b in blocks:
        reading_parts.append(f"\n### {b['title']}\n{b['desc']}")
    if formulas:
        reading_parts.append("\n### Формулы\n" + "\n".join(f"- `{f}`" for f in formulas))
    mistake = g.get("mistake")
    if mistake:
        reading_parts.append(
            f"\n### Типичная ошибка\n❌ {mistake['wrong']}\n✅ {mistake['right']}"
        )
    key_points = [b["title"] + ": " + b["desc"][:80] for b in blocks[:4]]
    if formulas:
        key_points.append("Запомни формулы: " + "; ".join(formulas[:3]))
    key_points.append(PEDAGOGY[lesson["level"]][:90] + "…")
    return {
        "intro": lesson["description"],
        "reading": "\n".join(reading_parts),
        "keyPoints": key_points[:5],
        "cefr": CEFR.get(lesson["level"], ""),
        "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned",
    }


def build_homework(lesson):
    culture = lesson.get("culture", {})
    watch = culture.get("watch", ["English podcast for learners"])[0]
    read = culture.get("read", ["graded reader at your level"])[0]
    listen = culture.get("listen", ["English song with lyrics"])[0]
    topic = lesson.get("topic", "the lesson topic")
    return [
        {
            "task": f"Прочитайте материал: {read}. Выпишите 10 новых слов и 3 полезные фразы.",
            "minutes": 35,
            "type": "reading",
        },
        {
            "task": f"Посмотрите или послушайте: {watch} / {listen}. Запишите 5 услышанных конструкций по теме «{topic}».",
            "minutes": 30,
            "type": "listening",
        },
        {
            "task": "Напишите 8–10 предложений по теме модуля (в тетради или файле). Используйте грамматику и лексику урока.",
            "minutes": 25,
            "type": "writing",
        },
        {
            "task": "Повторите карточки модуля вслух 2 раза. Добавьте сложные слова в Anki/Quizlet.",
            "minutes": 20,
            "type": "srs",
        },
        {
            "task": "15 минут говорите только по-английски: опишите свой день, тему модуля или ответьте на speaking-задания вслух без подсказок.",
            "minutes": 30,
            "type": "speaking",
        },
    ]


def build_study_time():
    return {
        "interactiveMin": 50,
        "homeworkMin": 140,
        "totalMin": 190,
        "sessions": [
            {
                "title": "Сессия 1 — на платформе",
                "minutes": 50,
                "desc": "Теория, проверка понимания, лексика, грамматика, контекст, тесты, произношение, говорение.",
            },
            {
                "title": "Сессия 2 — самостоятельно",
                "minutes": 60,
                "desc": "Чтение и аудирование из блока «Культура» + конспект новых слов.",
            },
            {
                "title": "Сессия 3 — закрепление",
                "minutes": 80,
                "desc": "Письмо, карточки (SRS), 15 минут устной практики без экрана.",
            },
        ],
    }


def build_vocab_quiz(vocab):
    import random

    quiz = []
    words = vocab[:10]
    all_ru = [v["ru"] for v in vocab]
    for v in words[:5]:
        opts = {v["ru"]}
        pool = [r for r in all_ru if r != v["ru"]]
        random.shuffle(pool)
        opts.update(pool[:3])
        options = list(opts)
        random.shuffle(options)
        quiz.append(
            {
                "question": f"What is «{v['en']}»?",
                "options": options,
                "answer": v["ru"],
            }
        )
    for v in words[5:8]:
        quiz.append(
            {
                "type": "gap",
                "sentence": f"The word «{v['ru']}» in English is ___.",
                "answer": v["en"],
                "hint": v["en"][0] + "…",
            }
        )
    return quiz


def _raw_prompts(items):
    out = []
    for item in items:
        if isinstance(item, str):
            out.append(item)
        elif isinstance(item, dict):
            out.append(item.get("prompt") or item.get("task") or "")
        else:
            out.append(str(item))
    return [p for p in out if p]


def enrich_lesson(lesson):
    lesson = dict(lesson)

    raw_warmup = _raw_prompts(lesson.get("warmup", []))
    lesson["warmup"] = [build_warmup_spec(p, lesson) for p in raw_warmup]

    raw_culture = _raw_prompts(lesson.get("cultureCheck", []))
    lesson["cultureCheck"] = [build_culture_spec(p, lesson) for p in raw_culture]

    raw_speaking = lesson.get("speaking", [])
    speaking_tasks = []
    for s in raw_speaking:
        task = s if isinstance(s, str) else s.get("task", "")
        if task:
            speaking_tasks.append(build_speaking_spec(task, lesson))
    lesson["speaking"] = speaking_tasks

    for p in lesson.get("pronunciation", []):
        p.setdefault("expected", p.get("phrase", ""))

    practice_sources = allocate_practice_sources(lesson)
    split = min(4, max(1, len(practice_sources) - 3))
    lesson["grammarCheck"] = build_grammar_check(lesson, practice_sources[:split])
    lesson["theoryCheck"] = build_theory_check(lesson)
    lesson["contextDrill"] = build_context_drill(lesson, practice_sources[split:])
    lesson["theory"] = build_theory(lesson)
    lesson["vocabQuiz"] = build_vocab_quiz(lesson.get("vocab", []))
    lesson["homework"] = build_homework(lesson)
    lesson["studyTime"] = build_study_time()
    lesson["duration"] = "~3 ч · модуль"
    return lesson


def main():
    data = load_curriculum()
    data = [enrich_lesson(l) for l in data]
    save_curriculum(data, meta=COURSE_META)
    w1 = data[0]["warmup"]
    print(f"Enriched {len(data)} modules → {CUR_PATH}")
    print(f"  Lesson 1 warmup samples:")
    for w in w1:
        print(f"    Q: {w['prompt'][:40]}…")
        print(f"    A: {w['acceptableAnswers'][0]}")


if __name__ == "__main__":
    main()
