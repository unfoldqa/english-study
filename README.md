# English Course A1 → B2

Полный курс английского языка в формате HTML: 32 урока, от начального уровня A1 до upper-intermediate B2.

## Онлайн

После публикации на GitHub Pages курс доступен по адресу:

**https://poles5.github.io/english-study/**

## Локально

```bash
open index.html
```

## Структура

| Файл | Описание |
|------|----------|
| `index.html` | Главная страница курса с прогрессом |
| `lesson.html?id=N` | Страница урока (N = 1…32) |
| `assets/course.css` | Общие стили |
| `assets/course.js` | Логика уроков и прогресса |
| `assets/curriculum.js` | Контент всех 32 уроков |

## Программа

- **A1** (уроки 1–8): приветствия, to be, вопросы, артикли, Present Simple, there is/are, can, повторение
- **A2** (уроки 9–16): времена, Present Perfect, Future, сравнения, исчисляемые/неисчисляемые, предлоги
- **B1** (уроки 17–24): модальные глаголы, условные предложения, passive, reported speech, relative clauses, phrasal verbs
- **B2** (уроки 25–32): словообразование, коллокации, регистр, эссе, дискуссии, инверсия, экзамен B2

## Каждый урок включает

1. Разогрев (3 вопроса)
2. Лексика (10 слов с карточками)
3. Грамматика с примерами
4. Тест (5 вопросов)
5. Произношение (5 фраз с IPA)
6. Карточки для повторения (20 слов)
7. Культурные материалы
8. Устная практика
9. Кнопка «Завершить урок» (прогресс сохраняется в браузере)

## Публикация на GitHub Pages

Репозиторий уже подготовлен локально. Осталось создать репозиторий на GitHub и отправить код.

### 1. Создай репозиторий на GitHub

1. Открой [github.com/new](https://github.com/new)
2. Имя репозитория: **`english-study`**
3. Тип: **Public**
4. Не добавляй README, .gitignore и license (всё уже есть локально)
5. Нажми **Create repository**

### 2. Отправь код

В терминале:

```bash
cd /Users/evgeny/Documents/English/english-study
git push -u origin main
```

При запросе авторизации войди в GitHub (или используй Personal Access Token вместо пароля).

### 3. Включи GitHub Pages

1. Репозиторий → **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main` → папка **`/ (root)`**
4. **Save**

Через 1–2 минуты сайт будет доступен:

**https://poles5.github.io/english-study/**

Как у [salary](https://poles5.github.io/salary/) — тот же формат: `username.github.io/имя-репозитория/`.

## Обновление контента

```bash
python3 assets/generate_course.py
```
