#!/usr/bin/env python3
"""Add theory, vocabQuiz and polish validation fields in curriculum.js."""
import json
import os
import re

DIR = os.path.dirname(os.path.abspath(__file__))
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
    "B2": "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.",
}


def load_curriculum():
    raw = open(CUR_PATH, encoding="utf-8").read()
    data = json.loads(raw.split("=", 1)[1].rstrip(";\n"))
    return data


def save_curriculum(data):
    with open(CUR_PATH, "w", encoding="utf-8") as f:
        f.write("const CURRICULUM = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n")


def base_keywords(lesson):
    kws = set()
    for v in lesson.get("vocab", []):
        for part in re.split(r"[\s/]+", v["en"].lower()):
            if len(part) > 1:
                kws.add(part)
    g = lesson.get("grammar", {})
    for block in g.get("blocks", []):
        for word in re.findall(r"[a-zA-Z']+", block.get("example", "").lower()):
            if len(word) > 2:
                kws.add(word)
    for w in ("i", "my", "we", "the", "and", "is", "are", "was", "have", "has"):
        kws.add(w)
    return sorted(kws)[:14]


def as_prompt(item, keywords):
    if isinstance(item, str):
        return {"prompt": item, "keywords": keywords, "minWords": 3, "sample": ""}
    item = dict(item)
    item.setdefault("keywords", keywords)
    item.setdefault("minWords", 3)
    return item


def as_speaking(item, keywords):
    if isinstance(item, str):
        return {
            "task": item,
            "keywords": keywords,
            "minWords": 7,
            "sample": "",
            "useSpeech": True,
        }
    item = dict(item)
    item.setdefault("keywords", keywords)
    item.setdefault("minWords", 7)
    item.setdefault("useSpeech", True)
    return item


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
        reading_parts.append(f"\n### {b['title']}\n{b['desc']}\n\n*Пример:* {b['example']}")
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


def enrich_lesson(lesson):
    keywords = base_keywords(lesson)
    lesson["warmup"] = [as_prompt(w, keywords) for w in lesson.get("warmup", [])]
    lesson["cultureCheck"] = [as_prompt(c, keywords) for c in lesson.get("cultureCheck", [])]
    lesson["speaking"] = [as_speaking(s, keywords) for s in lesson.get("speaking", [])]

    for p in lesson.get("pronunciation", []):
        p.setdefault("expected", p.get("phrase", ""))

    if not lesson.get("grammarCheck"):
        lesson["grammarCheck"] = lesson.get("quiz", [])[:2]

    lesson["theory"] = build_theory(lesson)
    lesson["vocabQuiz"] = build_vocab_quiz(lesson.get("vocab", []))
    lesson["duration"] = lesson.get("duration", "25 мин").replace("20 мин", "25 мин")
    return lesson


def main():
    data = load_curriculum()
    data = [enrich_lesson(dict(l)) for l in data]
    save_curriculum(data)
    print(f"Enriched {len(data)} lessons → {CUR_PATH}")


if __name__ == "__main__":
    main()
