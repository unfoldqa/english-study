#!/usr/bin/env python3
"""Helpers for unique sentences across lesson blocks."""
import re
from typing import Optional


def complete_quiz_sentence(q: dict) -> str:
    return q.get("sentence", "").replace("___", q.get("answer", ""))


def _norm(s: str) -> str:
    s = (s or "").lower().strip()
    s = re.sub(r"[^\w\s]", "", s)
    return re.sub(r"\s+", " ", s)


def collect_sentence_pool(
    lesson: dict,
    *,
    skip_quiz_gaps: bool = False,
    skip_pronunciation: bool = False,
    skip_grammar_blocks: bool = False,
) -> list[str]:
    """Unique sentences from lesson sources (order preserved)."""
    seen = set()
    pool = []
    block_examples = {
        _norm(b.get("example", ""))
        for b in lesson.get("grammar", {}).get("blocks", [])
    }

    def add(text: str):
        text = (text or "").strip()
        if len(text) < 6:
            return
        key = _norm(text)
        if skip_grammar_blocks and key in block_examples:
            return
        if key in seen:
            return
        seen.add(key)
        pool.append(text)

    g = lesson.get("grammar", {})
    if not skip_grammar_blocks:
        for b in g.get("blocks", []):
            add(b.get("example", ""))
    for group in g.get("extraExamples", []) or []:
        for item in group.get("items", []):
            add(item)
    mistake = g.get("mistake", {})
    add(mistake.get("right", ""))
    if not skip_pronunciation:
        for p in lesson.get("pronunciation", []):
            add(p.get("phrase", ""))
    if not skip_quiz_gaps:
        for q in lesson.get("quiz", []):
            add(complete_quiz_sentence(q))
    return pool


def _word_in_sentence(word: str, sentence: str) -> bool:
    return re.search(rf"\b{re.escape(word.lower())}\b", sentence.lower()) is not None


def _topic_phrase(topic: str) -> str:
    t = (topic or "this topic").strip()
    if any("\u0400" <= c <= "\u04FF" for c in t):
        return "this lesson"
    return t.lower()


def make_vocab_example(word: str, ru: str, lesson: dict, index: int, used: set[str]) -> str:
    """One contextual example sentence for a vocab item."""
    topic = _topic_phrase(lesson.get("topic", ""))
    lid = lesson.get("id", 0)
    block_examples = {
        _norm(b.get("example", ""))
        for b in lesson.get("grammar", {}).get("blocks", [])
    }
    pron_phrases = {
        _norm(p.get("phrase", ""))
        for p in lesson.get("pronunciation", [])
    }
    quiz_first = {
        _norm(complete_quiz_sentence(q))
        for q in lesson.get("quiz", [])[:4]
    }
    skip_pool = block_examples | pron_phrases | quiz_first
    pool = [
        s for s in collect_sentence_pool(
            lesson,
            skip_pronunciation=True,
            skip_grammar_blocks=True,
            skip_quiz_gaps=True,
        )
        if _norm(s) not in skip_pool
    ]

    for sent in pool:
        if _norm(sent) in block_examples:
            continue
        if _word_in_sentence(word, sent) and _norm(sent) not in used:
            return sent

    templates = [
        f"I often use «{word}» when I talk about {topic}.",
        f"«{word}» is a key word in this lesson on {topic}.",
        f"She asked me about «{word}» during practice.",
        f"We discussed «{word}» in class today.",
        f"My note says «{word}» means «{ru}».",
        f"I heard «{word}» in the listening exercise.",
        f"Can you make a sentence with «{word}»?",
        f"The teacher wrote «{word}» on the board.",
        f"I need to remember «{word}» for homework.",
        f"«{word}» fits well in a sentence about {topic}.",
        f"He repeated «{word}» three times.",
        f"In our dialogue, «{word}» appeared twice.",
        f"I looked up «{word}» in the dictionary.",
        f"«{word}» helped me understand {topic}.",
        f"Let's practise «{word}» in a full sentence.",
        f"I used «{word}» in my written answer.",
        f"«{word}» was new for me this week.",
        f"My partner corrected my use of «{word}».",
        f"I linked «{word}» to other words I know.",
        f"The example with «{word}» was clear.",
    ]
    for offset in range(len(templates)):
        candidate = templates[(lid * 13 + index * 7 + offset) % len(templates)]
        if _norm(candidate) not in used:
            return candidate
    return f"Example: {word}."


def build_flashcards(lesson: dict) -> list[dict]:
    """Flashcards with unique example sentences per card."""
    vocab = lesson.get("vocab", [])
    if not vocab:
        return []

    used_examples: set[str] = set()
    cards = []

    for i, v in enumerate(vocab[:10]):
        en = v["en"] if isinstance(v, dict) else v
        ru = v["ru"] if isinstance(v, dict) else ""
        ex = make_vocab_example(en, ru, lesson, i, used_examples)
        used_examples.add(_norm(ex))
        cards.append({"word": en, "trans": ru, "example": ex})

    extra_words = [
        ("practice", "практика"),
        ("review", "повторение"),
        ("sentence", "предложение"),
        ("grammar", "грамматика"),
        ("vocabulary", "лексика"),
        ("speaking", "говорение"),
        ("listening", "аудирование"),
        ("writing", "письмо"),
        ("reading", "чтение"),
        ("homework", "домашка"),
    ]
    wi = 0
    while len(cards) < 20 and (wi < len(extra_words) or vocab):
        if wi < len(extra_words):
            en, ru = extra_words[wi]
            wi += 1
        else:
            v = vocab[len(cards) % len(vocab)]
            en, ru = v["en"], v["ru"]
        ex = make_vocab_example(en, ru, lesson, len(cards), used_examples)
        if any(c["word"] == en and c["example"] == ex for c in cards):
            continue
        used_examples.add(_norm(ex))
        cards.append({"word": en, "trans": ru, "example": ex})

    return cards[:20]


def _gap_candidates(sentence: str) -> list[tuple[str, str]]:
    """Return (gapped_sentence, answer) pairs from a full sentence."""
    words = sentence.replace("?", "").replace("!", "").replace(".", "").split()
    skip = {
        "i", "you", "he", "she", "it", "we", "they", "a", "an", "the", "is", "are",
        "am", "was", "were", "be", "to", "of", "in", "on", "at", "my", "your", "his",
        "her", "our", "their", "and", "or", "but", "do", "does", "did", "have", "has",
        "had", "not", "no", "yes", "so", "if", "as", "by", "for", "with",
    }
    pairs = []
    for i, w in enumerate(words):
        clean = re.sub(r"[^\w'-]", "", w)
        if len(clean) < 3 or clean.lower() in skip:
            continue
        masked = words[:]
        masked[i] = "______"
        pairs.append((" ".join(masked), clean))
    return pairs


def _gap_alt_answers(answer: str) -> list:
    w = answer.strip()
    alts = {w, w.lower(), w.capitalize(), w.upper()}
    key = w.lower().replace("'", "'")
    extra = {
        "i'm": ["I am", "im", "IM"],
        "i am": ["I'm", "im"],
        "don't": ["do not", "dont"],
        "doesn't": ["does not", "doesnt"],
        "can't": ["cannot", "cant"],
        "won't": ["will not", "wont"],
    }
    for variant in extra.get(key, []):
        alts.add(variant)
    return list(alts)


def allocate_practice_sources(lesson: dict) -> list[str]:
    """Unique practice sentences excluding main quiz items."""
    quiz_sentences = {_norm(complete_quiz_sentence(q)) for q in lesson.get("quiz", [])[:4]}
    raw = []
    g = lesson.get("grammar", {})
    for group in g.get("extraExamples", []) or []:
        raw.extend(group.get("items", []))
    for p in lesson.get("pronunciation", []):
        raw.append(p.get("phrase", ""))
    for q in lesson.get("quiz", [])[4:]:
        raw.append(complete_quiz_sentence(q))
    mistake = g.get("mistake", {})
    if mistake.get("right"):
        raw.append(mistake["right"])

    seen = set()
    sources = []
    for sent in raw:
        sent = (sent or "").strip()
        if not sent or _norm(sent) in quiz_sentences or _norm(sent) in seen:
            continue
        seen.add(_norm(sent))
        sources.append(sent)
    return sources


def _gap_to_quiz_item(sent: str, lesson: dict) -> Optional[dict]:
    quiz_answers = {_norm(q.get("answer", "")) for q in lesson.get("quiz", [])}
    for gapped, answer in _gap_candidates(sent):
        if _norm(answer) in quiz_answers:
            continue
        wrong = answer + "s" if not answer.endswith("s") else answer[:-1]
        if wrong == answer or _norm(wrong) == _norm(answer):
            wrong = "do"
        return {
            "sentence": gapped.replace("______", "___"),
            "options": [answer, wrong],
            "answer": answer,
        }
    return None


def build_context_drill_from_lesson(lesson: dict, sources: Optional[list] = None) -> list[dict]:
    """Gap-fill drills from sources not used in grammarCheck."""
    if sources is None:
        all_sources = allocate_practice_sources(lesson)
        sources = all_sources[5:10]

    drills = []
    used_answers = set()
    blocked_answers = {_norm(q.get("answer", "")) for q in lesson.get("quiz", [])[:4]}
    for sent in sources:
        for gapped, answer in _gap_candidates(sent):
            if _norm(answer) in blocked_answers or _norm(answer) in used_answers:
                continue
            if "______" not in gapped:
                continue
            drills.append({
                "id": len(drills) + 1,
                "prompt": gapped.strip(),
                "answer": answer,
                "altAnswers": _gap_alt_answers(answer),
                "hint": f"Подсказка: тема «{lesson.get('topic', '')}».",
            })
            used_answers.add(_norm(answer))
            break
        if len(drills) >= 4:
            break
    return drills


def unique_extra_examples(blocks: list, extra_examples=None, pronunciation=None) -> Optional[list]:
    """extraExamples that do not repeat grammar block examples."""
    block_examples = {_norm(b.get("example", "")) for b in blocks}
    if extra_examples:
        cleaned = []
        for group in extra_examples:
            items = [i for i in group.get("items", []) if _norm(i) not in block_examples]
            if items:
                cleaned.append({**group, "items": items})
        if cleaned:
            return cleaned
    return None


def build_grammar_check(lesson: dict, sources: Optional[list] = None) -> list:
    """Grammar check items — not the same sentences as quiz[:4]."""
    if sources is None:
        sources = allocate_practice_sources(lesson)

    checks = []
    for sent in sources:
        if len(checks) >= 4:
            break
        item = _gap_to_quiz_item(sent, lesson)
        if item:
            checks.append(item)

    return checks[:4]
