const CURRICULUM = [
  {
    "id": 1,
    "level": "A1",
    "title": "Greetings & Introductions",
    "titleRu": "Приветствия и знакомство",
    "topic": "Первые фразы",
    "description": "Базовые приветствия, прощания и вежливые фразы для знакомства.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "Hello! How are you?",
        "keywords": [
          "hello",
          "goodbye",
          "please",
          "thank you",
          "name",
          "country",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Hello! My name is Anna."
      },
      {
        "prompt": "What is your name?",
        "keywords": [
          "hello",
          "goodbye",
          "please",
          "thank you",
          "name",
          "country",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Thank you very much!"
      },
      {
        "prompt": "Where are you from?",
        "keywords": [
          "hello",
          "goodbye",
          "please",
          "thank you",
          "name",
          "country",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Hello! My name is Anna."
      }
    ],
    "vocab": [
      {
        "en": "hello",
        "ru": "привет"
      },
      {
        "en": "goodbye",
        "ru": "до свидания"
      },
      {
        "en": "please",
        "ru": "пожалуйста"
      },
      {
        "en": "thank you",
        "ru": "спасибо"
      },
      {
        "en": "name",
        "ru": "имя"
      },
      {
        "en": "country",
        "ru": "страна"
      },
      {
        "en": "nice",
        "ru": "приятный"
      },
      {
        "en": "meet",
        "ru": "знакомиться"
      },
      {
        "en": "friend",
        "ru": "друг"
      },
      {
        "en": "welcome",
        "ru": "добро пожаловать"
      }
    ],
    "grammar": {
      "title": "Greetings",
      "blocks": [
        {
          "title": "Приветствия",
          "desc": "Hello / Hi — универсальное приветствие. Good morning — до полудня. Good evening — вечером.",
          "example": "Hello! My name is Anna."
        },
        {
          "title": "Вежливость",
          "desc": "Please — пожалуйста. Thank you — спасибо. You're welcome — не за что. Excuse me — извините.",
          "example": "Thank you very much!"
        }
      ],
      "formulas": [
        "Hello / Hi + name",
        "Nice to meet you",
        "How are you? — I'm fine, thanks."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "Good morning!",
            "Nice to meet you.",
            "See you later!"
          ]
        }
      ],
      "mistake": {
        "wrong": "I am fine thank you.",
        "right": "I'm fine, thank you."
      }
    },
    "quiz": [
      {
        "sentence": "___ , my name is Tom.",
        "options": [
          "Hello",
          "Goodbye"
        ],
        "answer": "Hello"
      },
      {
        "sentence": "___ you very much!",
        "options": [
          "Thank",
          "Thanks"
        ],
        "answer": "Thank"
      },
      {
        "sentence": "Nice to ___ you.",
        "options": [
          "meet",
          "meeting"
        ],
        "answer": "meet"
      },
      {
        "sentence": "I am ___.",
        "options": [
          "fine",
          "finely"
        ],
        "answer": "fine"
      },
      {
        "sentence": "___ are you from?",
        "options": [
          "Where",
          "What"
        ],
        "answer": "Where"
      }
    ],
    "pronunciation": [
      {
        "phrase": "Nice to meet you.",
        "ipa": "/naɪs tə miːt juː/",
        "tip": "Meet you — сливай в один поток",
        "expected": "Nice to meet you."
      },
      {
        "phrase": "How are you?",
        "ipa": "/haʊ ɑː juː/",
        "tip": "Are — слабое /ə/ в быстрой речи",
        "expected": "How are you?"
      },
      {
        "phrase": "Thank you very much.",
        "ipa": "/θæŋk juː ˈveri mʌtʃ/",
        "tip": "Thank — звук /θ/, язык между зубами",
        "expected": "Thank you very much."
      },
      {
        "phrase": "Good morning.",
        "ipa": "/ɡʊd ˈmɔːnɪŋ/",
        "tip": "Morning — ударение на первый слог",
        "expected": "Good morning."
      },
      {
        "phrase": "See you later.",
        "ipa": "/siː juː ˈleɪtə/",
        "tip": "Later — звук /eɪ/ как в «эй»",
        "expected": "See you later."
      }
    ],
    "culture": {
      "watch": [
        "Extra English — серия 1 (приветствия)"
      ],
      "listen": [
        "The Beatles — Hello, Goodbye"
      ],
      "read": [
        "Oxford Bookworms — Starter level stories"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "How does the character introduce themselves?",
        "keywords": [
          "hello",
          "goodbye",
          "please",
          "thank you",
          "name",
          "country",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Hello! My name is Anna."
      },
      {
        "prompt": "What greeting do they use in the morning?",
        "keywords": [
          "hello",
          "goodbye",
          "please",
          "thank you",
          "name",
          "country",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Thank you very much!"
      },
      {
        "prompt": "Where is the person from?",
        "keywords": [
          "hello",
          "goodbye",
          "please",
          "thank you",
          "name",
          "country",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Hello! My name is Anna."
      },
      {
        "prompt": "How do they say goodbye?",
        "keywords": [
          "hello",
          "goodbye",
          "please",
          "thank you",
          "name",
          "country",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Thank you very much!"
      },
      {
        "prompt": "What polite words do you hear?",
        "keywords": [
          "hello",
          "goodbye",
          "please",
          "thank you",
          "name",
          "country",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Hello! My name is Anna."
      }
    ],
    "speaking": [
      {
        "task": "Представься: имя, страна, 3 предложения.",
        "keywords": [
          "hello",
          "goodbye",
          "please",
          "thank you",
          "name",
          "country",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Hello! My name is Anna.",
        "useSpeech": true
      },
      {
        "task": "Поприветствуй друга утром, днём и вечером.",
        "keywords": [
          "hello",
          "goodbye",
          "please",
          "thank you",
          "name",
          "country",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Thank you very much!",
        "useSpeech": true
      },
      {
        "task": "Ответь на How are you? и спроси в ответ.",
        "keywords": [
          "hello",
          "goodbye",
          "please",
          "thank you",
          "name",
          "country",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Hello! My name is Anna.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "hello",
        "trans": "привет",
        "example": "I use 'hello' every day."
      },
      {
        "word": "goodbye",
        "trans": "до свидания",
        "example": "I use 'goodbye' every day."
      },
      {
        "word": "please",
        "trans": "пожалуйста",
        "example": "I use 'please' every day."
      },
      {
        "word": "thank you",
        "trans": "спасибо",
        "example": "I use 'thank you' every day."
      },
      {
        "word": "name",
        "trans": "имя",
        "example": "I use 'name' every day."
      },
      {
        "word": "country",
        "trans": "страна",
        "example": "I use 'country' every day."
      },
      {
        "word": "nice",
        "trans": "приятный",
        "example": "I use 'nice' every day."
      },
      {
        "word": "meet",
        "trans": "знакомиться",
        "example": "I use 'meet' every day."
      },
      {
        "word": "friend",
        "trans": "друг",
        "example": "I use 'friend' every day."
      },
      {
        "word": "welcome",
        "trans": "добро пожаловать",
        "example": "I use 'welcome' every day."
      },
      {
        "word": "hello",
        "trans": "привет",
        "example": "Practice makes progress."
      },
      {
        "word": "goodbye",
        "trans": "до свидания",
        "example": "Practice makes progress."
      },
      {
        "word": "please",
        "trans": "пожалуйста",
        "example": "Practice makes progress."
      },
      {
        "word": "thank you",
        "trans": "спасибо",
        "example": "Practice makes progress."
      },
      {
        "word": "name",
        "trans": "имя",
        "example": "Practice makes progress."
      },
      {
        "word": "country",
        "trans": "страна",
        "example": "Practice makes progress."
      },
      {
        "word": "nice",
        "trans": "приятный",
        "example": "Practice makes progress."
      },
      {
        "word": "meet",
        "trans": "знакомиться",
        "example": "Practice makes progress."
      },
      {
        "word": "friend",
        "trans": "друг",
        "example": "Practice makes progress."
      },
      {
        "word": "welcome",
        "trans": "добро пожаловать",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "___ , my name is Tom.",
        "options": [
          "Hello",
          "Goodbye"
        ],
        "answer": "Hello"
      },
      {
        "sentence": "___ you very much!",
        "options": [
          "Thank",
          "Thanks"
        ],
        "answer": "Thank"
      }
    ],
    "theory": {
      "intro": "Базовые приветствия, прощания и вежливые фразы для знакомства.",
      "reading": "**Приветствия и знакомство** — Базовые приветствия, прощания и вежливые фразы для знакомства.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### Приветствия\nHello / Hi — универсальное приветствие. Good morning — до полудня. Good evening — вечером.\n\n*Пример:* Hello! My name is Anna.\n\n### Вежливость\nPlease — пожалуйста. Thank you — спасибо. You're welcome — не за что. Excuse me — извините.\n\n*Пример:* Thank you very much!\n\n### Формулы\n- `Hello / Hi + name`\n- `Nice to meet you`\n- `How are you? — I'm fine, thanks.`\n\n### Типичная ошибка\n❌ I am fine thank you.\n✅ I'm fine, thank you.",
      "keyPoints": [
        "Приветствия: Hello / Hi — универсальное приветствие. Good morning — до полудня. Good evening ",
        "Вежливость: Please — пожалуйста. Thank you — спасибо. You're welcome — не за что. Excuse me ",
        "Запомни формулы: Hello / Hi + name; Nice to meet you; How are you? — I'm fine, thanks.",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «hello»?",
        "options": [
          "привет",
          "пожалуйста",
          "спасибо",
          "страна"
        ],
        "answer": "привет"
      },
      {
        "question": "What is «goodbye»?",
        "options": [
          "до свидания",
          "знакомиться",
          "имя",
          "привет"
        ],
        "answer": "до свидания"
      },
      {
        "question": "What is «please»?",
        "options": [
          "имя",
          "пожалуйста",
          "друг",
          "до свидания"
        ],
        "answer": "пожалуйста"
      },
      {
        "question": "What is «thank you»?",
        "options": [
          "спасибо",
          "друг",
          "пожалуйста",
          "приятный"
        ],
        "answer": "спасибо"
      },
      {
        "question": "What is «name»?",
        "options": [
          "страна",
          "приятный",
          "пожалуйста",
          "имя"
        ],
        "answer": "имя"
      },
      {
        "type": "gap",
        "sentence": "The word «страна» in English is ___.",
        "answer": "country",
        "hint": "c…"
      },
      {
        "type": "gap",
        "sentence": "The word «приятный» in English is ___.",
        "answer": "nice",
        "hint": "n…"
      },
      {
        "type": "gap",
        "sentence": "The word «знакомиться» in English is ___.",
        "answer": "meet",
        "hint": "m…"
      }
    ]
  },
  {
    "id": 2,
    "level": "A1",
    "title": "Verb to be",
    "titleRu": "Глагол to be",
    "topic": "am / is / are",
    "description": "Глагол to be — основа английского: описание, местоположение, возраст.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "How old are you?",
        "keywords": [
          "am",
          "is",
          "are",
          "student",
          "teacher",
          "happy",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She is a doctor."
      },
      {
        "prompt": "Where is the station?",
        "keywords": [
          "am",
          "is",
          "are",
          "student",
          "teacher",
          "happy",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Are you ready? — Yes, I am."
      },
      {
        "prompt": "Are you a student?",
        "keywords": [
          "am",
          "is",
          "are",
          "student",
          "teacher",
          "happy",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She is a doctor."
      }
    ],
    "vocab": [
      {
        "en": "am",
        "ru": "есть (я)"
      },
      {
        "en": "is",
        "ru": "есть (он/она/оно)"
      },
      {
        "en": "are",
        "ru": "есть (мы/вы/они)"
      },
      {
        "en": "student",
        "ru": "студент"
      },
      {
        "en": "teacher",
        "ru": "учитель"
      },
      {
        "en": "happy",
        "ru": "счастливый"
      },
      {
        "en": "tired",
        "ru": "уставший"
      },
      {
        "en": "here",
        "ru": "здесь"
      },
      {
        "en": "there",
        "ru": "там"
      },
      {
        "en": "ready",
        "ru": "готовый"
      }
    ],
    "grammar": {
      "title": "Verb to be",
      "blocks": [
        {
          "title": "Формы",
          "desc": "I am, he/she/it is, we/you/they are. Сокращения: I'm, she's, they're.",
          "example": "She is a doctor."
        },
        {
          "title": "Отрицание и вопрос",
          "desc": "Отрицание: am not, isn't, aren't. Вопрос: Am I...? Is he...? Are they...?",
          "example": "Are you ready? — Yes, I am."
        }
      ],
      "formulas": [
        "I am + noun/adjective",
        "He/She/It is + ...",
        "We/You/They are + ..."
      ],
      "extraExamples": [
        {
          "label": "Утверждение",
          "items": [
            "I am 25 years old.",
            "They are at home."
          ]
        },
        {
          "label": "Вопрос",
          "items": [
            "Is she your sister?",
            "Are we late?"
          ]
        }
      ],
      "mistake": {
        "wrong": "She are my friend.",
        "right": "She is my friend."
      }
    },
    "quiz": [
      {
        "sentence": "I ___ a student.",
        "options": [
          "am",
          "is"
        ],
        "answer": "am"
      },
      {
        "sentence": "He ___ tired.",
        "options": [
          "is",
          "are"
        ],
        "answer": "is"
      },
      {
        "sentence": "They ___ from Spain.",
        "options": [
          "is",
          "are"
        ],
        "answer": "are"
      },
      {
        "sentence": "___ you ready?",
        "options": [
          "Is",
          "Are"
        ],
        "answer": "Are"
      },
      {
        "sentence": "She ___ not here.",
        "options": [
          "is",
          "are"
        ],
        "answer": "is"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I am a student.",
        "ipa": "/aɪ æm ə ˈstjuːdnt/",
        "tip": "A — слабый звук /ə/",
        "expected": "I am a student."
      },
      {
        "phrase": "She is happy.",
        "ipa": "/ʃiː ɪz ˈhæpi/",
        "tip": "Is — часто /z/ после гласной",
        "expected": "She is happy."
      },
      {
        "phrase": "Are you ready?",
        "ipa": "/ɑː juː ˈredi/",
        "tip": "Are you → /ɑːjuː/ без паузы",
        "expected": "Are you ready?"
      },
      {
        "phrase": "We are here.",
        "ipa": "/wiː ɑː hɪə/",
        "tip": "We're — сокращение в разговоре",
        "expected": "We are here."
      },
      {
        "phrase": "It is cold.",
        "ipa": "/ɪt ɪz kəʊld/",
        "tip": "It's — стандартное сокращение",
        "expected": "It is cold."
      }
    ],
    "culture": {
      "watch": [
        "Peppa Pig — простые диалоги"
      ],
      "listen": [
        "Pharrell Williams — Happy"
      ],
      "read": [
        "Graded readers A1 — short dialogues"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "How old is the character?",
        "keywords": [
          "am",
          "is",
          "are",
          "student",
          "teacher",
          "happy",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She is a doctor."
      },
      {
        "prompt": "Where are they?",
        "keywords": [
          "am",
          "is",
          "are",
          "student",
          "teacher",
          "happy",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Are you ready? — Yes, I am."
      },
      {
        "prompt": "Are they happy or sad?",
        "keywords": [
          "am",
          "is",
          "are",
          "student",
          "teacher",
          "happy",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She is a doctor."
      },
      {
        "prompt": "What is his job?",
        "keywords": [
          "am",
          "is",
          "are",
          "student",
          "teacher",
          "happy",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Are you ready? — Yes, I am."
      },
      {
        "prompt": "Are the friends ready?",
        "keywords": [
          "am",
          "is",
          "are",
          "student",
          "teacher",
          "happy",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She is a doctor."
      }
    ],
    "speaking": [
      {
        "task": "Опиши себя: возраст, профессия, настроение — 4 предложения с am/is/are.",
        "keywords": [
          "am",
          "is",
          "are",
          "student",
          "teacher",
          "happy",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She is a doctor.",
        "useSpeech": true
      },
      {
        "task": "Задай 3 вопроса партнёру с Are you...?",
        "keywords": [
          "am",
          "is",
          "are",
          "student",
          "teacher",
          "happy",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Are you ready? — Yes, I am.",
        "useSpeech": true
      },
      {
        "task": "Скажи, где находятся 3 предмета в комнате.",
        "keywords": [
          "am",
          "is",
          "are",
          "student",
          "teacher",
          "happy",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She is a doctor.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "am",
        "trans": "есть (я)",
        "example": "I use 'am' every day."
      },
      {
        "word": "is",
        "trans": "есть (он/она/оно)",
        "example": "I use 'is' every day."
      },
      {
        "word": "are",
        "trans": "есть (мы/вы/они)",
        "example": "I use 'are' every day."
      },
      {
        "word": "student",
        "trans": "студент",
        "example": "I use 'student' every day."
      },
      {
        "word": "teacher",
        "trans": "учитель",
        "example": "I use 'teacher' every day."
      },
      {
        "word": "happy",
        "trans": "счастливый",
        "example": "I use 'happy' every day."
      },
      {
        "word": "tired",
        "trans": "уставший",
        "example": "I use 'tired' every day."
      },
      {
        "word": "here",
        "trans": "здесь",
        "example": "I use 'here' every day."
      },
      {
        "word": "there",
        "trans": "там",
        "example": "I use 'there' every day."
      },
      {
        "word": "ready",
        "trans": "готовый",
        "example": "I use 'ready' every day."
      },
      {
        "word": "am",
        "trans": "есть (я)",
        "example": "Practice makes progress."
      },
      {
        "word": "is",
        "trans": "есть (он/она/оно)",
        "example": "Practice makes progress."
      },
      {
        "word": "are",
        "trans": "есть (мы/вы/они)",
        "example": "Practice makes progress."
      },
      {
        "word": "student",
        "trans": "студент",
        "example": "Practice makes progress."
      },
      {
        "word": "teacher",
        "trans": "учитель",
        "example": "Practice makes progress."
      },
      {
        "word": "happy",
        "trans": "счастливый",
        "example": "Practice makes progress."
      },
      {
        "word": "tired",
        "trans": "уставший",
        "example": "Practice makes progress."
      },
      {
        "word": "here",
        "trans": "здесь",
        "example": "Practice makes progress."
      },
      {
        "word": "there",
        "trans": "там",
        "example": "Practice makes progress."
      },
      {
        "word": "ready",
        "trans": "готовый",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "I ___ a student.",
        "options": [
          "am",
          "is"
        ],
        "answer": "am"
      },
      {
        "sentence": "He ___ tired.",
        "options": [
          "is",
          "are"
        ],
        "answer": "is"
      }
    ],
    "theory": {
      "intro": "Глагол to be — основа английского: описание, местоположение, возраст.",
      "reading": "**Глагол to be** — Глагол to be — основа английского: описание, местоположение, возраст.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### Формы\nI am, he/she/it is, we/you/they are. Сокращения: I'm, she's, they're.\n\n*Пример:* She is a doctor.\n\n### Отрицание и вопрос\nОтрицание: am not, isn't, aren't. Вопрос: Am I...? Is he...? Are they...?\n\n*Пример:* Are you ready? — Yes, I am.\n\n### Формулы\n- `I am + noun/adjective`\n- `He/She/It is + ...`\n- `We/You/They are + ...`\n\n### Типичная ошибка\n❌ She are my friend.\n✅ She is my friend.",
      "keyPoints": [
        "Формы: I am, he/she/it is, we/you/they are. Сокращения: I'm, she's, they're.",
        "Отрицание и вопрос: Отрицание: am not, isn't, aren't. Вопрос: Am I...? Is he...? Are they...?",
        "Запомни формулы: I am + noun/adjective; He/She/It is + ...; We/You/They are + ...",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «am»?",
        "options": [
          "есть (я)",
          "уставший",
          "счастливый",
          "готовый"
        ],
        "answer": "есть (я)"
      },
      {
        "question": "What is «is»?",
        "options": [
          "есть (мы/вы/они)",
          "готовый",
          "здесь",
          "есть (он/она/оно)"
        ],
        "answer": "есть (он/она/оно)"
      },
      {
        "question": "What is «are»?",
        "options": [
          "уставший",
          "здесь",
          "есть (мы/вы/они)",
          "есть (он/она/оно)"
        ],
        "answer": "есть (мы/вы/они)"
      },
      {
        "question": "What is «student»?",
        "options": [
          "студент",
          "уставший",
          "есть (я)",
          "там"
        ],
        "answer": "студент"
      },
      {
        "question": "What is «teacher»?",
        "options": [
          "есть (мы/вы/они)",
          "здесь",
          "учитель",
          "студент"
        ],
        "answer": "учитель"
      },
      {
        "type": "gap",
        "sentence": "The word «счастливый» in English is ___.",
        "answer": "happy",
        "hint": "h…"
      },
      {
        "type": "gap",
        "sentence": "The word «уставший» in English is ___.",
        "answer": "tired",
        "hint": "t…"
      },
      {
        "type": "gap",
        "sentence": "The word «здесь» in English is ___.",
        "answer": "here",
        "hint": "h…"
      }
    ]
  },
  {
    "id": 3,
    "level": "A1",
    "title": "Personal Questions",
    "titleRu": "Личные вопросы",
    "topic": "What / Where / How",
    "description": "Вопросительные слова для базового общения о себе и других.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What's your job?",
        "keywords": [
          "what",
          "where",
          "how",
          "who",
          "live",
          "work",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "What is your phone number?"
      },
      {
        "prompt": "Where do you live?",
        "keywords": [
          "what",
          "where",
          "how",
          "who",
          "live",
          "work",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Who is your teacher?"
      },
      {
        "prompt": "How do you spell your name?",
        "keywords": [
          "what",
          "where",
          "how",
          "who",
          "live",
          "work",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "What is your phone number?"
      }
    ],
    "vocab": [
      {
        "en": "what",
        "ru": "что"
      },
      {
        "en": "where",
        "ru": "где"
      },
      {
        "en": "how",
        "ru": "как"
      },
      {
        "en": "who",
        "ru": "кто"
      },
      {
        "en": "live",
        "ru": "жить"
      },
      {
        "en": "work",
        "ru": "работать"
      },
      {
        "en": "spell",
        "ru": "произносить по буквам"
      },
      {
        "en": "address",
        "ru": "адрес"
      },
      {
        "en": "phone",
        "ru": "телефон"
      },
      {
        "en": "email",
        "ru": "электронная почта"
      }
    ],
    "grammar": {
      "title": "Wh-questions",
      "blocks": [
        {
          "title": "What / Where / How",
          "desc": "What — что. Where — где. How — как. How old — сколько лет. How do you spell — как пишется.",
          "example": "What is your phone number?"
        },
        {
          "title": "Who",
          "desc": "Who — кто. Who is she? Who are they?",
          "example": "Who is your teacher?"
        }
      ],
      "formulas": [
        "What + is/are + ...?",
        "Where + do/does + subject + V1?",
        "How old are you?"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "Where do you work?",
            "What is your email?",
            "How do you spell that?"
          ]
        }
      ],
      "mistake": {
        "wrong": "Where you live?",
        "right": "Where do you live?"
      }
    },
    "quiz": [
      {
        "sentence": "___ is your name?",
        "options": [
          "What",
          "Where"
        ],
        "answer": "What"
      },
      {
        "sentence": "Where ___ you live?",
        "options": [
          "do",
          "does"
        ],
        "answer": "do"
      },
      {
        "sentence": "___ old are you?",
        "options": [
          "How",
          "What"
        ],
        "answer": "How"
      },
      {
        "sentence": "___ is she?",
        "options": [
          "Who",
          "Where"
        ],
        "answer": "Who"
      },
      {
        "sentence": "What ___ your job?",
        "options": [
          "is",
          "are"
        ],
        "answer": "is"
      }
    ],
    "pronunciation": [
      {
        "phrase": "What is your name?",
        "ipa": "/wɒt ɪz jɔː neɪm/",
        "tip": "What is → What's в речи",
        "expected": "What is your name?"
      },
      {
        "phrase": "Where do you live?",
        "ipa": "/weə duː juː lɪv/",
        "tip": "Where — звук /eə/",
        "expected": "Where do you live?"
      },
      {
        "phrase": "How old are you?",
        "ipa": "/haʊ əʊld ɑː juː/",
        "tip": "Old — не путай с hold",
        "expected": "How old are you?"
      },
      {
        "phrase": "How do you spell it?",
        "ipa": "/haʊ duː juː spel/",
        "tip": "Spell — короткий /e/",
        "expected": "How do you spell it?"
      },
      {
        "phrase": "Who is she?",
        "ipa": "/huː ɪz ʃiː/",
        "tip": "Who — долгий /uː/",
        "expected": "Who is she?"
      }
    ],
    "culture": {
      "watch": [
        "Friends — pilot episode (знакомство)"
      ],
      "listen": [
        "ABBA — Money, Money, Money"
      ],
      "read": [
        "Short bios of famous people (A1 level)"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What is the person's job?",
        "keywords": [
          "what",
          "where",
          "how",
          "who",
          "live",
          "work",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "What is your phone number?"
      },
      {
        "prompt": "Where do they live?",
        "keywords": [
          "what",
          "where",
          "how",
          "who",
          "live",
          "work",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Who is your teacher?"
      },
      {
        "prompt": "How old are they?",
        "keywords": [
          "what",
          "where",
          "how",
          "who",
          "live",
          "work",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "What is your phone number?"
      },
      {
        "prompt": "Who is their best friend?",
        "keywords": [
          "what",
          "where",
          "how",
          "who",
          "live",
          "work",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Who is your teacher?"
      },
      {
        "prompt": "What is their email address?",
        "keywords": [
          "what",
          "where",
          "how",
          "who",
          "live",
          "work",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "What is your phone number?"
      }
    ],
    "speaking": [
      {
        "task": "Составь 5 вопросов для знакомства.",
        "keywords": [
          "what",
          "where",
          "how",
          "who",
          "live",
          "work",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "What is your phone number?",
        "useSpeech": true
      },
      {
        "task": "Ответь на все вопросы о себе полными предложениями.",
        "keywords": [
          "what",
          "where",
          "how",
          "who",
          "live",
          "work",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Who is your teacher?",
        "useSpeech": true
      },
      {
        "task": "Спроси и запиши данные вымышленного персонажа.",
        "keywords": [
          "what",
          "where",
          "how",
          "who",
          "live",
          "work",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "What is your phone number?",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "what",
        "trans": "что",
        "example": "I use 'what' every day."
      },
      {
        "word": "where",
        "trans": "где",
        "example": "I use 'where' every day."
      },
      {
        "word": "how",
        "trans": "как",
        "example": "I use 'how' every day."
      },
      {
        "word": "who",
        "trans": "кто",
        "example": "I use 'who' every day."
      },
      {
        "word": "live",
        "trans": "жить",
        "example": "I use 'live' every day."
      },
      {
        "word": "work",
        "trans": "работать",
        "example": "I use 'work' every day."
      },
      {
        "word": "spell",
        "trans": "произносить по буквам",
        "example": "I use 'spell' every day."
      },
      {
        "word": "address",
        "trans": "адрес",
        "example": "I use 'address' every day."
      },
      {
        "word": "phone",
        "trans": "телефон",
        "example": "I use 'phone' every day."
      },
      {
        "word": "email",
        "trans": "электронная почта",
        "example": "I use 'email' every day."
      },
      {
        "word": "what",
        "trans": "что",
        "example": "Practice makes progress."
      },
      {
        "word": "where",
        "trans": "где",
        "example": "Practice makes progress."
      },
      {
        "word": "how",
        "trans": "как",
        "example": "Practice makes progress."
      },
      {
        "word": "who",
        "trans": "кто",
        "example": "Practice makes progress."
      },
      {
        "word": "live",
        "trans": "жить",
        "example": "Practice makes progress."
      },
      {
        "word": "work",
        "trans": "работать",
        "example": "Practice makes progress."
      },
      {
        "word": "spell",
        "trans": "произносить по буквам",
        "example": "Practice makes progress."
      },
      {
        "word": "address",
        "trans": "адрес",
        "example": "Practice makes progress."
      },
      {
        "word": "phone",
        "trans": "телефон",
        "example": "Practice makes progress."
      },
      {
        "word": "email",
        "trans": "электронная почта",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "___ is your name?",
        "options": [
          "What",
          "Where"
        ],
        "answer": "What"
      },
      {
        "sentence": "Where ___ you live?",
        "options": [
          "do",
          "does"
        ],
        "answer": "do"
      }
    ],
    "theory": {
      "intro": "Вопросительные слова для базового общения о себе и других.",
      "reading": "**Личные вопросы** — Вопросительные слова для базового общения о себе и других.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### What / Where / How\nWhat — что. Where — где. How — как. How old — сколько лет. How do you spell — как пишется.\n\n*Пример:* What is your phone number?\n\n### Who\nWho — кто. Who is she? Who are they?\n\n*Пример:* Who is your teacher?\n\n### Формулы\n- `What + is/are + ...?`\n- `Where + do/does + subject + V1?`\n- `How old are you?`\n\n### Типичная ошибка\n❌ Where you live?\n✅ Where do you live?",
      "keyPoints": [
        "What / Where / How: What — что. Where — где. How — как. How old — сколько лет. How do you spell — ка",
        "Who: Who — кто. Who is she? Who are they?",
        "Запомни формулы: What + is/are + ...?; Where + do/does + subject + V1?; How old are you?",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «what»?",
        "options": [
          "адрес",
          "где",
          "как",
          "что"
        ],
        "answer": "что"
      },
      {
        "question": "What is «where»?",
        "options": [
          "произносить по буквам",
          "где",
          "как",
          "что"
        ],
        "answer": "где"
      },
      {
        "question": "What is «how»?",
        "options": [
          "кто",
          "что",
          "произносить по буквам",
          "как"
        ],
        "answer": "как"
      },
      {
        "question": "What is «who»?",
        "options": [
          "жить",
          "электронная почта",
          "кто",
          "работать"
        ],
        "answer": "кто"
      },
      {
        "question": "What is «live»?",
        "options": [
          "где",
          "жить",
          "электронная почта",
          "работать"
        ],
        "answer": "жить"
      },
      {
        "type": "gap",
        "sentence": "The word «работать» in English is ___.",
        "answer": "work",
        "hint": "w…"
      },
      {
        "type": "gap",
        "sentence": "The word «произносить по буквам» in English is ___.",
        "answer": "spell",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «адрес» in English is ___.",
        "answer": "address",
        "hint": "a…"
      }
    ]
  },
  {
    "id": 4,
    "level": "A1",
    "title": "Articles & Plurals",
    "titleRu": "Артикли и множественное число",
    "topic": "a / an / the / -s",
    "description": "Неопределённый и определённый артикли, множественное число существительных.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "Is there a shop near here?",
        "keywords": [
          "a",
          "an",
          "the",
          "book",
          "apple",
          "child",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I have a dog and an old car."
      },
      {
        "prompt": "Do you have an umbrella?",
        "keywords": [
          "a",
          "an",
          "the",
          "book",
          "apple",
          "child",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The children are in the park."
      },
      {
        "prompt": "Where is the bathroom?",
        "keywords": [
          "a",
          "an",
          "the",
          "book",
          "apple",
          "child",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I have a dog and an old car."
      }
    ],
    "vocab": [
      {
        "en": "a",
        "ru": "неопределённый артикль"
      },
      {
        "en": "an",
        "ru": "артикль перед гласной"
      },
      {
        "en": "the",
        "ru": "определённый артикль"
      },
      {
        "en": "book",
        "ru": "книга"
      },
      {
        "en": "apple",
        "ru": "яблоко"
      },
      {
        "en": "child",
        "ru": "ребёнок"
      },
      {
        "en": "children",
        "ru": "дети"
      },
      {
        "en": "person",
        "ru": "человек"
      },
      {
        "en": "people",
        "ru": "люди"
      },
      {
        "en": "singular",
        "ru": "единственное число"
      }
    ],
    "grammar": {
      "title": "Articles & Plurals",
      "blocks": [
        {
          "title": "A / An",
          "desc": "A — перед согласным звуком: a book. An — перед гласным: an apple, an hour.",
          "example": "I have a dog and an old car."
        },
        {
          "title": "The & Plurals",
          "desc": "The — конкретный предмет. Множественное: +s (cats), -es (boxes), неправильные (children, people).",
          "example": "The children are in the park."
        }
      ],
      "formulas": [
        "a + consonant sound / an + vowel sound",
        "the + specific noun",
        "plural: noun + s/es or irregular"
      ],
      "extraExamples": [
        {
          "label": "Артикли",
          "items": [
            "She is an engineer.",
            "The sun is bright."
          ]
        },
        {
          "label": "Множественное",
          "items": [
            "Two children play outside.",
            "Many people work here."
          ]
        }
      ],
      "mistake": {
        "wrong": "I have an dog.",
        "right": "I have a dog."
      }
    },
    "quiz": [
      {
        "sentence": "I need ___ umbrella.",
        "options": [
          "a",
          "an"
        ],
        "answer": "an"
      },
      {
        "sentence": "___ moon is beautiful tonight.",
        "options": [
          "A",
          "The"
        ],
        "answer": "The"
      },
      {
        "sentence": "There are three ___.",
        "options": [
          "childs",
          "children"
        ],
        "answer": "children"
      },
      {
        "sentence": "She is ___ doctor.",
        "options": [
          "a",
          "an"
        ],
        "answer": "a"
      },
      {
        "sentence": "Many ___ live here.",
        "options": [
          "persons",
          "people"
        ],
        "answer": "people"
      }
    ],
    "pronunciation": [
      {
        "phrase": "an apple",
        "ipa": "/ən ˈæpl/",
        "tip": "An — слабое /ən/",
        "expected": "an apple"
      },
      {
        "phrase": "the book",
        "ipa": "/ðə bʊk/",
        "tip": "The — /ðə/ перед согласным",
        "expected": "the book"
      },
      {
        "phrase": "the apple",
        "ipa": "/ði ˈæpl/",
        "tip": "The — /ði/ перед гласным",
        "expected": "the apple"
      },
      {
        "phrase": "children",
        "ipa": "/ˈtʃɪldrən/",
        "tip": "Children — ударение на первый слог",
        "expected": "children"
      },
      {
        "phrase": "people",
        "ipa": "/ˈpiːpl/",
        "tip": "People — не путай с peoples",
        "expected": "people"
      }
    ],
    "culture": {
      "watch": [
        "Mr. Bean — мало слов, визуальный контекст"
      ],
      "listen": [
        "Children's songs in English"
      ],
      "read": [
        "Picture dictionaries for beginners"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "Is there a/an in the sentence?",
        "keywords": [
          "a",
          "an",
          "the",
          "book",
          "apple",
          "child",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I have a dog and an old car."
      },
      {
        "prompt": "Which nouns are plural?",
        "keywords": [
          "a",
          "an",
          "the",
          "book",
          "apple",
          "child",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The children are in the park."
      },
      {
        "prompt": "Is the object specific (the)?",
        "keywords": [
          "a",
          "an",
          "the",
          "book",
          "apple",
          "child",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I have a dog and an old car."
      },
      {
        "prompt": "How many people/children are there?",
        "keywords": [
          "a",
          "an",
          "the",
          "book",
          "apple",
          "child",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The children are in the park."
      },
      {
        "prompt": "What irregular plurals appear?",
        "keywords": [
          "a",
          "an",
          "the",
          "book",
          "apple",
          "child",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I have a dog and an old car."
      }
    ],
    "speaking": [
      {
        "task": "Опиши 5 предметов в комнате с a/an/the.",
        "keywords": [
          "a",
          "an",
          "the",
          "book",
          "apple",
          "child",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I have a dog and an old car.",
        "useSpeech": true
      },
      {
        "task": "Назови 5 неправильных множественных форм.",
        "keywords": [
          "a",
          "an",
          "the",
          "book",
          "apple",
          "child",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The children are in the park.",
        "useSpeech": true
      },
      {
        "task": "Составь 4 предложения о семье.",
        "keywords": [
          "a",
          "an",
          "the",
          "book",
          "apple",
          "child",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I have a dog and an old car.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "a",
        "trans": "неопределённый артикль",
        "example": "I use 'a' every day."
      },
      {
        "word": "an",
        "trans": "артикль перед гласной",
        "example": "I use 'an' every day."
      },
      {
        "word": "the",
        "trans": "определённый артикль",
        "example": "I use 'the' every day."
      },
      {
        "word": "book",
        "trans": "книга",
        "example": "I use 'book' every day."
      },
      {
        "word": "apple",
        "trans": "яблоко",
        "example": "I use 'apple' every day."
      },
      {
        "word": "child",
        "trans": "ребёнок",
        "example": "I use 'child' every day."
      },
      {
        "word": "children",
        "trans": "дети",
        "example": "I use 'children' every day."
      },
      {
        "word": "person",
        "trans": "человек",
        "example": "I use 'person' every day."
      },
      {
        "word": "people",
        "trans": "люди",
        "example": "I use 'people' every day."
      },
      {
        "word": "singular",
        "trans": "единственное число",
        "example": "I use 'singular' every day."
      },
      {
        "word": "a",
        "trans": "неопределённый артикль",
        "example": "Practice makes progress."
      },
      {
        "word": "an",
        "trans": "артикль перед гласной",
        "example": "Practice makes progress."
      },
      {
        "word": "the",
        "trans": "определённый артикль",
        "example": "Practice makes progress."
      },
      {
        "word": "book",
        "trans": "книга",
        "example": "Practice makes progress."
      },
      {
        "word": "apple",
        "trans": "яблоко",
        "example": "Practice makes progress."
      },
      {
        "word": "child",
        "trans": "ребёнок",
        "example": "Practice makes progress."
      },
      {
        "word": "children",
        "trans": "дети",
        "example": "Practice makes progress."
      },
      {
        "word": "person",
        "trans": "человек",
        "example": "Practice makes progress."
      },
      {
        "word": "people",
        "trans": "люди",
        "example": "Practice makes progress."
      },
      {
        "word": "singular",
        "trans": "единственное число",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "I need ___ umbrella.",
        "options": [
          "a",
          "an"
        ],
        "answer": "an"
      },
      {
        "sentence": "___ moon is beautiful tonight.",
        "options": [
          "A",
          "The"
        ],
        "answer": "The"
      }
    ],
    "theory": {
      "intro": "Неопределённый и определённый артикли, множественное число существительных.",
      "reading": "**Артикли и множественное число** — Неопределённый и определённый артикли, множественное число существительных.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### A / An\nA — перед согласным звуком: a book. An — перед гласным: an apple, an hour.\n\n*Пример:* I have a dog and an old car.\n\n### The & Plurals\nThe — конкретный предмет. Множественное: +s (cats), -es (boxes), неправильные (children, people).\n\n*Пример:* The children are in the park.\n\n### Формулы\n- `a + consonant sound / an + vowel sound`\n- `the + specific noun`\n- `plural: noun + s/es or irregular`\n\n### Типичная ошибка\n❌ I have an dog.\n✅ I have a dog.",
      "keyPoints": [
        "A / An: A — перед согласным звуком: a book. An — перед гласным: an apple, an hour.",
        "The & Plurals: The — конкретный предмет. Множественное: +s (cats), -es (boxes), неправильные (c",
        "Запомни формулы: a + consonant sound / an + vowel sound; the + specific noun; plural: noun + s/es or irregular",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «a»?",
        "options": [
          "неопределённый артикль",
          "яблоко",
          "артикль перед гласной",
          "дети"
        ],
        "answer": "неопределённый артикль"
      },
      {
        "question": "What is «an»?",
        "options": [
          "артикль перед гласной",
          "дети",
          "единственное число",
          "человек"
        ],
        "answer": "артикль перед гласной"
      },
      {
        "question": "What is «the»?",
        "options": [
          "книга",
          "дети",
          "определённый артикль",
          "неопределённый артикль"
        ],
        "answer": "определённый артикль"
      },
      {
        "question": "What is «book»?",
        "options": [
          "книга",
          "неопределённый артикль",
          "яблоко",
          "единственное число"
        ],
        "answer": "книга"
      },
      {
        "question": "What is «apple»?",
        "options": [
          "люди",
          "неопределённый артикль",
          "яблоко",
          "дети"
        ],
        "answer": "яблоко"
      },
      {
        "type": "gap",
        "sentence": "The word «ребёнок» in English is ___.",
        "answer": "child",
        "hint": "c…"
      },
      {
        "type": "gap",
        "sentence": "The word «дети» in English is ___.",
        "answer": "children",
        "hint": "c…"
      },
      {
        "type": "gap",
        "sentence": "The word «человек» in English is ___.",
        "answer": "person",
        "hint": "p…"
      }
    ]
  },
  {
    "id": 5,
    "level": "A1",
    "title": "Present Simple Basics",
    "titleRu": "Настоящее простое — основы",
    "topic": "I work / He works",
    "description": "Базовое настоящее время для привычек, фактов и распорядка дня.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you do every day?",
        "keywords": [
          "every day",
          "sometimes",
          "never",
          "wake up",
          "breakfast",
          "go",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "He works in a bank."
      },
      {
        "prompt": "Does she speak English?",
        "keywords": [
          "every day",
          "sometimes",
          "never",
          "wake up",
          "breakfast",
          "go",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Do you like coffee? — No, I don't."
      },
      {
        "prompt": "Do they live in Moscow?",
        "keywords": [
          "every day",
          "sometimes",
          "never",
          "wake up",
          "breakfast",
          "go",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "He works in a bank."
      }
    ],
    "vocab": [
      {
        "en": "every day",
        "ru": "каждый день"
      },
      {
        "en": "sometimes",
        "ru": "иногда"
      },
      {
        "en": "never",
        "ru": "никогда"
      },
      {
        "en": "wake up",
        "ru": "просыпаться"
      },
      {
        "en": "breakfast",
        "ru": "завтрак"
      },
      {
        "en": "go",
        "ru": "идти"
      },
      {
        "en": "like",
        "ru": "нравиться"
      },
      {
        "en": "want",
        "ru": "хотеть"
      },
      {
        "en": "need",
        "ru": "нуждаться"
      },
      {
        "en": "know",
        "ru": "знать"
      }
    ],
    "grammar": {
      "title": "Present Simple",
      "blocks": [
        {
          "title": "Утверждение",
          "desc": "I/you/we/they + глагол. He/she/it + глагол+s (go→goes, watch→watches).",
          "example": "He works in a bank."
        },
        {
          "title": "Вопросы и отрицание",
          "desc": "Do/Does + подлежащее + глагол. Don't/Doesn't + глагол.",
          "example": "Do you like coffee? — No, I don't."
        }
      ],
      "formulas": [
        "I/you/we/they + V1",
        "he/she/it + V1+s",
        "Do/Does + subject + V1?"
      ],
      "extraExamples": [
        {
          "label": "Утверждение",
          "items": [
            "I wake up at seven.",
            "She likes music."
          ]
        },
        {
          "label": "Отрицание",
          "items": [
            "He doesn't eat meat.",
            "We don't watch TV."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to school.",
        "right": "He goes to school."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work by bus.",
        "options": [
          "go",
          "goes"
        ],
        "answer": "goes"
      },
      {
        "sentence": "___ you like pizza?",
        "options": [
          "Do",
          "Does"
        ],
        "answer": "Do"
      },
      {
        "sentence": "He ___ speak French.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "doesn't"
      },
      {
        "sentence": "We ___ breakfast at eight.",
        "options": [
          "have",
          "has"
        ],
        "answer": "have"
      },
      {
        "sentence": "It ___ every winter.",
        "options": [
          "snow",
          "snows"
        ],
        "answer": "snows"
      }
    ],
    "pronunciation": [
      {
        "phrase": "He works hard.",
        "ipa": "/hiː wɜːks hɑːd/",
        "tip": "Works — звук /s/ на конце",
        "expected": "He works hard."
      },
      {
        "phrase": "Do you like it?",
        "ipa": "/duː juː laɪk ɪt/",
        "tip": "Do you → /dʊjuː/",
        "expected": "Do you like it?"
      },
      {
        "phrase": "She doesn't know.",
        "ipa": "/ʃiː ˈdʌznt nəʊ/",
        "tip": "Doesn't — ударение на doesn't",
        "expected": "She doesn't know."
      },
      {
        "phrase": "I wake up early.",
        "ipa": "/aɪ weɪk ʌp ˈɜːli/",
        "tip": "Wake up — фразовый глагол, связно",
        "expected": "I wake up early."
      },
      {
        "phrase": "They never smoke.",
        "ipa": "/ðeɪ ˈnevə sməʊk/",
        "tip": "Never — ударение на первый слог",
        "expected": "They never smoke."
      }
    ],
    "culture": {
      "watch": [
        "The Simpsons — daily routines"
      ],
      "listen": [
        "Dua Lipa — Levitating"
      ],
      "read": [
        "A1 graded readers about daily life"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What does the character do every day?",
        "keywords": [
          "every day",
          "sometimes",
          "never",
          "wake up",
          "breakfast",
          "go",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "He works in a bank."
      },
      {
        "prompt": "Does he/she like their job?",
        "keywords": [
          "every day",
          "sometimes",
          "never",
          "wake up",
          "breakfast",
          "go",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Do you like coffee? — No, I don't."
      },
      {
        "prompt": "What time do they wake up?",
        "keywords": [
          "every day",
          "sometimes",
          "never",
          "wake up",
          "breakfast",
          "go",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "He works in a bank."
      },
      {
        "prompt": "Do they eat breakfast?",
        "keywords": [
          "every day",
          "sometimes",
          "never",
          "wake up",
          "breakfast",
          "go",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Do you like coffee? — No, I don't."
      },
      {
        "prompt": "What don't they do?",
        "keywords": [
          "every day",
          "sometimes",
          "never",
          "wake up",
          "breakfast",
          "go",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "He works in a bank."
      }
    ],
    "speaking": [
      {
        "task": "Опиши свой день: 5 предложений в Present Simple.",
        "keywords": [
          "every day",
          "sometimes",
          "never",
          "wake up",
          "breakfast",
          "go",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "He works in a bank.",
        "useSpeech": true
      },
      {
        "task": "Задай 4 вопроса Do you...? партнёру.",
        "keywords": [
          "every day",
          "sometimes",
          "never",
          "wake up",
          "breakfast",
          "go",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Do you like coffee? — No, I don't.",
        "useSpeech": true
      },
      {
        "task": "Расскажи о друге: He/She + глагол с -s.",
        "keywords": [
          "every day",
          "sometimes",
          "never",
          "wake up",
          "breakfast",
          "go",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "He works in a bank.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "every day",
        "trans": "каждый день",
        "example": "I use 'every day' every day."
      },
      {
        "word": "sometimes",
        "trans": "иногда",
        "example": "I use 'sometimes' every day."
      },
      {
        "word": "never",
        "trans": "никогда",
        "example": "I use 'never' every day."
      },
      {
        "word": "wake up",
        "trans": "просыпаться",
        "example": "I use 'wake up' every day."
      },
      {
        "word": "breakfast",
        "trans": "завтрак",
        "example": "I use 'breakfast' every day."
      },
      {
        "word": "go",
        "trans": "идти",
        "example": "I use 'go' every day."
      },
      {
        "word": "like",
        "trans": "нравиться",
        "example": "I use 'like' every day."
      },
      {
        "word": "want",
        "trans": "хотеть",
        "example": "I use 'want' every day."
      },
      {
        "word": "need",
        "trans": "нуждаться",
        "example": "I use 'need' every day."
      },
      {
        "word": "know",
        "trans": "знать",
        "example": "I use 'know' every day."
      },
      {
        "word": "every day",
        "trans": "каждый день",
        "example": "Practice makes progress."
      },
      {
        "word": "sometimes",
        "trans": "иногда",
        "example": "Practice makes progress."
      },
      {
        "word": "never",
        "trans": "никогда",
        "example": "Practice makes progress."
      },
      {
        "word": "wake up",
        "trans": "просыпаться",
        "example": "Practice makes progress."
      },
      {
        "word": "breakfast",
        "trans": "завтрак",
        "example": "Practice makes progress."
      },
      {
        "word": "go",
        "trans": "идти",
        "example": "Practice makes progress."
      },
      {
        "word": "like",
        "trans": "нравиться",
        "example": "Practice makes progress."
      },
      {
        "word": "want",
        "trans": "хотеть",
        "example": "Practice makes progress."
      },
      {
        "word": "need",
        "trans": "нуждаться",
        "example": "Practice makes progress."
      },
      {
        "word": "know",
        "trans": "знать",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work by bus.",
        "options": [
          "go",
          "goes"
        ],
        "answer": "goes"
      },
      {
        "sentence": "___ you like pizza?",
        "options": [
          "Do",
          "Does"
        ],
        "answer": "Do"
      }
    ],
    "theory": {
      "intro": "Базовое настоящее время для привычек, фактов и распорядка дня.",
      "reading": "**Настоящее простое — основы** — Базовое настоящее время для привычек, фактов и распорядка дня.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### Утверждение\nI/you/we/they + глагол. He/she/it + глагол+s (go→goes, watch→watches).\n\n*Пример:* He works in a bank.\n\n### Вопросы и отрицание\nDo/Does + подлежащее + глагол. Don't/Doesn't + глагол.\n\n*Пример:* Do you like coffee? — No, I don't.\n\n### Формулы\n- `I/you/we/they + V1`\n- `he/she/it + V1+s`\n- `Do/Does + subject + V1?`\n\n### Типичная ошибка\n❌ He go to school.\n✅ He goes to school.",
      "keyPoints": [
        "Утверждение: I/you/we/they + глагол. He/she/it + глагол+s (go→goes, watch→watches).",
        "Вопросы и отрицание: Do/Does + подлежащее + глагол. Don't/Doesn't + глагол.",
        "Запомни формулы: I/you/we/they + V1; he/she/it + V1+s; Do/Does + subject + V1?",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «every day»?",
        "options": [
          "знать",
          "нравиться",
          "каждый день",
          "никогда"
        ],
        "answer": "каждый день"
      },
      {
        "question": "What is «sometimes»?",
        "options": [
          "идти",
          "иногда",
          "хотеть",
          "завтрак"
        ],
        "answer": "иногда"
      },
      {
        "question": "What is «never»?",
        "options": [
          "никогда",
          "идти",
          "хотеть",
          "завтрак"
        ],
        "answer": "никогда"
      },
      {
        "question": "What is «wake up»?",
        "options": [
          "просыпаться",
          "никогда",
          "идти",
          "нуждаться"
        ],
        "answer": "просыпаться"
      },
      {
        "question": "What is «breakfast»?",
        "options": [
          "завтрак",
          "каждый день",
          "иногда",
          "хотеть"
        ],
        "answer": "завтрак"
      },
      {
        "type": "gap",
        "sentence": "The word «идти» in English is ___.",
        "answer": "go",
        "hint": "g…"
      },
      {
        "type": "gap",
        "sentence": "The word «нравиться» in English is ___.",
        "answer": "like",
        "hint": "l…"
      },
      {
        "type": "gap",
        "sentence": "The word «хотеть» in English is ___.",
        "answer": "want",
        "hint": "w…"
      }
    ]
  },
  {
    "id": 6,
    "level": "A1",
    "title": "There is / There are",
    "titleRu": "There is / There are",
    "topic": "Местоположение",
    "description": "Конструкции для описания того, что есть и где находится.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "Is there a bank near here?",
        "keywords": [
          "there is",
          "there are",
          "in",
          "on",
          "under",
          "next to",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "There is a cat on the sofa."
      },
      {
        "prompt": "Are there any parks in your city?",
        "keywords": [
          "there is",
          "there are",
          "in",
          "on",
          "under",
          "next to",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The keys are on the table."
      },
      {
        "prompt": "How many rooms are there in your flat?",
        "keywords": [
          "there is",
          "there are",
          "in",
          "on",
          "under",
          "next to",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "There is a cat on the sofa."
      }
    ],
    "vocab": [
      {
        "en": "there is",
        "ru": "есть (ед.ч.)"
      },
      {
        "en": "there are",
        "ru": "есть (мн.ч.)"
      },
      {
        "en": "in",
        "ru": "в"
      },
      {
        "en": "on",
        "ru": "на"
      },
      {
        "en": "under",
        "ru": "под"
      },
      {
        "en": "next to",
        "ru": "рядом с"
      },
      {
        "en": "behind",
        "ru": "за"
      },
      {
        "en": "room",
        "ru": "комната"
      },
      {
        "en": "kitchen",
        "ru": "кухня"
      },
      {
        "en": "any",
        "ru": "какой-нибудь"
      }
    ],
    "grammar": {
      "title": "There is / There are",
      "blocks": [
        {
          "title": "Формы",
          "desc": "There is + ед.ч. There are + мн.ч. Вопрос: Is there...? Are there...?",
          "example": "There is a cat on the sofa."
        },
        {
          "title": "Предлоги места",
          "desc": "In — внутри. On — на поверхности. Under — под. Next to — рядом. Behind — за.",
          "example": "The keys are on the table."
        }
      ],
      "formulas": [
        "There is + singular noun",
        "There are + plural noun",
        "Preposition: in / on / under / next to"
      ],
      "extraExamples": [
        {
          "label": "There is/are",
          "items": [
            "There are two windows in the room.",
            "Is there a supermarket nearby?"
          ]
        },
        {
          "label": "Предлоги",
          "items": [
            "The book is under the bed.",
            "She sits next to me."
          ]
        }
      ],
      "mistake": {
        "wrong": "There are a book on the table.",
        "right": "There is a book on the table."
      }
    },
    "quiz": [
      {
        "sentence": "There ___ a pen on the desk.",
        "options": [
          "is",
          "are"
        ],
        "answer": "is"
      },
      {
        "sentence": "There ___ many students in the class.",
        "options": [
          "is",
          "are"
        ],
        "answer": "are"
      },
      {
        "sentence": "The picture is ___ the wall.",
        "options": [
          "in",
          "on"
        ],
        "answer": "on"
      },
      {
        "sentence": "___ there any milk?",
        "options": [
          "Is",
          "Are"
        ],
        "answer": "Is"
      },
      {
        "sentence": "The cat is ___ the chair.",
        "options": [
          "under",
          "on"
        ],
        "answer": "under"
      }
    ],
    "pronunciation": [
      {
        "phrase": "There is a book.",
        "ipa": "/ðeər ɪz ə bʊk/",
        "tip": "There is → There's",
        "expected": "There is a book."
      },
      {
        "phrase": "There are two cats.",
        "ipa": "/ðeər ɑː tuː kæts/",
        "tip": "There are — не опускай are",
        "expected": "There are two cats."
      },
      {
        "phrase": "on the table",
        "ipa": "/ɒn ðə ˈteɪbl/",
        "tip": "On the — связно",
        "expected": "on the table"
      },
      {
        "phrase": "next to me",
        "ipa": "/nekst tə miː/",
        "tip": "Next to — t часто мягкое",
        "expected": "next to me"
      },
      {
        "phrase": "Is there any water?",
        "ipa": "/ɪz ðeər eni ˈwɔːtə/",
        "tip": "Any — слабое в вопросе",
        "expected": "Is there any water?"
      }
    ],
    "culture": {
      "watch": [
        "Geography documentaries — describing places"
      ],
      "listen": [
        "Louis Armstrong — What a Wonderful World"
      ],
      "read": [
        "City guides in simple English"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What is there in the room?",
        "keywords": [
          "there is",
          "there are",
          "in",
          "on",
          "under",
          "next to",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "There is a cat on the sofa."
      },
      {
        "prompt": "How many people are there?",
        "keywords": [
          "there is",
          "there are",
          "in",
          "on",
          "under",
          "next to",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The keys are on the table."
      },
      {
        "prompt": "Where is the object?",
        "keywords": [
          "there is",
          "there are",
          "in",
          "on",
          "under",
          "next to",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "There is a cat on the sofa."
      },
      {
        "prompt": "Is there a shop nearby?",
        "keywords": [
          "there is",
          "there are",
          "in",
          "on",
          "under",
          "next to",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The keys are on the table."
      },
      {
        "prompt": "What prepositions are used?",
        "keywords": [
          "there is",
          "there are",
          "in",
          "on",
          "under",
          "next to",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "There is a cat on the sofa."
      }
    ],
    "speaking": [
      {
        "task": "Опиши свою комнату: 5 предложений с there is/are.",
        "keywords": [
          "there is",
          "there are",
          "in",
          "on",
          "under",
          "next to",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "There is a cat on the sofa.",
        "useSpeech": true
      },
      {
        "task": "Опиши свой город: parks, shops, schools.",
        "keywords": [
          "there is",
          "there are",
          "in",
          "on",
          "under",
          "next to",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The keys are on the table.",
        "useSpeech": true
      },
      {
        "task": "Скажи, где находятся 5 предметов с предлогами.",
        "keywords": [
          "there is",
          "there are",
          "in",
          "on",
          "under",
          "next to",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "There is a cat on the sofa.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "there is",
        "trans": "есть (ед.ч.)",
        "example": "I use 'there is' every day."
      },
      {
        "word": "there are",
        "trans": "есть (мн.ч.)",
        "example": "I use 'there are' every day."
      },
      {
        "word": "in",
        "trans": "в",
        "example": "I use 'in' every day."
      },
      {
        "word": "on",
        "trans": "на",
        "example": "I use 'on' every day."
      },
      {
        "word": "under",
        "trans": "под",
        "example": "I use 'under' every day."
      },
      {
        "word": "next to",
        "trans": "рядом с",
        "example": "I use 'next to' every day."
      },
      {
        "word": "behind",
        "trans": "за",
        "example": "I use 'behind' every day."
      },
      {
        "word": "room",
        "trans": "комната",
        "example": "I use 'room' every day."
      },
      {
        "word": "kitchen",
        "trans": "кухня",
        "example": "I use 'kitchen' every day."
      },
      {
        "word": "any",
        "trans": "какой-нибудь",
        "example": "I use 'any' every day."
      },
      {
        "word": "there is",
        "trans": "есть (ед.ч.)",
        "example": "Practice makes progress."
      },
      {
        "word": "there are",
        "trans": "есть (мн.ч.)",
        "example": "Practice makes progress."
      },
      {
        "word": "in",
        "trans": "в",
        "example": "Practice makes progress."
      },
      {
        "word": "on",
        "trans": "на",
        "example": "Practice makes progress."
      },
      {
        "word": "under",
        "trans": "под",
        "example": "Practice makes progress."
      },
      {
        "word": "next to",
        "trans": "рядом с",
        "example": "Practice makes progress."
      },
      {
        "word": "behind",
        "trans": "за",
        "example": "Practice makes progress."
      },
      {
        "word": "room",
        "trans": "комната",
        "example": "Practice makes progress."
      },
      {
        "word": "kitchen",
        "trans": "кухня",
        "example": "Practice makes progress."
      },
      {
        "word": "any",
        "trans": "какой-нибудь",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "There ___ a pen on the desk.",
        "options": [
          "is",
          "are"
        ],
        "answer": "is"
      },
      {
        "sentence": "There ___ many students in the class.",
        "options": [
          "is",
          "are"
        ],
        "answer": "are"
      }
    ],
    "theory": {
      "intro": "Конструкции для описания того, что есть и где находится.",
      "reading": "**There is / There are** — Конструкции для описания того, что есть и где находится.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### Формы\nThere is + ед.ч. There are + мн.ч. Вопрос: Is there...? Are there...?\n\n*Пример:* There is a cat on the sofa.\n\n### Предлоги места\nIn — внутри. On — на поверхности. Under — под. Next to — рядом. Behind — за.\n\n*Пример:* The keys are on the table.\n\n### Формулы\n- `There is + singular noun`\n- `There are + plural noun`\n- `Preposition: in / on / under / next to`\n\n### Типичная ошибка\n❌ There are a book on the table.\n✅ There is a book on the table.",
      "keyPoints": [
        "Формы: There is + ед.ч. There are + мн.ч. Вопрос: Is there...? Are there...?",
        "Предлоги места: In — внутри. On — на поверхности. Under — под. Next to — рядом. Behind — за.",
        "Запомни формулы: There is + singular noun; There are + plural noun; Preposition: in / on / under / next to",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «there is»?",
        "options": [
          "за",
          "в",
          "рядом с",
          "есть (ед.ч.)"
        ],
        "answer": "есть (ед.ч.)"
      },
      {
        "question": "What is «there are»?",
        "options": [
          "под",
          "есть (ед.ч.)",
          "есть (мн.ч.)",
          "за"
        ],
        "answer": "есть (мн.ч.)"
      },
      {
        "question": "What is «in»?",
        "options": [
          "в",
          "кухня",
          "на",
          "под"
        ],
        "answer": "в"
      },
      {
        "question": "What is «on»?",
        "options": [
          "на",
          "какой-нибудь",
          "комната",
          "кухня"
        ],
        "answer": "на"
      },
      {
        "question": "What is «under»?",
        "options": [
          "под",
          "какой-нибудь",
          "есть (мн.ч.)",
          "кухня"
        ],
        "answer": "под"
      },
      {
        "type": "gap",
        "sentence": "The word «рядом с» in English is ___.",
        "answer": "next to",
        "hint": "n…"
      },
      {
        "type": "gap",
        "sentence": "The word «за» in English is ___.",
        "answer": "behind",
        "hint": "b…"
      },
      {
        "type": "gap",
        "sentence": "The word «комната» in English is ___.",
        "answer": "room",
        "hint": "r…"
      }
    ]
  },
  {
    "id": 7,
    "level": "A1",
    "title": "Can — Ability",
    "titleRu": "Can — умение и возможность",
    "topic": "Могу / не могу",
    "description": "Модальный глагол can для способностей, разрешений и просьб.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "Can you swim?",
        "keywords": [
          "can",
          "can't",
          "swim",
          "drive",
          "cook",
          "dance",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I can swim but I can't drive."
      },
      {
        "prompt": "Can I open the window?",
        "keywords": [
          "can",
          "can't",
          "swim",
          "drive",
          "cook",
          "dance",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Can you help me, please?"
      },
      {
        "prompt": "What can you do well?",
        "keywords": [
          "can",
          "can't",
          "swim",
          "drive",
          "cook",
          "dance",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I can swim but I can't drive."
      }
    ],
    "vocab": [
      {
        "en": "can",
        "ru": "мочь, уметь"
      },
      {
        "en": "can't",
        "ru": "не мочь"
      },
      {
        "en": "swim",
        "ru": "плавать"
      },
      {
        "en": "drive",
        "ru": "водить"
      },
      {
        "en": "cook",
        "ru": "готовить"
      },
      {
        "en": "dance",
        "ru": "танцевать"
      },
      {
        "en": "sing",
        "ru": "петь"
      },
      {
        "en": "help",
        "ru": "помогать"
      },
      {
        "en": "speak",
        "ru": "говорить"
      },
      {
        "en": "understand",
        "ru": "понимать"
      }
    ],
    "grammar": {
      "title": "Can",
      "blocks": [
        {
          "title": "Способность",
          "desc": "Can + глагол (без to). Can't — отрицание. Can не меняется: I/you/he can.",
          "example": "I can swim but I can't drive."
        },
        {
          "title": "Просьба и разрешение",
          "desc": "Can I...? — можно ли мне. Can you...? — не могли бы вы.",
          "example": "Can you help me, please?"
        }
      ],
      "formulas": [
        "Subject + can + V1",
        "Subject + can't + V1",
        "Can + subject + V1?"
      ],
      "extraExamples": [
        {
          "label": "Способность",
          "items": [
            "She can speak three languages.",
            "They can't come today."
          ]
        },
        {
          "label": "Просьбы",
          "items": [
            "Can I sit here?",
            "Can you repeat that?"
          ]
        }
      ],
      "mistake": {
        "wrong": "She can to swim.",
        "right": "She can swim."
      }
    },
    "quiz": [
      {
        "sentence": "I ___ play the guitar.",
        "options": [
          "can",
          "cans"
        ],
        "answer": "can"
      },
      {
        "sentence": "He ___ drive a car.",
        "options": [
          "can't",
          "don't"
        ],
        "answer": "can't"
      },
      {
        "sentence": "___ you help me?",
        "options": [
          "Can",
          "Do"
        ],
        "answer": "Can"
      },
      {
        "sentence": "She ___ speak Japanese.",
        "options": [
          "can",
          "cans"
        ],
        "answer": "can"
      },
      {
        "sentence": "___ I use your phone?",
        "options": [
          "Can",
          "Am"
        ],
        "answer": "Can"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I can swim.",
        "ipa": "/aɪ kən swɪm/",
        "tip": "Can — слабое /kən/",
        "expected": "I can swim."
      },
      {
        "phrase": "Can you help me?",
        "ipa": "/kən juː help miː/",
        "tip": "Help me — связно",
        "expected": "Can you help me?"
      },
      {
        "phrase": "She can't drive.",
        "ipa": "/ʃiː kɑːnt draɪv/",
        "tip": "Can't — долгий /ɑː/",
        "expected": "She can't drive."
      },
      {
        "phrase": "Can I sit here?",
        "ipa": "/kən aɪ sɪt hɪə/",
        "tip": "Sit here — не пауза между словами",
        "expected": "Can I sit here?"
      },
      {
        "phrase": "We can understand.",
        "ipa": "/wiː kən ʌndəˈstænd/",
        "tip": "Understand — ударение на -stand",
        "expected": "We can understand."
      }
    ],
    "culture": {
      "watch": [
        "Talent shows — can/can't abilities"
      ],
      "listen": [
        "Survivor — Eye of the Tiger"
      ],
      "read": [
        "Skills and hobbies vocabulary lists"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What can the character do?",
        "keywords": [
          "can",
          "can't",
          "swim",
          "drive",
          "cook",
          "dance",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I can swim but I can't drive."
      },
      {
        "prompt": "What can't they do?",
        "keywords": [
          "can",
          "can't",
          "swim",
          "drive",
          "cook",
          "dance",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Can you help me, please?"
      },
      {
        "prompt": "Can they help?",
        "keywords": [
          "can",
          "can't",
          "swim",
          "drive",
          "cook",
          "dance",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I can swim but I can't drive."
      },
      {
        "prompt": "What languages can they speak?",
        "keywords": [
          "can",
          "can't",
          "swim",
          "drive",
          "cook",
          "dance",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Can you help me, please?"
      },
      {
        "prompt": "Can I...? — what do they ask?",
        "keywords": [
          "can",
          "can't",
          "swim",
          "drive",
          "cook",
          "dance",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I can swim but I can't drive."
      }
    ],
    "speaking": [
      {
        "task": "Составь 5 предложений: I can... / I can't...",
        "keywords": [
          "can",
          "can't",
          "swim",
          "drive",
          "cook",
          "dance",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I can swim but I can't drive.",
        "useSpeech": true
      },
      {
        "task": "Задай 3 просьбы с Can you...?",
        "keywords": [
          "can",
          "can't",
          "swim",
          "drive",
          "cook",
          "dance",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Can you help me, please?",
        "useSpeech": true
      },
      {
        "task": "Расскажи о талантах друга или героя.",
        "keywords": [
          "can",
          "can't",
          "swim",
          "drive",
          "cook",
          "dance",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I can swim but I can't drive.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "can",
        "trans": "мочь, уметь",
        "example": "I use 'can' every day."
      },
      {
        "word": "can't",
        "trans": "не мочь",
        "example": "I use 'can't' every day."
      },
      {
        "word": "swim",
        "trans": "плавать",
        "example": "I use 'swim' every day."
      },
      {
        "word": "drive",
        "trans": "водить",
        "example": "I use 'drive' every day."
      },
      {
        "word": "cook",
        "trans": "готовить",
        "example": "I use 'cook' every day."
      },
      {
        "word": "dance",
        "trans": "танцевать",
        "example": "I use 'dance' every day."
      },
      {
        "word": "sing",
        "trans": "петь",
        "example": "I use 'sing' every day."
      },
      {
        "word": "help",
        "trans": "помогать",
        "example": "I use 'help' every day."
      },
      {
        "word": "speak",
        "trans": "говорить",
        "example": "I use 'speak' every day."
      },
      {
        "word": "understand",
        "trans": "понимать",
        "example": "I use 'understand' every day."
      },
      {
        "word": "can",
        "trans": "мочь, уметь",
        "example": "Practice makes progress."
      },
      {
        "word": "can't",
        "trans": "не мочь",
        "example": "Practice makes progress."
      },
      {
        "word": "swim",
        "trans": "плавать",
        "example": "Practice makes progress."
      },
      {
        "word": "drive",
        "trans": "водить",
        "example": "Practice makes progress."
      },
      {
        "word": "cook",
        "trans": "готовить",
        "example": "Practice makes progress."
      },
      {
        "word": "dance",
        "trans": "танцевать",
        "example": "Practice makes progress."
      },
      {
        "word": "sing",
        "trans": "петь",
        "example": "Practice makes progress."
      },
      {
        "word": "help",
        "trans": "помогать",
        "example": "Practice makes progress."
      },
      {
        "word": "speak",
        "trans": "говорить",
        "example": "Practice makes progress."
      },
      {
        "word": "understand",
        "trans": "понимать",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "I ___ play the guitar.",
        "options": [
          "can",
          "cans"
        ],
        "answer": "can"
      },
      {
        "sentence": "He ___ drive a car.",
        "options": [
          "can't",
          "don't"
        ],
        "answer": "can't"
      }
    ],
    "theory": {
      "intro": "Модальный глагол can для способностей, разрешений и просьб.",
      "reading": "**Can — умение и возможность** — Модальный глагол can для способностей, разрешений и просьб.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### Способность\nCan + глагол (без to). Can't — отрицание. Can не меняется: I/you/he can.\n\n*Пример:* I can swim but I can't drive.\n\n### Просьба и разрешение\nCan I...? — можно ли мне. Can you...? — не могли бы вы.\n\n*Пример:* Can you help me, please?\n\n### Формулы\n- `Subject + can + V1`\n- `Subject + can't + V1`\n- `Can + subject + V1?`\n\n### Типичная ошибка\n❌ She can to swim.\n✅ She can swim.",
      "keyPoints": [
        "Способность: Can + глагол (без to). Can't — отрицание. Can не меняется: I/you/he can.",
        "Просьба и разрешение: Can I...? — можно ли мне. Can you...? — не могли бы вы.",
        "Запомни формулы: Subject + can + V1; Subject + can't + V1; Can + subject + V1?",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «can»?",
        "options": [
          "мочь, уметь",
          "не мочь",
          "готовить",
          "танцевать"
        ],
        "answer": "мочь, уметь"
      },
      {
        "question": "What is «can't»?",
        "options": [
          "мочь, уметь",
          "не мочь",
          "петь",
          "помогать"
        ],
        "answer": "не мочь"
      },
      {
        "question": "What is «swim»?",
        "options": [
          "плавать",
          "водить",
          "петь",
          "танцевать"
        ],
        "answer": "плавать"
      },
      {
        "question": "What is «drive»?",
        "options": [
          "плавать",
          "мочь, уметь",
          "танцевать",
          "водить"
        ],
        "answer": "водить"
      },
      {
        "question": "What is «cook»?",
        "options": [
          "понимать",
          "танцевать",
          "петь",
          "готовить"
        ],
        "answer": "готовить"
      },
      {
        "type": "gap",
        "sentence": "The word «танцевать» in English is ___.",
        "answer": "dance",
        "hint": "d…"
      },
      {
        "type": "gap",
        "sentence": "The word «петь» in English is ___.",
        "answer": "sing",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «помогать» in English is ___.",
        "answer": "help",
        "hint": "h…"
      }
    ]
  },
  {
    "id": 8,
    "level": "A1",
    "title": "A1 Review",
    "titleRu": "Повторение A1",
    "topic": "Was/Were, numbers, time",
    "description": "Итоговый урок A1: was/were, числа, время и повторение ключевых тем.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "Where were you yesterday?",
        "keywords": [
          "was",
          "were",
          "yesterday",
          "o'clock",
          "half past",
          "quarter",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I was at home yesterday."
      },
      {
        "prompt": "What time is it?",
        "keywords": [
          "was",
          "were",
          "yesterday",
          "o'clock",
          "half past",
          "quarter",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "It's half past nine."
      },
      {
        "prompt": "How much does it cost?",
        "keywords": [
          "was",
          "were",
          "yesterday",
          "o'clock",
          "half past",
          "quarter",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I was at home yesterday."
      }
    ],
    "vocab": [
      {
        "en": "was",
        "ru": "был(а)"
      },
      {
        "en": "were",
        "ru": "были"
      },
      {
        "en": "yesterday",
        "ru": "вчера"
      },
      {
        "en": "o'clock",
        "ru": "ровно (время)"
      },
      {
        "en": "half past",
        "ru": "половина"
      },
      {
        "en": "quarter",
        "ru": "четверть"
      },
      {
        "en": "number",
        "ru": "число"
      },
      {
        "en": "price",
        "ru": "цена"
      },
      {
        "en": "how much",
        "ru": "сколько стоит"
      },
      {
        "en": "how many",
        "ru": "сколько (штук)"
      }
    ],
    "grammar": {
      "title": "A1 Review",
      "blocks": [
        {
          "title": "Was / Were",
          "desc": "Прошедшее от to be: I/he/she/it was, we/you/they were. Was/Were + подлежащее для вопросов.",
          "example": "I was at home yesterday."
        },
        {
          "title": "Time & Numbers",
          "desc": "What time is it? — It's three o'clock. Half past two. How many (счётные) / How much (несчётные).",
          "example": "It's half past nine."
        }
      ],
      "formulas": [
        "I/he/she/it was / we/you/they were",
        "What time is it? — It's + time",
        "How many + plural / How much + uncountable"
      ],
      "extraExamples": [
        {
          "label": "Was/Were",
          "items": [
            "They were happy.",
            "Was she at school?"
          ]
        },
        {
          "label": "Время",
          "items": [
            "It's quarter to five.",
            "The lesson starts at ten."
          ]
        }
      ],
      "mistake": {
        "wrong": "I were tired.",
        "right": "I was tired."
      }
    },
    "quiz": [
      {
        "sentence": "I ___ at home yesterday.",
        "options": [
          "was",
          "were"
        ],
        "answer": "was"
      },
      {
        "sentence": "They ___ late.",
        "options": [
          "was",
          "were"
        ],
        "answer": "were"
      },
      {
        "sentence": "___ she happy?",
        "options": [
          "Was",
          "Were"
        ],
        "answer": "Was"
      },
      {
        "sentence": "It's half ___ three.",
        "options": [
          "past",
          "to"
        ],
        "answer": "past"
      },
      {
        "sentence": "How ___ apples do you want?",
        "options": [
          "many",
          "much"
        ],
        "answer": "many"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I was at home.",
        "ipa": "/aɪ wɒz ət həʊm/",
        "tip": "Was — слабое /wəz/",
        "expected": "I was at home."
      },
      {
        "phrase": "They were happy.",
        "ipa": "/ðeɪ wə ˈhæpi/",
        "tip": "Were — /wə/ в быстрой речи",
        "expected": "They were happy."
      },
      {
        "phrase": "Half past two.",
        "ipa": "/hɑːf pɑːst tuː/",
        "tip": "Half — silent l",
        "expected": "Half past two."
      },
      {
        "phrase": "How much is it?",
        "ipa": "/haʊ mʌtʃ ɪz ɪt/",
        "tip": "Much — для цены и несчётных",
        "expected": "How much is it?"
      },
      {
        "phrase": "Quarter to five.",
        "ipa": "/ˈkwɔːtə tə faɪv/",
        "tip": "Quarter — /kwɔːtə/",
        "expected": "Quarter to five."
      }
    ],
    "culture": {
      "watch": [
        "Travel vlogs — time and prices"
      ],
      "listen": [
        "Pink Floyd — Time"
      ],
      "read": [
        "A1 review exercises and dialogues"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "Where were they yesterday?",
        "keywords": [
          "was",
          "were",
          "yesterday",
          "o'clock",
          "half past",
          "quarter",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I was at home yesterday."
      },
      {
        "prompt": "What time is it in the scene?",
        "keywords": [
          "was",
          "were",
          "yesterday",
          "o'clock",
          "half past",
          "quarter",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It's half past nine."
      },
      {
        "prompt": "How much does it cost?",
        "keywords": [
          "was",
          "were",
          "yesterday",
          "o'clock",
          "half past",
          "quarter",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I was at home yesterday."
      },
      {
        "prompt": "How many people were there?",
        "keywords": [
          "was",
          "were",
          "yesterday",
          "o'clock",
          "half past",
          "quarter",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It's half past nine."
      },
      {
        "prompt": "What A1 grammar appears?",
        "keywords": [
          "was",
          "were",
          "yesterday",
          "o'clock",
          "half past",
          "quarter",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I was at home yesterday."
      }
    ],
    "speaking": [
      {
        "task": "Расскажи, где ты был вчера — was/were.",
        "keywords": [
          "was",
          "were",
          "yesterday",
          "o'clock",
          "half past",
          "quarter",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I was at home yesterday.",
        "useSpeech": true
      },
      {
        "task": "Назови время 5 событий из своего дня.",
        "keywords": [
          "was",
          "were",
          "yesterday",
          "o'clock",
          "half past",
          "quarter",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "It's half past nine.",
        "useSpeech": true
      },
      {
        "task": "Итоговый монолог о себе: 8–10 предложений (A1).",
        "keywords": [
          "was",
          "were",
          "yesterday",
          "o'clock",
          "half past",
          "quarter",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I was at home yesterday.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "was",
        "trans": "был(а)",
        "example": "I use 'was' every day."
      },
      {
        "word": "were",
        "trans": "были",
        "example": "I use 'were' every day."
      },
      {
        "word": "yesterday",
        "trans": "вчера",
        "example": "I use 'yesterday' every day."
      },
      {
        "word": "o'clock",
        "trans": "ровно (время)",
        "example": "I use 'o'clock' every day."
      },
      {
        "word": "half past",
        "trans": "половина",
        "example": "I use 'half past' every day."
      },
      {
        "word": "quarter",
        "trans": "четверть",
        "example": "I use 'quarter' every day."
      },
      {
        "word": "number",
        "trans": "число",
        "example": "I use 'number' every day."
      },
      {
        "word": "price",
        "trans": "цена",
        "example": "I use 'price' every day."
      },
      {
        "word": "how much",
        "trans": "сколько стоит",
        "example": "I use 'how much' every day."
      },
      {
        "word": "how many",
        "trans": "сколько (штук)",
        "example": "I use 'how many' every day."
      },
      {
        "word": "was",
        "trans": "был(а)",
        "example": "Practice makes progress."
      },
      {
        "word": "were",
        "trans": "были",
        "example": "Practice makes progress."
      },
      {
        "word": "yesterday",
        "trans": "вчера",
        "example": "Practice makes progress."
      },
      {
        "word": "o'clock",
        "trans": "ровно (время)",
        "example": "Practice makes progress."
      },
      {
        "word": "half past",
        "trans": "половина",
        "example": "Practice makes progress."
      },
      {
        "word": "quarter",
        "trans": "четверть",
        "example": "Practice makes progress."
      },
      {
        "word": "number",
        "trans": "число",
        "example": "Practice makes progress."
      },
      {
        "word": "price",
        "trans": "цена",
        "example": "Practice makes progress."
      },
      {
        "word": "how much",
        "trans": "сколько стоит",
        "example": "Practice makes progress."
      },
      {
        "word": "how many",
        "trans": "сколько (штук)",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "I ___ at home yesterday.",
        "options": [
          "was",
          "were"
        ],
        "answer": "was"
      },
      {
        "sentence": "They ___ late.",
        "options": [
          "was",
          "were"
        ],
        "answer": "were"
      }
    ],
    "theory": {
      "intro": "Итоговый урок A1: was/were, числа, время и повторение ключевых тем.",
      "reading": "**Повторение A1** — Итоговый урок A1: was/were, числа, время и повторение ключевых тем.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### Was / Were\nПрошедшее от to be: I/he/she/it was, we/you/they were. Was/Were + подлежащее для вопросов.\n\n*Пример:* I was at home yesterday.\n\n### Time & Numbers\nWhat time is it? — It's three o'clock. Half past two. How many (счётные) / How much (несчётные).\n\n*Пример:* It's half past nine.\n\n### Формулы\n- `I/he/she/it was / we/you/they were`\n- `What time is it? — It's + time`\n- `How many + plural / How much + uncountable`\n\n### Типичная ошибка\n❌ I were tired.\n✅ I was tired.",
      "keyPoints": [
        "Was / Were: Прошедшее от to be: I/he/she/it was, we/you/they were. Was/Were + подлежащее для",
        "Time & Numbers: What time is it? — It's three o'clock. Half past two. How many (счётные) / How m",
        "Запомни формулы: I/he/she/it was / we/you/they were; What time is it? — It's + time; How many + plural / How much + uncountable",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «was»?",
        "options": [
          "половина",
          "был(а)",
          "сколько стоит",
          "были"
        ],
        "answer": "был(а)"
      },
      {
        "question": "What is «were»?",
        "options": [
          "вчера",
          "были",
          "был(а)",
          "половина"
        ],
        "answer": "были"
      },
      {
        "question": "What is «yesterday»?",
        "options": [
          "сколько стоит",
          "вчера",
          "сколько (штук)",
          "цена"
        ],
        "answer": "вчера"
      },
      {
        "question": "What is «o'clock»?",
        "options": [
          "были",
          "цена",
          "ровно (время)",
          "половина"
        ],
        "answer": "ровно (время)"
      },
      {
        "question": "What is «half past»?",
        "options": [
          "сколько (штук)",
          "половина",
          "был(а)",
          "число"
        ],
        "answer": "половина"
      },
      {
        "type": "gap",
        "sentence": "The word «четверть» in English is ___.",
        "answer": "quarter",
        "hint": "q…"
      },
      {
        "type": "gap",
        "sentence": "The word «число» in English is ___.",
        "answer": "number",
        "hint": "n…"
      },
      {
        "type": "gap",
        "sentence": "The word «цена» in English is ___.",
        "answer": "price",
        "hint": "p…"
      }
    ]
  },
  {
    "level": "A1",
    "title": "Family",
    "titleRu": "Семья",
    "topic": "Родственники",
    "description": "Слова для описания семьи.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "How many people are in your family?",
        "keywords": [
          "mother",
          "father",
          "sister",
          "brother",
          "son",
          "daughter",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "My parents live in Moscow."
      },
      {
        "prompt": "Do you have brothers or sisters?",
        "keywords": [
          "mother",
          "father",
          "sister",
          "brother",
          "son",
          "daughter",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Her brother is a teacher."
      },
      {
        "prompt": "Where do your parents live?",
        "keywords": [
          "mother",
          "father",
          "sister",
          "brother",
          "son",
          "daughter",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "My parents live in Moscow."
      }
    ],
    "vocab": [
      {
        "en": "mother",
        "ru": "мать"
      },
      {
        "en": "father",
        "ru": "отец"
      },
      {
        "en": "sister",
        "ru": "сестра"
      },
      {
        "en": "brother",
        "ru": "брат"
      },
      {
        "en": "son",
        "ru": "сын"
      },
      {
        "en": "daughter",
        "ru": "дочь"
      },
      {
        "en": "parents",
        "ru": "родители"
      },
      {
        "en": "husband",
        "ru": "муж"
      },
      {
        "en": "wife",
        "ru": "жена"
      },
      {
        "en": "family",
        "ru": "семья"
      }
    ],
    "grammar": {
      "title": "Family",
      "blocks": [
        {
          "title": "Члены семьи",
          "desc": "Mother, father, brother, sister.",
          "example": "My parents live in Moscow."
        },
        {
          "title": "Притяжательные",
          "desc": "My, her, his + noun.",
          "example": "Her brother is a teacher."
        }
      ],
      "formulas": [
        "my + family member",
        "her/his + noun"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "My parents live in Moscow.",
            "Her brother is a teacher."
          ]
        }
      ],
      "mistake": {
        "wrong": "I have two brother.",
        "right": "I have two brothers."
      }
    },
    "quiz": [
      {
        "sentence": "My ___ is a doctor.",
        "options": [
          "mother",
          "mothers"
        ],
        "answer": "mother"
      },
      {
        "sentence": "They have two ___.",
        "options": [
          "childs",
          "children"
        ],
        "answer": "children"
      },
      {
        "sentence": "___ parents are kind.",
        "options": [
          "She",
          "Her"
        ],
        "answer": "Her"
      },
      {
        "sentence": "I live with my ___.",
        "options": [
          "family",
          "families"
        ],
        "answer": "family"
      },
      {
        "sentence": "His ___ works at school.",
        "options": [
          "sister",
          "sisters"
        ],
        "answer": "sister"
      }
    ],
    "pronunciation": [
      {
        "phrase": "My parents live in Moscow.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "My parents live in Moscow."
      },
      {
        "phrase": "Her brother is a teacher.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Her brother is a teacher."
      },
      {
        "phrase": "How many people are in your family?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "How many people are in your family?"
      },
      {
        "phrase": "mother is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "mother is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "Family A1 videos"
      ],
      "listen": [
        "We Are Family"
      ],
      "read": [
        "Family exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "Who is in the family?",
        "keywords": [
          "mother",
          "father",
          "sister",
          "brother",
          "son",
          "daughter",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "My parents live in Moscow."
      },
      {
        "prompt": "How many children?",
        "keywords": [
          "mother",
          "father",
          "sister",
          "brother",
          "son",
          "daughter",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Her brother is a teacher."
      },
      {
        "prompt": "What does the father do?",
        "keywords": [
          "mother",
          "father",
          "sister",
          "brother",
          "son",
          "daughter",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "My parents live in Moscow."
      },
      {
        "prompt": "Where does the mother work?",
        "keywords": [
          "mother",
          "father",
          "sister",
          "brother",
          "son",
          "daughter",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Her brother is a teacher."
      },
      {
        "prompt": "Is the family big?",
        "keywords": [
          "mother",
          "father",
          "sister",
          "brother",
          "son",
          "daughter",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "My parents live in Moscow."
      }
    ],
    "speaking": [
      {
        "task": "Describe your family in 5 sentences.",
        "keywords": [
          "mother",
          "father",
          "sister",
          "brother",
          "son",
          "daughter",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "My parents live in Moscow.",
        "useSpeech": true
      },
      {
        "task": "Introduce your parents.",
        "keywords": [
          "mother",
          "father",
          "sister",
          "brother",
          "son",
          "daughter",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Her brother is a teacher.",
        "useSpeech": true
      },
      {
        "task": "Say what your siblings do.",
        "keywords": [
          "mother",
          "father",
          "sister",
          "brother",
          "son",
          "daughter",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "My parents live in Moscow.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "mother",
        "trans": "мать",
        "example": "I use 'mother' every day."
      },
      {
        "word": "father",
        "trans": "отец",
        "example": "I use 'father' every day."
      },
      {
        "word": "sister",
        "trans": "сестра",
        "example": "I use 'sister' every day."
      },
      {
        "word": "brother",
        "trans": "брат",
        "example": "I use 'brother' every day."
      },
      {
        "word": "son",
        "trans": "сын",
        "example": "I use 'son' every day."
      },
      {
        "word": "daughter",
        "trans": "дочь",
        "example": "I use 'daughter' every day."
      },
      {
        "word": "parents",
        "trans": "родители",
        "example": "I use 'parents' every day."
      },
      {
        "word": "husband",
        "trans": "муж",
        "example": "I use 'husband' every day."
      },
      {
        "word": "wife",
        "trans": "жена",
        "example": "I use 'wife' every day."
      },
      {
        "word": "family",
        "trans": "семья",
        "example": "I use 'family' every day."
      },
      {
        "word": "mother",
        "trans": "мать",
        "example": "Practice makes progress."
      },
      {
        "word": "father",
        "trans": "отец",
        "example": "Practice makes progress."
      },
      {
        "word": "sister",
        "trans": "сестра",
        "example": "Practice makes progress."
      },
      {
        "word": "brother",
        "trans": "брат",
        "example": "Practice makes progress."
      },
      {
        "word": "son",
        "trans": "сын",
        "example": "Practice makes progress."
      },
      {
        "word": "daughter",
        "trans": "дочь",
        "example": "Practice makes progress."
      },
      {
        "word": "parents",
        "trans": "родители",
        "example": "Practice makes progress."
      },
      {
        "word": "husband",
        "trans": "муж",
        "example": "Practice makes progress."
      },
      {
        "word": "wife",
        "trans": "жена",
        "example": "Practice makes progress."
      },
      {
        "word": "family",
        "trans": "семья",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "My ___ is a doctor.",
        "options": [
          "mother",
          "mothers"
        ],
        "answer": "mother"
      },
      {
        "sentence": "They have two ___.",
        "options": [
          "childs",
          "children"
        ],
        "answer": "children"
      }
    ],
    "id": 9,
    "theory": {
      "intro": "Слова для описания семьи.",
      "reading": "**Семья** — Слова для описания семьи.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### Члены семьи\nMother, father, brother, sister.\n\n*Пример:* My parents live in Moscow.\n\n### Притяжательные\nMy, her, his + noun.\n\n*Пример:* Her brother is a teacher.\n\n### Формулы\n- `my + family member`\n- `her/his + noun`\n\n### Типичная ошибка\n❌ I have two brother.\n✅ I have two brothers.",
      "keyPoints": [
        "Члены семьи: Mother, father, brother, sister.",
        "Притяжательные: My, her, his + noun.",
        "Запомни формулы: my + family member; her/his + noun",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «mother»?",
        "options": [
          "муж",
          "мать",
          "сын",
          "отец"
        ],
        "answer": "мать"
      },
      {
        "question": "What is «father»?",
        "options": [
          "мать",
          "жена",
          "отец",
          "сын"
        ],
        "answer": "отец"
      },
      {
        "question": "What is «sister»?",
        "options": [
          "дочь",
          "муж",
          "отец",
          "сестра"
        ],
        "answer": "сестра"
      },
      {
        "question": "What is «brother»?",
        "options": [
          "жена",
          "родители",
          "муж",
          "брат"
        ],
        "answer": "брат"
      },
      {
        "question": "What is «son»?",
        "options": [
          "сын",
          "отец",
          "жена",
          "сестра"
        ],
        "answer": "сын"
      },
      {
        "type": "gap",
        "sentence": "The word «дочь» in English is ___.",
        "answer": "daughter",
        "hint": "d…"
      },
      {
        "type": "gap",
        "sentence": "The word «родители» in English is ___.",
        "answer": "parents",
        "hint": "p…"
      },
      {
        "type": "gap",
        "sentence": "The word «муж» in English is ___.",
        "answer": "husband",
        "hint": "h…"
      }
    ]
  },
  {
    "level": "A1",
    "title": "Food & Drinks",
    "titleRu": "Еда и напитки",
    "topic": "В кафе",
    "description": "Лексика еды и заказов.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you eat for breakfast?",
        "keywords": [
          "water",
          "coffee",
          "tea",
          "bread",
          "milk",
          "egg",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I would like a coffee, please."
      },
      {
        "prompt": "Do you like coffee or tea?",
        "keywords": [
          "water",
          "coffee",
          "tea",
          "bread",
          "milk",
          "egg",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Can I have the chicken, please?"
      },
      {
        "prompt": "What is your favourite food?",
        "keywords": [
          "water",
          "coffee",
          "tea",
          "bread",
          "milk",
          "egg",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I would like a coffee, please."
      }
    ],
    "vocab": [
      {
        "en": "water",
        "ru": "вода"
      },
      {
        "en": "coffee",
        "ru": "кофе"
      },
      {
        "en": "tea",
        "ru": "чай"
      },
      {
        "en": "bread",
        "ru": "хлеб"
      },
      {
        "en": "milk",
        "ru": "молоко"
      },
      {
        "en": "egg",
        "ru": "яйцо"
      },
      {
        "en": "rice",
        "ru": "рис"
      },
      {
        "en": "chicken",
        "ru": "курица"
      },
      {
        "en": "apple",
        "ru": "яблоко"
      },
      {
        "en": "breakfast",
        "ru": "завтрак"
      }
    ],
    "grammar": {
      "title": "Food",
      "blocks": [
        {
          "title": "Еда",
          "desc": "Countable and uncountable food.",
          "example": "I would like a coffee, please."
        },
        {
          "title": "В кафе",
          "desc": "I'd like / Can I have.",
          "example": "Can I have the chicken, please?"
        }
      ],
      "formulas": [
        "I'd like + noun",
        "Can I have + noun"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "I would like a coffee, please.",
            "Can I have the chicken, please?"
          ]
        }
      ],
      "mistake": {
        "wrong": "I want a water.",
        "right": "I want some water."
      }
    },
    "quiz": [
      {
        "sentence": "Can I ___ a tea?",
        "options": [
          "have",
          "has"
        ],
        "answer": "have"
      },
      {
        "sentence": "I don't like ___.",
        "options": [
          "fish",
          "fishes"
        ],
        "answer": "fish"
      },
      {
        "sentence": "She drinks ___ every morning.",
        "options": [
          "coffee",
          "coffees"
        ],
        "answer": "coffee"
      },
      {
        "sentence": "We eat ___ for breakfast.",
        "options": [
          "bread",
          "breads"
        ],
        "answer": "bread"
      },
      {
        "sentence": "___ apples are fresh.",
        "options": [
          "These",
          "This"
        ],
        "answer": "These"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I would like a coffee, please.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I would like a coffee, please."
      },
      {
        "phrase": "Can I have the chicken, please?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Can I have the chicken, please?"
      },
      {
        "phrase": "What do you eat for breakfast?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you eat for breakfast?"
      },
      {
        "phrase": "water is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "water is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "Cooking for beginners"
      ],
      "listen": [
        "Food songs"
      ],
      "read": [
        "Menu A1"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What food appears?",
        "keywords": [
          "water",
          "coffee",
          "tea",
          "bread",
          "milk",
          "egg",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I would like a coffee, please."
      },
      {
        "prompt": "What does the person order?",
        "keywords": [
          "water",
          "coffee",
          "tea",
          "bread",
          "milk",
          "egg",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Can I have the chicken, please?"
      },
      {
        "prompt": "Do they like the meal?",
        "keywords": [
          "water",
          "coffee",
          "tea",
          "bread",
          "milk",
          "egg",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I would like a coffee, please."
      },
      {
        "prompt": "What drink?",
        "keywords": [
          "water",
          "coffee",
          "tea",
          "bread",
          "milk",
          "egg",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Can I have the chicken, please?"
      },
      {
        "prompt": "Is it healthy?",
        "keywords": [
          "water",
          "coffee",
          "tea",
          "bread",
          "milk",
          "egg",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I would like a coffee, please."
      }
    ],
    "speaking": [
      {
        "task": "Order food in a café.",
        "keywords": [
          "water",
          "coffee",
          "tea",
          "bread",
          "milk",
          "egg",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I would like a coffee, please.",
        "useSpeech": true
      },
      {
        "task": "Say what you eat every day.",
        "keywords": [
          "water",
          "coffee",
          "tea",
          "bread",
          "milk",
          "egg",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Can I have the chicken, please?",
        "useSpeech": true
      },
      {
        "task": "List foods you like and dislike.",
        "keywords": [
          "water",
          "coffee",
          "tea",
          "bread",
          "milk",
          "egg",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I would like a coffee, please.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "water",
        "trans": "вода",
        "example": "I use 'water' every day."
      },
      {
        "word": "coffee",
        "trans": "кофе",
        "example": "I use 'coffee' every day."
      },
      {
        "word": "tea",
        "trans": "чай",
        "example": "I use 'tea' every day."
      },
      {
        "word": "bread",
        "trans": "хлеб",
        "example": "I use 'bread' every day."
      },
      {
        "word": "milk",
        "trans": "молоко",
        "example": "I use 'milk' every day."
      },
      {
        "word": "egg",
        "trans": "яйцо",
        "example": "I use 'egg' every day."
      },
      {
        "word": "rice",
        "trans": "рис",
        "example": "I use 'rice' every day."
      },
      {
        "word": "chicken",
        "trans": "курица",
        "example": "I use 'chicken' every day."
      },
      {
        "word": "apple",
        "trans": "яблоко",
        "example": "I use 'apple' every day."
      },
      {
        "word": "breakfast",
        "trans": "завтрак",
        "example": "I use 'breakfast' every day."
      },
      {
        "word": "water",
        "trans": "вода",
        "example": "Practice makes progress."
      },
      {
        "word": "coffee",
        "trans": "кофе",
        "example": "Practice makes progress."
      },
      {
        "word": "tea",
        "trans": "чай",
        "example": "Practice makes progress."
      },
      {
        "word": "bread",
        "trans": "хлеб",
        "example": "Practice makes progress."
      },
      {
        "word": "milk",
        "trans": "молоко",
        "example": "Practice makes progress."
      },
      {
        "word": "egg",
        "trans": "яйцо",
        "example": "Practice makes progress."
      },
      {
        "word": "rice",
        "trans": "рис",
        "example": "Practice makes progress."
      },
      {
        "word": "chicken",
        "trans": "курица",
        "example": "Practice makes progress."
      },
      {
        "word": "apple",
        "trans": "яблоко",
        "example": "Practice makes progress."
      },
      {
        "word": "breakfast",
        "trans": "завтрак",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "Can I ___ a tea?",
        "options": [
          "have",
          "has"
        ],
        "answer": "have"
      },
      {
        "sentence": "I don't like ___.",
        "options": [
          "fish",
          "fishes"
        ],
        "answer": "fish"
      }
    ],
    "id": 10,
    "theory": {
      "intro": "Лексика еды и заказов.",
      "reading": "**Еда и напитки** — Лексика еды и заказов.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### Еда\nCountable and uncountable food.\n\n*Пример:* I would like a coffee, please.\n\n### В кафе\nI'd like / Can I have.\n\n*Пример:* Can I have the chicken, please?\n\n### Формулы\n- `I'd like + noun`\n- `Can I have + noun`\n\n### Типичная ошибка\n❌ I want a water.\n✅ I want some water.",
      "keyPoints": [
        "Еда: Countable and uncountable food.",
        "В кафе: I'd like / Can I have.",
        "Запомни формулы: I'd like + noun; Can I have + noun",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «water»?",
        "options": [
          "кофе",
          "вода",
          "чай",
          "завтрак"
        ],
        "answer": "вода"
      },
      {
        "question": "What is «coffee»?",
        "options": [
          "рис",
          "вода",
          "молоко",
          "кофе"
        ],
        "answer": "кофе"
      },
      {
        "question": "What is «tea»?",
        "options": [
          "завтрак",
          "рис",
          "чай",
          "курица"
        ],
        "answer": "чай"
      },
      {
        "question": "What is «bread»?",
        "options": [
          "хлеб",
          "рис",
          "яблоко",
          "чай"
        ],
        "answer": "хлеб"
      },
      {
        "question": "What is «milk»?",
        "options": [
          "завтрак",
          "чай",
          "молоко",
          "кофе"
        ],
        "answer": "молоко"
      },
      {
        "type": "gap",
        "sentence": "The word «яйцо» in English is ___.",
        "answer": "egg",
        "hint": "e…"
      },
      {
        "type": "gap",
        "sentence": "The word «рис» in English is ___.",
        "answer": "rice",
        "hint": "r…"
      },
      {
        "type": "gap",
        "sentence": "The word «курица» in English is ___.",
        "answer": "chicken",
        "hint": "c…"
      }
    ]
  },
  {
    "level": "A1",
    "title": "Colors & Clothes",
    "titleRu": "Цвета и одежда",
    "topic": "Одежда",
    "description": "Цвета и что надето.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What colour is your bag?",
        "keywords": [
          "red",
          "blue",
          "black",
          "white",
          "shirt",
          "dress",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She is wearing a black jacket."
      },
      {
        "prompt": "What are you wearing today?",
        "keywords": [
          "red",
          "blue",
          "black",
          "white",
          "shirt",
          "dress",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I wear jeans every day."
      },
      {
        "prompt": "Do you like bright colours?",
        "keywords": [
          "red",
          "blue",
          "black",
          "white",
          "shirt",
          "dress",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She is wearing a black jacket."
      }
    ],
    "vocab": [
      {
        "en": "red",
        "ru": "красный"
      },
      {
        "en": "blue",
        "ru": "синий"
      },
      {
        "en": "black",
        "ru": "чёрный"
      },
      {
        "en": "white",
        "ru": "белый"
      },
      {
        "en": "shirt",
        "ru": "рубашка"
      },
      {
        "en": "dress",
        "ru": "платье"
      },
      {
        "en": "shoes",
        "ru": "обувь"
      },
      {
        "en": "jacket",
        "ru": "куртка"
      },
      {
        "en": "wear",
        "ru": "носить"
      },
      {
        "en": "colour",
        "ru": "цвет"
      }
    ],
    "grammar": {
      "title": "Clothes",
      "blocks": [
        {
          "title": "Цвета",
          "desc": "Colour + noun: a red dress.",
          "example": "She is wearing a black jacket."
        },
        {
          "title": "Одежда",
          "desc": "Wear / put on.",
          "example": "I wear jeans every day."
        }
      ],
      "formulas": [
        "colour + noun",
        "I am wearing + clothes"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "She is wearing a black jacket.",
            "I wear jeans every day."
          ]
        }
      ],
      "mistake": {
        "wrong": "I wear a hat in my head.",
        "right": "I wear a hat on my head."
      }
    },
    "quiz": [
      {
        "sentence": "She has a ___ dress.",
        "options": [
          "white",
          "whites"
        ],
        "answer": "white"
      },
      {
        "sentence": "I ___ jeans today.",
        "options": [
          "wear",
          "wears"
        ],
        "answer": "wear"
      },
      {
        "sentence": "His ___ are black.",
        "options": [
          "shoes",
          "shoe"
        ],
        "answer": "shoes"
      },
      {
        "sentence": "What ___ are you wearing?",
        "options": [
          "colour",
          "colours"
        ],
        "answer": "colour"
      },
      {
        "sentence": "It is a ___ shirt.",
        "options": [
          "blue",
          "blues"
        ],
        "answer": "blue"
      }
    ],
    "pronunciation": [
      {
        "phrase": "She is wearing a black jacket.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "She is wearing a black jacket."
      },
      {
        "phrase": "I wear jeans every day.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I wear jeans every day."
      },
      {
        "phrase": "What colour is your bag?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What colour is your bag?"
      },
      {
        "phrase": "red is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "red is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "Fashion A1"
      ],
      "listen": [
        "Pop music"
      ],
      "read": [
        "Clothes vocab"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What colour is the dress?",
        "keywords": [
          "red",
          "blue",
          "black",
          "white",
          "shirt",
          "dress",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She is wearing a black jacket."
      },
      {
        "prompt": "What is he wearing?",
        "keywords": [
          "red",
          "blue",
          "black",
          "white",
          "shirt",
          "dress",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I wear jeans every day."
      },
      {
        "prompt": "Are the shoes new?",
        "keywords": [
          "red",
          "blue",
          "black",
          "white",
          "shirt",
          "dress",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She is wearing a black jacket."
      },
      {
        "prompt": "What jacket?",
        "keywords": [
          "red",
          "blue",
          "black",
          "white",
          "shirt",
          "dress",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I wear jeans every day."
      },
      {
        "prompt": "Which colours?",
        "keywords": [
          "red",
          "blue",
          "black",
          "white",
          "shirt",
          "dress",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She is wearing a black jacket."
      }
    ],
    "speaking": [
      {
        "task": "Describe your outfit.",
        "keywords": [
          "red",
          "blue",
          "black",
          "white",
          "shirt",
          "dress",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She is wearing a black jacket.",
        "useSpeech": true
      },
      {
        "task": "Name 5 colours and 5 clothes.",
        "keywords": [
          "red",
          "blue",
          "black",
          "white",
          "shirt",
          "dress",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I wear jeans every day.",
        "useSpeech": true
      },
      {
        "task": "What do you wear in winter?",
        "keywords": [
          "red",
          "blue",
          "black",
          "white",
          "shirt",
          "dress",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She is wearing a black jacket.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "red",
        "trans": "красный",
        "example": "I use 'red' every day."
      },
      {
        "word": "blue",
        "trans": "синий",
        "example": "I use 'blue' every day."
      },
      {
        "word": "black",
        "trans": "чёрный",
        "example": "I use 'black' every day."
      },
      {
        "word": "white",
        "trans": "белый",
        "example": "I use 'white' every day."
      },
      {
        "word": "shirt",
        "trans": "рубашка",
        "example": "I use 'shirt' every day."
      },
      {
        "word": "dress",
        "trans": "платье",
        "example": "I use 'dress' every day."
      },
      {
        "word": "shoes",
        "trans": "обувь",
        "example": "I use 'shoes' every day."
      },
      {
        "word": "jacket",
        "trans": "куртка",
        "example": "I use 'jacket' every day."
      },
      {
        "word": "wear",
        "trans": "носить",
        "example": "I use 'wear' every day."
      },
      {
        "word": "colour",
        "trans": "цвет",
        "example": "I use 'colour' every day."
      },
      {
        "word": "red",
        "trans": "красный",
        "example": "Practice makes progress."
      },
      {
        "word": "blue",
        "trans": "синий",
        "example": "Practice makes progress."
      },
      {
        "word": "black",
        "trans": "чёрный",
        "example": "Practice makes progress."
      },
      {
        "word": "white",
        "trans": "белый",
        "example": "Practice makes progress."
      },
      {
        "word": "shirt",
        "trans": "рубашка",
        "example": "Practice makes progress."
      },
      {
        "word": "dress",
        "trans": "платье",
        "example": "Practice makes progress."
      },
      {
        "word": "shoes",
        "trans": "обувь",
        "example": "Practice makes progress."
      },
      {
        "word": "jacket",
        "trans": "куртка",
        "example": "Practice makes progress."
      },
      {
        "word": "wear",
        "trans": "носить",
        "example": "Practice makes progress."
      },
      {
        "word": "colour",
        "trans": "цвет",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She has a ___ dress.",
        "options": [
          "white",
          "whites"
        ],
        "answer": "white"
      },
      {
        "sentence": "I ___ jeans today.",
        "options": [
          "wear",
          "wears"
        ],
        "answer": "wear"
      }
    ],
    "id": 11,
    "theory": {
      "intro": "Цвета и что надето.",
      "reading": "**Цвета и одежда** — Цвета и что надето.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### Цвета\nColour + noun: a red dress.\n\n*Пример:* She is wearing a black jacket.\n\n### Одежда\nWear / put on.\n\n*Пример:* I wear jeans every day.\n\n### Формулы\n- `colour + noun`\n- `I am wearing + clothes`\n\n### Типичная ошибка\n❌ I wear a hat in my head.\n✅ I wear a hat on my head.",
      "keyPoints": [
        "Цвета: Colour + noun: a red dress.",
        "Одежда: Wear / put on.",
        "Запомни формулы: colour + noun; I am wearing + clothes",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «red»?",
        "options": [
          "обувь",
          "куртка",
          "платье",
          "красный"
        ],
        "answer": "красный"
      },
      {
        "question": "What is «blue»?",
        "options": [
          "платье",
          "куртка",
          "синий",
          "носить"
        ],
        "answer": "синий"
      },
      {
        "question": "What is «black»?",
        "options": [
          "белый",
          "цвет",
          "красный",
          "чёрный"
        ],
        "answer": "чёрный"
      },
      {
        "question": "What is «white»?",
        "options": [
          "куртка",
          "носить",
          "белый",
          "обувь"
        ],
        "answer": "белый"
      },
      {
        "question": "What is «shirt»?",
        "options": [
          "цвет",
          "носить",
          "рубашка",
          "чёрный"
        ],
        "answer": "рубашка"
      },
      {
        "type": "gap",
        "sentence": "The word «платье» in English is ___.",
        "answer": "dress",
        "hint": "d…"
      },
      {
        "type": "gap",
        "sentence": "The word «обувь» in English is ___.",
        "answer": "shoes",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «куртка» in English is ___.",
        "answer": "jacket",
        "hint": "j…"
      }
    ]
  },
  {
    "level": "A1",
    "title": "Weather",
    "titleRu": "Погода",
    "topic": "Сезоны",
    "description": "Погода и времена года.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What's the weather like today?",
        "keywords": [
          "sunny",
          "rainy",
          "cold",
          "hot",
          "windy",
          "snow",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "It is rainy in autumn."
      },
      {
        "prompt": "Which season do you like?",
        "keywords": [
          "sunny",
          "rainy",
          "cold",
          "hot",
          "windy",
          "snow",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "In winter it is cold."
      },
      {
        "prompt": "Is it cold in your city?",
        "keywords": [
          "sunny",
          "rainy",
          "cold",
          "hot",
          "windy",
          "snow",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "It is rainy in autumn."
      }
    ],
    "vocab": [
      {
        "en": "sunny",
        "ru": "солнечно"
      },
      {
        "en": "rainy",
        "ru": "дождливо"
      },
      {
        "en": "cold",
        "ru": "холодно"
      },
      {
        "en": "hot",
        "ru": "жарко"
      },
      {
        "en": "windy",
        "ru": "ветрено"
      },
      {
        "en": "snow",
        "ru": "снег"
      },
      {
        "en": "summer",
        "ru": "лето"
      },
      {
        "en": "winter",
        "ru": "зима"
      },
      {
        "en": "spring",
        "ru": "весна"
      },
      {
        "en": "autumn",
        "ru": "осень"
      }
    ],
    "grammar": {
      "title": "Weather",
      "blocks": [
        {
          "title": "Погода",
          "desc": "It is + adjective.",
          "example": "It is rainy in autumn."
        },
        {
          "title": "Сезоны",
          "desc": "In summer / in winter.",
          "example": "In winter it is cold."
        }
      ],
      "formulas": [
        "It is + adjective",
        "In + season"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "It is rainy in autumn.",
            "In winter it is cold."
          ]
        }
      ],
      "mistake": {
        "wrong": "It is sun today.",
        "right": "It is sunny today."
      }
    },
    "quiz": [
      {
        "sentence": "It is ___ today.",
        "options": [
          "hot",
          "hots"
        ],
        "answer": "hot"
      },
      {
        "sentence": "___ winter it snows.",
        "options": [
          "In",
          "On"
        ],
        "answer": "In"
      },
      {
        "sentence": "The weather is ___.",
        "options": [
          "windy",
          "wind"
        ],
        "answer": "windy"
      },
      {
        "sentence": "I like ___ because it is warm.",
        "options": [
          "summer",
          "summers"
        ],
        "answer": "summer"
      },
      {
        "sentence": "Is it ___ now?",
        "options": [
          "cold",
          "colds"
        ],
        "answer": "cold"
      }
    ],
    "pronunciation": [
      {
        "phrase": "It is rainy in autumn.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "It is rainy in autumn."
      },
      {
        "phrase": "In winter it is cold.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "In winter it is cold."
      },
      {
        "phrase": "What's the weather like today?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What's the weather like today?"
      },
      {
        "phrase": "sunny is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "sunny is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "Weather forecasts"
      ],
      "listen": [
        "Season songs"
      ],
      "read": [
        "Weather A1"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What is the weather?",
        "keywords": [
          "sunny",
          "rainy",
          "cold",
          "hot",
          "windy",
          "snow",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It is rainy in autumn."
      },
      {
        "prompt": "Which season?",
        "keywords": [
          "sunny",
          "rainy",
          "cold",
          "hot",
          "windy",
          "snow",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "In winter it is cold."
      },
      {
        "prompt": "Hot or cold?",
        "keywords": [
          "sunny",
          "rainy",
          "cold",
          "hot",
          "windy",
          "snow",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It is rainy in autumn."
      },
      {
        "prompt": "Does it rain?",
        "keywords": [
          "sunny",
          "rainy",
          "cold",
          "hot",
          "windy",
          "snow",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "In winter it is cold."
      },
      {
        "prompt": "What do people wear?",
        "keywords": [
          "sunny",
          "rainy",
          "cold",
          "hot",
          "windy",
          "snow",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It is rainy in autumn."
      }
    ],
    "speaking": [
      {
        "task": "Describe today's weather.",
        "keywords": [
          "sunny",
          "rainy",
          "cold",
          "hot",
          "windy",
          "snow",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "It is rainy in autumn.",
        "useSpeech": true
      },
      {
        "task": "What you do in summer and winter.",
        "keywords": [
          "sunny",
          "rainy",
          "cold",
          "hot",
          "windy",
          "snow",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "In winter it is cold.",
        "useSpeech": true
      },
      {
        "task": "Compare weather in two cities.",
        "keywords": [
          "sunny",
          "rainy",
          "cold",
          "hot",
          "windy",
          "snow",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "It is rainy in autumn.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "sunny",
        "trans": "солнечно",
        "example": "I use 'sunny' every day."
      },
      {
        "word": "rainy",
        "trans": "дождливо",
        "example": "I use 'rainy' every day."
      },
      {
        "word": "cold",
        "trans": "холодно",
        "example": "I use 'cold' every day."
      },
      {
        "word": "hot",
        "trans": "жарко",
        "example": "I use 'hot' every day."
      },
      {
        "word": "windy",
        "trans": "ветрено",
        "example": "I use 'windy' every day."
      },
      {
        "word": "snow",
        "trans": "снег",
        "example": "I use 'snow' every day."
      },
      {
        "word": "summer",
        "trans": "лето",
        "example": "I use 'summer' every day."
      },
      {
        "word": "winter",
        "trans": "зима",
        "example": "I use 'winter' every day."
      },
      {
        "word": "spring",
        "trans": "весна",
        "example": "I use 'spring' every day."
      },
      {
        "word": "autumn",
        "trans": "осень",
        "example": "I use 'autumn' every day."
      },
      {
        "word": "sunny",
        "trans": "солнечно",
        "example": "Practice makes progress."
      },
      {
        "word": "rainy",
        "trans": "дождливо",
        "example": "Practice makes progress."
      },
      {
        "word": "cold",
        "trans": "холодно",
        "example": "Practice makes progress."
      },
      {
        "word": "hot",
        "trans": "жарко",
        "example": "Practice makes progress."
      },
      {
        "word": "windy",
        "trans": "ветрено",
        "example": "Practice makes progress."
      },
      {
        "word": "snow",
        "trans": "снег",
        "example": "Practice makes progress."
      },
      {
        "word": "summer",
        "trans": "лето",
        "example": "Practice makes progress."
      },
      {
        "word": "winter",
        "trans": "зима",
        "example": "Practice makes progress."
      },
      {
        "word": "spring",
        "trans": "весна",
        "example": "Practice makes progress."
      },
      {
        "word": "autumn",
        "trans": "осень",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "It is ___ today.",
        "options": [
          "hot",
          "hots"
        ],
        "answer": "hot"
      },
      {
        "sentence": "___ winter it snows.",
        "options": [
          "In",
          "On"
        ],
        "answer": "In"
      }
    ],
    "id": 12,
    "theory": {
      "intro": "Погода и времена года.",
      "reading": "**Погода** — Погода и времена года.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### Погода\nIt is + adjective.\n\n*Пример:* It is rainy in autumn.\n\n### Сезоны\nIn summer / in winter.\n\n*Пример:* In winter it is cold.\n\n### Формулы\n- `It is + adjective`\n- `In + season`\n\n### Типичная ошибка\n❌ It is sun today.\n✅ It is sunny today.",
      "keyPoints": [
        "Погода: It is + adjective.",
        "Сезоны: In summer / in winter.",
        "Запомни формулы: It is + adjective; In + season",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «sunny»?",
        "options": [
          "ветрено",
          "солнечно",
          "зима",
          "дождливо"
        ],
        "answer": "солнечно"
      },
      {
        "question": "What is «rainy»?",
        "options": [
          "снег",
          "зима",
          "дождливо",
          "солнечно"
        ],
        "answer": "дождливо"
      },
      {
        "question": "What is «cold»?",
        "options": [
          "холодно",
          "весна",
          "снег",
          "жарко"
        ],
        "answer": "холодно"
      },
      {
        "question": "What is «hot»?",
        "options": [
          "снег",
          "солнечно",
          "весна",
          "жарко"
        ],
        "answer": "жарко"
      },
      {
        "question": "What is «windy»?",
        "options": [
          "жарко",
          "холодно",
          "зима",
          "ветрено"
        ],
        "answer": "ветрено"
      },
      {
        "type": "gap",
        "sentence": "The word «снег» in English is ___.",
        "answer": "snow",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «лето» in English is ___.",
        "answer": "summer",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «зима» in English is ___.",
        "answer": "winter",
        "hint": "w…"
      }
    ]
  },
  {
    "level": "A1",
    "title": "Shopping",
    "titleRu": "Покупки",
    "topic": "В магазине",
    "description": "Цены и покупки.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "How much is your phone?",
        "keywords": [
          "shop",
          "buy",
          "sell",
          "price",
          "cheap",
          "expensive",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "How much is this shirt?"
      },
      {
        "prompt": "Cash or card?",
        "keywords": [
          "shop",
          "buy",
          "sell",
          "price",
          "cheap",
          "expensive",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Can I pay by card?"
      },
      {
        "prompt": "Where do you shop?",
        "keywords": [
          "shop",
          "buy",
          "sell",
          "price",
          "cheap",
          "expensive",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "How much is this shirt?"
      }
    ],
    "vocab": [
      {
        "en": "shop",
        "ru": "магазин"
      },
      {
        "en": "buy",
        "ru": "покупать"
      },
      {
        "en": "sell",
        "ru": "продавать"
      },
      {
        "en": "price",
        "ru": "цена"
      },
      {
        "en": "cheap",
        "ru": "дешёвый"
      },
      {
        "en": "expensive",
        "ru": "дорогой"
      },
      {
        "en": "size",
        "ru": "размер"
      },
      {
        "en": "pay",
        "ru": "платить"
      },
      {
        "en": "cash",
        "ru": "наличные"
      },
      {
        "en": "card",
        "ru": "карта"
      }
    ],
    "grammar": {
      "title": "Shopping",
      "blocks": [
        {
          "title": "В магазине",
          "desc": "How much is it?",
          "example": "How much is this shirt?"
        },
        {
          "title": "Оплата",
          "desc": "Pay by card or cash.",
          "example": "Can I pay by card?"
        }
      ],
      "formulas": [
        "How much is it?",
        "Can I pay by card?"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "How much is this shirt?",
            "Can I pay by card?"
          ]
        }
      ],
      "mistake": {
        "wrong": "How many is it?",
        "right": "How much is it?"
      }
    },
    "quiz": [
      {
        "sentence": "How ___ is this bag?",
        "options": [
          "much",
          "many"
        ],
        "answer": "much"
      },
      {
        "sentence": "I want to ___ a jacket.",
        "options": [
          "buy",
          "buys"
        ],
        "answer": "buy"
      },
      {
        "sentence": "It is too ___.",
        "options": [
          "expensive",
          "expensively"
        ],
        "answer": "expensive"
      },
      {
        "sentence": "What ___ do you need?",
        "options": [
          "size",
          "sizes"
        ],
        "answer": "size"
      },
      {
        "sentence": "Can I ___ by card?",
        "options": [
          "pay",
          "pays"
        ],
        "answer": "pay"
      }
    ],
    "pronunciation": [
      {
        "phrase": "How much is this shirt?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "How much is this shirt?"
      },
      {
        "phrase": "Can I pay by card?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Can I pay by card?"
      },
      {
        "phrase": "How much is your phone?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "How much is your phone?"
      },
      {
        "phrase": "shop is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "shop is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "Shopping dialogues"
      ],
      "listen": [
        "Money songs"
      ],
      "read": [
        "Prices A1"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "How much does it cost?",
        "keywords": [
          "shop",
          "buy",
          "sell",
          "price",
          "cheap",
          "expensive",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "How much is this shirt?"
      },
      {
        "prompt": "Does the customer buy it?",
        "keywords": [
          "shop",
          "buy",
          "sell",
          "price",
          "cheap",
          "expensive",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Can I pay by card?"
      },
      {
        "prompt": "Cheap or expensive?",
        "keywords": [
          "shop",
          "buy",
          "sell",
          "price",
          "cheap",
          "expensive",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "How much is this shirt?"
      },
      {
        "prompt": "What size?",
        "keywords": [
          "shop",
          "buy",
          "sell",
          "price",
          "cheap",
          "expensive",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Can I pay by card?"
      },
      {
        "prompt": "How do they pay?",
        "keywords": [
          "shop",
          "buy",
          "sell",
          "price",
          "cheap",
          "expensive",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "How much is this shirt?"
      }
    ],
    "speaking": [
      {
        "task": "Role-play shopping.",
        "keywords": [
          "shop",
          "buy",
          "sell",
          "price",
          "cheap",
          "expensive",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "How much is this shirt?",
        "useSpeech": true
      },
      {
        "task": "Compare prices of 3 items.",
        "keywords": [
          "shop",
          "buy",
          "sell",
          "price",
          "cheap",
          "expensive",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Can I pay by card?",
        "useSpeech": true
      },
      {
        "task": "What you bought last week.",
        "keywords": [
          "shop",
          "buy",
          "sell",
          "price",
          "cheap",
          "expensive",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "How much is this shirt?",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "shop",
        "trans": "магазин",
        "example": "I use 'shop' every day."
      },
      {
        "word": "buy",
        "trans": "покупать",
        "example": "I use 'buy' every day."
      },
      {
        "word": "sell",
        "trans": "продавать",
        "example": "I use 'sell' every day."
      },
      {
        "word": "price",
        "trans": "цена",
        "example": "I use 'price' every day."
      },
      {
        "word": "cheap",
        "trans": "дешёвый",
        "example": "I use 'cheap' every day."
      },
      {
        "word": "expensive",
        "trans": "дорогой",
        "example": "I use 'expensive' every day."
      },
      {
        "word": "size",
        "trans": "размер",
        "example": "I use 'size' every day."
      },
      {
        "word": "pay",
        "trans": "платить",
        "example": "I use 'pay' every day."
      },
      {
        "word": "cash",
        "trans": "наличные",
        "example": "I use 'cash' every day."
      },
      {
        "word": "card",
        "trans": "карта",
        "example": "I use 'card' every day."
      },
      {
        "word": "shop",
        "trans": "магазин",
        "example": "Practice makes progress."
      },
      {
        "word": "buy",
        "trans": "покупать",
        "example": "Practice makes progress."
      },
      {
        "word": "sell",
        "trans": "продавать",
        "example": "Practice makes progress."
      },
      {
        "word": "price",
        "trans": "цена",
        "example": "Practice makes progress."
      },
      {
        "word": "cheap",
        "trans": "дешёвый",
        "example": "Practice makes progress."
      },
      {
        "word": "expensive",
        "trans": "дорогой",
        "example": "Practice makes progress."
      },
      {
        "word": "size",
        "trans": "размер",
        "example": "Practice makes progress."
      },
      {
        "word": "pay",
        "trans": "платить",
        "example": "Practice makes progress."
      },
      {
        "word": "cash",
        "trans": "наличные",
        "example": "Practice makes progress."
      },
      {
        "word": "card",
        "trans": "карта",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "How ___ is this bag?",
        "options": [
          "much",
          "many"
        ],
        "answer": "much"
      },
      {
        "sentence": "I want to ___ a jacket.",
        "options": [
          "buy",
          "buys"
        ],
        "answer": "buy"
      }
    ],
    "id": 13,
    "theory": {
      "intro": "Цены и покупки.",
      "reading": "**Покупки** — Цены и покупки.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### В магазине\nHow much is it?\n\n*Пример:* How much is this shirt?\n\n### Оплата\nPay by card or cash.\n\n*Пример:* Can I pay by card?\n\n### Формулы\n- `How much is it?`\n- `Can I pay by card?`\n\n### Типичная ошибка\n❌ How many is it?\n✅ How much is it?",
      "keyPoints": [
        "В магазине: How much is it?",
        "Оплата: Pay by card or cash.",
        "Запомни формулы: How much is it?; Can I pay by card?",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «shop»?",
        "options": [
          "карта",
          "наличные",
          "магазин",
          "платить"
        ],
        "answer": "магазин"
      },
      {
        "question": "What is «buy»?",
        "options": [
          "платить",
          "продавать",
          "магазин",
          "покупать"
        ],
        "answer": "покупать"
      },
      {
        "question": "What is «sell»?",
        "options": [
          "продавать",
          "магазин",
          "цена",
          "дешёвый"
        ],
        "answer": "продавать"
      },
      {
        "question": "What is «price»?",
        "options": [
          "магазин",
          "цена",
          "наличные",
          "продавать"
        ],
        "answer": "цена"
      },
      {
        "question": "What is «cheap»?",
        "options": [
          "дешёвый",
          "магазин",
          "наличные",
          "дорогой"
        ],
        "answer": "дешёвый"
      },
      {
        "type": "gap",
        "sentence": "The word «дорогой» in English is ___.",
        "answer": "expensive",
        "hint": "e…"
      },
      {
        "type": "gap",
        "sentence": "The word «размер» in English is ___.",
        "answer": "size",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «платить» in English is ___.",
        "answer": "pay",
        "hint": "p…"
      }
    ]
  },
  {
    "level": "A1",
    "title": "Directions",
    "titleRu": "Направления",
    "topic": "Где находится",
    "description": "Как спросить дорогу.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "Where is the nearest café?",
        "keywords": [
          "left",
          "right",
          "straight",
          "near",
          "far",
          "street",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Go straight and turn left."
      },
      {
        "prompt": "How do you get to work?",
        "keywords": [
          "left",
          "right",
          "straight",
          "near",
          "far",
          "street",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The station is near the park."
      },
      {
        "prompt": "Is your home far?",
        "keywords": [
          "left",
          "right",
          "straight",
          "near",
          "far",
          "street",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Go straight and turn left."
      }
    ],
    "vocab": [
      {
        "en": "left",
        "ru": "налево"
      },
      {
        "en": "right",
        "ru": "направо"
      },
      {
        "en": "straight",
        "ru": "прямо"
      },
      {
        "en": "near",
        "ru": "рядом"
      },
      {
        "en": "far",
        "ru": "далеко"
      },
      {
        "en": "street",
        "ru": "улица"
      },
      {
        "en": "station",
        "ru": "станция"
      },
      {
        "en": "bus",
        "ru": "автобус"
      },
      {
        "en": "turn",
        "ru": "поворачивать"
      },
      {
        "en": "map",
        "ru": "карта"
      }
    ],
    "grammar": {
      "title": "Directions",
      "blocks": [
        {
          "title": "Направления",
          "desc": "Turn left/right. Go straight.",
          "example": "Go straight and turn left."
        },
        {
          "title": "Место",
          "desc": "Where is the station?",
          "example": "The station is near the park."
        }
      ],
      "formulas": [
        "Turn left/right",
        "Where is + place?"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "Go straight and turn left.",
            "The station is near the park."
          ]
        }
      ],
      "mistake": {
        "wrong": "Turn to left.",
        "right": "Turn left."
      }
    },
    "quiz": [
      {
        "sentence": "Go ___ and turn right.",
        "options": [
          "straight",
          "straightly"
        ],
        "answer": "straight"
      },
      {
        "sentence": "The bank is ___ the left.",
        "options": [
          "on",
          "in"
        ],
        "answer": "on"
      },
      {
        "sentence": "Is there a shop ___ here?",
        "options": [
          "near",
          "nearly"
        ],
        "answer": "near"
      },
      {
        "sentence": "Turn ___ at the corner.",
        "options": [
          "left",
          "the left"
        ],
        "answer": "left"
      },
      {
        "sentence": "Where is the bus ___?",
        "options": [
          "station",
          "stations"
        ],
        "answer": "station"
      }
    ],
    "pronunciation": [
      {
        "phrase": "Go straight and turn left.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Go straight and turn left."
      },
      {
        "phrase": "The station is near the park.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "The station is near the park."
      },
      {
        "phrase": "Where is the nearest café?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Where is the nearest café?"
      },
      {
        "phrase": "left is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "left is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "City tours"
      ],
      "listen": [
        "London Calling"
      ],
      "read": [
        "Maps A1"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "Which direction?",
        "keywords": [
          "left",
          "right",
          "straight",
          "near",
          "far",
          "street",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Go straight and turn left."
      },
      {
        "prompt": "Near or far?",
        "keywords": [
          "left",
          "right",
          "straight",
          "near",
          "far",
          "street",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The station is near the park."
      },
      {
        "prompt": "What street?",
        "keywords": [
          "left",
          "right",
          "straight",
          "near",
          "far",
          "street",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Go straight and turn left."
      },
      {
        "prompt": "Where is the station?",
        "keywords": [
          "left",
          "right",
          "straight",
          "near",
          "far",
          "street",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The station is near the park."
      },
      {
        "prompt": "Need a map?",
        "keywords": [
          "left",
          "right",
          "straight",
          "near",
          "far",
          "street",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Go straight and turn left."
      }
    ],
    "speaking": [
      {
        "task": "Explain how to get to your home.",
        "keywords": [
          "left",
          "right",
          "straight",
          "near",
          "far",
          "street",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Go straight and turn left.",
        "useSpeech": true
      },
      {
        "task": "Directions to a shop.",
        "keywords": [
          "left",
          "right",
          "straight",
          "near",
          "far",
          "street",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The station is near the park.",
        "useSpeech": true
      },
      {
        "task": "Ask for directions.",
        "keywords": [
          "left",
          "right",
          "straight",
          "near",
          "far",
          "street",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Go straight and turn left.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "left",
        "trans": "налево",
        "example": "I use 'left' every day."
      },
      {
        "word": "right",
        "trans": "направо",
        "example": "I use 'right' every day."
      },
      {
        "word": "straight",
        "trans": "прямо",
        "example": "I use 'straight' every day."
      },
      {
        "word": "near",
        "trans": "рядом",
        "example": "I use 'near' every day."
      },
      {
        "word": "far",
        "trans": "далеко",
        "example": "I use 'far' every day."
      },
      {
        "word": "street",
        "trans": "улица",
        "example": "I use 'street' every day."
      },
      {
        "word": "station",
        "trans": "станция",
        "example": "I use 'station' every day."
      },
      {
        "word": "bus",
        "trans": "автобус",
        "example": "I use 'bus' every day."
      },
      {
        "word": "turn",
        "trans": "поворачивать",
        "example": "I use 'turn' every day."
      },
      {
        "word": "map",
        "trans": "карта",
        "example": "I use 'map' every day."
      },
      {
        "word": "left",
        "trans": "налево",
        "example": "Practice makes progress."
      },
      {
        "word": "right",
        "trans": "направо",
        "example": "Practice makes progress."
      },
      {
        "word": "straight",
        "trans": "прямо",
        "example": "Practice makes progress."
      },
      {
        "word": "near",
        "trans": "рядом",
        "example": "Practice makes progress."
      },
      {
        "word": "far",
        "trans": "далеко",
        "example": "Practice makes progress."
      },
      {
        "word": "street",
        "trans": "улица",
        "example": "Practice makes progress."
      },
      {
        "word": "station",
        "trans": "станция",
        "example": "Practice makes progress."
      },
      {
        "word": "bus",
        "trans": "автобус",
        "example": "Practice makes progress."
      },
      {
        "word": "turn",
        "trans": "поворачивать",
        "example": "Practice makes progress."
      },
      {
        "word": "map",
        "trans": "карта",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "Go ___ and turn right.",
        "options": [
          "straight",
          "straightly"
        ],
        "answer": "straight"
      },
      {
        "sentence": "The bank is ___ the left.",
        "options": [
          "on",
          "in"
        ],
        "answer": "on"
      }
    ],
    "id": 14,
    "theory": {
      "intro": "Как спросить дорогу.",
      "reading": "**Направления** — Как спросить дорогу.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### Направления\nTurn left/right. Go straight.\n\n*Пример:* Go straight and turn left.\n\n### Место\nWhere is the station?\n\n*Пример:* The station is near the park.\n\n### Формулы\n- `Turn left/right`\n- `Where is + place?`\n\n### Типичная ошибка\n❌ Turn to left.\n✅ Turn left.",
      "keyPoints": [
        "Направления: Turn left/right. Go straight.",
        "Место: Where is the station?",
        "Запомни формулы: Turn left/right; Where is + place?",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «left»?",
        "options": [
          "поворачивать",
          "карта",
          "далеко",
          "налево"
        ],
        "answer": "налево"
      },
      {
        "question": "What is «right»?",
        "options": [
          "автобус",
          "направо",
          "налево",
          "карта"
        ],
        "answer": "направо"
      },
      {
        "question": "What is «straight»?",
        "options": [
          "далеко",
          "направо",
          "поворачивать",
          "прямо"
        ],
        "answer": "прямо"
      },
      {
        "question": "What is «near»?",
        "options": [
          "карта",
          "налево",
          "рядом",
          "далеко"
        ],
        "answer": "рядом"
      },
      {
        "question": "What is «far»?",
        "options": [
          "улица",
          "карта",
          "далеко",
          "рядом"
        ],
        "answer": "далеко"
      },
      {
        "type": "gap",
        "sentence": "The word «улица» in English is ___.",
        "answer": "street",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «станция» in English is ___.",
        "answer": "station",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «автобус» in English is ___.",
        "answer": "bus",
        "hint": "b…"
      }
    ]
  },
  {
    "level": "A1",
    "title": "Hobbies",
    "titleRu": "Хобби",
    "topic": "Свободное время",
    "description": "Хобби и интересы.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you do in free time?",
        "keywords": [
          "hobby",
          "music",
          "sport",
          "read",
          "play",
          "draw",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I enjoy playing football."
      },
      {
        "prompt": "Do you play sports?",
        "keywords": [
          "hobby",
          "music",
          "sport",
          "read",
          "play",
          "draw",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "In my free time I listen to music."
      },
      {
        "prompt": "What music do you like?",
        "keywords": [
          "hobby",
          "music",
          "sport",
          "read",
          "play",
          "draw",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I enjoy playing football."
      }
    ],
    "vocab": [
      {
        "en": "hobby",
        "ru": "хобби"
      },
      {
        "en": "music",
        "ru": "музыка"
      },
      {
        "en": "sport",
        "ru": "спорт"
      },
      {
        "en": "read",
        "ru": "читать"
      },
      {
        "en": "play",
        "ru": "играть"
      },
      {
        "en": "draw",
        "ru": "рисовать"
      },
      {
        "en": "dance",
        "ru": "танцевать"
      },
      {
        "en": "watch",
        "ru": "смотреть"
      },
      {
        "en": "free time",
        "ru": "свободное время"
      },
      {
        "en": "fun",
        "ru": "весело"
      }
    ],
    "grammar": {
      "title": "Hobbies",
      "blocks": [
        {
          "title": "Хобби",
          "desc": "Like + -ing.",
          "example": "I enjoy playing football."
        },
        {
          "title": "Свободное время",
          "desc": "In my free time I...",
          "example": "In my free time I listen to music."
        }
      ],
      "formulas": [
        "like + V-ing",
        "In my free time I + V"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "I enjoy playing football.",
            "In my free time I listen to music."
          ]
        }
      ],
      "mistake": {
        "wrong": "I like read books.",
        "right": "I like reading books."
      }
    },
    "quiz": [
      {
        "sentence": "I enjoy ___ music.",
        "options": [
          "listening to",
          "listen"
        ],
        "answer": "listening to"
      },
      {
        "sentence": "She likes ___.",
        "options": [
          "dancing",
          "dance"
        ],
        "answer": "dancing"
      },
      {
        "sentence": "Do you play ___ sport?",
        "options": [
          "any",
          "some"
        ],
        "answer": "any"
      },
      {
        "sentence": "In my free time I ___.",
        "options": [
          "read",
          "reads"
        ],
        "answer": "read"
      },
      {
        "sentence": "It is ___.",
        "options": [
          "fun",
          "funny"
        ],
        "answer": "fun"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I enjoy playing football.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I enjoy playing football."
      },
      {
        "phrase": "In my free time I listen to music.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "In my free time I listen to music."
      },
      {
        "phrase": "What do you do in free time?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you do in free time?"
      },
      {
        "phrase": "hobby is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "hobby is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "Hobby videos"
      ],
      "listen": [
        "Queen"
      ],
      "read": [
        "Hobbies A1"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What is the hobby?",
        "keywords": [
          "hobby",
          "music",
          "sport",
          "read",
          "play",
          "draw",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I enjoy playing football."
      },
      {
        "prompt": "Sports?",
        "keywords": [
          "hobby",
          "music",
          "sport",
          "read",
          "play",
          "draw",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "In my free time I listen to music."
      },
      {
        "prompt": "Weekend activities?",
        "keywords": [
          "hobby",
          "music",
          "sport",
          "read",
          "play",
          "draw",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I enjoy playing football."
      },
      {
        "prompt": "Is it fun?",
        "keywords": [
          "hobby",
          "music",
          "sport",
          "read",
          "play",
          "draw",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "In my free time I listen to music."
      },
      {
        "prompt": "What music?",
        "keywords": [
          "hobby",
          "music",
          "sport",
          "read",
          "play",
          "draw",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I enjoy playing football."
      }
    ],
    "speaking": [
      {
        "task": "Talk about 3 hobbies.",
        "keywords": [
          "hobby",
          "music",
          "sport",
          "read",
          "play",
          "draw",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I enjoy playing football.",
        "useSpeech": true
      },
      {
        "task": "Ask 4 questions about free time.",
        "keywords": [
          "hobby",
          "music",
          "sport",
          "read",
          "play",
          "draw",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "In my free time I listen to music.",
        "useSpeech": true
      },
      {
        "task": "Compare hobbies with a friend.",
        "keywords": [
          "hobby",
          "music",
          "sport",
          "read",
          "play",
          "draw",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I enjoy playing football.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "hobby",
        "trans": "хобби",
        "example": "I use 'hobby' every day."
      },
      {
        "word": "music",
        "trans": "музыка",
        "example": "I use 'music' every day."
      },
      {
        "word": "sport",
        "trans": "спорт",
        "example": "I use 'sport' every day."
      },
      {
        "word": "read",
        "trans": "читать",
        "example": "I use 'read' every day."
      },
      {
        "word": "play",
        "trans": "играть",
        "example": "I use 'play' every day."
      },
      {
        "word": "draw",
        "trans": "рисовать",
        "example": "I use 'draw' every day."
      },
      {
        "word": "dance",
        "trans": "танцевать",
        "example": "I use 'dance' every day."
      },
      {
        "word": "watch",
        "trans": "смотреть",
        "example": "I use 'watch' every day."
      },
      {
        "word": "free time",
        "trans": "свободное время",
        "example": "I use 'free time' every day."
      },
      {
        "word": "fun",
        "trans": "весело",
        "example": "I use 'fun' every day."
      },
      {
        "word": "hobby",
        "trans": "хобби",
        "example": "Practice makes progress."
      },
      {
        "word": "music",
        "trans": "музыка",
        "example": "Practice makes progress."
      },
      {
        "word": "sport",
        "trans": "спорт",
        "example": "Practice makes progress."
      },
      {
        "word": "read",
        "trans": "читать",
        "example": "Practice makes progress."
      },
      {
        "word": "play",
        "trans": "играть",
        "example": "Practice makes progress."
      },
      {
        "word": "draw",
        "trans": "рисовать",
        "example": "Practice makes progress."
      },
      {
        "word": "dance",
        "trans": "танцевать",
        "example": "Practice makes progress."
      },
      {
        "word": "watch",
        "trans": "смотреть",
        "example": "Practice makes progress."
      },
      {
        "word": "free time",
        "trans": "свободное время",
        "example": "Practice makes progress."
      },
      {
        "word": "fun",
        "trans": "весело",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "I enjoy ___ music.",
        "options": [
          "listening to",
          "listen"
        ],
        "answer": "listening to"
      },
      {
        "sentence": "She likes ___.",
        "options": [
          "dancing",
          "dance"
        ],
        "answer": "dancing"
      }
    ],
    "id": 15,
    "theory": {
      "intro": "Хобби и интересы.",
      "reading": "**Хобби** — Хобби и интересы.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### Хобби\nLike + -ing.\n\n*Пример:* I enjoy playing football.\n\n### Свободное время\nIn my free time I...\n\n*Пример:* In my free time I listen to music.\n\n### Формулы\n- `like + V-ing`\n- `In my free time I + V`\n\n### Типичная ошибка\n❌ I like read books.\n✅ I like reading books.",
      "keyPoints": [
        "Хобби: Like + -ing.",
        "Свободное время: In my free time I...",
        "Запомни формулы: like + V-ing; In my free time I + V",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «hobby»?",
        "options": [
          "играть",
          "рисовать",
          "танцевать",
          "хобби"
        ],
        "answer": "хобби"
      },
      {
        "question": "What is «music»?",
        "options": [
          "музыка",
          "читать",
          "свободное время",
          "танцевать"
        ],
        "answer": "музыка"
      },
      {
        "question": "What is «sport»?",
        "options": [
          "играть",
          "музыка",
          "спорт",
          "читать"
        ],
        "answer": "спорт"
      },
      {
        "question": "What is «read»?",
        "options": [
          "свободное время",
          "читать",
          "хобби",
          "весело"
        ],
        "answer": "читать"
      },
      {
        "question": "What is «play»?",
        "options": [
          "рисовать",
          "танцевать",
          "смотреть",
          "играть"
        ],
        "answer": "играть"
      },
      {
        "type": "gap",
        "sentence": "The word «рисовать» in English is ___.",
        "answer": "draw",
        "hint": "d…"
      },
      {
        "type": "gap",
        "sentence": "The word «танцевать» in English is ___.",
        "answer": "dance",
        "hint": "d…"
      },
      {
        "type": "gap",
        "sentence": "The word «смотреть» in English is ___.",
        "answer": "watch",
        "hint": "w…"
      }
    ]
  },
  {
    "level": "A1",
    "title": "Health",
    "titleRu": "Здоровье",
    "topic": "У врача",
    "description": "Здоровье и самочувствие.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "How do you feel today?",
        "keywords": [
          "head",
          "hand",
          "leg",
          "ill",
          "tired",
          "doctor",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I don't feel well today."
      },
      {
        "prompt": "Do you go to the doctor often?",
        "keywords": [
          "head",
          "hand",
          "leg",
          "ill",
          "tired",
          "doctor",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "My leg hurts. I need a doctor."
      },
      {
        "prompt": "What when you are ill?",
        "keywords": [
          "head",
          "hand",
          "leg",
          "ill",
          "tired",
          "doctor",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I don't feel well today."
      }
    ],
    "vocab": [
      {
        "en": "head",
        "ru": "голова"
      },
      {
        "en": "hand",
        "ru": "рука"
      },
      {
        "en": "leg",
        "ru": "нога"
      },
      {
        "en": "ill",
        "ru": "больной"
      },
      {
        "en": "tired",
        "ru": "уставший"
      },
      {
        "en": "doctor",
        "ru": "врач"
      },
      {
        "en": "medicine",
        "ru": "лекарство"
      },
      {
        "en": "hurt",
        "ru": "болеть"
      },
      {
        "en": "feel",
        "ru": "чувствовать"
      },
      {
        "en": "better",
        "ru": "лучше"
      }
    ],
    "grammar": {
      "title": "Health",
      "blocks": [
        {
          "title": "Самочувствие",
          "desc": "I feel tired. My head hurts.",
          "example": "I don't feel well today."
        },
        {
          "title": "У врача",
          "desc": "What's wrong? Take medicine.",
          "example": "My leg hurts. I need a doctor."
        }
      ],
      "formulas": [
        "I feel + adj",
        "My head hurts"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "I don't feel well today.",
            "My leg hurts. I need a doctor."
          ]
        }
      ],
      "mistake": {
        "wrong": "I have headache.",
        "right": "I have a headache."
      }
    },
    "quiz": [
      {
        "sentence": "My head ___.",
        "options": [
          "hurts",
          "hurt"
        ],
        "answer": "hurts"
      },
      {
        "sentence": "I ___ tired.",
        "options": [
          "feel",
          "feels"
        ],
        "answer": "feel"
      },
      {
        "sentence": "She is ___.",
        "options": [
          "ill",
          "ills"
        ],
        "answer": "ill"
      },
      {
        "sentence": "Go to the ___.",
        "options": [
          "doctor",
          "doctors"
        ],
        "answer": "doctor"
      },
      {
        "sentence": "I hope you feel ___.",
        "options": [
          "better",
          "good"
        ],
        "answer": "better"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I don't feel well today.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I don't feel well today."
      },
      {
        "phrase": "My leg hurts. I need a doctor.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "My leg hurts. I need a doctor."
      },
      {
        "phrase": "How do you feel today?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "How do you feel today?"
      },
      {
        "phrase": "head is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "head is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "At the doctor"
      ],
      "listen": [
        "Health podcasts"
      ],
      "read": [
        "Body parts"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "How does the person feel?",
        "keywords": [
          "head",
          "hand",
          "leg",
          "ill",
          "tired",
          "doctor",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I don't feel well today."
      },
      {
        "prompt": "What hurts?",
        "keywords": [
          "head",
          "hand",
          "leg",
          "ill",
          "tired",
          "doctor",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "My leg hurts. I need a doctor."
      },
      {
        "prompt": "Need a doctor?",
        "keywords": [
          "head",
          "hand",
          "leg",
          "ill",
          "tired",
          "doctor",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I don't feel well today."
      },
      {
        "prompt": "What medicine?",
        "keywords": [
          "head",
          "hand",
          "leg",
          "ill",
          "tired",
          "doctor",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "My leg hurts. I need a doctor."
      },
      {
        "prompt": "Better now?",
        "keywords": [
          "head",
          "hand",
          "leg",
          "ill",
          "tired",
          "doctor",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I don't feel well today."
      }
    ],
    "speaking": [
      {
        "task": "Say how you feel.",
        "keywords": [
          "head",
          "hand",
          "leg",
          "ill",
          "tired",
          "doctor",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I don't feel well today.",
        "useSpeech": true
      },
      {
        "task": "Describe symptoms.",
        "keywords": [
          "head",
          "hand",
          "leg",
          "ill",
          "tired",
          "doctor",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "My leg hurts. I need a doctor.",
        "useSpeech": true
      },
      {
        "task": "Advice to a sick friend.",
        "keywords": [
          "head",
          "hand",
          "leg",
          "ill",
          "tired",
          "doctor",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I don't feel well today.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "head",
        "trans": "голова",
        "example": "I use 'head' every day."
      },
      {
        "word": "hand",
        "trans": "рука",
        "example": "I use 'hand' every day."
      },
      {
        "word": "leg",
        "trans": "нога",
        "example": "I use 'leg' every day."
      },
      {
        "word": "ill",
        "trans": "больной",
        "example": "I use 'ill' every day."
      },
      {
        "word": "tired",
        "trans": "уставший",
        "example": "I use 'tired' every day."
      },
      {
        "word": "doctor",
        "trans": "врач",
        "example": "I use 'doctor' every day."
      },
      {
        "word": "medicine",
        "trans": "лекарство",
        "example": "I use 'medicine' every day."
      },
      {
        "word": "hurt",
        "trans": "болеть",
        "example": "I use 'hurt' every day."
      },
      {
        "word": "feel",
        "trans": "чувствовать",
        "example": "I use 'feel' every day."
      },
      {
        "word": "better",
        "trans": "лучше",
        "example": "I use 'better' every day."
      },
      {
        "word": "head",
        "trans": "голова",
        "example": "Practice makes progress."
      },
      {
        "word": "hand",
        "trans": "рука",
        "example": "Practice makes progress."
      },
      {
        "word": "leg",
        "trans": "нога",
        "example": "Practice makes progress."
      },
      {
        "word": "ill",
        "trans": "больной",
        "example": "Practice makes progress."
      },
      {
        "word": "tired",
        "trans": "уставший",
        "example": "Practice makes progress."
      },
      {
        "word": "doctor",
        "trans": "врач",
        "example": "Practice makes progress."
      },
      {
        "word": "medicine",
        "trans": "лекарство",
        "example": "Practice makes progress."
      },
      {
        "word": "hurt",
        "trans": "болеть",
        "example": "Practice makes progress."
      },
      {
        "word": "feel",
        "trans": "чувствовать",
        "example": "Practice makes progress."
      },
      {
        "word": "better",
        "trans": "лучше",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "My head ___.",
        "options": [
          "hurts",
          "hurt"
        ],
        "answer": "hurts"
      },
      {
        "sentence": "I ___ tired.",
        "options": [
          "feel",
          "feels"
        ],
        "answer": "feel"
      }
    ],
    "id": 16,
    "theory": {
      "intro": "Здоровье и самочувствие.",
      "reading": "**Здоровье** — Здоровье и самочувствие.\n\nМетодика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух каждый пример.\n\nCEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.\n\n### Самочувствие\nI feel tired. My head hurts.\n\n*Пример:* I don't feel well today.\n\n### У врача\nWhat's wrong? Take medicine.\n\n*Пример:* My leg hurts. I need a doctor.\n\n### Формулы\n- `I feel + adj`\n- `My head hurts`\n\n### Типичная ошибка\n❌ I have headache.\n✅ I have a headache.",
      "keyPoints": [
        "Самочувствие: I feel tired. My head hurts.",
        "У врача: What's wrong? Take medicine.",
        "Запомни формулы: I feel + adj; My head hurts",
        "Методика Oxford/Cambridge Starter: сначала смысл и фразы, потом форма. Повторяйте вслух ка…"
      ],
      "cefr": "CEFR A1 — базовое общение: знакомство, повседневные темы, простые вопросы и ответы.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «head»?",
        "options": [
          "болеть",
          "голова",
          "уставший",
          "больной"
        ],
        "answer": "голова"
      },
      {
        "question": "What is «hand»?",
        "options": [
          "чувствовать",
          "больной",
          "голова",
          "рука"
        ],
        "answer": "рука"
      },
      {
        "question": "What is «leg»?",
        "options": [
          "болеть",
          "чувствовать",
          "нога",
          "больной"
        ],
        "answer": "нога"
      },
      {
        "question": "What is «ill»?",
        "options": [
          "лекарство",
          "уставший",
          "больной",
          "болеть"
        ],
        "answer": "больной"
      },
      {
        "question": "What is «tired»?",
        "options": [
          "уставший",
          "врач",
          "лекарство",
          "нога"
        ],
        "answer": "уставший"
      },
      {
        "type": "gap",
        "sentence": "The word «врач» in English is ___.",
        "answer": "doctor",
        "hint": "d…"
      },
      {
        "type": "gap",
        "sentence": "The word «лекарство» in English is ___.",
        "answer": "medicine",
        "hint": "m…"
      },
      {
        "type": "gap",
        "sentence": "The word «болеть» in English is ___.",
        "answer": "hurt",
        "hint": "h…"
      }
    ]
  },
  {
    "id": 17,
    "level": "A2",
    "title": "Present Simple & Continuous",
    "titleRu": "Настоящее простое и длительное время",
    "topic": "Рутина и действие сейчас",
    "description": "Учимся различать постоянные действия и то, что происходит в данный момент. Это база для ежедневного общения на английском.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you usually do on weekdays?",
        "keywords": [
          "routine",
          "usually",
          "currently",
          "habit",
          "schedule",
          "daily",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She works from home on Fridays."
      },
      {
        "prompt": "What are you doing right now?",
        "keywords": [
          "routine",
          "usually",
          "currently",
          "habit",
          "schedule",
          "daily",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "They are watching a documentary at the moment."
      },
      {
        "prompt": "How often do you study English?",
        "keywords": [
          "routine",
          "usually",
          "currently",
          "habit",
          "schedule",
          "daily",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She works from home on Fridays."
      }
    ],
    "vocab": [
      {
        "en": "routine",
        "ru": "распорядок дня"
      },
      {
        "en": "usually",
        "ru": "обычно"
      },
      {
        "en": "currently",
        "ru": "в настоящее время"
      },
      {
        "en": "habit",
        "ru": "привычка"
      },
      {
        "en": "schedule",
        "ru": "расписание"
      },
      {
        "en": "daily",
        "ru": "ежедневный"
      },
      {
        "en": "moment",
        "ru": "момент"
      },
      {
        "en": "often",
        "ru": "часто"
      },
      {
        "en": "rarely",
        "ru": "редко"
      },
      {
        "en": "always",
        "ru": "всегда"
      }
    ],
    "grammar": {
      "title": "Present Simple & Present Continuous",
      "blocks": [
        {
          "title": "Present Simple",
          "desc": "Используем для привычек, фактов и регулярных действий. Маркеры: every day, usually, often, always.",
          "example": "She works from home on Fridays."
        },
        {
          "title": "Present Continuous",
          "desc": "Используем для действий, происходящих сейчас или временных ситуаций. Маркеры: now, at the moment, right now.",
          "example": "They are watching a documentary at the moment."
        }
      ],
      "formulas": [
        "Present Simple: I/you/we/they + V1; he/she/it + V1+s",
        "Present Continuous: am/is/are + V-ing"
      ],
      "extraExamples": [
        {
          "label": "Present Simple",
          "items": [
            "I read books every evening.",
            "He plays tennis on weekends."
          ]
        },
        {
          "label": "Present Continuous",
          "items": [
            "I am reading a book now.",
            "He is playing tennis at the moment."
          ]
        }
      ],
      "mistake": {
        "wrong": "I am go to work every day.",
        "right": "I go to work every day."
      }
    },
    "quiz": [
      {
        "sentence": "I ___ English every day.",
        "options": [
          "study",
          "am studying"
        ],
        "answer": "study"
      },
      {
        "sentence": "She ___ TV at the moment.",
        "options": [
          "watches",
          "is watching"
        ],
        "answer": "is watching"
      },
      {
        "sentence": "We usually ___ dinner at seven.",
        "options": [
          "have",
          "are having"
        ],
        "answer": "have"
      },
      {
        "sentence": "They ___ football right now.",
        "options": [
          "play",
          "are playing"
        ],
        "answer": "are playing"
      },
      {
        "sentence": "He ___ to the gym on Mondays.",
        "options": [
          "goes",
          "is going"
        ],
        "answer": "goes"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I usually walk to work.",
        "ipa": "/ˈjuːʒuəli wɔːk/",
        "tip": "Слово usually — ударение на первый слог, звук /ʒ/ как в «ж»",
        "expected": "I usually walk to work."
      },
      {
        "phrase": "She is reading now.",
        "ipa": "/ʃiː ɪz ˈriːdɪŋ naʊ/",
        "tip": "Сокращение is → 's сливается с reading",
        "expected": "She is reading now."
      },
      {
        "phrase": "Do you often travel?",
        "ipa": "/duː juː ˈɒfn ˈtrævl/",
        "tip": "Often — ударение на первый слог, t часто не произносится",
        "expected": "Do you often travel?"
      },
      {
        "phrase": "We are working today.",
        "ipa": "/wiː ɑː ˈwɜːkɪŋ/",
        "tip": "Are + ing: не делай паузу между are и working",
        "expected": "We are working today."
      },
      {
        "phrase": "He always arrives early.",
        "ipa": "/hiː ˈɔːlweɪz əˈraɪvz/",
        "tip": "Always — ударение на первый слог, s звучит как /z/",
        "expected": "He always arrives early."
      }
    ],
    "flashcards": [
      {
        "word": "routine",
        "trans": "распорядок дня",
        "example": "My daily routine starts at seven."
      },
      {
        "word": "usually",
        "trans": "обычно",
        "example": "I usually wake up early."
      },
      {
        "word": "currently",
        "trans": "в настоящее время",
        "example": "She is currently living in Berlin."
      },
      {
        "word": "habit",
        "trans": "привычка",
        "example": "Reading is a good habit."
      },
      {
        "word": "schedule",
        "trans": "расписание",
        "example": "Check the schedule for tomorrow."
      },
      {
        "word": "daily",
        "trans": "ежедневный",
        "example": "I do daily exercises."
      },
      {
        "word": "moment",
        "trans": "момент",
        "example": "Wait a moment, please."
      },
      {
        "word": "often",
        "trans": "часто",
        "example": "We often meet on Sundays."
      },
      {
        "word": "rarely",
        "trans": "редко",
        "example": "He rarely eats fast food."
      },
      {
        "word": "always",
        "trans": "всегда",
        "example": "She always smiles."
      },
      {
        "word": "work",
        "trans": "работать",
        "example": "I work from nine to five."
      },
      {
        "word": "study",
        "trans": "учиться",
        "example": "They study English every day."
      },
      {
        "word": "read",
        "trans": "читать",
        "example": "He is reading a novel now."
      },
      {
        "word": "watch",
        "trans": "смотреть",
        "example": "We watch films on weekends."
      },
      {
        "word": "play",
        "trans": "играть",
        "example": "The children are playing outside."
      },
      {
        "word": "walk",
        "trans": "ходить пешком",
        "example": "I walk to the park every morning."
      },
      {
        "word": "cook",
        "trans": "готовить",
        "example": "She is cooking dinner now."
      },
      {
        "word": "listen",
        "trans": "слушать",
        "example": "I listen to podcasts often."
      },
      {
        "word": "travel",
        "trans": "путешествовать",
        "example": "They travel every summer."
      },
      {
        "word": "exercise",
        "trans": "заниматься спортом",
        "example": "He exercises three times a week."
      }
    ],
    "culture": {
      "watch": [
        "The Crown — британский английский и формальная речь"
      ],
      "listen": [
        "Adele — Someone Like You"
      ],
      "read": [
        "Roald Dahl — Charlie and the Chocolate Factory"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What does the main character usually do in the morning?",
        "keywords": [
          "routine",
          "usually",
          "currently",
          "habit",
          "schedule",
          "daily",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She works from home on Fridays."
      },
      {
        "prompt": "What is happening in the scene right now?",
        "keywords": [
          "routine",
          "usually",
          "currently",
          "habit",
          "schedule",
          "daily",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "They are watching a documentary at the moment."
      },
      {
        "prompt": "How often does the family travel?",
        "keywords": [
          "routine",
          "usually",
          "currently",
          "habit",
          "schedule",
          "daily",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She works from home on Fridays."
      },
      {
        "prompt": "What are they watching at the moment?",
        "keywords": [
          "routine",
          "usually",
          "currently",
          "habit",
          "schedule",
          "daily",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "They are watching a documentary at the moment."
      },
      {
        "prompt": "Does he always arrive on time?",
        "keywords": [
          "routine",
          "usually",
          "currently",
          "habit",
          "schedule",
          "daily",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She works from home on Fridays."
      }
    ],
    "speaking": [
      {
        "task": "Опиши свой типичный день, используя 4 предложения в Present Simple.",
        "keywords": [
          "routine",
          "usually",
          "currently",
          "habit",
          "schedule",
          "daily",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She works from home on Fridays.",
        "useSpeech": true
      },
      {
        "task": "Расскажи, что ты делаешь прямо сейчас — 3 предложения в Present Continuous.",
        "keywords": [
          "routine",
          "usually",
          "currently",
          "habit",
          "schedule",
          "daily",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "They are watching a documentary at the moment.",
        "useSpeech": true
      },
      {
        "task": "Сравни свою рутину в будни и выходные, используя оба времени.",
        "keywords": [
          "routine",
          "usually",
          "currently",
          "habit",
          "schedule",
          "daily",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She works from home on Fridays.",
        "useSpeech": true
      }
    ],
    "grammarCheck": [
      {
        "sentence": "I ___ English every day.",
        "options": [
          "study",
          "am studying"
        ],
        "answer": "study"
      },
      {
        "sentence": "She ___ TV at the moment.",
        "options": [
          "watches",
          "is watching"
        ],
        "answer": "is watching"
      }
    ],
    "theory": {
      "intro": "Учимся различать постоянные действия и то, что происходит в данный момент. Это база для ежедневного общения на английском.",
      "reading": "**Настоящее простое и длительное время** — Учимся различать постоянные действия и то, что происходит в данный момент. Это база для ежедневного общения на английском.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### Present Simple\nИспользуем для привычек, фактов и регулярных действий. Маркеры: every day, usually, often, always.\n\n*Пример:* She works from home on Fridays.\n\n### Present Continuous\nИспользуем для действий, происходящих сейчас или временных ситуаций. Маркеры: now, at the moment, right now.\n\n*Пример:* They are watching a documentary at the moment.\n\n### Формулы\n- `Present Simple: I/you/we/they + V1; he/she/it + V1+s`\n- `Present Continuous: am/is/are + V-ing`\n\n### Типичная ошибка\n❌ I am go to work every day.\n✅ I go to work every day.",
      "keyPoints": [
        "Present Simple: Используем для привычек, фактов и регулярных действий. Маркеры: every day, usual",
        "Present Continuous: Используем для действий, происходящих сейчас или временных ситуаций. Маркеры: no",
        "Запомни формулы: Present Simple: I/you/we/they + V1; he/she/it + V1+s; Present Continuous: am/is/are + V-ing",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «routine»?",
        "options": [
          "распорядок дня",
          "в настоящее время",
          "ежедневный",
          "привычка"
        ],
        "answer": "распорядок дня"
      },
      {
        "question": "What is «usually»?",
        "options": [
          "распорядок дня",
          "ежедневный",
          "обычно",
          "привычка"
        ],
        "answer": "обычно"
      },
      {
        "question": "What is «currently»?",
        "options": [
          "всегда",
          "распорядок дня",
          "в настоящее время",
          "расписание"
        ],
        "answer": "в настоящее время"
      },
      {
        "question": "What is «habit»?",
        "options": [
          "распорядок дня",
          "всегда",
          "часто",
          "привычка"
        ],
        "answer": "привычка"
      },
      {
        "question": "What is «schedule»?",
        "options": [
          "в настоящее время",
          "привычка",
          "ежедневный",
          "расписание"
        ],
        "answer": "расписание"
      },
      {
        "type": "gap",
        "sentence": "The word «ежедневный» in English is ___.",
        "answer": "daily",
        "hint": "d…"
      },
      {
        "type": "gap",
        "sentence": "The word «момент» in English is ___.",
        "answer": "moment",
        "hint": "m…"
      },
      {
        "type": "gap",
        "sentence": "The word «часто» in English is ___.",
        "answer": "often",
        "hint": "o…"
      }
    ]
  },
  {
    "id": 18,
    "level": "A2",
    "title": "Past Simple & Past Continuous",
    "titleRu": "Прошедшее простое и длительное время",
    "topic": "Прошлые события и фон",
    "description": "Разбираем, как рассказывать о завершённых действиях в прошлом и описывать фон, на котором они происходили.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What did you do yesterday evening?",
        "keywords": [
          "yesterday",
          "ago",
          "while",
          "suddenly",
          "finished",
          "happened",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I visited my grandparents last month."
      },
      {
        "prompt": "Were you studying when I called?",
        "keywords": [
          "yesterday",
          "ago",
          "while",
          "suddenly",
          "finished",
          "happened",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She was cooking when the phone rang."
      },
      {
        "prompt": "Where were you born?",
        "keywords": [
          "yesterday",
          "ago",
          "while",
          "suddenly",
          "finished",
          "happened",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I visited my grandparents last month."
      }
    ],
    "vocab": [
      {
        "en": "yesterday",
        "ru": "вчера"
      },
      {
        "en": "ago",
        "ru": "назад"
      },
      {
        "en": "while",
        "ru": "в то время как"
      },
      {
        "en": "suddenly",
        "ru": "внезапно"
      },
      {
        "en": "finished",
        "ru": "закончил(а)"
      },
      {
        "en": "happened",
        "ru": "произошло"
      },
      {
        "en": "arrived",
        "ru": "прибыл(а)"
      },
      {
        "en": "started",
        "ru": "начал(а)"
      },
      {
        "en": "interrupted",
        "ru": "прервал(а)"
      },
      {
        "en": "background",
        "ru": "фон, задний план"
      }
    ],
    "grammar": {
      "title": "Past Simple & Past Continuous",
      "blocks": [
        {
          "title": "Past Simple",
          "desc": "Завершённое действие в прошлом с известным временем. Маркеры: yesterday, last week, ago, in 2020.",
          "example": "I visited my grandparents last month."
        },
        {
          "title": "Past Continuous",
          "desc": "Длительное действие в процессе в прошлом или фон для другого события. Маркеры: while, when, at that moment.",
          "example": "She was cooking when the phone rang."
        }
      ],
      "formulas": [
        "Past Simple: V2 (regular: V+ed; irregular: 2nd form)",
        "Past Continuous: was/were + V-ing"
      ],
      "extraExamples": [
        {
          "label": "Past Simple",
          "items": [
            "They moved to London in 2019.",
            "He didn't finish the project."
          ]
        },
        {
          "label": "Past Continuous",
          "items": [
            "It was raining all morning.",
            "We were talking when he arrived."
          ]
        }
      ],
      "mistake": {
        "wrong": "I was go to school yesterday.",
        "right": "I went to school yesterday."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ a letter when I called.",
        "options": [
          "wrote",
          "was writing"
        ],
        "answer": "was writing"
      },
      {
        "sentence": "We ___ to Paris last summer.",
        "options": [
          "travelled",
          "were travelling"
        ],
        "answer": "travelled"
      },
      {
        "sentence": "They ___ TV at eight o'clock yesterday.",
        "options": [
          "watched",
          "were watching"
        ],
        "answer": "were watching"
      },
      {
        "sentence": "He ___ his keys this morning.",
        "options": [
          "lost",
          "was losing"
        ],
        "answer": "lost"
      },
      {
        "sentence": "While I ___, it started to snow.",
        "options": [
          "walked",
          "was walking"
        ],
        "answer": "was walking"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I visited London last year.",
        "ipa": "/ˈvɪzɪtɪd ˈlʌndən/",
        "tip": "Visited — ударение на первый слог, ed звучит как /ɪd/",
        "expected": "I visited London last year."
      },
      {
        "phrase": "She was reading a book.",
        "ipa": "/ʃiː wɒz ˈriːdɪŋ/",
        "tip": "Was — короткий звук /wɒz/, не растягивай",
        "expected": "She was reading a book."
      },
      {
        "phrase": "What happened yesterday?",
        "ipa": "/wɒt ˈhæpənd/",
        "tip": "Happened — ed как /d/, не /ɪd/",
        "expected": "What happened yesterday?"
      },
      {
        "phrase": "They were waiting outside.",
        "ipa": "/ðeɪ wə ˈweɪtɪŋ/",
        "tip": "Were в быстрой речи → /wə/",
        "expected": "They were waiting outside."
      },
      {
        "phrase": "He arrived suddenly.",
        "ipa": "/hiː əˈraɪvd ˈsʌdnli/",
        "tip": "Suddenly — ударение на первый слог",
        "expected": "He arrived suddenly."
      }
    ],
    "flashcards": [
      {
        "word": "yesterday",
        "trans": "вчера",
        "example": "I worked yesterday."
      },
      {
        "word": "ago",
        "trans": "назад",
        "example": "She left two hours ago."
      },
      {
        "word": "while",
        "trans": "в то время как",
        "example": "While I slept, he cooked."
      },
      {
        "word": "suddenly",
        "trans": "внезапно",
        "example": "Suddenly, the lights went out."
      },
      {
        "word": "finished",
        "trans": "закончил",
        "example": "I finished my homework."
      },
      {
        "word": "happened",
        "trans": "произошло",
        "example": "What happened last night?"
      },
      {
        "word": "arrived",
        "trans": "прибыл",
        "example": "The train arrived on time."
      },
      {
        "word": "started",
        "trans": "начал",
        "example": "The film started at eight."
      },
      {
        "word": "interrupted",
        "trans": "прервал",
        "example": "Sorry, I interrupted you."
      },
      {
        "word": "background",
        "trans": "фон",
        "example": "Music played in the background."
      },
      {
        "word": "visited",
        "trans": "посетил",
        "example": "We visited the museum."
      },
      {
        "word": "was cooking",
        "trans": "готовил(а)",
        "example": "She was cooking dinner."
      },
      {
        "word": "rang",
        "trans": "звонил (телефон)",
        "example": "The phone rang loudly."
      },
      {
        "word": "moved",
        "trans": "переехал",
        "example": "They moved to a new city."
      },
      {
        "word": "rained",
        "trans": "шёл дождь",
        "example": "It rained all day."
      },
      {
        "word": "waited",
        "trans": "ждал",
        "example": "I waited for an hour."
      },
      {
        "word": "lost",
        "trans": "потерял",
        "example": "He lost his wallet."
      },
      {
        "word": "walked",
        "trans": "шёл",
        "example": "We walked home slowly."
      },
      {
        "word": "called",
        "trans": "позвонил",
        "example": "She called me yesterday."
      },
      {
        "word": "snowed",
        "trans": "шёл снег",
        "example": "It snowed last winter."
      }
    ],
    "culture": {
      "watch": [
        "Downton Abbey — исторические события в прошлом"
      ],
      "listen": [
        "The Beatles — Yesterday"
      ],
      "read": [
        "Mark Twain — The Adventures of Tom Sawyer"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What did the character do last weekend?",
        "keywords": [
          "yesterday",
          "ago",
          "while",
          "suddenly",
          "finished",
          "happened",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I visited my grandparents last month."
      },
      {
        "prompt": "What was she doing when the event happened?",
        "keywords": [
          "yesterday",
          "ago",
          "while",
          "suddenly",
          "finished",
          "happened",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She was cooking when the phone rang."
      },
      {
        "prompt": "Where did they travel two years ago?",
        "keywords": [
          "yesterday",
          "ago",
          "while",
          "suddenly",
          "finished",
          "happened",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I visited my grandparents last month."
      },
      {
        "prompt": "Was he working when you arrived?",
        "keywords": [
          "yesterday",
          "ago",
          "while",
          "suddenly",
          "finished",
          "happened",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She was cooking when the phone rang."
      },
      {
        "prompt": "What suddenly happened in the story?",
        "keywords": [
          "yesterday",
          "ago",
          "while",
          "suddenly",
          "finished",
          "happened",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I visited my grandparents last month."
      }
    ],
    "speaking": [
      {
        "task": "Расскажи о вчерашнем вечере: 3 предложения в Past Simple.",
        "keywords": [
          "yesterday",
          "ago",
          "while",
          "suddenly",
          "finished",
          "happened",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I visited my grandparents last month.",
        "useSpeech": true
      },
      {
        "task": "Опиши ситуацию «я делал X, когда произошло Y» — 2 предложения с Past Continuous.",
        "keywords": [
          "yesterday",
          "ago",
          "while",
          "suddenly",
          "finished",
          "happened",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She was cooking when the phone rang.",
        "useSpeech": true
      },
      {
        "task": "Расскажи короткую историю из детства, используя оба времени.",
        "keywords": [
          "yesterday",
          "ago",
          "while",
          "suddenly",
          "finished",
          "happened",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I visited my grandparents last month.",
        "useSpeech": true
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ a letter when I called.",
        "options": [
          "wrote",
          "was writing"
        ],
        "answer": "was writing"
      },
      {
        "sentence": "We ___ to Paris last summer.",
        "options": [
          "travelled",
          "were travelling"
        ],
        "answer": "travelled"
      }
    ],
    "theory": {
      "intro": "Разбираем, как рассказывать о завершённых действиях в прошлом и описывать фон, на котором они происходили.",
      "reading": "**Прошедшее простое и длительное время** — Разбираем, как рассказывать о завершённых действиях в прошлом и описывать фон, на котором они происходили.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### Past Simple\nЗавершённое действие в прошлом с известным временем. Маркеры: yesterday, last week, ago, in 2020.\n\n*Пример:* I visited my grandparents last month.\n\n### Past Continuous\nДлительное действие в процессе в прошлом или фон для другого события. Маркеры: while, when, at that moment.\n\n*Пример:* She was cooking when the phone rang.\n\n### Формулы\n- `Past Simple: V2 (regular: V+ed; irregular: 2nd form)`\n- `Past Continuous: was/were + V-ing`\n\n### Типичная ошибка\n❌ I was go to school yesterday.\n✅ I went to school yesterday.",
      "keyPoints": [
        "Past Simple: Завершённое действие в прошлом с известным временем. Маркеры: yesterday, last we",
        "Past Continuous: Длительное действие в процессе в прошлом или фон для другого события. Маркеры: w",
        "Запомни формулы: Past Simple: V2 (regular: V+ed; irregular: 2nd form); Past Continuous: was/were + V-ing",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «yesterday»?",
        "options": [
          "назад",
          "в то время как",
          "вчера",
          "внезапно"
        ],
        "answer": "вчера"
      },
      {
        "question": "What is «ago»?",
        "options": [
          "произошло",
          "назад",
          "начал(а)",
          "вчера"
        ],
        "answer": "назад"
      },
      {
        "question": "What is «while»?",
        "options": [
          "вчера",
          "прибыл(а)",
          "в то время как",
          "прервал(а)"
        ],
        "answer": "в то время как"
      },
      {
        "question": "What is «suddenly»?",
        "options": [
          "закончил(а)",
          "внезапно",
          "в то время как",
          "начал(а)"
        ],
        "answer": "внезапно"
      },
      {
        "question": "What is «finished»?",
        "options": [
          "внезапно",
          "фон, задний план",
          "начал(а)",
          "закончил(а)"
        ],
        "answer": "закончил(а)"
      },
      {
        "type": "gap",
        "sentence": "The word «произошло» in English is ___.",
        "answer": "happened",
        "hint": "h…"
      },
      {
        "type": "gap",
        "sentence": "The word «прибыл(а)» in English is ___.",
        "answer": "arrived",
        "hint": "a…"
      },
      {
        "type": "gap",
        "sentence": "The word «начал(а)» in English is ___.",
        "answer": "started",
        "hint": "s…"
      }
    ]
  },
  {
    "id": 19,
    "level": "A2",
    "title": "Present Perfect",
    "titleRu": "Настоящее совершённое время",
    "topic": "Опыт и результат",
    "description": "Present Perfect связывает прошлое с настоящим: опыт, недавние события и результат, важный сейчас.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "Have you ever been abroad?",
        "keywords": [
          "ever",
          "never",
          "already",
          "yet",
          "just",
          "recently",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I have finished my homework."
      },
      {
        "prompt": "What have you done today?",
        "keywords": [
          "ever",
          "never",
          "already",
          "yet",
          "just",
          "recently",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She has lived here since 2020."
      },
      {
        "prompt": "How long have you studied English?",
        "keywords": [
          "ever",
          "never",
          "already",
          "yet",
          "just",
          "recently",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I have finished my homework."
      }
    ],
    "vocab": [
      {
        "en": "ever",
        "ru": "когда-либо"
      },
      {
        "en": "never",
        "ru": "никогда"
      },
      {
        "en": "already",
        "ru": "уже"
      },
      {
        "en": "yet",
        "ru": "ещё (не)"
      },
      {
        "en": "just",
        "ru": "только что"
      },
      {
        "en": "recently",
        "ru": "недавно"
      },
      {
        "en": "experience",
        "ru": "опыт"
      },
      {
        "en": "since",
        "ru": "с (какого-то момента)"
      },
      {
        "en": "for",
        "ru": "в течение"
      },
      {
        "en": "result",
        "ru": "результат"
      }
    ],
    "grammar": {
      "title": "Present Perfect",
      "blocks": [
        {
          "title": "Опыт и результат",
          "desc": "Используем, когда важен сам факт или результат, а не точное время. Маркеры: ever, never, already, yet, just.",
          "example": "I have finished my homework."
        },
        {
          "title": "For / Since",
          "desc": "For + период времени; since + точка начала. Показывает, как долго действие длится до настоящего.",
          "example": "She has lived here since 2020."
        }
      ],
      "formulas": [
        "Affirmative: have/has + V3 (past participle)",
        "Question/Negative: Have/Has + subject + V3 / haven't/hasn't + V3"
      ],
      "extraExamples": [
        {
          "label": "Опыт",
          "items": [
            "Have you ever tried sushi?",
            "I have never seen the ocean."
          ]
        },
        {
          "label": "For/Since",
          "items": [
            "We have known each other for ten years.",
            "He has worked here since March."
          ]
        }
      ],
      "mistake": {
        "wrong": "I have seen him yesterday.",
        "right": "I saw him yesterday."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ already eaten lunch.",
        "options": [
          "has",
          "have"
        ],
        "answer": "has"
      },
      {
        "sentence": "___ you ever been to Japan?",
        "options": [
          "Have",
          "Did"
        ],
        "answer": "Have"
      },
      {
        "sentence": "I ___ my keys. I can't find them.",
        "options": [
          "have lost",
          "lost"
        ],
        "answer": "have lost"
      },
      {
        "sentence": "We ___ here for three years.",
        "options": [
          "have lived",
          "lived"
        ],
        "answer": "have lived"
      },
      {
        "sentence": "He hasn't finished ___.",
        "options": [
          "yet",
          "already"
        ],
        "answer": "yet"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I have finished my work.",
        "ipa": "/aɪ hæv ˈfɪnɪʃt/",
        "tip": "Have часто сокращается до /əv/ или /v/ после местоимений",
        "expected": "I have finished my work."
      },
      {
        "phrase": "Have you ever been there?",
        "ipa": "/hæv juː ˈevə biːn/",
        "tip": "Ever — ударение на первый слог, короткий звук",
        "expected": "Have you ever been there?"
      },
      {
        "phrase": "She has just arrived.",
        "ipa": "/ʃiːz dʒʌst əˈraɪvd/",
        "tip": "Has just → she's just в быстрой речи",
        "expected": "She has just arrived."
      },
      {
        "phrase": "I haven't seen him yet.",
        "ipa": "/aɪ ˈhævnt siːn/",
        "tip": "Haven't — ударение на haven't, не на seen",
        "expected": "I haven't seen him yet."
      },
      {
        "phrase": "We've known each other for years.",
        "ipa": "/wiːv nəʊn/",
        "tip": "We've — сокращение we have, known — silent k",
        "expected": "We've known each other for years."
      }
    ],
    "flashcards": [
      {
        "word": "ever",
        "trans": "когда-либо",
        "example": "Have you ever tried climbing?"
      },
      {
        "word": "never",
        "trans": "никогда",
        "example": "I have never been to Australia."
      },
      {
        "word": "already",
        "trans": "уже",
        "example": "She has already left."
      },
      {
        "word": "yet",
        "trans": "ещё (не)",
        "example": "I haven't eaten yet."
      },
      {
        "word": "just",
        "trans": "только что",
        "example": "He has just called."
      },
      {
        "word": "recently",
        "trans": "недавно",
        "example": "I have recently started yoga."
      },
      {
        "word": "experience",
        "trans": "опыт",
        "example": "Travel gives you great experience."
      },
      {
        "word": "since",
        "trans": "с (момента)",
        "example": "I have lived here since 2018."
      },
      {
        "word": "for",
        "trans": "в течение",
        "example": "She has worked here for five years."
      },
      {
        "word": "result",
        "trans": "результат",
        "example": "The result is positive."
      },
      {
        "word": "finished",
        "trans": "закончил",
        "example": "I have finished the book."
      },
      {
        "word": "been",
        "trans": "был (PP of be)",
        "example": "I have been to Rome twice."
      },
      {
        "word": "seen",
        "trans": "видел (PP)",
        "example": "Have you seen this film?"
      },
      {
        "word": "done",
        "trans": "сделал (PP)",
        "example": "I have done my best."
      },
      {
        "word": "known",
        "trans": "знал (PP)",
        "example": "We have known them for years."
      },
      {
        "word": "lost",
        "trans": "потерял (PP)",
        "example": "I have lost my phone."
      },
      {
        "word": "found",
        "trans": "нашёл (PP)",
        "example": "She has found a new job."
      },
      {
        "word": "written",
        "trans": "написал (PP)",
        "example": "He has written three novels."
      },
      {
        "word": "travelled",
        "trans": "путешествовал (PP)",
        "example": "They have travelled widely."
      },
      {
        "word": "learned",
        "trans": "выучил (PP)",
        "example": "I have learned a lot."
      }
    ],
    "culture": {
      "watch": [
        "Eat Pray Love — путешествия и личный опыт"
      ],
      "listen": [
        "U2 — I Still Haven't Found What I'm Looking For"
      ],
      "read": [
        "J.K. Rowling — Harry Potter and the Philosopher's Stone"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "Has the character ever lived abroad?",
        "keywords": [
          "ever",
          "never",
          "already",
          "yet",
          "just",
          "recently",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I have finished my homework."
      },
      {
        "prompt": "What has she just discovered?",
        "keywords": [
          "ever",
          "never",
          "already",
          "yet",
          "just",
          "recently",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She has lived here since 2020."
      },
      {
        "prompt": "How long have they been friends?",
        "keywords": [
          "ever",
          "never",
          "already",
          "yet",
          "just",
          "recently",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I have finished my homework."
      },
      {
        "prompt": "Have you ever read this author?",
        "keywords": [
          "ever",
          "never",
          "already",
          "yet",
          "just",
          "recently",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She has lived here since 2020."
      },
      {
        "prompt": "What has happened in the story so far?",
        "keywords": [
          "ever",
          "never",
          "already",
          "yet",
          "just",
          "recently",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I have finished my homework."
      }
    ],
    "speaking": [
      {
        "task": "Расскажи о 3 вещах, которые ты когда-либо делал (Have you ever...?).",
        "keywords": [
          "ever",
          "never",
          "already",
          "yet",
          "just",
          "recently",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I have finished my homework.",
        "useSpeech": true
      },
      {
        "task": "Опиши, что ты уже сделал сегодня — 4 предложения в Present Perfect.",
        "keywords": [
          "ever",
          "never",
          "already",
          "yet",
          "just",
          "recently",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She has lived here since 2020.",
        "useSpeech": true
      },
      {
        "task": "Скажи, как долго ты занимаешься чем-то (for/since) — 2 предложения.",
        "keywords": [
          "ever",
          "never",
          "already",
          "yet",
          "just",
          "recently",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I have finished my homework.",
        "useSpeech": true
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ already eaten lunch.",
        "options": [
          "has",
          "have"
        ],
        "answer": "has"
      },
      {
        "sentence": "___ you ever been to Japan?",
        "options": [
          "Have",
          "Did"
        ],
        "answer": "Have"
      }
    ],
    "theory": {
      "intro": "Present Perfect связывает прошлое с настоящим: опыт, недавние события и результат, важный сейчас.",
      "reading": "**Настоящее совершённое время** — Present Perfect связывает прошлое с настоящим: опыт, недавние события и результат, важный сейчас.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### Опыт и результат\nИспользуем, когда важен сам факт или результат, а не точное время. Маркеры: ever, never, already, yet, just.\n\n*Пример:* I have finished my homework.\n\n### For / Since\nFor + период времени; since + точка начала. Показывает, как долго действие длится до настоящего.\n\n*Пример:* She has lived here since 2020.\n\n### Формулы\n- `Affirmative: have/has + V3 (past participle)`\n- `Question/Negative: Have/Has + subject + V3 / haven't/hasn't + V3`\n\n### Типичная ошибка\n❌ I have seen him yesterday.\n✅ I saw him yesterday.",
      "keyPoints": [
        "Опыт и результат: Используем, когда важен сам факт или результат, а не точное время. Маркеры: ever",
        "For / Since: For + период времени; since + точка начала. Показывает, как долго действие длитс",
        "Запомни формулы: Affirmative: have/has + V3 (past participle); Question/Negative: Have/Has + subject + V3 / haven't/hasn't + V3",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «ever»?",
        "options": [
          "в течение",
          "только что",
          "когда-либо",
          "с (какого-то момента)"
        ],
        "answer": "когда-либо"
      },
      {
        "question": "What is «never»?",
        "options": [
          "с (какого-то момента)",
          "опыт",
          "уже",
          "никогда"
        ],
        "answer": "никогда"
      },
      {
        "question": "What is «already»?",
        "options": [
          "никогда",
          "опыт",
          "уже",
          "когда-либо"
        ],
        "answer": "уже"
      },
      {
        "question": "What is «yet»?",
        "options": [
          "когда-либо",
          "ещё (не)",
          "опыт",
          "недавно"
        ],
        "answer": "ещё (не)"
      },
      {
        "question": "What is «just»?",
        "options": [
          "ещё (не)",
          "опыт",
          "в течение",
          "только что"
        ],
        "answer": "только что"
      },
      {
        "type": "gap",
        "sentence": "The word «недавно» in English is ___.",
        "answer": "recently",
        "hint": "r…"
      },
      {
        "type": "gap",
        "sentence": "The word «опыт» in English is ___.",
        "answer": "experience",
        "hint": "e…"
      },
      {
        "type": "gap",
        "sentence": "The word «с (какого-то момента)» in English is ___.",
        "answer": "since",
        "hint": "s…"
      }
    ]
  },
  {
    "id": 20,
    "level": "A2",
    "title": "Present Perfect vs Past Simple",
    "titleRu": "Present Perfect и Past Simple",
    "topic": "Когда какое время",
    "description": "Учимся выбирать правильное время: Past Simple для конкретного прошлого, Present Perfect для связи с настоящим.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What did you do last weekend?",
        "keywords": [
          "last",
          "this week",
          "specific",
          "unfinished",
          "connection",
          "time marker",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I met her in 2022."
      },
      {
        "prompt": "Have you done anything interesting this week?",
        "keywords": [
          "last",
          "this week",
          "specific",
          "unfinished",
          "connection",
          "time marker",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I have met many interesting people."
      },
      {
        "prompt": "When did you start learning English?",
        "keywords": [
          "last",
          "this week",
          "specific",
          "unfinished",
          "connection",
          "time marker",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I met her in 2022."
      }
    ],
    "vocab": [
      {
        "en": "last",
        "ru": "прошлый"
      },
      {
        "en": "this week",
        "ru": "на этой неделе"
      },
      {
        "en": "specific",
        "ru": "конкретный"
      },
      {
        "en": "unfinished",
        "ru": "незавершённый"
      },
      {
        "en": "connection",
        "ru": "связь"
      },
      {
        "en": "time marker",
        "ru": "маркер времени"
      },
      {
        "en": "recent",
        "ru": "недавний"
      },
      {
        "en": "definite",
        "ru": "определённый"
      },
      {
        "en": "indefinite",
        "ru": "неопределённый"
      },
      {
        "en": "context",
        "ru": "контекст"
      }
    ],
    "grammar": {
      "title": "Present Perfect vs Past Simple",
      "blocks": [
        {
          "title": "Past Simple",
          "desc": "Конкретное время в прошлом, которое уже закончилось. Маркеры: yesterday, last year, in 2019, ago.",
          "example": "I met her in 2022."
        },
        {
          "title": "Present Perfect",
          "desc": "Без точного времени или связь с настоящим. Маркеры: ever, never, already, yet, this week, so far.",
          "example": "I have met many interesting people."
        }
      ],
      "formulas": [
        "Past Simple: V2 + time marker (yesterday, last week)",
        "Present Perfect: have/has + V3 (no specific past time)"
      ],
      "extraExamples": [
        {
          "label": "Past Simple",
          "items": [
            "She left an hour ago.",
            "Did you watch the match last night?"
          ]
        },
        {
          "label": "Present Perfect",
          "items": [
            "She has already left.",
            "Have you watched the new series yet?"
          ]
        }
      ],
      "mistake": {
        "wrong": "I have visited Paris in 2019.",
        "right": "I visited Paris in 2019."
      }
    },
    "quiz": [
      {
        "sentence": "I ___ him yesterday.",
        "options": [
          "saw",
          "have seen"
        ],
        "answer": "saw"
      },
      {
        "sentence": "She ___ three countries this year.",
        "options": [
          "visited",
          "has visited"
        ],
        "answer": "has visited"
      },
      {
        "sentence": "___ you ___ the news last night?",
        "options": [
          "Did / watch",
          "Have / watched"
        ],
        "answer": "Did / watch"
      },
      {
        "sentence": "We ___ each other since school.",
        "options": [
          "have known",
          "knew"
        ],
        "answer": "have known"
      },
      {
        "sentence": "He ___ his phone two days ago.",
        "options": [
          "lost",
          "has lost"
        ],
        "answer": "lost"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I saw him yesterday.",
        "ipa": "/aɪ sɔː hɪm ˈjestədeɪ/",
        "tip": "Saw — неправильный глагол, ударение на yesterday",
        "expected": "I saw him yesterday."
      },
      {
        "phrase": "I have seen him recently.",
        "ipa": "/aɪ hæv siːn ˈriːsntli/",
        "tip": "Seen — длинный звук /iː/, silent ee",
        "expected": "I have seen him recently."
      },
      {
        "phrase": "Did you go last week?",
        "ipa": "/dɪd juː ɡəʊ lɑːst wiːk/",
        "tip": "Did — короткий /ɪ/, не растягивай",
        "expected": "Did you go last week?"
      },
      {
        "phrase": "Have you been there before?",
        "ipa": "/hæv juː biːn ðeə/",
        "tip": "Been — один слог /biːn/, не би-эн",
        "expected": "Have you been there before?"
      },
      {
        "phrase": "She left an hour ago.",
        "ipa": "/ʃiː left ən aʊə əˈɡəʊ/",
        "tip": "Ago — ударение на второй слог",
        "expected": "She left an hour ago."
      }
    ],
    "flashcards": [
      {
        "word": "last",
        "trans": "прошлый",
        "example": "I saw her last Monday."
      },
      {
        "word": "this week",
        "trans": "на этой неделе",
        "example": "I have worked hard this week."
      },
      {
        "word": "specific",
        "trans": "конкретный",
        "example": "Give a specific date."
      },
      {
        "word": "unfinished",
        "trans": "незавершённый",
        "example": "This week is unfinished."
      },
      {
        "word": "connection",
        "trans": "связь",
        "example": "Present Perfect shows a connection to now."
      },
      {
        "word": "time marker",
        "trans": "маркер времени",
        "example": "Yesterday is a Past Simple marker."
      },
      {
        "word": "recent",
        "trans": "недавний",
        "example": "I have read a recent article."
      },
      {
        "word": "definite",
        "trans": "определённый",
        "example": "Last year is a definite time."
      },
      {
        "word": "indefinite",
        "trans": "неопределённый",
        "example": "Ever refers to indefinite time."
      },
      {
        "word": "context",
        "trans": "контекст",
        "example": "Context helps choose the tense."
      },
      {
        "word": "saw",
        "trans": "видел (Past Simple)",
        "example": "I saw the film last night."
      },
      {
        "word": "have seen",
        "trans": "видел (Present Perfect)",
        "example": "I have seen that film before."
      },
      {
        "word": "went",
        "trans": "ходил",
        "example": "We went to the beach yesterday."
      },
      {
        "word": "have gone",
        "trans": "сходил/ушёл",
        "example": "She has gone to the shop."
      },
      {
        "word": "met",
        "trans": "встретил",
        "example": "I met him in 2020."
      },
      {
        "word": "have met",
        "trans": "встречал",
        "example": "I have met many teachers."
      },
      {
        "word": "ago",
        "trans": "назад",
        "example": "He called two hours ago."
      },
      {
        "word": "so far",
        "trans": "до сих пор",
        "example": "So far, I have learned 500 words."
      },
      {
        "word": "yet",
        "trans": "ещё",
        "example": "Have you finished yet?"
      },
      {
        "word": "already",
        "trans": "уже",
        "example": "I have already eaten."
      }
    ],
    "culture": {
      "watch": [
        "Forrest Gump — события в разные периоды жизни"
      ],
      "listen": [
        "Frank Sinatra — My Way"
      ],
      "read": [
        "Agatha Christie — Murder on the Orient Express"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "When did the story begin?",
        "keywords": [
          "last",
          "this week",
          "specific",
          "unfinished",
          "connection",
          "time marker",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I met her in 2022."
      },
      {
        "prompt": "Has the detective found any clues yet?",
        "keywords": [
          "last",
          "this week",
          "specific",
          "unfinished",
          "connection",
          "time marker",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I have met many interesting people."
      },
      {
        "prompt": "What happened last chapter?",
        "keywords": [
          "last",
          "this week",
          "specific",
          "unfinished",
          "connection",
          "time marker",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I met her in 2022."
      },
      {
        "prompt": "Have the characters ever met before?",
        "keywords": [
          "last",
          "this week",
          "specific",
          "unfinished",
          "connection",
          "time marker",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I have met many interesting people."
      },
      {
        "prompt": "Did she leave yesterday or today?",
        "keywords": [
          "last",
          "this week",
          "specific",
          "unfinished",
          "connection",
          "time marker",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I met her in 2022."
      }
    ],
    "speaking": [
      {
        "task": "Расскажи о прошлых выходных (Past Simple) и о этой неделе (Present Perfect) — по 3 предложения.",
        "keywords": [
          "last",
          "this week",
          "specific",
          "unfinished",
          "connection",
          "time marker",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I met her in 2022.",
        "useSpeech": true
      },
      {
        "task": "Ответь на 5 вопросов Did you...? и Have you ever...?",
        "keywords": [
          "last",
          "this week",
          "specific",
          "unfinished",
          "connection",
          "time marker",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I have met many interesting people.",
        "useSpeech": true
      },
      {
        "task": "Объясни по-русски, почему в двух примерах нужны разные времена.",
        "keywords": [
          "last",
          "this week",
          "specific",
          "unfinished",
          "connection",
          "time marker",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I met her in 2022.",
        "useSpeech": true
      }
    ],
    "grammarCheck": [
      {
        "sentence": "I ___ him yesterday.",
        "options": [
          "saw",
          "have seen"
        ],
        "answer": "saw"
      },
      {
        "sentence": "She ___ three countries this year.",
        "options": [
          "visited",
          "has visited"
        ],
        "answer": "has visited"
      }
    ],
    "theory": {
      "intro": "Учимся выбирать правильное время: Past Simple для конкретного прошлого, Present Perfect для связи с настоящим.",
      "reading": "**Present Perfect и Past Simple** — Учимся выбирать правильное время: Past Simple для конкретного прошлого, Present Perfect для связи с настоящим.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### Past Simple\nКонкретное время в прошлом, которое уже закончилось. Маркеры: yesterday, last year, in 2019, ago.\n\n*Пример:* I met her in 2022.\n\n### Present Perfect\nБез точного времени или связь с настоящим. Маркеры: ever, never, already, yet, this week, so far.\n\n*Пример:* I have met many interesting people.\n\n### Формулы\n- `Past Simple: V2 + time marker (yesterday, last week)`\n- `Present Perfect: have/has + V3 (no specific past time)`\n\n### Типичная ошибка\n❌ I have visited Paris in 2019.\n✅ I visited Paris in 2019.",
      "keyPoints": [
        "Past Simple: Конкретное время в прошлом, которое уже закончилось. Маркеры: yesterday, last ye",
        "Present Perfect: Без точного времени или связь с настоящим. Маркеры: ever, never, already, yet, t",
        "Запомни формулы: Past Simple: V2 + time marker (yesterday, last week); Present Perfect: have/has + V3 (no specific past time)",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «last»?",
        "options": [
          "определённый",
          "неопределённый",
          "маркер времени",
          "прошлый"
        ],
        "answer": "прошлый"
      },
      {
        "question": "What is «this week»?",
        "options": [
          "неопределённый",
          "на этой неделе",
          "незавершённый",
          "маркер времени"
        ],
        "answer": "на этой неделе"
      },
      {
        "question": "What is «specific»?",
        "options": [
          "незавершённый",
          "неопределённый",
          "конкретный",
          "маркер времени"
        ],
        "answer": "конкретный"
      },
      {
        "question": "What is «unfinished»?",
        "options": [
          "конкретный",
          "незавершённый",
          "на этой неделе",
          "недавний"
        ],
        "answer": "незавершённый"
      },
      {
        "question": "What is «connection»?",
        "options": [
          "связь",
          "недавний",
          "незавершённый",
          "прошлый"
        ],
        "answer": "связь"
      },
      {
        "type": "gap",
        "sentence": "The word «маркер времени» in English is ___.",
        "answer": "time marker",
        "hint": "t…"
      },
      {
        "type": "gap",
        "sentence": "The word «недавний» in English is ___.",
        "answer": "recent",
        "hint": "r…"
      },
      {
        "type": "gap",
        "sentence": "The word «определённый» in English is ___.",
        "answer": "definite",
        "hint": "d…"
      }
    ]
  },
  {
    "id": 21,
    "level": "A2",
    "title": "Future Forms",
    "titleRu": "Формы будущего времени",
    "topic": "Will, going to, Present Continuous",
    "description": "Три способа говорить о будущем: спонтанные решения, планы и договорённости на ближайшее время.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What are your plans for the weekend?",
        "keywords": [
          "plan",
          "prediction",
          "intention",
          "appointment",
          "spontaneous",
          "schedule",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I think it will rain tomorrow."
      },
      {
        "prompt": "What do you think will happen in technology?",
        "keywords": [
          "plan",
          "prediction",
          "intention",
          "appointment",
          "spontaneous",
          "schedule",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I'm going to learn Spanish. / I'm meeting Anna at six."
      },
      {
        "prompt": "Are you doing anything special tomorrow?",
        "keywords": [
          "plan",
          "prediction",
          "intention",
          "appointment",
          "spontaneous",
          "schedule",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I think it will rain tomorrow."
      }
    ],
    "vocab": [
      {
        "en": "plan",
        "ru": "план"
      },
      {
        "en": "prediction",
        "ru": "предсказание"
      },
      {
        "en": "intention",
        "ru": "намерение"
      },
      {
        "en": "appointment",
        "ru": "встреча, назначение"
      },
      {
        "en": "spontaneous",
        "ru": "спонтанный"
      },
      {
        "en": "schedule",
        "ru": "расписание"
      },
      {
        "en": "probably",
        "ru": "вероятно"
      },
      {
        "en": "definitely",
        "ru": "определённо"
      },
      {
        "en": "arrangement",
        "ru": "договорённость"
      },
      {
        "en": "forecast",
        "ru": "прогноз"
      }
    ],
    "grammar": {
      "title": "Future: will / going to / Present Continuous",
      "blocks": [
        {
          "title": "Will",
          "desc": "Спонтанные решения, предсказания, обещания. Маркеры: I think, probably, maybe.",
          "example": "I think it will rain tomorrow."
        },
        {
          "title": "Going to / Present Continuous",
          "desc": "Going to — планы и намерения; Present Continuous — договорённости с конкретным временем.",
          "example": "I'm going to learn Spanish. / I'm meeting Anna at six."
        }
      ],
      "formulas": [
        "Will: will + V1 (won't + V1)",
        "Going to: am/is/are + going to + V1",
        "Future arrangement: am/is/are + V-ing + time"
      ],
      "extraExamples": [
        {
          "label": "Will",
          "items": [
            "Don't worry, I'll help you.",
            "Robots will change many jobs."
          ]
        },
        {
          "label": "Going to / Arrangement",
          "items": [
            "We're going to move next year.",
            "She is flying to Rome on Friday."
          ]
        }
      ],
      "mistake": {
        "wrong": "I will meeting him tomorrow.",
        "right": "I am meeting him tomorrow."
      }
    },
    "quiz": [
      {
        "sentence": "Look at those clouds! It ___ rain.",
        "options": [
          "will",
          "is going to"
        ],
        "answer": "is going to"
      },
      {
        "sentence": "I ___ you with your project.",
        "options": [
          "will help",
          "am helping"
        ],
        "answer": "will help"
      },
      {
        "sentence": "We ___ dinner with friends on Saturday.",
        "options": [
          "will have",
          "are having"
        ],
        "answer": "are having"
      },
      {
        "sentence": "She ___ a doctor when she grows up.",
        "options": [
          "will be",
          "is being"
        ],
        "answer": "will be"
      },
      {
        "sentence": "They ___ to Japan next month.",
        "options": [
          "are going to travel",
          "travel"
        ],
        "answer": "are going to travel"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I will help you.",
        "ipa": "/aɪ wɪl/help juː/",
        "tip": "Will — короткий /ɪ/, часто сокращается до I'll",
        "expected": "I will help you."
      },
      {
        "phrase": "It's going to rain.",
        "ipa": "/ɪts ˈɡəʊɪŋ tə reɪn/",
        "tip": "Going to → gonna /ˈɡənə/ в разговорной речи",
        "expected": "It's going to rain."
      },
      {
        "phrase": "I'm meeting her at six.",
        "ipa": "/aɪm ˈmiːtɪŋ/",
        "tip": "Meeting — двойное t звучит как одно",
        "expected": "I'm meeting her at six."
      },
      {
        "phrase": "I think it will work.",
        "ipa": "/aɪ θɪŋk ɪt wɪl wɜːk/",
        "tip": "Will work — связывай слова без паузы",
        "expected": "I think it will work."
      },
      {
        "phrase": "We're going to move.",
        "ipa": "/wɪə ˈɡəʊɪŋ tə muːv/",
        "tip": "We're — /wɪə/, не разделяй на we are",
        "expected": "We're going to move."
      }
    ],
    "flashcards": [
      {
        "word": "plan",
        "trans": "план",
        "example": "I plan to travel next summer."
      },
      {
        "word": "prediction",
        "trans": "предсказание",
        "example": "That's just a prediction."
      },
      {
        "word": "intention",
        "trans": "намерение",
        "example": "My intention is to improve."
      },
      {
        "word": "appointment",
        "trans": "встреча",
        "example": "I have a doctor's appointment."
      },
      {
        "word": "spontaneous",
        "trans": "спontанный",
        "example": "It was a spontaneous decision."
      },
      {
        "word": "schedule",
        "trans": "расписание",
        "example": "Check the train schedule."
      },
      {
        "word": "probably",
        "trans": "вероятно",
        "example": "It will probably snow."
      },
      {
        "word": "definitely",
        "trans": "определённо",
        "example": "I will definitely come."
      },
      {
        "word": "arrangement",
        "trans": "договорённость",
        "example": "We made an arrangement."
      },
      {
        "word": "forecast",
        "trans": "прогноз",
        "example": "The weather forecast looks good."
      },
      {
        "word": "will",
        "trans": "will (будущее)",
        "example": "I will call you later."
      },
      {
        "word": "going to",
        "trans": "собираюсь",
        "example": "She is going to study abroad."
      },
      {
        "word": "I'll",
        "trans": "я (сделаю)",
        "example": "I'll send the email."
      },
      {
        "word": "won't",
        "trans": "не буду",
        "example": "He won't be late."
      },
      {
        "word": "promise",
        "trans": "обещание",
        "example": "I promise I will try."
      },
      {
        "word": "tonight",
        "trans": "сегодня вечером",
        "example": "I'm working tonight."
      },
      {
        "word": "tomorrow",
        "trans": "завтра",
        "example": "We are leaving tomorrow."
      },
      {
        "word": "next week",
        "trans": "на следующей неделе",
        "example": "I'm going to start next week."
      },
      {
        "word": "maybe",
        "trans": "может быть",
        "example": "Maybe it will be sunny."
      },
      {
        "word": "future",
        "trans": "будущее",
        "example": "The future is uncertain."
      }
    ],
    "culture": {
      "watch": [
        "Back to the Future — предсказания о будущем"
      ],
      "listen": [
        "Louis Armstrong — What a Wonderful World"
      ],
      "read": [
        "George Orwell — 1984"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What will probably happen next in the story?",
        "keywords": [
          "plan",
          "prediction",
          "intention",
          "appointment",
          "spontaneous",
          "schedule",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I think it will rain tomorrow."
      },
      {
        "prompt": "What is the character going to do tomorrow?",
        "keywords": [
          "plan",
          "prediction",
          "intention",
          "appointment",
          "spontaneous",
          "schedule",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I'm going to learn Spanish. / I'm meeting Anna at six."
      },
      {
        "prompt": "Are they meeting anyone this weekend?",
        "keywords": [
          "plan",
          "prediction",
          "intention",
          "appointment",
          "spontaneous",
          "schedule",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I think it will rain tomorrow."
      },
      {
        "prompt": "What did he promise he would do?",
        "keywords": [
          "plan",
          "prediction",
          "intention",
          "appointment",
          "spontaneous",
          "schedule",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I'm going to learn Spanish. / I'm meeting Anna at six."
      },
      {
        "prompt": "What are your predictions for the ending?",
        "keywords": [
          "plan",
          "prediction",
          "intention",
          "appointment",
          "spontaneous",
          "schedule",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I think it will rain tomorrow."
      }
    ],
    "speaking": [
      {
        "task": "Опиши свои планы на выходные, используя going to и Present Continuous.",
        "keywords": [
          "plan",
          "prediction",
          "intention",
          "appointment",
          "spontaneous",
          "schedule",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I think it will rain tomorrow.",
        "useSpeech": true
      },
      {
        "task": "Сделай 3 предсказания о будущем с will.",
        "keywords": [
          "plan",
          "prediction",
          "intention",
          "appointment",
          "spontaneous",
          "schedule",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I'm going to learn Spanish. / I'm meeting Anna at six.",
        "useSpeech": true
      },
      {
        "task": "Ролевая игра: друг просит помощи — ответь спонтанно с I'll...",
        "keywords": [
          "plan",
          "prediction",
          "intention",
          "appointment",
          "spontaneous",
          "schedule",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I think it will rain tomorrow.",
        "useSpeech": true
      }
    ],
    "grammarCheck": [
      {
        "sentence": "Look at those clouds! It ___ rain.",
        "options": [
          "will",
          "is going to"
        ],
        "answer": "is going to"
      },
      {
        "sentence": "I ___ you with your project.",
        "options": [
          "will help",
          "am helping"
        ],
        "answer": "will help"
      }
    ],
    "theory": {
      "intro": "Три способа говорить о будущем: спонтанные решения, планы и договорённости на ближайшее время.",
      "reading": "**Формы будущего времени** — Три способа говорить о будущем: спонтанные решения, планы и договорённости на ближайшее время.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### Will\nСпонтанные решения, предсказания, обещания. Маркеры: I think, probably, maybe.\n\n*Пример:* I think it will rain tomorrow.\n\n### Going to / Present Continuous\nGoing to — планы и намерения; Present Continuous — договорённости с конкретным временем.\n\n*Пример:* I'm going to learn Spanish. / I'm meeting Anna at six.\n\n### Формулы\n- `Will: will + V1 (won't + V1)`\n- `Going to: am/is/are + going to + V1`\n- `Future arrangement: am/is/are + V-ing + time`\n\n### Типичная ошибка\n❌ I will meeting him tomorrow.\n✅ I am meeting him tomorrow.",
      "keyPoints": [
        "Will: Спонтанные решения, предсказания, обещания. Маркеры: I think, probably, maybe.",
        "Going to / Present Continuous: Going to — планы и намерения; Present Continuous — договорённости с конкретным в",
        "Запомни формулы: Will: will + V1 (won't + V1); Going to: am/is/are + going to + V1; Future arrangement: am/is/are + V-ing + time",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «plan»?",
        "options": [
          "план",
          "вероятно",
          "расписание",
          "спонтанный"
        ],
        "answer": "план"
      },
      {
        "question": "What is «prediction»?",
        "options": [
          "договорённость",
          "предсказание",
          "определённо",
          "спонтанный"
        ],
        "answer": "предсказание"
      },
      {
        "question": "What is «intention»?",
        "options": [
          "намерение",
          "план",
          "расписание",
          "вероятно"
        ],
        "answer": "намерение"
      },
      {
        "question": "What is «appointment»?",
        "options": [
          "встреча, назначение",
          "намерение",
          "спонтанный",
          "план"
        ],
        "answer": "встреча, назначение"
      },
      {
        "question": "What is «spontaneous»?",
        "options": [
          "вероятно",
          "спонтанный",
          "расписание",
          "предсказание"
        ],
        "answer": "спонтанный"
      },
      {
        "type": "gap",
        "sentence": "The word «расписание» in English is ___.",
        "answer": "schedule",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «вероятно» in English is ___.",
        "answer": "probably",
        "hint": "p…"
      },
      {
        "type": "gap",
        "sentence": "The word «определённо» in English is ___.",
        "answer": "definitely",
        "hint": "d…"
      }
    ]
  },
  {
    "id": 22,
    "level": "A2",
    "title": "Comparatives & Superlatives",
    "titleRu": "Сравнительная и превосходная степень",
    "topic": "bigger, the best",
    "description": "Сравниваем людей, предметы и явления: -er/-est и more/most.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "Which is bigger — your city or mine?",
        "keywords": [
          "bigger",
          "smaller",
          "better",
          "worse",
          "the best",
          "than",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "This phone is cheaper than mine."
      },
      {
        "prompt": "Who is the tallest in your family?",
        "keywords": [
          "bigger",
          "smaller",
          "better",
          "worse",
          "the best",
          "than",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She is the most talented student."
      },
      {
        "prompt": "Is this book more interesting than that one?",
        "keywords": [
          "bigger",
          "smaller",
          "better",
          "worse",
          "the best",
          "than",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "This phone is cheaper than mine."
      }
    ],
    "vocab": [
      {
        "en": "bigger",
        "ru": "больше"
      },
      {
        "en": "smaller",
        "ru": "меньше"
      },
      {
        "en": "better",
        "ru": "лучше"
      },
      {
        "en": "worse",
        "ru": "хуже"
      },
      {
        "en": "the best",
        "ru": "лучший"
      },
      {
        "en": "than",
        "ru": "чем"
      },
      {
        "en": "as...as",
        "ru": "такой же как"
      },
      {
        "en": "cheap",
        "ru": "дешёвый"
      },
      {
        "en": "expensive",
        "ru": "дорогой"
      },
      {
        "en": "interesting",
        "ru": "интересный"
      }
    ],
    "grammar": {
      "title": "Comparatives & Superlatives",
      "blocks": [
        {
          "title": "Comparative",
          "desc": "Короткие: +er (big→bigger) или more + прилагательное (more interesting). Than — чем.",
          "example": "This phone is cheaper than mine."
        },
        {
          "title": "Superlative",
          "desc": "The + -est (the biggest) или the most + adj. As...as — такой же.",
          "example": "She is the most talented student."
        }
      ],
      "formulas": [
        "short adj: -er + than / the -est",
        "long adj: more + adj + than / the most + adj"
      ],
      "extraExamples": [
        {
          "label": "Сравнение",
          "items": [
            "He is taller than me.",
            "It's as good as the original."
          ]
        },
        {
          "label": "Превосходная",
          "items": [
            "This is the best film I've seen.",
            "It's the most popular song."
          ]
        }
      ],
      "mistake": {
        "wrong": "He is more tall than me.",
        "right": "He is taller than me."
      }
    },
    "quiz": [
      {
        "sentence": "This car is ___ than that one.",
        "options": [
          "faster",
          "more fast"
        ],
        "answer": "faster"
      },
      {
        "sentence": "She is the ___ student in the class.",
        "options": [
          "best",
          "better"
        ],
        "answer": "best"
      },
      {
        "sentence": "It's ___ expensive than I thought.",
        "options": [
          "more",
          "most"
        ],
        "answer": "more"
      },
      {
        "sentence": "He is as tall ___ his brother.",
        "options": [
          "as",
          "than"
        ],
        "answer": "as"
      },
      {
        "sentence": "This is the ___ building in the city.",
        "options": [
          "tallest",
          "taller"
        ],
        "answer": "tallest"
      }
    ],
    "pronunciation": [
      {
        "phrase": "bigger than mine",
        "ipa": "/ˈbɪɡə ðən maɪn/",
        "tip": "Bigger — удвоение g",
        "expected": "bigger than mine"
      },
      {
        "phrase": "the best",
        "ipa": "/ðə best/",
        "tip": "Best — короткий e",
        "expected": "the best"
      },
      {
        "phrase": "more interesting",
        "ipa": "/mɔː ˈɪntrəstɪŋ/",
        "tip": "More — слабое r",
        "expected": "more interesting"
      },
      {
        "phrase": "as good as",
        "ipa": "/əz ɡʊd əz/",
        "tip": "As...as — слабые as",
        "expected": "as good as"
      },
      {
        "phrase": "the most popular",
        "ipa": "/ðə məʊst ˈpɒpjələ/",
        "tip": "Popular — 3 слога",
        "expected": "the most popular"
      }
    ],
    "culture": {
      "watch": [
        "Top 10 lists — comparisons"
      ],
      "listen": [
        "Queen — We Are the Champions"
      ],
      "read": [
        "Product comparison articles (A2)"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "Which is better?",
        "keywords": [
          "bigger",
          "smaller",
          "better",
          "worse",
          "the best",
          "than",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "This phone is cheaper than mine."
      },
      {
        "prompt": "Who is the most important character?",
        "keywords": [
          "bigger",
          "smaller",
          "better",
          "worse",
          "the best",
          "than",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She is the most talented student."
      },
      {
        "prompt": "Is it as good as the first version?",
        "keywords": [
          "bigger",
          "smaller",
          "better",
          "worse",
          "the best",
          "than",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "This phone is cheaper than mine."
      },
      {
        "prompt": "What is cheaper?",
        "keywords": [
          "bigger",
          "smaller",
          "better",
          "worse",
          "the best",
          "than",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She is the most talented student."
      },
      {
        "prompt": "What is the tallest/highest?",
        "keywords": [
          "bigger",
          "smaller",
          "better",
          "worse",
          "the best",
          "than",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "This phone is cheaper than mine."
      }
    ],
    "speaking": [
      {
        "task": "Сравни 3 города по разным критериям.",
        "keywords": [
          "bigger",
          "smaller",
          "better",
          "worse",
          "the best",
          "than",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "This phone is cheaper than mine.",
        "useSpeech": true
      },
      {
        "task": "Опиши лучший фильм/книгу — superlative.",
        "keywords": [
          "bigger",
          "smaller",
          "better",
          "worse",
          "the best",
          "than",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She is the most talented student.",
        "useSpeech": true
      },
      {
        "task": "Сравни себя с другом — 4 предложения с than.",
        "keywords": [
          "bigger",
          "smaller",
          "better",
          "worse",
          "the best",
          "than",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "This phone is cheaper than mine.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "bigger",
        "trans": "больше",
        "example": "I use 'bigger' every day."
      },
      {
        "word": "smaller",
        "trans": "меньше",
        "example": "I use 'smaller' every day."
      },
      {
        "word": "better",
        "trans": "лучше",
        "example": "I use 'better' every day."
      },
      {
        "word": "worse",
        "trans": "хуже",
        "example": "I use 'worse' every day."
      },
      {
        "word": "the best",
        "trans": "лучший",
        "example": "I use 'the best' every day."
      },
      {
        "word": "than",
        "trans": "чем",
        "example": "I use 'than' every day."
      },
      {
        "word": "as...as",
        "trans": "такой же как",
        "example": "I use 'as...as' every day."
      },
      {
        "word": "cheap",
        "trans": "дешёвый",
        "example": "I use 'cheap' every day."
      },
      {
        "word": "expensive",
        "trans": "дорогой",
        "example": "I use 'expensive' every day."
      },
      {
        "word": "interesting",
        "trans": "интересный",
        "example": "I use 'interesting' every day."
      },
      {
        "word": "bigger",
        "trans": "больше",
        "example": "Practice makes progress."
      },
      {
        "word": "smaller",
        "trans": "меньше",
        "example": "Practice makes progress."
      },
      {
        "word": "better",
        "trans": "лучше",
        "example": "Practice makes progress."
      },
      {
        "word": "worse",
        "trans": "хуже",
        "example": "Practice makes progress."
      },
      {
        "word": "the best",
        "trans": "лучший",
        "example": "Practice makes progress."
      },
      {
        "word": "than",
        "trans": "чем",
        "example": "Practice makes progress."
      },
      {
        "word": "as...as",
        "trans": "такой же как",
        "example": "Practice makes progress."
      },
      {
        "word": "cheap",
        "trans": "дешёвый",
        "example": "Practice makes progress."
      },
      {
        "word": "expensive",
        "trans": "дорогой",
        "example": "Practice makes progress."
      },
      {
        "word": "interesting",
        "trans": "интересный",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "This car is ___ than that one.",
        "options": [
          "faster",
          "more fast"
        ],
        "answer": "faster"
      },
      {
        "sentence": "She is the ___ student in the class.",
        "options": [
          "best",
          "better"
        ],
        "answer": "best"
      }
    ],
    "theory": {
      "intro": "Сравниваем людей, предметы и явления: -er/-est и more/most.",
      "reading": "**Сравнительная и превосходная степень** — Сравниваем людей, предметы и явления: -er/-est и more/most.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### Comparative\nКороткие: +er (big→bigger) или more + прилагательное (more interesting). Than — чем.\n\n*Пример:* This phone is cheaper than mine.\n\n### Superlative\nThe + -est (the biggest) или the most + adj. As...as — такой же.\n\n*Пример:* She is the most talented student.\n\n### Формулы\n- `short adj: -er + than / the -est`\n- `long adj: more + adj + than / the most + adj`\n\n### Типичная ошибка\n❌ He is more tall than me.\n✅ He is taller than me.",
      "keyPoints": [
        "Comparative: Короткие: +er (big→bigger) или more + прилагательное (more interesting). Than — ",
        "Superlative: The + -est (the biggest) или the most + adj. As...as — такой же.",
        "Запомни формулы: short adj: -er + than / the -est; long adj: more + adj + than / the most + adj",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «bigger»?",
        "options": [
          "дешёвый",
          "такой же как",
          "интересный",
          "больше"
        ],
        "answer": "больше"
      },
      {
        "question": "What is «smaller»?",
        "options": [
          "меньше",
          "дорогой",
          "лучше",
          "такой же как"
        ],
        "answer": "меньше"
      },
      {
        "question": "What is «better»?",
        "options": [
          "меньше",
          "лучше",
          "хуже",
          "такой же как"
        ],
        "answer": "лучше"
      },
      {
        "question": "What is «worse»?",
        "options": [
          "хуже",
          "лучший",
          "интересный",
          "такой же как"
        ],
        "answer": "хуже"
      },
      {
        "question": "What is «the best»?",
        "options": [
          "лучше",
          "лучший",
          "меньше",
          "интересный"
        ],
        "answer": "лучший"
      },
      {
        "type": "gap",
        "sentence": "The word «чем» in English is ___.",
        "answer": "than",
        "hint": "t…"
      },
      {
        "type": "gap",
        "sentence": "The word «такой же как» in English is ___.",
        "answer": "as...as",
        "hint": "a…"
      },
      {
        "type": "gap",
        "sentence": "The word «дешёвый» in English is ___.",
        "answer": "cheap",
        "hint": "c…"
      }
    ]
  },
  {
    "id": 23,
    "level": "A2",
    "title": "Countable & Uncountable",
    "titleRu": "Исчисляемые и неисчисляемые",
    "topic": "some, any, much, many",
    "description": "Различаем исчисляемые и неисчисляемые существительные, some/any, much/many.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "How much water do you drink?",
        "keywords": [
          "much",
          "many",
          "some",
          "any",
          "a lot of",
          "few",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "How many apples? How much sugar?"
      },
      {
        "prompt": "How many friends do you have?",
        "keywords": [
          "much",
          "many",
          "some",
          "any",
          "a lot of",
          "few",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "There isn't any bread. Do you have any questions?"
      },
      {
        "prompt": "Is there any milk left?",
        "keywords": [
          "much",
          "many",
          "some",
          "any",
          "a lot of",
          "few",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "How many apples? How much sugar?"
      }
    ],
    "vocab": [
      {
        "en": "much",
        "ru": "много (неисч.)"
      },
      {
        "en": "many",
        "ru": "много (исч.)"
      },
      {
        "en": "some",
        "ru": "немного, несколько"
      },
      {
        "en": "any",
        "ru": "любой, некоторый"
      },
      {
        "en": "a lot of",
        "ru": "много"
      },
      {
        "en": "few",
        "ru": "мало (исч.)"
      },
      {
        "en": "little",
        "ru": "мало (неисч.)"
      },
      {
        "en": "water",
        "ru": "вода"
      },
      {
        "en": "money",
        "ru": "деньги"
      },
      {
        "en": "advice",
        "ru": "совет"
      }
    ],
    "grammar": {
      "title": "Countable vs Uncountable",
      "blocks": [
        {
          "title": "Much / Many",
          "desc": "Many + исчисляемые (many books). Much + неисчисляемые (much time). A lot of — универсально.",
          "example": "How many apples? How much sugar?"
        },
        {
          "title": "Some / Any",
          "desc": "Some — утверждение. Any — вопросы и отрицание.",
          "example": "There isn't any bread. Do you have any questions?"
        }
      ],
      "formulas": [
        "many + countable plural",
        "much + uncountable",
        "some (+) / any (?/-)"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "I don't have much money.",
            "There are many people here."
          ]
        },
        {
          "label": "Some/Any",
          "items": [
            "Would you like some tea?",
            "I don't need any help."
          ]
        }
      ],
      "mistake": {
        "wrong": "How many money do you have?",
        "right": "How much money do you have?"
      }
    },
    "quiz": [
      {
        "sentence": "How ___ students are there?",
        "options": [
          "many",
          "much"
        ],
        "answer": "many"
      },
      {
        "sentence": "I don't have ___ time.",
        "options": [
          "much",
          "many"
        ],
        "answer": "much"
      },
      {
        "sentence": "There isn't ___ milk.",
        "options": [
          "some",
          "any"
        ],
        "answer": "any"
      },
      {
        "sentence": "Would you like ___ coffee?",
        "options": [
          "some",
          "any"
        ],
        "answer": "some"
      },
      {
        "sentence": "She has ___ friends.",
        "options": [
          "a lot of",
          "much"
        ],
        "answer": "a lot of"
      }
    ],
    "pronunciation": [
      {
        "phrase": "How much money?",
        "ipa": "/haʊ mʌtʃ ˈmʌni/",
        "tip": "Money — неисчисляемое",
        "expected": "How much money?"
      },
      {
        "phrase": "How many people?",
        "ipa": "/haʊ ˈmeni ˈpiːpl/",
        "tip": "Many — ударение на первый слог",
        "expected": "How many people?"
      },
      {
        "phrase": "a lot of water",
        "ipa": "/ə lɒt əv ˈwɔːtə/",
        "tip": "A lot of — связно",
        "expected": "a lot of water"
      },
      {
        "phrase": "any questions",
        "ipa": "/eni ˈkwestʃənz/",
        "tip": "Questions — /tʃənz/",
        "expected": "any questions"
      },
      {
        "phrase": "some advice",
        "ipa": "/sʌm ədˈvaɪs/",
        "tip": "Advice — неисчисляемое, без -s",
        "expected": "some advice"
      }
    ],
    "culture": {
      "watch": [
        "Cooking shows — ingredients"
      ],
      "listen": [
        "Pink Floyd — Money"
      ],
      "read": [
        "Shopping dialogues A2"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "How much/many is mentioned?",
        "keywords": [
          "much",
          "many",
          "some",
          "any",
          "a lot of",
          "few",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "How many apples? How much sugar?"
      },
      {
        "prompt": "Is the noun countable?",
        "keywords": [
          "much",
          "many",
          "some",
          "any",
          "a lot of",
          "few",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "There isn't any bread. Do you have any questions?"
      },
      {
        "prompt": "Is some or any used correctly?",
        "keywords": [
          "much",
          "many",
          "some",
          "any",
          "a lot of",
          "few",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "How many apples? How much sugar?"
      },
      {
        "prompt": "What uncountable nouns appear?",
        "keywords": [
          "much",
          "many",
          "some",
          "any",
          "a lot of",
          "few",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "There isn't any bread. Do you have any questions?"
      },
      {
        "prompt": "What do they need to buy?",
        "keywords": [
          "much",
          "many",
          "some",
          "any",
          "a lot of",
          "few",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "How many apples? How much sugar?"
      }
    ],
    "speaking": [
      {
        "task": "Скажи, сколько у тебя чего — much/many.",
        "keywords": [
          "much",
          "many",
          "some",
          "any",
          "a lot of",
          "few",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "How many apples? How much sugar?",
        "useSpeech": true
      },
      {
        "task": "Составь список покупок с some/any.",
        "keywords": [
          "much",
          "many",
          "some",
          "any",
          "a lot of",
          "few",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "There isn't any bread. Do you have any questions?",
        "useSpeech": true
      },
      {
        "task": "Объясни разницу much и many на примерах.",
        "keywords": [
          "much",
          "many",
          "some",
          "any",
          "a lot of",
          "few",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "How many apples? How much sugar?",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "much",
        "trans": "много (неисч.)",
        "example": "I use 'much' every day."
      },
      {
        "word": "many",
        "trans": "много (исч.)",
        "example": "I use 'many' every day."
      },
      {
        "word": "some",
        "trans": "немного, несколько",
        "example": "I use 'some' every day."
      },
      {
        "word": "any",
        "trans": "любой, некоторый",
        "example": "I use 'any' every day."
      },
      {
        "word": "a lot of",
        "trans": "много",
        "example": "I use 'a lot of' every day."
      },
      {
        "word": "few",
        "trans": "мало (исч.)",
        "example": "I use 'few' every day."
      },
      {
        "word": "little",
        "trans": "мало (неисч.)",
        "example": "I use 'little' every day."
      },
      {
        "word": "water",
        "trans": "вода",
        "example": "I use 'water' every day."
      },
      {
        "word": "money",
        "trans": "деньги",
        "example": "I use 'money' every day."
      },
      {
        "word": "advice",
        "trans": "совет",
        "example": "I use 'advice' every day."
      },
      {
        "word": "much",
        "trans": "много (неисч.)",
        "example": "Practice makes progress."
      },
      {
        "word": "many",
        "trans": "много (исч.)",
        "example": "Practice makes progress."
      },
      {
        "word": "some",
        "trans": "немного, несколько",
        "example": "Practice makes progress."
      },
      {
        "word": "any",
        "trans": "любой, некоторый",
        "example": "Practice makes progress."
      },
      {
        "word": "a lot of",
        "trans": "много",
        "example": "Practice makes progress."
      },
      {
        "word": "few",
        "trans": "мало (исч.)",
        "example": "Practice makes progress."
      },
      {
        "word": "little",
        "trans": "мало (неисч.)",
        "example": "Practice makes progress."
      },
      {
        "word": "water",
        "trans": "вода",
        "example": "Practice makes progress."
      },
      {
        "word": "money",
        "trans": "деньги",
        "example": "Practice makes progress."
      },
      {
        "word": "advice",
        "trans": "совет",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "How ___ students are there?",
        "options": [
          "many",
          "much"
        ],
        "answer": "many"
      },
      {
        "sentence": "I don't have ___ time.",
        "options": [
          "much",
          "many"
        ],
        "answer": "much"
      }
    ],
    "theory": {
      "intro": "Различаем исчисляемые и неисчисляемые существительные, some/any, much/many.",
      "reading": "**Исчисляемые и неисчисляемые** — Различаем исчисляемые и неисчисляемые существительные, some/any, much/many.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### Much / Many\nMany + исчисляемые (many books). Much + неисчисляемые (much time). A lot of — универсально.\n\n*Пример:* How many apples? How much sugar?\n\n### Some / Any\nSome — утверждение. Any — вопросы и отрицание.\n\n*Пример:* There isn't any bread. Do you have any questions?\n\n### Формулы\n- `many + countable plural`\n- `much + uncountable`\n- `some (+) / any (?/-)`\n\n### Типичная ошибка\n❌ How many money do you have?\n✅ How much money do you have?",
      "keyPoints": [
        "Much / Many: Many + исчисляемые (many books). Much + неисчисляемые (much time). A lot of — ун",
        "Some / Any: Some — утверждение. Any — вопросы и отрицание.",
        "Запомни формулы: many + countable plural; much + uncountable; some (+) / any (?/-)",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «much»?",
        "options": [
          "любой, некоторый",
          "много (неисч.)",
          "вода",
          "много (исч.)"
        ],
        "answer": "много (неисч.)"
      },
      {
        "question": "What is «many»?",
        "options": [
          "любой, некоторый",
          "немного, несколько",
          "много (исч.)",
          "много (неисч.)"
        ],
        "answer": "много (исч.)"
      },
      {
        "question": "What is «some»?",
        "options": [
          "немного, несколько",
          "много",
          "любой, некоторый",
          "деньги"
        ],
        "answer": "немного, несколько"
      },
      {
        "question": "What is «any»?",
        "options": [
          "любой, некоторый",
          "немного, несколько",
          "деньги",
          "вода"
        ],
        "answer": "любой, некоторый"
      },
      {
        "question": "What is «a lot of»?",
        "options": [
          "много",
          "много (исч.)",
          "деньги",
          "немного, несколько"
        ],
        "answer": "много"
      },
      {
        "type": "gap",
        "sentence": "The word «мало (исч.)» in English is ___.",
        "answer": "few",
        "hint": "f…"
      },
      {
        "type": "gap",
        "sentence": "The word «мало (неисч.)» in English is ___.",
        "answer": "little",
        "hint": "l…"
      },
      {
        "type": "gap",
        "sentence": "The word «вода» in English is ___.",
        "answer": "water",
        "hint": "w…"
      }
    ]
  },
  {
    "id": 24,
    "level": "A2",
    "title": "Prepositions of Time",
    "titleRu": "Предлоги времени",
    "topic": "at / in / on",
    "description": "Предлоги at, in, on для времени и дат.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "When do you wake up?",
        "keywords": [
          "at",
          "in",
          "on",
          "morning",
          "night",
          "weekend",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The meeting is on Friday at 3 pm."
      },
      {
        "prompt": "What do you do on Sundays?",
        "keywords": [
          "at",
          "in",
          "on",
          "morning",
          "night",
          "weekend",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I study in the evening."
      },
      {
        "prompt": "Were you born in summer?",
        "keywords": [
          "at",
          "in",
          "on",
          "morning",
          "night",
          "weekend",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The meeting is on Friday at 3 pm."
      }
    ],
    "vocab": [
      {
        "en": "at",
        "ru": "в (время)"
      },
      {
        "en": "in",
        "ru": "в (месяц/год)"
      },
      {
        "en": "on",
        "ru": "в (день)"
      },
      {
        "en": "morning",
        "ru": "утро"
      },
      {
        "en": "night",
        "ru": "ночь"
      },
      {
        "en": "weekend",
        "ru": "выходные"
      },
      {
        "en": "Monday",
        "ru": "понедельник"
      },
      {
        "en": "January",
        "ru": "январь"
      },
      {
        "en": "birthday",
        "ru": "день рождения"
      },
      {
        "en": "holiday",
        "ru": "праздник"
      }
    ],
    "grammar": {
      "title": "Prepositions of Time",
      "blocks": [
        {
          "title": "At / In / On",
          "desc": "At — время: at 7, at night, at noon. In — месяцы, годы, части дня: in May, in 2020. On — дни: on Monday, on my birthday.",
          "example": "The meeting is on Friday at 3 pm."
        },
        {
          "title": "Другие",
          "desc": "At the weekend (BrE) / on the weekend (AmE). In the morning. At night.",
          "example": "I study in the evening."
        }
      ],
      "formulas": [
        "at + time / at night",
        "in + month/year/season",
        "on + day/date"
      ],
      "extraExamples": [
        {
          "label": "At",
          "items": [
            "at 8 o'clock",
            "at the moment"
          ]
        },
        {
          "label": "In/On",
          "items": [
            "in winter",
            "on Christmas Day"
          ]
        }
      ],
      "mistake": {
        "wrong": "I work in Monday.",
        "right": "I work on Monday."
      }
    },
    "quiz": [
      {
        "sentence": "The class starts ___ nine.",
        "options": [
          "at",
          "on"
        ],
        "answer": "at"
      },
      {
        "sentence": "She was born ___ 1995.",
        "options": [
          "in",
          "on"
        ],
        "answer": "in"
      },
      {
        "sentence": "We meet ___ Friday.",
        "options": [
          "on",
          "in"
        ],
        "answer": "on"
      },
      {
        "sentence": "I read books ___ the evening.",
        "options": [
          "in",
          "at"
        ],
        "answer": "in"
      },
      {
        "sentence": "___ night I sleep.",
        "options": [
          "At",
          "On"
        ],
        "answer": "At"
      }
    ],
    "pronunciation": [
      {
        "phrase": "at nine o'clock",
        "ipa": "/ət naɪn əˈklɒk/",
        "tip": "At — слабое /ət/",
        "expected": "at nine o'clock"
      },
      {
        "phrase": "on Monday",
        "ipa": "/ɒn ˈmʌndeɪ/",
        "tip": "Monday — ударение на первый слог",
        "expected": "on Monday"
      },
      {
        "phrase": "in January",
        "ipa": "/ɪn ˈdʒænjuəri/",
        "tip": "January — не пропускай syllables",
        "expected": "in January"
      },
      {
        "phrase": "at the weekend",
        "ipa": "/ət ðə wiːkˈend/",
        "tip": "Weekend — BrE at",
        "expected": "at the weekend"
      },
      {
        "phrase": "in the morning",
        "ipa": "/ɪn ðə ˈmɔːnɪŋ/",
        "tip": "The — слабое /ðə/",
        "expected": "in the morning"
      }
    ],
    "culture": {
      "watch": [
        "Calendar and schedule scenes in films"
      ],
      "listen": [
        "The Bangles — Manic Monday"
      ],
      "read": [
        "Diary entries A2"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "When does the event happen?",
        "keywords": [
          "at",
          "in",
          "on",
          "morning",
          "night",
          "weekend",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The meeting is on Friday at 3 pm."
      },
      {
        "prompt": "What preposition is used?",
        "keywords": [
          "at",
          "in",
          "on",
          "morning",
          "night",
          "weekend",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I study in the evening."
      },
      {
        "prompt": "What day/month is mentioned?",
        "keywords": [
          "at",
          "in",
          "on",
          "morning",
          "night",
          "weekend",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The meeting is on Friday at 3 pm."
      },
      {
        "prompt": "At what time?",
        "keywords": [
          "at",
          "in",
          "on",
          "morning",
          "night",
          "weekend",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I study in the evening."
      },
      {
        "prompt": "Is at/in/on correct?",
        "keywords": [
          "at",
          "in",
          "on",
          "morning",
          "night",
          "weekend",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The meeting is on Friday at 3 pm."
      }
    ],
    "speaking": [
      {
        "task": "Расскажи о своём расписании с at/in/on.",
        "keywords": [
          "at",
          "in",
          "on",
          "morning",
          "night",
          "weekend",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The meeting is on Friday at 3 pm.",
        "useSpeech": true
      },
      {
        "task": "Опиши свой день рождения и праздники.",
        "keywords": [
          "at",
          "in",
          "on",
          "morning",
          "night",
          "weekend",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I study in the evening.",
        "useSpeech": true
      },
      {
        "task": "Исправь 5 предложений с ошибками в предлогах.",
        "keywords": [
          "at",
          "in",
          "on",
          "morning",
          "night",
          "weekend",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The meeting is on Friday at 3 pm.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "at",
        "trans": "в (время)",
        "example": "I use 'at' every day."
      },
      {
        "word": "in",
        "trans": "в (месяц/год)",
        "example": "I use 'in' every day."
      },
      {
        "word": "on",
        "trans": "в (день)",
        "example": "I use 'on' every day."
      },
      {
        "word": "morning",
        "trans": "утро",
        "example": "I use 'morning' every day."
      },
      {
        "word": "night",
        "trans": "ночь",
        "example": "I use 'night' every day."
      },
      {
        "word": "weekend",
        "trans": "выходные",
        "example": "I use 'weekend' every day."
      },
      {
        "word": "Monday",
        "trans": "понедельник",
        "example": "I use 'Monday' every day."
      },
      {
        "word": "January",
        "trans": "январь",
        "example": "I use 'January' every day."
      },
      {
        "word": "birthday",
        "trans": "день рождения",
        "example": "I use 'birthday' every day."
      },
      {
        "word": "holiday",
        "trans": "праздник",
        "example": "I use 'holiday' every day."
      },
      {
        "word": "at",
        "trans": "в (время)",
        "example": "Practice makes progress."
      },
      {
        "word": "in",
        "trans": "в (месяц/год)",
        "example": "Practice makes progress."
      },
      {
        "word": "on",
        "trans": "в (день)",
        "example": "Practice makes progress."
      },
      {
        "word": "morning",
        "trans": "утро",
        "example": "Practice makes progress."
      },
      {
        "word": "night",
        "trans": "ночь",
        "example": "Practice makes progress."
      },
      {
        "word": "weekend",
        "trans": "выходные",
        "example": "Practice makes progress."
      },
      {
        "word": "Monday",
        "trans": "понедельник",
        "example": "Practice makes progress."
      },
      {
        "word": "January",
        "trans": "январь",
        "example": "Practice makes progress."
      },
      {
        "word": "birthday",
        "trans": "день рождения",
        "example": "Practice makes progress."
      },
      {
        "word": "holiday",
        "trans": "праздник",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "The class starts ___ nine.",
        "options": [
          "at",
          "on"
        ],
        "answer": "at"
      },
      {
        "sentence": "She was born ___ 1995.",
        "options": [
          "in",
          "on"
        ],
        "answer": "in"
      }
    ],
    "theory": {
      "intro": "Предлоги at, in, on для времени и дат.",
      "reading": "**Предлоги времени** — Предлоги at, in, on для времени и дат.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### At / In / On\nAt — время: at 7, at night, at noon. In — месяцы, годы, части дня: in May, in 2020. On — дни: on Monday, on my birthday.\n\n*Пример:* The meeting is on Friday at 3 pm.\n\n### Другие\nAt the weekend (BrE) / on the weekend (AmE). In the morning. At night.\n\n*Пример:* I study in the evening.\n\n### Формулы\n- `at + time / at night`\n- `in + month/year/season`\n- `on + day/date`\n\n### Типичная ошибка\n❌ I work in Monday.\n✅ I work on Monday.",
      "keyPoints": [
        "At / In / On: At — время: at 7, at night, at noon. In — месяцы, годы, части дня: in May, in 20",
        "Другие: At the weekend (BrE) / on the weekend (AmE). In the morning. At night.",
        "Запомни формулы: at + time / at night; in + month/year/season; on + day/date",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «at»?",
        "options": [
          "в (время)",
          "утро",
          "понедельник",
          "январь"
        ],
        "answer": "в (время)"
      },
      {
        "question": "What is «in»?",
        "options": [
          "в (месяц/год)",
          "день рождения",
          "в (день)",
          "праздник"
        ],
        "answer": "в (месяц/год)"
      },
      {
        "question": "What is «on»?",
        "options": [
          "в (месяц/год)",
          "январь",
          "в (день)",
          "ночь"
        ],
        "answer": "в (день)"
      },
      {
        "question": "What is «morning»?",
        "options": [
          "утро",
          "праздник",
          "в (время)",
          "в (месяц/год)"
        ],
        "answer": "утро"
      },
      {
        "question": "What is «night»?",
        "options": [
          "утро",
          "январь",
          "в (месяц/год)",
          "ночь"
        ],
        "answer": "ночь"
      },
      {
        "type": "gap",
        "sentence": "The word «выходные» in English is ___.",
        "answer": "weekend",
        "hint": "w…"
      },
      {
        "type": "gap",
        "sentence": "The word «понедельник» in English is ___.",
        "answer": "Monday",
        "hint": "M…"
      },
      {
        "type": "gap",
        "sentence": "The word «январь» in English is ___.",
        "answer": "January",
        "hint": "J…"
      }
    ]
  },
  {
    "level": "A2",
    "title": "Passive Voice Intro",
    "titleRu": "Страдательный залог",
    "topic": "is/are + V3",
    "description": "Passive для процессов.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about is/are + v3?",
        "keywords": [
          "make",
          "build",
          "write",
          "speak",
          "use",
          "open",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "English is spoken here."
      },
      {
        "prompt": "Give an example with make.",
        "keywords": [
          "make",
          "build",
          "write",
          "speak",
          "use",
          "open",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "This phone is made in China."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "make",
          "build",
          "write",
          "speak",
          "use",
          "open",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "English is spoken here."
      }
    ],
    "vocab": [
      {
        "en": "make",
        "ru": "делать"
      },
      {
        "en": "build",
        "ru": "строить"
      },
      {
        "en": "write",
        "ru": "писать"
      },
      {
        "en": "speak",
        "ru": "говорить"
      },
      {
        "en": "use",
        "ru": "использовать"
      },
      {
        "en": "open",
        "ru": "открывать"
      },
      {
        "en": "close",
        "ru": "закрывать"
      },
      {
        "en": "call",
        "ru": "называть"
      },
      {
        "en": "grow",
        "ru": "выращивать"
      },
      {
        "en": "sell",
        "ru": "продавать"
      }
    ],
    "grammar": {
      "title": "Passive Voice Intro",
      "blocks": [
        {
          "title": "is/are + V3",
          "desc": "Passive для процессов.",
          "example": "English is spoken here."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "This phone is made in China."
        }
      ],
      "formulas": [
        "English is spoken here.",
        "This phone is made in China."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "English is spoken here.",
            "This phone is made in China."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "English is spoken here.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "English is spoken here."
      },
      {
        "phrase": "This phone is made in China.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "This phone is made in China."
      },
      {
        "phrase": "What do you know about is/are + v3?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about is/are + v3?"
      },
      {
        "phrase": "make is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "make is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "A2 Passive Voice Intro"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "A2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about make?",
        "keywords": [
          "make",
          "build",
          "write",
          "speak",
          "use",
          "open",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "English is spoken here."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "make",
          "build",
          "write",
          "speak",
          "use",
          "open",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "This phone is made in China."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "make",
          "build",
          "write",
          "speak",
          "use",
          "open",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "English is spoken here."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "make",
          "build",
          "write",
          "speak",
          "use",
          "open",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "This phone is made in China."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "make",
          "build",
          "write",
          "speak",
          "use",
          "open",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "English is spoken here."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about is/are + v3.",
        "keywords": [
          "make",
          "build",
          "write",
          "speak",
          "use",
          "open",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "English is spoken here.",
        "useSpeech": true
      },
      {
        "task": "Use build and write.",
        "keywords": [
          "make",
          "build",
          "write",
          "speak",
          "use",
          "open",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "This phone is made in China.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "make",
          "build",
          "write",
          "speak",
          "use",
          "open",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "English is spoken here.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "make",
        "trans": "делать",
        "example": "I use 'make' every day."
      },
      {
        "word": "build",
        "trans": "строить",
        "example": "I use 'build' every day."
      },
      {
        "word": "write",
        "trans": "писать",
        "example": "I use 'write' every day."
      },
      {
        "word": "speak",
        "trans": "говорить",
        "example": "I use 'speak' every day."
      },
      {
        "word": "use",
        "trans": "использовать",
        "example": "I use 'use' every day."
      },
      {
        "word": "open",
        "trans": "открывать",
        "example": "I use 'open' every day."
      },
      {
        "word": "close",
        "trans": "закрывать",
        "example": "I use 'close' every day."
      },
      {
        "word": "call",
        "trans": "называть",
        "example": "I use 'call' every day."
      },
      {
        "word": "grow",
        "trans": "выращивать",
        "example": "I use 'grow' every day."
      },
      {
        "word": "sell",
        "trans": "продавать",
        "example": "I use 'sell' every day."
      },
      {
        "word": "make",
        "trans": "делать",
        "example": "Practice makes progress."
      },
      {
        "word": "build",
        "trans": "строить",
        "example": "Practice makes progress."
      },
      {
        "word": "write",
        "trans": "писать",
        "example": "Practice makes progress."
      },
      {
        "word": "speak",
        "trans": "говорить",
        "example": "Practice makes progress."
      },
      {
        "word": "use",
        "trans": "использовать",
        "example": "Practice makes progress."
      },
      {
        "word": "open",
        "trans": "открывать",
        "example": "Practice makes progress."
      },
      {
        "word": "close",
        "trans": "закрывать",
        "example": "Practice makes progress."
      },
      {
        "word": "call",
        "trans": "называть",
        "example": "Practice makes progress."
      },
      {
        "word": "grow",
        "trans": "выращивать",
        "example": "Practice makes progress."
      },
      {
        "word": "sell",
        "trans": "продавать",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 25,
    "theory": {
      "intro": "Passive для процессов.",
      "reading": "**Страдательный залог** — Passive для процессов.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### is/are + V3\nPassive для процессов.\n\n*Пример:* English is spoken here.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* This phone is made in China.\n\n### Формулы\n- `English is spoken here.`\n- `This phone is made in China.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "is/are + V3: Passive для процессов.",
        "Практика: Используй в речи.",
        "Запомни формулы: English is spoken here.; This phone is made in China.",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «make»?",
        "options": [
          "открывать",
          "называть",
          "закрывать",
          "делать"
        ],
        "answer": "делать"
      },
      {
        "question": "What is «build»?",
        "options": [
          "использовать",
          "строить",
          "писать",
          "называть"
        ],
        "answer": "строить"
      },
      {
        "question": "What is «write»?",
        "options": [
          "говорить",
          "использовать",
          "закрывать",
          "писать"
        ],
        "answer": "писать"
      },
      {
        "question": "What is «speak»?",
        "options": [
          "использовать",
          "открывать",
          "писать",
          "говорить"
        ],
        "answer": "говорить"
      },
      {
        "question": "What is «use»?",
        "options": [
          "использовать",
          "говорить",
          "продавать",
          "выращивать"
        ],
        "answer": "использовать"
      },
      {
        "type": "gap",
        "sentence": "The word «открывать» in English is ___.",
        "answer": "open",
        "hint": "o…"
      },
      {
        "type": "gap",
        "sentence": "The word «закрывать» in English is ___.",
        "answer": "close",
        "hint": "c…"
      },
      {
        "type": "gap",
        "sentence": "The word «называть» in English is ___.",
        "answer": "call",
        "hint": "c…"
      }
    ]
  },
  {
    "level": "A2",
    "title": "Gerunds & Infinitives",
    "titleRu": "Герундий и инфинитив",
    "topic": "enjoy / want to",
    "description": "V-ing vs to + V.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about enjoy / want to?",
        "keywords": [
          "enjoy",
          "want",
          "need",
          "decide",
          "plan",
          "stop",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I enjoy swimming."
      },
      {
        "prompt": "Give an example with enjoy.",
        "keywords": [
          "enjoy",
          "want",
          "need",
          "decide",
          "plan",
          "stop",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She decided to study abroad."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "enjoy",
          "want",
          "need",
          "decide",
          "plan",
          "stop",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I enjoy swimming."
      }
    ],
    "vocab": [
      {
        "en": "enjoy",
        "ru": "наслаждаться"
      },
      {
        "en": "want",
        "ru": "хотеть"
      },
      {
        "en": "need",
        "ru": "нуждаться"
      },
      {
        "en": "decide",
        "ru": "решать"
      },
      {
        "en": "plan",
        "ru": "планировать"
      },
      {
        "en": "stop",
        "ru": "переставать"
      },
      {
        "en": "start",
        "ru": "начинать"
      },
      {
        "en": "hope",
        "ru": "надеяться"
      },
      {
        "en": "learn",
        "ru": "учиться"
      },
      {
        "en": "forget",
        "ru": "забывать"
      }
    ],
    "grammar": {
      "title": "Gerunds & Infinitives",
      "blocks": [
        {
          "title": "enjoy / want to",
          "desc": "V-ing vs to + V.",
          "example": "I enjoy swimming."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "She decided to study abroad."
        }
      ],
      "formulas": [
        "I enjoy swimming.",
        "She decided to study abroad."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "I enjoy swimming.",
            "She decided to study abroad."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I enjoy swimming.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I enjoy swimming."
      },
      {
        "phrase": "She decided to study abroad.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "She decided to study abroad."
      },
      {
        "phrase": "What do you know about enjoy / want to?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about enjoy / want to?"
      },
      {
        "phrase": "enjoy is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "enjoy is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "A2 Gerunds & Infinitives"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "A2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about enjoy?",
        "keywords": [
          "enjoy",
          "want",
          "need",
          "decide",
          "plan",
          "stop",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I enjoy swimming."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "enjoy",
          "want",
          "need",
          "decide",
          "plan",
          "stop",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She decided to study abroad."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "enjoy",
          "want",
          "need",
          "decide",
          "plan",
          "stop",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I enjoy swimming."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "enjoy",
          "want",
          "need",
          "decide",
          "plan",
          "stop",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She decided to study abroad."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "enjoy",
          "want",
          "need",
          "decide",
          "plan",
          "stop",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I enjoy swimming."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about enjoy / want to.",
        "keywords": [
          "enjoy",
          "want",
          "need",
          "decide",
          "plan",
          "stop",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I enjoy swimming.",
        "useSpeech": true
      },
      {
        "task": "Use want and need.",
        "keywords": [
          "enjoy",
          "want",
          "need",
          "decide",
          "plan",
          "stop",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She decided to study abroad.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "enjoy",
          "want",
          "need",
          "decide",
          "plan",
          "stop",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I enjoy swimming.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "enjoy",
        "trans": "наслаждаться",
        "example": "I use 'enjoy' every day."
      },
      {
        "word": "want",
        "trans": "хотеть",
        "example": "I use 'want' every day."
      },
      {
        "word": "need",
        "trans": "нуждаться",
        "example": "I use 'need' every day."
      },
      {
        "word": "decide",
        "trans": "решать",
        "example": "I use 'decide' every day."
      },
      {
        "word": "plan",
        "trans": "планировать",
        "example": "I use 'plan' every day."
      },
      {
        "word": "stop",
        "trans": "переставать",
        "example": "I use 'stop' every day."
      },
      {
        "word": "start",
        "trans": "начинать",
        "example": "I use 'start' every day."
      },
      {
        "word": "hope",
        "trans": "надеяться",
        "example": "I use 'hope' every day."
      },
      {
        "word": "learn",
        "trans": "учиться",
        "example": "I use 'learn' every day."
      },
      {
        "word": "forget",
        "trans": "забывать",
        "example": "I use 'forget' every day."
      },
      {
        "word": "enjoy",
        "trans": "наслаждаться",
        "example": "Practice makes progress."
      },
      {
        "word": "want",
        "trans": "хотеть",
        "example": "Practice makes progress."
      },
      {
        "word": "need",
        "trans": "нуждаться",
        "example": "Practice makes progress."
      },
      {
        "word": "decide",
        "trans": "решать",
        "example": "Practice makes progress."
      },
      {
        "word": "plan",
        "trans": "планировать",
        "example": "Practice makes progress."
      },
      {
        "word": "stop",
        "trans": "переставать",
        "example": "Practice makes progress."
      },
      {
        "word": "start",
        "trans": "начинать",
        "example": "Practice makes progress."
      },
      {
        "word": "hope",
        "trans": "надеяться",
        "example": "Practice makes progress."
      },
      {
        "word": "learn",
        "trans": "учиться",
        "example": "Practice makes progress."
      },
      {
        "word": "forget",
        "trans": "забывать",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 26,
    "theory": {
      "intro": "V-ing vs to + V.",
      "reading": "**Герундий и инфинитив** — V-ing vs to + V.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### enjoy / want to\nV-ing vs to + V.\n\n*Пример:* I enjoy swimming.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* She decided to study abroad.\n\n### Формулы\n- `I enjoy swimming.`\n- `She decided to study abroad.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "enjoy / want to: V-ing vs to + V.",
        "Практика: Используй в речи.",
        "Запомни формулы: I enjoy swimming.; She decided to study abroad.",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «enjoy»?",
        "options": [
          "нуждаться",
          "планировать",
          "решать",
          "наслаждаться"
        ],
        "answer": "наслаждаться"
      },
      {
        "question": "What is «want»?",
        "options": [
          "хотеть",
          "надеяться",
          "нуждаться",
          "переставать"
        ],
        "answer": "хотеть"
      },
      {
        "question": "What is «need»?",
        "options": [
          "начинать",
          "хотеть",
          "нуждаться",
          "забывать"
        ],
        "answer": "нуждаться"
      },
      {
        "question": "What is «decide»?",
        "options": [
          "надеяться",
          "начинать",
          "хотеть",
          "решать"
        ],
        "answer": "решать"
      },
      {
        "question": "What is «plan»?",
        "options": [
          "переставать",
          "забывать",
          "планировать",
          "решать"
        ],
        "answer": "планировать"
      },
      {
        "type": "gap",
        "sentence": "The word «переставать» in English is ___.",
        "answer": "stop",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «начинать» in English is ___.",
        "answer": "start",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «надеяться» in English is ___.",
        "answer": "hope",
        "hint": "h…"
      }
    ]
  },
  {
    "level": "A2",
    "title": "Question Tags",
    "titleRu": "Разделительные вопросы",
    "topic": "isn't it?",
    "description": "Короткие вопросы в конце.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about isn't it??",
        "keywords": [
          "tag",
          "right",
          "sure",
          "agree",
          "confirm",
          "reply",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "You are tired, aren't you?"
      },
      {
        "prompt": "Give an example with tag.",
        "keywords": [
          "tag",
          "right",
          "sure",
          "agree",
          "confirm",
          "reply",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She doesn't like coffee, does she?"
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "tag",
          "right",
          "sure",
          "agree",
          "confirm",
          "reply",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "You are tired, aren't you?"
      }
    ],
    "vocab": [
      {
        "en": "tag",
        "ru": "разделительный вопрос"
      },
      {
        "en": "right",
        "ru": "верно"
      },
      {
        "en": "sure",
        "ru": "уверенный"
      },
      {
        "en": "agree",
        "ru": "соглашаться"
      },
      {
        "en": "confirm",
        "ru": "подтверждать"
      },
      {
        "en": "reply",
        "ru": "отвечать"
      },
      {
        "en": "positive",
        "ru": "положительный"
      },
      {
        "en": "negative",
        "ru": "отрицательный"
      },
      {
        "en": "intonation",
        "ru": "интонация"
      },
      {
        "en": "falling",
        "ru": "падающая"
      }
    ],
    "grammar": {
      "title": "Question Tags",
      "blocks": [
        {
          "title": "isn't it?",
          "desc": "Короткие вопросы в конце.",
          "example": "You are tired, aren't you?"
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "She doesn't like coffee, does she?"
        }
      ],
      "formulas": [
        "You are tired, aren't you?",
        "She doesn't like coffee, does she?"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "You are tired, aren't you?",
            "She doesn't like coffee, does she?"
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "You are tired, aren't you?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "You are tired, aren't you?"
      },
      {
        "phrase": "She doesn't like coffee, does she?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "She doesn't like coffee, does she?"
      },
      {
        "phrase": "What do you know about isn't it??",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about isn't it??"
      },
      {
        "phrase": "tag is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "tag is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "A2 Question Tags"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "A2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about tag?",
        "keywords": [
          "tag",
          "right",
          "sure",
          "agree",
          "confirm",
          "reply",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You are tired, aren't you?"
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "tag",
          "right",
          "sure",
          "agree",
          "confirm",
          "reply",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She doesn't like coffee, does she?"
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "tag",
          "right",
          "sure",
          "agree",
          "confirm",
          "reply",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You are tired, aren't you?"
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "tag",
          "right",
          "sure",
          "agree",
          "confirm",
          "reply",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She doesn't like coffee, does she?"
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "tag",
          "right",
          "sure",
          "agree",
          "confirm",
          "reply",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You are tired, aren't you?"
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about isn't it?.",
        "keywords": [
          "tag",
          "right",
          "sure",
          "agree",
          "confirm",
          "reply",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "You are tired, aren't you?",
        "useSpeech": true
      },
      {
        "task": "Use right and sure.",
        "keywords": [
          "tag",
          "right",
          "sure",
          "agree",
          "confirm",
          "reply",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She doesn't like coffee, does she?",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "tag",
          "right",
          "sure",
          "agree",
          "confirm",
          "reply",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "You are tired, aren't you?",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "tag",
        "trans": "разделительный вопрос",
        "example": "I use 'tag' every day."
      },
      {
        "word": "right",
        "trans": "верно",
        "example": "I use 'right' every day."
      },
      {
        "word": "sure",
        "trans": "уверенный",
        "example": "I use 'sure' every day."
      },
      {
        "word": "agree",
        "trans": "соглашаться",
        "example": "I use 'agree' every day."
      },
      {
        "word": "confirm",
        "trans": "подтверждать",
        "example": "I use 'confirm' every day."
      },
      {
        "word": "reply",
        "trans": "отвечать",
        "example": "I use 'reply' every day."
      },
      {
        "word": "positive",
        "trans": "положительный",
        "example": "I use 'positive' every day."
      },
      {
        "word": "negative",
        "trans": "отрицательный",
        "example": "I use 'negative' every day."
      },
      {
        "word": "intonation",
        "trans": "интонация",
        "example": "I use 'intonation' every day."
      },
      {
        "word": "falling",
        "trans": "падающая",
        "example": "I use 'falling' every day."
      },
      {
        "word": "tag",
        "trans": "разделительный вопрос",
        "example": "Practice makes progress."
      },
      {
        "word": "right",
        "trans": "верно",
        "example": "Practice makes progress."
      },
      {
        "word": "sure",
        "trans": "уверенный",
        "example": "Practice makes progress."
      },
      {
        "word": "agree",
        "trans": "соглашаться",
        "example": "Practice makes progress."
      },
      {
        "word": "confirm",
        "trans": "подтверждать",
        "example": "Practice makes progress."
      },
      {
        "word": "reply",
        "trans": "отвечать",
        "example": "Practice makes progress."
      },
      {
        "word": "positive",
        "trans": "положительный",
        "example": "Practice makes progress."
      },
      {
        "word": "negative",
        "trans": "отрицательный",
        "example": "Practice makes progress."
      },
      {
        "word": "intonation",
        "trans": "интонация",
        "example": "Practice makes progress."
      },
      {
        "word": "falling",
        "trans": "падающая",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 27,
    "theory": {
      "intro": "Короткие вопросы в конце.",
      "reading": "**Разделительные вопросы** — Короткие вопросы в конце.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### isn't it?\nКороткие вопросы в конце.\n\n*Пример:* You are tired, aren't you?\n\n### Практика\nИспользуй в речи.\n\n*Пример:* She doesn't like coffee, does she?\n\n### Формулы\n- `You are tired, aren't you?`\n- `She doesn't like coffee, does she?`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "isn't it?: Короткие вопросы в конце.",
        "Практика: Используй в речи.",
        "Запомни формулы: You are tired, aren't you?; She doesn't like coffee, does she?",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «tag»?",
        "options": [
          "разделительный вопрос",
          "соглашаться",
          "отрицательный",
          "подтверждать"
        ],
        "answer": "разделительный вопрос"
      },
      {
        "question": "What is «right»?",
        "options": [
          "верно",
          "уверенный",
          "интонация",
          "отвечать"
        ],
        "answer": "верно"
      },
      {
        "question": "What is «sure»?",
        "options": [
          "уверенный",
          "падающая",
          "положительный",
          "соглашаться"
        ],
        "answer": "уверенный"
      },
      {
        "question": "What is «agree»?",
        "options": [
          "верно",
          "отрицательный",
          "соглашаться",
          "отвечать"
        ],
        "answer": "соглашаться"
      },
      {
        "question": "What is «confirm»?",
        "options": [
          "верно",
          "подтверждать",
          "интонация",
          "отрицательный"
        ],
        "answer": "подтверждать"
      },
      {
        "type": "gap",
        "sentence": "The word «отвечать» in English is ___.",
        "answer": "reply",
        "hint": "r…"
      },
      {
        "type": "gap",
        "sentence": "The word «положительный» in English is ___.",
        "answer": "positive",
        "hint": "p…"
      },
      {
        "type": "gap",
        "sentence": "The word «отрицательный» in English is ___.",
        "answer": "negative",
        "hint": "n…"
      }
    ]
  },
  {
    "level": "A2",
    "title": "Too & Enough",
    "titleRu": "Too и Enough",
    "topic": "слишком / достаточно",
    "description": "Степень и количество.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about слишком / достаточно?",
        "keywords": [
          "too",
          "enough",
          "very",
          "quite",
          "big",
          "small",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "This bag is too heavy."
      },
      {
        "prompt": "Give an example with too.",
        "keywords": [
          "too",
          "enough",
          "very",
          "quite",
          "big",
          "small",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "He isn't old enough to drive."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "too",
          "enough",
          "very",
          "quite",
          "big",
          "small",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "This bag is too heavy."
      }
    ],
    "vocab": [
      {
        "en": "too",
        "ru": "слишком"
      },
      {
        "en": "enough",
        "ru": "достаточно"
      },
      {
        "en": "very",
        "ru": "очень"
      },
      {
        "en": "quite",
        "ru": "довольно"
      },
      {
        "en": "big",
        "ru": "большой"
      },
      {
        "en": "small",
        "ru": "маленький"
      },
      {
        "en": "old",
        "ru": "старый"
      },
      {
        "en": "young",
        "ru": "молодой"
      },
      {
        "en": "fast",
        "ru": "быстрый"
      },
      {
        "en": "slow",
        "ru": "медленный"
      }
    ],
    "grammar": {
      "title": "Too & Enough",
      "blocks": [
        {
          "title": "слишком / достаточно",
          "desc": "Степень и количество.",
          "example": "This bag is too heavy."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "He isn't old enough to drive."
        }
      ],
      "formulas": [
        "This bag is too heavy.",
        "He isn't old enough to drive."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "This bag is too heavy.",
            "He isn't old enough to drive."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "This bag is too heavy.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "This bag is too heavy."
      },
      {
        "phrase": "He isn't old enough to drive.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "He isn't old enough to drive."
      },
      {
        "phrase": "What do you know about слишком / достаточно?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about слишком / достаточно?"
      },
      {
        "phrase": "too is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "too is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "A2 Too & Enough"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "A2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about too?",
        "keywords": [
          "too",
          "enough",
          "very",
          "quite",
          "big",
          "small",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "This bag is too heavy."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "too",
          "enough",
          "very",
          "quite",
          "big",
          "small",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "He isn't old enough to drive."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "too",
          "enough",
          "very",
          "quite",
          "big",
          "small",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "This bag is too heavy."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "too",
          "enough",
          "very",
          "quite",
          "big",
          "small",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "He isn't old enough to drive."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "too",
          "enough",
          "very",
          "quite",
          "big",
          "small",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "This bag is too heavy."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about слишком / достаточно.",
        "keywords": [
          "too",
          "enough",
          "very",
          "quite",
          "big",
          "small",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "This bag is too heavy.",
        "useSpeech": true
      },
      {
        "task": "Use enough and very.",
        "keywords": [
          "too",
          "enough",
          "very",
          "quite",
          "big",
          "small",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "He isn't old enough to drive.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "too",
          "enough",
          "very",
          "quite",
          "big",
          "small",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "This bag is too heavy.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "too",
        "trans": "слишком",
        "example": "I use 'too' every day."
      },
      {
        "word": "enough",
        "trans": "достаточно",
        "example": "I use 'enough' every day."
      },
      {
        "word": "very",
        "trans": "очень",
        "example": "I use 'very' every day."
      },
      {
        "word": "quite",
        "trans": "довольно",
        "example": "I use 'quite' every day."
      },
      {
        "word": "big",
        "trans": "большой",
        "example": "I use 'big' every day."
      },
      {
        "word": "small",
        "trans": "маленький",
        "example": "I use 'small' every day."
      },
      {
        "word": "old",
        "trans": "старый",
        "example": "I use 'old' every day."
      },
      {
        "word": "young",
        "trans": "молодой",
        "example": "I use 'young' every day."
      },
      {
        "word": "fast",
        "trans": "быстрый",
        "example": "I use 'fast' every day."
      },
      {
        "word": "slow",
        "trans": "медленный",
        "example": "I use 'slow' every day."
      },
      {
        "word": "too",
        "trans": "слишком",
        "example": "Practice makes progress."
      },
      {
        "word": "enough",
        "trans": "достаточно",
        "example": "Practice makes progress."
      },
      {
        "word": "very",
        "trans": "очень",
        "example": "Practice makes progress."
      },
      {
        "word": "quite",
        "trans": "довольно",
        "example": "Practice makes progress."
      },
      {
        "word": "big",
        "trans": "большой",
        "example": "Practice makes progress."
      },
      {
        "word": "small",
        "trans": "маленький",
        "example": "Practice makes progress."
      },
      {
        "word": "old",
        "trans": "старый",
        "example": "Practice makes progress."
      },
      {
        "word": "young",
        "trans": "молодой",
        "example": "Practice makes progress."
      },
      {
        "word": "fast",
        "trans": "быстрый",
        "example": "Practice makes progress."
      },
      {
        "word": "slow",
        "trans": "медленный",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 28,
    "theory": {
      "intro": "Степень и количество.",
      "reading": "**Too и Enough** — Степень и количество.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### слишком / достаточно\nСтепень и количество.\n\n*Пример:* This bag is too heavy.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* He isn't old enough to drive.\n\n### Формулы\n- `This bag is too heavy.`\n- `He isn't old enough to drive.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "слишком / достаточно: Степень и количество.",
        "Практика: Используй в речи.",
        "Запомни формулы: This bag is too heavy.; He isn't old enough to drive.",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «too»?",
        "options": [
          "слишком",
          "маленький",
          "большой",
          "старый"
        ],
        "answer": "слишком"
      },
      {
        "question": "What is «enough»?",
        "options": [
          "большой",
          "достаточно",
          "быстрый",
          "медленный"
        ],
        "answer": "достаточно"
      },
      {
        "question": "What is «very»?",
        "options": [
          "очень",
          "старый",
          "достаточно",
          "маленький"
        ],
        "answer": "очень"
      },
      {
        "question": "What is «quite»?",
        "options": [
          "большой",
          "быстрый",
          "довольно",
          "медленный"
        ],
        "answer": "довольно"
      },
      {
        "question": "What is «big»?",
        "options": [
          "молодой",
          "большой",
          "быстрый",
          "старый"
        ],
        "answer": "большой"
      },
      {
        "type": "gap",
        "sentence": "The word «маленький» in English is ___.",
        "answer": "small",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «старый» in English is ___.",
        "answer": "old",
        "hint": "o…"
      },
      {
        "type": "gap",
        "sentence": "The word «молодой» in English is ___.",
        "answer": "young",
        "hint": "y…"
      }
    ]
  },
  {
    "level": "A2",
    "title": "First Conditional",
    "titleRu": "Условные 1 типа",
    "topic": "If + present, will",
    "description": "Реальные условия.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about if + present, will?",
        "keywords": [
          "if",
          "unless",
          "when",
          "probably",
          "happen",
          "miss",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If you study, you will pass."
      },
      {
        "prompt": "Give an example with if.",
        "keywords": [
          "if",
          "unless",
          "when",
          "probably",
          "happen",
          "miss",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Unless you hurry, you will miss the bus."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "if",
          "unless",
          "when",
          "probably",
          "happen",
          "miss",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If you study, you will pass."
      }
    ],
    "vocab": [
      {
        "en": "if",
        "ru": "если"
      },
      {
        "en": "unless",
        "ru": "если не"
      },
      {
        "en": "when",
        "ru": "когда"
      },
      {
        "en": "probably",
        "ru": "вероятно"
      },
      {
        "en": "happen",
        "ru": "происходить"
      },
      {
        "en": "miss",
        "ru": "опоздать"
      },
      {
        "en": "arrive",
        "ru": "прибывать"
      },
      {
        "en": "pass",
        "ru": "сдать"
      },
      {
        "en": "fail",
        "ru": "провалить"
      },
      {
        "en": "prepare",
        "ru": "готовиться"
      }
    ],
    "grammar": {
      "title": "First Conditional",
      "blocks": [
        {
          "title": "If + present, will",
          "desc": "Реальные условия.",
          "example": "If you study, you will pass."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "Unless you hurry, you will miss the bus."
        }
      ],
      "formulas": [
        "If you study, you will pass.",
        "Unless you hurry, you will miss the bus."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "If you study, you will pass.",
            "Unless you hurry, you will miss the bus."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "If you study, you will pass.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "If you study, you will pass."
      },
      {
        "phrase": "Unless you hurry, you will miss the bus.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Unless you hurry, you will miss the bus."
      },
      {
        "phrase": "What do you know about if + present, will?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about if + present, will?"
      },
      {
        "phrase": "if is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "if is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "A2 First Conditional"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "A2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about if?",
        "keywords": [
          "if",
          "unless",
          "when",
          "probably",
          "happen",
          "miss",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If you study, you will pass."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "if",
          "unless",
          "when",
          "probably",
          "happen",
          "miss",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Unless you hurry, you will miss the bus."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "if",
          "unless",
          "when",
          "probably",
          "happen",
          "miss",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If you study, you will pass."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "if",
          "unless",
          "when",
          "probably",
          "happen",
          "miss",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Unless you hurry, you will miss the bus."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "if",
          "unless",
          "when",
          "probably",
          "happen",
          "miss",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If you study, you will pass."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about if + present, will.",
        "keywords": [
          "if",
          "unless",
          "when",
          "probably",
          "happen",
          "miss",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If you study, you will pass.",
        "useSpeech": true
      },
      {
        "task": "Use unless and when.",
        "keywords": [
          "if",
          "unless",
          "when",
          "probably",
          "happen",
          "miss",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Unless you hurry, you will miss the bus.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "if",
          "unless",
          "when",
          "probably",
          "happen",
          "miss",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If you study, you will pass.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "if",
        "trans": "если",
        "example": "I use 'if' every day."
      },
      {
        "word": "unless",
        "trans": "если не",
        "example": "I use 'unless' every day."
      },
      {
        "word": "when",
        "trans": "когда",
        "example": "I use 'when' every day."
      },
      {
        "word": "probably",
        "trans": "вероятно",
        "example": "I use 'probably' every day."
      },
      {
        "word": "happen",
        "trans": "происходить",
        "example": "I use 'happen' every day."
      },
      {
        "word": "miss",
        "trans": "опоздать",
        "example": "I use 'miss' every day."
      },
      {
        "word": "arrive",
        "trans": "прибывать",
        "example": "I use 'arrive' every day."
      },
      {
        "word": "pass",
        "trans": "сдать",
        "example": "I use 'pass' every day."
      },
      {
        "word": "fail",
        "trans": "провалить",
        "example": "I use 'fail' every day."
      },
      {
        "word": "prepare",
        "trans": "готовиться",
        "example": "I use 'prepare' every day."
      },
      {
        "word": "if",
        "trans": "если",
        "example": "Practice makes progress."
      },
      {
        "word": "unless",
        "trans": "если не",
        "example": "Practice makes progress."
      },
      {
        "word": "when",
        "trans": "когда",
        "example": "Practice makes progress."
      },
      {
        "word": "probably",
        "trans": "вероятно",
        "example": "Practice makes progress."
      },
      {
        "word": "happen",
        "trans": "происходить",
        "example": "Practice makes progress."
      },
      {
        "word": "miss",
        "trans": "опоздать",
        "example": "Practice makes progress."
      },
      {
        "word": "arrive",
        "trans": "прибывать",
        "example": "Practice makes progress."
      },
      {
        "word": "pass",
        "trans": "сдать",
        "example": "Practice makes progress."
      },
      {
        "word": "fail",
        "trans": "провалить",
        "example": "Practice makes progress."
      },
      {
        "word": "prepare",
        "trans": "готовиться",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 29,
    "theory": {
      "intro": "Реальные условия.",
      "reading": "**Условные 1 типа** — Реальные условия.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### If + present, will\nРеальные условия.\n\n*Пример:* If you study, you will pass.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* Unless you hurry, you will miss the bus.\n\n### Формулы\n- `If you study, you will pass.`\n- `Unless you hurry, you will miss the bus.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "If + present, will: Реальные условия.",
        "Практика: Используй в речи.",
        "Запомни формулы: If you study, you will pass.; Unless you hurry, you will miss the bus.",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «if»?",
        "options": [
          "готовиться",
          "провалить",
          "прибывать",
          "если"
        ],
        "answer": "если"
      },
      {
        "question": "What is «unless»?",
        "options": [
          "если не",
          "вероятно",
          "прибывать",
          "если"
        ],
        "answer": "если не"
      },
      {
        "question": "What is «when»?",
        "options": [
          "когда",
          "готовиться",
          "прибывать",
          "опоздать"
        ],
        "answer": "когда"
      },
      {
        "question": "What is «probably»?",
        "options": [
          "вероятно",
          "прибывать",
          "сдать",
          "готовиться"
        ],
        "answer": "вероятно"
      },
      {
        "question": "What is «happen»?",
        "options": [
          "если не",
          "опоздать",
          "происходить",
          "прибывать"
        ],
        "answer": "происходить"
      },
      {
        "type": "gap",
        "sentence": "The word «опоздать» in English is ___.",
        "answer": "miss",
        "hint": "m…"
      },
      {
        "type": "gap",
        "sentence": "The word «прибывать» in English is ___.",
        "answer": "arrive",
        "hint": "a…"
      },
      {
        "type": "gap",
        "sentence": "The word «сдать» in English is ___.",
        "answer": "pass",
        "hint": "p…"
      }
    ]
  },
  {
    "level": "A2",
    "title": "Used to",
    "titleRu": "Used to",
    "topic": "раньше",
    "description": "Привычки в прошлом.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about раньше?",
        "keywords": [
          "used to",
          "childhood",
          "remember",
          "change",
          "now",
          "before",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I used to live in Paris."
      },
      {
        "prompt": "Give an example with used to.",
        "keywords": [
          "used to",
          "childhood",
          "remember",
          "change",
          "now",
          "before",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I didn't use to like coffee."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "used to",
          "childhood",
          "remember",
          "change",
          "now",
          "before",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I used to live in Paris."
      }
    ],
    "vocab": [
      {
        "en": "used to",
        "ru": "раньше"
      },
      {
        "en": "childhood",
        "ru": "детство"
      },
      {
        "en": "remember",
        "ru": "помнить"
      },
      {
        "en": "change",
        "ru": "меняться"
      },
      {
        "en": "now",
        "ru": "сейчас"
      },
      {
        "en": "before",
        "ru": "раньше"
      },
      {
        "en": "anymore",
        "ru": "больше не"
      },
      {
        "en": "still",
        "ru": "всё ещё"
      },
      {
        "en": "different",
        "ru": "другой"
      },
      {
        "en": "habit",
        "ru": "привычка"
      }
    ],
    "grammar": {
      "title": "Used to",
      "blocks": [
        {
          "title": "раньше",
          "desc": "Привычки в прошлом.",
          "example": "I used to live in Paris."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "I didn't use to like coffee."
        }
      ],
      "formulas": [
        "I used to live in Paris.",
        "I didn't use to like coffee."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "I used to live in Paris.",
            "I didn't use to like coffee."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I used to live in Paris.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I used to live in Paris."
      },
      {
        "phrase": "I didn't use to like coffee.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I didn't use to like coffee."
      },
      {
        "phrase": "What do you know about раньше?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about раньше?"
      },
      {
        "phrase": "used to is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "used to is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "A2 Used to"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "A2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about used to?",
        "keywords": [
          "used to",
          "childhood",
          "remember",
          "change",
          "now",
          "before",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I used to live in Paris."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "used to",
          "childhood",
          "remember",
          "change",
          "now",
          "before",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I didn't use to like coffee."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "used to",
          "childhood",
          "remember",
          "change",
          "now",
          "before",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I used to live in Paris."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "used to",
          "childhood",
          "remember",
          "change",
          "now",
          "before",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I didn't use to like coffee."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "used to",
          "childhood",
          "remember",
          "change",
          "now",
          "before",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I used to live in Paris."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about раньше.",
        "keywords": [
          "used to",
          "childhood",
          "remember",
          "change",
          "now",
          "before",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I used to live in Paris.",
        "useSpeech": true
      },
      {
        "task": "Use childhood and remember.",
        "keywords": [
          "used to",
          "childhood",
          "remember",
          "change",
          "now",
          "before",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I didn't use to like coffee.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "used to",
          "childhood",
          "remember",
          "change",
          "now",
          "before",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I used to live in Paris.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "used to",
        "trans": "раньше",
        "example": "I use 'used to' every day."
      },
      {
        "word": "childhood",
        "trans": "детство",
        "example": "I use 'childhood' every day."
      },
      {
        "word": "remember",
        "trans": "помнить",
        "example": "I use 'remember' every day."
      },
      {
        "word": "change",
        "trans": "меняться",
        "example": "I use 'change' every day."
      },
      {
        "word": "now",
        "trans": "сейчас",
        "example": "I use 'now' every day."
      },
      {
        "word": "before",
        "trans": "раньше",
        "example": "I use 'before' every day."
      },
      {
        "word": "anymore",
        "trans": "больше не",
        "example": "I use 'anymore' every day."
      },
      {
        "word": "still",
        "trans": "всё ещё",
        "example": "I use 'still' every day."
      },
      {
        "word": "different",
        "trans": "другой",
        "example": "I use 'different' every day."
      },
      {
        "word": "habit",
        "trans": "привычка",
        "example": "I use 'habit' every day."
      },
      {
        "word": "used to",
        "trans": "раньше",
        "example": "Practice makes progress."
      },
      {
        "word": "childhood",
        "trans": "детство",
        "example": "Practice makes progress."
      },
      {
        "word": "remember",
        "trans": "помнить",
        "example": "Practice makes progress."
      },
      {
        "word": "change",
        "trans": "меняться",
        "example": "Practice makes progress."
      },
      {
        "word": "now",
        "trans": "сейчас",
        "example": "Practice makes progress."
      },
      {
        "word": "before",
        "trans": "раньше",
        "example": "Practice makes progress."
      },
      {
        "word": "anymore",
        "trans": "больше не",
        "example": "Practice makes progress."
      },
      {
        "word": "still",
        "trans": "всё ещё",
        "example": "Practice makes progress."
      },
      {
        "word": "different",
        "trans": "другой",
        "example": "Practice makes progress."
      },
      {
        "word": "habit",
        "trans": "привычка",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 30,
    "theory": {
      "intro": "Привычки в прошлом.",
      "reading": "**Used to** — Привычки в прошлом.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### раньше\nПривычки в прошлом.\n\n*Пример:* I used to live in Paris.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* I didn't use to like coffee.\n\n### Формулы\n- `I used to live in Paris.`\n- `I didn't use to like coffee.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "раньше: Привычки в прошлом.",
        "Практика: Используй в речи.",
        "Запомни формулы: I used to live in Paris.; I didn't use to like coffee.",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «used to»?",
        "options": [
          "детство",
          "раньше",
          "всё ещё",
          "сейчас"
        ],
        "answer": "раньше"
      },
      {
        "question": "What is «childhood»?",
        "options": [
          "раньше",
          "помнить",
          "детство",
          "меняться"
        ],
        "answer": "детство"
      },
      {
        "question": "What is «remember»?",
        "options": [
          "помнить",
          "раньше",
          "больше не",
          "детство"
        ],
        "answer": "помнить"
      },
      {
        "question": "What is «change»?",
        "options": [
          "привычка",
          "другой",
          "раньше",
          "меняться"
        ],
        "answer": "меняться"
      },
      {
        "question": "What is «now»?",
        "options": [
          "больше не",
          "помнить",
          "раньше",
          "сейчас"
        ],
        "answer": "сейчас"
      },
      {
        "type": "gap",
        "sentence": "The word «раньше» in English is ___.",
        "answer": "before",
        "hint": "b…"
      },
      {
        "type": "gap",
        "sentence": "The word «больше не» in English is ___.",
        "answer": "anymore",
        "hint": "a…"
      },
      {
        "type": "gap",
        "sentence": "The word «всё ещё» in English is ___.",
        "answer": "still",
        "hint": "s…"
      }
    ]
  },
  {
    "level": "A2",
    "title": "Reflexive Pronouns",
    "titleRu": "Возвратные местоимения",
    "topic": "myself",
    "description": "Действие на себя.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about myself?",
        "keywords": [
          "myself",
          "yourself",
          "himself",
          "herself",
          "ourselves",
          "themselves",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I hurt myself."
      },
      {
        "prompt": "Give an example with myself.",
        "keywords": [
          "myself",
          "yourself",
          "himself",
          "herself",
          "ourselves",
          "themselves",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "We help each other."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "myself",
          "yourself",
          "himself",
          "herself",
          "ourselves",
          "themselves",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I hurt myself."
      }
    ],
    "vocab": [
      {
        "en": "myself",
        "ru": "себя"
      },
      {
        "en": "yourself",
        "ru": "себя"
      },
      {
        "en": "himself",
        "ru": "себя"
      },
      {
        "en": "herself",
        "ru": "себя"
      },
      {
        "en": "ourselves",
        "ru": "себя"
      },
      {
        "en": "themselves",
        "ru": "себя"
      },
      {
        "en": "each other",
        "ru": "друг друга"
      },
      {
        "en": "alone",
        "ru": "один"
      },
      {
        "en": "by",
        "ru": "самостоятельно"
      },
      {
        "en": "help",
        "ru": "помогать"
      }
    ],
    "grammar": {
      "title": "Reflexive Pronouns",
      "blocks": [
        {
          "title": "myself",
          "desc": "Действие на себя.",
          "example": "I hurt myself."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "We help each other."
        }
      ],
      "formulas": [
        "I hurt myself.",
        "We help each other."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "I hurt myself.",
            "We help each other."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I hurt myself.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I hurt myself."
      },
      {
        "phrase": "We help each other.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "We help each other."
      },
      {
        "phrase": "What do you know about myself?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about myself?"
      },
      {
        "phrase": "myself is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "myself is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "A2 Reflexive Pronouns"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "A2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about myself?",
        "keywords": [
          "myself",
          "yourself",
          "himself",
          "herself",
          "ourselves",
          "themselves",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I hurt myself."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "myself",
          "yourself",
          "himself",
          "herself",
          "ourselves",
          "themselves",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "We help each other."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "myself",
          "yourself",
          "himself",
          "herself",
          "ourselves",
          "themselves",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I hurt myself."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "myself",
          "yourself",
          "himself",
          "herself",
          "ourselves",
          "themselves",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "We help each other."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "myself",
          "yourself",
          "himself",
          "herself",
          "ourselves",
          "themselves",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I hurt myself."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about myself.",
        "keywords": [
          "myself",
          "yourself",
          "himself",
          "herself",
          "ourselves",
          "themselves",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I hurt myself.",
        "useSpeech": true
      },
      {
        "task": "Use yourself and himself.",
        "keywords": [
          "myself",
          "yourself",
          "himself",
          "herself",
          "ourselves",
          "themselves",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "We help each other.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "myself",
          "yourself",
          "himself",
          "herself",
          "ourselves",
          "themselves",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I hurt myself.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "myself",
        "trans": "себя",
        "example": "I use 'myself' every day."
      },
      {
        "word": "yourself",
        "trans": "себя",
        "example": "I use 'yourself' every day."
      },
      {
        "word": "himself",
        "trans": "себя",
        "example": "I use 'himself' every day."
      },
      {
        "word": "herself",
        "trans": "себя",
        "example": "I use 'herself' every day."
      },
      {
        "word": "ourselves",
        "trans": "себя",
        "example": "I use 'ourselves' every day."
      },
      {
        "word": "themselves",
        "trans": "себя",
        "example": "I use 'themselves' every day."
      },
      {
        "word": "each other",
        "trans": "друг друга",
        "example": "I use 'each other' every day."
      },
      {
        "word": "alone",
        "trans": "один",
        "example": "I use 'alone' every day."
      },
      {
        "word": "by",
        "trans": "самостоятельно",
        "example": "I use 'by' every day."
      },
      {
        "word": "help",
        "trans": "помогать",
        "example": "I use 'help' every day."
      },
      {
        "word": "myself",
        "trans": "себя",
        "example": "Practice makes progress."
      },
      {
        "word": "yourself",
        "trans": "себя",
        "example": "Practice makes progress."
      },
      {
        "word": "himself",
        "trans": "себя",
        "example": "Practice makes progress."
      },
      {
        "word": "herself",
        "trans": "себя",
        "example": "Practice makes progress."
      },
      {
        "word": "ourselves",
        "trans": "себя",
        "example": "Practice makes progress."
      },
      {
        "word": "themselves",
        "trans": "себя",
        "example": "Practice makes progress."
      },
      {
        "word": "each other",
        "trans": "друг друга",
        "example": "Practice makes progress."
      },
      {
        "word": "alone",
        "trans": "один",
        "example": "Practice makes progress."
      },
      {
        "word": "by",
        "trans": "самостоятельно",
        "example": "Practice makes progress."
      },
      {
        "word": "help",
        "trans": "помогать",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 31,
    "theory": {
      "intro": "Действие на себя.",
      "reading": "**Возвратные местоимения** — Действие на себя.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### myself\nДействие на себя.\n\n*Пример:* I hurt myself.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* We help each other.\n\n### Формулы\n- `I hurt myself.`\n- `We help each other.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "myself: Действие на себя.",
        "Практика: Используй в речи.",
        "Запомни формулы: I hurt myself.; We help each other.",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «myself»?",
        "options": [
          "помогать",
          "себя",
          "один",
          "самостоятельно"
        ],
        "answer": "себя"
      },
      {
        "question": "What is «yourself»?",
        "options": [
          "себя",
          "самостоятельно",
          "друг друга",
          "один"
        ],
        "answer": "себя"
      },
      {
        "question": "What is «himself»?",
        "options": [
          "самостоятельно",
          "себя",
          "один",
          "помогать"
        ],
        "answer": "себя"
      },
      {
        "question": "What is «herself»?",
        "options": [
          "себя",
          "помогать",
          "один",
          "самостоятельно"
        ],
        "answer": "себя"
      },
      {
        "question": "What is «ourselves»?",
        "options": [
          "один",
          "себя",
          "друг друга",
          "самостоятельно"
        ],
        "answer": "себя"
      },
      {
        "type": "gap",
        "sentence": "The word «себя» in English is ___.",
        "answer": "themselves",
        "hint": "t…"
      },
      {
        "type": "gap",
        "sentence": "The word «друг друга» in English is ___.",
        "answer": "each other",
        "hint": "e…"
      },
      {
        "type": "gap",
        "sentence": "The word «один» in English is ___.",
        "answer": "alone",
        "hint": "a…"
      }
    ]
  },
  {
    "level": "A2",
    "title": "Travel & Hotels",
    "titleRu": "Путешествия",
    "topic": "бронирование",
    "description": "Поездки и отели.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about бронирование?",
        "keywords": [
          "ticket",
          "flight",
          "hotel",
          "booking",
          "passport",
          "luggage",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I have a reservation for two nights."
      },
      {
        "prompt": "Give an example with ticket.",
        "keywords": [
          "ticket",
          "flight",
          "hotel",
          "booking",
          "passport",
          "luggage",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Could I have a wake-up call?"
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "ticket",
          "flight",
          "hotel",
          "booking",
          "passport",
          "luggage",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I have a reservation for two nights."
      }
    ],
    "vocab": [
      {
        "en": "ticket",
        "ru": "билет"
      },
      {
        "en": "flight",
        "ru": "рейс"
      },
      {
        "en": "hotel",
        "ru": "отель"
      },
      {
        "en": "booking",
        "ru": "бронь"
      },
      {
        "en": "passport",
        "ru": "паспорт"
      },
      {
        "en": "luggage",
        "ru": "багаж"
      },
      {
        "en": "reservation",
        "ru": "резервация"
      },
      {
        "en": "check in",
        "ru": "регистрироваться"
      },
      {
        "en": "single",
        "ru": "одноместный"
      },
      {
        "en": "double",
        "ru": "двухместный"
      }
    ],
    "grammar": {
      "title": "Travel & Hotels",
      "blocks": [
        {
          "title": "бронирование",
          "desc": "Поездки и отели.",
          "example": "I have a reservation for two nights."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "Could I have a wake-up call?"
        }
      ],
      "formulas": [
        "I have a reservation for two nights.",
        "Could I have a wake-up call?"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "I have a reservation for two nights.",
            "Could I have a wake-up call?"
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I have a reservation for two nights.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I have a reservation for two nights."
      },
      {
        "phrase": "Could I have a wake-up call?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Could I have a wake-up call?"
      },
      {
        "phrase": "What do you know about бронирование?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about бронирование?"
      },
      {
        "phrase": "ticket is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "ticket is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "A2 Travel & Hotels"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "A2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about ticket?",
        "keywords": [
          "ticket",
          "flight",
          "hotel",
          "booking",
          "passport",
          "luggage",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I have a reservation for two nights."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "ticket",
          "flight",
          "hotel",
          "booking",
          "passport",
          "luggage",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Could I have a wake-up call?"
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "ticket",
          "flight",
          "hotel",
          "booking",
          "passport",
          "luggage",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I have a reservation for two nights."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "ticket",
          "flight",
          "hotel",
          "booking",
          "passport",
          "luggage",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Could I have a wake-up call?"
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "ticket",
          "flight",
          "hotel",
          "booking",
          "passport",
          "luggage",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I have a reservation for two nights."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about бронирование.",
        "keywords": [
          "ticket",
          "flight",
          "hotel",
          "booking",
          "passport",
          "luggage",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I have a reservation for two nights.",
        "useSpeech": true
      },
      {
        "task": "Use flight and hotel.",
        "keywords": [
          "ticket",
          "flight",
          "hotel",
          "booking",
          "passport",
          "luggage",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Could I have a wake-up call?",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "ticket",
          "flight",
          "hotel",
          "booking",
          "passport",
          "luggage",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I have a reservation for two nights.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "ticket",
        "trans": "билет",
        "example": "I use 'ticket' every day."
      },
      {
        "word": "flight",
        "trans": "рейс",
        "example": "I use 'flight' every day."
      },
      {
        "word": "hotel",
        "trans": "отель",
        "example": "I use 'hotel' every day."
      },
      {
        "word": "booking",
        "trans": "бронь",
        "example": "I use 'booking' every day."
      },
      {
        "word": "passport",
        "trans": "паспорт",
        "example": "I use 'passport' every day."
      },
      {
        "word": "luggage",
        "trans": "багаж",
        "example": "I use 'luggage' every day."
      },
      {
        "word": "reservation",
        "trans": "резервация",
        "example": "I use 'reservation' every day."
      },
      {
        "word": "check in",
        "trans": "регистрироваться",
        "example": "I use 'check in' every day."
      },
      {
        "word": "single",
        "trans": "одноместный",
        "example": "I use 'single' every day."
      },
      {
        "word": "double",
        "trans": "двухместный",
        "example": "I use 'double' every day."
      },
      {
        "word": "ticket",
        "trans": "билет",
        "example": "Practice makes progress."
      },
      {
        "word": "flight",
        "trans": "рейс",
        "example": "Practice makes progress."
      },
      {
        "word": "hotel",
        "trans": "отель",
        "example": "Practice makes progress."
      },
      {
        "word": "booking",
        "trans": "бронь",
        "example": "Practice makes progress."
      },
      {
        "word": "passport",
        "trans": "паспорт",
        "example": "Practice makes progress."
      },
      {
        "word": "luggage",
        "trans": "багаж",
        "example": "Practice makes progress."
      },
      {
        "word": "reservation",
        "trans": "резервация",
        "example": "Practice makes progress."
      },
      {
        "word": "check in",
        "trans": "регистрироваться",
        "example": "Practice makes progress."
      },
      {
        "word": "single",
        "trans": "одноместный",
        "example": "Practice makes progress."
      },
      {
        "word": "double",
        "trans": "двухместный",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 32,
    "theory": {
      "intro": "Поездки и отели.",
      "reading": "**Путешествия** — Поездки и отели.\n\nПодход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зубрите правила отдельно.\n\nCEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.\n\n### бронирование\nПоездки и отели.\n\n*Пример:* I have a reservation for two nights.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* Could I have a wake-up call?\n\n### Формулы\n- `I have a reservation for two nights.`\n- `Could I have a wake-up call?`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "бронирование: Поездки и отели.",
        "Практика: Используй в речи.",
        "Запомни формулы: I have a reservation for two nights.; Could I have a wake-up call?",
        "Подход communicative approach (Harmer): связывайте грамматику с реальной ситуацией, не зуб…"
      ],
      "cefr": "CEFR A2 — уверенное общение в быту: прошлое и будущее, сравнения, путешествия.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «ticket»?",
        "options": [
          "билет",
          "бронь",
          "отель",
          "двухместный"
        ],
        "answer": "билет"
      },
      {
        "question": "What is «flight»?",
        "options": [
          "отель",
          "одноместный",
          "рейс",
          "регистрироваться"
        ],
        "answer": "рейс"
      },
      {
        "question": "What is «hotel»?",
        "options": [
          "билет",
          "регистрироваться",
          "одноместный",
          "отель"
        ],
        "answer": "отель"
      },
      {
        "question": "What is «booking»?",
        "options": [
          "паспорт",
          "рейс",
          "бронь",
          "одноместный"
        ],
        "answer": "бронь"
      },
      {
        "question": "What is «passport»?",
        "options": [
          "регистрироваться",
          "бронь",
          "паспорт",
          "двухместный"
        ],
        "answer": "паспорт"
      },
      {
        "type": "gap",
        "sentence": "The word «багаж» in English is ___.",
        "answer": "luggage",
        "hint": "l…"
      },
      {
        "type": "gap",
        "sentence": "The word «резервация» in English is ___.",
        "answer": "reservation",
        "hint": "r…"
      },
      {
        "type": "gap",
        "sentence": "The word «регистрироваться» in English is ___.",
        "answer": "check in",
        "hint": "c…"
      }
    ]
  },
  {
    "id": 33,
    "level": "B1",
    "title": "Modal Verbs: ability, permission, obligation",
    "titleRu": "Модальные глаголы: способность, разрешение, обязанность",
    "topic": "Can, could, may, must, have to",
    "description": "Модальные глаголы выражают способность, разрешение и обязанность без изменения формы по лицам.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What can you do well?",
        "keywords": [
          "ability",
          "permission",
          "obligation",
          "allowed",
          "required",
          "forbidden",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She can speak three languages. / May I open the window?"
      },
      {
        "prompt": "What do you have to do every day?",
        "keywords": [
          "ability",
          "permission",
          "obligation",
          "allowed",
          "required",
          "forbidden",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "You must wear a seatbelt. / Students have to submit essays."
      },
      {
        "prompt": "May I ask you a question?",
        "keywords": [
          "ability",
          "permission",
          "obligation",
          "allowed",
          "required",
          "forbidden",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She can speak three languages. / May I open the window?"
      }
    ],
    "vocab": [
      {
        "en": "ability",
        "ru": "способность"
      },
      {
        "en": "permission",
        "ru": "разрешение"
      },
      {
        "en": "obligation",
        "ru": "обязанность"
      },
      {
        "en": "allowed",
        "ru": "разрешено"
      },
      {
        "en": "required",
        "ru": "требуется"
      },
      {
        "en": "forbidden",
        "ru": "запрещено"
      },
      {
        "en": "necessary",
        "ru": "необходимо"
      },
      {
        "en": "rule",
        "ru": "правило"
      },
      {
        "en": "duty",
        "ru": "долг"
      },
      {
        "en": "capable",
        "ru": "способный"
      }
    ],
    "grammar": {
      "title": "Modals: can, could, may, must, have to",
      "blocks": [
        {
          "title": "Ability & Permission",
          "desc": "Can/could — способность (could — прошлое). May/can — разрешение (may — формальнее).",
          "example": "She can speak three languages. / May I open the window?"
        },
        {
          "title": "Obligation",
          "desc": "Must — сильная обязанность или личное мнение. Have to — внешнее правило. Mustn't — запрет.",
          "example": "You must wear a seatbelt. / Students have to submit essays."
        }
      ],
      "formulas": [
        "Ability: can/could + V1",
        "Permission: Can/May I + V1?",
        "Obligation: must/have to + V1; Prohibition: mustn't + V1"
      ],
      "extraExamples": [
        {
          "label": "Ability",
          "items": [
            "I can swim but I can't dive.",
            "He could read when he was four."
          ]
        },
        {
          "label": "Obligation",
          "items": [
            "You don't have to come if you're busy.",
            "You mustn't smoke here."
          ]
        }
      ],
      "mistake": {
        "wrong": "She musts study harder.",
        "right": "She must study harder."
      }
    },
    "quiz": [
      {
        "sentence": "You ___ park here. It's forbidden.",
        "options": [
          "mustn't",
          "don't have to"
        ],
        "answer": "mustn't"
      },
      {
        "sentence": "___ you help me with this box?",
        "options": [
          "Can",
          "Must"
        ],
        "answer": "Can"
      },
      {
        "sentence": "When I was young, I ___ climb trees easily.",
        "options": [
          "could",
          "can"
        ],
        "answer": "could"
      },
      {
        "sentence": "Employees ___ wear ID badges at all times.",
        "options": [
          "have to",
          "may"
        ],
        "answer": "have to"
      },
      {
        "sentence": "___ I borrow your pen, please?",
        "options": [
          "May",
          "Must"
        ],
        "answer": "May"
      }
    ],
    "pronunciation": [
      {
        "phrase": "Can you help me?",
        "ipa": "/kən juː help miː/",
        "tip": "Can в вопросе часто слабый /kən/, не /kæn/",
        "expected": "Can you help me?"
      },
      {
        "phrase": "You must be tired.",
        "ipa": "/juː mʌst biː ˈtaɪəd/",
        "tip": "Must — короткий /ʌ/, не растягивай",
        "expected": "You must be tired."
      },
      {
        "phrase": "I have to leave now.",
        "ipa": "/aɪ hæf tə liːv/",
        "tip": "Have to → /hæftə/ в быстрой речи",
        "expected": "I have to leave now."
      },
      {
        "phrase": "May I sit here?",
        "ipa": "/meɪ aɪ sɪt/",
        "tip": "May — длинный /eɪ/, формальное произношение",
        "expected": "May I sit here?"
      },
      {
        "phrase": "She could speak French.",
        "ipa": "/ʃiː kʊd spiːk/",
        "tip": "Could — /kʊd/, не путай с can /kæn/",
        "expected": "She could speak French."
      }
    ],
    "flashcards": [
      {
        "word": "ability",
        "trans": "способность",
        "example": "She has the ability to lead."
      },
      {
        "word": "permission",
        "trans": "разрешение",
        "example": "You need permission to enter."
      },
      {
        "word": "obligation",
        "trans": "обязанность",
        "example": "It's an obligation, not a choice."
      },
      {
        "word": "allowed",
        "trans": "разрешено",
        "example": "Smoking is not allowed."
      },
      {
        "word": "required",
        "trans": "требуется",
        "example": "A passport is required."
      },
      {
        "word": "forbidden",
        "trans": "запрещено",
        "example": "Entry is forbidden."
      },
      {
        "word": "necessary",
        "trans": "необходимо",
        "example": "Sleep is necessary for health."
      },
      {
        "word": "rule",
        "trans": "правило",
        "example": "Follow the school rules."
      },
      {
        "word": "duty",
        "trans": "долг",
        "example": "It's my duty to help."
      },
      {
        "word": "capable",
        "trans": "способный",
        "example": "He is capable of great things."
      },
      {
        "word": "can",
        "trans": "мочь, уметь",
        "example": "I can drive a car."
      },
      {
        "word": "could",
        "trans": "мог(ла) (прошлое)",
        "example": "I could run faster when I was young."
      },
      {
        "word": "may",
        "trans": "мочь (разрешение)",
        "example": "May I use your phone?"
      },
      {
        "word": "must",
        "trans": "должен (обязан)",
        "example": "You must finish this today."
      },
      {
        "word": "have to",
        "trans": "приходится, нужно",
        "example": "I have to work on Saturdays."
      },
      {
        "word": "mustn't",
        "trans": "нельзя (запрет)",
        "example": "You mustn't tell anyone."
      },
      {
        "word": "don't have to",
        "trans": "не обязан",
        "example": "You don't have to pay."
      },
      {
        "word": "be able to",
        "trans": "быть в состоянии",
        "example": "Will you be able to come?"
      },
      {
        "word": "allow",
        "trans": "разрешать",
        "example": "They allow pets in the hotel."
      },
      {
        "word": "require",
        "trans": "требовать",
        "example": "The job requires experience."
      }
    ],
    "culture": {
      "watch": [
        "The Devil Wears Prada — правила на работе"
      ],
      "listen": [
        "Survivor — Eye of the Tiger"
      ],
      "read": [
        "George Orwell — Animal Farm"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What must employees do in this company?",
        "keywords": [
          "ability",
          "permission",
          "obligation",
          "allowed",
          "required",
          "forbidden",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She can speak three languages. / May I open the window?"
      },
      {
        "prompt": "What can the main character do that others can't?",
        "keywords": [
          "ability",
          "permission",
          "obligation",
          "allowed",
          "required",
          "forbidden",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You must wear a seatbelt. / Students have to submit essays."
      },
      {
        "prompt": "May visitors take photos?",
        "keywords": [
          "ability",
          "permission",
          "obligation",
          "allowed",
          "required",
          "forbidden",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She can speak three languages. / May I open the window?"
      },
      {
        "prompt": "What did he have to do as a child?",
        "keywords": [
          "ability",
          "permission",
          "obligation",
          "allowed",
          "required",
          "forbidden",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You must wear a seatbelt. / Students have to submit essays."
      },
      {
        "prompt": "What are you not allowed to do there?",
        "keywords": [
          "ability",
          "permission",
          "obligation",
          "allowed",
          "required",
          "forbidden",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She can speak three languages. / May I open the window?"
      }
    ],
    "speaking": [
      {
        "task": "Расскажи, что ты умеешь делать и что не умеешь — 4 предложения с can/can't.",
        "keywords": [
          "ability",
          "permission",
          "obligation",
          "allowed",
          "required",
          "forbidden",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She can speak three languages. / May I open the window?",
        "useSpeech": true
      },
      {
        "task": "Опиши правила в школе или на работе, используя must, have to, mustn't.",
        "keywords": [
          "ability",
          "permission",
          "obligation",
          "allowed",
          "required",
          "forbidden",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "You must wear a seatbelt. / Students have to submit essays.",
        "useSpeech": true
      },
      {
        "task": "Попроси разрешения 3 разными способами (Can/May/Could I...?).",
        "keywords": [
          "ability",
          "permission",
          "obligation",
          "allowed",
          "required",
          "forbidden",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She can speak three languages. / May I open the window?",
        "useSpeech": true
      }
    ],
    "grammarCheck": [
      {
        "sentence": "You ___ park here. It's forbidden.",
        "options": [
          "mustn't",
          "don't have to"
        ],
        "answer": "mustn't"
      },
      {
        "sentence": "___ you help me with this box?",
        "options": [
          "Can",
          "Must"
        ],
        "answer": "Can"
      }
    ],
    "theory": {
      "intro": "Модальные глаголы выражают способность, разрешение и обязанность без изменения формы по лицам.",
      "reading": "**Модальные глаголы: способность, разрешение, обязанность** — Модальные глаголы выражают способность, разрешение и обязанность без изменения формы по лицам.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### Ability & Permission\nCan/could — способность (could — прошлое). May/can — разрешение (may — формальнее).\n\n*Пример:* She can speak three languages. / May I open the window?\n\n### Obligation\nMust — сильная обязанность или личное мнение. Have to — внешнее правило. Mustn't — запрет.\n\n*Пример:* You must wear a seatbelt. / Students have to submit essays.\n\n### Формулы\n- `Ability: can/could + V1`\n- `Permission: Can/May I + V1?`\n- `Obligation: must/have to + V1; Prohibition: mustn't + V1`\n\n### Типичная ошибка\n❌ She musts study harder.\n✅ She must study harder.",
      "keyPoints": [
        "Ability & Permission: Can/could — способность (could — прошлое). May/can — разрешение (may — формальне",
        "Obligation: Must — сильная обязанность или личное мнение. Have to — внешнее правило. Mustn't",
        "Запомни формулы: Ability: can/could + V1; Permission: Can/May I + V1?; Obligation: must/have to + V1; Prohibition: mustn't + V1",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «ability»?",
        "options": [
          "необходимо",
          "способность",
          "обязанность",
          "способный"
        ],
        "answer": "способность"
      },
      {
        "question": "What is «permission»?",
        "options": [
          "способность",
          "разрешено",
          "разрешение",
          "запрещено"
        ],
        "answer": "разрешение"
      },
      {
        "question": "What is «obligation»?",
        "options": [
          "необходимо",
          "разрешено",
          "способный",
          "обязанность"
        ],
        "answer": "обязанность"
      },
      {
        "question": "What is «allowed»?",
        "options": [
          "долг",
          "правило",
          "способность",
          "разрешено"
        ],
        "answer": "разрешено"
      },
      {
        "question": "What is «required»?",
        "options": [
          "разрешено",
          "способный",
          "запрещено",
          "требуется"
        ],
        "answer": "требуется"
      },
      {
        "type": "gap",
        "sentence": "The word «запрещено» in English is ___.",
        "answer": "forbidden",
        "hint": "f…"
      },
      {
        "type": "gap",
        "sentence": "The word «необходимо» in English is ___.",
        "answer": "necessary",
        "hint": "n…"
      },
      {
        "type": "gap",
        "sentence": "The word «правило» in English is ___.",
        "answer": "rule",
        "hint": "r…"
      }
    ]
  },
  {
    "id": 34,
    "level": "B1",
    "title": "Modal Verbs: advice, deduction, criticism",
    "titleRu": "Модальные глаголы: совет, предположение, критика",
    "topic": "Should, ought to, must, might, could",
    "description": "Модальные глаголы для советов, логических предположений о настоящем и мягкой критики прошлых действий.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What should people do to stay healthy?",
        "keywords": [
          "advice",
          "deduction",
          "criticism",
          "probably",
          "perhaps",
          "regret",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "You should get more sleep. / You ought to see a doctor."
      },
      {
        "prompt": "Where might he be right now?",
        "keywords": [
          "advice",
          "deduction",
          "criticism",
          "probably",
          "perhaps",
          "regret",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "He must be at home. / You should have told me earlier."
      },
      {
        "prompt": "What should you have done differently last year?",
        "keywords": [
          "advice",
          "deduction",
          "criticism",
          "probably",
          "perhaps",
          "regret",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "You should get more sleep. / You ought to see a doctor."
      }
    ],
    "vocab": [
      {
        "en": "advice",
        "ru": "совет"
      },
      {
        "en": "deduction",
        "ru": "логический вывод"
      },
      {
        "en": "criticism",
        "ru": "критика"
      },
      {
        "en": "probably",
        "ru": "вероятно"
      },
      {
        "en": "perhaps",
        "ru": "возможно"
      },
      {
        "en": "regret",
        "ru": "сожаление"
      },
      {
        "en": "logical",
        "ru": "логичный"
      },
      {
        "en": "recommend",
        "ru": "рекомендовать"
      },
      {
        "en": "certain",
        "ru": "уверенный"
      },
      {
        "en": "possibility",
        "ru": "возможность"
      }
    ],
    "grammar": {
      "title": "Modals: should, ought to, must, might, could",
      "blocks": [
        {
          "title": "Advice",
          "desc": "Should/ought to — совет. Shouldn't — отрицательный совет. Ought to = should (чуть формальнее).",
          "example": "You should get more sleep. / You ought to see a doctor."
        },
        {
          "title": "Deduction & Past criticism",
          "desc": "Must — уверенный вывод (must be). Might/could — возможность. Should have + V3 — критика прошлого.",
          "example": "He must be at home. / You should have told me earlier."
        }
      ],
      "formulas": [
        "Advice: should/ought to + V1",
        "Deduction: must/might/could + V1",
        "Past criticism: should have + V3"
      ],
      "extraExamples": [
        {
          "label": "Deduction",
          "items": [
            "She might be stuck in traffic.",
            "They can't be serious!"
          ]
        },
        {
          "label": "Past criticism",
          "items": [
            "I shouldn't have eaten so much.",
            "He ought to have apologized."
          ]
        }
      ],
      "mistake": {
        "wrong": "He must to be tired.",
        "right": "He must be tired."
      }
    },
    "quiz": [
      {
        "sentence": "You look pale. You ___ go home.",
        "options": [
          "should",
          "must be"
        ],
        "answer": "should"
      },
      {
        "sentence": "The lights are on. She ___ be at home.",
        "options": [
          "must",
          "should"
        ],
        "answer": "must"
      },
      {
        "sentence": "It's late. He ___ still be at the office.",
        "options": [
          "might",
          "should have"
        ],
        "answer": "might"
      },
      {
        "sentence": "I ___ have studied harder for the exam.",
        "options": [
          "should",
          "must"
        ],
        "answer": "should"
      },
      {
        "sentence": "You ___ to respect your elders.",
        "options": [
          "ought",
          "must"
        ],
        "answer": "ought"
      }
    ],
    "pronunciation": [
      {
        "phrase": "You should rest more.",
        "ipa": "/juː ʃʊd rest/",
        "tip": "Should — /ʃʊd/, не /ʃud/ с долгим u",
        "expected": "You should rest more."
      },
      {
        "phrase": "He must be joking.",
        "ipa": "/hiː mʌst biː/",
        "tip": "Must be — связывай в одну фразу",
        "expected": "He must be joking."
      },
      {
        "phrase": "She might know the answer.",
        "ipa": "/ʃiː maɪt nəʊ/",
        "tip": "Might — /aɪ/ как в night",
        "expected": "She might know the answer."
      },
      {
        "phrase": "You should have called.",
        "ipa": "/juː ʃʊd hæv kɔːld/",
        "tip": "Should have → should've /ʃʊdəv/",
        "expected": "You should have called."
      },
      {
        "phrase": "They ought to help.",
        "ipa": "/ðeɪ ɔːt tə help/",
        "tip": "Ought — silent gh, звучит как /ɔːt/",
        "expected": "They ought to help."
      }
    ],
    "flashcards": [
      {
        "word": "advice",
        "trans": "совет",
        "example": "Let me give you some advice."
      },
      {
        "word": "deduction",
        "trans": "вывод",
        "example": "That's a logical deduction."
      },
      {
        "word": "criticism",
        "trans": "критика",
        "example": "He accepted the criticism."
      },
      {
        "word": "probably",
        "trans": "вероятно",
        "example": "She is probably at home."
      },
      {
        "word": "perhaps",
        "trans": "возможно",
        "example": "Perhaps we should wait."
      },
      {
        "word": "regret",
        "trans": "сожаление",
        "example": "I regret not studying more."
      },
      {
        "word": "logical",
        "trans": "логичный",
        "example": "It's a logical conclusion."
      },
      {
        "word": "recommend",
        "trans": "рекомендовать",
        "example": "I recommend this book."
      },
      {
        "word": "certain",
        "trans": "уверенный",
        "example": "I'm certain he will come."
      },
      {
        "word": "possibility",
        "trans": "возможность",
        "example": "There's a possibility of rain."
      },
      {
        "word": "should",
        "trans": "следует",
        "example": "You should drink more water."
      },
      {
        "word": "ought to",
        "trans": "следует (форм.)",
        "example": "You ought to be polite."
      },
      {
        "word": "must be",
        "trans": "должно быть",
        "example": "He must be tired."
      },
      {
        "word": "might",
        "trans": "может (возможно)",
        "example": "It might rain later."
      },
      {
        "word": "could",
        "trans": "может (возможно)",
        "example": "That could be true."
      },
      {
        "word": "should have",
        "trans": "следовало бы",
        "example": "I should have listened."
      },
      {
        "word": "shouldn't have",
        "trans": "не следовало",
        "example": "You shouldn't have said that."
      },
      {
        "word": "can't be",
        "trans": "не может быть",
        "example": "That can't be right."
      },
      {
        "word": "maybe",
        "trans": "может быть",
        "example": "Maybe she forgot."
      },
      {
        "word": "surely",
        "trans": "наверняка",
        "example": "Surely you remember?"
      }
    ],
    "culture": {
      "watch": [
        "The Social Network — советы и решения"
      ],
      "listen": [
        "Bob Dylan — Like a Rolling Stone"
      ],
      "read": [
        "Jane Austen — Pride and Prejudice"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What should the character have done differently?",
        "keywords": [
          "advice",
          "deduction",
          "criticism",
          "probably",
          "perhaps",
          "regret",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You should get more sleep. / You ought to see a doctor."
      },
      {
        "prompt": "Where might he be now?",
        "keywords": [
          "advice",
          "deduction",
          "criticism",
          "probably",
          "perhaps",
          "regret",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "He must be at home. / You should have told me earlier."
      },
      {
        "prompt": "What advice would you give the protagonist?",
        "keywords": [
          "advice",
          "deduction",
          "criticism",
          "probably",
          "perhaps",
          "regret",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You should get more sleep. / You ought to see a doctor."
      },
      {
        "prompt": "What must have happened before this scene?",
        "keywords": [
          "advice",
          "deduction",
          "criticism",
          "probably",
          "perhaps",
          "regret",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "He must be at home. / You should have told me earlier."
      },
      {
        "prompt": "What ought people to do in this situation?",
        "keywords": [
          "advice",
          "deduction",
          "criticism",
          "probably",
          "perhaps",
          "regret",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You should get more sleep. / You ought to see a doctor."
      }
    ],
    "speaking": [
      {
        "task": "Дай 3 совета другу, используя should/ought to.",
        "keywords": [
          "advice",
          "deduction",
          "criticism",
          "probably",
          "perhaps",
          "regret",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "You should get more sleep. / You ought to see a doctor.",
        "useSpeech": true
      },
      {
        "task": "Сделай 3 предположения о ситуации (must/might/could).",
        "keywords": [
          "advice",
          "deduction",
          "criticism",
          "probably",
          "perhaps",
          "regret",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "He must be at home. / You should have told me earlier.",
        "useSpeech": true
      },
      {
        "task": "Расскажи о чём-то, что ты должен был сделать иначе (should have).",
        "keywords": [
          "advice",
          "deduction",
          "criticism",
          "probably",
          "perhaps",
          "regret",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "You should get more sleep. / You ought to see a doctor.",
        "useSpeech": true
      }
    ],
    "grammarCheck": [
      {
        "sentence": "You look pale. You ___ go home.",
        "options": [
          "should",
          "must be"
        ],
        "answer": "should"
      },
      {
        "sentence": "The lights are on. She ___ be at home.",
        "options": [
          "must",
          "should"
        ],
        "answer": "must"
      }
    ],
    "theory": {
      "intro": "Модальные глаголы для советов, логических предположений о настоящем и мягкой критики прошлых действий.",
      "reading": "**Модальные глаголы: совет, предположение, критика** — Модальные глаголы для советов, логических предположений о настоящем и мягкой критики прошлых действий.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### Advice\nShould/ought to — совет. Shouldn't — отрицательный совет. Ought to = should (чуть формальнее).\n\n*Пример:* You should get more sleep. / You ought to see a doctor.\n\n### Deduction & Past criticism\nMust — уверенный вывод (must be). Might/could — возможность. Should have + V3 — критика прошлого.\n\n*Пример:* He must be at home. / You should have told me earlier.\n\n### Формулы\n- `Advice: should/ought to + V1`\n- `Deduction: must/might/could + V1`\n- `Past criticism: should have + V3`\n\n### Типичная ошибка\n❌ He must to be tired.\n✅ He must be tired.",
      "keyPoints": [
        "Advice: Should/ought to — совет. Shouldn't — отрицательный совет. Ought to = should (чут",
        "Deduction & Past criticism: Must — уверенный вывод (must be). Might/could — возможность. Should have + V3 — ",
        "Запомни формулы: Advice: should/ought to + V1; Deduction: must/might/could + V1; Past criticism: should have + V3",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «advice»?",
        "options": [
          "вероятно",
          "совет",
          "рекомендовать",
          "возможность"
        ],
        "answer": "совет"
      },
      {
        "question": "What is «deduction»?",
        "options": [
          "логический вывод",
          "логичный",
          "совет",
          "уверенный"
        ],
        "answer": "логический вывод"
      },
      {
        "question": "What is «criticism»?",
        "options": [
          "логичный",
          "сожаление",
          "совет",
          "критика"
        ],
        "answer": "критика"
      },
      {
        "question": "What is «probably»?",
        "options": [
          "вероятно",
          "критика",
          "уверенный",
          "совет"
        ],
        "answer": "вероятно"
      },
      {
        "question": "What is «perhaps»?",
        "options": [
          "вероятно",
          "сожаление",
          "возможно",
          "уверенный"
        ],
        "answer": "возможно"
      },
      {
        "type": "gap",
        "sentence": "The word «сожаление» in English is ___.",
        "answer": "regret",
        "hint": "r…"
      },
      {
        "type": "gap",
        "sentence": "The word «логичный» in English is ___.",
        "answer": "logical",
        "hint": "l…"
      },
      {
        "type": "gap",
        "sentence": "The word «рекомендовать» in English is ___.",
        "answer": "recommend",
        "hint": "r…"
      }
    ]
  },
  {
    "id": 35,
    "level": "B1",
    "title": "First & Second Conditionals",
    "titleRu": "Условные предложения 1 и 2 типа",
    "topic": "Реальные и нереальные условия",
    "description": "First Conditional — реальные условия в будущем. Second Conditional — гипотетические, маловероятные ситуации.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What will you do if it rains tomorrow?",
        "keywords": [
          "condition",
          "hypothetical",
          "unlikely",
          "consequence",
          "unless",
          "provided",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If it rains, I will stay at home."
      },
      {
        "prompt": "What would you do if you won the lottery?",
        "keywords": [
          "condition",
          "hypothetical",
          "unlikely",
          "consequence",
          "unless",
          "provided",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If I had more time, I would learn Japanese."
      },
      {
        "prompt": "If you could live anywhere, where would you go?",
        "keywords": [
          "condition",
          "hypothetical",
          "unlikely",
          "consequence",
          "unless",
          "provided",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If it rains, I will stay at home."
      }
    ],
    "vocab": [
      {
        "en": "condition",
        "ru": "условие"
      },
      {
        "en": "hypothetical",
        "ru": "гипотетический"
      },
      {
        "en": "unlikely",
        "ru": "маловероятный"
      },
      {
        "en": "consequence",
        "ru": "следствие"
      },
      {
        "en": "unless",
        "ru": "если не"
      },
      {
        "en": "provided",
        "ru": "при условии что"
      },
      {
        "en": "imagine",
        "ru": "представь"
      },
      {
        "en": "scenario",
        "ru": "сценарий"
      },
      {
        "en": "realistic",
        "ru": "реалистичный"
      },
      {
        "en": "dream",
        "ru": "мечта"
      }
    ],
    "grammar": {
      "title": "First & Second Conditional",
      "blocks": [
        {
          "title": "First Conditional",
          "desc": "Реальное или вероятное условие в будущем. If + Present Simple, will + V1.",
          "example": "If it rains, I will stay at home."
        },
        {
          "title": "Second Conditional",
          "desc": "Нереальное или маловероятное условие в настоящем/будущем. If + Past Simple, would + V1.",
          "example": "If I had more time, I would learn Japanese."
        }
      ],
      "formulas": [
        "First: If + Present Simple, will + V1",
        "Second: If + Past Simple, would + V1",
        "Unless = if not"
      ],
      "extraExamples": [
        {
          "label": "First",
          "items": [
            "If you study hard, you will pass.",
            "She won't come unless you invite her."
          ]
        },
        {
          "label": "Second",
          "items": [
            "If I were rich, I would travel the world.",
            "What would you do if you lost your phone?"
          ]
        }
      ],
      "mistake": {
        "wrong": "If I will see him, I will tell him.",
        "right": "If I see him, I will tell him."
      }
    },
    "quiz": [
      {
        "sentence": "If it ___ tomorrow, we will cancel the picnic.",
        "options": [
          "rains",
          "will rain"
        ],
        "answer": "rains"
      },
      {
        "sentence": "If I ___ a million pounds, I would buy a house.",
        "options": [
          "won",
          "win"
        ],
        "answer": "won"
      },
      {
        "sentence": "She ___ angry if you are late.",
        "options": [
          "will be",
          "would be"
        ],
        "answer": "will be"
      },
      {
        "sentence": "If I ___ you, I would accept the offer.",
        "options": [
          "were",
          "am"
        ],
        "answer": "were"
      },
      {
        "sentence": "We won't go out unless it ___ raining.",
        "options": [
          "stops",
          "will stop"
        ],
        "answer": "stops"
      }
    ],
    "pronunciation": [
      {
        "phrase": "If it rains, I'll stay home.",
        "ipa": "/ɪf ɪt reɪnz aɪl steɪ/",
        "tip": "If it — связывай, I'll — одно слово",
        "expected": "If it rains, I'll stay home."
      },
      {
        "phrase": "If I were you...",
        "ipa": "/ɪf aɪ wə juː/",
        "tip": "Were — /wə/ в быстрой речи, формально /wɜː/",
        "expected": "If I were you..."
      },
      {
        "phrase": "What would you do?",
        "ipa": "/wɒt wʊd juː duː/",
        "tip": "Would — /wʊd/, не /wud/",
        "expected": "What would you do?"
      },
      {
        "phrase": "Unless you hurry...",
        "ipa": "/ənˈles juː ˈhʌri/",
        "tip": "Unless — ударение на второй слог",
        "expected": "Unless you hurry..."
      },
      {
        "phrase": "I would travel more.",
        "ipa": "/aɪ wʊd ˈtrævl/",
        "tip": "Would — слабая форма в быстрой речи /əd/",
        "expected": "I would travel more."
      }
    ],
    "flashcards": [
      {
        "word": "condition",
        "trans": "условие",
        "example": "What's the condition?"
      },
      {
        "word": "hypothetical",
        "trans": "гипотетический",
        "example": "It's a hypothetical question."
      },
      {
        "word": "unlikely",
        "trans": "маловероятный",
        "example": "Rain is unlikely today."
      },
      {
        "word": "consequence",
        "trans": "следствие",
        "example": "Consider the consequences."
      },
      {
        "word": "unless",
        "trans": "если не",
        "example": "I won't go unless you come."
      },
      {
        "word": "provided",
        "trans": "при условии",
        "example": "You can go provided you finish."
      },
      {
        "word": "imagine",
        "trans": "представь",
        "example": "Imagine you were famous."
      },
      {
        "word": "scenario",
        "trans": "сценарий",
        "example": "That's a worst-case scenario."
      },
      {
        "word": "realistic",
        "trans": "реалистичный",
        "example": "Is that a realistic plan?"
      },
      {
        "word": "dream",
        "trans": "мечта",
        "example": "It's my dream to visit Iceland."
      },
      {
        "word": "if",
        "trans": "если",
        "example": "If you need help, call me."
      },
      {
        "word": "will",
        "trans": "will (результат)",
        "example": "If you try, you will succeed."
      },
      {
        "word": "would",
        "trans": "would (гипотеза)",
        "example": "I would help if I could."
      },
      {
        "word": "won",
        "trans": "выиграл (Past)",
        "example": "If I won, I would celebrate."
      },
      {
        "word": "were",
        "trans": "were (субjunctive)",
        "example": "If I were taller..."
      },
      {
        "word": "pass",
        "trans": "сдать (экзамен)",
        "example": "If you study, you will pass."
      },
      {
        "word": "cancel",
        "trans": "отменить",
        "example": "They will cancel if it snows."
      },
      {
        "word": "lottery",
        "trans": "лотерея",
        "example": "If I won the lottery..."
      },
      {
        "word": "offer",
        "trans": "предложение",
        "example": "I would accept the offer."
      },
      {
        "word": "hurry",
        "trans": "торопиться",
        "example": "Unless you hurry, you'll be late."
      }
    ],
    "culture": {
      "watch": [
        "Sliding Doors — разные сценарии жизни"
      ],
      "listen": [
        "Beyoncé — If I Were a Boy"
      ],
      "read": [
        "Ray Bradbury — Fahrenheit 451"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What will happen if the character fails?",
        "keywords": [
          "condition",
          "hypothetical",
          "unlikely",
          "consequence",
          "unless",
          "provided",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If it rains, I will stay at home."
      },
      {
        "prompt": "What would you do in his situation?",
        "keywords": [
          "condition",
          "hypothetical",
          "unlikely",
          "consequence",
          "unless",
          "provided",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had more time, I would learn Japanese."
      },
      {
        "prompt": "Is the situation realistic or hypothetical?",
        "keywords": [
          "condition",
          "hypothetical",
          "unlikely",
          "consequence",
          "unless",
          "provided",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If it rains, I will stay at home."
      },
      {
        "prompt": "What would change if the story had a different ending?",
        "keywords": [
          "condition",
          "hypothetical",
          "unlikely",
          "consequence",
          "unless",
          "provided",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had more time, I would learn Japanese."
      },
      {
        "prompt": "What conditions must be met for success?",
        "keywords": [
          "condition",
          "hypothetical",
          "unlikely",
          "consequence",
          "unless",
          "provided",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If it rains, I will stay at home."
      }
    ],
    "speaking": [
      {
        "task": "Составь 3 предложения First Conditional о своих планах.",
        "keywords": [
          "condition",
          "hypothetical",
          "unlikely",
          "consequence",
          "unless",
          "provided",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If it rains, I will stay at home.",
        "useSpeech": true
      },
      {
        "task": "Ответь на «What would you do if...?» — 3 гипотетических ситуации.",
        "keywords": [
          "condition",
          "hypothetical",
          "unlikely",
          "consequence",
          "unless",
          "provided",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If I had more time, I would learn Japanese.",
        "useSpeech": true
      },
      {
        "task": "Обсуди с воображаемым другом: If I were you, I would...",
        "keywords": [
          "condition",
          "hypothetical",
          "unlikely",
          "consequence",
          "unless",
          "provided",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If it rains, I will stay at home.",
        "useSpeech": true
      }
    ],
    "grammarCheck": [
      {
        "sentence": "If it ___ tomorrow, we will cancel the picnic.",
        "options": [
          "rains",
          "will rain"
        ],
        "answer": "rains"
      },
      {
        "sentence": "If I ___ a million pounds, I would buy a house.",
        "options": [
          "won",
          "win"
        ],
        "answer": "won"
      }
    ],
    "theory": {
      "intro": "First Conditional — реальные условия в будущем. Second Conditional — гипотетические, маловероятные ситуации.",
      "reading": "**Условные предложения 1 и 2 типа** — First Conditional — реальные условия в будущем. Second Conditional — гипотетические, маловероятные ситуации.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### First Conditional\nРеальное или вероятное условие в будущем. If + Present Simple, will + V1.\n\n*Пример:* If it rains, I will stay at home.\n\n### Second Conditional\nНереальное или маловероятное условие в настоящем/будущем. If + Past Simple, would + V1.\n\n*Пример:* If I had more time, I would learn Japanese.\n\n### Формулы\n- `First: If + Present Simple, will + V1`\n- `Second: If + Past Simple, would + V1`\n- `Unless = if not`\n\n### Типичная ошибка\n❌ If I will see him, I will tell him.\n✅ If I see him, I will tell him.",
      "keyPoints": [
        "First Conditional: Реальное или вероятное условие в будущем. If + Present Simple, will + V1.",
        "Second Conditional: Нереальное или маловероятное условие в настоящем/будущем. If + Past Simple, woul",
        "Запомни формулы: First: If + Present Simple, will + V1; Second: If + Past Simple, would + V1; Unless = if not",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «condition»?",
        "options": [
          "если не",
          "условие",
          "сценарий",
          "мечта"
        ],
        "answer": "условие"
      },
      {
        "question": "What is «hypothetical»?",
        "options": [
          "гипотетический",
          "реалистичный",
          "условие",
          "сценарий"
        ],
        "answer": "гипотетический"
      },
      {
        "question": "What is «unlikely»?",
        "options": [
          "реалистичный",
          "сценарий",
          "следствие",
          "маловероятный"
        ],
        "answer": "маловероятный"
      },
      {
        "question": "What is «consequence»?",
        "options": [
          "маловероятный",
          "представь",
          "при условии что",
          "следствие"
        ],
        "answer": "следствие"
      },
      {
        "question": "What is «unless»?",
        "options": [
          "представь",
          "реалистичный",
          "при условии что",
          "если не"
        ],
        "answer": "если не"
      },
      {
        "type": "gap",
        "sentence": "The word «при условии что» in English is ___.",
        "answer": "provided",
        "hint": "p…"
      },
      {
        "type": "gap",
        "sentence": "The word «представь» in English is ___.",
        "answer": "imagine",
        "hint": "i…"
      },
      {
        "type": "gap",
        "sentence": "The word «сценарий» in English is ___.",
        "answer": "scenario",
        "hint": "s…"
      }
    ]
  },
  {
    "id": 36,
    "level": "B1",
    "title": "Third & Mixed Conditionals",
    "titleRu": "Условные предложения 3 типа и смешанные",
    "topic": "Прошлое и сожаление",
    "description": "Third Conditional — нереальное прошлое. Mixed Conditionals — смешение времен для сложных гипотез.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What would have happened if you had studied more?",
        "keywords": [
          "regret",
          "past event",
          "alternative",
          "consequence",
          "hypothesis",
          "unreal",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If I had studied harder, I would have passed the exam."
      },
      {
        "prompt": "If you had been born in another country, how would your life be different?",
        "keywords": [
          "regret",
          "past event",
          "alternative",
          "consequence",
          "hypothesis",
          "unreal",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If I had taken that job, I would be living abroad now."
      },
      {
        "prompt": "What mistake do you wish you hadn't made?",
        "keywords": [
          "regret",
          "past event",
          "alternative",
          "consequence",
          "hypothesis",
          "unreal",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If I had studied harder, I would have passed the exam."
      }
    ],
    "vocab": [
      {
        "en": "regret",
        "ru": "сожаление"
      },
      {
        "en": "past event",
        "ru": "прошлое событие"
      },
      {
        "en": "alternative",
        "ru": "альтернатива"
      },
      {
        "en": "consequence",
        "ru": "последствие"
      },
      {
        "en": "hypothesis",
        "ru": "гипотеза"
      },
      {
        "en": "unreal",
        "ru": "нереальный"
      },
      {
        "en": "wish",
        "ru": "желание"
      },
      {
        "en": "outcome",
        "ru": "исход"
      },
      {
        "en": "circumstance",
        "ru": "обстоятельство"
      },
      {
        "en": "reflect",
        "ru": "размышлять"
      }
    ],
    "grammar": {
      "title": "Third & Mixed Conditionals",
      "blocks": [
        {
          "title": "Third Conditional",
          "desc": "Нереальное условие в прошлом. If + Past Perfect, would have + V3. Выражает сожаление.",
          "example": "If I had studied harder, I would have passed the exam."
        },
        {
          "title": "Mixed Conditionals",
          "desc": "Смешение: прошлое условие → настоящий результат, или настоящее условие → прошлый результат.",
          "example": "If I had taken that job, I would be living abroad now."
        }
      ],
      "formulas": [
        "Third: If + had + V3, would have + V3",
        "Mixed: If + Past Perfect, would + V1 (now)"
      ],
      "extraExamples": [
        {
          "label": "Third",
          "items": [
            "If she hadn't missed the train, she would have arrived on time.",
            "We wouldn't have got lost if we had had a map."
          ]
        },
        {
          "label": "Mixed",
          "items": [
            "If I were better at maths, I would have become an engineer.",
            "If he had saved money, he wouldn't be in debt now."
          ]
        }
      ],
      "mistake": {
        "wrong": "If I would have known, I would have come.",
        "right": "If I had known, I would have come."
      }
    },
    "quiz": [
      {
        "sentence": "If she ___ earlier, she would have caught the train.",
        "options": [
          "had left",
          "left"
        ],
        "answer": "had left"
      },
      {
        "sentence": "I would have helped if you ___ me.",
        "options": [
          "had asked",
          "asked"
        ],
        "answer": "had asked"
      },
      {
        "sentence": "If I had studied medicine, I ___ a doctor now.",
        "options": [
          "would be",
          "would have been"
        ],
        "answer": "would be"
      },
      {
        "sentence": "We ___ lost if we had had GPS.",
        "options": [
          "wouldn't have got",
          "wouldn't get"
        ],
        "answer": "wouldn't have got"
      },
      {
        "sentence": "If he ___ more careful, the accident wouldn't have happened.",
        "options": [
          "had been",
          "was"
        ],
        "answer": "had been"
      }
    ],
    "pronunciation": [
      {
        "phrase": "If I had known...",
        "ipa": "/ɪf aɪ hæd nəʊn/",
        "tip": "Had known — связывай, known — silent k",
        "expected": "If I had known..."
      },
      {
        "phrase": "I would have helped.",
        "ipa": "/aɪ wʊd hæv helpd/",
        "tip": "Would have → would've /wʊdəv/",
        "expected": "I would have helped."
      },
      {
        "phrase": "She would have passed.",
        "ipa": "/ʃiː wʊd hæv pɑːst/",
        "tip": "Would have — три слова сливаются",
        "expected": "She would have passed."
      },
      {
        "phrase": "If I were richer now...",
        "ipa": "/ɪf aɪ wə ˈrɪtʃə/",
        "tip": "Mixed conditional — чёткое разделение частей",
        "expected": "If I were richer now..."
      },
      {
        "phrase": "We wouldn't have got lost.",
        "ipa": "/wiː ˈwʊdnt hæv ɡɒt/",
        "tip": "Wouldn't have — не пропускай have",
        "expected": "We wouldn't have got lost."
      }
    ],
    "flashcards": [
      {
        "word": "regret",
        "trans": "сожаление",
        "example": "I regret not travelling more."
      },
      {
        "word": "past event",
        "trans": "прошлое событие",
        "example": "That past event changed everything."
      },
      {
        "word": "alternative",
        "trans": "альтернатива",
        "example": "Think of an alternative outcome."
      },
      {
        "word": "consequence",
        "trans": "последствие",
        "example": "Every action has consequences."
      },
      {
        "word": "hypothesis",
        "trans": "гипотеза",
        "example": "It's just a hypothesis."
      },
      {
        "word": "unreal",
        "trans": "нереальный",
        "example": "The situation is unreal."
      },
      {
        "word": "wish",
        "trans": "желание",
        "example": "I wish I had tried harder."
      },
      {
        "word": "outcome",
        "trans": "исход",
        "example": "The outcome was unexpected."
      },
      {
        "word": "circumstance",
        "trans": "обстоятельство",
        "example": "Under different circumstances..."
      },
      {
        "word": "reflect",
        "trans": "размышлять",
        "example": "I reflect on my choices."
      },
      {
        "word": "had known",
        "trans": "знал бы (Past Perfect)",
        "example": "If I had known, I would have come."
      },
      {
        "word": "would have",
        "trans": "would have",
        "example": "She would have succeeded."
      },
      {
        "word": "had studied",
        "trans": "учился бы (PP)",
        "example": "If I had studied more..."
      },
      {
        "word": "missed",
        "trans": "опоздал/пропустил",
        "example": "If I hadn't missed the bus..."
      },
      {
        "word": "caught",
        "trans": "успел (на поезд)",
        "example": "She would have caught it."
      },
      {
        "word": "accident",
        "trans": "авария",
        "example": "The accident wouldn't have happened."
      },
      {
        "word": "debt",
        "trans": "долг",
        "example": "He wouldn't be in debt now."
      },
      {
        "word": "saved",
        "trans": "накопил",
        "example": "If he had saved money..."
      },
      {
        "word": "different",
        "trans": "другой",
        "example": "Life would be different."
      },
      {
        "word": "mistake",
        "trans": "ошибка",
        "example": "If I hadn't made that mistake..."
      }
    ],
    "culture": {
      "watch": [
        "It's a Wonderful Life — альтернативная жизнь"
      ],
      "listen": [
        "Frank Sinatra — My Way"
      ],
      "read": [
        "Kazuo Ishiguro — The Remains of the Day"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What would have happened if the character had made a different choice?",
        "keywords": [
          "regret",
          "past event",
          "alternative",
          "consequence",
          "hypothesis",
          "unreal",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had studied harder, I would have passed the exam."
      },
      {
        "prompt": "How would the protagonist's life be different now?",
        "keywords": [
          "regret",
          "past event",
          "alternative",
          "consequence",
          "hypothesis",
          "unreal",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had taken that job, I would be living abroad now."
      },
      {
        "prompt": "What does the character regret?",
        "keywords": [
          "regret",
          "past event",
          "alternative",
          "consequence",
          "hypothesis",
          "unreal",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had studied harder, I would have passed the exam."
      },
      {
        "prompt": "What mixed conditional fits this situation?",
        "keywords": [
          "regret",
          "past event",
          "alternative",
          "consequence",
          "hypothesis",
          "unreal",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had taken that job, I would be living abroad now."
      },
      {
        "prompt": "What past event caused the present problem?",
        "keywords": [
          "regret",
          "past event",
          "alternative",
          "consequence",
          "hypothesis",
          "unreal",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had studied harder, I would have passed the exam."
      }
    ],
    "speaking": [
      {
        "task": "Расскажи о событии в прошлом, которое изменило бы настоящее (Third Conditional).",
        "keywords": [
          "regret",
          "past event",
          "alternative",
          "consequence",
          "hypothesis",
          "unreal",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If I had studied harder, I would have passed the exam.",
        "useSpeech": true
      },
      {
        "task": "Составь 2 Mixed Conditional предложения о своей жизни.",
        "keywords": [
          "regret",
          "past event",
          "alternative",
          "consequence",
          "hypothesis",
          "unreal",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If I had taken that job, I would be living abroad now.",
        "useSpeech": true
      },
      {
        "task": "Обсуди: If I had..., I would... now — 3 примера.",
        "keywords": [
          "regret",
          "past event",
          "alternative",
          "consequence",
          "hypothesis",
          "unreal",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If I had studied harder, I would have passed the exam.",
        "useSpeech": true
      }
    ],
    "grammarCheck": [
      {
        "sentence": "If she ___ earlier, she would have caught the train.",
        "options": [
          "had left",
          "left"
        ],
        "answer": "had left"
      },
      {
        "sentence": "I would have helped if you ___ me.",
        "options": [
          "had asked",
          "asked"
        ],
        "answer": "had asked"
      }
    ],
    "theory": {
      "intro": "Third Conditional — нереальное прошлое. Mixed Conditionals — смешение времен для сложных гипотез.",
      "reading": "**Условные предложения 3 типа и смешанные** — Third Conditional — нереальное прошлое. Mixed Conditionals — смешение времен для сложных гипотез.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### Third Conditional\nНереальное условие в прошлом. If + Past Perfect, would have + V3. Выражает сожаление.\n\n*Пример:* If I had studied harder, I would have passed the exam.\n\n### Mixed Conditionals\nСмешение: прошлое условие → настоящий результат, или настоящее условие → прошлый результат.\n\n*Пример:* If I had taken that job, I would be living abroad now.\n\n### Формулы\n- `Third: If + had + V3, would have + V3`\n- `Mixed: If + Past Perfect, would + V1 (now)`\n\n### Типичная ошибка\n❌ If I would have known, I would have come.\n✅ If I had known, I would have come.",
      "keyPoints": [
        "Third Conditional: Нереальное условие в прошлом. If + Past Perfect, would have + V3. Выражает сожал",
        "Mixed Conditionals: Смешение: прошлое условие → настоящий результат, или настоящее условие → прошлый",
        "Запомни формулы: Third: If + had + V3, would have + V3; Mixed: If + Past Perfect, would + V1 (now)",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «regret»?",
        "options": [
          "сожаление",
          "прошлое событие",
          "нереальный",
          "альтернатива"
        ],
        "answer": "сожаление"
      },
      {
        "question": "What is «past event»?",
        "options": [
          "желание",
          "обстоятельство",
          "прошлое событие",
          "сожаление"
        ],
        "answer": "прошлое событие"
      },
      {
        "question": "What is «alternative»?",
        "options": [
          "прошлое событие",
          "гипотеза",
          "альтернатива",
          "нереальный"
        ],
        "answer": "альтернатива"
      },
      {
        "question": "What is «consequence»?",
        "options": [
          "прошлое событие",
          "исход",
          "последствие",
          "сожаление"
        ],
        "answer": "последствие"
      },
      {
        "question": "What is «hypothesis»?",
        "options": [
          "сожаление",
          "гипотеза",
          "обстоятельство",
          "размышлять"
        ],
        "answer": "гипотеза"
      },
      {
        "type": "gap",
        "sentence": "The word «нереальный» in English is ___.",
        "answer": "unreal",
        "hint": "u…"
      },
      {
        "type": "gap",
        "sentence": "The word «желание» in English is ___.",
        "answer": "wish",
        "hint": "w…"
      },
      {
        "type": "gap",
        "sentence": "The word «исход» in English is ___.",
        "answer": "outcome",
        "hint": "o…"
      }
    ]
  },
  {
    "id": 37,
    "level": "B1",
    "title": "Passive Voice",
    "titleRu": "Страдательный залог",
    "topic": "Passive in different tenses",
    "description": "Passive Voice смещает фокус с исполнителя на действие или объект. Нужен для формального и академического стиля.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "Who invented the telephone?",
        "keywords": [
          "passive",
          "agent",
          "object",
          "focus",
          "manufacture",
          "discover",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The book was written by Tolkien."
      },
      {
        "prompt": "Was your homework checked?",
        "keywords": [
          "passive",
          "agent",
          "object",
          "focus",
          "manufacture",
          "discover",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The letter has been sent. / The bridge is being repaired."
      },
      {
        "prompt": "What is made in your country?",
        "keywords": [
          "passive",
          "agent",
          "object",
          "focus",
          "manufacture",
          "discover",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The book was written by Tolkien."
      }
    ],
    "vocab": [
      {
        "en": "passive",
        "ru": "страдательный залог"
      },
      {
        "en": "agent",
        "ru": "исполнитель действия"
      },
      {
        "en": "object",
        "ru": "объект"
      },
      {
        "en": "focus",
        "ru": "фокус, акцент"
      },
      {
        "en": "manufacture",
        "ru": "производить"
      },
      {
        "en": "discover",
        "ru": "открывать"
      },
      {
        "en": "publish",
        "ru": "публиковать"
      },
      {
        "en": "construct",
        "ru": "строить"
      },
      {
        "en": "by",
        "ru": "кем/чем (агент)"
      },
      {
        "en": "formal",
        "ru": "формальный"
      }
    ],
    "grammar": {
      "title": "Passive Voice",
      "blocks": [
        {
          "title": "Structure",
          "desc": "Be + V3. Исполнитель указывается через by, если важен. Фокус на действии, а не на том, кто его совершил.",
          "example": "The book was written by Tolkien."
        },
        {
          "title": "Tenses in Passive",
          "desc": "Passive возможен во всех основных временах: is made, was built, has been done, will be sent.",
          "example": "The letter has been sent. / The bridge is being repaired."
        }
      ],
      "formulas": [
        "Present Simple Passive: am/is/are + V3",
        "Past Simple Passive: was/were + V3",
        "Present Perfect Passive: have/has been + V3"
      ],
      "extraExamples": [
        {
          "label": "Examples",
          "items": [
            "English is spoken all over the world.",
            "The window was broken last night."
          ]
        },
        {
          "label": "With agent",
          "items": [
            "The film was directed by Spielberg.",
            "The cake was made by my grandmother."
          ]
        }
      ],
      "mistake": {
        "wrong": "The house was build in 1990.",
        "right": "The house was built in 1990."
      }
    },
    "quiz": [
      {
        "sentence": "English ___ all over the world.",
        "options": [
          "is spoken",
          "speaks"
        ],
        "answer": "is spoken"
      },
      {
        "sentence": "The bridge ___ last year.",
        "options": [
          "was built",
          "built"
        ],
        "answer": "was built"
      },
      {
        "sentence": "The report ___ yet.",
        "options": [
          "hasn't been finished",
          "hasn't finished"
        ],
        "answer": "hasn't been finished"
      },
      {
        "sentence": "The room ___ right now.",
        "options": [
          "is being cleaned",
          "is cleaning"
        ],
        "answer": "is being cleaned"
      },
      {
        "sentence": "The email ___ tomorrow.",
        "options": [
          "will be sent",
          "will send"
        ],
        "answer": "will be sent"
      }
    ],
    "pronunciation": [
      {
        "phrase": "It was built in 1990.",
        "ipa": "/ɪt wɒz bɪlt/",
        "tip": "Built — одно слово, silent l",
        "expected": "It was built in 1990."
      },
      {
        "phrase": "English is spoken here.",
        "ipa": "/ˈɪŋɡlɪʃ ɪz ˈspəʊkən/",
        "tip": "Spoken — ударение на первый слог",
        "expected": "English is spoken here."
      },
      {
        "phrase": "Has it been done?",
        "ipa": "/hæz ɪt biːn dʌn/",
        "tip": "Been done — связывай без паузы",
        "expected": "Has it been done?"
      },
      {
        "phrase": "The letter was sent.",
        "ipa": "/ðə ˈletə wɒz sent/",
        "tip": "Was sent — was слабое /wəz/",
        "expected": "The letter was sent."
      },
      {
        "phrase": "It is being repaired.",
        "ipa": "/ɪt ɪz ˈbiːɪŋ rɪˈpeəd/",
        "tip": "Being — не пропускай, /ˈbiːɪŋ/",
        "expected": "It is being repaired."
      }
    ],
    "flashcards": [
      {
        "word": "passive",
        "trans": "страдательный залог",
        "example": "Use the passive in formal writing."
      },
      {
        "word": "agent",
        "trans": "исполнитель",
        "example": "The agent is unknown."
      },
      {
        "word": "object",
        "trans": "объект",
        "example": "The object receives the action."
      },
      {
        "word": "focus",
        "trans": "фокус",
        "example": "Passive shifts the focus."
      },
      {
        "word": "manufacture",
        "trans": "производить",
        "example": "Cars are manufactured here."
      },
      {
        "word": "discover",
        "trans": "открывать",
        "example": "Penicillin was discovered in 1928."
      },
      {
        "word": "publish",
        "trans": "публиковать",
        "example": "The article was published yesterday."
      },
      {
        "word": "construct",
        "trans": "строить",
        "example": "The tower was constructed in 1889."
      },
      {
        "word": "by",
        "trans": "кем/чем",
        "example": "It was written by her."
      },
      {
        "word": "formal",
        "trans": "формальный",
        "example": "Passive is common in formal texts."
      },
      {
        "word": "is made",
        "trans": "делается",
        "example": "This is made in Italy."
      },
      {
        "word": "was built",
        "trans": "был построен",
        "example": "The house was built in 2000."
      },
      {
        "word": "has been done",
        "trans": "было сделано",
        "example": "The work has been done."
      },
      {
        "word": "will be sent",
        "trans": "будет отправлено",
        "example": "It will be sent soon."
      },
      {
        "word": "is being repaired",
        "trans": "ремонтируется",
        "example": "The road is being repaired."
      },
      {
        "word": "spoken",
        "trans": "говорится (PP)",
        "example": "French is spoken in Quebec."
      },
      {
        "word": "written",
        "trans": "написано (PP)",
        "example": "The rules are written clearly."
      },
      {
        "word": "invented",
        "trans": "изобретено (PP)",
        "example": "The phone was invented by Bell."
      },
      {
        "word": "damaged",
        "trans": "повреждено (PP)",
        "example": "The car was damaged."
      },
      {
        "word": "created",
        "trans": "создано (PP)",
        "example": "The app was created in 2020."
      }
    ],
    "culture": {
      "watch": [
        "How It's Made — производство и процессы"
      ],
      "listen": [
        "Daft Punk — Harder, Better, Faster, Stronger"
      ],
      "read": [
        "Stephen Hawking — A Brief History of Time"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "Who was the book written by?",
        "keywords": [
          "passive",
          "agent",
          "object",
          "focus",
          "manufacture",
          "discover",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The book was written by Tolkien."
      },
      {
        "prompt": "When was the building constructed?",
        "keywords": [
          "passive",
          "agent",
          "object",
          "focus",
          "manufacture",
          "discover",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The letter has been sent. / The bridge is being repaired."
      },
      {
        "prompt": "What is produced in this region?",
        "keywords": [
          "passive",
          "agent",
          "object",
          "focus",
          "manufacture",
          "discover",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The book was written by Tolkien."
      },
      {
        "prompt": "Has the problem been solved yet?",
        "keywords": [
          "passive",
          "agent",
          "object",
          "focus",
          "manufacture",
          "discover",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The letter has been sent. / The bridge is being repaired."
      },
      {
        "prompt": "What will be discussed at the meeting?",
        "keywords": [
          "passive",
          "agent",
          "object",
          "focus",
          "manufacture",
          "discover",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The book was written by Tolkien."
      }
    ],
    "speaking": [
      {
        "task": "Опиши, как делается что-то в твоей стране (is made/produced).",
        "keywords": [
          "passive",
          "agent",
          "object",
          "focus",
          "manufacture",
          "discover",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The book was written by Tolkien.",
        "useSpeech": true
      },
      {
        "task": "Перефразируй 3 активных предложения в passive.",
        "keywords": [
          "passive",
          "agent",
          "object",
          "focus",
          "manufacture",
          "discover",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The letter has been sent. / The bridge is being repaired.",
        "useSpeech": true
      },
      {
        "task": "Расскажи о здании или памятнике: when it was built, by whom.",
        "keywords": [
          "passive",
          "agent",
          "object",
          "focus",
          "manufacture",
          "discover",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The book was written by Tolkien.",
        "useSpeech": true
      }
    ],
    "grammarCheck": [
      {
        "sentence": "English ___ all over the world.",
        "options": [
          "is spoken",
          "speaks"
        ],
        "answer": "is spoken"
      },
      {
        "sentence": "The bridge ___ last year.",
        "options": [
          "was built",
          "built"
        ],
        "answer": "was built"
      }
    ],
    "theory": {
      "intro": "Passive Voice смещает фокус с исполнителя на действие или объект. Нужен для формального и академического стиля.",
      "reading": "**Страдательный залог** — Passive Voice смещает фокус с исполнителя на действие или объект. Нужен для формального и академического стиля.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### Structure\nBe + V3. Исполнитель указывается через by, если важен. Фокус на действии, а не на том, кто его совершил.\n\n*Пример:* The book was written by Tolkien.\n\n### Tenses in Passive\nPassive возможен во всех основных временах: is made, was built, has been done, will be sent.\n\n*Пример:* The letter has been sent. / The bridge is being repaired.\n\n### Формулы\n- `Present Simple Passive: am/is/are + V3`\n- `Past Simple Passive: was/were + V3`\n- `Present Perfect Passive: have/has been + V3`\n\n### Типичная ошибка\n❌ The house was build in 1990.\n✅ The house was built in 1990.",
      "keyPoints": [
        "Structure: Be + V3. Исполнитель указывается через by, если важен. Фокус на действии, а не н",
        "Tenses in Passive: Passive возможен во всех основных временах: is made, was built, has been done, w",
        "Запомни формулы: Present Simple Passive: am/is/are + V3; Past Simple Passive: was/were + V3; Present Perfect Passive: have/has been + V3",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «passive»?",
        "options": [
          "фокус, акцент",
          "страдательный залог",
          "производить",
          "исполнитель действия"
        ],
        "answer": "страдательный залог"
      },
      {
        "question": "What is «agent»?",
        "options": [
          "страдательный залог",
          "публиковать",
          "исполнитель действия",
          "производить"
        ],
        "answer": "исполнитель действия"
      },
      {
        "question": "What is «object»?",
        "options": [
          "производить",
          "объект",
          "страдательный залог",
          "кем/чем (агент)"
        ],
        "answer": "объект"
      },
      {
        "question": "What is «focus»?",
        "options": [
          "фокус, акцент",
          "страдательный залог",
          "кем/чем (агент)",
          "объект"
        ],
        "answer": "фокус, акцент"
      },
      {
        "question": "What is «manufacture»?",
        "options": [
          "объект",
          "кем/чем (агент)",
          "публиковать",
          "производить"
        ],
        "answer": "производить"
      },
      {
        "type": "gap",
        "sentence": "The word «открывать» in English is ___.",
        "answer": "discover",
        "hint": "d…"
      },
      {
        "type": "gap",
        "sentence": "The word «публиковать» in English is ___.",
        "answer": "publish",
        "hint": "p…"
      },
      {
        "type": "gap",
        "sentence": "The word «строить» in English is ___.",
        "answer": "construct",
        "hint": "c…"
      }
    ]
  },
  {
    "id": 38,
    "level": "B1",
    "title": "Reported Speech",
    "titleRu": "Косвенная речь",
    "topic": "He said that...",
    "description": "Передаём чужие слова: сдвиг времён и изменение местоимений.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What did your friend tell you yesterday?",
        "keywords": [
          "said",
          "told",
          "asked",
          "explained",
          "claimed",
          "admitted",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "He said (that) he was tired."
      },
      {
        "prompt": "Did she say where she was going?",
        "keywords": [
          "said",
          "told",
          "asked",
          "explained",
          "claimed",
          "admitted",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She asked if I was ready."
      },
      {
        "prompt": "What did the teacher explain?",
        "keywords": [
          "said",
          "told",
          "asked",
          "explained",
          "claimed",
          "admitted",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "He said (that) he was tired."
      }
    ],
    "vocab": [
      {
        "en": "said",
        "ru": "сказал"
      },
      {
        "en": "told",
        "ru": "сказал (кому-то)"
      },
      {
        "en": "asked",
        "ru": "спросил"
      },
      {
        "en": "explained",
        "ru": "объяснил"
      },
      {
        "en": "claimed",
        "ru": "утверждал"
      },
      {
        "en": "admitted",
        "ru": "признал"
      },
      {
        "en": "refused",
        "ru": "отказался"
      },
      {
        "en": "promised",
        "ru": "пообещал"
      },
      {
        "en": "warned",
        "ru": "предупредил"
      },
      {
        "en": "suggested",
        "ru": "предложил"
      }
    ],
    "grammar": {
      "title": "Reported Speech",
      "blocks": [
        {
          "title": "Утверждения",
          "desc": "Say/tell + (that) + сдвиг назад: Present→Past, Past→Past Perfect, will→would.",
          "example": "He said (that) he was tired."
        },
        {
          "title": "Вопросы и приказы",
          "desc": "Ask + if/whether или wh-word. Tell/ask + to + V: She told me to wait.",
          "example": "She asked if I was ready."
        }
      ],
      "formulas": [
        "said (that) + past tense",
        "told + person + (that)",
        "asked + if/wh-word + past"
      ],
      "extraExamples": [
        {
          "label": "Statements",
          "items": [
            "'I love it' → He said he loved it.",
            "'I will come' → She said she would come."
          ]
        },
        {
          "label": "Questions",
          "items": [
            "'Are you OK?' → He asked if I was OK."
          ]
        }
      ],
      "mistake": {
        "wrong": "He said me that he was busy.",
        "right": "He told me that he was busy."
      }
    },
    "quiz": [
      {
        "sentence": "She said she ___ tired.",
        "options": [
          "was",
          "is"
        ],
        "answer": "was"
      },
      {
        "sentence": "He told me ___ wait.",
        "options": [
          "to",
          "for"
        ],
        "answer": "to"
      },
      {
        "sentence": "They asked if we ___ coming.",
        "options": [
          "were",
          "are"
        ],
        "answer": "were"
      },
      {
        "sentence": "She said she ___ help.",
        "options": [
          "would",
          "will"
        ],
        "answer": "would"
      },
      {
        "sentence": "He asked where I ___.",
        "options": [
          "lived",
          "live"
        ],
        "answer": "lived"
      }
    ],
    "pronunciation": [
      {
        "phrase": "He said he was busy.",
        "ipa": "/hiː sed hiː wɒz ˈbɪzi/",
        "tip": "Said he — связно",
        "expected": "He said he was busy."
      },
      {
        "phrase": "She told me to wait.",
        "ipa": "/ʃiː təʊld miː tə weɪt/",
        "tip": "Told me — не told to me",
        "expected": "She told me to wait."
      },
      {
        "phrase": "They asked if I knew.",
        "ipa": "/ðeɪ ɑːskt ɪf aɪ njuː/",
        "tip": "Asked if — одна фраза",
        "expected": "They asked if I knew."
      },
      {
        "phrase": "He explained that it was true.",
        "ipa": "/hiː ɪkˈspleɪnd ðæt/",
        "tip": "Explained that — связно",
        "expected": "He explained that it was true."
      },
      {
        "phrase": "She promised she would come.",
        "ipa": "/ʃiː ˈprɒmɪst/",
        "tip": "Promised — ударение на первый слог",
        "expected": "She promised she would come."
      }
    ],
    "culture": {
      "watch": [
        "Interview scenes — reported quotes"
      ],
      "listen": [
        "Simon & Garfunkel — The Sound of Silence"
      ],
      "read": [
        "News articles with reported speech"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What did he say?",
        "keywords": [
          "said",
          "told",
          "asked",
          "explained",
          "claimed",
          "admitted",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "He said (that) he was tired."
      },
      {
        "prompt": "What did she ask?",
        "keywords": [
          "said",
          "told",
          "asked",
          "explained",
          "claimed",
          "admitted",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She asked if I was ready."
      },
      {
        "prompt": "Did they tell or say?",
        "keywords": [
          "said",
          "told",
          "asked",
          "explained",
          "claimed",
          "admitted",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "He said (that) he was tired."
      },
      {
        "prompt": "What tense shift appears?",
        "keywords": [
          "said",
          "told",
          "asked",
          "explained",
          "claimed",
          "admitted",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She asked if I was ready."
      },
      {
        "prompt": "What did he promise?",
        "keywords": [
          "said",
          "told",
          "asked",
          "explained",
          "claimed",
          "admitted",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "He said (that) he was tired."
      }
    ],
    "speaking": [
      {
        "task": "Перескажи диалог в reported speech.",
        "keywords": [
          "said",
          "told",
          "asked",
          "explained",
          "claimed",
          "admitted",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "He said (that) he was tired.",
        "useSpeech": true
      },
      {
        "task": "Преобразуй 5 прямых цитат в косвенные.",
        "keywords": [
          "said",
          "told",
          "asked",
          "explained",
          "claimed",
          "admitted",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She asked if I was ready.",
        "useSpeech": true
      },
      {
        "task": "Расскажи, что тебе сказал друг вчера.",
        "keywords": [
          "said",
          "told",
          "asked",
          "explained",
          "claimed",
          "admitted",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "He said (that) he was tired.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "said",
        "trans": "сказал",
        "example": "I use 'said' every day."
      },
      {
        "word": "told",
        "trans": "сказал (кому-то)",
        "example": "I use 'told' every day."
      },
      {
        "word": "asked",
        "trans": "спросил",
        "example": "I use 'asked' every day."
      },
      {
        "word": "explained",
        "trans": "объяснил",
        "example": "I use 'explained' every day."
      },
      {
        "word": "claimed",
        "trans": "утверждал",
        "example": "I use 'claimed' every day."
      },
      {
        "word": "admitted",
        "trans": "признал",
        "example": "I use 'admitted' every day."
      },
      {
        "word": "refused",
        "trans": "отказался",
        "example": "I use 'refused' every day."
      },
      {
        "word": "promised",
        "trans": "пообещал",
        "example": "I use 'promised' every day."
      },
      {
        "word": "warned",
        "trans": "предупредил",
        "example": "I use 'warned' every day."
      },
      {
        "word": "suggested",
        "trans": "предложил",
        "example": "I use 'suggested' every day."
      },
      {
        "word": "said",
        "trans": "сказал",
        "example": "Practice makes progress."
      },
      {
        "word": "told",
        "trans": "сказал (кому-то)",
        "example": "Practice makes progress."
      },
      {
        "word": "asked",
        "trans": "спросил",
        "example": "Practice makes progress."
      },
      {
        "word": "explained",
        "trans": "объяснил",
        "example": "Practice makes progress."
      },
      {
        "word": "claimed",
        "trans": "утверждал",
        "example": "Practice makes progress."
      },
      {
        "word": "admitted",
        "trans": "признал",
        "example": "Practice makes progress."
      },
      {
        "word": "refused",
        "trans": "отказался",
        "example": "Practice makes progress."
      },
      {
        "word": "promised",
        "trans": "пообещал",
        "example": "Practice makes progress."
      },
      {
        "word": "warned",
        "trans": "предупредил",
        "example": "Practice makes progress."
      },
      {
        "word": "suggested",
        "trans": "предложил",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She said she ___ tired.",
        "options": [
          "was",
          "is"
        ],
        "answer": "was"
      },
      {
        "sentence": "He told me ___ wait.",
        "options": [
          "to",
          "for"
        ],
        "answer": "to"
      }
    ],
    "theory": {
      "intro": "Передаём чужие слова: сдвиг времён и изменение местоимений.",
      "reading": "**Косвенная речь** — Передаём чужие слова: сдвиг времён и изменение местоимений.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### Утверждения\nSay/tell + (that) + сдвиг назад: Present→Past, Past→Past Perfect, will→would.\n\n*Пример:* He said (that) he was tired.\n\n### Вопросы и приказы\nAsk + if/whether или wh-word. Tell/ask + to + V: She told me to wait.\n\n*Пример:* She asked if I was ready.\n\n### Формулы\n- `said (that) + past tense`\n- `told + person + (that)`\n- `asked + if/wh-word + past`\n\n### Типичная ошибка\n❌ He said me that he was busy.\n✅ He told me that he was busy.",
      "keyPoints": [
        "Утверждения: Say/tell + (that) + сдвиг назад: Present→Past, Past→Past Perfect, will→would.",
        "Вопросы и приказы: Ask + if/whether или wh-word. Tell/ask + to + V: She told me to wait.",
        "Запомни формулы: said (that) + past tense; told + person + (that); asked + if/wh-word + past",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «said»?",
        "options": [
          "объяснил",
          "сказал",
          "пообещал",
          "предупредил"
        ],
        "answer": "сказал"
      },
      {
        "question": "What is «told»?",
        "options": [
          "сказал (кому-то)",
          "отказался",
          "утверждал",
          "сказал"
        ],
        "answer": "сказал (кому-то)"
      },
      {
        "question": "What is «asked»?",
        "options": [
          "спросил",
          "отказался",
          "предложил",
          "утверждал"
        ],
        "answer": "спросил"
      },
      {
        "question": "What is «explained»?",
        "options": [
          "утверждал",
          "сказал",
          "пообещал",
          "объяснил"
        ],
        "answer": "объяснил"
      },
      {
        "question": "What is «claimed»?",
        "options": [
          "предложил",
          "утверждал",
          "предупредил",
          "пообещал"
        ],
        "answer": "утверждал"
      },
      {
        "type": "gap",
        "sentence": "The word «признал» in English is ___.",
        "answer": "admitted",
        "hint": "a…"
      },
      {
        "type": "gap",
        "sentence": "The word «отказался» in English is ___.",
        "answer": "refused",
        "hint": "r…"
      },
      {
        "type": "gap",
        "sentence": "The word «пообещал» in English is ___.",
        "answer": "promised",
        "hint": "p…"
      }
    ]
  },
  {
    "id": 39,
    "level": "B1",
    "title": "Relative Clauses",
    "titleRu": "Относительные придаточные",
    "topic": "who, which, that, where",
    "description": "Описываем людей и предметы с помощью who, which, that, where.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "Do you know anyone who speaks Chinese?",
        "keywords": [
          "who",
          "which",
          "that",
          "where",
          "whose",
          "defining",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The woman who lives next door is a doctor."
      },
      {
        "prompt": "What's the book which you recommended?",
        "keywords": [
          "who",
          "which",
          "that",
          "where",
          "whose",
          "defining",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "London, where I was born, is beautiful."
      },
      {
        "prompt": "Is there a café where we can sit?",
        "keywords": [
          "who",
          "which",
          "that",
          "where",
          "whose",
          "defining",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The woman who lives next door is a doctor."
      }
    ],
    "vocab": [
      {
        "en": "who",
        "ru": "который (люди)"
      },
      {
        "en": "which",
        "ru": "который (вещи)"
      },
      {
        "en": "that",
        "ru": "который (универс.)"
      },
      {
        "en": "where",
        "ru": "где"
      },
      {
        "en": "whose",
        "ru": "чей"
      },
      {
        "en": "defining",
        "ru": "определяющий"
      },
      {
        "en": "non-defining",
        "ru": "неопределяющий"
      },
      {
        "en": "clause",
        "ru": "придаточное"
      },
      {
        "en": "omit",
        "ru": "опускать"
      },
      {
        "en": "relative",
        "ru": "относительный"
      }
    ],
    "grammar": {
      "title": "Relative Clauses",
      "blocks": [
        {
          "title": "Who / Which / That",
          "desc": "Who — для людей. Which — для вещей. That — для обоих. Можно опустить that в объектной позиции.",
          "example": "The woman who lives next door is a doctor."
        },
        {
          "title": "Where / Whose",
          "desc": "Where — для мест. Whose — чей. Non-defining: запятые, нельзя that, нельзя опускать.",
          "example": "London, where I was born, is beautiful."
        }
      ],
      "formulas": [
        "person + who/that + clause",
        "thing + which/that + clause",
        "place + where + clause"
      ],
      "extraExamples": [
        {
          "label": "Defining",
          "items": [
            "The film that we saw was great.",
            "People who exercise live longer."
          ]
        },
        {
          "label": "Non-defining",
          "items": [
            "My brother, who is a lawyer, lives abroad."
          ]
        }
      ],
      "mistake": {
        "wrong": "The man which called is my uncle.",
        "right": "The man who called is my uncle."
      }
    },
    "quiz": [
      {
        "sentence": "The man ___ called is my uncle.",
        "options": [
          "who",
          "which"
        ],
        "answer": "who"
      },
      {
        "sentence": "The book ___ I read was great.",
        "options": [
          "which",
          "who"
        ],
        "answer": "which"
      },
      {
        "sentence": "This is the town ___ I grew up.",
        "options": [
          "where",
          "which"
        ],
        "answer": "where"
      },
      {
        "sentence": "The woman ___ car was stolen called the police.",
        "options": [
          "whose",
          "who's"
        ],
        "answer": "whose"
      },
      {
        "sentence": "My sister, ___ lives in Paris, is visiting.",
        "options": [
          "who",
          "that"
        ],
        "answer": "who"
      }
    ],
    "pronunciation": [
      {
        "phrase": "The man who called",
        "ipa": "/ðə mæn huː kɔːld/",
        "tip": "Who — слабое /huː/",
        "expected": "The man who called"
      },
      {
        "phrase": "The book which I read",
        "ipa": "/ðə bʊk wɪtʃ/",
        "tip": "Which — не путай с witch",
        "expected": "The book which I read"
      },
      {
        "phrase": "the town where I grew up",
        "ipa": "/weə aɪ ɡruː ʌp/",
        "tip": "Grew up — фразовый глагол",
        "expected": "the town where I grew up"
      },
      {
        "phrase": "whose car",
        "ipa": "/huːz kɑː/",
        "tip": "Whose — /huːz/, не who's",
        "expected": "whose car"
      },
      {
        "phrase": "My sister, who lives in Paris",
        "ipa": "/ˈsɪstə huː lɪvz/",
        "tip": "Пауза на запятой",
        "expected": "My sister, who lives in Paris"
      }
    ],
    "culture": {
      "watch": [
        "Documentaries — descriptive clauses"
      ],
      "listen": [
        "The Beatles — Eleanor Rigby"
      ],
      "read": [
        "Biographies with relative clauses"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "Who/which/that is used?",
        "keywords": [
          "who",
          "which",
          "that",
          "where",
          "whose",
          "defining",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The woman who lives next door is a doctor."
      },
      {
        "prompt": "Is the clause defining or non-defining?",
        "keywords": [
          "who",
          "which",
          "that",
          "where",
          "whose",
          "defining",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "London, where I was born, is beautiful."
      },
      {
        "prompt": "Where is the place described?",
        "keywords": [
          "who",
          "which",
          "that",
          "where",
          "whose",
          "defining",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The woman who lives next door is a doctor."
      },
      {
        "prompt": "Whose possession is mentioned?",
        "keywords": [
          "who",
          "which",
          "that",
          "where",
          "whose",
          "defining",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "London, where I was born, is beautiful."
      },
      {
        "prompt": "Can that be omitted?",
        "keywords": [
          "who",
          "which",
          "that",
          "where",
          "whose",
          "defining",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The woman who lives next door is a doctor."
      }
    ],
    "speaking": [
      {
        "task": "Опиши 3 людей с who.",
        "keywords": [
          "who",
          "which",
          "that",
          "where",
          "whose",
          "defining",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The woman who lives next door is a doctor.",
        "useSpeech": true
      },
      {
        "task": "Опиши 3 места с where.",
        "keywords": [
          "who",
          "which",
          "that",
          "where",
          "whose",
          "defining",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "London, where I was born, is beautiful.",
        "useSpeech": true
      },
      {
        "task": "Напиши 2 non-defining clauses о семье.",
        "keywords": [
          "who",
          "which",
          "that",
          "where",
          "whose",
          "defining",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The woman who lives next door is a doctor.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "who",
        "trans": "который (люди)",
        "example": "I use 'who' every day."
      },
      {
        "word": "which",
        "trans": "который (вещи)",
        "example": "I use 'which' every day."
      },
      {
        "word": "that",
        "trans": "который (универс.)",
        "example": "I use 'that' every day."
      },
      {
        "word": "where",
        "trans": "где",
        "example": "I use 'where' every day."
      },
      {
        "word": "whose",
        "trans": "чей",
        "example": "I use 'whose' every day."
      },
      {
        "word": "defining",
        "trans": "определяющий",
        "example": "I use 'defining' every day."
      },
      {
        "word": "non-defining",
        "trans": "неопределяющий",
        "example": "I use 'non-defining' every day."
      },
      {
        "word": "clause",
        "trans": "придаточное",
        "example": "I use 'clause' every day."
      },
      {
        "word": "omit",
        "trans": "опускать",
        "example": "I use 'omit' every day."
      },
      {
        "word": "relative",
        "trans": "относительный",
        "example": "I use 'relative' every day."
      },
      {
        "word": "who",
        "trans": "который (люди)",
        "example": "Practice makes progress."
      },
      {
        "word": "which",
        "trans": "который (вещи)",
        "example": "Practice makes progress."
      },
      {
        "word": "that",
        "trans": "который (универс.)",
        "example": "Practice makes progress."
      },
      {
        "word": "where",
        "trans": "где",
        "example": "Practice makes progress."
      },
      {
        "word": "whose",
        "trans": "чей",
        "example": "Practice makes progress."
      },
      {
        "word": "defining",
        "trans": "определяющий",
        "example": "Practice makes progress."
      },
      {
        "word": "non-defining",
        "trans": "неопределяющий",
        "example": "Practice makes progress."
      },
      {
        "word": "clause",
        "trans": "придаточное",
        "example": "Practice makes progress."
      },
      {
        "word": "omit",
        "trans": "опускать",
        "example": "Practice makes progress."
      },
      {
        "word": "relative",
        "trans": "относительный",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "The man ___ called is my uncle.",
        "options": [
          "who",
          "which"
        ],
        "answer": "who"
      },
      {
        "sentence": "The book ___ I read was great.",
        "options": [
          "which",
          "who"
        ],
        "answer": "which"
      }
    ],
    "theory": {
      "intro": "Описываем людей и предметы с помощью who, which, that, where.",
      "reading": "**Относительные придаточные** — Описываем людей и предметы с помощью who, which, that, where.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### Who / Which / That\nWho — для людей. Which — для вещей. That — для обоих. Можно опустить that в объектной позиции.\n\n*Пример:* The woman who lives next door is a doctor.\n\n### Where / Whose\nWhere — для мест. Whose — чей. Non-defining: запятые, нельзя that, нельзя опускать.\n\n*Пример:* London, where I was born, is beautiful.\n\n### Формулы\n- `person + who/that + clause`\n- `thing + which/that + clause`\n- `place + where + clause`\n\n### Типичная ошибка\n❌ The man which called is my uncle.\n✅ The man who called is my uncle.",
      "keyPoints": [
        "Who / Which / That: Who — для людей. Which — для вещей. That — для обоих. Можно опустить that в объе",
        "Where / Whose: Where — для мест. Whose — чей. Non-defining: запятые, нельзя that, нельзя опуска",
        "Запомни формулы: person + who/that + clause; thing + which/that + clause; place + where + clause",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «who»?",
        "options": [
          "который (люди)",
          "где",
          "относительный",
          "опускать"
        ],
        "answer": "который (люди)"
      },
      {
        "question": "What is «which»?",
        "options": [
          "который (вещи)",
          "где",
          "определяющий",
          "неопределяющий"
        ],
        "answer": "который (вещи)"
      },
      {
        "question": "What is «that»?",
        "options": [
          "чей",
          "который (универс.)",
          "который (вещи)",
          "относительный"
        ],
        "answer": "который (универс.)"
      },
      {
        "question": "What is «where»?",
        "options": [
          "относительный",
          "который (универс.)",
          "неопределяющий",
          "где"
        ],
        "answer": "где"
      },
      {
        "question": "What is «whose»?",
        "options": [
          "который (универс.)",
          "чей",
          "который (вещи)",
          "определяющий"
        ],
        "answer": "чей"
      },
      {
        "type": "gap",
        "sentence": "The word «определяющий» in English is ___.",
        "answer": "defining",
        "hint": "d…"
      },
      {
        "type": "gap",
        "sentence": "The word «неопределяющий» in English is ___.",
        "answer": "non-defining",
        "hint": "n…"
      },
      {
        "type": "gap",
        "sentence": "The word «придаточное» in English is ___.",
        "answer": "clause",
        "hint": "c…"
      }
    ]
  },
  {
    "id": 40,
    "level": "B1",
    "title": "Phrasal Verbs 1",
    "titleRu": "Фразовые глаголы 1",
    "topic": "get up, look for, turn on",
    "description": "Самые частые фразовые глаголы: отделяемые и неотделяемые.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What time do you get up?",
        "keywords": [
          "get up",
          "look for",
          "turn on",
          "turn off",
          "give up",
          "find out",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I need to find out the truth."
      },
      {
        "prompt": "Have you looked for your keys?",
        "keywords": [
          "get up",
          "look for",
          "turn on",
          "turn off",
          "give up",
          "find out",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She picked up the phone."
      },
      {
        "prompt": "Can you turn on the light?",
        "keywords": [
          "get up",
          "look for",
          "turn on",
          "turn off",
          "give up",
          "find out",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I need to find out the truth."
      }
    ],
    "vocab": [
      {
        "en": "get up",
        "ru": "вставать"
      },
      {
        "en": "look for",
        "ru": "искать"
      },
      {
        "en": "turn on",
        "ru": "включать"
      },
      {
        "en": "turn off",
        "ru": "выключать"
      },
      {
        "en": "give up",
        "ru": "сдаваться"
      },
      {
        "en": "find out",
        "ru": "выяснять"
      },
      {
        "en": "pick up",
        "ru": "подбирать, забирать"
      },
      {
        "en": "put on",
        "ru": "надевать"
      },
      {
        "en": "take off",
        "ru": "снимать"
      },
      {
        "en": "wake up",
        "ru": "просыпаться"
      }
    ],
    "grammar": {
      "title": "Phrasal Verbs",
      "blocks": [
        {
          "title": "Структура",
          "desc": "Глагол + частица (up, off, on). Значение часто отличается от основного глагол.",
          "example": "I need to find out the truth."
        },
        {
          "title": "Отделяемые",
          "desc": "С местоимением частица отделяется: turn it on. Без: turn on the light.",
          "example": "She picked up the phone."
        }
      ],
      "formulas": [
        "verb + particle = new meaning",
        "separable: turn the light on / turn on the light"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "Don't give up!",
            "He woke up late."
          ]
        },
        {
          "label": "Separable",
          "items": [
            "Turn it off.",
            "Put your coat on."
          ]
        }
      ],
      "mistake": {
        "wrong": "I looked my keys for.",
        "right": "I looked for my keys."
      }
    },
    "quiz": [
      {
        "sentence": "I ___ at seven every day.",
        "options": [
          "get up",
          "get on"
        ],
        "answer": "get up"
      },
      {
        "sentence": "She is ___ her glasses.",
        "options": [
          "looking for",
          "looking at"
        ],
        "answer": "looking for"
      },
      {
        "sentence": "Please ___ the TV ___.",
        "options": [
          "turn / off",
          "turn / out"
        ],
        "answer": "turn / off"
      },
      {
        "sentence": "Don't ___ !",
        "options": [
          "give up",
          "give in"
        ],
        "answer": "give up"
      },
      {
        "sentence": "I need to ___ the answer.",
        "options": [
          "find out",
          "find off"
        ],
        "answer": "find out"
      }
    ],
    "pronunciation": [
      {
        "phrase": "get up",
        "ipa": "/ɡet ʌp/",
        "tip": "Get up — связный phrasal",
        "expected": "get up"
      },
      {
        "phrase": "look for",
        "ipa": "/lʊk fɔː/",
        "tip": "For — слабое",
        "expected": "look for"
      },
      {
        "phrase": "turn it on",
        "ipa": "/tɜːn ɪt ɒn/",
        "tip": "Turn it on — разделяемый",
        "expected": "turn it on"
      },
      {
        "phrase": "give up",
        "ipa": "/ɡɪv ʌp/",
        "tip": "Give up — stress on give",
        "expected": "give up"
      },
      {
        "phrase": "find out",
        "ipa": "/faɪnd aʊt/",
        "tip": "Find out — d + out связно",
        "expected": "find out"
      }
    ],
    "culture": {
      "watch": [
        "Sitcoms — everyday phrasal verbs"
      ],
      "listen": [
        "Bon Jovi — It's My Life"
      ],
      "read": [
        "Phrasal verb lists B1"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What phrasal verb is used?",
        "keywords": [
          "get up",
          "look for",
          "turn on",
          "turn off",
          "give up",
          "find out",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I need to find out the truth."
      },
      {
        "prompt": "Is it separable?",
        "keywords": [
          "get up",
          "look for",
          "turn on",
          "turn off",
          "give up",
          "find out",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She picked up the phone."
      },
      {
        "prompt": "What does it mean in context?",
        "keywords": [
          "get up",
          "look for",
          "turn on",
          "turn off",
          "give up",
          "find out",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I need to find out the truth."
      },
      {
        "prompt": "Can you replace with a synonym?",
        "keywords": [
          "get up",
          "look for",
          "turn on",
          "turn off",
          "give up",
          "find out",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She picked up the phone."
      },
      {
        "prompt": "Which particle changes the meaning?",
        "keywords": [
          "get up",
          "look for",
          "turn on",
          "turn off",
          "give up",
          "find out",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I need to find out the truth."
      }
    ],
    "speaking": [
      {
        "task": "Расскажи о своём утре с phrasal verbs.",
        "keywords": [
          "get up",
          "look for",
          "turn on",
          "turn off",
          "give up",
          "find out",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I need to find out the truth.",
        "useSpeech": true
      },
      {
        "task": "Составь 5 предложений с look for, give up, find out.",
        "keywords": [
          "get up",
          "look for",
          "turn on",
          "turn off",
          "give up",
          "find out",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She picked up the phone.",
        "useSpeech": true
      },
      {
        "task": "Объясни разницу turn on / turn off.",
        "keywords": [
          "get up",
          "look for",
          "turn on",
          "turn off",
          "give up",
          "find out",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I need to find out the truth.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "get up",
        "trans": "вставать",
        "example": "I use 'get up' every day."
      },
      {
        "word": "look for",
        "trans": "искать",
        "example": "I use 'look for' every day."
      },
      {
        "word": "turn on",
        "trans": "включать",
        "example": "I use 'turn on' every day."
      },
      {
        "word": "turn off",
        "trans": "выключать",
        "example": "I use 'turn off' every day."
      },
      {
        "word": "give up",
        "trans": "сдаваться",
        "example": "I use 'give up' every day."
      },
      {
        "word": "find out",
        "trans": "выяснять",
        "example": "I use 'find out' every day."
      },
      {
        "word": "pick up",
        "trans": "подбирать, забирать",
        "example": "I use 'pick up' every day."
      },
      {
        "word": "put on",
        "trans": "надевать",
        "example": "I use 'put on' every day."
      },
      {
        "word": "take off",
        "trans": "снимать",
        "example": "I use 'take off' every day."
      },
      {
        "word": "wake up",
        "trans": "просыпаться",
        "example": "I use 'wake up' every day."
      },
      {
        "word": "get up",
        "trans": "вставать",
        "example": "Practice makes progress."
      },
      {
        "word": "look for",
        "trans": "искать",
        "example": "Practice makes progress."
      },
      {
        "word": "turn on",
        "trans": "включать",
        "example": "Practice makes progress."
      },
      {
        "word": "turn off",
        "trans": "выключать",
        "example": "Practice makes progress."
      },
      {
        "word": "give up",
        "trans": "сдаваться",
        "example": "Practice makes progress."
      },
      {
        "word": "find out",
        "trans": "выяснять",
        "example": "Practice makes progress."
      },
      {
        "word": "pick up",
        "trans": "подбирать, забирать",
        "example": "Practice makes progress."
      },
      {
        "word": "put on",
        "trans": "надевать",
        "example": "Practice makes progress."
      },
      {
        "word": "take off",
        "trans": "снимать",
        "example": "Practice makes progress."
      },
      {
        "word": "wake up",
        "trans": "просыпаться",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "I ___ at seven every day.",
        "options": [
          "get up",
          "get on"
        ],
        "answer": "get up"
      },
      {
        "sentence": "She is ___ her glasses.",
        "options": [
          "looking for",
          "looking at"
        ],
        "answer": "looking for"
      }
    ],
    "theory": {
      "intro": "Самые частые фразовые глаголы: отделяемые и неотделяемые.",
      "reading": "**Фразовые глаголы 1** — Самые частые фразовые глаголы: отделяемые и неотделяемые.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### Структура\nГлагол + частица (up, off, on). Значение часто отличается от основного глагол.\n\n*Пример:* I need to find out the truth.\n\n### Отделяемые\nС местоимением частица отделяется: turn it on. Без: turn on the light.\n\n*Пример:* She picked up the phone.\n\n### Формулы\n- `verb + particle = new meaning`\n- `separable: turn the light on / turn on the light`\n\n### Типичная ошибка\n❌ I looked my keys for.\n✅ I looked for my keys.",
      "keyPoints": [
        "Структура: Глагол + частица (up, off, on). Значение часто отличается от основного глагол.",
        "Отделяемые: С местоимением частица отделяется: turn it on. Без: turn on the light.",
        "Запомни формулы: verb + particle = new meaning; separable: turn the light on / turn on the light",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «get up»?",
        "options": [
          "снимать",
          "подбирать, забирать",
          "вставать",
          "выключать"
        ],
        "answer": "вставать"
      },
      {
        "question": "What is «look for»?",
        "options": [
          "искать",
          "выключать",
          "просыпаться",
          "надевать"
        ],
        "answer": "искать"
      },
      {
        "question": "What is «turn on»?",
        "options": [
          "включать",
          "вставать",
          "просыпаться",
          "сдаваться"
        ],
        "answer": "включать"
      },
      {
        "question": "What is «turn off»?",
        "options": [
          "выключать",
          "надевать",
          "снимать",
          "подбирать, забирать"
        ],
        "answer": "выключать"
      },
      {
        "question": "What is «give up»?",
        "options": [
          "сдаваться",
          "искать",
          "просыпаться",
          "надевать"
        ],
        "answer": "сдаваться"
      },
      {
        "type": "gap",
        "sentence": "The word «выяснять» in English is ___.",
        "answer": "find out",
        "hint": "f…"
      },
      {
        "type": "gap",
        "sentence": "The word «подбирать, забирать» in English is ___.",
        "answer": "pick up",
        "hint": "p…"
      },
      {
        "type": "gap",
        "sentence": "The word «надевать» in English is ___.",
        "answer": "put on",
        "hint": "p…"
      }
    ]
  },
  {
    "level": "B1",
    "title": "Second Conditional",
    "titleRu": "Условные 2 типа",
    "topic": "If I were...",
    "description": "Нереальные условия.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about if i were...?",
        "keywords": [
          "would",
          "if",
          "rich",
          "famous",
          "change",
          "imagine",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If I were you, I would study more."
      },
      {
        "prompt": "Give an example with would.",
        "keywords": [
          "would",
          "if",
          "rich",
          "famous",
          "change",
          "imagine",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If I had money, I would travel."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "would",
          "if",
          "rich",
          "famous",
          "change",
          "imagine",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If I were you, I would study more."
      }
    ],
    "vocab": [
      {
        "en": "would",
        "ru": "бы"
      },
      {
        "en": "if",
        "ru": "если"
      },
      {
        "en": "rich",
        "ru": "богатый"
      },
      {
        "en": "famous",
        "ru": "известный"
      },
      {
        "en": "change",
        "ru": "менять"
      },
      {
        "en": "imagine",
        "ru": "представлять"
      },
      {
        "en": "dream",
        "ru": "мечтать"
      },
      {
        "en": "advice",
        "ru": "совет"
      },
      {
        "en": "situation",
        "ru": "ситуация"
      },
      {
        "en": "probably",
        "ru": "вероятно"
      }
    ],
    "grammar": {
      "title": "Second Conditional",
      "blocks": [
        {
          "title": "If I were...",
          "desc": "Нереальные условия.",
          "example": "If I were you, I would study more."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "If I had money, I would travel."
        }
      ],
      "formulas": [
        "If I were you, I would study more.",
        "If I had money, I would travel."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "If I were you, I would study more.",
            "If I had money, I would travel."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "If I were you, I would study more.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "If I were you, I would study more."
      },
      {
        "phrase": "If I had money, I would travel.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "If I had money, I would travel."
      },
      {
        "phrase": "What do you know about if i were...?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about if i were...?"
      },
      {
        "phrase": "would is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "would is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B1 Second Conditional"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B1 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about would?",
        "keywords": [
          "would",
          "if",
          "rich",
          "famous",
          "change",
          "imagine",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I were you, I would study more."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "would",
          "if",
          "rich",
          "famous",
          "change",
          "imagine",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had money, I would travel."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "would",
          "if",
          "rich",
          "famous",
          "change",
          "imagine",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I were you, I would study more."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "would",
          "if",
          "rich",
          "famous",
          "change",
          "imagine",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had money, I would travel."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "would",
          "if",
          "rich",
          "famous",
          "change",
          "imagine",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I were you, I would study more."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about if i were....",
        "keywords": [
          "would",
          "if",
          "rich",
          "famous",
          "change",
          "imagine",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If I were you, I would study more.",
        "useSpeech": true
      },
      {
        "task": "Use if and rich.",
        "keywords": [
          "would",
          "if",
          "rich",
          "famous",
          "change",
          "imagine",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If I had money, I would travel.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "would",
          "if",
          "rich",
          "famous",
          "change",
          "imagine",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If I were you, I would study more.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "would",
        "trans": "бы",
        "example": "I use 'would' every day."
      },
      {
        "word": "if",
        "trans": "если",
        "example": "I use 'if' every day."
      },
      {
        "word": "rich",
        "trans": "богатый",
        "example": "I use 'rich' every day."
      },
      {
        "word": "famous",
        "trans": "известный",
        "example": "I use 'famous' every day."
      },
      {
        "word": "change",
        "trans": "менять",
        "example": "I use 'change' every day."
      },
      {
        "word": "imagine",
        "trans": "представлять",
        "example": "I use 'imagine' every day."
      },
      {
        "word": "dream",
        "trans": "мечтать",
        "example": "I use 'dream' every day."
      },
      {
        "word": "advice",
        "trans": "совет",
        "example": "I use 'advice' every day."
      },
      {
        "word": "situation",
        "trans": "ситуация",
        "example": "I use 'situation' every day."
      },
      {
        "word": "probably",
        "trans": "вероятно",
        "example": "I use 'probably' every day."
      },
      {
        "word": "would",
        "trans": "бы",
        "example": "Practice makes progress."
      },
      {
        "word": "if",
        "trans": "если",
        "example": "Practice makes progress."
      },
      {
        "word": "rich",
        "trans": "богатый",
        "example": "Practice makes progress."
      },
      {
        "word": "famous",
        "trans": "известный",
        "example": "Practice makes progress."
      },
      {
        "word": "change",
        "trans": "менять",
        "example": "Practice makes progress."
      },
      {
        "word": "imagine",
        "trans": "представлять",
        "example": "Practice makes progress."
      },
      {
        "word": "dream",
        "trans": "мечтать",
        "example": "Practice makes progress."
      },
      {
        "word": "advice",
        "trans": "совет",
        "example": "Practice makes progress."
      },
      {
        "word": "situation",
        "trans": "ситуация",
        "example": "Practice makes progress."
      },
      {
        "word": "probably",
        "trans": "вероятно",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 41,
    "theory": {
      "intro": "Нереальные условия.",
      "reading": "**Условные 2 типа** — Нереальные условия.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### If I were...\nНереальные условия.\n\n*Пример:* If I were you, I would study more.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* If I had money, I would travel.\n\n### Формулы\n- `If I were you, I would study more.`\n- `If I had money, I would travel.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "If I were...: Нереальные условия.",
        "Практика: Используй в речи.",
        "Запомни формулы: If I were you, I would study more.; If I had money, I would travel.",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «would»?",
        "options": [
          "совет",
          "менять",
          "известный",
          "бы"
        ],
        "answer": "бы"
      },
      {
        "question": "What is «if»?",
        "options": [
          "вероятно",
          "если",
          "менять",
          "известный"
        ],
        "answer": "если"
      },
      {
        "question": "What is «rich»?",
        "options": [
          "совет",
          "ситуация",
          "богатый",
          "вероятно"
        ],
        "answer": "богатый"
      },
      {
        "question": "What is «famous»?",
        "options": [
          "ситуация",
          "если",
          "богатый",
          "известный"
        ],
        "answer": "известный"
      },
      {
        "question": "What is «change»?",
        "options": [
          "ситуация",
          "мечтать",
          "менять",
          "бы"
        ],
        "answer": "менять"
      },
      {
        "type": "gap",
        "sentence": "The word «представлять» in English is ___.",
        "answer": "imagine",
        "hint": "i…"
      },
      {
        "type": "gap",
        "sentence": "The word «мечтать» in English is ___.",
        "answer": "dream",
        "hint": "d…"
      },
      {
        "type": "gap",
        "sentence": "The word «совет» in English is ___.",
        "answer": "advice",
        "hint": "a…"
      }
    ]
  },
  {
    "level": "B1",
    "title": "Third Conditional",
    "titleRu": "Условные 3 типа",
    "topic": "If I had known",
    "description": "Сожаления о прошлом.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about if i had known?",
        "keywords": [
          "regret",
          "known",
          "would have",
          "missed",
          "different",
          "luck",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If I had studied, I would have passed."
      },
      {
        "prompt": "Give an example with regret.",
        "keywords": [
          "regret",
          "known",
          "would have",
          "missed",
          "different",
          "luck",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She would have come if she had known."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "regret",
          "known",
          "would have",
          "missed",
          "different",
          "luck",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If I had studied, I would have passed."
      }
    ],
    "vocab": [
      {
        "en": "regret",
        "ru": "сожалеть"
      },
      {
        "en": "known",
        "ru": "знал бы"
      },
      {
        "en": "would have",
        "ru": "бы сделал"
      },
      {
        "en": "missed",
        "ru": "пропустил"
      },
      {
        "en": "different",
        "ru": "другой"
      },
      {
        "en": "luck",
        "ru": "удача"
      },
      {
        "en": "mistake",
        "ru": "ошибка"
      },
      {
        "en": "earlier",
        "ru": "раньше"
      },
      {
        "en": "result",
        "ru": "результат"
      },
      {
        "en": "past",
        "ru": "прошлое"
      }
    ],
    "grammar": {
      "title": "Third Conditional",
      "blocks": [
        {
          "title": "If I had known",
          "desc": "Сожаления о прошлом.",
          "example": "If I had studied, I would have passed."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "She would have come if she had known."
        }
      ],
      "formulas": [
        "If I had studied, I would have passed.",
        "She would have come if she had known."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "If I had studied, I would have passed.",
            "She would have come if she had known."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "If I had studied, I would have passed.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "If I had studied, I would have passed."
      },
      {
        "phrase": "She would have come if she had known.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "She would have come if she had known."
      },
      {
        "phrase": "What do you know about if i had known?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about if i had known?"
      },
      {
        "phrase": "regret is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "regret is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B1 Third Conditional"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B1 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about regret?",
        "keywords": [
          "regret",
          "known",
          "would have",
          "missed",
          "different",
          "luck",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had studied, I would have passed."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "regret",
          "known",
          "would have",
          "missed",
          "different",
          "luck",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She would have come if she had known."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "regret",
          "known",
          "would have",
          "missed",
          "different",
          "luck",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had studied, I would have passed."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "regret",
          "known",
          "would have",
          "missed",
          "different",
          "luck",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She would have come if she had known."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "regret",
          "known",
          "would have",
          "missed",
          "different",
          "luck",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had studied, I would have passed."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about if i had known.",
        "keywords": [
          "regret",
          "known",
          "would have",
          "missed",
          "different",
          "luck",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If I had studied, I would have passed.",
        "useSpeech": true
      },
      {
        "task": "Use known and would have.",
        "keywords": [
          "regret",
          "known",
          "would have",
          "missed",
          "different",
          "luck",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She would have come if she had known.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "regret",
          "known",
          "would have",
          "missed",
          "different",
          "luck",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If I had studied, I would have passed.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "regret",
        "trans": "сожалеть",
        "example": "I use 'regret' every day."
      },
      {
        "word": "known",
        "trans": "знал бы",
        "example": "I use 'known' every day."
      },
      {
        "word": "would have",
        "trans": "бы сделал",
        "example": "I use 'would have' every day."
      },
      {
        "word": "missed",
        "trans": "пропустил",
        "example": "I use 'missed' every day."
      },
      {
        "word": "different",
        "trans": "другой",
        "example": "I use 'different' every day."
      },
      {
        "word": "luck",
        "trans": "удача",
        "example": "I use 'luck' every day."
      },
      {
        "word": "mistake",
        "trans": "ошибка",
        "example": "I use 'mistake' every day."
      },
      {
        "word": "earlier",
        "trans": "раньше",
        "example": "I use 'earlier' every day."
      },
      {
        "word": "result",
        "trans": "результат",
        "example": "I use 'result' every day."
      },
      {
        "word": "past",
        "trans": "прошлое",
        "example": "I use 'past' every day."
      },
      {
        "word": "regret",
        "trans": "сожалеть",
        "example": "Practice makes progress."
      },
      {
        "word": "known",
        "trans": "знал бы",
        "example": "Practice makes progress."
      },
      {
        "word": "would have",
        "trans": "бы сделал",
        "example": "Practice makes progress."
      },
      {
        "word": "missed",
        "trans": "пропустил",
        "example": "Practice makes progress."
      },
      {
        "word": "different",
        "trans": "другой",
        "example": "Practice makes progress."
      },
      {
        "word": "luck",
        "trans": "удача",
        "example": "Practice makes progress."
      },
      {
        "word": "mistake",
        "trans": "ошибка",
        "example": "Practice makes progress."
      },
      {
        "word": "earlier",
        "trans": "раньше",
        "example": "Practice makes progress."
      },
      {
        "word": "result",
        "trans": "результат",
        "example": "Practice makes progress."
      },
      {
        "word": "past",
        "trans": "прошлое",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 42,
    "theory": {
      "intro": "Сожаления о прошлом.",
      "reading": "**Условные 3 типа** — Сожаления о прошлом.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### If I had known\nСожаления о прошлом.\n\n*Пример:* If I had studied, I would have passed.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* She would have come if she had known.\n\n### Формулы\n- `If I had studied, I would have passed.`\n- `She would have come if she had known.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "If I had known: Сожаления о прошлом.",
        "Практика: Используй в речи.",
        "Запомни формулы: If I had studied, I would have passed.; She would have come if she had known.",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «regret»?",
        "options": [
          "результат",
          "другой",
          "прошлое",
          "сожалеть"
        ],
        "answer": "сожалеть"
      },
      {
        "question": "What is «known»?",
        "options": [
          "сожалеть",
          "раньше",
          "знал бы",
          "прошлое"
        ],
        "answer": "знал бы"
      },
      {
        "question": "What is «would have»?",
        "options": [
          "знал бы",
          "пропустил",
          "прошлое",
          "бы сделал"
        ],
        "answer": "бы сделал"
      },
      {
        "question": "What is «missed»?",
        "options": [
          "результат",
          "сожалеть",
          "другой",
          "пропустил"
        ],
        "answer": "пропустил"
      },
      {
        "question": "What is «different»?",
        "options": [
          "другой",
          "знал бы",
          "удача",
          "ошибка"
        ],
        "answer": "другой"
      },
      {
        "type": "gap",
        "sentence": "The word «удача» in English is ___.",
        "answer": "luck",
        "hint": "l…"
      },
      {
        "type": "gap",
        "sentence": "The word «ошибка» in English is ___.",
        "answer": "mistake",
        "hint": "m…"
      },
      {
        "type": "gap",
        "sentence": "The word «раньше» in English is ___.",
        "answer": "earlier",
        "hint": "e…"
      }
    ]
  },
  {
    "level": "B1",
    "title": "Wish & If only",
    "titleRu": "Wish / If only",
    "topic": "желания",
    "description": "Wish + past.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about желания?",
        "keywords": [
          "wish",
          "if only",
          "could",
          "were",
          "regret",
          "reality",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I wish I spoke better English."
      },
      {
        "prompt": "Give an example with wish.",
        "keywords": [
          "wish",
          "if only",
          "could",
          "were",
          "regret",
          "reality",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If only I had more time!"
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "wish",
          "if only",
          "could",
          "were",
          "regret",
          "reality",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I wish I spoke better English."
      }
    ],
    "vocab": [
      {
        "en": "wish",
        "ru": "желать"
      },
      {
        "en": "if only",
        "ru": "если бы только"
      },
      {
        "en": "could",
        "ru": "мог бы"
      },
      {
        "en": "were",
        "ru": "был бы"
      },
      {
        "en": "regret",
        "ru": "сожалеть"
      },
      {
        "en": "reality",
        "ru": "реальность"
      },
      {
        "en": "hope",
        "ru": "надеяться"
      },
      {
        "en": "change",
        "ru": "изменить"
      },
      {
        "en": "present",
        "ru": "настоящее"
      },
      {
        "en": "past",
        "ru": "прошлое"
      }
    ],
    "grammar": {
      "title": "Wish & If only",
      "blocks": [
        {
          "title": "желания",
          "desc": "Wish + past.",
          "example": "I wish I spoke better English."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "If only I had more time!"
        }
      ],
      "formulas": [
        "I wish I spoke better English.",
        "If only I had more time!"
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "I wish I spoke better English.",
            "If only I had more time!"
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I wish I spoke better English.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I wish I spoke better English."
      },
      {
        "phrase": "If only I had more time!",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "If only I had more time!"
      },
      {
        "phrase": "What do you know about желания?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about желания?"
      },
      {
        "phrase": "wish is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "wish is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B1 Wish & If only"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B1 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about wish?",
        "keywords": [
          "wish",
          "if only",
          "could",
          "were",
          "regret",
          "reality",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I wish I spoke better English."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "wish",
          "if only",
          "could",
          "were",
          "regret",
          "reality",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If only I had more time!"
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "wish",
          "if only",
          "could",
          "were",
          "regret",
          "reality",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I wish I spoke better English."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "wish",
          "if only",
          "could",
          "were",
          "regret",
          "reality",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If only I had more time!"
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "wish",
          "if only",
          "could",
          "were",
          "regret",
          "reality",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I wish I spoke better English."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about желания.",
        "keywords": [
          "wish",
          "if only",
          "could",
          "were",
          "regret",
          "reality",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I wish I spoke better English.",
        "useSpeech": true
      },
      {
        "task": "Use if only and could.",
        "keywords": [
          "wish",
          "if only",
          "could",
          "were",
          "regret",
          "reality",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If only I had more time!",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "wish",
          "if only",
          "could",
          "were",
          "regret",
          "reality",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I wish I spoke better English.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "wish",
        "trans": "желать",
        "example": "I use 'wish' every day."
      },
      {
        "word": "if only",
        "trans": "если бы только",
        "example": "I use 'if only' every day."
      },
      {
        "word": "could",
        "trans": "мог бы",
        "example": "I use 'could' every day."
      },
      {
        "word": "were",
        "trans": "был бы",
        "example": "I use 'were' every day."
      },
      {
        "word": "regret",
        "trans": "сожалеть",
        "example": "I use 'regret' every day."
      },
      {
        "word": "reality",
        "trans": "реальность",
        "example": "I use 'reality' every day."
      },
      {
        "word": "hope",
        "trans": "надеяться",
        "example": "I use 'hope' every day."
      },
      {
        "word": "change",
        "trans": "изменить",
        "example": "I use 'change' every day."
      },
      {
        "word": "present",
        "trans": "настоящее",
        "example": "I use 'present' every day."
      },
      {
        "word": "past",
        "trans": "прошлое",
        "example": "I use 'past' every day."
      },
      {
        "word": "wish",
        "trans": "желать",
        "example": "Practice makes progress."
      },
      {
        "word": "if only",
        "trans": "если бы только",
        "example": "Practice makes progress."
      },
      {
        "word": "could",
        "trans": "мог бы",
        "example": "Practice makes progress."
      },
      {
        "word": "were",
        "trans": "был бы",
        "example": "Practice makes progress."
      },
      {
        "word": "regret",
        "trans": "сожалеть",
        "example": "Practice makes progress."
      },
      {
        "word": "reality",
        "trans": "реальность",
        "example": "Practice makes progress."
      },
      {
        "word": "hope",
        "trans": "надеяться",
        "example": "Practice makes progress."
      },
      {
        "word": "change",
        "trans": "изменить",
        "example": "Practice makes progress."
      },
      {
        "word": "present",
        "trans": "настоящее",
        "example": "Practice makes progress."
      },
      {
        "word": "past",
        "trans": "прошлое",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 43,
    "theory": {
      "intro": "Wish + past.",
      "reading": "**Wish / If only** — Wish + past.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### желания\nWish + past.\n\n*Пример:* I wish I spoke better English.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* If only I had more time!\n\n### Формулы\n- `I wish I spoke better English.`\n- `If only I had more time!`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "желания: Wish + past.",
        "Практика: Используй в речи.",
        "Запомни формулы: I wish I spoke better English.; If only I had more time!",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «wish»?",
        "options": [
          "желать",
          "прошлое",
          "реальность",
          "сожалеть"
        ],
        "answer": "желать"
      },
      {
        "question": "What is «if only»?",
        "options": [
          "если бы только",
          "настоящее",
          "желать",
          "сожалеть"
        ],
        "answer": "если бы только"
      },
      {
        "question": "What is «could»?",
        "options": [
          "сожалеть",
          "был бы",
          "настоящее",
          "мог бы"
        ],
        "answer": "мог бы"
      },
      {
        "question": "What is «were»?",
        "options": [
          "сожалеть",
          "был бы",
          "реальность",
          "изменить"
        ],
        "answer": "был бы"
      },
      {
        "question": "What is «regret»?",
        "options": [
          "реальность",
          "сожалеть",
          "прошлое",
          "изменить"
        ],
        "answer": "сожалеть"
      },
      {
        "type": "gap",
        "sentence": "The word «реальность» in English is ___.",
        "answer": "reality",
        "hint": "r…"
      },
      {
        "type": "gap",
        "sentence": "The word «надеяться» in English is ___.",
        "answer": "hope",
        "hint": "h…"
      },
      {
        "type": "gap",
        "sentence": "The word «изменить» in English is ___.",
        "answer": "change",
        "hint": "c…"
      }
    ]
  },
  {
    "level": "B1",
    "title": "Causative",
    "titleRu": "Каузатив",
    "topic": "have done",
    "description": "Заказ услуг.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about have done?",
        "keywords": [
          "have",
          "get",
          "done",
          "repair",
          "cut",
          "clean",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I had my car repaired."
      },
      {
        "prompt": "Give an example with have.",
        "keywords": [
          "have",
          "get",
          "done",
          "repair",
          "cut",
          "clean",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She got her hair cut."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "have",
          "get",
          "done",
          "repair",
          "cut",
          "clean",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I had my car repaired."
      }
    ],
    "vocab": [
      {
        "en": "have",
        "ru": "заказывать"
      },
      {
        "en": "get",
        "ru": "добиваться"
      },
      {
        "en": "done",
        "ru": "сделанный"
      },
      {
        "en": "repair",
        "ru": "ремонтировать"
      },
      {
        "en": "cut",
        "ru": "стричь"
      },
      {
        "en": "clean",
        "ru": "чистить"
      },
      {
        "en": "service",
        "ru": "услуга"
      },
      {
        "en": "haircut",
        "ru": "стрижка"
      },
      {
        "en": "fixed",
        "ru": "починенный"
      },
      {
        "en": "painted",
        "ru": "покрашенный"
      }
    ],
    "grammar": {
      "title": "Causative",
      "blocks": [
        {
          "title": "have done",
          "desc": "Заказ услуг.",
          "example": "I had my car repaired."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "She got her hair cut."
        }
      ],
      "formulas": [
        "I had my car repaired.",
        "She got her hair cut."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "I had my car repaired.",
            "She got her hair cut."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I had my car repaired.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I had my car repaired."
      },
      {
        "phrase": "She got her hair cut.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "She got her hair cut."
      },
      {
        "phrase": "What do you know about have done?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about have done?"
      },
      {
        "phrase": "have is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "have is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B1 Causative"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B1 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about have?",
        "keywords": [
          "have",
          "get",
          "done",
          "repair",
          "cut",
          "clean",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I had my car repaired."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "have",
          "get",
          "done",
          "repair",
          "cut",
          "clean",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She got her hair cut."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "have",
          "get",
          "done",
          "repair",
          "cut",
          "clean",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I had my car repaired."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "have",
          "get",
          "done",
          "repair",
          "cut",
          "clean",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She got her hair cut."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "have",
          "get",
          "done",
          "repair",
          "cut",
          "clean",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I had my car repaired."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about have done.",
        "keywords": [
          "have",
          "get",
          "done",
          "repair",
          "cut",
          "clean",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I had my car repaired.",
        "useSpeech": true
      },
      {
        "task": "Use get and done.",
        "keywords": [
          "have",
          "get",
          "done",
          "repair",
          "cut",
          "clean",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She got her hair cut.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "have",
          "get",
          "done",
          "repair",
          "cut",
          "clean",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I had my car repaired.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "have",
        "trans": "заказывать",
        "example": "I use 'have' every day."
      },
      {
        "word": "get",
        "trans": "добиваться",
        "example": "I use 'get' every day."
      },
      {
        "word": "done",
        "trans": "сделанный",
        "example": "I use 'done' every day."
      },
      {
        "word": "repair",
        "trans": "ремонтировать",
        "example": "I use 'repair' every day."
      },
      {
        "word": "cut",
        "trans": "стричь",
        "example": "I use 'cut' every day."
      },
      {
        "word": "clean",
        "trans": "чистить",
        "example": "I use 'clean' every day."
      },
      {
        "word": "service",
        "trans": "услуга",
        "example": "I use 'service' every day."
      },
      {
        "word": "haircut",
        "trans": "стрижка",
        "example": "I use 'haircut' every day."
      },
      {
        "word": "fixed",
        "trans": "починенный",
        "example": "I use 'fixed' every day."
      },
      {
        "word": "painted",
        "trans": "покрашенный",
        "example": "I use 'painted' every day."
      },
      {
        "word": "have",
        "trans": "заказывать",
        "example": "Practice makes progress."
      },
      {
        "word": "get",
        "trans": "добиваться",
        "example": "Practice makes progress."
      },
      {
        "word": "done",
        "trans": "сделанный",
        "example": "Practice makes progress."
      },
      {
        "word": "repair",
        "trans": "ремонтировать",
        "example": "Practice makes progress."
      },
      {
        "word": "cut",
        "trans": "стричь",
        "example": "Practice makes progress."
      },
      {
        "word": "clean",
        "trans": "чистить",
        "example": "Practice makes progress."
      },
      {
        "word": "service",
        "trans": "услуга",
        "example": "Practice makes progress."
      },
      {
        "word": "haircut",
        "trans": "стрижка",
        "example": "Practice makes progress."
      },
      {
        "word": "fixed",
        "trans": "починенный",
        "example": "Practice makes progress."
      },
      {
        "word": "painted",
        "trans": "покрашенный",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 44,
    "theory": {
      "intro": "Заказ услуг.",
      "reading": "**Каузатив** — Заказ услуг.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### have done\nЗаказ услуг.\n\n*Пример:* I had my car repaired.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* She got her hair cut.\n\n### Формулы\n- `I had my car repaired.`\n- `She got her hair cut.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "have done: Заказ услуг.",
        "Практика: Используй в речи.",
        "Запомни формулы: I had my car repaired.; She got her hair cut.",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «have»?",
        "options": [
          "заказывать",
          "покрашенный",
          "ремонтировать",
          "стрижка"
        ],
        "answer": "заказывать"
      },
      {
        "question": "What is «get»?",
        "options": [
          "починенный",
          "заказывать",
          "услуга",
          "добиваться"
        ],
        "answer": "добиваться"
      },
      {
        "question": "What is «done»?",
        "options": [
          "услуга",
          "сделанный",
          "заказывать",
          "покрашенный"
        ],
        "answer": "сделанный"
      },
      {
        "question": "What is «repair»?",
        "options": [
          "ремонтировать",
          "стричь",
          "покрашенный",
          "добиваться"
        ],
        "answer": "ремонтировать"
      },
      {
        "question": "What is «cut»?",
        "options": [
          "стричь",
          "чистить",
          "сделанный",
          "заказывать"
        ],
        "answer": "стричь"
      },
      {
        "type": "gap",
        "sentence": "The word «чистить» in English is ___.",
        "answer": "clean",
        "hint": "c…"
      },
      {
        "type": "gap",
        "sentence": "The word «услуга» in English is ___.",
        "answer": "service",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «стрижка» in English is ___.",
        "answer": "haircut",
        "hint": "h…"
      }
    ]
  },
  {
    "level": "B1",
    "title": "Passive Advanced",
    "titleRu": "Passive продвинутый",
    "topic": "all tenses",
    "description": "Passive везде.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about all tenses?",
        "keywords": [
          "been",
          "reported",
          "believed",
          "made",
          "seen",
          "built",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The report has been published."
      },
      {
        "prompt": "Give an example with been.",
        "keywords": [
          "been",
          "reported",
          "believed",
          "made",
          "seen",
          "built",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "It is believed that he left."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "been",
          "reported",
          "believed",
          "made",
          "seen",
          "built",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The report has been published."
      }
    ],
    "vocab": [
      {
        "en": "been",
        "ru": "был"
      },
      {
        "en": "reported",
        "ru": "сообщается"
      },
      {
        "en": "believed",
        "ru": "считается"
      },
      {
        "en": "made",
        "ru": "сделан"
      },
      {
        "en": "seen",
        "ru": "виден"
      },
      {
        "en": "built",
        "ru": "построен"
      },
      {
        "en": "written",
        "ru": "написан"
      },
      {
        "en": "sold",
        "ru": "продан"
      },
      {
        "en": "being",
        "ru": "будучи"
      },
      {
        "en": "told",
        "ru": "сказан"
      }
    ],
    "grammar": {
      "title": "Passive Advanced",
      "blocks": [
        {
          "title": "all tenses",
          "desc": "Passive везде.",
          "example": "The report has been published."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "It is believed that he left."
        }
      ],
      "formulas": [
        "The report has been published.",
        "It is believed that he left."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "The report has been published.",
            "It is believed that he left."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "The report has been published.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "The report has been published."
      },
      {
        "phrase": "It is believed that he left.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "It is believed that he left."
      },
      {
        "phrase": "What do you know about all tenses?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about all tenses?"
      },
      {
        "phrase": "been is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "been is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B1 Passive Advanced"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B1 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about been?",
        "keywords": [
          "been",
          "reported",
          "believed",
          "made",
          "seen",
          "built",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The report has been published."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "been",
          "reported",
          "believed",
          "made",
          "seen",
          "built",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It is believed that he left."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "been",
          "reported",
          "believed",
          "made",
          "seen",
          "built",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The report has been published."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "been",
          "reported",
          "believed",
          "made",
          "seen",
          "built",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It is believed that he left."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "been",
          "reported",
          "believed",
          "made",
          "seen",
          "built",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The report has been published."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about all tenses.",
        "keywords": [
          "been",
          "reported",
          "believed",
          "made",
          "seen",
          "built",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The report has been published.",
        "useSpeech": true
      },
      {
        "task": "Use reported and believed.",
        "keywords": [
          "been",
          "reported",
          "believed",
          "made",
          "seen",
          "built",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "It is believed that he left.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "been",
          "reported",
          "believed",
          "made",
          "seen",
          "built",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The report has been published.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "been",
        "trans": "был",
        "example": "I use 'been' every day."
      },
      {
        "word": "reported",
        "trans": "сообщается",
        "example": "I use 'reported' every day."
      },
      {
        "word": "believed",
        "trans": "считается",
        "example": "I use 'believed' every day."
      },
      {
        "word": "made",
        "trans": "сделан",
        "example": "I use 'made' every day."
      },
      {
        "word": "seen",
        "trans": "виден",
        "example": "I use 'seen' every day."
      },
      {
        "word": "built",
        "trans": "построен",
        "example": "I use 'built' every day."
      },
      {
        "word": "written",
        "trans": "написан",
        "example": "I use 'written' every day."
      },
      {
        "word": "sold",
        "trans": "продан",
        "example": "I use 'sold' every day."
      },
      {
        "word": "being",
        "trans": "будучи",
        "example": "I use 'being' every day."
      },
      {
        "word": "told",
        "trans": "сказан",
        "example": "I use 'told' every day."
      },
      {
        "word": "been",
        "trans": "был",
        "example": "Practice makes progress."
      },
      {
        "word": "reported",
        "trans": "сообщается",
        "example": "Practice makes progress."
      },
      {
        "word": "believed",
        "trans": "считается",
        "example": "Practice makes progress."
      },
      {
        "word": "made",
        "trans": "сделан",
        "example": "Practice makes progress."
      },
      {
        "word": "seen",
        "trans": "виден",
        "example": "Practice makes progress."
      },
      {
        "word": "built",
        "trans": "построен",
        "example": "Practice makes progress."
      },
      {
        "word": "written",
        "trans": "написан",
        "example": "Practice makes progress."
      },
      {
        "word": "sold",
        "trans": "продан",
        "example": "Practice makes progress."
      },
      {
        "word": "being",
        "trans": "будучи",
        "example": "Practice makes progress."
      },
      {
        "word": "told",
        "trans": "сказан",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 45,
    "theory": {
      "intro": "Passive везде.",
      "reading": "**Passive продвинутый** — Passive везде.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### all tenses\nPassive везде.\n\n*Пример:* The report has been published.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* It is believed that he left.\n\n### Формулы\n- `The report has been published.`\n- `It is believed that he left.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "all tenses: Passive везде.",
        "Практика: Используй в речи.",
        "Запомни формулы: The report has been published.; It is believed that he left.",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «been»?",
        "options": [
          "написан",
          "сообщается",
          "будучи",
          "был"
        ],
        "answer": "был"
      },
      {
        "question": "What is «reported»?",
        "options": [
          "написан",
          "виден",
          "построен",
          "сообщается"
        ],
        "answer": "сообщается"
      },
      {
        "question": "What is «believed»?",
        "options": [
          "сообщается",
          "считается",
          "был",
          "виден"
        ],
        "answer": "считается"
      },
      {
        "question": "What is «made»?",
        "options": [
          "продан",
          "сделан",
          "был",
          "считается"
        ],
        "answer": "сделан"
      },
      {
        "question": "What is «seen»?",
        "options": [
          "виден",
          "будучи",
          "был",
          "сообщается"
        ],
        "answer": "виден"
      },
      {
        "type": "gap",
        "sentence": "The word «построен» in English is ___.",
        "answer": "built",
        "hint": "b…"
      },
      {
        "type": "gap",
        "sentence": "The word «написан» in English is ___.",
        "answer": "written",
        "hint": "w…"
      },
      {
        "type": "gap",
        "sentence": "The word «продан» in English is ___.",
        "answer": "sold",
        "hint": "s…"
      }
    ]
  },
  {
    "level": "B1",
    "title": "Narrative Tenses",
    "titleRu": "Повествовательные времена",
    "topic": "storytelling",
    "description": "Рассказ с разными временами.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about storytelling?",
        "keywords": [
          "story",
          "while",
          "suddenly",
          "already",
          "just",
          "event",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I was walking when I saw him."
      },
      {
        "prompt": "Give an example with story.",
        "keywords": [
          "story",
          "while",
          "suddenly",
          "already",
          "just",
          "event",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "He had left before I arrived."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "story",
          "while",
          "suddenly",
          "already",
          "just",
          "event",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I was walking when I saw him."
      }
    ],
    "vocab": [
      {
        "en": "story",
        "ru": "история"
      },
      {
        "en": "while",
        "ru": "пока"
      },
      {
        "en": "suddenly",
        "ru": "внезапно"
      },
      {
        "en": "already",
        "ru": "уже"
      },
      {
        "en": "just",
        "ru": "только что"
      },
      {
        "en": "event",
        "ru": "событие"
      },
      {
        "en": "flashback",
        "ru": "воспоминание"
      },
      {
        "en": "ending",
        "ru": "концовка"
      },
      {
        "en": "background",
        "ru": "фон"
      },
      {
        "en": "tension",
        "ru": "напряжение"
      }
    ],
    "grammar": {
      "title": "Narrative Tenses",
      "blocks": [
        {
          "title": "storytelling",
          "desc": "Рассказ с разными временами.",
          "example": "I was walking when I saw him."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "He had left before I arrived."
        }
      ],
      "formulas": [
        "I was walking when I saw him.",
        "He had left before I arrived."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "I was walking when I saw him.",
            "He had left before I arrived."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I was walking when I saw him.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I was walking when I saw him."
      },
      {
        "phrase": "He had left before I arrived.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "He had left before I arrived."
      },
      {
        "phrase": "What do you know about storytelling?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about storytelling?"
      },
      {
        "phrase": "story is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "story is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B1 Narrative Tenses"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B1 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about story?",
        "keywords": [
          "story",
          "while",
          "suddenly",
          "already",
          "just",
          "event",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I was walking when I saw him."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "story",
          "while",
          "suddenly",
          "already",
          "just",
          "event",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "He had left before I arrived."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "story",
          "while",
          "suddenly",
          "already",
          "just",
          "event",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I was walking when I saw him."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "story",
          "while",
          "suddenly",
          "already",
          "just",
          "event",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "He had left before I arrived."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "story",
          "while",
          "suddenly",
          "already",
          "just",
          "event",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I was walking when I saw him."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about storytelling.",
        "keywords": [
          "story",
          "while",
          "suddenly",
          "already",
          "just",
          "event",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I was walking when I saw him.",
        "useSpeech": true
      },
      {
        "task": "Use while and suddenly.",
        "keywords": [
          "story",
          "while",
          "suddenly",
          "already",
          "just",
          "event",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "He had left before I arrived.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "story",
          "while",
          "suddenly",
          "already",
          "just",
          "event",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I was walking when I saw him.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "story",
        "trans": "история",
        "example": "I use 'story' every day."
      },
      {
        "word": "while",
        "trans": "пока",
        "example": "I use 'while' every day."
      },
      {
        "word": "suddenly",
        "trans": "внезапно",
        "example": "I use 'suddenly' every day."
      },
      {
        "word": "already",
        "trans": "уже",
        "example": "I use 'already' every day."
      },
      {
        "word": "just",
        "trans": "только что",
        "example": "I use 'just' every day."
      },
      {
        "word": "event",
        "trans": "событие",
        "example": "I use 'event' every day."
      },
      {
        "word": "flashback",
        "trans": "воспоминание",
        "example": "I use 'flashback' every day."
      },
      {
        "word": "ending",
        "trans": "концовка",
        "example": "I use 'ending' every day."
      },
      {
        "word": "background",
        "trans": "фон",
        "example": "I use 'background' every day."
      },
      {
        "word": "tension",
        "trans": "напряжение",
        "example": "I use 'tension' every day."
      },
      {
        "word": "story",
        "trans": "история",
        "example": "Practice makes progress."
      },
      {
        "word": "while",
        "trans": "пока",
        "example": "Practice makes progress."
      },
      {
        "word": "suddenly",
        "trans": "внезапно",
        "example": "Practice makes progress."
      },
      {
        "word": "already",
        "trans": "уже",
        "example": "Practice makes progress."
      },
      {
        "word": "just",
        "trans": "только что",
        "example": "Practice makes progress."
      },
      {
        "word": "event",
        "trans": "событие",
        "example": "Practice makes progress."
      },
      {
        "word": "flashback",
        "trans": "воспоминание",
        "example": "Practice makes progress."
      },
      {
        "word": "ending",
        "trans": "концовка",
        "example": "Practice makes progress."
      },
      {
        "word": "background",
        "trans": "фон",
        "example": "Practice makes progress."
      },
      {
        "word": "tension",
        "trans": "напряжение",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 46,
    "theory": {
      "intro": "Рассказ с разными временами.",
      "reading": "**Повествовательные времена** — Рассказ с разными временами.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### storytelling\nРассказ с разными временами.\n\n*Пример:* I was walking when I saw him.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* He had left before I arrived.\n\n### Формулы\n- `I was walking when I saw him.`\n- `He had left before I arrived.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "storytelling: Рассказ с разными временами.",
        "Практика: Используй в речи.",
        "Запомни формулы: I was walking when I saw him.; He had left before I arrived.",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «story»?",
        "options": [
          "только что",
          "событие",
          "история",
          "фон"
        ],
        "answer": "история"
      },
      {
        "question": "What is «while»?",
        "options": [
          "воспоминание",
          "история",
          "пока",
          "напряжение"
        ],
        "answer": "пока"
      },
      {
        "question": "What is «suddenly»?",
        "options": [
          "только что",
          "внезапно",
          "воспоминание",
          "напряжение"
        ],
        "answer": "внезапно"
      },
      {
        "question": "What is «already»?",
        "options": [
          "пока",
          "внезапно",
          "уже",
          "напряжение"
        ],
        "answer": "уже"
      },
      {
        "question": "What is «just»?",
        "options": [
          "фон",
          "только что",
          "внезапно",
          "уже"
        ],
        "answer": "только что"
      },
      {
        "type": "gap",
        "sentence": "The word «событие» in English is ___.",
        "answer": "event",
        "hint": "e…"
      },
      {
        "type": "gap",
        "sentence": "The word «воспоминание» in English is ___.",
        "answer": "flashback",
        "hint": "f…"
      },
      {
        "type": "gap",
        "sentence": "The word «концовка» in English is ___.",
        "answer": "ending",
        "hint": "e…"
      }
    ]
  },
  {
    "level": "B1",
    "title": "Giving Advice",
    "titleRu": "Советы",
    "topic": "should / ought",
    "description": "Даём советы.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about should / ought?",
        "keywords": [
          "should",
          "ought",
          "advice",
          "recommend",
          "suggest",
          "problem",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "You should see a doctor."
      },
      {
        "prompt": "Give an example with should.",
        "keywords": [
          "should",
          "ought",
          "advice",
          "recommend",
          "suggest",
          "problem",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I'd suggest taking a break."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "should",
          "ought",
          "advice",
          "recommend",
          "suggest",
          "problem",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "You should see a doctor."
      }
    ],
    "vocab": [
      {
        "en": "should",
        "ru": "следует"
      },
      {
        "en": "ought",
        "ru": "следует"
      },
      {
        "en": "advice",
        "ru": "совет"
      },
      {
        "en": "recommend",
        "ru": "рекомендовать"
      },
      {
        "en": "suggest",
        "ru": "предлагать"
      },
      {
        "en": "problem",
        "ru": "проблема"
      },
      {
        "en": "solution",
        "ru": "решение"
      },
      {
        "en": "consider",
        "ru": "рассматривать"
      },
      {
        "en": "had better",
        "ru": "лучше бы"
      },
      {
        "en": "mind",
        "ru": "возражать"
      }
    ],
    "grammar": {
      "title": "Giving Advice",
      "blocks": [
        {
          "title": "should / ought",
          "desc": "Даём советы.",
          "example": "You should see a doctor."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "I'd suggest taking a break."
        }
      ],
      "formulas": [
        "You should see a doctor.",
        "I'd suggest taking a break."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "You should see a doctor.",
            "I'd suggest taking a break."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "You should see a doctor.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "You should see a doctor."
      },
      {
        "phrase": "I'd suggest taking a break.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I'd suggest taking a break."
      },
      {
        "phrase": "What do you know about should / ought?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about should / ought?"
      },
      {
        "phrase": "should is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "should is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B1 Giving Advice"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B1 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about should?",
        "keywords": [
          "should",
          "ought",
          "advice",
          "recommend",
          "suggest",
          "problem",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You should see a doctor."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "should",
          "ought",
          "advice",
          "recommend",
          "suggest",
          "problem",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I'd suggest taking a break."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "should",
          "ought",
          "advice",
          "recommend",
          "suggest",
          "problem",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You should see a doctor."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "should",
          "ought",
          "advice",
          "recommend",
          "suggest",
          "problem",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I'd suggest taking a break."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "should",
          "ought",
          "advice",
          "recommend",
          "suggest",
          "problem",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You should see a doctor."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about should / ought.",
        "keywords": [
          "should",
          "ought",
          "advice",
          "recommend",
          "suggest",
          "problem",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "You should see a doctor.",
        "useSpeech": true
      },
      {
        "task": "Use ought and advice.",
        "keywords": [
          "should",
          "ought",
          "advice",
          "recommend",
          "suggest",
          "problem",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I'd suggest taking a break.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "should",
          "ought",
          "advice",
          "recommend",
          "suggest",
          "problem",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "You should see a doctor.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "should",
        "trans": "следует",
        "example": "I use 'should' every day."
      },
      {
        "word": "ought",
        "trans": "следует",
        "example": "I use 'ought' every day."
      },
      {
        "word": "advice",
        "trans": "совет",
        "example": "I use 'advice' every day."
      },
      {
        "word": "recommend",
        "trans": "рекомендовать",
        "example": "I use 'recommend' every day."
      },
      {
        "word": "suggest",
        "trans": "предлагать",
        "example": "I use 'suggest' every day."
      },
      {
        "word": "problem",
        "trans": "проблема",
        "example": "I use 'problem' every day."
      },
      {
        "word": "solution",
        "trans": "решение",
        "example": "I use 'solution' every day."
      },
      {
        "word": "consider",
        "trans": "рассматривать",
        "example": "I use 'consider' every day."
      },
      {
        "word": "had better",
        "trans": "лучше бы",
        "example": "I use 'had better' every day."
      },
      {
        "word": "mind",
        "trans": "возражать",
        "example": "I use 'mind' every day."
      },
      {
        "word": "should",
        "trans": "следует",
        "example": "Practice makes progress."
      },
      {
        "word": "ought",
        "trans": "следует",
        "example": "Practice makes progress."
      },
      {
        "word": "advice",
        "trans": "совет",
        "example": "Practice makes progress."
      },
      {
        "word": "recommend",
        "trans": "рекомендовать",
        "example": "Practice makes progress."
      },
      {
        "word": "suggest",
        "trans": "предлагать",
        "example": "Practice makes progress."
      },
      {
        "word": "problem",
        "trans": "проблема",
        "example": "Practice makes progress."
      },
      {
        "word": "solution",
        "trans": "решение",
        "example": "Practice makes progress."
      },
      {
        "word": "consider",
        "trans": "рассматривать",
        "example": "Practice makes progress."
      },
      {
        "word": "had better",
        "trans": "лучше бы",
        "example": "Practice makes progress."
      },
      {
        "word": "mind",
        "trans": "возражать",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 47,
    "theory": {
      "intro": "Даём советы.",
      "reading": "**Советы** — Даём советы.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### should / ought\nДаём советы.\n\n*Пример:* You should see a doctor.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* I'd suggest taking a break.\n\n### Формулы\n- `You should see a doctor.`\n- `I'd suggest taking a break.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "should / ought: Даём советы.",
        "Практика: Используй в речи.",
        "Запомни формулы: You should see a doctor.; I'd suggest taking a break.",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «should»?",
        "options": [
          "предлагать",
          "проблема",
          "рассматривать",
          "следует"
        ],
        "answer": "следует"
      },
      {
        "question": "What is «ought»?",
        "options": [
          "следует",
          "рекомендовать",
          "рассматривать",
          "решение"
        ],
        "answer": "следует"
      },
      {
        "question": "What is «advice»?",
        "options": [
          "рассматривать",
          "проблема",
          "следует",
          "совет"
        ],
        "answer": "совет"
      },
      {
        "question": "What is «recommend»?",
        "options": [
          "совет",
          "предлагать",
          "рекомендовать",
          "возражать"
        ],
        "answer": "рекомендовать"
      },
      {
        "question": "What is «suggest»?",
        "options": [
          "лучше бы",
          "решение",
          "предлагать",
          "совет"
        ],
        "answer": "предлагать"
      },
      {
        "type": "gap",
        "sentence": "The word «проблема» in English is ___.",
        "answer": "problem",
        "hint": "p…"
      },
      {
        "type": "gap",
        "sentence": "The word «решение» in English is ___.",
        "answer": "solution",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «рассматривать» in English is ___.",
        "answer": "consider",
        "hint": "c…"
      }
    ]
  },
  {
    "level": "B1",
    "title": "Technology",
    "titleRu": "Технологии",
    "topic": "digital life",
    "description": "Технологии B1.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about digital life?",
        "keywords": [
          "device",
          "app",
          "online",
          "download",
          "password",
          "privacy",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "You should update your password."
      },
      {
        "prompt": "Give an example with device.",
        "keywords": [
          "device",
          "app",
          "online",
          "download",
          "password",
          "privacy",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I suggest backing up your data."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "device",
          "app",
          "online",
          "download",
          "password",
          "privacy",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "You should update your password."
      }
    ],
    "vocab": [
      {
        "en": "device",
        "ru": "устройство"
      },
      {
        "en": "app",
        "ru": "приложение"
      },
      {
        "en": "online",
        "ru": "онлайн"
      },
      {
        "en": "download",
        "ru": "скачивать"
      },
      {
        "en": "password",
        "ru": "пароль"
      },
      {
        "en": "privacy",
        "ru": "приватность"
      },
      {
        "en": "update",
        "ru": "обновлять"
      },
      {
        "en": "connect",
        "ru": "подключать"
      },
      {
        "en": "screen",
        "ru": "экран"
      },
      {
        "en": "data",
        "ru": "данные"
      }
    ],
    "grammar": {
      "title": "Technology",
      "blocks": [
        {
          "title": "digital life",
          "desc": "Технологии B1.",
          "example": "You should update your password."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "I suggest backing up your data."
        }
      ],
      "formulas": [
        "You should update your password.",
        "I suggest backing up your data."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "You should update your password.",
            "I suggest backing up your data."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "You should update your password.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "You should update your password."
      },
      {
        "phrase": "I suggest backing up your data.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I suggest backing up your data."
      },
      {
        "phrase": "What do you know about digital life?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about digital life?"
      },
      {
        "phrase": "device is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "device is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B1 Technology"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B1 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about device?",
        "keywords": [
          "device",
          "app",
          "online",
          "download",
          "password",
          "privacy",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You should update your password."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "device",
          "app",
          "online",
          "download",
          "password",
          "privacy",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I suggest backing up your data."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "device",
          "app",
          "online",
          "download",
          "password",
          "privacy",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You should update your password."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "device",
          "app",
          "online",
          "download",
          "password",
          "privacy",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I suggest backing up your data."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "device",
          "app",
          "online",
          "download",
          "password",
          "privacy",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "You should update your password."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about digital life.",
        "keywords": [
          "device",
          "app",
          "online",
          "download",
          "password",
          "privacy",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "You should update your password.",
        "useSpeech": true
      },
      {
        "task": "Use app and online.",
        "keywords": [
          "device",
          "app",
          "online",
          "download",
          "password",
          "privacy",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I suggest backing up your data.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "device",
          "app",
          "online",
          "download",
          "password",
          "privacy",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "You should update your password.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "device",
        "trans": "устройство",
        "example": "I use 'device' every day."
      },
      {
        "word": "app",
        "trans": "приложение",
        "example": "I use 'app' every day."
      },
      {
        "word": "online",
        "trans": "онлайн",
        "example": "I use 'online' every day."
      },
      {
        "word": "download",
        "trans": "скачивать",
        "example": "I use 'download' every day."
      },
      {
        "word": "password",
        "trans": "пароль",
        "example": "I use 'password' every day."
      },
      {
        "word": "privacy",
        "trans": "приватность",
        "example": "I use 'privacy' every day."
      },
      {
        "word": "update",
        "trans": "обновлять",
        "example": "I use 'update' every day."
      },
      {
        "word": "connect",
        "trans": "подключать",
        "example": "I use 'connect' every day."
      },
      {
        "word": "screen",
        "trans": "экран",
        "example": "I use 'screen' every day."
      },
      {
        "word": "data",
        "trans": "данные",
        "example": "I use 'data' every day."
      },
      {
        "word": "device",
        "trans": "устройство",
        "example": "Practice makes progress."
      },
      {
        "word": "app",
        "trans": "приложение",
        "example": "Practice makes progress."
      },
      {
        "word": "online",
        "trans": "онлайн",
        "example": "Practice makes progress."
      },
      {
        "word": "download",
        "trans": "скачивать",
        "example": "Practice makes progress."
      },
      {
        "word": "password",
        "trans": "пароль",
        "example": "Practice makes progress."
      },
      {
        "word": "privacy",
        "trans": "приватность",
        "example": "Practice makes progress."
      },
      {
        "word": "update",
        "trans": "обновлять",
        "example": "Practice makes progress."
      },
      {
        "word": "connect",
        "trans": "подключать",
        "example": "Practice makes progress."
      },
      {
        "word": "screen",
        "trans": "экран",
        "example": "Practice makes progress."
      },
      {
        "word": "data",
        "trans": "данные",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 48,
    "theory": {
      "intro": "Технологии B1.",
      "reading": "**Технологии** — Технологии B1.\n\nПринцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы контекстом.\n\nCEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.\n\n### digital life\nТехнологии B1.\n\n*Пример:* You should update your password.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* I suggest backing up your data.\n\n### Формулы\n- `You should update your password.`\n- `I suggest backing up your data.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "digital life: Технологии B1.",
        "Практика: Используй в речи.",
        "Запомни формулы: You should update your password.; I suggest backing up your data.",
        "Принцип noticing (Batstone): сравнивайте похожие конструкции и объясняйте выбор формы конт…"
      ],
      "cefr": "CEFR B1 — независимое использование языка: мнения, условия, косвенная речь, phrasal verbs.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «device»?",
        "options": [
          "скачивать",
          "экран",
          "устройство",
          "данные"
        ],
        "answer": "устройство"
      },
      {
        "question": "What is «app»?",
        "options": [
          "приложение",
          "экран",
          "подключать",
          "обновлять"
        ],
        "answer": "приложение"
      },
      {
        "question": "What is «online»?",
        "options": [
          "подключать",
          "онлайн",
          "данные",
          "скачивать"
        ],
        "answer": "онлайн"
      },
      {
        "question": "What is «download»?",
        "options": [
          "приложение",
          "скачивать",
          "экран",
          "подключать"
        ],
        "answer": "скачивать"
      },
      {
        "question": "What is «password»?",
        "options": [
          "экран",
          "приватность",
          "данные",
          "пароль"
        ],
        "answer": "пароль"
      },
      {
        "type": "gap",
        "sentence": "The word «приватность» in English is ___.",
        "answer": "privacy",
        "hint": "p…"
      },
      {
        "type": "gap",
        "sentence": "The word «обновлять» in English is ___.",
        "answer": "update",
        "hint": "u…"
      },
      {
        "type": "gap",
        "sentence": "The word «подключать» in English is ___.",
        "answer": "connect",
        "hint": "c…"
      }
    ]
  },
  {
    "id": 49,
    "level": "B2",
    "title": "Word Formation",
    "titleRu": "Словообразование",
    "topic": "Prefixes & suffixes",
    "description": "Префиксы и суффиксы для расширения словарного запаса и экзамена B2.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What is the noun form of 'decide'?",
        "keywords": [
          "prefix",
          "suffix",
          "un-",
          "-tion",
          "-ful",
          "-less",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Her happiness is important."
      },
      {
        "prompt": "How do you make an adjective from 'success'?",
        "keywords": [
          "prefix",
          "suffix",
          "un-",
          "-tion",
          "-ful",
          "-less",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "It was an unforgettable experience."
      },
      {
        "prompt": "What does 'unhappy' mean?",
        "keywords": [
          "prefix",
          "suffix",
          "un-",
          "-tion",
          "-ful",
          "-less",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Her happiness is important."
      }
    ],
    "vocab": [
      {
        "en": "prefix",
        "ru": "приставка"
      },
      {
        "en": "suffix",
        "ru": "суффикс"
      },
      {
        "en": "un-",
        "ru": "не- (отрицание)"
      },
      {
        "en": "-tion",
        "ru": "суффикс существительного"
      },
      {
        "en": "-ful",
        "ru": "полный"
      },
      {
        "en": "-less",
        "ru": "без"
      },
      {
        "en": "-ment",
        "ru": "суффикс существительного"
      },
      {
        "en": "-able",
        "ru": "-имый"
      },
      {
        "en": "over-",
        "ru": "пере-, сверх-"
      },
      {
        "en": "re-",
        "ru": "повторно"
      }
    ],
    "grammar": {
      "title": "Word Formation",
      "blocks": [
        {
          "title": "Суффиксы",
          "desc": "-tion/-sion: decide→decision. -ment: develop→development. -ful/-less: care→careful/careless. -able: comfort→comfortable.",
          "example": "Her happiness is important."
        },
        {
          "title": "Префиксы",
          "desc": "Un-: unhappy. Re-: rewrite. Over-: overcook. Dis-: disagree. Mis-: misunderstand.",
          "example": "It was an unforgettable experience."
        }
      ],
      "formulas": [
        "verb + -tion/-ment = noun",
        "noun/adj + -ful/-less = adjective",
        "prefix + base word = new word"
      ],
      "extraExamples": [
        {
          "label": "Суффиксы",
          "items": [
            "achieve → achievement",
            "responsible → responsibility"
          ]
        },
        {
          "label": "Префиксы",
          "items": [
            "un + predictable = unpredictable",
            "re + consider = reconsider"
          ]
        }
      ],
      "mistake": {
        "wrong": "She has a lot of happy.",
        "right": "She has a lot of happiness."
      }
    },
    "quiz": [
      {
        "sentence": "We need to make a ___. (decide)",
        "options": [
          "decision",
          "decisionment"
        ],
        "answer": "decision"
      },
      {
        "sentence": "The film was ___. (forget)",
        "options": [
          "unforgettable",
          "unforgetable"
        ],
        "answer": "unforgettable"
      },
      {
        "sentence": "She is very ___. (create)",
        "options": [
          "creative",
          "creatful"
        ],
        "answer": "creative"
      },
      {
        "sentence": "There was a ___ in plans. (change)",
        "options": [
          "change",
          "changement"
        ],
        "answer": "change"
      },
      {
        "sentence": "He ___ the document. (write again)",
        "options": [
          "rewrote",
          "wrote"
        ],
        "answer": "rewrote"
      }
    ],
    "pronunciation": [
      {
        "phrase": "unforgettable",
        "ipa": "/ʌnfəˈɡetəbl/",
        "tip": "Stress on -get-",
        "expected": "unforgettable"
      },
      {
        "phrase": "responsibility",
        "ipa": "/rɪˌspɒnsəˈbɪləti/",
        "tip": "5 syllables",
        "expected": "responsibility"
      },
      {
        "phrase": "development",
        "ipa": "/dɪˈveləpmənt/",
        "tip": "Silent p in development",
        "expected": "development"
      },
      {
        "phrase": "unpredictable",
        "ipa": "/ʌnprɪˈdɪktəbl/",
        "tip": "Un- + predictable",
        "expected": "unpredictable"
      },
      {
        "phrase": "achievement",
        "ipa": "/əˈtʃiːvmənt/",
        "tip": "Achievement — ch as /tʃ/",
        "expected": "achievement"
      }
    ],
    "culture": {
      "watch": [
        "TED Talks — academic vocabulary"
      ],
      "listen": [
        "Podcasts on science and society"
      ],
      "read": [
        "B2 word formation exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What suffix creates the noun?",
        "keywords": [
          "prefix",
          "suffix",
          "un-",
          "-tion",
          "-ful",
          "-less",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Her happiness is important."
      },
      {
        "prompt": "What prefix changes the meaning?",
        "keywords": [
          "prefix",
          "suffix",
          "un-",
          "-tion",
          "-ful",
          "-less",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It was an unforgettable experience."
      },
      {
        "prompt": "What part of speech is needed?",
        "keywords": [
          "prefix",
          "suffix",
          "un-",
          "-tion",
          "-ful",
          "-less",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Her happiness is important."
      },
      {
        "prompt": "Find 3 formed words in the text.",
        "keywords": [
          "prefix",
          "suffix",
          "un-",
          "-tion",
          "-ful",
          "-less",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It was an unforgettable experience."
      },
      {
        "prompt": "What is the base word?",
        "keywords": [
          "prefix",
          "suffix",
          "un-",
          "-tion",
          "-ful",
          "-less",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Her happiness is important."
      }
    ],
    "speaking": [
      {
        "task": "Образуй 5 слов с -tion/-ment от глаголов.",
        "keywords": [
          "prefix",
          "suffix",
          "un-",
          "-tion",
          "-ful",
          "-less",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Her happiness is important.",
        "useSpeech": true
      },
      {
        "task": "Придумай 5 слов с un-/re-/dis-.",
        "keywords": [
          "prefix",
          "suffix",
          "un-",
          "-tion",
          "-ful",
          "-less",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "It was an unforgettable experience.",
        "useSpeech": true
      },
      {
        "task": "Используй 3 new formed words в предложениях.",
        "keywords": [
          "prefix",
          "suffix",
          "un-",
          "-tion",
          "-ful",
          "-less",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Her happiness is important.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "prefix",
        "trans": "приставка",
        "example": "I use 'prefix' every day."
      },
      {
        "word": "suffix",
        "trans": "суффикс",
        "example": "I use 'suffix' every day."
      },
      {
        "word": "un-",
        "trans": "не- (отрицание)",
        "example": "I use 'un-' every day."
      },
      {
        "word": "-tion",
        "trans": "суффикс существительного",
        "example": "I use '-tion' every day."
      },
      {
        "word": "-ful",
        "trans": "полный",
        "example": "I use '-ful' every day."
      },
      {
        "word": "-less",
        "trans": "без",
        "example": "I use '-less' every day."
      },
      {
        "word": "-ment",
        "trans": "суффикс существительного",
        "example": "I use '-ment' every day."
      },
      {
        "word": "-able",
        "trans": "-имый",
        "example": "I use '-able' every day."
      },
      {
        "word": "over-",
        "trans": "пере-, сверх-",
        "example": "I use 'over-' every day."
      },
      {
        "word": "re-",
        "trans": "повторно",
        "example": "I use 're-' every day."
      },
      {
        "word": "prefix",
        "trans": "приставка",
        "example": "Practice makes progress."
      },
      {
        "word": "suffix",
        "trans": "суффикс",
        "example": "Practice makes progress."
      },
      {
        "word": "un-",
        "trans": "не- (отрицание)",
        "example": "Practice makes progress."
      },
      {
        "word": "-tion",
        "trans": "суффикс существительного",
        "example": "Practice makes progress."
      },
      {
        "word": "-ful",
        "trans": "полный",
        "example": "Practice makes progress."
      },
      {
        "word": "-less",
        "trans": "без",
        "example": "Practice makes progress."
      },
      {
        "word": "-ment",
        "trans": "суффикс существительного",
        "example": "Practice makes progress."
      },
      {
        "word": "-able",
        "trans": "-имый",
        "example": "Practice makes progress."
      },
      {
        "word": "over-",
        "trans": "пере-, сверх-",
        "example": "Practice makes progress."
      },
      {
        "word": "re-",
        "trans": "повторно",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "We need to make a ___. (decide)",
        "options": [
          "decision",
          "decisionment"
        ],
        "answer": "decision"
      },
      {
        "sentence": "The film was ___. (forget)",
        "options": [
          "unforgettable",
          "unforgetable"
        ],
        "answer": "unforgettable"
      }
    ],
    "theory": {
      "intro": "Префиксы и суффиксы для расширения словарного запаса и экзамена B2.",
      "reading": "**Словообразование** — Префиксы и суффиксы для расширения словарного запаса и экзамена B2.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### Суффиксы\n-tion/-sion: decide→decision. -ment: develop→development. -ful/-less: care→careful/careless. -able: comfort→comfortable.\n\n*Пример:* Her happiness is important.\n\n### Префиксы\nUn-: unhappy. Re-: rewrite. Over-: overcook. Dis-: disagree. Mis-: misunderstand.\n\n*Пример:* It was an unforgettable experience.\n\n### Формулы\n- `verb + -tion/-ment = noun`\n- `noun/adj + -ful/-less = adjective`\n- `prefix + base word = new word`\n\n### Типичная ошибка\n❌ She has a lot of happy.\n✅ She has a lot of happiness.",
      "keyPoints": [
        "Суффиксы: -tion/-sion: decide→decision. -ment: develop→development. -ful/-less: care→caref",
        "Префиксы: Un-: unhappy. Re-: rewrite. Over-: overcook. Dis-: disagree. Mis-: misunderstand",
        "Запомни формулы: verb + -tion/-ment = noun; noun/adj + -ful/-less = adjective; prefix + base word = new word",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «prefix»?",
        "options": [
          "без",
          "не- (отрицание)",
          "приставка",
          "полный"
        ],
        "answer": "приставка"
      },
      {
        "question": "What is «suffix»?",
        "options": [
          "пере-, сверх-",
          "суффикс",
          "суффикс существительного",
          "приставка"
        ],
        "answer": "суффикс"
      },
      {
        "question": "What is «un-»?",
        "options": [
          "-имый",
          "не- (отрицание)",
          "суффикс",
          "приставка"
        ],
        "answer": "не- (отрицание)"
      },
      {
        "question": "What is «-tion»?",
        "options": [
          "повторно",
          "суффикс",
          "суффикс существительного",
          "не- (отрицание)"
        ],
        "answer": "суффикс существительного"
      },
      {
        "question": "What is «-ful»?",
        "options": [
          "суффикс",
          "без",
          "не- (отрицание)",
          "полный"
        ],
        "answer": "полный"
      },
      {
        "type": "gap",
        "sentence": "The word «без» in English is ___.",
        "answer": "-less",
        "hint": "-…"
      },
      {
        "type": "gap",
        "sentence": "The word «суффикс существительного» in English is ___.",
        "answer": "-ment",
        "hint": "-…"
      },
      {
        "type": "gap",
        "sentence": "The word «-имый» in English is ___.",
        "answer": "-able",
        "hint": "-…"
      }
    ]
  },
  {
    "id": 50,
    "level": "B2",
    "title": "Collocations & Idioms",
    "titleRu": "Коллокации и идиомы",
    "topic": "make a decision, heavy rain",
    "description": "Устойчивые сочетания слов и идиомы уровня B2.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "Do you make or do a decision?",
        "keywords": [
          "collocation",
          "idiom",
          "make a decision",
          "heavy rain",
          "break the ice",
          "under the weather",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She made an important decision."
      },
      {
        "prompt": "What does 'break the ice' mean?",
        "keywords": [
          "collocation",
          "idiom",
          "make a decision",
          "heavy rain",
          "break the ice",
          "under the weather",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The exam was a piece of cake."
      },
      {
        "prompt": "When do you feel under the weather?",
        "keywords": [
          "collocation",
          "idiom",
          "make a decision",
          "heavy rain",
          "break the ice",
          "under the weather",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She made an important decision."
      }
    ],
    "vocab": [
      {
        "en": "collocation",
        "ru": "коллокация"
      },
      {
        "en": "idiom",
        "ru": "идиома"
      },
      {
        "en": "make a decision",
        "ru": "принять решение"
      },
      {
        "en": "heavy rain",
        "ru": "сильный дождь"
      },
      {
        "en": "break the ice",
        "ru": "растопить лёд"
      },
      {
        "en": "under the weather",
        "ru": "нездоровиться"
      },
      {
        "en": "piece of cake",
        "ru": "проще простого"
      },
      {
        "en": "achieve a goal",
        "ru": "достичь цели"
      },
      {
        "en": "raise awareness",
        "ru": "повысить осведомлённость"
      },
      {
        "en": "commit a crime",
        "ru": "совершить преступление"
      }
    ],
    "grammar": {
      "title": "Collocations & Idioms",
      "blocks": [
        {
          "title": "Коллокации",
          "desc": "Некоторые слова идут только вместе: make a mistake (не do), heavy rain (не strong rain), highly recommend.",
          "example": "She made an important decision."
        },
        {
          "title": "Идиомы",
          "desc": "Переносное значение: break the ice, under the weather, once in a blue moon.",
          "example": "The exam was a piece of cake."
        }
      ],
      "formulas": [
        "make + decision/mistake/effort",
        "heavy + rain/traffic",
        "idiom = figurative meaning"
      ],
      "extraExamples": [
        {
          "label": "Collocations",
          "items": [
            "reach an agreement",
            "take a risk"
          ]
        },
        {
          "label": "Idioms",
          "items": [
            "It's raining cats and dogs.",
            "He hit the nail on the head."
          ]
        }
      ],
      "mistake": {
        "wrong": "I did a mistake.",
        "right": "I made a mistake."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ a decision yesterday.",
        "options": [
          "made",
          "did"
        ],
        "answer": "made"
      },
      {
        "sentence": "There was ___ rain last night.",
        "options": [
          "heavy",
          "strong"
        ],
        "answer": "heavy"
      },
      {
        "sentence": "The test was a piece of ___.",
        "options": [
          "cake",
          "pie"
        ],
        "answer": "cake"
      },
      {
        "sentence": "He feels under the ___.",
        "options": [
          "weather",
          "rain"
        ],
        "answer": "weather"
      },
      {
        "sentence": "We need to ___ awareness.",
        "options": [
          "raise",
          "rise"
        ],
        "answer": "raise"
      }
    ],
    "pronunciation": [
      {
        "phrase": "make a decision",
        "ipa": "/meɪk ə dɪˈsɪʒn/",
        "tip": "Decision — /ʒ/ sound",
        "expected": "make a decision"
      },
      {
        "phrase": "heavy rain",
        "ipa": "/ˈhevi reɪn/",
        "tip": "Heavy — не heave",
        "expected": "heavy rain"
      },
      {
        "phrase": "break the ice",
        "ipa": "/breɪk ði aɪs/",
        "tip": "Ice — idiom, literal practice helps",
        "expected": "break the ice"
      },
      {
        "phrase": "under the weather",
        "ipa": "/ˈʌndə ðə ˈweðə/",
        "tip": "Weather — idiom for feeling ill",
        "expected": "under the weather"
      },
      {
        "phrase": "piece of cake",
        "ipa": "/piːs əv keɪk/",
        "tip": "Means very easy",
        "expected": "piece of cake"
      }
    ],
    "culture": {
      "watch": [
        "British sitcoms — idioms in context"
      ],
      "listen": [
        "BBC Learning English — idioms"
      ],
      "read": [
        "Collocation dictionaries B2"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What collocation is used?",
        "keywords": [
          "collocation",
          "idiom",
          "make a decision",
          "heavy rain",
          "break the ice",
          "under the weather",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She made an important decision."
      },
      {
        "prompt": "What does the idiom mean literally vs figuratively?",
        "keywords": [
          "collocation",
          "idiom",
          "make a decision",
          "heavy rain",
          "break the ice",
          "under the weather",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The exam was a piece of cake."
      },
      {
        "prompt": "Make or do?",
        "keywords": [
          "collocation",
          "idiom",
          "make a decision",
          "heavy rain",
          "break the ice",
          "under the weather",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She made an important decision."
      },
      {
        "prompt": "Find an idiom in the text.",
        "keywords": [
          "collocation",
          "idiom",
          "make a decision",
          "heavy rain",
          "break the ice",
          "under the weather",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The exam was a piece of cake."
      },
      {
        "prompt": "What natural pair of words appears?",
        "keywords": [
          "collocation",
          "idiom",
          "make a decision",
          "heavy rain",
          "break the ice",
          "under the weather",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She made an important decision."
      }
    ],
    "speaking": [
      {
        "task": "Используй 5 collocations в рассказе о работе/учёбе.",
        "keywords": [
          "collocation",
          "idiom",
          "make a decision",
          "heavy rain",
          "break the ice",
          "under the weather",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She made an important decision.",
        "useSpeech": true
      },
      {
        "task": "Объясни 3 идиомы своими словами.",
        "keywords": [
          "collocation",
          "idiom",
          "make a decision",
          "heavy rain",
          "break the ice",
          "under the weather",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The exam was a piece of cake.",
        "useSpeech": true
      },
      {
        "task": "Исправь 5 неправильных collocations.",
        "keywords": [
          "collocation",
          "idiom",
          "make a decision",
          "heavy rain",
          "break the ice",
          "under the weather",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She made an important decision.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "collocation",
        "trans": "коллокация",
        "example": "I use 'collocation' every day."
      },
      {
        "word": "idiom",
        "trans": "идиома",
        "example": "I use 'idiom' every day."
      },
      {
        "word": "make a decision",
        "trans": "принять решение",
        "example": "I use 'make a decision' every day."
      },
      {
        "word": "heavy rain",
        "trans": "сильный дождь",
        "example": "I use 'heavy rain' every day."
      },
      {
        "word": "break the ice",
        "trans": "растопить лёд",
        "example": "I use 'break the ice' every day."
      },
      {
        "word": "under the weather",
        "trans": "нездоровиться",
        "example": "I use 'under the weather' every day."
      },
      {
        "word": "piece of cake",
        "trans": "проще простого",
        "example": "I use 'piece of cake' every day."
      },
      {
        "word": "achieve a goal",
        "trans": "достичь цели",
        "example": "I use 'achieve a goal' every day."
      },
      {
        "word": "raise awareness",
        "trans": "повысить осведомлённость",
        "example": "I use 'raise awareness' every day."
      },
      {
        "word": "commit a crime",
        "trans": "совершить преступление",
        "example": "I use 'commit a crime' every day."
      },
      {
        "word": "collocation",
        "trans": "коллокация",
        "example": "Practice makes progress."
      },
      {
        "word": "idiom",
        "trans": "идиома",
        "example": "Practice makes progress."
      },
      {
        "word": "make a decision",
        "trans": "принять решение",
        "example": "Practice makes progress."
      },
      {
        "word": "heavy rain",
        "trans": "сильный дождь",
        "example": "Practice makes progress."
      },
      {
        "word": "break the ice",
        "trans": "растопить лёд",
        "example": "Practice makes progress."
      },
      {
        "word": "under the weather",
        "trans": "нездоровиться",
        "example": "Practice makes progress."
      },
      {
        "word": "piece of cake",
        "trans": "проще простого",
        "example": "Practice makes progress."
      },
      {
        "word": "achieve a goal",
        "trans": "достичь цели",
        "example": "Practice makes progress."
      },
      {
        "word": "raise awareness",
        "trans": "повысить осведомлённость",
        "example": "Practice makes progress."
      },
      {
        "word": "commit a crime",
        "trans": "совершить преступление",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ a decision yesterday.",
        "options": [
          "made",
          "did"
        ],
        "answer": "made"
      },
      {
        "sentence": "There was ___ rain last night.",
        "options": [
          "heavy",
          "strong"
        ],
        "answer": "heavy"
      }
    ],
    "theory": {
      "intro": "Устойчивые сочетания слов и идиомы уровня B2.",
      "reading": "**Коллокации и идиомы** — Устойчивые сочетания слов и идиомы уровня B2.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### Коллокации\nНекоторые слова идут только вместе: make a mistake (не do), heavy rain (не strong rain), highly recommend.\n\n*Пример:* She made an important decision.\n\n### Идиомы\nПереносное значение: break the ice, under the weather, once in a blue moon.\n\n*Пример:* The exam was a piece of cake.\n\n### Формулы\n- `make + decision/mistake/effort`\n- `heavy + rain/traffic`\n- `idiom = figurative meaning`\n\n### Типичная ошибка\n❌ I did a mistake.\n✅ I made a mistake.",
      "keyPoints": [
        "Коллокации: Некоторые слова идут только вместе: make a mistake (не do), heavy rain (не stron",
        "Идиомы: Переносное значение: break the ice, under the weather, once in a blue moon.",
        "Запомни формулы: make + decision/mistake/effort; heavy + rain/traffic; idiom = figurative meaning",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «collocation»?",
        "options": [
          "принять решение",
          "растопить лёд",
          "коллокация",
          "нездоровиться"
        ],
        "answer": "коллокация"
      },
      {
        "question": "What is «idiom»?",
        "options": [
          "проще простого",
          "идиома",
          "растопить лёд",
          "повысить осведомлённость"
        ],
        "answer": "идиома"
      },
      {
        "question": "What is «make a decision»?",
        "options": [
          "нездоровиться",
          "принять решение",
          "достичь цели",
          "повысить осведомлённость"
        ],
        "answer": "принять решение"
      },
      {
        "question": "What is «heavy rain»?",
        "options": [
          "проще простого",
          "растопить лёд",
          "коллокация",
          "сильный дождь"
        ],
        "answer": "сильный дождь"
      },
      {
        "question": "What is «break the ice»?",
        "options": [
          "совершить преступление",
          "сильный дождь",
          "коллокация",
          "растопить лёд"
        ],
        "answer": "растопить лёд"
      },
      {
        "type": "gap",
        "sentence": "The word «нездоровиться» in English is ___.",
        "answer": "under the weather",
        "hint": "u…"
      },
      {
        "type": "gap",
        "sentence": "The word «проще простого» in English is ___.",
        "answer": "piece of cake",
        "hint": "p…"
      },
      {
        "type": "gap",
        "sentence": "The word «достичь цели» in English is ___.",
        "answer": "achieve a goal",
        "hint": "a…"
      }
    ]
  },
  {
    "id": 51,
    "level": "B2",
    "title": "Formal vs Informal Register",
    "titleRu": "Формальный и неформальный стиль",
    "topic": "Request, apology, complaint",
    "description": "Различаем формальный и неформальный регистр в письме и речи.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "How do you write a formal email?",
        "keywords": [
          "formal",
          "informal",
          "register",
          "request",
          "apologize",
          "complaint",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I am writing to inquire about the position."
      },
      {
        "prompt": "What's the informal way to say 'I would like to'?",
        "keywords": [
          "formal",
          "informal",
          "register",
          "request",
          "apologize",
          "complaint",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Hey! Can you send me the file?"
      },
      {
        "prompt": "How do you complain politely?",
        "keywords": [
          "formal",
          "informal",
          "register",
          "request",
          "apologize",
          "complaint",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I am writing to inquire about the position."
      }
    ],
    "vocab": [
      {
        "en": "formal",
        "ru": "формальный"
      },
      {
        "en": "informal",
        "ru": "неформальный"
      },
      {
        "en": "register",
        "ru": "регистр, стиль"
      },
      {
        "en": "request",
        "ru": "просьба"
      },
      {
        "en": "apologize",
        "ru": "извиняться"
      },
      {
        "en": "complaint",
        "ru": "жалоба"
      },
      {
        "en": "dear",
        "ru": "уважаемый (в письме)"
      },
      {
        "en": "yours sincerely",
        "ru": "с уважением"
      },
      {
        "en": "I would appreciate",
        "ru": "я был бы признателен"
      },
      {
        "en": "inform",
        "ru": "информировать"
      }
    ],
    "grammar": {
      "title": "Formal vs Informal",
      "blocks": [
        {
          "title": "Формальный",
          "desc": "I would like to, I am writing to, I would appreciate if, Please find attached, Yours sincerely.",
          "example": "I am writing to inquire about the position."
        },
        {
          "title": "Неформальный",
          "desc": "I want to, Can you, Thanks, Cheers, Hi/Hey, contractions.",
          "example": "Hey! Can you send me the file?"
        }
      ],
      "formulas": [
        "Formal: I would like / I am writing to / Could you please",
        "Informal: I want / Can you / Thanks"
      ],
      "extraExamples": [
        {
          "label": "Formal",
          "items": [
            "I would be grateful if you could...",
            "Please accept my apologies."
          ]
        },
        {
          "label": "Informal",
          "items": [
            "Sorry about that!",
            "Could you gimme a hand?"
          ]
        }
      ],
      "mistake": {
        "wrong": "Dear Sir, I want the job.",
        "right": "Dear Sir, I would like to apply for the position."
      }
    },
    "quiz": [
      {
        "sentence": "___ writing to complain about the service. (formal)",
        "options": [
          "I am",
          "I'm"
        ],
        "answer": "I am"
      },
      {
        "sentence": "___ you send me the report? (informal)",
        "options": [
          "Can",
          "May"
        ],
        "answer": "Can"
      },
      {
        "sentence": "I would ___ if you could reply.",
        "options": [
          "appreciate",
          "appreciate it"
        ],
        "answer": "appreciate"
      },
      {
        "sentence": "___ Sir/Madam, (formal start)",
        "options": [
          "Dear",
          "Hey"
        ],
        "answer": "Dear"
      },
      {
        "sentence": "Yours ___, (formal end)",
        "options": [
          "sincerely",
          "cheers"
        ],
        "answer": "sincerely"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I am writing to inform you",
        "ipa": "/aɪ æm ˈraɪtɪŋ/",
        "tip": "Formal — clear articulation",
        "expected": "I am writing to inform you"
      },
      {
        "phrase": "I would appreciate it",
        "ipa": "/aɪ wʊd əˈpriːʃieɪt/",
        "tip": "Would — не сокращай в формальной речи",
        "expected": "I would appreciate it"
      },
      {
        "phrase": "Please find attached",
        "ipa": "/pliːz faɪnd əˈtætʃt/",
        "tip": "Attached — business email phrase",
        "expected": "Please find attached"
      },
      {
        "phrase": "Sorry about that",
        "ipa": "/ˈsɒri əˈbaʊt ðæt/",
        "tip": "Informal apology",
        "expected": "Sorry about that"
      },
      {
        "phrase": "Could you please",
        "ipa": "/kʊd juː pliːz/",
        "tip": "Polite request",
        "expected": "Could you please"
      }
    ],
    "culture": {
      "watch": [
        "Business email tutorials"
      ],
      "listen": [
        "Formal speeches and interviews"
      ],
      "read": [
        "Formal and informal letter samples B2"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "Is the tone formal or informal?",
        "keywords": [
          "formal",
          "informal",
          "register",
          "request",
          "apologize",
          "complaint",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I am writing to inquire about the position."
      },
      {
        "prompt": "What formal phrase is used?",
        "keywords": [
          "formal",
          "informal",
          "register",
          "request",
          "apologize",
          "complaint",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Hey! Can you send me the file?"
      },
      {
        "prompt": "How is the letter opened and closed?",
        "keywords": [
          "formal",
          "informal",
          "register",
          "request",
          "apologize",
          "complaint",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I am writing to inquire about the position."
      },
      {
        "prompt": "What would the informal version be?",
        "keywords": [
          "formal",
          "informal",
          "register",
          "request",
          "apologize",
          "complaint",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Hey! Can you send me the file?"
      },
      {
        "prompt": "Is the complaint polite?",
        "keywords": [
          "formal",
          "informal",
          "register",
          "request",
          "apologize",
          "complaint",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I am writing to inquire about the position."
      }
    ],
    "speaking": [
      {
        "task": "Напиши formal email с просьбой.",
        "keywords": [
          "formal",
          "informal",
          "register",
          "request",
          "apologize",
          "complaint",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I am writing to inquire about the position.",
        "useSpeech": true
      },
      {
        "task": "Перепиши formal текст в informal.",
        "keywords": [
          "formal",
          "informal",
          "register",
          "request",
          "apologize",
          "complaint",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Hey! Can you send me the file?",
        "useSpeech": true
      },
      {
        "task": "Составь formal жалобу в отель.",
        "keywords": [
          "formal",
          "informal",
          "register",
          "request",
          "apologize",
          "complaint",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I am writing to inquire about the position.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "formal",
        "trans": "формальный",
        "example": "I use 'formal' every day."
      },
      {
        "word": "informal",
        "trans": "неформальный",
        "example": "I use 'informal' every day."
      },
      {
        "word": "register",
        "trans": "регистр, стиль",
        "example": "I use 'register' every day."
      },
      {
        "word": "request",
        "trans": "просьба",
        "example": "I use 'request' every day."
      },
      {
        "word": "apologize",
        "trans": "извиняться",
        "example": "I use 'apologize' every day."
      },
      {
        "word": "complaint",
        "trans": "жалоба",
        "example": "I use 'complaint' every day."
      },
      {
        "word": "dear",
        "trans": "уважаемый (в письме)",
        "example": "I use 'dear' every day."
      },
      {
        "word": "yours sincerely",
        "trans": "с уважением",
        "example": "I use 'yours sincerely' every day."
      },
      {
        "word": "I would appreciate",
        "trans": "я был бы признателен",
        "example": "I use 'I would appreciate' every day."
      },
      {
        "word": "inform",
        "trans": "информировать",
        "example": "I use 'inform' every day."
      },
      {
        "word": "formal",
        "trans": "формальный",
        "example": "Practice makes progress."
      },
      {
        "word": "informal",
        "trans": "неформальный",
        "example": "Practice makes progress."
      },
      {
        "word": "register",
        "trans": "регистр, стиль",
        "example": "Practice makes progress."
      },
      {
        "word": "request",
        "trans": "просьба",
        "example": "Practice makes progress."
      },
      {
        "word": "apologize",
        "trans": "извиняться",
        "example": "Practice makes progress."
      },
      {
        "word": "complaint",
        "trans": "жалоба",
        "example": "Practice makes progress."
      },
      {
        "word": "dear",
        "trans": "уважаемый (в письме)",
        "example": "Practice makes progress."
      },
      {
        "word": "yours sincerely",
        "trans": "с уважением",
        "example": "Practice makes progress."
      },
      {
        "word": "I would appreciate",
        "trans": "я был бы признателен",
        "example": "Practice makes progress."
      },
      {
        "word": "inform",
        "trans": "информировать",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "___ writing to complain about the service. (formal)",
        "options": [
          "I am",
          "I'm"
        ],
        "answer": "I am"
      },
      {
        "sentence": "___ you send me the report? (informal)",
        "options": [
          "Can",
          "May"
        ],
        "answer": "Can"
      }
    ],
    "theory": {
      "intro": "Различаем формальный и неформальный регистр в письме и речи.",
      "reading": "**Формальный и неформальный стиль** — Различаем формальный и неформальный регистр в письме и речи.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### Формальный\nI would like to, I am writing to, I would appreciate if, Please find attached, Yours sincerely.\n\n*Пример:* I am writing to inquire about the position.\n\n### Неформальный\nI want to, Can you, Thanks, Cheers, Hi/Hey, contractions.\n\n*Пример:* Hey! Can you send me the file?\n\n### Формулы\n- `Formal: I would like / I am writing to / Could you please`\n- `Informal: I want / Can you / Thanks`\n\n### Типичная ошибка\n❌ Dear Sir, I want the job.\n✅ Dear Sir, I would like to apply for the position.",
      "keyPoints": [
        "Формальный: I would like to, I am writing to, I would appreciate if, Please find attached, Y",
        "Неформальный: I want to, Can you, Thanks, Cheers, Hi/Hey, contractions.",
        "Запомни формулы: Formal: I would like / I am writing to / Could you please; Informal: I want / Can you / Thanks",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «formal»?",
        "options": [
          "формальный",
          "жалоба",
          "я был бы признателен",
          "информировать"
        ],
        "answer": "формальный"
      },
      {
        "question": "What is «informal»?",
        "options": [
          "извиняться",
          "с уважением",
          "неформальный",
          "я был бы признателен"
        ],
        "answer": "неформальный"
      },
      {
        "question": "What is «register»?",
        "options": [
          "регистр, стиль",
          "я был бы признателен",
          "с уважением",
          "извиняться"
        ],
        "answer": "регистр, стиль"
      },
      {
        "question": "What is «request»?",
        "options": [
          "уважаемый (в письме)",
          "извиняться",
          "просьба",
          "я был бы признателен"
        ],
        "answer": "просьба"
      },
      {
        "question": "What is «apologize»?",
        "options": [
          "уважаемый (в письме)",
          "с уважением",
          "извиняться",
          "формальный"
        ],
        "answer": "извиняться"
      },
      {
        "type": "gap",
        "sentence": "The word «жалоба» in English is ___.",
        "answer": "complaint",
        "hint": "c…"
      },
      {
        "type": "gap",
        "sentence": "The word «уважаемый (в письме)» in English is ___.",
        "answer": "dear",
        "hint": "d…"
      },
      {
        "type": "gap",
        "sentence": "The word «с уважением» in English is ___.",
        "answer": "yours sincerely",
        "hint": "y…"
      }
    ]
  },
  {
    "id": 52,
    "level": "B2",
    "title": "Linking Words & Essays",
    "titleRu": "Связующие слова и эссе",
    "topic": "However, moreover, although",
    "description": "Связующие слова для связной письменной речи и эссе B2.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "How do you start an opinion essay?",
        "keywords": [
          "however",
          "moreover",
          "although",
          "therefore",
          "furthermore",
          "nevertheless",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Although it was raining, we went out."
      },
      {
        "prompt": "What linking word shows contrast?",
        "keywords": [
          "however",
          "moreover",
          "although",
          "therefore",
          "furthermore",
          "nevertheless",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The plan is risky. However, it could succeed."
      },
      {
        "prompt": "How do you add another argument?",
        "keywords": [
          "however",
          "moreover",
          "although",
          "therefore",
          "furthermore",
          "nevertheless",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Although it was raining, we went out."
      }
    ],
    "vocab": [
      {
        "en": "however",
        "ru": "однако"
      },
      {
        "en": "moreover",
        "ru": "более того"
      },
      {
        "en": "although",
        "ru": "хотя"
      },
      {
        "en": "therefore",
        "ru": "поэтому"
      },
      {
        "en": "furthermore",
        "ru": "кроме того"
      },
      {
        "en": "nevertheless",
        "ru": "тем не менее"
      },
      {
        "en": "whereas",
        "ru": "тогда как"
      },
      {
        "en": "in addition",
        "ru": "в дополнение"
      },
      {
        "en": "on the other hand",
        "ru": "с другой стороны"
      },
      {
        "en": "conclusion",
        "ru": "заключение"
      }
    ],
    "grammar": {
      "title": "Linking Words",
      "blocks": [
        {
          "title": "Контраст",
          "desc": "However, although, whereas, on the other hand, nevertheless — показывают противопоставление.",
          "example": "Although it was raining, we went out."
        },
        {
          "title": "Добавление и вывод",
          "desc": "Moreover, furthermore, in addition — добавление. Therefore, as a result, in conclusion — вывод.",
          "example": "The plan is risky. However, it could succeed."
        }
      ],
      "formulas": [
        "Although + clause, main clause",
        "Main clause. However, ...",
        "In conclusion, + summary"
      ],
      "extraExamples": [
        {
          "label": "Contrast",
          "items": [
            "Whereas city life is busy, rural life is calm.",
            "Nevertheless, we continued."
          ]
        },
        {
          "label": "Addition/Conclusion",
          "items": [
            "Moreover, the cost is low.",
            "Therefore, I disagree."
          ]
        }
      ],
      "mistake": {
        "wrong": "Although it was late, but we stayed.",
        "right": "Although it was late, we stayed."
      }
    },
    "quiz": [
      {
        "sentence": "___, the weather was bad, we enjoyed the trip.",
        "options": [
          "Although",
          "However"
        ],
        "answer": "Although"
      },
      {
        "sentence": "The price is high. ___, the quality is excellent.",
        "options": [
          "However",
          "Moreover"
        ],
        "answer": "However"
      },
      {
        "sentence": "___, we need to consider the budget.",
        "options": [
          "Furthermore",
          "Whereas"
        ],
        "answer": "Furthermore"
      },
      {
        "sentence": "He loves sport, ___ she prefers art.",
        "options": [
          "whereas",
          "therefore"
        ],
        "answer": "whereas"
      },
      {
        "sentence": "___, I believe education is essential.",
        "options": [
          "In conclusion",
          "Although"
        ],
        "answer": "In conclusion"
      }
    ],
    "pronunciation": [
      {
        "phrase": "However, it is true",
        "ipa": "/haʊˈevə/",
        "tip": "However — stress on -ev-",
        "expected": "However, it is true"
      },
      {
        "phrase": "Although it was late",
        "ipa": "/ɔːlˈðəʊ/",
        "tip": "Although — one smooth word",
        "expected": "Although it was late"
      },
      {
        "phrase": "Furthermore",
        "ipa": "/ˈfɜːðəmɔː/",
        "tip": "Furthermore — formal link",
        "expected": "Furthermore"
      },
      {
        "phrase": "On the other hand",
        "ipa": "/ɒn ði ˈʌðə hænd/",
        "tip": "Fixed phrase — stress on other",
        "expected": "On the other hand"
      },
      {
        "phrase": "In conclusion",
        "ipa": "/ɪn kənˈkluːʒn/",
        "tip": "Conclusion — /ʒ/ sound",
        "expected": "In conclusion"
      }
    ],
    "culture": {
      "watch": [
        "Debate programmes"
      ],
      "listen": [
        "Academic lectures with linking words"
      ],
      "read": [
        "B2 essay samples with feedback"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What linking word shows contrast?",
        "keywords": [
          "however",
          "moreover",
          "although",
          "therefore",
          "furthermore",
          "nevertheless",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Although it was raining, we went out."
      },
      {
        "prompt": "What adds information?",
        "keywords": [
          "however",
          "moreover",
          "although",
          "therefore",
          "furthermore",
          "nevertheless",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The plan is risky. However, it could succeed."
      },
      {
        "prompt": "How does the essay conclude?",
        "keywords": [
          "however",
          "moreover",
          "although",
          "therefore",
          "furthermore",
          "nevertheless",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Although it was raining, we went out."
      },
      {
        "prompt": "Find although/however in the text.",
        "keywords": [
          "however",
          "moreover",
          "although",
          "therefore",
          "furthermore",
          "nevertheless",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The plan is risky. However, it could succeed."
      },
      {
        "prompt": "Is the argument logical?",
        "keywords": [
          "however",
          "moreover",
          "although",
          "therefore",
          "furthermore",
          "nevertheless",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Although it was raining, we went out."
      }
    ],
    "speaking": [
      {
        "task": "Напиши эссе 150 слов с however, moreover, in conclusion.",
        "keywords": [
          "however",
          "moreover",
          "although",
          "therefore",
          "furthermore",
          "nevertheless",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Although it was raining, we went out.",
        "useSpeech": true
      },
      {
        "task": "Соедини 4 предложения linking words.",
        "keywords": [
          "however",
          "moreover",
          "although",
          "therefore",
          "furthermore",
          "nevertheless",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The plan is risky. However, it could succeed.",
        "useSpeech": true
      },
      {
        "task": "Выскажи мнение с although и therefore.",
        "keywords": [
          "however",
          "moreover",
          "although",
          "therefore",
          "furthermore",
          "nevertheless",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Although it was raining, we went out.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "however",
        "trans": "однако",
        "example": "I use 'however' every day."
      },
      {
        "word": "moreover",
        "trans": "более того",
        "example": "I use 'moreover' every day."
      },
      {
        "word": "although",
        "trans": "хотя",
        "example": "I use 'although' every day."
      },
      {
        "word": "therefore",
        "trans": "поэтому",
        "example": "I use 'therefore' every day."
      },
      {
        "word": "furthermore",
        "trans": "кроме того",
        "example": "I use 'furthermore' every day."
      },
      {
        "word": "nevertheless",
        "trans": "тем не менее",
        "example": "I use 'nevertheless' every day."
      },
      {
        "word": "whereas",
        "trans": "тогда как",
        "example": "I use 'whereas' every day."
      },
      {
        "word": "in addition",
        "trans": "в дополнение",
        "example": "I use 'in addition' every day."
      },
      {
        "word": "on the other hand",
        "trans": "с другой стороны",
        "example": "I use 'on the other hand' every day."
      },
      {
        "word": "conclusion",
        "trans": "заключение",
        "example": "I use 'conclusion' every day."
      },
      {
        "word": "however",
        "trans": "однако",
        "example": "Practice makes progress."
      },
      {
        "word": "moreover",
        "trans": "более того",
        "example": "Practice makes progress."
      },
      {
        "word": "although",
        "trans": "хотя",
        "example": "Practice makes progress."
      },
      {
        "word": "therefore",
        "trans": "поэтому",
        "example": "Practice makes progress."
      },
      {
        "word": "furthermore",
        "trans": "кроме того",
        "example": "Practice makes progress."
      },
      {
        "word": "nevertheless",
        "trans": "тем не менее",
        "example": "Practice makes progress."
      },
      {
        "word": "whereas",
        "trans": "тогда как",
        "example": "Practice makes progress."
      },
      {
        "word": "in addition",
        "trans": "в дополнение",
        "example": "Practice makes progress."
      },
      {
        "word": "on the other hand",
        "trans": "с другой стороны",
        "example": "Practice makes progress."
      },
      {
        "word": "conclusion",
        "trans": "заключение",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "___, the weather was bad, we enjoyed the trip.",
        "options": [
          "Although",
          "However"
        ],
        "answer": "Although"
      },
      {
        "sentence": "The price is high. ___, the quality is excellent.",
        "options": [
          "However",
          "Moreover"
        ],
        "answer": "However"
      }
    ],
    "theory": {
      "intro": "Связующие слова для связной письменной речи и эссе B2.",
      "reading": "**Связующие слова и эссе** — Связующие слова для связной письменной речи и эссе B2.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### Контраст\nHowever, although, whereas, on the other hand, nevertheless — показывают противопоставление.\n\n*Пример:* Although it was raining, we went out.\n\n### Добавление и вывод\nMoreover, furthermore, in addition — добавление. Therefore, as a result, in conclusion — вывод.\n\n*Пример:* The plan is risky. However, it could succeed.\n\n### Формулы\n- `Although + clause, main clause`\n- `Main clause. However, ...`\n- `In conclusion, + summary`\n\n### Типичная ошибка\n❌ Although it was late, but we stayed.\n✅ Although it was late, we stayed.",
      "keyPoints": [
        "Контраст: However, although, whereas, on the other hand, nevertheless — показывают противо",
        "Добавление и вывод: Moreover, furthermore, in addition — добавление. Therefore, as a result, in conc",
        "Запомни формулы: Although + clause, main clause; Main clause. However, ...; In conclusion, + summary",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «however»?",
        "options": [
          "тем не менее",
          "тогда как",
          "однако",
          "с другой стороны"
        ],
        "answer": "однако"
      },
      {
        "question": "What is «moreover»?",
        "options": [
          "в дополнение",
          "заключение",
          "более того",
          "тогда как"
        ],
        "answer": "более того"
      },
      {
        "question": "What is «although»?",
        "options": [
          "хотя",
          "заключение",
          "поэтому",
          "в дополнение"
        ],
        "answer": "хотя"
      },
      {
        "question": "What is «therefore»?",
        "options": [
          "хотя",
          "с другой стороны",
          "поэтому",
          "однако"
        ],
        "answer": "поэтому"
      },
      {
        "question": "What is «furthermore»?",
        "options": [
          "тем не менее",
          "кроме того",
          "хотя",
          "поэтому"
        ],
        "answer": "кроме того"
      },
      {
        "type": "gap",
        "sentence": "The word «тем не менее» in English is ___.",
        "answer": "nevertheless",
        "hint": "n…"
      },
      {
        "type": "gap",
        "sentence": "The word «тогда как» in English is ___.",
        "answer": "whereas",
        "hint": "w…"
      },
      {
        "type": "gap",
        "sentence": "The word «в дополнение» in English is ___.",
        "answer": "in addition",
        "hint": "i…"
      }
    ]
  },
  {
    "id": 53,
    "level": "B2",
    "title": "Discussions & Opinions",
    "titleRu": "Обсуждения и мнения",
    "topic": "I believe, in my view",
    "description": "Выражаем и аргументируем мнение на уровне B2.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What is your opinion on social media?",
        "keywords": [
          "opinion",
          "agree",
          "disagree",
          "argue",
          "point of view",
          "I believe",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "In my view, technology has improved our lives."
      },
      {
        "prompt": "Do you agree that travel broadens the mind?",
        "keywords": [
          "opinion",
          "agree",
          "disagree",
          "argue",
          "point of view",
          "I believe",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I see your point, but I think we need more data."
      },
      {
        "prompt": "How do you politely disagree?",
        "keywords": [
          "opinion",
          "agree",
          "disagree",
          "argue",
          "point of view",
          "I believe",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "In my view, technology has improved our lives."
      }
    ],
    "vocab": [
      {
        "en": "opinion",
        "ru": "мнение"
      },
      {
        "en": "agree",
        "ru": "соглашаться"
      },
      {
        "en": "disagree",
        "ru": "не соглашаться"
      },
      {
        "en": "argue",
        "ru": "аргументировать"
      },
      {
        "en": "point of view",
        "ru": "точка зрения"
      },
      {
        "en": "I believe",
        "ru": "я считаю"
      },
      {
        "en": "in my view",
        "ru": "по моему мнению"
      },
      {
        "en": "to some extent",
        "ru": "в некоторой степени"
      },
      {
        "en": "convincing",
        "ru": "убедительный"
      },
      {
        "en": "controversial",
        "ru": "спорный"
      }
    ],
    "grammar": {
      "title": "Expressing Opinions",
      "blocks": [
        {
          "title": "Выражение мнения",
          "desc": "I believe, In my opinion/view, It seems to me that, I would argue that, From my perspective.",
          "example": "In my view, technology has improved our lives."
        },
        {
          "title": "Согласие и несогласие",
          "desc": "I agree/disagree, I see your point, but..., That's a valid point, however...",
          "example": "I see your point, but I think we need more data."
        }
      ],
      "formulas": [
        "In my opinion, + clause",
        "I agree/disagree because...",
        "I see your point, but..."
      ],
      "extraExamples": [
        {
          "label": "Opinion",
          "items": [
            "I firmly believe that education matters.",
            "It seems to me that the policy is unfair."
          ]
        },
        {
          "label": "Disagreement",
          "items": [
            "I understand, but I don't fully agree.",
            "That's debatable."
          ]
        }
      ],
      "mistake": {
        "wrong": "In my opinion I think it is bad.",
        "right": "In my opinion, it is harmful."
      }
    },
    "quiz": [
      {
        "sentence": "___ my view, we should invest more.",
        "options": [
          "In",
          "On"
        ],
        "answer": "In"
      },
      {
        "sentence": "I ___ with your argument.",
        "options": [
          "agree",
          "agree to"
        ],
        "answer": "agree"
      },
      {
        "sentence": "I see your point, ___ I disagree.",
        "options": [
          "but",
          "and"
        ],
        "answer": "but"
      },
      {
        "sentence": "It ___ to me that he is right.",
        "options": [
          "seems",
          "looks"
        ],
        "answer": "seems"
      },
      {
        "sentence": "That is a ___ topic.",
        "options": [
          "controversial",
          "controversy"
        ],
        "answer": "controversial"
      }
    ],
    "pronunciation": [
      {
        "phrase": "In my opinion",
        "ipa": "/ɪn maɪ əˈpɪnjən/",
        "tip": "Opinion — stress on -pin-",
        "expected": "In my opinion"
      },
      {
        "phrase": "I see your point",
        "ipa": "/aɪ siː jɔː pɔɪnt/",
        "tip": "Polite disagreement starter",
        "expected": "I see your point"
      },
      {
        "phrase": "I firmly believe",
        "ipa": "/aɪ ˈfɜːmli bɪˈliːv/",
        "tip": "Firmly — shows strong opinion",
        "expected": "I firmly believe"
      },
      {
        "phrase": "to some extent",
        "ipa": "/tə sʌm ɪkˈstent/",
        "tip": "Partial agreement phrase",
        "expected": "to some extent"
      },
      {
        "phrase": "That's debatable",
        "ipa": "/ðæts dɪˈbeɪtəbl/",
        "tip": "Polite challenge",
        "expected": "That's debatable"
      }
    ],
    "culture": {
      "watch": [
        "Panel discussions and podcasts"
      ],
      "listen": [
        "BBC World Service — debates"
      ],
      "read": [
        "Opinion columns B2"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What opinion phrase is used?",
        "keywords": [
          "opinion",
          "agree",
          "disagree",
          "argue",
          "point of view",
          "I believe",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "In my view, technology has improved our lives."
      },
      {
        "prompt": "Does the speaker agree or disagree?",
        "keywords": [
          "opinion",
          "agree",
          "disagree",
          "argue",
          "point of view",
          "I believe",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I see your point, but I think we need more data."
      },
      {
        "prompt": "What arguments are given?",
        "keywords": [
          "opinion",
          "agree",
          "disagree",
          "argue",
          "point of view",
          "I believe",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "In my view, technology has improved our lives."
      },
      {
        "prompt": "Is the topic controversial?",
        "keywords": [
          "opinion",
          "agree",
          "disagree",
          "argue",
          "point of view",
          "I believe",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I see your point, but I think we need more data."
      },
      {
        "prompt": "How do they disagree politely?",
        "keywords": [
          "opinion",
          "agree",
          "disagree",
          "argue",
          "point of view",
          "I believe",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "In my view, technology has improved our lives."
      }
    ],
    "speaking": [
      {
        "task": "Выскажи мнение о 3 спорных темах.",
        "keywords": [
          "opinion",
          "agree",
          "disagree",
          "argue",
          "point of view",
          "I believe",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "In my view, technology has improved our lives.",
        "useSpeech": true
      },
      {
        "task": "Проведи мини-дебаты: за и против.",
        "keywords": [
          "opinion",
          "agree",
          "disagree",
          "argue",
          "point of view",
          "I believe",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I see your point, but I think we need more data.",
        "useSpeech": true
      },
      {
        "task": "Ответь на мнение собеседника с I see your point, but...",
        "keywords": [
          "opinion",
          "agree",
          "disagree",
          "argue",
          "point of view",
          "I believe",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "In my view, technology has improved our lives.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "opinion",
        "trans": "мнение",
        "example": "I use 'opinion' every day."
      },
      {
        "word": "agree",
        "trans": "соглашаться",
        "example": "I use 'agree' every day."
      },
      {
        "word": "disagree",
        "trans": "не соглашаться",
        "example": "I use 'disagree' every day."
      },
      {
        "word": "argue",
        "trans": "аргументировать",
        "example": "I use 'argue' every day."
      },
      {
        "word": "point of view",
        "trans": "точка зрения",
        "example": "I use 'point of view' every day."
      },
      {
        "word": "I believe",
        "trans": "я считаю",
        "example": "I use 'I believe' every day."
      },
      {
        "word": "in my view",
        "trans": "по моему мнению",
        "example": "I use 'in my view' every day."
      },
      {
        "word": "to some extent",
        "trans": "в некоторой степени",
        "example": "I use 'to some extent' every day."
      },
      {
        "word": "convincing",
        "trans": "убедительный",
        "example": "I use 'convincing' every day."
      },
      {
        "word": "controversial",
        "trans": "спорный",
        "example": "I use 'controversial' every day."
      },
      {
        "word": "opinion",
        "trans": "мнение",
        "example": "Practice makes progress."
      },
      {
        "word": "agree",
        "trans": "соглашаться",
        "example": "Practice makes progress."
      },
      {
        "word": "disagree",
        "trans": "не соглашаться",
        "example": "Practice makes progress."
      },
      {
        "word": "argue",
        "trans": "аргументировать",
        "example": "Practice makes progress."
      },
      {
        "word": "point of view",
        "trans": "точка зрения",
        "example": "Practice makes progress."
      },
      {
        "word": "I believe",
        "trans": "я считаю",
        "example": "Practice makes progress."
      },
      {
        "word": "in my view",
        "trans": "по моему мнению",
        "example": "Practice makes progress."
      },
      {
        "word": "to some extent",
        "trans": "в некоторой степени",
        "example": "Practice makes progress."
      },
      {
        "word": "convincing",
        "trans": "убедительный",
        "example": "Practice makes progress."
      },
      {
        "word": "controversial",
        "trans": "спорный",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "___ my view, we should invest more.",
        "options": [
          "In",
          "On"
        ],
        "answer": "In"
      },
      {
        "sentence": "I ___ with your argument.",
        "options": [
          "agree",
          "agree to"
        ],
        "answer": "agree"
      }
    ],
    "theory": {
      "intro": "Выражаем и аргументируем мнение на уровне B2.",
      "reading": "**Обсуждения и мнения** — Выражаем и аргументируем мнение на уровне B2.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### Выражение мнения\nI believe, In my opinion/view, It seems to me that, I would argue that, From my perspective.\n\n*Пример:* In my view, technology has improved our lives.\n\n### Согласие и несогласие\nI agree/disagree, I see your point, but..., That's a valid point, however...\n\n*Пример:* I see your point, but I think we need more data.\n\n### Формулы\n- `In my opinion, + clause`\n- `I agree/disagree because...`\n- `I see your point, but...`\n\n### Типичная ошибка\n❌ In my opinion I think it is bad.\n✅ In my opinion, it is harmful.",
      "keyPoints": [
        "Выражение мнения: I believe, In my opinion/view, It seems to me that, I would argue that, From my ",
        "Согласие и несогласие: I agree/disagree, I see your point, but..., That's a valid point, however...",
        "Запомни формулы: In my opinion, + clause; I agree/disagree because...; I see your point, but...",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «opinion»?",
        "options": [
          "не соглашаться",
          "я считаю",
          "мнение",
          "аргументировать"
        ],
        "answer": "мнение"
      },
      {
        "question": "What is «agree»?",
        "options": [
          "мнение",
          "аргументировать",
          "соглашаться",
          "я считаю"
        ],
        "answer": "соглашаться"
      },
      {
        "question": "What is «disagree»?",
        "options": [
          "убедительный",
          "не соглашаться",
          "точка зрения",
          "аргументировать"
        ],
        "answer": "не соглашаться"
      },
      {
        "question": "What is «argue»?",
        "options": [
          "убедительный",
          "я считаю",
          "не соглашаться",
          "аргументировать"
        ],
        "answer": "аргументировать"
      },
      {
        "question": "What is «point of view»?",
        "options": [
          "в некоторой степени",
          "аргументировать",
          "убедительный",
          "точка зрения"
        ],
        "answer": "точка зрения"
      },
      {
        "type": "gap",
        "sentence": "The word «я считаю» in English is ___.",
        "answer": "I believe",
        "hint": "I…"
      },
      {
        "type": "gap",
        "sentence": "The word «по моему мнению» in English is ___.",
        "answer": "in my view",
        "hint": "i…"
      },
      {
        "type": "gap",
        "sentence": "The word «в некоторой степени» in English is ___.",
        "answer": "to some extent",
        "hint": "t…"
      }
    ]
  },
  {
    "id": 54,
    "level": "B2",
    "title": "Inversion & Emphasis",
    "titleRu": "Инверсия и эмфаза",
    "topic": "Not only..., Never have I...",
    "description": "Инверсия для эмфазы и формального стиля B2.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "Not only did he win, but...",
        "keywords": [
          "inversion",
          "emphasis",
          "not only",
          "never",
          "rarely",
          "seldom",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Never have I been so impressed."
      },
      {
        "prompt": "Never have I seen such a view.",
        "keywords": [
          "inversion",
          "emphasis",
          "not only",
          "never",
          "rarely",
          "seldom",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "It was John who called yesterday."
      },
      {
        "prompt": "What emphatic structures do you know?",
        "keywords": [
          "inversion",
          "emphasis",
          "not only",
          "never",
          "rarely",
          "seldom",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Never have I been so impressed."
      }
    ],
    "vocab": [
      {
        "en": "inversion",
        "ru": "инверсия"
      },
      {
        "en": "emphasis",
        "ru": "эмфаза"
      },
      {
        "en": "not only",
        "ru": "не только"
      },
      {
        "en": "never",
        "ru": "никогда"
      },
      {
        "en": "rarely",
        "ru": "редко"
      },
      {
        "en": "seldom",
        "ru": "изредка"
      },
      {
        "en": "hardly",
        "ru": "едва"
      },
      {
        "en": "no sooner",
        "ru": "как только"
      },
      {
        "en": "cleft sentence",
        "ru": "расщеплённое предложение"
      },
      {
        "en": "what-clause",
        "ru": "what-конструкция"
      }
    ],
    "grammar": {
      "title": "Inversion & Emphasis",
      "blocks": [
        {
          "title": "Negative inversion",
          "desc": "Never/Rarely/Seldom/Hardly + auxiliary + subject. Not only...but also.",
          "example": "Never have I been so impressed."
        },
        {
          "title": "Cleft sentences",
          "desc": "It is/was...that/who для эмфазы. What I need is...",
          "example": "It was John who called yesterday."
        }
      ],
      "formulas": [
        "Never/Rarely + have/had + subject + V3",
        "It is/was + focus + that/who"
      ],
      "extraExamples": [
        {
          "label": "Inversion",
          "items": [
            "Rarely do we see such talent.",
            "Not only did she pass, but she got top marks."
          ]
        },
        {
          "label": "Cleft",
          "items": [
            "What I love is the atmosphere.",
            "It is the price that worries me."
          ]
        }
      ],
      "mistake": {
        "wrong": "Never I have seen this.",
        "right": "Never have I seen this."
      }
    },
    "quiz": [
      {
        "sentence": "Never ___ I seen such beauty.",
        "options": [
          "have",
          "has"
        ],
        "answer": "have"
      },
      {
        "sentence": "Not only did he arrive late, ___ he forgot the documents.",
        "options": [
          "but",
          "and"
        ],
        "answer": "but"
      },
      {
        "sentence": "Rarely ___ she complain.",
        "options": [
          "does",
          "do"
        ],
        "answer": "does"
      },
      {
        "sentence": "It was Maria ___ solved the problem.",
        "options": [
          "who",
          "which"
        ],
        "answer": "who"
      },
      {
        "sentence": "___ I need is more time.",
        "options": [
          "What",
          "That"
        ],
        "answer": "What"
      }
    ],
    "pronunciation": [
      {
        "phrase": "Never have I seen",
        "ipa": "/ˈnevə hæv aɪ siːn/",
        "tip": "Inversion — formal emphasis",
        "expected": "Never have I seen"
      },
      {
        "phrase": "Not only but also",
        "ipa": "/nɒt ˈəʊnli bət ˈɔːlsəʊ/",
        "tip": "Paired structure",
        "expected": "Not only but also"
      },
      {
        "phrase": "Rarely do we",
        "ipa": "/ˈreəli duː wiː/",
        "tip": "Rarely — inversion trigger",
        "expected": "Rarely do we"
      },
      {
        "phrase": "It was John who",
        "ipa": "/ɪt wɒz dʒɒn huː/",
        "tip": "Cleft — stress on John",
        "expected": "It was John who"
      },
      {
        "phrase": "What I need is",
        "ipa": "/wɒt aɪ niːd ɪz/",
        "tip": "What-cleft emphasis",
        "expected": "What I need is"
      }
    ],
    "culture": {
      "watch": [
        "Formal speeches — rhetorical devices"
      ],
      "listen": [
        "Political speeches with emphasis"
      ],
      "read": [
        "Advanced grammar B2 texts"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What inversion structure appears?",
        "keywords": [
          "inversion",
          "emphasis",
          "not only",
          "never",
          "rarely",
          "seldom",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Never have I been so impressed."
      },
      {
        "prompt": "What is emphasised in the cleft sentence?",
        "keywords": [
          "inversion",
          "emphasis",
          "not only",
          "never",
          "rarely",
          "seldom",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It was John who called yesterday."
      },
      {
        "prompt": "What negative adverb triggers inversion?",
        "keywords": [
          "inversion",
          "emphasis",
          "not only",
          "never",
          "rarely",
          "seldom",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Never have I been so impressed."
      },
      {
        "prompt": "Not only...but also?",
        "keywords": [
          "inversion",
          "emphasis",
          "not only",
          "never",
          "rarely",
          "seldom",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It was John who called yesterday."
      },
      {
        "prompt": "What is the formal effect?",
        "keywords": [
          "inversion",
          "emphasis",
          "not only",
          "never",
          "rarely",
          "seldom",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Never have I been so impressed."
      }
    ],
    "speaking": [
      {
        "task": "Составь 3 предложения с Never/Rarely + inversion.",
        "keywords": [
          "inversion",
          "emphasis",
          "not only",
          "never",
          "rarely",
          "seldom",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Never have I been so impressed.",
        "useSpeech": true
      },
      {
        "task": "Напиши 2 cleft sentences о своих приоритетах.",
        "keywords": [
          "inversion",
          "emphasis",
          "not only",
          "never",
          "rarely",
          "seldom",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "It was John who called yesterday.",
        "useSpeech": true
      },
      {
        "task": "Перефразируй с Not only...but also.",
        "keywords": [
          "inversion",
          "emphasis",
          "not only",
          "never",
          "rarely",
          "seldom",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Never have I been so impressed.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "inversion",
        "trans": "инверсия",
        "example": "I use 'inversion' every day."
      },
      {
        "word": "emphasis",
        "trans": "эмфаза",
        "example": "I use 'emphasis' every day."
      },
      {
        "word": "not only",
        "trans": "не только",
        "example": "I use 'not only' every day."
      },
      {
        "word": "never",
        "trans": "никогда",
        "example": "I use 'never' every day."
      },
      {
        "word": "rarely",
        "trans": "редко",
        "example": "I use 'rarely' every day."
      },
      {
        "word": "seldom",
        "trans": "изредка",
        "example": "I use 'seldom' every day."
      },
      {
        "word": "hardly",
        "trans": "едва",
        "example": "I use 'hardly' every day."
      },
      {
        "word": "no sooner",
        "trans": "как только",
        "example": "I use 'no sooner' every day."
      },
      {
        "word": "cleft sentence",
        "trans": "расщеплённое предложение",
        "example": "I use 'cleft sentence' every day."
      },
      {
        "word": "what-clause",
        "trans": "what-конструкция",
        "example": "I use 'what-clause' every day."
      },
      {
        "word": "inversion",
        "trans": "инверсия",
        "example": "Practice makes progress."
      },
      {
        "word": "emphasis",
        "trans": "эмфаза",
        "example": "Practice makes progress."
      },
      {
        "word": "not only",
        "trans": "не только",
        "example": "Practice makes progress."
      },
      {
        "word": "never",
        "trans": "никогда",
        "example": "Practice makes progress."
      },
      {
        "word": "rarely",
        "trans": "редко",
        "example": "Practice makes progress."
      },
      {
        "word": "seldom",
        "trans": "изредка",
        "example": "Practice makes progress."
      },
      {
        "word": "hardly",
        "trans": "едва",
        "example": "Practice makes progress."
      },
      {
        "word": "no sooner",
        "trans": "как только",
        "example": "Practice makes progress."
      },
      {
        "word": "cleft sentence",
        "trans": "расщеплённое предложение",
        "example": "Practice makes progress."
      },
      {
        "word": "what-clause",
        "trans": "what-конструкция",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "Never ___ I seen such beauty.",
        "options": [
          "have",
          "has"
        ],
        "answer": "have"
      },
      {
        "sentence": "Not only did he arrive late, ___ he forgot the documents.",
        "options": [
          "but",
          "and"
        ],
        "answer": "but"
      }
    ],
    "theory": {
      "intro": "Инверсия для эмфазы и формального стиля B2.",
      "reading": "**Инверсия и эмфаза** — Инверсия для эмфазы и формального стиля B2.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### Negative inversion\nNever/Rarely/Seldom/Hardly + auxiliary + subject. Not only...but also.\n\n*Пример:* Never have I been so impressed.\n\n### Cleft sentences\nIt is/was...that/who для эмфазы. What I need is...\n\n*Пример:* It was John who called yesterday.\n\n### Формулы\n- `Never/Rarely + have/had + subject + V3`\n- `It is/was + focus + that/who`\n\n### Типичная ошибка\n❌ Never I have seen this.\n✅ Never have I seen this.",
      "keyPoints": [
        "Negative inversion: Never/Rarely/Seldom/Hardly + auxiliary + subject. Not only...but also.",
        "Cleft sentences: It is/was...that/who для эмфазы. What I need is...",
        "Запомни формулы: Never/Rarely + have/had + subject + V3; It is/was + focus + that/who",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «inversion»?",
        "options": [
          "не только",
          "эмфаза",
          "инверсия",
          "what-конструкция"
        ],
        "answer": "инверсия"
      },
      {
        "question": "What is «emphasis»?",
        "options": [
          "эмфаза",
          "не только",
          "изредка",
          "what-конструкция"
        ],
        "answer": "эмфаза"
      },
      {
        "question": "What is «not only»?",
        "options": [
          "как только",
          "изредка",
          "едва",
          "не только"
        ],
        "answer": "не только"
      },
      {
        "question": "What is «never»?",
        "options": [
          "никогда",
          "едва",
          "what-конструкция",
          "расщеплённое предложение"
        ],
        "answer": "никогда"
      },
      {
        "question": "What is «rarely»?",
        "options": [
          "расщеплённое предложение",
          "what-конструкция",
          "не только",
          "редко"
        ],
        "answer": "редко"
      },
      {
        "type": "gap",
        "sentence": "The word «изредка» in English is ___.",
        "answer": "seldom",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «едва» in English is ___.",
        "answer": "hardly",
        "hint": "h…"
      },
      {
        "type": "gap",
        "sentence": "The word «как только» in English is ___.",
        "answer": "no sooner",
        "hint": "n…"
      }
    ]
  },
  {
    "id": 55,
    "level": "B2",
    "title": "B2 Exam Skills & Review",
    "titleRu": "Экзамен B2 и итоговое повторение",
    "topic": "Reading, listening, review",
    "description": "Стратегии экзамена B2: чтение, аудирование, повторение всех тем курса.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What B2 exam do you know?",
        "keywords": [
          "exam",
          "strategy",
          "skim",
          "scan",
          "keyword",
          "task",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Skim the title and first paragraph first."
      },
      {
        "prompt": "How do you manage time in reading tasks?",
        "keywords": [
          "exam",
          "strategy",
          "skim",
          "scan",
          "keyword",
          "task",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Review one topic per day before the exam."
      },
      {
        "prompt": "What grammar topics are hardest for you?",
        "keywords": [
          "exam",
          "strategy",
          "skim",
          "scan",
          "keyword",
          "task",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Skim the title and first paragraph first."
      }
    ],
    "vocab": [
      {
        "en": "exam",
        "ru": "экзамен"
      },
      {
        "en": "strategy",
        "ru": "стратегия"
      },
      {
        "en": "skim",
        "ru": "бегло просматривать"
      },
      {
        "en": "scan",
        "ru": "искать информацию"
      },
      {
        "en": "keyword",
        "ru": "ключевое слово"
      },
      {
        "en": "task",
        "ru": "задание"
      },
      {
        "en": "review",
        "ru": "повторение"
      },
      {
        "en": "assessment",
        "ru": "оценка"
      },
      {
        "en": "certificate",
        "ru": "сертификат"
      },
      {
        "en": "proficiency",
        "ru": "владение языком"
      }
    ],
    "grammar": {
      "title": "B2 Review",
      "blocks": [
        {
          "title": "Экзаменационные навыки",
          "desc": "Reading: skim для общей идеи, scan для деталей. Listening: читай вопросы заранее. Writing: план из 4 абзацев.",
          "example": "Skim the title and first paragraph first."
        },
        {
          "title": "Повторение грамматики",
          "desc": "B2: все времена, conditionals, passive, reported speech, modals, relative clauses, word formation, linking words.",
          "example": "Review one topic per day before the exam."
        }
      ],
      "formulas": [
        "Skim → general idea / Scan → specific info",
        "Essay: intro + 2 body paragraphs + conclusion"
      ],
      "extraExamples": [
        {
          "label": "Exam tips",
          "items": [
            "Underline keywords in questions.",
            "Check word limit in writing."
          ]
        },
        {
          "label": "Review checklist",
          "items": [
            "Conditionals ✓ Passive ✓ Linking words ✓"
          ]
        }
      ],
      "mistake": {
        "wrong": "I read every word slowly in the exam.",
        "right": "I skim first, then scan for answers."
      }
    },
    "quiz": [
      {
        "sentence": "To find a date quickly, you ___.",
        "options": [
          "scan",
          "skim"
        ],
        "answer": "scan"
      },
      {
        "sentence": "For the main idea, you ___.",
        "options": [
          "skim",
          "scan"
        ],
        "answer": "skim"
      },
      {
        "sentence": "B2 level is ___ C1.",
        "options": [
          "below",
          "above"
        ],
        "answer": "below"
      },
      {
        "sentence": "In an essay, start with ___.",
        "options": [
          "an introduction",
          "a conclusion"
        ],
        "answer": "an introduction"
      },
      {
        "sentence": "Word formation is tested ___ B2 exams.",
        "options": [
          "in",
          "on"
        ],
        "answer": "in"
      }
    ],
    "pronunciation": [
      {
        "phrase": "skim and scan",
        "ipa": "/skɪm ənd skæn/",
        "tip": "Reading strategies vocabulary",
        "expected": "skim and scan"
      },
      {
        "phrase": "B2 proficiency",
        "ipa": "/biː tuː prəˈfɪʃnsi/",
        "tip": "Proficiency — formal term",
        "expected": "B2 proficiency"
      },
      {
        "phrase": "assessment task",
        "ipa": "/əˈsesmənt tɑːsk/",
        "tip": "Assessment — exam context",
        "expected": "assessment task"
      },
      {
        "phrase": "in conclusion",
        "ipa": "/ɪn kənˈkluːʒn/",
        "tip": "Essay ending phrase",
        "expected": "in conclusion"
      },
      {
        "phrase": "key word",
        "ipa": "/kiː wɜːd/",
        "tip": "Exam technique term",
        "expected": "key word"
      }
    ],
    "culture": {
      "watch": [
        "B2 exam preparation videos"
      ],
      "listen": [
        "B2 listening practice tests"
      ],
      "read": [
        "FCE/IELTS B2 sample papers"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What exam strategies do you use?",
        "keywords": [
          "exam",
          "strategy",
          "skim",
          "scan",
          "keyword",
          "task",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Skim the title and first paragraph first."
      },
      {
        "prompt": "Which grammar topic needs review?",
        "keywords": [
          "exam",
          "strategy",
          "skim",
          "scan",
          "keyword",
          "task",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Review one topic per day before the exam."
      },
      {
        "prompt": "How do you structure an essay?",
        "keywords": [
          "exam",
          "strategy",
          "skim",
          "scan",
          "keyword",
          "task",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Skim the title and first paragraph first."
      },
      {
        "prompt": "What is skim vs scan?",
        "keywords": [
          "exam",
          "strategy",
          "skim",
          "scan",
          "keyword",
          "task",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Review one topic per day before the exam."
      },
      {
        "prompt": "Are you ready for B2 tasks?",
        "keywords": [
          "exam",
          "strategy",
          "skim",
          "scan",
          "keyword",
          "task",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Skim the title and first paragraph first."
      }
    ],
    "speaking": [
      {
        "task": "Составь план эссе B2 на выбранную тему.",
        "keywords": [
          "exam",
          "strategy",
          "skim",
          "scan",
          "keyword",
          "task",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Skim the title and first paragraph first.",
        "useSpeech": true
      },
      {
        "task": "Назови 5 тем для повторения перед экзаменом.",
        "keywords": [
          "exam",
          "strategy",
          "skim",
          "scan",
          "keyword",
          "task",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Review one topic per day before the exam.",
        "useSpeech": true
      },
      {
        "task": "Пройди мини-тест: 5 вопросов из разных уроков курса.",
        "keywords": [
          "exam",
          "strategy",
          "skim",
          "scan",
          "keyword",
          "task",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Skim the title and first paragraph first.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "exam",
        "trans": "экзамен",
        "example": "I use 'exam' every day."
      },
      {
        "word": "strategy",
        "trans": "стратегия",
        "example": "I use 'strategy' every day."
      },
      {
        "word": "skim",
        "trans": "бегло просматривать",
        "example": "I use 'skim' every day."
      },
      {
        "word": "scan",
        "trans": "искать информацию",
        "example": "I use 'scan' every day."
      },
      {
        "word": "keyword",
        "trans": "ключевое слово",
        "example": "I use 'keyword' every day."
      },
      {
        "word": "task",
        "trans": "задание",
        "example": "I use 'task' every day."
      },
      {
        "word": "review",
        "trans": "повторение",
        "example": "I use 'review' every day."
      },
      {
        "word": "assessment",
        "trans": "оценка",
        "example": "I use 'assessment' every day."
      },
      {
        "word": "certificate",
        "trans": "сертификат",
        "example": "I use 'certificate' every day."
      },
      {
        "word": "proficiency",
        "trans": "владение языком",
        "example": "I use 'proficiency' every day."
      },
      {
        "word": "exam",
        "trans": "экзамен",
        "example": "Practice makes progress."
      },
      {
        "word": "strategy",
        "trans": "стратегия",
        "example": "Practice makes progress."
      },
      {
        "word": "skim",
        "trans": "бегло просматривать",
        "example": "Practice makes progress."
      },
      {
        "word": "scan",
        "trans": "искать информацию",
        "example": "Practice makes progress."
      },
      {
        "word": "keyword",
        "trans": "ключевое слово",
        "example": "Practice makes progress."
      },
      {
        "word": "task",
        "trans": "задание",
        "example": "Practice makes progress."
      },
      {
        "word": "review",
        "trans": "повторение",
        "example": "Practice makes progress."
      },
      {
        "word": "assessment",
        "trans": "оценка",
        "example": "Practice makes progress."
      },
      {
        "word": "certificate",
        "trans": "сертификат",
        "example": "Practice makes progress."
      },
      {
        "word": "proficiency",
        "trans": "владение языком",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "To find a date quickly, you ___.",
        "options": [
          "scan",
          "skim"
        ],
        "answer": "scan"
      },
      {
        "sentence": "For the main idea, you ___.",
        "options": [
          "skim",
          "scan"
        ],
        "answer": "skim"
      }
    ],
    "theory": {
      "intro": "Стратегии экзамена B2: чтение, аудирование, повторение всех тем курса.",
      "reading": "**Экзамен B2 и итоговое повторение** — Стратегии экзамена B2: чтение, аудирование, повторение всех тем курса.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### Экзаменационные навыки\nReading: skim для общей идеи, scan для деталей. Listening: читай вопросы заранее. Writing: план из 4 абзацев.\n\n*Пример:* Skim the title and first paragraph first.\n\n### Повторение грамматики\nB2: все времена, conditionals, passive, reported speech, modals, relative clauses, word formation, linking words.\n\n*Пример:* Review one topic per day before the exam.\n\n### Формулы\n- `Skim → general idea / Scan → specific info`\n- `Essay: intro + 2 body paragraphs + conclusion`\n\n### Типичная ошибка\n❌ I read every word slowly in the exam.\n✅ I skim first, then scan for answers.",
      "keyPoints": [
        "Экзаменационные навыки: Reading: skim для общей идеи, scan для деталей. Listening: читай вопросы заранее",
        "Повторение грамматики: B2: все времена, conditionals, passive, reported speech, modals, relative clause",
        "Запомни формулы: Skim → general idea / Scan → specific info; Essay: intro + 2 body paragraphs + conclusion",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «exam»?",
        "options": [
          "владение языком",
          "экзамен",
          "повторение",
          "оценка"
        ],
        "answer": "экзамен"
      },
      {
        "question": "What is «strategy»?",
        "options": [
          "ключевое слово",
          "повторение",
          "стратегия",
          "задание"
        ],
        "answer": "стратегия"
      },
      {
        "question": "What is «skim»?",
        "options": [
          "повторение",
          "экзамен",
          "бегло просматривать",
          "оценка"
        ],
        "answer": "бегло просматривать"
      },
      {
        "question": "What is «scan»?",
        "options": [
          "искать информацию",
          "задание",
          "экзамен",
          "ключевое слово"
        ],
        "answer": "искать информацию"
      },
      {
        "question": "What is «keyword»?",
        "options": [
          "ключевое слово",
          "сертификат",
          "задание",
          "стратегия"
        ],
        "answer": "ключевое слово"
      },
      {
        "type": "gap",
        "sentence": "The word «задание» in English is ___.",
        "answer": "task",
        "hint": "t…"
      },
      {
        "type": "gap",
        "sentence": "The word «повторение» in English is ___.",
        "answer": "review",
        "hint": "r…"
      },
      {
        "type": "gap",
        "sentence": "The word «оценка» in English is ___.",
        "answer": "assessment",
        "hint": "a…"
      }
    ]
  },
  {
    "id": 56,
    "level": "B2",
    "title": "Phrasal Verbs 2",
    "titleRu": "Фразовые глаголы 2",
    "topic": "carry out, bring up, run out",
    "description": "Продвинутые фразовые глаголы уровня B2 для академического и делового английского.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What does 'carry out research' mean?",
        "keywords": [
          "carry out",
          "bring up",
          "run out",
          "set up",
          "come across",
          "deal with",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Scientists carried out a series of experiments."
      },
      {
        "prompt": "Have you ever run out of time?",
        "keywords": [
          "carry out",
          "bring up",
          "run out",
          "set up",
          "come across",
          "deal with",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "We ran out of milk this morning."
      },
      {
        "prompt": "Who brought you up?",
        "keywords": [
          "carry out",
          "bring up",
          "run out",
          "set up",
          "come across",
          "deal with",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Scientists carried out a series of experiments."
      }
    ],
    "vocab": [
      {
        "en": "carry out",
        "ru": "проводить, выполнять"
      },
      {
        "en": "bring up",
        "ru": "воспитывать, поднимать тему"
      },
      {
        "en": "run out",
        "ru": "заканчиваться"
      },
      {
        "en": "set up",
        "ru": "организовать"
      },
      {
        "en": "come across",
        "ru": "наткнуться, встретить"
      },
      {
        "en": "deal with",
        "ru": "иметь дело с"
      },
      {
        "en": "point out",
        "ru": "указывать"
      },
      {
        "en": "work out",
        "ru": "выяснить, проработать"
      },
      {
        "en": "turn out",
        "ru": "оказаться"
      },
      {
        "en": "break down",
        "ru": "ломаться, разбирать"
      }
    ],
    "grammar": {
      "title": "Advanced Phrasal Verbs",
      "blocks": [
        {
          "title": "Академические и деловые",
          "desc": "Carry out research/an experiment. Set up a meeting. Deal with a problem. Point out an error.",
          "example": "Scientists carried out a series of experiments."
        },
        {
          "title": "Разговорные и переносные",
          "desc": "Run out of time/money. Come across as friendly. Turn out to be true. Break down in tears.",
          "example": "We ran out of milk this morning."
        }
      ],
      "formulas": [
        "carry out + task/research",
        "run out of + noun",
        "turn out + to be / that"
      ],
      "extraExamples": [
        {
          "label": "Formal",
          "items": [
            "The report points out several flaws.",
            "They set up a new department."
          ]
        },
        {
          "label": "Informal",
          "items": [
            "It turned out fine.",
            "I came across an old friend."
          ]
        }
      ],
      "mistake": {
        "wrong": "We ran out from time.",
        "right": "We ran out of time."
      }
    },
    "quiz": [
      {
        "sentence": "Researchers ___ a study last year.",
        "options": [
          "carried out",
          "carried on"
        ],
        "answer": "carried out"
      },
      {
        "sentence": "We have ___ of coffee.",
        "options": [
          "run out",
          "run off"
        ],
        "answer": "run out"
      },
      {
        "sentence": "She was ___ in London.",
        "options": [
          "brought up",
          "brought in"
        ],
        "answer": "brought up"
      },
      {
        "sentence": "It ___ to be more difficult than expected.",
        "options": [
          "turned out",
          "turned up"
        ],
        "answer": "turned out"
      },
      {
        "sentence": "We need to ___ this issue immediately.",
        "options": [
          "deal with",
          "deal in"
        ],
        "answer": "deal with"
      }
    ],
    "pronunciation": [
      {
        "phrase": "carry out research",
        "ipa": "/ˈkæri aʊt rɪˈsɜːtʃ/",
        "tip": "Carry out — formal collocation",
        "expected": "carry out research"
      },
      {
        "phrase": "run out of time",
        "ipa": "/rʌn aʊt əv taɪm/",
        "tip": "Run out of — fixed preposition",
        "expected": "run out of time"
      },
      {
        "phrase": "bring up a topic",
        "ipa": "/brɪŋ ʌp ə ˈtɒpɪk/",
        "tip": "Bring up — two meanings",
        "expected": "bring up a topic"
      },
      {
        "phrase": "turn out well",
        "ipa": "/tɜːn aʊt wel/",
        "tip": "Turn out — result meaning",
        "expected": "turn out well"
      },
      {
        "phrase": "deal with problems",
        "ipa": "/diːl wɪð ˈprɒbləmz/",
        "tip": "Deal with — formal",
        "expected": "deal with problems"
      }
    ],
    "culture": {
      "watch": [
        "Business documentaries"
      ],
      "listen": [
        "BBC Business Daily"
      ],
      "read": [
        "B2 phrasal verb advanced lists"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What phrasal verb means 'perform'?",
        "keywords": [
          "carry out",
          "bring up",
          "run out",
          "set up",
          "come across",
          "deal with",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Scientists carried out a series of experiments."
      },
      {
        "prompt": "What does run out of mean?",
        "keywords": [
          "carry out",
          "bring up",
          "run out",
          "set up",
          "come across",
          "deal with",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "We ran out of milk this morning."
      },
      {
        "prompt": "Find carry out in the text.",
        "keywords": [
          "carry out",
          "bring up",
          "run out",
          "set up",
          "come across",
          "deal with",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Scientists carried out a series of experiments."
      },
      {
        "prompt": "Turn out — what happened?",
        "keywords": [
          "carry out",
          "bring up",
          "run out",
          "set up",
          "come across",
          "deal with",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "We ran out of milk this morning."
      },
      {
        "prompt": "Deal with — how do they handle it?",
        "keywords": [
          "carry out",
          "bring up",
          "run out",
          "set up",
          "come across",
          "deal with",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Scientists carried out a series of experiments."
      }
    ],
    "speaking": [
      {
        "task": "Используй 5 B2 phrasal verbs в рассказе о проекте.",
        "keywords": [
          "carry out",
          "bring up",
          "run out",
          "set up",
          "come across",
          "deal with",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Scientists carried out a series of experiments.",
        "useSpeech": true
      },
      {
        "task": "Объясни разницу bring up (child) vs bring up (topic).",
        "keywords": [
          "carry out",
          "bring up",
          "run out",
          "set up",
          "come across",
          "deal with",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "We ran out of milk this morning.",
        "useSpeech": true
      },
      {
        "task": "Составь предложения с run out, turn out, deal with.",
        "keywords": [
          "carry out",
          "bring up",
          "run out",
          "set up",
          "come across",
          "deal with",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Scientists carried out a series of experiments.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "carry out",
        "trans": "проводить, выполнять",
        "example": "I use 'carry out' every day."
      },
      {
        "word": "bring up",
        "trans": "воспитывать, поднимать тему",
        "example": "I use 'bring up' every day."
      },
      {
        "word": "run out",
        "trans": "заканчиваться",
        "example": "I use 'run out' every day."
      },
      {
        "word": "set up",
        "trans": "организовать",
        "example": "I use 'set up' every day."
      },
      {
        "word": "come across",
        "trans": "наткнуться, встретить",
        "example": "I use 'come across' every day."
      },
      {
        "word": "deal with",
        "trans": "иметь дело с",
        "example": "I use 'deal with' every day."
      },
      {
        "word": "point out",
        "trans": "указывать",
        "example": "I use 'point out' every day."
      },
      {
        "word": "work out",
        "trans": "выяснить, проработать",
        "example": "I use 'work out' every day."
      },
      {
        "word": "turn out",
        "trans": "оказаться",
        "example": "I use 'turn out' every day."
      },
      {
        "word": "break down",
        "trans": "ломаться, разбирать",
        "example": "I use 'break down' every day."
      },
      {
        "word": "carry out",
        "trans": "проводить, выполнять",
        "example": "Practice makes progress."
      },
      {
        "word": "bring up",
        "trans": "воспитывать, поднимать тему",
        "example": "Practice makes progress."
      },
      {
        "word": "run out",
        "trans": "заканчиваться",
        "example": "Practice makes progress."
      },
      {
        "word": "set up",
        "trans": "организовать",
        "example": "Practice makes progress."
      },
      {
        "word": "come across",
        "trans": "наткнуться, встретить",
        "example": "Practice makes progress."
      },
      {
        "word": "deal with",
        "trans": "иметь дело с",
        "example": "Practice makes progress."
      },
      {
        "word": "point out",
        "trans": "указывать",
        "example": "Practice makes progress."
      },
      {
        "word": "work out",
        "trans": "выяснить, проработать",
        "example": "Practice makes progress."
      },
      {
        "word": "turn out",
        "trans": "оказаться",
        "example": "Practice makes progress."
      },
      {
        "word": "break down",
        "trans": "ломаться, разбирать",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "Researchers ___ a study last year.",
        "options": [
          "carried out",
          "carried on"
        ],
        "answer": "carried out"
      },
      {
        "sentence": "We have ___ of coffee.",
        "options": [
          "run out",
          "run off"
        ],
        "answer": "run out"
      }
    ],
    "theory": {
      "intro": "Продвинутые фразовые глаголы уровня B2 для академического и делового английского.",
      "reading": "**Фразовые глаголы 2** — Продвинутые фразовые глаголы уровня B2 для академического и делового английского.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### Академические и деловые\nCarry out research/an experiment. Set up a meeting. Deal with a problem. Point out an error.\n\n*Пример:* Scientists carried out a series of experiments.\n\n### Разговорные и переносные\nRun out of time/money. Come across as friendly. Turn out to be true. Break down in tears.\n\n*Пример:* We ran out of milk this morning.\n\n### Формулы\n- `carry out + task/research`\n- `run out of + noun`\n- `turn out + to be / that`\n\n### Типичная ошибка\n❌ We ran out from time.\n✅ We ran out of time.",
      "keyPoints": [
        "Академические и деловые: Carry out research/an experiment. Set up a meeting. Deal with a problem. Point o",
        "Разговорные и переносные: Run out of time/money. Come across as friendly. Turn out to be true. Break down ",
        "Запомни формулы: carry out + task/research; run out of + noun; turn out + to be / that",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «carry out»?",
        "options": [
          "ломаться, разбирать",
          "заканчиваться",
          "организовать",
          "проводить, выполнять"
        ],
        "answer": "проводить, выполнять"
      },
      {
        "question": "What is «bring up»?",
        "options": [
          "указывать",
          "наткнуться, встретить",
          "воспитывать, поднимать тему",
          "иметь дело с"
        ],
        "answer": "воспитывать, поднимать тему"
      },
      {
        "question": "What is «run out»?",
        "options": [
          "указывать",
          "выяснить, проработать",
          "заканчиваться",
          "воспитывать, поднимать тему"
        ],
        "answer": "заканчиваться"
      },
      {
        "question": "What is «set up»?",
        "options": [
          "воспитывать, поднимать тему",
          "выяснить, проработать",
          "организовать",
          "заканчиваться"
        ],
        "answer": "организовать"
      },
      {
        "question": "What is «come across»?",
        "options": [
          "проводить, выполнять",
          "воспитывать, поднимать тему",
          "наткнуться, встретить",
          "ломаться, разбирать"
        ],
        "answer": "наткнуться, встретить"
      },
      {
        "type": "gap",
        "sentence": "The word «иметь дело с» in English is ___.",
        "answer": "deal with",
        "hint": "d…"
      },
      {
        "type": "gap",
        "sentence": "The word «указывать» in English is ___.",
        "answer": "point out",
        "hint": "p…"
      },
      {
        "type": "gap",
        "sentence": "The word «выяснить, проработать» in English is ___.",
        "answer": "work out",
        "hint": "w…"
      }
    ]
  },
  {
    "level": "B2",
    "title": "Mixed Conditionals",
    "titleRu": "Смешанные условные",
    "topic": "past → present",
    "description": "Смешанные типы.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about past → present?",
        "keywords": [
          "mixed",
          "consequence",
          "earlier",
          "impact",
          "regret",
          "current",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If I had studied medicine, I would be a doctor now."
      },
      {
        "prompt": "Give an example with mixed.",
        "keywords": [
          "mixed",
          "consequence",
          "earlier",
          "impact",
          "regret",
          "current",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If she were more careful, she wouldn't have crashed."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "mixed",
          "consequence",
          "earlier",
          "impact",
          "regret",
          "current",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "If I had studied medicine, I would be a doctor now."
      }
    ],
    "vocab": [
      {
        "en": "mixed",
        "ru": "смешанный"
      },
      {
        "en": "consequence",
        "ru": "последствие"
      },
      {
        "en": "earlier",
        "ru": "раньше"
      },
      {
        "en": "impact",
        "ru": "влияние"
      },
      {
        "en": "regret",
        "ru": "сожаление"
      },
      {
        "en": "current",
        "ru": "текущий"
      },
      {
        "en": "hypothesis",
        "ru": "гипотеза"
      },
      {
        "en": "result",
        "ru": "результат"
      },
      {
        "en": "now",
        "ru": "сейчас"
      },
      {
        "en": "past",
        "ru": "прошлое"
      }
    ],
    "grammar": {
      "title": "Mixed Conditionals",
      "blocks": [
        {
          "title": "past → present",
          "desc": "Смешанные типы.",
          "example": "If I had studied medicine, I would be a doctor now."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "If she were more careful, she wouldn't have crashed."
        }
      ],
      "formulas": [
        "If I had studied medicine, I would be a doctor now.",
        "If she were more careful, she wouldn't have crashed."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "If I had studied medicine, I would be a doctor now.",
            "If she were more careful, she wouldn't have crashed."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "If I had studied medicine, I would be a doctor now.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "If I had studied medicine, I would be a doctor now."
      },
      {
        "phrase": "If she were more careful, she wouldn't have crashed.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "If she were more careful, she wouldn't have crashed."
      },
      {
        "phrase": "What do you know about past → present?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about past → present?"
      },
      {
        "phrase": "mixed is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "mixed is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B2 Mixed Conditionals"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about mixed?",
        "keywords": [
          "mixed",
          "consequence",
          "earlier",
          "impact",
          "regret",
          "current",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had studied medicine, I would be a doctor now."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "mixed",
          "consequence",
          "earlier",
          "impact",
          "regret",
          "current",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If she were more careful, she wouldn't have crashed."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "mixed",
          "consequence",
          "earlier",
          "impact",
          "regret",
          "current",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had studied medicine, I would be a doctor now."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "mixed",
          "consequence",
          "earlier",
          "impact",
          "regret",
          "current",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If she were more careful, she wouldn't have crashed."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "mixed",
          "consequence",
          "earlier",
          "impact",
          "regret",
          "current",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "If I had studied medicine, I would be a doctor now."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about past → present.",
        "keywords": [
          "mixed",
          "consequence",
          "earlier",
          "impact",
          "regret",
          "current",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If I had studied medicine, I would be a doctor now.",
        "useSpeech": true
      },
      {
        "task": "Use consequence and earlier.",
        "keywords": [
          "mixed",
          "consequence",
          "earlier",
          "impact",
          "regret",
          "current",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If she were more careful, she wouldn't have crashed.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "mixed",
          "consequence",
          "earlier",
          "impact",
          "regret",
          "current",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "If I had studied medicine, I would be a doctor now.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "mixed",
        "trans": "смешанный",
        "example": "I use 'mixed' every day."
      },
      {
        "word": "consequence",
        "trans": "последствие",
        "example": "I use 'consequence' every day."
      },
      {
        "word": "earlier",
        "trans": "раньше",
        "example": "I use 'earlier' every day."
      },
      {
        "word": "impact",
        "trans": "влияние",
        "example": "I use 'impact' every day."
      },
      {
        "word": "regret",
        "trans": "сожаление",
        "example": "I use 'regret' every day."
      },
      {
        "word": "current",
        "trans": "текущий",
        "example": "I use 'current' every day."
      },
      {
        "word": "hypothesis",
        "trans": "гипотеза",
        "example": "I use 'hypothesis' every day."
      },
      {
        "word": "result",
        "trans": "результат",
        "example": "I use 'result' every day."
      },
      {
        "word": "now",
        "trans": "сейчас",
        "example": "I use 'now' every day."
      },
      {
        "word": "past",
        "trans": "прошлое",
        "example": "I use 'past' every day."
      },
      {
        "word": "mixed",
        "trans": "смешанный",
        "example": "Practice makes progress."
      },
      {
        "word": "consequence",
        "trans": "последствие",
        "example": "Practice makes progress."
      },
      {
        "word": "earlier",
        "trans": "раньше",
        "example": "Practice makes progress."
      },
      {
        "word": "impact",
        "trans": "влияние",
        "example": "Practice makes progress."
      },
      {
        "word": "regret",
        "trans": "сожаление",
        "example": "Practice makes progress."
      },
      {
        "word": "current",
        "trans": "текущий",
        "example": "Practice makes progress."
      },
      {
        "word": "hypothesis",
        "trans": "гипотеза",
        "example": "Practice makes progress."
      },
      {
        "word": "result",
        "trans": "результат",
        "example": "Practice makes progress."
      },
      {
        "word": "now",
        "trans": "сейчас",
        "example": "Practice makes progress."
      },
      {
        "word": "past",
        "trans": "прошлое",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 57,
    "theory": {
      "intro": "Смешанные типы.",
      "reading": "**Смешанные условные** — Смешанные типы.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### past → present\nСмешанные типы.\n\n*Пример:* If I had studied medicine, I would be a doctor now.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* If she were more careful, she wouldn't have crashed.\n\n### Формулы\n- `If I had studied medicine, I would be a doctor now.`\n- `If she were more careful, she wouldn't have crashed.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "past → present: Смешанные типы.",
        "Практика: Используй в речи.",
        "Запомни формулы: If I had studied medicine, I would be a doctor now.; If she were more careful, she wouldn't have crashed.",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «mixed»?",
        "options": [
          "прошлое",
          "результат",
          "гипотеза",
          "смешанный"
        ],
        "answer": "смешанный"
      },
      {
        "question": "What is «consequence»?",
        "options": [
          "сожаление",
          "гипотеза",
          "последствие",
          "влияние"
        ],
        "answer": "последствие"
      },
      {
        "question": "What is «earlier»?",
        "options": [
          "раньше",
          "влияние",
          "сожаление",
          "последствие"
        ],
        "answer": "раньше"
      },
      {
        "question": "What is «impact»?",
        "options": [
          "раньше",
          "результат",
          "влияние",
          "смешанный"
        ],
        "answer": "влияние"
      },
      {
        "question": "What is «regret»?",
        "options": [
          "текущий",
          "последствие",
          "сожаление",
          "смешанный"
        ],
        "answer": "сожаление"
      },
      {
        "type": "gap",
        "sentence": "The word «текущий» in English is ___.",
        "answer": "current",
        "hint": "c…"
      },
      {
        "type": "gap",
        "sentence": "The word «гипотеза» in English is ___.",
        "answer": "hypothesis",
        "hint": "h…"
      },
      {
        "type": "gap",
        "sentence": "The word «результат» in English is ___.",
        "answer": "result",
        "hint": "r…"
      }
    ]
  },
  {
    "level": "B2",
    "title": "Subjunctive & Formal",
    "titleRu": "Субъективное наклонение",
    "topic": "formal",
    "description": "Формальный стиль.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about formal?",
        "keywords": [
          "suggest",
          "insist",
          "demand",
          "essential",
          "vital",
          "formal",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I suggest that he be informed."
      },
      {
        "prompt": "Give an example with suggest.",
        "keywords": [
          "suggest",
          "insist",
          "demand",
          "essential",
          "vital",
          "formal",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "It is essential that she attend."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "suggest",
          "insist",
          "demand",
          "essential",
          "vital",
          "formal",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "I suggest that he be informed."
      }
    ],
    "vocab": [
      {
        "en": "suggest",
        "ru": "предлагать"
      },
      {
        "en": "insist",
        "ru": "настаивать"
      },
      {
        "en": "demand",
        "ru": "требовать"
      },
      {
        "en": "essential",
        "ru": "существенный"
      },
      {
        "en": "vital",
        "ru": "важный"
      },
      {
        "en": "formal",
        "ru": "формальный"
      },
      {
        "en": "mandatory",
        "ru": "обязательный"
      },
      {
        "en": "propose",
        "ru": "предлагать"
      },
      {
        "en": "require",
        "ru": "требовать"
      },
      {
        "en": "subjunctive",
        "ru": "субъективное"
      }
    ],
    "grammar": {
      "title": "Subjunctive & Formal",
      "blocks": [
        {
          "title": "formal",
          "desc": "Формальный стиль.",
          "example": "I suggest that he be informed."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "It is essential that she attend."
        }
      ],
      "formulas": [
        "I suggest that he be informed.",
        "It is essential that she attend."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "I suggest that he be informed.",
            "It is essential that she attend."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "I suggest that he be informed.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "I suggest that he be informed."
      },
      {
        "phrase": "It is essential that she attend.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "It is essential that she attend."
      },
      {
        "phrase": "What do you know about formal?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about formal?"
      },
      {
        "phrase": "suggest is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "suggest is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B2 Subjunctive & Formal"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about suggest?",
        "keywords": [
          "suggest",
          "insist",
          "demand",
          "essential",
          "vital",
          "formal",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I suggest that he be informed."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "suggest",
          "insist",
          "demand",
          "essential",
          "vital",
          "formal",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It is essential that she attend."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "suggest",
          "insist",
          "demand",
          "essential",
          "vital",
          "formal",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I suggest that he be informed."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "suggest",
          "insist",
          "demand",
          "essential",
          "vital",
          "formal",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It is essential that she attend."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "suggest",
          "insist",
          "demand",
          "essential",
          "vital",
          "formal",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "I suggest that he be informed."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about formal.",
        "keywords": [
          "suggest",
          "insist",
          "demand",
          "essential",
          "vital",
          "formal",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I suggest that he be informed.",
        "useSpeech": true
      },
      {
        "task": "Use insist and demand.",
        "keywords": [
          "suggest",
          "insist",
          "demand",
          "essential",
          "vital",
          "formal",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "It is essential that she attend.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "suggest",
          "insist",
          "demand",
          "essential",
          "vital",
          "formal",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "I suggest that he be informed.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "suggest",
        "trans": "предлагать",
        "example": "I use 'suggest' every day."
      },
      {
        "word": "insist",
        "trans": "настаивать",
        "example": "I use 'insist' every day."
      },
      {
        "word": "demand",
        "trans": "требовать",
        "example": "I use 'demand' every day."
      },
      {
        "word": "essential",
        "trans": "существенный",
        "example": "I use 'essential' every day."
      },
      {
        "word": "vital",
        "trans": "важный",
        "example": "I use 'vital' every day."
      },
      {
        "word": "formal",
        "trans": "формальный",
        "example": "I use 'formal' every day."
      },
      {
        "word": "mandatory",
        "trans": "обязательный",
        "example": "I use 'mandatory' every day."
      },
      {
        "word": "propose",
        "trans": "предлагать",
        "example": "I use 'propose' every day."
      },
      {
        "word": "require",
        "trans": "требовать",
        "example": "I use 'require' every day."
      },
      {
        "word": "subjunctive",
        "trans": "субъективное",
        "example": "I use 'subjunctive' every day."
      },
      {
        "word": "suggest",
        "trans": "предлагать",
        "example": "Practice makes progress."
      },
      {
        "word": "insist",
        "trans": "настаивать",
        "example": "Practice makes progress."
      },
      {
        "word": "demand",
        "trans": "требовать",
        "example": "Practice makes progress."
      },
      {
        "word": "essential",
        "trans": "существенный",
        "example": "Practice makes progress."
      },
      {
        "word": "vital",
        "trans": "важный",
        "example": "Practice makes progress."
      },
      {
        "word": "formal",
        "trans": "формальный",
        "example": "Practice makes progress."
      },
      {
        "word": "mandatory",
        "trans": "обязательный",
        "example": "Practice makes progress."
      },
      {
        "word": "propose",
        "trans": "предлагать",
        "example": "Practice makes progress."
      },
      {
        "word": "require",
        "trans": "требовать",
        "example": "Practice makes progress."
      },
      {
        "word": "subjunctive",
        "trans": "субъективное",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 58,
    "theory": {
      "intro": "Формальный стиль.",
      "reading": "**Субъективное наклонение** — Формальный стиль.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### formal\nФормальный стиль.\n\n*Пример:* I suggest that he be informed.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* It is essential that she attend.\n\n### Формулы\n- `I suggest that he be informed.`\n- `It is essential that she attend.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "formal: Формальный стиль.",
        "Практика: Используй в речи.",
        "Запомни формулы: I suggest that he be informed.; It is essential that she attend.",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «suggest»?",
        "options": [
          "важный",
          "предлагать",
          "субъективное",
          "требовать"
        ],
        "answer": "предлагать"
      },
      {
        "question": "What is «insist»?",
        "options": [
          "важный",
          "предлагать",
          "субъективное",
          "настаивать"
        ],
        "answer": "настаивать"
      },
      {
        "question": "What is «demand»?",
        "options": [
          "требовать",
          "предлагать",
          "формальный",
          "обязательный"
        ],
        "answer": "требовать"
      },
      {
        "question": "What is «essential»?",
        "options": [
          "важный",
          "существенный",
          "настаивать",
          "субъективное"
        ],
        "answer": "существенный"
      },
      {
        "question": "What is «vital»?",
        "options": [
          "настаивать",
          "важный",
          "требовать",
          "существенный"
        ],
        "answer": "важный"
      },
      {
        "type": "gap",
        "sentence": "The word «формальный» in English is ___.",
        "answer": "formal",
        "hint": "f…"
      },
      {
        "type": "gap",
        "sentence": "The word «обязательный» in English is ___.",
        "answer": "mandatory",
        "hint": "m…"
      },
      {
        "type": "gap",
        "sentence": "The word «предлагать» in English is ___.",
        "answer": "propose",
        "hint": "p…"
      }
    ]
  },
  {
    "level": "B2",
    "title": "Critical Writing",
    "titleRu": "Критическое письмо",
    "topic": "analysis",
    "description": "Анализ аргументов.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about analysis?",
        "keywords": [
          "argument",
          "evidence",
          "claim",
          "evaluate",
          "bias",
          "assumption",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The claim lacks sufficient evidence."
      },
      {
        "prompt": "Give an example with argument.",
        "keywords": [
          "argument",
          "evidence",
          "claim",
          "evaluate",
          "bias",
          "assumption",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "We must evaluate the sources critically."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "argument",
          "evidence",
          "claim",
          "evaluate",
          "bias",
          "assumption",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The claim lacks sufficient evidence."
      }
    ],
    "vocab": [
      {
        "en": "argument",
        "ru": "аргумент"
      },
      {
        "en": "evidence",
        "ru": "доказательство"
      },
      {
        "en": "claim",
        "ru": "утверждение"
      },
      {
        "en": "evaluate",
        "ru": "оценивать"
      },
      {
        "en": "bias",
        "ru": "предвзятость"
      },
      {
        "en": "assumption",
        "ru": "предположение"
      },
      {
        "en": "conclude",
        "ru": "заключать"
      },
      {
        "en": "critique",
        "ru": "критика"
      },
      {
        "en": "valid",
        "ru": "обоснованный"
      },
      {
        "en": "weak",
        "ru": "слабый"
      }
    ],
    "grammar": {
      "title": "Critical Writing",
      "blocks": [
        {
          "title": "analysis",
          "desc": "Анализ аргументов.",
          "example": "The claim lacks sufficient evidence."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "We must evaluate the sources critically."
        }
      ],
      "formulas": [
        "The claim lacks sufficient evidence.",
        "We must evaluate the sources critically."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "The claim lacks sufficient evidence.",
            "We must evaluate the sources critically."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "The claim lacks sufficient evidence.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "The claim lacks sufficient evidence."
      },
      {
        "phrase": "We must evaluate the sources critically.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "We must evaluate the sources critically."
      },
      {
        "phrase": "What do you know about analysis?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about analysis?"
      },
      {
        "phrase": "argument is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "argument is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B2 Critical Writing"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about argument?",
        "keywords": [
          "argument",
          "evidence",
          "claim",
          "evaluate",
          "bias",
          "assumption",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The claim lacks sufficient evidence."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "argument",
          "evidence",
          "claim",
          "evaluate",
          "bias",
          "assumption",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "We must evaluate the sources critically."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "argument",
          "evidence",
          "claim",
          "evaluate",
          "bias",
          "assumption",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The claim lacks sufficient evidence."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "argument",
          "evidence",
          "claim",
          "evaluate",
          "bias",
          "assumption",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "We must evaluate the sources critically."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "argument",
          "evidence",
          "claim",
          "evaluate",
          "bias",
          "assumption",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The claim lacks sufficient evidence."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about analysis.",
        "keywords": [
          "argument",
          "evidence",
          "claim",
          "evaluate",
          "bias",
          "assumption",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The claim lacks sufficient evidence.",
        "useSpeech": true
      },
      {
        "task": "Use evidence and claim.",
        "keywords": [
          "argument",
          "evidence",
          "claim",
          "evaluate",
          "bias",
          "assumption",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "We must evaluate the sources critically.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "argument",
          "evidence",
          "claim",
          "evaluate",
          "bias",
          "assumption",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The claim lacks sufficient evidence.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "argument",
        "trans": "аргумент",
        "example": "I use 'argument' every day."
      },
      {
        "word": "evidence",
        "trans": "доказательство",
        "example": "I use 'evidence' every day."
      },
      {
        "word": "claim",
        "trans": "утверждение",
        "example": "I use 'claim' every day."
      },
      {
        "word": "evaluate",
        "trans": "оценивать",
        "example": "I use 'evaluate' every day."
      },
      {
        "word": "bias",
        "trans": "предвзятость",
        "example": "I use 'bias' every day."
      },
      {
        "word": "assumption",
        "trans": "предположение",
        "example": "I use 'assumption' every day."
      },
      {
        "word": "conclude",
        "trans": "заключать",
        "example": "I use 'conclude' every day."
      },
      {
        "word": "critique",
        "trans": "критика",
        "example": "I use 'critique' every day."
      },
      {
        "word": "valid",
        "trans": "обоснованный",
        "example": "I use 'valid' every day."
      },
      {
        "word": "weak",
        "trans": "слабый",
        "example": "I use 'weak' every day."
      },
      {
        "word": "argument",
        "trans": "аргумент",
        "example": "Practice makes progress."
      },
      {
        "word": "evidence",
        "trans": "доказательство",
        "example": "Practice makes progress."
      },
      {
        "word": "claim",
        "trans": "утверждение",
        "example": "Practice makes progress."
      },
      {
        "word": "evaluate",
        "trans": "оценивать",
        "example": "Practice makes progress."
      },
      {
        "word": "bias",
        "trans": "предвзятость",
        "example": "Practice makes progress."
      },
      {
        "word": "assumption",
        "trans": "предположение",
        "example": "Practice makes progress."
      },
      {
        "word": "conclude",
        "trans": "заключать",
        "example": "Practice makes progress."
      },
      {
        "word": "critique",
        "trans": "критика",
        "example": "Practice makes progress."
      },
      {
        "word": "valid",
        "trans": "обоснованный",
        "example": "Practice makes progress."
      },
      {
        "word": "weak",
        "trans": "слабый",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 59,
    "theory": {
      "intro": "Анализ аргументов.",
      "reading": "**Критическое письмо** — Анализ аргументов.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### analysis\nАнализ аргументов.\n\n*Пример:* The claim lacks sufficient evidence.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* We must evaluate the sources critically.\n\n### Формулы\n- `The claim lacks sufficient evidence.`\n- `We must evaluate the sources critically.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "analysis: Анализ аргументов.",
        "Практика: Используй в речи.",
        "Запомни формулы: The claim lacks sufficient evidence.; We must evaluate the sources critically.",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «argument»?",
        "options": [
          "слабый",
          "обоснованный",
          "аргумент",
          "утверждение"
        ],
        "answer": "аргумент"
      },
      {
        "question": "What is «evidence»?",
        "options": [
          "обоснованный",
          "предположение",
          "предвзятость",
          "доказательство"
        ],
        "answer": "доказательство"
      },
      {
        "question": "What is «claim»?",
        "options": [
          "утверждение",
          "критика",
          "предположение",
          "слабый"
        ],
        "answer": "утверждение"
      },
      {
        "question": "What is «evaluate»?",
        "options": [
          "оценивать",
          "критика",
          "обоснованный",
          "предположение"
        ],
        "answer": "оценивать"
      },
      {
        "question": "What is «bias»?",
        "options": [
          "слабый",
          "утверждение",
          "аргумент",
          "предвзятость"
        ],
        "answer": "предвзятость"
      },
      {
        "type": "gap",
        "sentence": "The word «предположение» in English is ___.",
        "answer": "assumption",
        "hint": "a…"
      },
      {
        "type": "gap",
        "sentence": "The word «заключать» in English is ___.",
        "answer": "conclude",
        "hint": "c…"
      },
      {
        "type": "gap",
        "sentence": "The word «критика» in English is ___.",
        "answer": "critique",
        "hint": "c…"
      }
    ]
  },
  {
    "level": "B2",
    "title": "Nuanced Modals",
    "titleRu": "Нюансы модальных",
    "topic": "probability",
    "description": "Вероятность и вежливость.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about probability?",
        "keywords": [
          "might",
          "may",
          "could",
          "probability",
          "deduction",
          "certainty",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "It might rain later."
      },
      {
        "prompt": "Give an example with might.",
        "keywords": [
          "might",
          "may",
          "could",
          "probability",
          "deduction",
          "certainty",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "She could have forgotten the meeting."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "might",
          "may",
          "could",
          "probability",
          "deduction",
          "certainty",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "It might rain later."
      }
    ],
    "vocab": [
      {
        "en": "might",
        "ru": "возможно"
      },
      {
        "en": "may",
        "ru": "может"
      },
      {
        "en": "could",
        "ru": "мог бы"
      },
      {
        "en": "probability",
        "ru": "вероятность"
      },
      {
        "en": "deduction",
        "ru": "вывод"
      },
      {
        "en": "certainty",
        "ru": "уверенность"
      },
      {
        "en": "possibility",
        "ru": "возможность"
      },
      {
        "en": "speculation",
        "ru": "спекуляция"
      },
      {
        "en": "likelihood",
        "ru": "вероятность"
      },
      {
        "en": "tentative",
        "ru": "осторожный"
      }
    ],
    "grammar": {
      "title": "Nuanced Modals",
      "blocks": [
        {
          "title": "probability",
          "desc": "Вероятность и вежливость.",
          "example": "It might rain later."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "She could have forgotten the meeting."
        }
      ],
      "formulas": [
        "It might rain later.",
        "She could have forgotten the meeting."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "It might rain later.",
            "She could have forgotten the meeting."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "It might rain later.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "It might rain later."
      },
      {
        "phrase": "She could have forgotten the meeting.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "She could have forgotten the meeting."
      },
      {
        "phrase": "What do you know about probability?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about probability?"
      },
      {
        "phrase": "might is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "might is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B2 Nuanced Modals"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about might?",
        "keywords": [
          "might",
          "may",
          "could",
          "probability",
          "deduction",
          "certainty",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It might rain later."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "might",
          "may",
          "could",
          "probability",
          "deduction",
          "certainty",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She could have forgotten the meeting."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "might",
          "may",
          "could",
          "probability",
          "deduction",
          "certainty",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It might rain later."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "might",
          "may",
          "could",
          "probability",
          "deduction",
          "certainty",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "She could have forgotten the meeting."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "might",
          "may",
          "could",
          "probability",
          "deduction",
          "certainty",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "It might rain later."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about probability.",
        "keywords": [
          "might",
          "may",
          "could",
          "probability",
          "deduction",
          "certainty",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "It might rain later.",
        "useSpeech": true
      },
      {
        "task": "Use may and could.",
        "keywords": [
          "might",
          "may",
          "could",
          "probability",
          "deduction",
          "certainty",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "She could have forgotten the meeting.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "might",
          "may",
          "could",
          "probability",
          "deduction",
          "certainty",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "It might rain later.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "might",
        "trans": "возможно",
        "example": "I use 'might' every day."
      },
      {
        "word": "may",
        "trans": "может",
        "example": "I use 'may' every day."
      },
      {
        "word": "could",
        "trans": "мог бы",
        "example": "I use 'could' every day."
      },
      {
        "word": "probability",
        "trans": "вероятность",
        "example": "I use 'probability' every day."
      },
      {
        "word": "deduction",
        "trans": "вывод",
        "example": "I use 'deduction' every day."
      },
      {
        "word": "certainty",
        "trans": "уверенность",
        "example": "I use 'certainty' every day."
      },
      {
        "word": "possibility",
        "trans": "возможность",
        "example": "I use 'possibility' every day."
      },
      {
        "word": "speculation",
        "trans": "спекуляция",
        "example": "I use 'speculation' every day."
      },
      {
        "word": "likelihood",
        "trans": "вероятность",
        "example": "I use 'likelihood' every day."
      },
      {
        "word": "tentative",
        "trans": "осторожный",
        "example": "I use 'tentative' every day."
      },
      {
        "word": "might",
        "trans": "возможно",
        "example": "Practice makes progress."
      },
      {
        "word": "may",
        "trans": "может",
        "example": "Practice makes progress."
      },
      {
        "word": "could",
        "trans": "мог бы",
        "example": "Practice makes progress."
      },
      {
        "word": "probability",
        "trans": "вероятность",
        "example": "Practice makes progress."
      },
      {
        "word": "deduction",
        "trans": "вывод",
        "example": "Practice makes progress."
      },
      {
        "word": "certainty",
        "trans": "уверенность",
        "example": "Practice makes progress."
      },
      {
        "word": "possibility",
        "trans": "возможность",
        "example": "Practice makes progress."
      },
      {
        "word": "speculation",
        "trans": "спекуляция",
        "example": "Practice makes progress."
      },
      {
        "word": "likelihood",
        "trans": "вероятность",
        "example": "Practice makes progress."
      },
      {
        "word": "tentative",
        "trans": "осторожный",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 60,
    "theory": {
      "intro": "Вероятность и вежливость.",
      "reading": "**Нюансы модальных** — Вероятность и вежливость.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### probability\nВероятность и вежливость.\n\n*Пример:* It might rain later.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* She could have forgotten the meeting.\n\n### Формулы\n- `It might rain later.`\n- `She could have forgotten the meeting.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "probability: Вероятность и вежливость.",
        "Практика: Используй в речи.",
        "Запомни формулы: It might rain later.; She could have forgotten the meeting.",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «might»?",
        "options": [
          "возможно",
          "уверенность",
          "возможность",
          "осторожный"
        ],
        "answer": "возможно"
      },
      {
        "question": "What is «may»?",
        "options": [
          "осторожный",
          "вероятность",
          "может",
          "вывод"
        ],
        "answer": "может"
      },
      {
        "question": "What is «could»?",
        "options": [
          "возможность",
          "возможно",
          "вывод",
          "мог бы"
        ],
        "answer": "мог бы"
      },
      {
        "question": "What is «probability»?",
        "options": [
          "вероятность",
          "может",
          "возможность",
          "вывод"
        ],
        "answer": "вероятность"
      },
      {
        "question": "What is «deduction»?",
        "options": [
          "осторожный",
          "вывод",
          "вероятность",
          "возможность"
        ],
        "answer": "вывод"
      },
      {
        "type": "gap",
        "sentence": "The word «уверенность» in English is ___.",
        "answer": "certainty",
        "hint": "c…"
      },
      {
        "type": "gap",
        "sentence": "The word «возможность» in English is ___.",
        "answer": "possibility",
        "hint": "p…"
      },
      {
        "type": "gap",
        "sentence": "The word «спекуляция» in English is ___.",
        "answer": "speculation",
        "hint": "s…"
      }
    ]
  },
  {
    "level": "B2",
    "title": "Media English",
    "titleRu": "Медиа-английский",
    "topic": "news",
    "description": "Язык новостей.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about news?",
        "keywords": [
          "headline",
          "source",
          "report",
          "quote",
          "alleged",
          "according",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "According to sources, talks continue."
      },
      {
        "prompt": "Give an example with headline.",
        "keywords": [
          "headline",
          "source",
          "report",
          "quote",
          "alleged",
          "according",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "The headline suggests a breakthrough."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "headline",
          "source",
          "report",
          "quote",
          "alleged",
          "according",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "According to sources, talks continue."
      }
    ],
    "vocab": [
      {
        "en": "headline",
        "ru": "заголовок"
      },
      {
        "en": "source",
        "ru": "источник"
      },
      {
        "en": "report",
        "ru": "репортаж"
      },
      {
        "en": "quote",
        "ru": "цитата"
      },
      {
        "en": "alleged",
        "ru": "предполагаемый"
      },
      {
        "en": "according",
        "ru": "согласно"
      },
      {
        "en": "breaking",
        "ru": "срочный"
      },
      {
        "en": "coverage",
        "ru": "освещение"
      },
      {
        "en": "editorial",
        "ru": "редакционная"
      },
      {
        "en": "broadcast",
        "ru": "трансляция"
      }
    ],
    "grammar": {
      "title": "Media English",
      "blocks": [
        {
          "title": "news",
          "desc": "Язык новостей.",
          "example": "According to sources, talks continue."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "The headline suggests a breakthrough."
        }
      ],
      "formulas": [
        "According to sources, talks continue.",
        "The headline suggests a breakthrough."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "According to sources, talks continue.",
            "The headline suggests a breakthrough."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "According to sources, talks continue.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "According to sources, talks continue."
      },
      {
        "phrase": "The headline suggests a breakthrough.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "The headline suggests a breakthrough."
      },
      {
        "phrase": "What do you know about news?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about news?"
      },
      {
        "phrase": "headline is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "headline is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B2 Media English"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about headline?",
        "keywords": [
          "headline",
          "source",
          "report",
          "quote",
          "alleged",
          "according",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "According to sources, talks continue."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "headline",
          "source",
          "report",
          "quote",
          "alleged",
          "according",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The headline suggests a breakthrough."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "headline",
          "source",
          "report",
          "quote",
          "alleged",
          "according",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "According to sources, talks continue."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "headline",
          "source",
          "report",
          "quote",
          "alleged",
          "according",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "The headline suggests a breakthrough."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "headline",
          "source",
          "report",
          "quote",
          "alleged",
          "according",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "According to sources, talks continue."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about news.",
        "keywords": [
          "headline",
          "source",
          "report",
          "quote",
          "alleged",
          "according",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "According to sources, talks continue.",
        "useSpeech": true
      },
      {
        "task": "Use source and report.",
        "keywords": [
          "headline",
          "source",
          "report",
          "quote",
          "alleged",
          "according",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "The headline suggests a breakthrough.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "headline",
          "source",
          "report",
          "quote",
          "alleged",
          "according",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "According to sources, talks continue.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "headline",
        "trans": "заголовок",
        "example": "I use 'headline' every day."
      },
      {
        "word": "source",
        "trans": "источник",
        "example": "I use 'source' every day."
      },
      {
        "word": "report",
        "trans": "репортаж",
        "example": "I use 'report' every day."
      },
      {
        "word": "quote",
        "trans": "цитата",
        "example": "I use 'quote' every day."
      },
      {
        "word": "alleged",
        "trans": "предполагаемый",
        "example": "I use 'alleged' every day."
      },
      {
        "word": "according",
        "trans": "согласно",
        "example": "I use 'according' every day."
      },
      {
        "word": "breaking",
        "trans": "срочный",
        "example": "I use 'breaking' every day."
      },
      {
        "word": "coverage",
        "trans": "освещение",
        "example": "I use 'coverage' every day."
      },
      {
        "word": "editorial",
        "trans": "редакционная",
        "example": "I use 'editorial' every day."
      },
      {
        "word": "broadcast",
        "trans": "трансляция",
        "example": "I use 'broadcast' every day."
      },
      {
        "word": "headline",
        "trans": "заголовок",
        "example": "Practice makes progress."
      },
      {
        "word": "source",
        "trans": "источник",
        "example": "Practice makes progress."
      },
      {
        "word": "report",
        "trans": "репортаж",
        "example": "Practice makes progress."
      },
      {
        "word": "quote",
        "trans": "цитата",
        "example": "Practice makes progress."
      },
      {
        "word": "alleged",
        "trans": "предполагаемый",
        "example": "Practice makes progress."
      },
      {
        "word": "according",
        "trans": "согласно",
        "example": "Practice makes progress."
      },
      {
        "word": "breaking",
        "trans": "срочный",
        "example": "Practice makes progress."
      },
      {
        "word": "coverage",
        "trans": "освещение",
        "example": "Practice makes progress."
      },
      {
        "word": "editorial",
        "trans": "редакционная",
        "example": "Practice makes progress."
      },
      {
        "word": "broadcast",
        "trans": "трансляция",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 61,
    "theory": {
      "intro": "Язык новостей.",
      "reading": "**Медиа-английский** — Язык новостей.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### news\nЯзык новостей.\n\n*Пример:* According to sources, talks continue.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* The headline suggests a breakthrough.\n\n### Формулы\n- `According to sources, talks continue.`\n- `The headline suggests a breakthrough.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "news: Язык новостей.",
        "Практика: Используй в речи.",
        "Запомни формулы: According to sources, talks continue.; The headline suggests a breakthrough.",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «headline»?",
        "options": [
          "предполагаемый",
          "заголовок",
          "репортаж",
          "цитата"
        ],
        "answer": "заголовок"
      },
      {
        "question": "What is «source»?",
        "options": [
          "цитата",
          "предполагаемый",
          "источник",
          "согласно"
        ],
        "answer": "источник"
      },
      {
        "question": "What is «report»?",
        "options": [
          "трансляция",
          "цитата",
          "репортаж",
          "заголовок"
        ],
        "answer": "репортаж"
      },
      {
        "question": "What is «quote»?",
        "options": [
          "срочный",
          "предполагаемый",
          "цитата",
          "трансляция"
        ],
        "answer": "цитата"
      },
      {
        "question": "What is «alleged»?",
        "options": [
          "предполагаемый",
          "репортаж",
          "редакционная",
          "трансляция"
        ],
        "answer": "предполагаемый"
      },
      {
        "type": "gap",
        "sentence": "The word «согласно» in English is ___.",
        "answer": "according",
        "hint": "a…"
      },
      {
        "type": "gap",
        "sentence": "The word «срочный» in English is ___.",
        "answer": "breaking",
        "hint": "b…"
      },
      {
        "type": "gap",
        "sentence": "The word «освещение» in English is ___.",
        "answer": "coverage",
        "hint": "c…"
      }
    ]
  },
  {
    "level": "B2",
    "title": "Negotiation",
    "titleRu": "Переговоры",
    "topic": "deals",
    "description": "Компромиссы и сделки.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about deals?",
        "keywords": [
          "offer",
          "compromise",
          "deadline",
          "terms",
          "agreement",
          "reject",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "We need to reach a compromise."
      },
      {
        "prompt": "Give an example with offer.",
        "keywords": [
          "offer",
          "compromise",
          "deadline",
          "terms",
          "agreement",
          "reject",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Our proposal includes flexible terms."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "offer",
          "compromise",
          "deadline",
          "terms",
          "agreement",
          "reject",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "We need to reach a compromise."
      }
    ],
    "vocab": [
      {
        "en": "offer",
        "ru": "предложение"
      },
      {
        "en": "compromise",
        "ru": "компромисс"
      },
      {
        "en": "deadline",
        "ru": "дедлайн"
      },
      {
        "en": "terms",
        "ru": "условия"
      },
      {
        "en": "agreement",
        "ru": "соглашение"
      },
      {
        "en": "reject",
        "ru": "отклонять"
      },
      {
        "en": "accept",
        "ru": "принимать"
      },
      {
        "en": "proposal",
        "ru": "предложение"
      },
      {
        "en": "counter",
        "ru": "встречное"
      },
      {
        "en": "leverage",
        "ru": "рычаг"
      }
    ],
    "grammar": {
      "title": "Negotiation",
      "blocks": [
        {
          "title": "deals",
          "desc": "Компромиссы и сделки.",
          "example": "We need to reach a compromise."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "Our proposal includes flexible terms."
        }
      ],
      "formulas": [
        "We need to reach a compromise.",
        "Our proposal includes flexible terms."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "We need to reach a compromise.",
            "Our proposal includes flexible terms."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "We need to reach a compromise.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "We need to reach a compromise."
      },
      {
        "phrase": "Our proposal includes flexible terms.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Our proposal includes flexible terms."
      },
      {
        "phrase": "What do you know about deals?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about deals?"
      },
      {
        "phrase": "offer is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "offer is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B2 Negotiation"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about offer?",
        "keywords": [
          "offer",
          "compromise",
          "deadline",
          "terms",
          "agreement",
          "reject",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "We need to reach a compromise."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "offer",
          "compromise",
          "deadline",
          "terms",
          "agreement",
          "reject",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Our proposal includes flexible terms."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "offer",
          "compromise",
          "deadline",
          "terms",
          "agreement",
          "reject",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "We need to reach a compromise."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "offer",
          "compromise",
          "deadline",
          "terms",
          "agreement",
          "reject",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Our proposal includes flexible terms."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "offer",
          "compromise",
          "deadline",
          "terms",
          "agreement",
          "reject",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "We need to reach a compromise."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about deals.",
        "keywords": [
          "offer",
          "compromise",
          "deadline",
          "terms",
          "agreement",
          "reject",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "We need to reach a compromise.",
        "useSpeech": true
      },
      {
        "task": "Use compromise and deadline.",
        "keywords": [
          "offer",
          "compromise",
          "deadline",
          "terms",
          "agreement",
          "reject",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Our proposal includes flexible terms.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "offer",
          "compromise",
          "deadline",
          "terms",
          "agreement",
          "reject",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "We need to reach a compromise.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "offer",
        "trans": "предложение",
        "example": "I use 'offer' every day."
      },
      {
        "word": "compromise",
        "trans": "компромисс",
        "example": "I use 'compromise' every day."
      },
      {
        "word": "deadline",
        "trans": "дедлайн",
        "example": "I use 'deadline' every day."
      },
      {
        "word": "terms",
        "trans": "условия",
        "example": "I use 'terms' every day."
      },
      {
        "word": "agreement",
        "trans": "соглашение",
        "example": "I use 'agreement' every day."
      },
      {
        "word": "reject",
        "trans": "отклонять",
        "example": "I use 'reject' every day."
      },
      {
        "word": "accept",
        "trans": "принимать",
        "example": "I use 'accept' every day."
      },
      {
        "word": "proposal",
        "trans": "предложение",
        "example": "I use 'proposal' every day."
      },
      {
        "word": "counter",
        "trans": "встречное",
        "example": "I use 'counter' every day."
      },
      {
        "word": "leverage",
        "trans": "рычаг",
        "example": "I use 'leverage' every day."
      },
      {
        "word": "offer",
        "trans": "предложение",
        "example": "Practice makes progress."
      },
      {
        "word": "compromise",
        "trans": "компромисс",
        "example": "Practice makes progress."
      },
      {
        "word": "deadline",
        "trans": "дедлайн",
        "example": "Practice makes progress."
      },
      {
        "word": "terms",
        "trans": "условия",
        "example": "Practice makes progress."
      },
      {
        "word": "agreement",
        "trans": "соглашение",
        "example": "Practice makes progress."
      },
      {
        "word": "reject",
        "trans": "отклонять",
        "example": "Practice makes progress."
      },
      {
        "word": "accept",
        "trans": "принимать",
        "example": "Practice makes progress."
      },
      {
        "word": "proposal",
        "trans": "предложение",
        "example": "Practice makes progress."
      },
      {
        "word": "counter",
        "trans": "встречное",
        "example": "Practice makes progress."
      },
      {
        "word": "leverage",
        "trans": "рычаг",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 62,
    "theory": {
      "intro": "Компромиссы и сделки.",
      "reading": "**Переговоры** — Компромиссы и сделки.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### deals\nКомпромиссы и сделки.\n\n*Пример:* We need to reach a compromise.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* Our proposal includes flexible terms.\n\n### Формулы\n- `We need to reach a compromise.`\n- `Our proposal includes flexible terms.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "deals: Компромиссы и сделки.",
        "Практика: Используй в речи.",
        "Запомни формулы: We need to reach a compromise.; Our proposal includes flexible terms.",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «offer»?",
        "options": [
          "компромисс",
          "встречное",
          "предложение",
          "отклонять"
        ],
        "answer": "предложение"
      },
      {
        "question": "What is «compromise»?",
        "options": [
          "предложение",
          "компромисс",
          "рычаг",
          "принимать"
        ],
        "answer": "компромисс"
      },
      {
        "question": "What is «deadline»?",
        "options": [
          "рычаг",
          "соглашение",
          "дедлайн",
          "встречное"
        ],
        "answer": "дедлайн"
      },
      {
        "question": "What is «terms»?",
        "options": [
          "условия",
          "принимать",
          "отклонять",
          "компромисс"
        ],
        "answer": "условия"
      },
      {
        "question": "What is «agreement»?",
        "options": [
          "соглашение",
          "дедлайн",
          "условия",
          "предложение"
        ],
        "answer": "соглашение"
      },
      {
        "type": "gap",
        "sentence": "The word «отклонять» in English is ___.",
        "answer": "reject",
        "hint": "r…"
      },
      {
        "type": "gap",
        "sentence": "The word «принимать» in English is ___.",
        "answer": "accept",
        "hint": "a…"
      },
      {
        "type": "gap",
        "sentence": "The word «предложение» in English is ___.",
        "answer": "proposal",
        "hint": "p…"
      }
    ]
  },
  {
    "level": "B2",
    "title": "Presentations",
    "titleRu": "Презентации",
    "topic": "public speaking",
    "description": "Устные презентации.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about public speaking?",
        "keywords": [
          "outline",
          "slide",
          "audience",
          "engage",
          "summarise",
          "transition",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Let me outline the main points."
      },
      {
        "prompt": "Give an example with outline.",
        "keywords": [
          "outline",
          "slide",
          "audience",
          "engage",
          "summarise",
          "transition",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "To summarise, we achieved our goals."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "outline",
          "slide",
          "audience",
          "engage",
          "summarise",
          "transition",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Let me outline the main points."
      }
    ],
    "vocab": [
      {
        "en": "outline",
        "ru": "план"
      },
      {
        "en": "slide",
        "ru": "слайд"
      },
      {
        "en": "audience",
        "ru": "аудитория"
      },
      {
        "en": "engage",
        "ru": "вовлекать"
      },
      {
        "en": "summarise",
        "ru": "резюмировать"
      },
      {
        "en": "transition",
        "ru": "переход"
      },
      {
        "en": "visual",
        "ru": "визуальный"
      },
      {
        "en": "delivery",
        "ru": "подача"
      },
      {
        "en": "handout",
        "ru": "раздаточный"
      },
      {
        "en": "Q&A",
        "ru": "вопросы"
      }
    ],
    "grammar": {
      "title": "Presentations",
      "blocks": [
        {
          "title": "public speaking",
          "desc": "Устные презентации.",
          "example": "Let me outline the main points."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "To summarise, we achieved our goals."
        }
      ],
      "formulas": [
        "Let me outline the main points.",
        "To summarise, we achieved our goals."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "Let me outline the main points.",
            "To summarise, we achieved our goals."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "Let me outline the main points.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Let me outline the main points."
      },
      {
        "phrase": "To summarise, we achieved our goals.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "To summarise, we achieved our goals."
      },
      {
        "phrase": "What do you know about public speaking?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about public speaking?"
      },
      {
        "phrase": "outline is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "outline is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B2 Presentations"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about outline?",
        "keywords": [
          "outline",
          "slide",
          "audience",
          "engage",
          "summarise",
          "transition",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Let me outline the main points."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "outline",
          "slide",
          "audience",
          "engage",
          "summarise",
          "transition",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "To summarise, we achieved our goals."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "outline",
          "slide",
          "audience",
          "engage",
          "summarise",
          "transition",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Let me outline the main points."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "outline",
          "slide",
          "audience",
          "engage",
          "summarise",
          "transition",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "To summarise, we achieved our goals."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "outline",
          "slide",
          "audience",
          "engage",
          "summarise",
          "transition",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Let me outline the main points."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about public speaking.",
        "keywords": [
          "outline",
          "slide",
          "audience",
          "engage",
          "summarise",
          "transition",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Let me outline the main points.",
        "useSpeech": true
      },
      {
        "task": "Use slide and audience.",
        "keywords": [
          "outline",
          "slide",
          "audience",
          "engage",
          "summarise",
          "transition",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "To summarise, we achieved our goals.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "outline",
          "slide",
          "audience",
          "engage",
          "summarise",
          "transition",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Let me outline the main points.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "outline",
        "trans": "план",
        "example": "I use 'outline' every day."
      },
      {
        "word": "slide",
        "trans": "слайд",
        "example": "I use 'slide' every day."
      },
      {
        "word": "audience",
        "trans": "аудитория",
        "example": "I use 'audience' every day."
      },
      {
        "word": "engage",
        "trans": "вовлекать",
        "example": "I use 'engage' every day."
      },
      {
        "word": "summarise",
        "trans": "резюмировать",
        "example": "I use 'summarise' every day."
      },
      {
        "word": "transition",
        "trans": "переход",
        "example": "I use 'transition' every day."
      },
      {
        "word": "visual",
        "trans": "визуальный",
        "example": "I use 'visual' every day."
      },
      {
        "word": "delivery",
        "trans": "подача",
        "example": "I use 'delivery' every day."
      },
      {
        "word": "handout",
        "trans": "раздаточный",
        "example": "I use 'handout' every day."
      },
      {
        "word": "Q&A",
        "trans": "вопросы",
        "example": "I use 'Q&A' every day."
      },
      {
        "word": "outline",
        "trans": "план",
        "example": "Practice makes progress."
      },
      {
        "word": "slide",
        "trans": "слайд",
        "example": "Practice makes progress."
      },
      {
        "word": "audience",
        "trans": "аудитория",
        "example": "Practice makes progress."
      },
      {
        "word": "engage",
        "trans": "вовлекать",
        "example": "Practice makes progress."
      },
      {
        "word": "summarise",
        "trans": "резюмировать",
        "example": "Practice makes progress."
      },
      {
        "word": "transition",
        "trans": "переход",
        "example": "Practice makes progress."
      },
      {
        "word": "visual",
        "trans": "визуальный",
        "example": "Practice makes progress."
      },
      {
        "word": "delivery",
        "trans": "подача",
        "example": "Practice makes progress."
      },
      {
        "word": "handout",
        "trans": "раздаточный",
        "example": "Practice makes progress."
      },
      {
        "word": "Q&A",
        "trans": "вопросы",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 63,
    "theory": {
      "intro": "Устные презентации.",
      "reading": "**Презентации** — Устные презентации.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### public speaking\nУстные презентации.\n\n*Пример:* Let me outline the main points.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* To summarise, we achieved our goals.\n\n### Формулы\n- `Let me outline the main points.`\n- `To summarise, we achieved our goals.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "public speaking: Устные презентации.",
        "Практика: Используй в речи.",
        "Запомни формулы: Let me outline the main points.; To summarise, we achieved our goals.",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «outline»?",
        "options": [
          "визуальный",
          "резюмировать",
          "слайд",
          "план"
        ],
        "answer": "план"
      },
      {
        "question": "What is «slide»?",
        "options": [
          "слайд",
          "подача",
          "визуальный",
          "переход"
        ],
        "answer": "слайд"
      },
      {
        "question": "What is «audience»?",
        "options": [
          "резюмировать",
          "визуальный",
          "переход",
          "аудитория"
        ],
        "answer": "аудитория"
      },
      {
        "question": "What is «engage»?",
        "options": [
          "визуальный",
          "подача",
          "вовлекать",
          "раздаточный"
        ],
        "answer": "вовлекать"
      },
      {
        "question": "What is «summarise»?",
        "options": [
          "план",
          "вопросы",
          "резюмировать",
          "визуальный"
        ],
        "answer": "резюмировать"
      },
      {
        "type": "gap",
        "sentence": "The word «переход» in English is ___.",
        "answer": "transition",
        "hint": "t…"
      },
      {
        "type": "gap",
        "sentence": "The word «визуальный» in English is ___.",
        "answer": "visual",
        "hint": "v…"
      },
      {
        "type": "gap",
        "sentence": "The word «подача» in English is ___.",
        "answer": "delivery",
        "hint": "d…"
      }
    ]
  },
  {
    "level": "B2",
    "title": "B2 Mastery Review",
    "titleRu": "Итог B2",
    "topic": "exam ready",
    "description": "Повторение B2.",
    "duration": "25 мин",
    "warmup": [
      {
        "prompt": "What do you know about exam ready?",
        "keywords": [
          "mastery",
          "accuracy",
          "fluency",
          "coherence",
          "range",
          "sophisticated",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "B2 requires accuracy and range."
      },
      {
        "prompt": "Give an example with mastery.",
        "keywords": [
          "mastery",
          "accuracy",
          "fluency",
          "coherence",
          "range",
          "sophisticated",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "Integrate all skills in practice."
      },
      {
        "prompt": "Describe your experience.",
        "keywords": [
          "mastery",
          "accuracy",
          "fluency",
          "coherence",
          "range",
          "sophisticated",
          "i",
          "my",
          "am",
          "is",
          "are",
          "the"
        ],
        "minWords": 3,
        "sample": "B2 requires accuracy and range."
      }
    ],
    "vocab": [
      {
        "en": "mastery",
        "ru": "мастерство"
      },
      {
        "en": "accuracy",
        "ru": "точность"
      },
      {
        "en": "fluency",
        "ru": "беглость"
      },
      {
        "en": "coherence",
        "ru": "связность"
      },
      {
        "en": "range",
        "ru": "диапазон"
      },
      {
        "en": "sophisticated",
        "ru": "продвинутый"
      },
      {
        "en": "nuance",
        "ru": "нюанс"
      },
      {
        "en": "proficient",
        "ru": "владеющий"
      },
      {
        "en": "integrate",
        "ru": "интегрировать"
      },
      {
        "en": "certify",
        "ru": "сертифицировать"
      }
    ],
    "grammar": {
      "title": "B2 Mastery Review",
      "blocks": [
        {
          "title": "exam ready",
          "desc": "Повторение B2.",
          "example": "B2 requires accuracy and range."
        },
        {
          "title": "Практика",
          "desc": "Используй в речи.",
          "example": "Integrate all skills in practice."
        }
      ],
      "formulas": [
        "B2 requires accuracy and range.",
        "Integrate all skills in practice."
      ],
      "extraExamples": [
        {
          "label": "Примеры",
          "items": [
            "B2 requires accuracy and range.",
            "Integrate all skills in practice."
          ]
        }
      ],
      "mistake": {
        "wrong": "He go to work.",
        "right": "He goes to work."
      }
    },
    "quiz": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      },
      {
        "sentence": "We ___ studying now.",
        "options": [
          "are",
          "is"
        ],
        "answer": "are"
      },
      {
        "sentence": "He has ___ finished.",
        "options": [
          "already",
          "yet"
        ],
        "answer": "already"
      },
      {
        "sentence": "I ___ like it.",
        "options": [
          "don't",
          "doesn't"
        ],
        "answer": "don't"
      }
    ],
    "pronunciation": [
      {
        "phrase": "B2 requires accuracy and range.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "B2 requires accuracy and range."
      },
      {
        "phrase": "Integrate all skills in practice.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Integrate all skills in practice."
      },
      {
        "phrase": "What do you know about exam ready?",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "What do you know about exam ready?"
      },
      {
        "phrase": "mastery is useful.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "mastery is useful."
      },
      {
        "phrase": "Practice makes progress.",
        "ipa": "/ˈfɹeɪz/",
        "tip": "Связывай слова в одну фразу",
        "expected": "Practice makes progress."
      }
    ],
    "culture": {
      "watch": [
        "B2 B2 Mastery Review"
      ],
      "listen": [
        "English podcasts"
      ],
      "read": [
        "B2 exercises"
      ]
    },
    "cultureCheck": [
      {
        "prompt": "What about mastery?",
        "keywords": [
          "mastery",
          "accuracy",
          "fluency",
          "coherence",
          "range",
          "sophisticated",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "B2 requires accuracy and range."
      },
      {
        "prompt": "What example is given?",
        "keywords": [
          "mastery",
          "accuracy",
          "fluency",
          "coherence",
          "range",
          "sophisticated",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Integrate all skills in practice."
      },
      {
        "prompt": "Is the grammar correct?",
        "keywords": [
          "mastery",
          "accuracy",
          "fluency",
          "coherence",
          "range",
          "sophisticated",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "B2 requires accuracy and range."
      },
      {
        "prompt": "What do they do?",
        "keywords": [
          "mastery",
          "accuracy",
          "fluency",
          "coherence",
          "range",
          "sophisticated",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "Integrate all skills in practice."
      },
      {
        "prompt": "Main idea?",
        "keywords": [
          "mastery",
          "accuracy",
          "fluency",
          "coherence",
          "range",
          "sophisticated",
          "he",
          "she",
          "they",
          "the",
          "was",
          "is",
          "are"
        ],
        "minWords": 3,
        "sample": "B2 requires accuracy and range."
      }
    ],
    "speaking": [
      {
        "task": "Write 4 sentences about exam ready.",
        "keywords": [
          "mastery",
          "accuracy",
          "fluency",
          "coherence",
          "range",
          "sophisticated",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "B2 requires accuracy and range.",
        "useSpeech": true
      },
      {
        "task": "Use accuracy and fluency.",
        "keywords": [
          "mastery",
          "accuracy",
          "fluency",
          "coherence",
          "range",
          "sophisticated",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "Integrate all skills in practice.",
        "useSpeech": true
      },
      {
        "task": "Discuss with a partner.",
        "keywords": [
          "mastery",
          "accuracy",
          "fluency",
          "coherence",
          "range",
          "sophisticated",
          "i",
          "my",
          "we",
          "the",
          "and"
        ],
        "minWords": 7,
        "sample": "B2 requires accuracy and range.",
        "useSpeech": true
      }
    ],
    "flashcards": [
      {
        "word": "mastery",
        "trans": "мастерство",
        "example": "I use 'mastery' every day."
      },
      {
        "word": "accuracy",
        "trans": "точность",
        "example": "I use 'accuracy' every day."
      },
      {
        "word": "fluency",
        "trans": "беглость",
        "example": "I use 'fluency' every day."
      },
      {
        "word": "coherence",
        "trans": "связность",
        "example": "I use 'coherence' every day."
      },
      {
        "word": "range",
        "trans": "диапазон",
        "example": "I use 'range' every day."
      },
      {
        "word": "sophisticated",
        "trans": "продвинутый",
        "example": "I use 'sophisticated' every day."
      },
      {
        "word": "nuance",
        "trans": "нюанс",
        "example": "I use 'nuance' every day."
      },
      {
        "word": "proficient",
        "trans": "владеющий",
        "example": "I use 'proficient' every day."
      },
      {
        "word": "integrate",
        "trans": "интегрировать",
        "example": "I use 'integrate' every day."
      },
      {
        "word": "certify",
        "trans": "сертифицировать",
        "example": "I use 'certify' every day."
      },
      {
        "word": "mastery",
        "trans": "мастерство",
        "example": "Practice makes progress."
      },
      {
        "word": "accuracy",
        "trans": "точность",
        "example": "Practice makes progress."
      },
      {
        "word": "fluency",
        "trans": "беглость",
        "example": "Practice makes progress."
      },
      {
        "word": "coherence",
        "trans": "связность",
        "example": "Practice makes progress."
      },
      {
        "word": "range",
        "trans": "диапазон",
        "example": "Practice makes progress."
      },
      {
        "word": "sophisticated",
        "trans": "продвинутый",
        "example": "Practice makes progress."
      },
      {
        "word": "nuance",
        "trans": "нюанс",
        "example": "Practice makes progress."
      },
      {
        "word": "proficient",
        "trans": "владеющий",
        "example": "Practice makes progress."
      },
      {
        "word": "integrate",
        "trans": "интегрировать",
        "example": "Practice makes progress."
      },
      {
        "word": "certify",
        "trans": "сертифицировать",
        "example": "Practice makes progress."
      }
    ],
    "grammarCheck": [
      {
        "sentence": "She ___ to work.",
        "options": [
          "goes",
          "go"
        ],
        "answer": "goes"
      },
      {
        "sentence": "They ___ it yesterday.",
        "options": [
          "did",
          "do"
        ],
        "answer": "did"
      }
    ],
    "id": 64,
    "theory": {
      "intro": "Повторение B2.",
      "reading": "**Итог B2** — Повторение B2.\n\nAcademic English (Swales): учите не только правило, но и регистр — где фраза уместна в речи и письме.\n\nCEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.\n\n### exam ready\nПовторение B2.\n\n*Пример:* B2 requires accuracy and range.\n\n### Практика\nИспользуй в речи.\n\n*Пример:* Integrate all skills in practice.\n\n### Формулы\n- `B2 requires accuracy and range.`\n- `Integrate all skills in practice.`\n\n### Типичная ошибка\n❌ He go to work.\n✅ He goes to work.",
      "keyPoints": [
        "exam ready: Повторение B2.",
        "Практика: Используй в речи.",
        "Запомни формулы: B2 requires accuracy and range.; Integrate all skills in practice.",
        "Academic English (Swales): учите не только правило, но и регистр — где фраза уместна в реч…"
      ],
      "cefr": "CEFR B2 — свободное общение: эссе, дискуссии, формальный регистр, сложная грамматика.",
      "source": "Oxford/Cambridge communicative syllabus · CEFR-aligned"
    },
    "vocabQuiz": [
      {
        "question": "What is «mastery»?",
        "options": [
          "точность",
          "сертифицировать",
          "мастерство",
          "беглость"
        ],
        "answer": "мастерство"
      },
      {
        "question": "What is «accuracy»?",
        "options": [
          "точность",
          "беглость",
          "диапазон",
          "владеющий"
        ],
        "answer": "точность"
      },
      {
        "question": "What is «fluency»?",
        "options": [
          "мастерство",
          "беглость",
          "сертифицировать",
          "владеющий"
        ],
        "answer": "беглость"
      },
      {
        "question": "What is «coherence»?",
        "options": [
          "беглость",
          "сертифицировать",
          "интегрировать",
          "связность"
        ],
        "answer": "связность"
      },
      {
        "question": "What is «range»?",
        "options": [
          "интегрировать",
          "диапазон",
          "сертифицировать",
          "продвинутый"
        ],
        "answer": "диапазон"
      },
      {
        "type": "gap",
        "sentence": "The word «продвинутый» in English is ___.",
        "answer": "sophisticated",
        "hint": "s…"
      },
      {
        "type": "gap",
        "sentence": "The word «нюанс» in English is ___.",
        "answer": "nuance",
        "hint": "n…"
      },
      {
        "type": "gap",
        "sentence": "The word «владеющий» in English is ___.",
        "answer": "proficient",
        "hint": "p…"
      }
    ]
  }
];
