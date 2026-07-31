# Exam App (HTML + JSON + JS + CSS)

A lightweight multiple-exam app built with only HTML, CSS, JS and a JSON file.
No frameworks, no build step, no backend.

## Features

- Home page lists all exams (read from `questions.json`).
- Clicking an exam opens that exam with its own timer.
- Each question shows **one question per page** with Previous / Next navigation.
- **Radio vs Checkbox** is decided automatically:
  - Answer with 1 option (e.g. `"A"`) → radio buttons.
  - Answer with multiple options (e.g. `"AB"`, `"ABC"`) → checkboxes with a cap on how many you can select.
  - Validation: you must select exactly the required number of options before moving on / submitting.
- **Reveal Answer** button highlights the correct option(s) in green.
- **Submit Exam** on every page asks `Are you sure you want to submit the exam?` before ending.
- Score screen shows:
  - Correct vs Wrong answers
  - Total time taken
  - A clickable list of wrong question numbers so you can jump back and see the correct answer (green) and your wrong pick (red).
- Questions **and** options are shuffled every time, but the answer is matched by option text so scoring stays correct.
- Each exam has its own running timer (mm:ss).

## File structure

```
exam-app/
├── index.html        # Home page (exam list)
├── exam.html         # Exam page
├── style.css         # All styling
├── index.js          # Home page logic
├── app.js            # Exam logic (timer, shuffle, scoring, review)
├── questions.json    # Exam data
└── fallback-data.js  # Same data, used if questions.json cannot be fetched
```

## How to run

The app fetches `questions.json`, so run it over a local server:

```bash
cd exam-app
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

(If you double-click `index.html` instead, most browsers block local fetch;
`fallback-data.js` is loaded automatically in that case so the app still works.)

## JSON format

```json
{
  "App Builder": [
    { "question": "question1", "Answer": "A", "Options": ["A", "B", "C", "D"] },
    { "question": "question2", "Answer": "AB", "Options": ["A", "B", "C", "D"] }
  ],
  "Admin": [
    { "question": "question1", "Answer": "D", "Options": ["A", "B", "C", "D"] },
    { "question": "question2", "Answer": "ABC", "Options": ["A", "B", "C", "D"] }
  ]
}
```

- `Answer` letters map to `Options` by position: `A` → Options[0], `B` → Options[1], etc.
- To add an exam, add a new key and an array of questions. That's it.
