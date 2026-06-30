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

    # ── Specific patterns (before generic handlers) ──

    if "how many people" in p or "people in your family" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludePattern": r"\d|one|two|three|four|five|six|seven|eight|nine|ten",
            "mustIncludeAny": [["there are", "there is", "i have", "people", "family", "in my"]],
            "acceptableAnswers": ["There are four people in my family.", "I have three people in my family."],
            "hintWrong": "Число + people/family: There are four people…",
            "explain": "How many people…? → число + people in my family.",
        }

    if "what colour" in p or "what color" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [
                ["red", "blue", "black", "white", "green", "yellow", "brown", "grey", "gray", "pink", "colour", "color"],
            ],
            "acceptableAnswers": ["My bag is blue.", "It's black.", "My favourite colour is red."],
            "hintWrong": "Назови цвет: It's blue / My bag is black.",
            "explain": "What colour is…? → It is + colour.",
        }

    if "weather like" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["sunny", "rainy", "cold", "hot", "windy", "cloudy", "snow", "it's", "it is"]],
            "acceptableAnswers": ["It's sunny today.", "It's cold and windy.", "It's raining."],
            "hintWrong": "It's + погода: sunny / rainy / cold…",
            "explain": "What's the weather like? → It's + adjective.",
        }

    if "eat for breakfast" in p or "eat for lunch" in p:
        return {
            "prompt": prompt,
            "minWords": 4,
            "mustIncludeAny": [["i", "usually", "have", "eat", "eggs", "toast", "coffee", "cereal", "bread"]],
            "acceptableAnswers": ["I usually have eggs and toast.", "I eat cereal for breakfast."],
            "hintWrong": "I usually have/eat + еда.",
            "explain": "What do you eat…? → I have/eat + food.",
        }

    if "favourite dish" in p or "favorite dish" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["favourite", "favorite", "like", "love", "pizza", "pasta", "soup", "chicken", "rice"]],
            "acceptableAnswers": ["My favourite dish is pasta.", "I love pizza."],
            "hintWrong": "My favourite dish is… / I love…",
            "explain": "Назови любимое блюдо.",
        }

    if "tea or coffee" in p or "card or cash" in p or "pay by card" in p or "cash or" in p:
        return {
            "prompt": prompt,
            "minWords": 2,
            "mustIncludeAny": [["tea", "coffee", "card", "cash", "prefer", "usually", "both"]],
            "acceptableAnswers": ["I prefer tea.", "I usually pay by card.", "Cash, please."],
            "hintWrong": "Выбери: tea/coffee или card/cash.",
            "explain": "Ответь, что предпочитаешь.",
        }

    if "where do your parents" in p:
        return {
            "prompt": prompt,
            "minWords": 4,
            "mustIncludeAny": [["parents", "live", "in", "moscow", "city", "country", "home"]],
            "acceptableAnswers": ["My parents live in Moscow.", "They live in the countryside."],
            "hintWrong": "My parents live in + место.",
            "explain": "Where do your parents live? → My parents live in…",
        }

    if "where do you usually go shopping" in p or "where do you shop" in p:
        return {
            "prompt": prompt,
            "minWords": 4,
            "mustIncludeAny": [["i shop", "i go", "supermarket", "mall", "online", "market", "store"]],
            "acceptableAnswers": ["I usually shop at the supermarket.", "I go to the shopping mall."],
            "hintWrong": "I shop at… / I go to…",
            "explain": "Where do you shop? → место покупок.",
        }

    if "free time" in p or "in your free time" in p:
        return {
            "prompt": prompt,
            "minWords": 4,
            "mustIncludeAny": [["i", "read", "play", "watch", "listen", "sport", "music", "relax", "enjoy"]],
            "acceptableAnswers": ["In my free time I read books.", "I play football and watch films."],
            "hintWrong": "In my free time I + hobby.",
            "explain": "What do you do in your free time? → хобби.",
        }

    if "feel today" in p or "when you are ill" in p or "when you feel ill" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["fine", "well", "good", "tired", "ill", "sick", "headache", "doctor", "better", "don't feel"]],
            "acceptableAnswers": ["I don't feel well today.", "I have a headache.", "I feel fine, thanks."],
            "hintWrong": "I feel… / I have a headache / I don't feel well.",
            "explain": "Опиши самочувствие.",
        }

    if "bigger than" in p or "more interesting" in p or "taller" in p:
        return {
            "prompt": prompt,
            "minWords": 4,
            "mustIncludeAny": [["bigger", "smaller", "taller", "more", "less", "than", "yes", "no", "think"]],
            "acceptableAnswers": ["Yes, my city is bigger than yours.", "I think this book is more interesting."],
            "hintWrong": "Сравни: bigger than / more interesting than.",
            "explain": "Ответь сравнением с than.",
        }

    if "what does" in p and "mean" in p:
        return {
            "prompt": prompt,
            "minWords": 4,
            "mustIncludeAny": [["means", "mean", "start", "conversation", "ice", "idiom", "to", "it"]],
            "acceptableAnswers": ["It means to start a conversation.", "Break the ice means to make people feel comfortable."],
            "hintWrong": "It means… + объяснение значения.",
            "explain": "What does X mean? → It means…",
        }

    if "make or" in p and "decision" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["make", "take", "decision", "make a decision"]],
            "mustNotInclude": ["yes, i do", "no, i don't"],
            "acceptableAnswers": ["You make a decision.", "We make decisions, not do decisions."],
            "hintWrong": "You make a decision (не do a decision).",
            "explain": "Collocation: make a decision.",
        }

    if "b2 exam" in p or "which exam" in p:
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludeAny": [["fce", "ielts", "cambridge", "toefl", "exam", "preparing", "pet", "cae"]],
            "acceptableAnswers": ["I'm preparing for FCE.", "I'm taking IELTS.", "Cambridge B2 First."],
            "hintWrong": "Назови экзамен: FCE / IELTS / Cambridge B2.",
            "explain": "Which B2 exam…? → название экзамена.",
        }

    if "if it rains" in p or "if you won" in p or "if you had" in p or "would you" in p:
        return {
            "prompt": prompt,
            "minWords": 4,
            "mustIncludeAny": [["would", "will", "if", "stay", "go", "buy", "travel", "i"]],
            "acceptableAnswers": ["If it rains, I will stay home.", "If I won the lottery, I would travel."],
            "hintWrong": "If + present, will… / If + past, would…",
            "explain": "Conditional: if-clause + result clause.",
        }

    if "is spoken" in p or "is made" in p or "passive" in p.lower():
        return {
            "prompt": prompt,
            "minWords": 4,
            "mustIncludeAny": [["is", "are", "spoken", "made", "built", "used", "english", "china", "here"]],
            "acceptableAnswers": ["English is spoken here.", "My phone is made in China."],
            "hintWrong": "is/are + V3: is spoken / is made.",
            "explain": "Passive: is/are + past participle.",
        }

    if "tag" in p and "?" in p and ("," in p or "isn't" in p or "don't" in p):
        return {
            "prompt": prompt,
            "minWords": 2,
            "mustIncludeAny": [["yes", "no", "is", "are", "do", "does", "can", "isn't", "aren't", "don't"]],
            "acceptableAnswers": ["Yes, it is.", "No, I don't.", "Yes, she does."],
            "hintWrong": "Yes/No + тот же auxiliary из вопроса.",
            "explain": "Question tag → короткий Yes/No ответ.",
        }

    if "know anyone who" in p:
        return {
            "prompt": prompt,
            "minWords": 4,
            "mustIncludeAny": [["yes", "no", "friend", "know", "speaks", "who", "colleague"]],
            "acceptableAnswers": ["Yes, my friend speaks Chinese.", "No, I don't know anyone who speaks Chinese."],
            "hintWrong": "Yes, my friend… / No, I don't know anyone who…",
            "explain": "Ответь о человеке, которого знаешь.",
        }

    if "book" in p and "recommend" in p:
        return {
            "prompt": prompt,
            "minWords": 4,
            "mustIncludeAny": [["the book", "that", "which", "recommended", "is", "called", "about"]],
            "acceptableAnswers": ["The book that I recommended is about history.", "It's the novel I told you about."],
            "hintWrong": "The book that/which I recommended…",
            "explain": "Relative clause: the book that I recommended.",
        }

    if "not only" in p and "but" in p:
        return {
            "prompt": prompt,
            "minWords": 6,
            "mustIncludeAny": [["not only", "but", "also", "he", "she", "they", "won"]],
            "acceptableAnswers": ["Not only did he win, but he also broke the record."],
            "hintWrong": "Закончи: but he also…",
            "explain": "Not only…, but (also)… — полная конструкция.",
        }

    if "never have i" in p or "never have you" in p:
        return {
            "prompt": prompt,
            "minWords": 5,
            "mustIncludeAny": [["never", "have", "seen", "been", "such", "before"]],
            "acceptableAnswers": ["Never have I seen such a beautiful view."],
            "hintWrong": "Never have I + past participle…",
            "explain": "Negative inversion: Never have I…",
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

    # Do you / Does — only simple yes/no (not wh- or or-questions)
    if (
        (p.startswith("do you") or p.startswith("does ") or "do they" in p or "does she" in p)
        and "what" not in p
        and "which" not in p
        and " or " not in p
        and "mean" not in p
        and "know anyone" not in p
    ):
        return {
            "prompt": prompt,
            "minWords": 2,
            "mustIncludeAny": [["yes", "no", "i do", "i don't", "she does", "he does", "they do"]],
            "acceptableAnswers": ["Yes, I do.", "No, I don't.", "Yes, she does."],
            "hintWrong": "Yes, I do. / No, I don't.",
            "explain": "На Do/Does…? — do или don't.",
        }

    # What do you / What does — after yes/no guard
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
        people_hint = "people" in p or "family" in p
        return {
            "prompt": prompt,
            "minWords": 3,
            "mustIncludePattern": r"\d|one|two|three|four|five|six|seven|eight|nine|ten",
            "mustIncludeAny": [
                ["there are", "there is", "i have", "people", "rooms"] if not people_hint else
                ["there are", "there is", "i have", "people", "family"]
            ],
            "acceptableAnswers": [
                "There are four people in my family." if people_hint else "There are three rooms.",
                "I have two brothers." if people_hint else "I have two apples.",
            ],
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

    # Wh- fallback — topic keywords required, no grammar examples as answers
    topic = lesson.get("topic", "English")
    return {
        "prompt": prompt,
        "minWords": 4,
        "topicKeywords": vocab[:6],
        "acceptableAnswers": [
            f"I can answer about {topic} using words from this lesson.",
        ],
        "hintWrong": "Полный ответ по теме урока на английском.",
        "explain": f"Ответь по теме: {topic}.",
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
        "mustIncludeAny": [vocab[:3]] if vocab else [["they", "he", "she", "the"]],
        "acceptableAnswers": [
            "They talk about the topic in the material.",
            "The scene shows the main idea of the lesson.",
        ],
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
        wrong_ex = "He go to work every day."
        if mistake.get("wrong"):
            wrong_ex = mistake["wrong"]
        checks.append({
            "question": f"Пример по теме «{b['title']}»:",
            "options": [b["example"], wrong_ex],
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
