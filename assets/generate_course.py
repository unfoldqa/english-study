#!/usr/bin/env python3
"""Generate curriculum.js — full A1→B2 course (32 lessons)."""
import json
import os

DIR = os.path.dirname(os.path.abspath(__file__))

def fc(words):
    """Build flashcards from vocab list + extra pairs."""
    cards = []
    for w in words:
        if isinstance(w, dict) and "word" in w:
            cards.append(w)
        elif isinstance(w, dict):
            en, ru = w["en"], w["ru"]
            cards.append({"word": en, "trans": ru, "example": f"I use '{en}' every day."})
    while len(cards) < 20:
        cards.append({"word": cards[len(cards) % len(words)]["word"] if "word" in cards[0] else words[len(cards) % len(words)]["en"],
                        "trans": cards[len(cards) % len(words)]["trans"] if "word" in cards[0] else words[len(cards) % len(words)]["ru"],
                        "example": "Practice makes progress."})
    return cards[:20]

A1 = [
  {"id":1,"level":"A1","title":"Greetings & Introductions","titleRu":"Приветствия и знакомство","topic":"Первые фразы","description":"Базовые приветствия, прощания и вежливые фразы для знакомства.","duration":"20 мин",
   "warmup":["Hello! How are you?","What is your name?","Where are you from?"],
   "vocab":[{"en":"hello","ru":"привет"},{"en":"goodbye","ru":"до свидания"},{"en":"please","ru":"пожалуйста"},{"en":"thank you","ru":"спасибо"},{"en":"name","ru":"имя"},{"en":"country","ru":"страна"},{"en":"nice","ru":"приятный"},{"en":"meet","ru":"знакомиться"},{"en":"friend","ru":"друг"},{"en":"welcome","ru":"добро пожаловать"}],
   "grammar":{"title":"Greetings","blocks":[{"title":"Приветствия","desc":"Hello / Hi — универсальное приветствие. Good morning — до полудня. Good evening — вечером.","example":"Hello! My name is Anna."},{"title":"Вежливость","desc":"Please — пожалуйста. Thank you — спасибо. You're welcome — не за что. Excuse me — извините.","example":"Thank you very much!"}],
   "formulas":["Hello / Hi + name","Nice to meet you","How are you? — I'm fine, thanks."],
   "extraExamples":[{"label":"Примеры","items":["Good morning!","Nice to meet you.","See you later!"]}],
   "mistake":{"wrong":"I am fine thank you.","right":"I'm fine, thank you."}},
   "quiz":[{"sentence":"___ , my name is Tom.","options":["Hello","Goodbye"],"answer":"Hello"},{"sentence":"___ you very much!","options":["Thank","Thanks"],"answer":"Thank"},{"sentence":"Nice to ___ you.","options":["meet","meeting"],"answer":"meet"},{"sentence":"I am ___.","options":["fine","finely"],"answer":"fine"},{"sentence":"___ are you from?","options":["Where","What"],"answer":"Where"}],
   "pronunciation":[{"phrase":"Nice to meet you.","ipa":"/naɪs tə miːt juː/","tip":"Meet you — сливай в один поток"},{"phrase":"How are you?","ipa":"/haʊ ɑː juː/","tip":"Are — слабое /ə/ в быстрой речи"},{"phrase":"Thank you very much.","ipa":"/θæŋk juː ˈveri mʌtʃ/","tip":"Thank — звук /θ/, язык между зубами"},{"phrase":"Good morning.","ipa":"/ɡʊd ˈmɔːnɪŋ/","tip":"Morning — ударение на первый слог"},{"phrase":"See you later.","ipa":"/siː juː ˈleɪtə/","tip":"Later — звук /eɪ/ как в «эй»"}],
   "culture":{"watch":["Extra English — серия 1 (приветствия)"],"listen":["The Beatles — Hello, Goodbye"],"read":["Oxford Bookworms — Starter level stories"]},
   "cultureCheck":["How does the character introduce themselves?","What greeting do they use in the morning?","Where is the person from?","How do they say goodbye?","What polite words do you hear?"],
   "speaking":["Представься: имя, страна, 3 предложения.","Поприветствуй друга утром, днём и вечером.","Ответь на How are you? и спроси в ответ."]},

  {"id":2,"level":"A1","title":"Verb to be","titleRu":"Глагол to be","topic":"am / is / are","description":"Глагол to be — основа английского: описание, местоположение, возраст.","duration":"20 мин",
   "warmup":["How old are you?","Where is the station?","Are you a student?"],
   "vocab":[{"en":"am","ru":"есть (я)"},{"en":"is","ru":"есть (он/она/оно)"},{"en":"are","ru":"есть (мы/вы/они)"},{"en":"student","ru":"студент"},{"en":"teacher","ru":"учитель"},{"en":"happy","ru":"счастливый"},{"en":"tired","ru":"уставший"},{"en":"here","ru":"здесь"},{"en":"there","ru":"там"},{"en":"ready","ru":"готовый"}],
   "grammar":{"title":"Verb to be","blocks":[{"title":"Формы","desc":"I am, he/she/it is, we/you/they are. Сокращения: I'm, she's, they're.","example":"She is a doctor."},{"title":"Отрицание и вопрос","desc":"Отрицание: am not, isn't, aren't. Вопрос: Am I...? Is he...? Are they...?","example":"Are you ready? — Yes, I am."}],
   "formulas":["I am + noun/adjective","He/She/It is + ...","We/You/They are + ..."],
   "extraExamples":[{"label":"Утверждение","items":["I am 25 years old.","They are at home."]},{"label":"Вопрос","items":["Is she your sister?","Are we late?"]}],
   "mistake":{"wrong":"She are my friend.","right":"She is my friend."}},
   "quiz":[{"sentence":"I ___ a student.","options":["am","is"],"answer":"am"},{"sentence":"He ___ tired.","options":["is","are"],"answer":"is"},{"sentence":"They ___ from Spain.","options":["is","are"],"answer":"are"},{"sentence":"___ you ready?","options":["Is","Are"],"answer":"Are"},{"sentence":"She ___ not here.","options":["is","are"],"answer":"is"}],
   "pronunciation":[{"phrase":"I am a student.","ipa":"/aɪ æm ə ˈstjuːdnt/","tip":"A — слабый звук /ə/"},{"phrase":"She is happy.","ipa":"/ʃiː ɪz ˈhæpi/","tip":"Is — часто /z/ после гласной"},{"phrase":"Are you ready?","ipa":"/ɑː juː ˈredi/","tip":"Are you → /ɑːjuː/ без паузы"},{"phrase":"We are here.","ipa":"/wiː ɑː hɪə/","tip":"We're — сокращение в разговоре"},{"phrase":"It is cold.","ipa":"/ɪt ɪz kəʊld/","tip":"It's — стандартное сокращение"}],
   "culture":{"watch":["Peppa Pig — простые диалоги"],"listen":["Pharrell Williams — Happy"],"read":["Graded readers A1 — short dialogues"]},
   "cultureCheck":["How old is the character?","Where are they?","Are they happy or sad?","What is his job?","Are the friends ready?"],
   "speaking":["Опиши себя: возраст, профессия, настроение — 4 предложения с am/is/are.","Задай 3 вопроса партнёру с Are you...?","Скажи, где находятся 3 предмета в комнате."]},

  {"id":3,"level":"A1","title":"Personal Questions","titleRu":"Личные вопросы","topic":"What / Where / How","description":"Вопросительные слова для базового общения о себе и других.","duration":"20 мин",
   "warmup":["What's your job?","Where do you live?","How do you spell your name?"],
   "vocab":[{"en":"what","ru":"что"},{"en":"where","ru":"где"},{"en":"how","ru":"как"},{"en":"who","ru":"кто"},{"en":"live","ru":"жить"},{"en":"work","ru":"работать"},{"en":"spell","ru":"произносить по буквам"},{"en":"address","ru":"адрес"},{"en":"phone","ru":"телефон"},{"en":"email","ru":"электронная почта"}],
   "grammar":{"title":"Wh-questions","blocks":[{"title":"What / Where / How","desc":"What — что. Where — где. How — как. How old — сколько лет. How do you spell — как пишется.","example":"What is your phone number?"},{"title":"Who","desc":"Who — кто. Who is she? Who are they?","example":"Who is your teacher?"}],
   "formulas":["What + is/are + ...?","Where + do/does + subject + V1?","How old are you?"],
   "extraExamples":[{"label":"Примеры","items":["Where do you work?","What is your email?","How do you spell that?"]}],
   "mistake":{"wrong":"Where you live?","right":"Where do you live?"}},
   "quiz":[{"sentence":"___ is your name?","options":["What","Where"],"answer":"What"},{"sentence":"Where ___ you live?","options":["do","does"],"answer":"do"},{"sentence":"___ old are you?","options":["How","What"],"answer":"How"},{"sentence":"___ is she?","options":["Who","Where"],"answer":"Who"},{"sentence":"What ___ your job?","options":["is","are"],"answer":"is"}],
   "pronunciation":[{"phrase":"What is your name?","ipa":"/wɒt ɪz jɔː neɪm/","tip":"What is → What's в речи"},{"phrase":"Where do you live?","ipa":"/weə duː juː lɪv/","tip":"Where — звук /eə/"},{"phrase":"How old are you?","ipa":"/haʊ əʊld ɑː juː/","tip":"Old — не путай с hold"},{"phrase":"How do you spell it?","ipa":"/haʊ duː juː spel/","tip":"Spell — короткий /e/"},{"phrase":"Who is she?","ipa":"/huː ɪz ʃiː/","tip":"Who — долгий /uː/"}],
   "culture":{"watch":["Friends — pilot episode (знакомство)"],"listen":["ABBA — Money, Money, Money"],"read":["Short bios of famous people (A1 level)"]},
   "cultureCheck":["What is the person's job?","Where do they live?","How old are they?","Who is their best friend?","What is their email address?"],
   "speaking":["Составь 5 вопросов для знакомства.","Ответь на все вопросы о себе полными предложениями.","Спроси и запиши данные вымышленного персонажа."]},

  {"id":4,"level":"A1","title":"Articles & Plurals","titleRu":"Артикли и множественное число","topic":"a / an / the / -s","description":"Неопределённый и определённый артикли, множественное число существительных.","duration":"20 мин",
   "warmup":["Is there a shop near here?","Do you have an umbrella?","Where is the bathroom?"],
   "vocab":[{"en":"a","ru":"неопределённый артикль"},{"en":"an","ru":"артикль перед гласной"},{"en":"the","ru":"определённый артикль"},{"en":"book","ru":"книга"},{"en":"apple","ru":"яблоко"},{"en":"child","ru":"ребёнок"},{"en":"children","ru":"дети"},{"en":"person","ru":"человек"},{"en":"people","ru":"люди"},{"en":"singular","ru":"единственное число"}],
   "grammar":{"title":"Articles & Plurals","blocks":[{"title":"A / An","desc":"A — перед согласным звуком: a book. An — перед гласным: an apple, an hour.","example":"I have a dog and an old car."},{"title":"The & Plurals","desc":"The — конкретный предмет. Множественное: +s (cats), -es (boxes), неправильные (children, people).","example":"The children are in the park."}],
   "formulas":["a + consonant sound / an + vowel sound","the + specific noun","plural: noun + s/es or irregular"],
   "extraExamples":[{"label":"Артикли","items":["She is an engineer.","The sun is bright."]},{"label":"Множественное","items":["Two children play outside.","Many people work here."]}],
   "mistake":{"wrong":"I have an dog.","right":"I have a dog."}},
   "quiz":[{"sentence":"I need ___ umbrella.","options":["a","an"],"answer":"an"},{"sentence":"___ moon is beautiful tonight.","options":["A","The"],"answer":"The"},{"sentence":"There are three ___.","options":["childs","children"],"answer":"children"},{"sentence":"She is ___ doctor.","options":["a","an"],"answer":"a"},{"sentence":"Many ___ live here.","options":["persons","people"],"answer":"people"}],
   "pronunciation":[{"phrase":"an apple","ipa":"/ən ˈæpl/","tip":"An — слабое /ən/"},{"phrase":"the book","ipa":"/ðə bʊk/","tip":"The — /ðə/ перед согласным"},{"phrase":"the apple","ipa":"/ði ˈæpl/","tip":"The — /ði/ перед гласным"},{"phrase":"children","ipa":"/ˈtʃɪldrən/","tip":"Children — ударение на первый слог"},{"phrase":"people","ipa":"/ˈpiːpl/","tip":"People — не путай с peoples"}],
   "culture":{"watch":["Mr. Bean — мало слов, визуальный контекст"],"listen":["Children's songs in English"],"read":["Picture dictionaries for beginners"]},
   "cultureCheck":["Is there a/an in the sentence?","Which nouns are plural?","Is the object specific (the)?","How many people/children are there?","What irregular plurals appear?"],
   "speaking":["Опиши 5 предметов в комнате с a/an/the.","Назови 5 неправильных множественных форм.","Составь 4 предложения о семье."]},

  {"id":5,"level":"A1","title":"Present Simple Basics","titleRu":"Настоящее простое — основы","topic":"I work / He works","description":"Базовое настоящее время для привычек, фактов и распорядка дня.","duration":"20 мин",
   "warmup":["What do you do every day?","Does she speak English?","Do they live in Moscow?"],
   "vocab":[{"en":"every day","ru":"каждый день"},{"en":"sometimes","ru":"иногда"},{"en":"never","ru":"никогда"},{"en":"wake up","ru":"просыпаться"},{"en":"breakfast","ru":"завтрак"},{"en":"go","ru":"идти"},{"en":"like","ru":"нравиться"},{"en":"want","ru":"хотеть"},{"en":"need","ru":"нуждаться"},{"en":"know","ru":"знать"}],
   "grammar":{"title":"Present Simple","blocks":[{"title":"Утверждение","desc":"I/you/we/they + глагол. He/she/it + глагол+s (go→goes, watch→watches).","example":"He works in a bank."},{"title":"Вопросы и отрицание","desc":"Do/Does + подлежащее + глагол. Don't/Doesn't + глагол.","example":"Do you like coffee? — No, I don't."}],
   "formulas":["I/you/we/they + V1","he/she/it + V1+s","Do/Does + subject + V1?"],
   "extraExamples":[{"label":"Утверждение","items":["I wake up at seven.","She likes music."]},{"label":"Отрицание","items":["He doesn't eat meat.","We don't watch TV."]}],
   "mistake":{"wrong":"He go to school.","right":"He goes to school."}},
   "quiz":[{"sentence":"She ___ to work by bus.","options":["go","goes"],"answer":"goes"},{"sentence":"___ you like pizza?","options":["Do","Does"],"answer":"Do"},{"sentence":"He ___ speak French.","options":["don't","doesn't"],"answer":"doesn't"},{"sentence":"We ___ breakfast at eight.","options":["have","has"],"answer":"have"},{"sentence":"It ___ every winter.","options":["snow","snows"],"answer":"snows"}],
   "pronunciation":[{"phrase":"He works hard.","ipa":"/hiː wɜːks hɑːd/","tip":"Works — звук /s/ на конце"},{"phrase":"Do you like it?","ipa":"/duː juː laɪk ɪt/","tip":"Do you → /dʊjuː/"},{"phrase":"She doesn't know.","ipa":"/ʃiː ˈdʌznt nəʊ/","tip":"Doesn't — ударение на doesn't"},{"phrase":"I wake up early.","ipa":"/aɪ weɪk ʌp ˈɜːli/","tip":"Wake up — фразовый глагол, связно"},{"phrase":"They never smoke.","ipa":"/ðeɪ ˈnevə sməʊk/","tip":"Never — ударение на первый слог"}],
   "culture":{"watch":["The Simpsons — daily routines"],"listen":["Dua Lipa — Levitating"],"read":["A1 graded readers about daily life"]},
   "cultureCheck":["What does the character do every day?","Does he/she like their job?","What time do they wake up?","Do they eat breakfast?","What don't they do?"],
   "speaking":["Опиши свой день: 5 предложений в Present Simple.","Задай 4 вопроса Do you...? партнёру.","Расскажи о друге: He/She + глагол с -s."]},

  {"id":6,"level":"A1","title":"There is / There are","titleRu":"There is / There are","topic":"Местоположение","description":"Конструкции для описания того, что есть и где находится.","duration":"20 мин",
   "warmup":["Is there a bank near here?","Are there any parks in your city?","How many rooms are there in your flat?"],
   "vocab":[{"en":"there is","ru":"есть (ед.ч.)"},{"en":"there are","ru":"есть (мн.ч.)"},{"en":"in","ru":"в"},{"en":"on","ru":"на"},{"en":"under","ru":"под"},{"en":"next to","ru":"рядом с"},{"en":"behind","ru":"за"},{"en":"room","ru":"комната"},{"en":"kitchen","ru":"кухня"},{"en":"any","ru":"какой-нибудь"}],
   "grammar":{"title":"There is / There are","blocks":[{"title":"Формы","desc":"There is + ед.ч. There are + мн.ч. Вопрос: Is there...? Are there...?","example":"There is a cat on the sofa."},{"title":"Предлоги места","desc":"In — внутри. On — на поверхности. Under — под. Next to — рядом. Behind — за.","example":"The keys are on the table."}],
   "formulas":["There is + singular noun","There are + plural noun","Preposition: in / on / under / next to"],
   "extraExamples":[{"label":"There is/are","items":["There are two windows in the room.","Is there a supermarket nearby?"]},{"label":"Предлоги","items":["The book is under the bed.","She sits next to me."]}],
   "mistake":{"wrong":"There are a book on the table.","right":"There is a book on the table."}},
   "quiz":[{"sentence":"There ___ a pen on the desk.","options":["is","are"],"answer":"is"},{"sentence":"There ___ many students in the class.","options":["is","are"],"answer":"are"},{"sentence":"The picture is ___ the wall.","options":["in","on"],"answer":"on"},{"sentence":"___ there any milk?","options":["Is","Are"],"answer":"Is"},{"sentence":"The cat is ___ the chair.","options":["under","on"],"answer":"under"}],
   "pronunciation":[{"phrase":"There is a book.","ipa":"/ðeər ɪz ə bʊk/","tip":"There is → There's"},{"phrase":"There are two cats.","ipa":"/ðeər ɑː tuː kæts/","tip":"There are — не опускай are"},{"phrase":"on the table","ipa":"/ɒn ðə ˈteɪbl/","tip":"On the — связно"},{"phrase":"next to me","ipa":"/nekst tə miː/","tip":"Next to — t часто мягкое"},{"phrase":"Is there any water?","ipa":"/ɪz ðeər eni ˈwɔːtə/","tip":"Any — слабое в вопросе"}],
   "culture":{"watch":["Geography documentaries — describing places"],"listen":["Louis Armstrong — What a Wonderful World"],"read":["City guides in simple English"]},
   "cultureCheck":["What is there in the room?","How many people are there?","Where is the object?","Is there a shop nearby?","What prepositions are used?"],
   "speaking":["Опиши свою комнату: 5 предложений с there is/are.","Опиши свой город: parks, shops, schools.","Скажи, где находятся 5 предметов с предлогами."]},

  {"id":7,"level":"A1","title":"Can — Ability","titleRu":"Can — умение и возможность","topic":"Могу / не могу","description":"Модальный глагол can для способностей, разрешений и просьб.","duration":"20 мин",
   "warmup":["Can you swim?","Can I open the window?","What can you do well?"],
   "vocab":[{"en":"can","ru":"мочь, уметь"},{"en":"can't","ru":"не мочь"},{"en":"swim","ru":"плавать"},{"en":"drive","ru":"водить"},{"en":"cook","ru":"готовить"},{"en":"dance","ru":"танцевать"},{"en":"sing","ru":"петь"},{"en":"help","ru":"помогать"},{"en":"speak","ru":"говорить"},{"en":"understand","ru":"понимать"}],
   "grammar":{"title":"Can","blocks":[{"title":"Способность","desc":"Can + глагол (без to). Can't — отрицание. Can не меняется: I/you/he can.","example":"I can swim but I can't drive."},{"title":"Просьба и разрешение","desc":"Can I...? — можно ли мне. Can you...? — не могли бы вы.","example":"Can you help me, please?"}],
   "formulas":["Subject + can + V1","Subject + can't + V1","Can + subject + V1?"],
   "extraExamples":[{"label":"Способность","items":["She can speak three languages.","They can't come today."]},{"label":"Просьбы","items":["Can I sit here?","Can you repeat that?"]}],
   "mistake":{"wrong":"She can to swim.","right":"She can swim."}},
   "quiz":[{"sentence":"I ___ play the guitar.","options":["can","cans"],"answer":"can"},{"sentence":"He ___ drive a car.","options":["can't","don't"],"answer":"can't"},{"sentence":"___ you help me?","options":["Can","Do"],"answer":"Can"},{"sentence":"She ___ speak Japanese.","options":["can","cans"],"answer":"can"},{"sentence":"___ I use your phone?","options":["Can","Am"],"answer":"Can"}],
   "pronunciation":[{"phrase":"I can swim.","ipa":"/aɪ kən swɪm/","tip":"Can — слабое /kən/"},{"phrase":"Can you help me?","ipa":"/kən juː help miː/","tip":"Help me — связно"},{"phrase":"She can't drive.","ipa":"/ʃiː kɑːnt draɪv/","tip":"Can't — долгий /ɑː/"},{"phrase":"Can I sit here?","ipa":"/kən aɪ sɪt hɪə/","tip":"Sit here — не пауза между словами"},{"phrase":"We can understand.","ipa":"/wiː kən ʌndəˈstænd/","tip":"Understand — ударение на -stand"}],
   "culture":{"watch":["Talent shows — can/can't abilities"],"listen":["Survivor — Eye of the Tiger"],"read":["Skills and hobbies vocabulary lists"]},
   "cultureCheck":["What can the character do?","What can't they do?","Can they help?","What languages can they speak?","Can I...? — what do they ask?"],
   "speaking":["Составь 5 предложений: I can... / I can't...","Задай 3 просьбы с Can you...?","Расскажи о талантах друга или героя."]},

  {"id":8,"level":"A1","title":"A1 Review","titleRu":"Повторение A1","topic":"Was/Were, numbers, time","description":"Итоговый урок A1: was/were, числа, время и повторение ключевых тем.","duration":"20 мин",
   "warmup":["Where were you yesterday?","What time is it?","How much does it cost?"],
   "vocab":[{"en":"was","ru":"был(а)"},{"en":"were","ru":"были"},{"en":"yesterday","ru":"вчера"},{"en":"o'clock","ru":"ровно (время)"},{"en":"half past","ru":"половина"},{"en":"quarter","ru":"четверть"},{"en":"number","ru":"число"},{"en":"price","ru":"цена"},{"en":"how much","ru":"сколько стоит"},{"en":"how many","ru":"сколько (штук)"}],
   "grammar":{"title":"A1 Review","blocks":[{"title":"Was / Were","desc":"Прошедшее от to be: I/he/she/it was, we/you/they were. Was/Were + подлежащее для вопросов.","example":"I was at home yesterday."},{"title":"Time & Numbers","desc":"What time is it? — It's three o'clock. Half past two. How many (счётные) / How much (несчётные).","example":"It's half past nine."}],
   "formulas":["I/he/she/it was / we/you/they were","What time is it? — It's + time","How many + plural / How much + uncountable"],
   "extraExamples":[{"label":"Was/Were","items":["They were happy.","Was she at school?"]},{"label":"Время","items":["It's quarter to five.","The lesson starts at ten."]}],
   "mistake":{"wrong":"I were tired.","right":"I was tired."}},
   "quiz":[{"sentence":"I ___ at home yesterday.","options":["was","were"],"answer":"was"},{"sentence":"They ___ late.","options":["was","were"],"answer":"were"},{"sentence":"___ she happy?","options":["Was","Were"],"answer":"Was"},{"sentence":"It's half ___ three.","options":["past","to"],"answer":"past"},{"sentence":"How ___ apples do you want?","options":["many","much"],"answer":"many"}],
   "pronunciation":[{"phrase":"I was at home.","ipa":"/aɪ wɒz ət həʊm/","tip":"Was — слабое /wəz/"},{"phrase":"They were happy.","ipa":"/ðeɪ wə ˈhæpi/","tip":"Were — /wə/ в быстрой речи"},{"phrase":"Half past two.","ipa":"/hɑːf pɑːst tuː/","tip":"Half — silent l"},{"phrase":"How much is it?","ipa":"/haʊ mʌtʃ ɪz ɪt/","tip":"Much — для цены и несчётных"},{"phrase":"Quarter to five.","ipa":"/ˈkwɔːtə tə faɪv/","tip":"Quarter — /kwɔːtə/"}],
   "culture":{"watch":["Travel vlogs — time and prices"],"listen":["Pink Floyd — Time"],"read":["A1 review exercises and dialogues"]},
   "cultureCheck":["Where were they yesterday?","What time is it in the scene?","How much does it cost?","How many people were there?","What A1 grammar appears?"],
   "speaking":["Расскажи, где ты был вчера — was/were.","Назови время 5 событий из своего дня.","Итоговый монолог о себе: 8–10 предложений (A1)."]},
]

# Load existing A2-B2 partial content
with open(os.path.join(DIR, '_build_curriculum.py'), encoding='utf-8') as f:
    src = f.read()
# Extract CURRICULUM list from build script by exec in limited scope
existing_a2_start = []
exec(compile(src.split('import os')[0], '_build_curriculum.py', 'exec'), {'existing_a2_start': existing_a2_start})
# Actually the variable is CURRICULUM in that script
ns = {}
exec(compile(src.split('\nimport os')[0], '_build_curriculum.py', 'exec'), ns)
A2_part = ns['CURRICULUM']

with open(os.path.join(DIR, '_curriculum_chunks.json'), encoding='utf-8') as f:
    B1_part = json.load(f)

# Additional lessons to complete course
EXTRA = [
  {"id":0,"level":"A2","title":"Comparatives & Superlatives","titleRu":"Сравнительная и превосходная степень","topic":"bigger, the best","description":"Сравниваем людей, предметы и явления: -er/-est и more/most.","duration":"20 мин",
   "warmup":["Which is bigger — your city or mine?","Who is the tallest in your family?","Is this book more interesting than that one?"],
   "vocab":[{"en":"bigger","ru":"больше"},{"en":"smaller","ru":"меньше"},{"en":"better","ru":"лучше"},{"en":"worse","ru":"хуже"},{"en":"the best","ru":"лучший"},{"en":"than","ru":"чем"},{"en":"as...as","ru":"такой же как"},{"en":"cheap","ru":"дешёвый"},{"en":"expensive","ru":"дорогой"},{"en":"interesting","ru":"интересный"}],
   "grammar":{"title":"Comparatives & Superlatives","blocks":[{"title":"Comparative","desc":"Короткие: +er (big→bigger) или more + прилагательное (more interesting). Than — чем.","example":"This phone is cheaper than mine."},{"title":"Superlative","desc":"The + -est (the biggest) или the most + adj. As...as — такой же.","example":"She is the most talented student."}],
   "formulas":["short adj: -er + than / the -est","long adj: more + adj + than / the most + adj"],
   "extraExamples":[{"label":"Сравнение","items":["He is taller than me.","It's as good as the original."]},{"label":"Превосходная","items":["This is the best film I've seen.","It's the most popular song."]}],
   "mistake":{"wrong":"He is more tall than me.","right":"He is taller than me."}},
   "quiz":[{"sentence":"This car is ___ than that one.","options":["faster","more fast"],"answer":"faster"},{"sentence":"She is the ___ student in the class.","options":["best","better"],"answer":"best"},{"sentence":"It's ___ expensive than I thought.","options":["more","most"],"answer":"more"},{"sentence":"He is as tall ___ his brother.","options":["as","than"],"answer":"as"},{"sentence":"This is the ___ building in the city.","options":["tallest","taller"],"answer":"tallest"}],
   "pronunciation":[{"phrase":"bigger than mine","ipa":"/ˈbɪɡə ðən maɪn/","tip":"Bigger — удвоение g"},{"phrase":"the best","ipa":"/ðə best/","tip":"Best — короткий e"},{"phrase":"more interesting","ipa":"/mɔː ˈɪntrəstɪŋ/","tip":"More — слабое r"},{"phrase":"as good as","ipa":"/əz ɡʊd əz/","tip":"As...as — слабые as"},{"phrase":"the most popular","ipa":"/ðə məʊst ˈpɒpjələ/","tip":"Popular — 3 слога"}],
   "culture":{"watch":["Top 10 lists — comparisons"],"listen":["Queen — We Are the Champions"],"read":["Product comparison articles (A2)"]},
   "cultureCheck":["Which is better?","Who is the most important character?","Is it as good as the first version?","What is cheaper?","What is the tallest/highest?"],
   "speaking":["Сравни 3 города по разным критериям.","Опиши лучший фильм/книгу — superlative.","Сравни себя с другом — 4 предложения с than."]},

  {"id":0,"level":"A2","title":"Countable & Uncountable","titleRu":"Исчисляемые и неисчисляемые","topic":"some, any, much, many","description":"Различаем исчисляемые и неисчисляемые существительные, some/any, much/many.","duration":"20 мин",
   "warmup":["How much water do you drink?","How many friends do you have?","Is there any milk left?"],
   "vocab":[{"en":"much","ru":"много (неисч.)"},{"en":"many","ru":"много (исч.)"},{"en":"some","ru":"немного, несколько"},{"en":"any","ru":"любой, некоторый"},{"en":"a lot of","ru":"много"},{"en":"few","ru":"мало (исч.)"},{"en":"little","ru":"мало (неисч.)"},{"en":"water","ru":"вода"},{"en":"money","ru":"деньги"},{"en":"advice","ru":"совет"}],
   "grammar":{"title":"Countable vs Uncountable","blocks":[{"title":"Much / Many","desc":"Many + исчисляемые (many books). Much + неисчисляемые (much time). A lot of — универсально.","example":"How many apples? How much sugar?"},{"title":"Some / Any","desc":"Some — утверждение. Any — вопросы и отрицание.","example":"There isn't any bread. Do you have any questions?"}],
   "formulas":["many + countable plural","much + uncountable","some (+) / any (?/-)"],
   "extraExamples":[{"label":"Примеры","items":["I don't have much money.","There are many people here."]},{"label":"Some/Any","items":["Would you like some tea?","I don't need any help."]}],
   "mistake":{"wrong":"How many money do you have?","right":"How much money do you have?"}},
   "quiz":[{"sentence":"How ___ students are there?","options":["many","much"],"answer":"many"},{"sentence":"I don't have ___ time.","options":["much","many"],"answer":"much"},{"sentence":"There isn't ___ milk.","options":["some","any"],"answer":"any"},{"sentence":"Would you like ___ coffee?","options":["some","any"],"answer":"some"},{"sentence":"She has ___ friends.","options":["a lot of","much"],"answer":"a lot of"}],
   "pronunciation":[{"phrase":"How much money?","ipa":"/haʊ mʌtʃ ˈmʌni/","tip":"Money — неисчисляемое"},{"phrase":"How many people?","ipa":"/haʊ ˈmeni ˈpiːpl/","tip":"Many — ударение на первый слог"},{"phrase":"a lot of water","ipa":"/ə lɒt əv ˈwɔːtə/","tip":"A lot of — связно"},{"phrase":"any questions","ipa":"/eni ˈkwestʃənz/","tip":"Questions — /tʃənz/"},{"phrase":"some advice","ipa":"/sʌm ədˈvaɪs/","tip":"Advice — неисчисляемое, без -s"}],
   "culture":{"watch":["Cooking shows — ingredients"],"listen":["Pink Floyd — Money"],"read":["Shopping dialogues A2"]},
   "cultureCheck":["How much/many is mentioned?","Is the noun countable?","Is some or any used correctly?","What uncountable nouns appear?","What do they need to buy?"],
   "speaking":["Скажи, сколько у тебя чего — much/many.","Составь список покупок с some/any.","Объясни разницу much и many на примерах."]},

  {"id":0,"level":"A2","title":"Prepositions of Time","titleRu":"Предлоги времени","topic":"at / in / on","description":"Предлоги at, in, on для времени и дат.","duration":"20 мин",
   "warmup":["When do you wake up?","What do you do on Sundays?","Were you born in summer?"],
   "vocab":[{"en":"at","ru":"в (время)"},{"en":"in","ru":"в (месяц/год)"},{"en":"on","ru":"в (день)"},{"en":"morning","ru":"утро"},{"en":"night","ru":"ночь"},{"en":"weekend","ru":"выходные"},{"en":"Monday","ru":"понедельник"},{"en":"January","ru":"январь"},{"en":"birthday","ru":"день рождения"},{"en":"holiday","ru":"праздник"}],
   "grammar":{"title":"Prepositions of Time","blocks":[{"title":"At / In / On","desc":"At — время: at 7, at night, at noon. In — месяцы, годы, части дня: in May, in 2020. On — дни: on Monday, on my birthday.","example":"The meeting is on Friday at 3 pm."},{"title":"Другие","desc":"At the weekend (BrE) / on the weekend (AmE). In the morning. At night.","example":"I study in the evening."}],
   "formulas":["at + time / at night","in + month/year/season","on + day/date"],
   "extraExamples":[{"label":"At","items":["at 8 o'clock","at the moment"]},{"label":"In/On","items":["in winter","on Christmas Day"]}],
   "mistake":{"wrong":"I work in Monday.","right":"I work on Monday."}},
   "quiz":[{"sentence":"The class starts ___ nine.","options":["at","on"],"answer":"at"},{"sentence":"She was born ___ 1995.","options":["in","on"],"answer":"in"},{"sentence":"We meet ___ Friday.","options":["on","in"],"answer":"on"},{"sentence":"I read books ___ the evening.","options":["in","at"],"answer":"in"},{"sentence":"___ night I sleep.","options":["At","On"],"answer":"At"}],
   "pronunciation":[{"phrase":"at nine o'clock","ipa":"/ət naɪn əˈklɒk/","tip":"At — слабое /ət/"},{"phrase":"on Monday","ipa":"/ɒn ˈmʌndeɪ/","tip":"Monday — ударение на первый слог"},{"phrase":"in January","ipa":"/ɪn ˈdʒænjuəri/","tip":"January — не пропускай syllables"},{"phrase":"at the weekend","ipa":"/ət ðə wiːkˈend/","tip":"Weekend — BrE at"},{"phrase":"in the morning","ipa":"/ɪn ðə ˈmɔːnɪŋ/","tip":"The — слабое /ðə/"}],
   "culture":{"watch":["Calendar and schedule scenes in films"],"listen":["The Bangles — Manic Monday"],"read":["Diary entries A2"]},
   "cultureCheck":["When does the event happen?","What preposition is used?","What day/month is mentioned?","At what time?","Is at/in/on correct?"],
   "speaking":["Расскажи о своём расписании с at/in/on.","Опиши свой день рождения и праздники.","Исправь 5 предложений с ошибками в предлогах."]},

  {"id":0,"level":"B1","title":"Reported Speech","titleRu":"Косвенная речь","topic":"He said that...","description":"Передаём чужие слова: сдвиг времён и изменение местоимений.","duration":"20 мин",
   "warmup":["What did your friend tell you yesterday?","Did she say where she was going?","What did the teacher explain?"],
   "vocab":[{"en":"said","ru":"сказал"},{"en":"told","ru":"сказал (кому-то)"},{"en":"asked","ru":"спросил"},{"en":"explained","ru":"объяснил"},{"en":"claimed","ru":"утверждал"},{"en":"admitted","ru":"признал"},{"en":"refused","ru":"отказался"},{"en":"promised","ru":"пообещал"},{"en":"warned","ru":"предупредил"},{"en":"suggested","ru":"предложил"}],
   "grammar":{"title":"Reported Speech","blocks":[{"title":"Утверждения","desc":"Say/tell + (that) + сдвиг назад: Present→Past, Past→Past Perfect, will→would.","example":"He said (that) he was tired."},{"title":"Вопросы и приказы","desc":"Ask + if/whether или wh-word. Tell/ask + to + V: She told me to wait.","example":"She asked if I was ready."}],
   "formulas":["said (that) + past tense","told + person + (that)","asked + if/wh-word + past"],
   "extraExamples":[{"label":"Statements","items":["'I love it' → He said he loved it.","'I will come' → She said she would come."]},{"label":"Questions","items":["'Are you OK?' → He asked if I was OK."]}],
   "mistake":{"wrong":"He said me that he was busy.","right":"He told me that he was busy."}},
   "quiz":[{"sentence":"She said she ___ tired.","options":["was","is"],"answer":"was"},{"sentence":"He told me ___ wait.","options":["to","for"],"answer":"to"},{"sentence":"They asked if we ___ coming.","options":["were","are"],"answer":"were"},{"sentence":"She said she ___ help.","options":["would","will"],"answer":"would"},{"sentence":"He asked where I ___.","options":["lived","live"],"answer":"lived"}],
   "pronunciation":[{"phrase":"He said he was busy.","ipa":"/hiː sed hiː wɒz ˈbɪzi/","tip":"Said he — связно"},{"phrase":"She told me to wait.","ipa":"/ʃiː təʊld miː tə weɪt/","tip":"Told me — не told to me"},{"phrase":"They asked if I knew.","ipa":"/ðeɪ ɑːskt ɪf aɪ njuː/","tip":"Asked if — одна фраза"},{"phrase":"He explained that it was true.","ipa":"/hiː ɪkˈspleɪnd ðæt/","tip":"Explained that — связно"},{"phrase":"She promised she would come.","ipa":"/ʃiː ˈprɒmɪst/","tip":"Promised — ударение на первый слог"}],
   "culture":{"watch":["Interview scenes — reported quotes"],"listen":["Simon & Garfunkel — The Sound of Silence"],"read":["News articles with reported speech"]},
   "cultureCheck":["What did he say?","What did she ask?","Did they tell or say?","What tense shift appears?","What did he promise?"],
   "speaking":["Перескажи диалог в reported speech.","Преобразуй 5 прямых цитат в косвенные.","Расскажи, что тебе сказал друг вчера."]},

  {"id":0,"level":"B1","title":"Relative Clauses","titleRu":"Относительные придаточные","topic":"who, which, that, where","description":"Описываем людей и предметы с помощью who, which, that, where.","duration":"20 мин",
   "warmup":["Do you know anyone who speaks Chinese?","What's the book which you recommended?","Is there a café where we can sit?"],
   "vocab":[{"en":"who","ru":"который (люди)"},{"en":"which","ru":"который (вещи)"},{"en":"that","ru":"который (универс.)"},{"en":"where","ru":"где"},{"en":"whose","ru":"чей"},{"en":"defining","ru":"определяющий"},{"en":"non-defining","ru":"неопределяющий"},{"en":"clause","ru":"придаточное"},{"en":"omit","ru":"опускать"},{"en":"relative","ru":"относительный"}],
   "grammar":{"title":"Relative Clauses","blocks":[{"title":"Who / Which / That","desc":"Who — для людей. Which — для вещей. That — для обоих. Можно опустить that в объектной позиции.","example":"The woman who lives next door is a doctor."},{"title":"Where / Whose","desc":"Where — для мест. Whose — чей. Non-defining: запятые, нельзя that, нельзя опускать.","example":"London, where I was born, is beautiful."}],
   "formulas":["person + who/that + clause","thing + which/that + clause","place + where + clause"],
   "extraExamples":[{"label":"Defining","items":["The film that we saw was great.","People who exercise live longer."]},{"label":"Non-defining","items":["My brother, who is a lawyer, lives abroad."]}],
   "mistake":{"wrong":"The man which called is my uncle.","right":"The man who called is my uncle."}},
   "quiz":[{"sentence":"The man ___ called is my uncle.","options":["who","which"],"answer":"who"},{"sentence":"The book ___ I read was great.","options":["which","who"],"answer":"which"},{"sentence":"This is the town ___ I grew up.","options":["where","which"],"answer":"where"},{"sentence":"The woman ___ car was stolen called the police.","options":["whose","who's"],"answer":"whose"},{"sentence":"My sister, ___ lives in Paris, is visiting.","options":["who","that"],"answer":"who"}],
   "pronunciation":[{"phrase":"The man who called","ipa":"/ðə mæn huː kɔːld/","tip":"Who — слабое /huː/"},{"phrase":"The book which I read","ipa":"/ðə bʊk wɪtʃ/","tip":"Which — не путай с witch"},{"phrase":"the town where I grew up","ipa":"/weə aɪ ɡruː ʌp/","tip":"Grew up — фразовый глагол"},{"phrase":"whose car","ipa":"/huːz kɑː/","tip":"Whose — /huːz/, не who's"},{"phrase":"My sister, who lives in Paris","ipa":"/ˈsɪstə huː lɪvz/","tip":"Пауза на запятой"}],
   "culture":{"watch":["Documentaries — descriptive clauses"],"listen":["The Beatles — Eleanor Rigby"],"read":["Biographies with relative clauses"]},
   "cultureCheck":["Who/which/that is used?","Is the clause defining or non-defining?","Where is the place described?","Whose possession is mentioned?","Can that be omitted?"],
   "speaking":["Опиши 3 людей с who.","Опиши 3 места с where.","Напиши 2 non-defining clauses о семье."]},

  {"id":0,"level":"B1","title":"Phrasal Verbs 1","titleRu":"Фразовые глаголы 1","topic":"get up, look for, turn on","description":"Самые частые фразовые глаголы: отделяемые и неотделяемые.","duration":"20 мин",
   "warmup":["What time do you get up?","Have you looked for your keys?","Can you turn on the light?"],
   "vocab":[{"en":"get up","ru":"вставать"},{"en":"look for","ru":"искать"},{"en":"turn on","ru":"включать"},{"en":"turn off","ru":"выключать"},{"en":"give up","ru":"сдаваться"},{"en":"find out","ru":"выяснять"},{"en":"pick up","ru":"подбирать, забирать"},{"en":"put on","ru":"надевать"},{"en":"take off","ru":"снимать"},{"en":"wake up","ru":"просыпаться"}],
   "grammar":{"title":"Phrasal Verbs","blocks":[{"title":"Структура","desc":"Глагол + частица (up, off, on). Значение часто отличается от основного глагол.","example":"I need to find out the truth."},{"title":"Отделяемые","desc":"С местоимением частица отделяется: turn it on. Без: turn on the light.","example":"She picked up the phone."}],
   "formulas":["verb + particle = new meaning","separable: turn the light on / turn on the light"],
   "extraExamples":[{"label":"Примеры","items":["Don't give up!","He woke up late."]},{"label":"Separable","items":["Turn it off.","Put your coat on."]}],
   "mistake":{"wrong":"I looked my keys for.","right":"I looked for my keys."}},
   "quiz":[{"sentence":"I ___ at seven every day.","options":["get up","get on"],"answer":"get up"},{"sentence":"She is ___ her glasses.","options":["looking for","looking at"],"answer":"looking for"},{"sentence":"Please ___ the TV ___.","options":["turn / off","turn / out"],"answer":"turn / off"},{"sentence":"Don't ___ !","options":["give up","give in"],"answer":"give up"},{"sentence":"I need to ___ the answer.","options":["find out","find off"],"answer":"find out"}],
   "pronunciation":[{"phrase":"get up","ipa":"/ɡet ʌp/","tip":"Get up — связный phrasal"},{"phrase":"look for","ipa":"/lʊk fɔː/","tip":"For — слабое"},{"phrase":"turn it on","ipa":"/tɜːn ɪt ɒn/","tip":"Turn it on — разделяемый"},{"phrase":"give up","ipa":"/ɡɪv ʌp/","tip":"Give up — stress on give"},{"phrase":"find out","ipa":"/faɪnd aʊt/","tip":"Find out — d + out связно"}],
   "culture":{"watch":["Sitcoms — everyday phrasal verbs"],"listen":["Bon Jovi — It's My Life"],"read":["Phrasal verb lists B1"]},
   "cultureCheck":["What phrasal verb is used?","Is it separable?","What does it mean in context?","Can you replace with a synonym?","Which particle changes the meaning?"],
   "speaking":["Расскажи о своём утре с phrasal verbs.","Составь 5 предложений с look for, give up, find out.","Объясни разницу turn on / turn off."]},

  {"id":0,"level":"B2","title":"Word Formation","titleRu":"Словообразование","topic":"Prefixes & suffixes","description":"Префиксы и суффиксы для расширения словарного запаса и экзамена B2.","duration":"20 мин",
   "warmup":["What is the noun form of 'decide'?","How do you make an adjective from 'success'?","What does 'unhappy' mean?"],
   "vocab":[{"en":"prefix","ru":"приставка"},{"en":"suffix","ru":"суффикс"},{"en":"un-","ru":"не- (отрицание)"},{"en":"-tion","ru":"суффикс существительного"},{"en":"-ful","ru":"полный"},{"en":"-less","ru":"без"},{"en":"-ment","ru":"суффикс существительного"},{"en":"-able","ru":"-имый"},{"en":"over-","ru":"пере-, сверх-"},{"en":"re-","ru":"повторно"}],
   "grammar":{"title":"Word Formation","blocks":[{"title":"Суффиксы","desc":"-tion/-sion: decide→decision. -ment: develop→development. -ful/-less: care→careful/careless. -able: comfort→comfortable.","example":"Her happiness is important."},{"title":"Префиксы","desc":"Un-: unhappy. Re-: rewrite. Over-: overcook. Dis-: disagree. Mis-: misunderstand.","example":"It was an unforgettable experience."}],
   "formulas":["verb + -tion/-ment = noun","noun/adj + -ful/-less = adjective","prefix + base word = new word"],
   "extraExamples":[{"label":"Суффиксы","items":["achieve → achievement","responsible → responsibility"]},{"label":"Префиксы","items":["un + predictable = unpredictable","re + consider = reconsider"]}],
   "mistake":{"wrong":"She has a lot of happy.","right":"She has a lot of happiness."}},
   "quiz":[{"sentence":"We need to make a ___. (decide)","options":["decision","decisionment"],"answer":"decision"},{"sentence":"The film was ___. (forget)","options":["unforgettable","unforgetable"],"answer":"unforgettable"},{"sentence":"She is very ___. (create)","options":["creative","creatful"],"answer":"creative"},{"sentence":"There was a ___ in plans. (change)","options":["change","changement"],"answer":"change"},{"sentence":"He ___ the document. (write again)","options":["rewrote","wrote"],"answer":"rewrote"}],
   "pronunciation":[{"phrase":"unforgettable","ipa":"/ʌnfəˈɡetəbl/","tip":"Stress on -get-"},{"phrase":"responsibility","ipa":"/rɪˌspɒnsəˈbɪləti/","tip":"5 syllables"},{"phrase":"development","ipa":"/dɪˈveləpmənt/","tip":"Silent p in development"},{"phrase":"unpredictable","ipa":"/ʌnprɪˈdɪktəbl/","tip":"Un- + predictable"},{"phrase":"achievement","ipa":"/əˈtʃiːvmənt/","tip":"Achievement — ch as /tʃ/"}],
   "culture":{"watch":["TED Talks — academic vocabulary"],"listen":["Podcasts on science and society"],"read":["B2 word formation exercises"]},
   "cultureCheck":["What suffix creates the noun?","What prefix changes the meaning?","What part of speech is needed?","Find 3 formed words in the text.","What is the base word?"],
   "speaking":["Образуй 5 слов с -tion/-ment от глаголов.","Придумай 5 слов с un-/re-/dis-.","Используй 3 new formed words в предложениях."]},

  {"id":0,"level":"B2","title":"Collocations & Idioms","titleRu":"Коллокации и идиомы","topic":"make a decision, heavy rain","description":"Устойчивые сочетания слов и идиомы уровня B2.","duration":"20 мин",
   "warmup":["Do you make or do a decision?","What does 'break the ice' mean?","When do you feel under the weather?"],
   "vocab":[{"en":"collocation","ru":"коллокация"},{"en":"idiom","ru":"идиома"},{"en":"make a decision","ru":"принять решение"},{"en":"heavy rain","ru":"сильный дождь"},{"en":"break the ice","ru":"растопить лёд"},{"en":"under the weather","ru":"нездоровиться"},{"en":"piece of cake","ru":"проще простого"},{"en":"achieve a goal","ru":"достичь цели"},{"en":"raise awareness","ru":"повысить осведомлённость"},{"en":"commit a crime","ru":"совершить преступление"}],
   "grammar":{"title":"Collocations & Idioms","blocks":[{"title":"Коллокации","desc":"Некоторые слова идут только вместе: make a mistake (не do), heavy rain (не strong rain), highly recommend.","example":"She made an important decision."},{"title":"Идиомы","desc":"Переносное значение: break the ice, under the weather, once in a blue moon.","example":"The exam was a piece of cake."}],
   "formulas":["make + decision/mistake/effort","heavy + rain/traffic","idiom = figurative meaning"],
   "extraExamples":[{"label":"Collocations","items":["reach an agreement","take a risk"]},{"label":"Idioms","items":["It's raining cats and dogs.","He hit the nail on the head."]}],
   "mistake":{"wrong":"I did a mistake.","right":"I made a mistake."}},
   "quiz":[{"sentence":"She ___ a decision yesterday.","options":["made","did"],"answer":"made"},{"sentence":"There was ___ rain last night.","options":["heavy","strong"],"answer":"heavy"},{"sentence":"The test was a piece of ___.","options":["cake","pie"],"answer":"cake"},{"sentence":"He feels under the ___.","options":["weather","rain"],"answer":"weather"},{"sentence":"We need to ___ awareness.","options":["raise","rise"],"answer":"raise"}],
   "pronunciation":[{"phrase":"make a decision","ipa":"/meɪk ə dɪˈsɪʒn/","tip":"Decision — /ʒ/ sound"},{"phrase":"heavy rain","ipa":"/ˈhevi reɪn/","tip":"Heavy — не heave"},{"phrase":"break the ice","ipa":"/breɪk ði aɪs/","tip":"Ice — idiom, literal practice helps"},{"phrase":"under the weather","ipa":"/ˈʌndə ðə ˈweðə/","tip":"Weather — idiom for feeling ill"},{"phrase":"piece of cake","ipa":"/piːs əv keɪk/","tip":"Means very easy"}],
   "culture":{"watch":["British sitcoms — idioms in context"],"listen":["BBC Learning English — idioms"],"read":["Collocation dictionaries B2"]},
   "cultureCheck":["What collocation is used?","What does the idiom mean literally vs figuratively?","Make or do?","Find an idiom in the text.","What natural pair of words appears?"],
   "speaking":["Используй 5 collocations в рассказе о работе/учёбе.","Объясни 3 идиомы своими словами.","Исправь 5 неправильных collocations."]},

  {"id":0,"level":"B2","title":"Formal vs Informal Register","titleRu":"Формальный и неформальный стиль","topic":"Request, apology, complaint","description":"Различаем формальный и неформальный регистр в письме и речи.","duration":"20 мин",
   "warmup":["How do you write a formal email?","What's the informal way to say 'I would like to'?","How do you complain politely?"],
   "vocab":[{"en":"formal","ru":"формальный"},{"en":"informal","ru":"неформальный"},{"en":"register","ru":"регистр, стиль"},{"en":"request","ru":"просьба"},{"en":"apologize","ru":"извиняться"},{"en":"complaint","ru":"жалоба"},{"en":"dear","ru":"уважаемый (в письме)"},{"en":"yours sincerely","ru":"с уважением"},{"en":"I would appreciate","ru":"я был бы признателен"},{"en":"inform","ru":"информировать"}],
   "grammar":{"title":"Formal vs Informal","blocks":[{"title":"Формальный","desc":"I would like to, I am writing to, I would appreciate if, Please find attached, Yours sincerely.","example":"I am writing to inquire about the position."},{"title":"Неформальный","desc":"I want to, Can you, Thanks, Cheers, Hi/Hey, contractions.","example":"Hey! Can you send me the file?"}],
   "formulas":["Formal: I would like / I am writing to / Could you please","Informal: I want / Can you / Thanks"],
   "extraExamples":[{"label":"Formal","items":["I would be grateful if you could...","Please accept my apologies."]},{"label":"Informal","items":["Sorry about that!","Could you gimme a hand?"]}],
   "mistake":{"wrong":"Dear Sir, I want the job.","right":"Dear Sir, I would like to apply for the position."}},
   "quiz":[{"sentence":"___ writing to complain about the service. (formal)","options":["I am","I'm"],"answer":"I am"},{"sentence":"___ you send me the report? (informal)","options":["Can","May"],"answer":"Can"},{"sentence":"I would ___ if you could reply.","options":["appreciate","appreciate it"],"answer":"appreciate"},{"sentence":"___ Sir/Madam, (formal start)","options":["Dear","Hey"],"answer":"Dear"},{"sentence":"Yours ___, (formal end)","options":["sincerely","cheers"],"answer":"sincerely"}],
   "pronunciation":[{"phrase":"I am writing to inform you","ipa":"/aɪ æm ˈraɪtɪŋ/","tip":"Formal — clear articulation"},{"phrase":"I would appreciate it","ipa":"/aɪ wʊd əˈpriːʃieɪt/","tip":"Would — не сокращай в формальной речи"},{"phrase":"Please find attached","ipa":"/pliːz faɪnd əˈtætʃt/","tip":"Attached — business email phrase"},{"phrase":"Sorry about that","ipa":"/ˈsɒri əˈbaʊt ðæt/","tip":"Informal apology"},{"phrase":"Could you please","ipa":"/kʊd juː pliːz/","tip":"Polite request"}],
   "culture":{"watch":["Business email tutorials"],"listen":["Formal speeches and interviews"],"read":["Formal and informal letter samples B2"]},
   "cultureCheck":["Is the tone formal or informal?","What formal phrase is used?","How is the letter opened and closed?","What would the informal version be?","Is the complaint polite?"],
   "speaking":["Напиши formal email с просьбой.","Перепиши formal текст в informal.","Составь formal жалобу в отель."]},

  {"id":0,"level":"B2","title":"Linking Words & Essays","titleRu":"Связующие слова и эссе","topic":"However, moreover, although","description":"Связующие слова для связной письменной речи и эссе B2.","duration":"20 мин",
   "warmup":["How do you start an opinion essay?","What linking word shows contrast?","How do you add another argument?"],
   "vocab":[{"en":"however","ru":"однако"},{"en":"moreover","ru":"более того"},{"en":"although","ru":"хотя"},{"en":"therefore","ru":"поэтому"},{"en":"furthermore","ru":"кроме того"},{"en":"nevertheless","ru":"тем не менее"},{"en":"whereas","ru":"тогда как"},{"en":"in addition","ru":"в дополнение"},{"en":"on the other hand","ru":"с другой стороны"},{"en":"conclusion","ru":"заключение"}],
   "grammar":{"title":"Linking Words","blocks":[{"title":"Контраст","desc":"However, although, whereas, on the other hand, nevertheless — показывают противопоставление.","example":"Although it was raining, we went out."},{"title":"Добавление и вывод","desc":"Moreover, furthermore, in addition — добавление. Therefore, as a result, in conclusion — вывод.","example":"The plan is risky. However, it could succeed."}],
   "formulas":["Although + clause, main clause","Main clause. However, ...","In conclusion, + summary"],
   "extraExamples":[{"label":"Contrast","items":["Whereas city life is busy, rural life is calm.","Nevertheless, we continued."]},{"label":"Addition/Conclusion","items":["Moreover, the cost is low.","Therefore, I disagree."]}],
   "mistake":{"wrong":"Although it was late, but we stayed.","right":"Although it was late, we stayed."}},
   "quiz":[{"sentence":"___, the weather was bad, we enjoyed the trip.","options":["Although","However"],"answer":"Although"},{"sentence":"The price is high. ___, the quality is excellent.","options":["However","Moreover"],"answer":"However"},{"sentence":"___, we need to consider the budget.","options":["Furthermore","Whereas"],"answer":"Furthermore"},{"sentence":"He loves sport, ___ she prefers art.","options":["whereas","therefore"],"answer":"whereas"},{"sentence":"___, I believe education is essential.","options":["In conclusion","Although"],"answer":"In conclusion"}],
   "pronunciation":[{"phrase":"However, it is true","ipa":"/haʊˈevə/","tip":"However — stress on -ev-"},{"phrase":"Although it was late","ipa":"/ɔːlˈðəʊ/","tip":"Although — one smooth word"},{"phrase":"Furthermore","ipa":"/ˈfɜːðəmɔː/","tip":"Furthermore — formal link"},{"phrase":"On the other hand","ipa":"/ɒn ði ˈʌðə hænd/","tip":"Fixed phrase — stress on other"},{"phrase":"In conclusion","ipa":"/ɪn kənˈkluːʒn/","tip":"Conclusion — /ʒ/ sound"}],
   "culture":{"watch":["Debate programmes"],"listen":["Academic lectures with linking words"],"read":["B2 essay samples with feedback"]},
   "cultureCheck":["What linking word shows contrast?","What adds information?","How does the essay conclude?","Find although/however in the text.","Is the argument logical?"],
   "speaking":["Напиши эссе 150 слов с however, moreover, in conclusion.","Соедини 4 предложения linking words.","Выскажи мнение с although и therefore."]},

  {"id":0,"level":"B2","title":"Discussions & Opinions","titleRu":"Обсуждения и мнения","topic":"I believe, in my view","description":"Выражаем и аргументируем мнение на уровне B2.","duration":"20 мин",
   "warmup":["What is your opinion on social media?","Do you agree that travel broadens the mind?","How do you politely disagree?"],
   "vocab":[{"en":"opinion","ru":"мнение"},{"en":"agree","ru":"соглашаться"},{"en":"disagree","ru":"не соглашаться"},{"en":"argue","ru":"аргументировать"},{"en":"point of view","ru":"точка зрения"},{"en":"I believe","ru":"я считаю"},{"en":"in my view","ru":"по моему мнению"},{"en":"to some extent","ru":"в некоторой степени"},{"en":"convincing","ru":"убедительный"},{"en":"controversial","ru":"спорный"}],
   "grammar":{"title":"Expressing Opinions","blocks":[{"title":"Выражение мнения","desc":"I believe, In my opinion/view, It seems to me that, I would argue that, From my perspective.","example":"In my view, technology has improved our lives."},{"title":"Согласие и несогласие","desc":"I agree/disagree, I see your point, but..., That's a valid point, however...","example":"I see your point, but I think we need more data."}],
   "formulas":["In my opinion, + clause","I agree/disagree because...","I see your point, but..."],
   "extraExamples":[{"label":"Opinion","items":["I firmly believe that education matters.","It seems to me that the policy is unfair."]},{"label":"Disagreement","items":["I understand, but I don't fully agree.","That's debatable."]}],
   "mistake":{"wrong":"In my opinion I think it is bad.","right":"In my opinion, it is harmful."}},
   "quiz":[{"sentence":"___ my view, we should invest more.","options":["In","On"],"answer":"In"},{"sentence":"I ___ with your argument.","options":["agree","agree to"],"answer":"agree"},{"sentence":"I see your point, ___ I disagree.","options":["but","and"],"answer":"but"},{"sentence":"It ___ to me that he is right.","options":["seems","looks"],"answer":"seems"},{"sentence":"That is a ___ topic.","options":["controversial","controversy"],"answer":"controversial"}],
   "pronunciation":[{"phrase":"In my opinion","ipa":"/ɪn maɪ əˈpɪnjən/","tip":"Opinion — stress on -pin-"},{"phrase":"I see your point","ipa":"/aɪ siː jɔː pɔɪnt/","tip":"Polite disagreement starter"},{"phrase":"I firmly believe","ipa":"/aɪ ˈfɜːmli bɪˈliːv/","tip":"Firmly — shows strong opinion"},{"phrase":"to some extent","ipa":"/tə sʌm ɪkˈstent/","tip":"Partial agreement phrase"},{"phrase":"That's debatable","ipa":"/ðæts dɪˈbeɪtəbl/","tip":"Polite challenge"}],
   "culture":{"watch":["Panel discussions and podcasts"],"listen":["BBC World Service — debates"],"read":["Opinion columns B2"]},
   "cultureCheck":["What opinion phrase is used?","Does the speaker agree or disagree?","What arguments are given?","Is the topic controversial?","How do they disagree politely?"],
   "speaking":["Выскажи мнение о 3 спорных темах.","Проведи мини-дебаты: за и против.","Ответь на мнение собеседника с I see your point, but..."]},

  {"id":0,"level":"B2","title":"Inversion & Emphasis","titleRu":"Инверсия и эмфаза","topic":"Not only..., Never have I...","description":"Инверсия для эмфазы и формального стиля B2.","duration":"20 мин",
   "warmup":["Not only did he win, but...","Never have I seen such a view.","What emphatic structures do you know?"],
   "vocab":[{"en":"inversion","ru":"инверсия"},{"en":"emphasis","ru":"эмфаза"},{"en":"not only","ru":"не только"},{"en":"never","ru":"никогда"},{"en":"rarely","ru":"редко"},{"en":"seldom","ru":"изредка"},{"en":"hardly","ru":"едва"},{"en":"no sooner","ru":"как только"},{"en":"cleft sentence","ru":"расщеплённое предложение"},{"en":"what-clause","ru":"what-конструкция"}],
   "grammar":{"title":"Inversion & Emphasis","blocks":[{"title":"Negative inversion","desc":"Never/Rarely/Seldom/Hardly + auxiliary + subject. Not only...but also.","example":"Never have I been so impressed."},{"title":"Cleft sentences","desc":"It is/was...that/who для эмфазы. What I need is...","example":"It was John who called yesterday."}],
   "formulas":["Never/Rarely + have/had + subject + V3","It is/was + focus + that/who"],
   "extraExamples":[{"label":"Inversion","items":["Rarely do we see such talent.","Not only did she pass, but she got top marks."]},{"label":"Cleft","items":["What I love is the atmosphere.","It is the price that worries me."]}],
   "mistake":{"wrong":"Never I have seen this.","right":"Never have I seen this."}},
   "quiz":[{"sentence":"Never ___ I seen such beauty.","options":["have","has"],"answer":"have"},{"sentence":"Not only did he arrive late, ___ he forgot the documents.","options":["but","and"],"answer":"but"},{"sentence":"Rarely ___ she complain.","options":["does","do"],"answer":"does"},{"sentence":"It was Maria ___ solved the problem.","options":["who","which"],"answer":"who"},{"sentence":"___ I need is more time.","options":["What","That"],"answer":"What"}],
   "pronunciation":[{"phrase":"Never have I seen","ipa":"/ˈnevə hæv aɪ siːn/","tip":"Inversion — formal emphasis"},{"phrase":"Not only but also","ipa":"/nɒt ˈəʊnli bət ˈɔːlsəʊ/","tip":"Paired structure"},{"phrase":"Rarely do we","ipa":"/ˈreəli duː wiː/","tip":"Rarely — inversion trigger"},{"phrase":"It was John who","ipa":"/ɪt wɒz dʒɒn huː/","tip":"Cleft — stress on John"},{"phrase":"What I need is","ipa":"/wɒt aɪ niːd ɪz/","tip":"What-cleft emphasis"}],
   "culture":{"watch":["Formal speeches — rhetorical devices"],"listen":["Political speeches with emphasis"],"read":["Advanced grammar B2 texts"]},
   "cultureCheck":["What inversion structure appears?","What is emphasised in the cleft sentence?","What negative adverb triggers inversion?","Not only...but also?","What is the formal effect?"],
   "speaking":["Составь 3 предложения с Never/Rarely + inversion.","Напиши 2 cleft sentences о своих приоритетах.","Перефразируй с Not only...but also."]},

  {"id":0,"level":"B2","title":"B2 Exam Skills & Review","titleRu":"Экзамен B2 и итоговое повторение","topic":"Reading, listening, review","description":"Стратегии экзамена B2: чтение, аудирование, повторение всех тем курса.","duration":"25 мин",
   "warmup":["What B2 exam do you know?","How do you manage time in reading tasks?","What grammar topics are hardest for you?"],
   "vocab":[{"en":"exam","ru":"экзамен"},{"en":"strategy","ru":"стратегия"},{"en":"skim","ru":"бегло просматривать"},{"en":"scan","ru":"искать информацию"},{"en":"keyword","ru":"ключевое слово"},{"en":"task","ru":"задание"},{"en":"review","ru":"повторение"},{"en":"assessment","ru":"оценка"},{"en":"certificate","ru":"сертификат"},{"en":"proficiency","ru":"владение языком"}],
   "grammar":{"title":"B2 Review","blocks":[{"title":"Экзаменационные навыки","desc":"Reading: skim для общей идеи, scan для деталей. Listening: читай вопросы заранее. Writing: план из 4 абзацев.","example":"Skim the title and first paragraph first."},{"title":"Повторение грамматики","desc":"B2: все времена, conditionals, passive, reported speech, modals, relative clauses, word formation, linking words.","example":"Review one topic per day before the exam."}],
   "formulas":["Skim → general idea / Scan → specific info","Essay: intro + 2 body paragraphs + conclusion"],
   "extraExamples":[{"label":"Exam tips","items":["Underline keywords in questions.","Check word limit in writing."]},{"label":"Review checklist","items":["Conditionals ✓ Passive ✓ Linking words ✓"]}],
   "mistake":{"wrong":"I read every word slowly in the exam.","right":"I skim first, then scan for answers."}},
   "quiz":[{"sentence":"To find a date quickly, you ___.","options":["scan","skim"],"answer":"scan"},{"sentence":"For the main idea, you ___.","options":["skim","scan"],"answer":"skim"},{"sentence":"B2 level is ___ C1.","options":["below","above"],"answer":"below"},{"sentence":"In an essay, start with ___.","options":["an introduction","a conclusion"],"answer":"an introduction"},{"sentence":"Word formation is tested ___ B2 exams.","options":["in","on"],"answer":"in"}],
   "pronunciation":[{"phrase":"skim and scan","ipa":"/skɪm ənd skæn/","tip":"Reading strategies vocabulary"},{"phrase":"B2 proficiency","ipa":"/biː tuː prəˈfɪʃnsi/","tip":"Proficiency — formal term"},{"phrase":"assessment task","ipa":"/əˈsesmənt tɑːsk/","tip":"Assessment — exam context"},{"phrase":"in conclusion","ipa":"/ɪn kənˈkluːʒn/","tip":"Essay ending phrase"},{"phrase":"key word","ipa":"/kiː wɜːd/","tip":"Exam technique term"}],
   "culture":{"watch":["B2 exam preparation videos"],"listen":["B2 listening practice tests"],"read":["FCE/IELTS B2 sample papers"]},
   "cultureCheck":["What exam strategies do you use?","Which grammar topic needs review?","How do you structure an essay?","What is skim vs scan?","Are you ready for B2 tasks?"],
   "speaking":["Составь план эссе B2 на выбранную тему.","Назови 5 тем для повторения перед экзаменом.","Пройди мини-тест: 5 вопросов из разных уроков курса."]},

  {"id":0,"level":"B2","title":"Phrasal Verbs 2","titleRu":"Фразовые глаголы 2","topic":"carry out, bring up, run out","description":"Продвинутые фразовые глаголы уровня B2 для академического и делового английского.","duration":"20 мин",
   "warmup":["What does 'carry out research' mean?","Have you ever run out of time?","Who brought you up?"],
   "vocab":[{"en":"carry out","ru":"проводить, выполнять"},{"en":"bring up","ru":"воспитывать, поднимать тему"},{"en":"run out","ru":"заканчиваться"},{"en":"set up","ru":"организовать"},{"en":"come across","ru":"наткнуться, встретить"},{"en":"deal with","ru":"иметь дело с"},{"en":"point out","ru":"указывать"},{"en":"work out","ru":"выяснить, проработать"},{"en":"turn out","ru":"оказаться"},{"en":"break down","ru":"ломаться, разбирать"}],
   "grammar":{"title":"Advanced Phrasal Verbs","blocks":[{"title":"Академические и деловые","desc":"Carry out research/an experiment. Set up a meeting. Deal with a problem. Point out an error.","example":"Scientists carried out a series of experiments."},{"title":"Разговорные и переносные","desc":"Run out of time/money. Come across as friendly. Turn out to be true. Break down in tears.","example":"We ran out of milk this morning."}],
   "formulas":["carry out + task/research","run out of + noun","turn out + to be / that"],
   "extraExamples":[{"label":"Formal","items":["The report points out several flaws.","They set up a new department."]},{"label":"Informal","items":["It turned out fine.","I came across an old friend."]}],
   "mistake":{"wrong":"We ran out from time.","right":"We ran out of time."}},
   "quiz":[{"sentence":"Researchers ___ a study last year.","options":["carried out","carried on"],"answer":"carried out"},{"sentence":"We have ___ of coffee.","options":["run out","run off"],"answer":"run out"},{"sentence":"She was ___ in London.","options":["brought up","brought in"],"answer":"brought up"},{"sentence":"It ___ to be more difficult than expected.","options":["turned out","turned up"],"answer":"turned out"},{"sentence":"We need to ___ this issue immediately.","options":["deal with","deal in"],"answer":"deal with"}],
   "pronunciation":[{"phrase":"carry out research","ipa":"/ˈkæri aʊt rɪˈsɜːtʃ/","tip":"Carry out — formal collocation"},{"phrase":"run out of time","ipa":"/rʌn aʊt əv taɪm/","tip":"Run out of — fixed preposition"},{"phrase":"bring up a topic","ipa":"/brɪŋ ʌp ə ˈtɒpɪk/","tip":"Bring up — two meanings"},{"phrase":"turn out well","ipa":"/tɜːn aʊt wel/","tip":"Turn out — result meaning"},{"phrase":"deal with problems","ipa":"/diːl wɪð ˈprɒbləmz/","tip":"Deal with — formal"}],
   "culture":{"watch":["Business documentaries"],"listen":["BBC Business Daily"],"read":["B2 phrasal verb advanced lists"]},
   "cultureCheck":["What phrasal verb means 'perform'?","What does run out of mean?","Find carry out in the text.","Turn out — what happened?","Deal with — how do they handle it?"],
   "speaking":["Используй 5 B2 phrasal verbs в рассказе о проекте.","Объясни разницу bring up (child) vs bring up (topic).","Составь предложения с run out, turn out, deal with."]},
]

# Add flashcards to lessons missing them
def ensure_flashcards(lesson):
    if 'flashcards' not in lesson or len(lesson.get('flashcards', [])) < 20:
        lesson['flashcards'] = fc(lesson.get('flashcards', lesson['vocab']))
    return lesson

for L in A1 + A2_part + B1_part + EXTRA:
    ensure_flashcards(L)

# Assemble: A1(8) + A2(8) + B1(8) + B2(8) = 32
A2_lessons = A2_part[:5] + EXTRA[0:3]
B1_lessons = B1_part[:5] + EXTRA[3:6]
B2_lessons = EXTRA[6:14]

CURRICULUM = []
for i, lesson in enumerate(A1 + A2_lessons + B1_lessons + B2_lessons, start=1):
    lesson = dict(lesson)
    lesson['id'] = i
    CURRICULUM.append(lesson)

assert len(CURRICULUM) == 32, f"Expected 32, got {len(CURRICULUM)}"

out = os.path.join(DIR, 'curriculum.js')
with open(out, 'w', encoding='utf-8') as f:
    f.write('const CURRICULUM = ')
    json.dump(CURRICULUM, f, ensure_ascii=False, indent=2)
    f.write(';\n')

print(f"Generated {out}: {len(CURRICULUM)} lessons")
for lvl in ('A1','A2','B1','B2'):
    n = sum(1 for l in CURRICULUM if l['level']==lvl)
    print(f"  {lvl}: {n} lessons")
