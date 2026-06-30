#!/usr/bin/env python3
"""Polish curriculum: fix filler modules, core issues, flashcards; strip enrich; re-enrich."""
import json
import os
import subprocess
import sys

DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, DIR)

from filler_lessons import FILLER, FILLER_IDS

CUR_PATH = os.path.join(DIR, "curriculum.js")

ENRICHED_KEYS = (
    "theory",
    "vocabQuiz",
    "homework",
    "studyTime",
    "grammarCheck",
    "theoryCheck",
    "contextDrill",
)

VOCAB_FIXES = {
    1: {"nice": "приятно (в знакомстве)", "meet": "встречать(ся)"},
    3: {"spell": "писать / называть по буквам"},
    4: {"any": "какой-либо (в вопросах)"},
    6: {"any": "какой-либо (в вопросах)"},
    8: {"half past": "половина (часа)", "quarter": "четверть (часа)"},
}

CORE_WARMUP = {
    22: [
        "Is your city bigger than mine?",
        "Who is the tallest person in your family?",
        "Is this book more interesting than the last one you read?",
    ],
    24: ["Were you born in the summer?", "What do you do on Sundays?", "When do you wake up?"],
    39: [
        "Do you know anyone who speaks Chinese?",
        "What's the book that you recommended?",
        "Is there a café where we can sit?",
    ],
    50: [
        "Do you make or take a decision? (make)",
        "What does 'break the ice' mean?",
        "Have you ever run out of time?",
    ],
    54: [
        "Not only did he win, but he also broke the record.",
        "Never have I seen such a beautiful view.",
        "Can you use a cleft sentence to emphasise the subject?",
    ],
    55: [
        "Which B2 exam are you preparing for?",
        "How do you manage time in the reading section?",
        "Which grammar topics do you find hardest?",
    ],
}

CORE_CULTURE = {
    2: {
        "watch": ["Peppa Pig — episode 1 (daily routines)"],
        "listen": ["Pharrell Williams — Happy"],
        "read": ["Oxford Bookworms Starter — The Adventures of Tom Sawyer"],
    },
    4: {
        "watch": ["Mr. Bean — episode 1 (The Return of Mr. Bean)"],
        "listen": ["Super Simple Songs — One Little Finger"],
        "read": ["Oxford Picture Dictionary — beginner edition"],
    },
    6: {
        "watch": ["Planet Earth II — Cities (describing places)"],
        "listen": ["Louis Armstrong — What a Wonderful World"],
        "read": ["Lonely Planet — Easy English city guides"],
    },
    7: {
        "watch": ["Britain's Got Talent — season 1 auditions"],
        "listen": ["Survivor — Eye of the Tiger"],
        "read": ["Cambridge English — hobbies word list A1"],
    },
}

CORE_CULTURE_CHECK = {
    3: [
        "What is the person's job?",
        "Where do they live?",
        "How old are they?",
        "Who is their best friend?",
        "How do they spell their name?",
    ],
    19: [
        "What happens to the main character in the story?",
        "Where does the story take place?",
        "What problem does the character face?",
        "How does the chapter end?",
        "What did the author describe in detail?",
    ],
    21: [
        "What predictions do characters make in the story?",
        "What clues suggest the ending?",
        "What might happen next in the plot?",
        "Who is most likely to succeed?",
        "What surprised the audience in the scene?",
    ],
    55: [
        "What exam strategies does the speaker mention?",
        "What is skim vs scan?",
        "How should you structure an essay?",
        "Which grammar topic is reviewed?",
        "What time-management tip is given?",
    ],
}


def load_curriculum():
    raw = open(CUR_PATH, encoding="utf-8").read()
    meta = None
    if raw.startswith("const COURSE_META"):
        parts = raw.split("\n\n", 1)
        meta = json.loads(parts[0].split("=", 1)[1].rstrip(";\n"))
        raw = parts[1]
    data = json.loads(raw.split("=", 1)[1].rstrip(";\n"))
    return data, meta


def _raw_prompts(items):
    out = []
    for item in items or []:
        if isinstance(item, str):
            out.append(item)
        elif isinstance(item, dict):
            out.append(item.get("prompt") or item.get("task") or "")
    return [p for p in out if p]


def strip_enriched(lesson):
    for key in ENRICHED_KEYS:
        lesson.pop(key, None)
    lesson["warmup"] = _raw_prompts(lesson.get("warmup", []))
    lesson["cultureCheck"] = _raw_prompts(lesson.get("cultureCheck", []))
    speaking = []
    for s in lesson.get("speaking", []):
        if isinstance(s, str):
            speaking.append(s)
        elif isinstance(s, dict):
            speaking.append(s.get("task", ""))
    lesson["speaking"] = [t for t in speaking if t]
    for p in lesson.get("pronunciation", []):
        p.pop("expected", None)
    return lesson


def build_flashcards(lesson):
    vocab = lesson.get("vocab", [])
    examples = []
    g = lesson.get("grammar", {})
    for block in g.get("blocks", []):
        examples.append(block.get("example", ""))
    for group in g.get("extraExamples", []):
        examples.extend(group.get("items", []))
    examples = [e for e in examples if e]

    cards = []
    for i, v in enumerate(vocab[:10]):
        en = v["en"] if isinstance(v, dict) else v
        ru = v["ru"] if isinstance(v, dict) else ""
        ex = examples[i % len(examples)] if examples else f"This is an example with «{en}»."
        cards.append({"word": en, "trans": ru, "example": ex})

    while len(cards) < 20 and vocab:
        v = vocab[len(cards) % len(vocab)]
        en, ru = v["en"], v["ru"]
        ex = examples[len(cards) % len(examples)] if examples else f"Another example: {en}."
        if not any(c["word"] == en and c["example"] == ex for c in cards):
            cards.append({"word": en, "trans": ru, "example": ex})
        else:
            break
    return cards[:20]


def fix_vocab(lesson):
    fixes = VOCAB_FIXES.get(lesson["id"], {})
    for v in lesson.get("vocab", []):
        if v["en"] in fixes:
            v["ru"] = fixes[v["en"]]
    return lesson


def apply_core_patches(lesson):
    lid = lesson["id"]
    if lid in CORE_WARMUP:
        lesson["warmup"] = CORE_WARMUP[lid]
    if lid in CORE_CULTURE:
        lesson["culture"] = CORE_CULTURE[lid]
    if lid in CORE_CULTURE_CHECK:
        lesson["cultureCheck"] = CORE_CULTURE_CHECK[lid]
    if lid == 21:
        for v in lesson.get("vocab", []):
            if v["en"] == "spontaneous" and "спont" in v.get("ru", ""):
                v["ru"] = "спонтанный"
        for fc in lesson.get("flashcards", []):
            if fc.get("word") == "spontaneous":
                fc["trans"] = "спонтанный"
    if lid == 50:
        q = lesson.get("quiz", [])
        for item in q:
            if "appreciate" in item.get("sentence", ""):
                opts = item.get("options", [])
                if "appreciate it" in opts:
                    item["options"] = [o for o in opts if o != "appreciate it"]
    return lesson


def apply_filler(lesson):
    patch = FILLER.get(lesson["id"])
    if not patch:
        return lesson
    title_ru_map = {
        9: "Семья", 10: "Еда и напитки", 11: "Цвета и одежда", 12: "Погода",
        13: "Покупки", 14: "Направления", 15: "Хобби", 16: "Здоровье",
        25: "Пассивный залог (введение)", 26: "Герундий и инфинитив",
        27: "Разделительные вопросы", 28: "Too и enough", 29: "First conditional",
        30: "Used to", 31: "Возвратные местоимения", 32: "Путешествия и отели",
        41: "Second conditional", 42: "Third conditional", 43: "Wish и if only",
        44: "Causative", 45: "Пассив (все времена)", 46: "Narrative tenses",
        47: "Советы (should/ought)", 48: "Технологии", 57: "Mixed conditionals",
        58: "Subjunctive", 59: "Critical writing", 60: "Modals (deduction)",
        61: "Media English", 62: "Переговоры", 63: "Презентации", 64: "Итог B2",
    }
    lesson.update(patch)
    lesson["titleRu"] = title_ru_map.get(lesson["id"], lesson.get("titleRu", lesson["title"]))
    lesson["flashcards"] = build_flashcards(lesson)
    return lesson


def polish_lesson(lesson):
    lesson = strip_enriched(lesson)
    lesson = fix_vocab(lesson)
    lesson = apply_core_patches(lesson)
    if lesson["id"] in FILLER_IDS:
        lesson = apply_filler(lesson)
    elif not lesson.get("flashcards") or any(
        c.get("example") in ("Practice makes progress.",) or "I use '" in c.get("example", "")
        for c in lesson.get("flashcards", [])
    ):
        lesson["flashcards"] = build_flashcards(lesson)
    return lesson


def main():
    data, meta = load_curriculum()
    data = [polish_lesson(dict(l)) for l in data]
    assert len(FILLER) == 32, f"Expected 32 filler lessons, got {len(FILLER)}"

    # Save stripped curriculum for enrich
    with open(CUR_PATH, "w", encoding="utf-8") as f:
        if meta:
            f.write("const COURSE_META = ")
            json.dump(meta, f, ensure_ascii=False, indent=2)
            f.write(";\n\n")
        f.write("const CURRICULUM = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    subprocess.run([sys.executable, os.path.join(DIR, "enrich_curriculum.py")], check=True)

    # QA
    raw = open(CUR_PATH, encoding="utf-8").read().split("const CURRICULUM = ", 1)[1]
    out = json.loads(raw.rstrip(";\n"))
    bad_ipa = sum(1 for l in out for p in l.get("pronunciation", []) if p.get("ipa") == "/ˈfɹeɪz/")
    bad_mistake = sum(
        1 for l in out if l.get("grammar", {}).get("mistake", {}).get("wrong") == "He go to work."
        and l["id"] not in (5,)
    )
    cyrillic_prompts = sum(
        1 for l in out for w in l.get("warmup", [])
        if isinstance(w, dict) and any("\u0400" <= c <= "\u04FF" for c in w.get("prompt", ""))
    )
    print(f"Polished {len(out)} modules")
    print(f"  Placeholder IPA left: {bad_ipa}")
    print(f"  Wrong generic mistakes: {bad_mistake}")
    print(f"  Cyrillic in warmup prompts: {cyrillic_prompts}")
    w9 = out[8]["warmup"][0]
    print(f"  L9 warmup sample answer: {w9.get('acceptableAnswers', ['?'])[0]}")


if __name__ == "__main__":
    main()
