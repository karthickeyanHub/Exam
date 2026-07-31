const $ = function (id) {
  return document.getElementById(id);
};

let examName = '';
let questions = [];
let current = 0;
let answers = [];
let revealed = [];
let submitted = false;
let startTime = 0;
let elapsedSeconds = 0;
let timerInterval = null;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatTime(totalSec) {
  const m = Math.floor(totalSec / 60).toString().padStart(2, '0');
  const s = (totalSec % 60).toString().padStart(2, '0');
  return m + ':' + s;
}

function setsEqual(a, b) {
  const listB = Array.isArray(b) ? b : Array.from(b);
  if (a.size !== listB.length) return false;
  for (const v of a) {
    if (!listB.includes(v)) return false;
  }
  return true;
}

function setFeedback(msg, type) {
  const el = $('feedback');
  el.textContent = msg;
  el.className = 'feedback' + (type ? ' ' + type : '');
}

function updateTimer() {
  $('timer').textContent = formatTime(Math.floor((Date.now() - startTime) / 1000));
}

function processExam(raw) {
  return raw.map(function (q) {
    const correctTexts = [];
    const answerStr = String(q.Answer || '').toUpperCase();
    for (const ch of answerStr) {
      const idx = ch.charCodeAt(0) - 65;
      if (q.Options && q.Options[idx]) correctTexts.push(q.Options[idx]);
    }
    const options = q.Options.map(function (text, i) {
      return { text: text, origIndex: i };
    });
    shuffle(options);
    return {
      question: q.question,
      options: options,
      correctTexts: correctTexts,
      required: correctTexts.length
    };
  });
}

async function init() {
  const params = new URLSearchParams(location.search);
  examName = params.get('exam') || '';
  $('examTitle').textContent = examName || 'Exam';

  try {
    const res = await fetch('questions.json');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    startExam(data);
  } catch (err) {
    if (window.FALLBACK_DATA && window.FALLBACK_DATA[examName]) {
      startExam(window.FALLBACK_DATA);
    } else {
      $('questionArea').innerHTML =
        '<p class="feedback">Could not load questions. Please run from a local server (python3 -m http.server).</p>';
    }
  }
}

function startExam(data) {
  const raw = data[examName];
  if (!raw || !raw.length) {
    $('questionArea').innerHTML = '<p class="feedback">Exam not found.</p>';
    return;
  }

  shuffle(raw);
  questions = processExam(raw);
  answers = questions.map(function () {
    return new Set();
  });
  revealed = questions.map(function () {
    return false;
  });

  startTime = Date.now();
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);

  $('prevBtn').addEventListener('click', function () {
    go(-1);
  });
  $('nextBtn').addEventListener('click', function () {
    go(1);
  });
  $('revealBtn').addEventListener('click', revealAnswer);
  $('submitBtn').addEventListener('click', submitExam);
  $('scoreBackBtn').addEventListener('click', function () {
    $('questionArea').classList.add('hidden');
    $('scoreArea').classList.remove('hidden');
  });

  renderQuestion();
}

function renderQuestion() {
  if (!questions.length) return;
  const q = questions[current];
  const num = current + 1;
  const isCheckbox = q.required > 1;
  const inReview = submitted || revealed[current];

  $('questionText').textContent = num + '. ' + q.question;
  $('progressText').textContent = 'Question ' + num + ' of ' + questions.length;
  $('progressFill').style.width = Math.round((num / questions.length) * 100) + '%';

  $('optionsList').innerHTML = q.options
    .map(function (opt, i) {
      const selected = answers[current].has(opt.text);
      const isCorrect = q.correctTexts.includes(opt.text);
      let cls = 'option';
      if (inReview) {
        if (isCorrect) cls += ' correct';
        else if (selected) cls += ' wrong';
      } else if (selected) {
        cls += ' selected';
      }
      const checkedAttr = selected ? ' checked' : '';
      const disabledAttr = inReview ? ' disabled' : '';
      const nameAttr = isCheckbox ? 'opt-' + current : 'opt-' + current + '-r';
      return (
        '<label class="' +
        cls +
        '" data-idx="' +
        i +
        '">' +
        '<input type="' +
        (isCheckbox ? 'checkbox' : 'radio') +
        '" name="' +
        nameAttr +
        '" value="' +
        esc(opt.text) +
        '" data-idx="' +
        i +
        '"' +
        checkedAttr +
        disabledAttr +
        '>' +
        '<span class="opt-letter">' +
        String.fromCharCode(65 + i) +
        '</span>' +
        '<span class="opt-text">' +
        esc(opt.text) +
        '</span>' +
        '</label>'
      );
    })
    .join('');

  if (!inReview) {
    q.options.forEach(function (opt, i) {
      const input = document.querySelector('#optionsList input[data-idx="' + i + '"]');
      if (input) {
        input.addEventListener('change', function () {
          onOptionChange(i, isCheckbox);
        });
      }
    });
  }

  $('prevBtn').disabled = current === 0;
  $('nextBtn').disabled = current === questions.length - 1;
  $('nextBtn').textContent = current === questions.length - 1 ? 'Last Question' : 'Next';
  $('revealBtn').classList.toggle('hidden', submitted);
  $('revealBtn').disabled = revealed[current];
  $('revealBtn').textContent = revealed[current] ? 'Answer Revealed' : 'Reveal Answer';
  $('scoreBackBtn').classList.toggle('hidden', !submitted);
  $('reviewBanner').classList.toggle('hidden', !submitted);
  setFeedback('', '');
}

function onOptionChange(i, isCheckbox) {
  const q = questions[current];
  const input = document.querySelector('#optionsList input[data-idx="' + i + '"]');
  const selected = answers[current];
  let msg = '';

  if (isCheckbox) {
    if (input.checked) {
      if (selected.size >= q.required) {
        msg = 'You can select up to ' + q.required + ' options.';
      } else {
        selected.add(q.options[i].text);
      }
    } else {
      selected.delete(q.options[i].text);
    }
  } else {
    selected.clear();
    selected.add(q.options[i].text);
  }

  renderQuestion();
  if (msg) setFeedback(msg, 'error');
}

function go(dir) {
  if (!submitted) {
    const q = questions[current];
    const required = q.required;
    if (!revealed[current] && answers[current].size !== required) {
      setFeedback(
        'Please select exactly ' +
          required +
          ' option' +
          (required > 1 ? 's' : '') +
          ' before moving.',
        'error'
      );
      return;
    }
  }
  current += dir;
  renderQuestion();
}

function revealAnswer() {
  revealed[current] = true;
  renderQuestion();
  setFeedback('Correct answer is highlighted in green.', 'success');
}

function submitExam() {
  if (submitted) return;
  const q = questions[current];
  if (!revealed[current] && answers[current].size !== q.required) {
    setFeedback(
      'Please select exactly ' +
        q.required +
        ' option' +
        (q.required > 1 ? 's' : '') +
        ' on question ' +
        (current + 1) +
        ' before submitting.',
      'error'
    );
    return;
  }

  const confirmed = confirm('Are you sure you want to submit the exam?');
  if (!confirmed) return;

  submitted = true;
  clearInterval(timerInterval);
  elapsedSeconds = Math.round((Date.now() - startTime) / 1000);
  $('timer').textContent = formatTime(elapsedSeconds);

  const results = questions.map(function (qq, i) {
    return { index: i, right: setsEqual(answers[i], qq.correctTexts) };
  });
  const rightCount = results.filter(function (r) {
    return r.right;
  }).length;
  const wrongList = results.filter(function (r) {
    return !r.right;
  });

  $('questionArea').classList.add('hidden');
  $('scoreArea').classList.remove('hidden');
  renderScore(rightCount, wrongList);
}

function renderScore(rightCount, wrongList) {
  const total = questions.length;
  const percent = Math.round((rightCount / total) * 100);

  $('scoreArea').innerHTML =
    '<div class="score-card">' +
    '<h2>Exam Complete</h2>' +
    '<p class="score-exam">' +
    esc(examName) +
    '</p>' +
    '<div class="score-grid">' +
    '<div class="stat correct-stat"><span>' +
    rightCount +
    '</span><label>Correct</label></div>' +
    '<div class="stat wrong-stat"><span>' +
    wrongList.length +
    '</span><label>Wrong</label></div>' +
    '<div class="stat total-stat"><span>' +
    total +
    '</span><label>Total</label></div>' +
    '<div class="stat time-stat"><span>' +
    formatTime(elapsedSeconds) +
    '</span><label>Time Taken</label></div>' +
    '</div>' +
    '<div class="score-percent">Score: ' +
    percent +
    '%</div>' +
    (wrongList.length
      ? '<div class="wrong-section">' +
        '<h3>Review Wrong Questions</h3>' +
        '<p>Click a question number to see the correct answer.</p>' +
        '<div class="wrong-list">' +
        wrongList
          .map(function (r) {
            return (
              '<button class="wrong-btn" data-q="' +
              r.index +
              '">Question ' +
              (r.index + 1) +
              '</button>'
            );
          })
          .join('') +
        '</div>' +
        '</div>'
      : '<div class="perfect">Perfect! All answers are correct.</div>') +
    '<button id="backHomeBtn" class="btn btn-primary" type="button">Back to Exams</button>' +
    '</div>';

  document.querySelectorAll('.wrong-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      reviewQuestion(Number(btn.getAttribute('data-q')));
    });
  });
  $('backHomeBtn').addEventListener('click', function () {
    location.href = 'index.html';
  });
}

function reviewQuestion(idx) {
  current = idx;
  $('scoreArea').classList.add('hidden');
  $('questionArea').classList.remove('hidden');
  renderQuestion();
  setFeedback(
    'You answered this one incorrectly. The correct answer(s) are highlighted in green.',
    'error'
  );
}

document.addEventListener('DOMContentLoaded', init);
