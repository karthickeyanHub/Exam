let selectedExam = null;
let selectedTotal = 0;
let selectedMode = 'all';

async function loadExams() {
  const grid = document.getElementById('examGrid');
  let data = null;

  try {
    const res = await fetch('questions.json');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    data = await res.json();
  } catch (err) {
    data = window.FALLBACK_DATA || null;
  }

  if (!data || !Object.keys(data).length) {
    const errEl = document.getElementById('loadError');
    errEl.classList.remove('hidden');
    errEl.textContent = 'No exams found. Please check questions.json.';
    return;
  }

  const names = Object.keys(data);
  grid.innerHTML = names
    .map(function (name) {
      const count = data[name].length;
      return (
        '<button class="exam-card" type="button" data-exam="' +
        esc(name) +
        '" data-count="' +
        count +
        '">' +
        '<h2>' +
        esc(name) +
        '</h2>' +
        '<span>' +
        count +
        ' Question' +
        (count > 1 ? 's' : '') +
        '</span>' +
        '<small>Click to start &rarr;</small>' +
        '</button>'
      );
    })
    .join('');

  grid.querySelectorAll('.exam-card').forEach(function (card) {
    card.addEventListener('click', function () {
      openModal(card.getAttribute('data-exam'), Number(card.getAttribute('data-count')));
    });
  });
}

function openModal(name, count) {
  selectedExam = name;
  selectedTotal = count;
  $('modalExamName').textContent = name;
  $('modalExamCount').textContent = count + ' Question' + (count > 1 ? 's' : '') + ' available';
  $('rangeFrom').max = count;
  $('rangeTo').max = count;
  $('rangeFrom').value = '';
  $('rangeTo').value = '';
  hideError();
  setMode('all');
  $('examModal').classList.remove('hidden');
}

function closeModal() {
  $('examModal').classList.add('hidden');
}

function setMode(mode) {
  selectedMode = mode;
  $('modeAllBtn').classList.toggle('active', mode === 'all');
  $('modeRangeBtn').classList.toggle('active', mode === 'range');
  $('rangeInputs').classList.toggle('hidden', mode !== 'range');
}

function showError(msg) {
  const el = $('modalError');
  el.textContent = msg;
  el.classList.remove('hidden');
}

function hideError() {
  $('modalError').classList.add('hidden');
}

function startExam() {
  hideError();

  if (selectedMode === 'all') {
    location.href = 'exam.html?exam=' + encodeURIComponent(selectedExam);
    return;
  }

  const from = parseInt($('rangeFrom').value, 10);
  const to = parseInt($('rangeTo').value, 10);

  if (!from || !to) {
    showError('Please enter both a start and an end question number.');
    return;
  }
  if (from < 1 || to > selectedTotal) {
    showError('Range must be between 1 and ' + selectedTotal + '.');
    return;
  }
  if (from > to) {
    showError('Start number cannot be greater than the end number.');
    return;
  }

  location.href =
    'exam.html?exam=' +
    encodeURIComponent(selectedExam) +
    '&from=' +
    from +
    '&to=' +
    to;
}

function $(id) {
  return document.getElementById(id);
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

document.addEventListener('DOMContentLoaded', function () {
  loadExams();
  $('modeAllBtn').addEventListener('click', function () {
    setMode('all');
  });
  $('modeRangeBtn').addEventListener('click', function () {
    setMode('range');
  });
  $('modalCancelBtn').addEventListener('click', closeModal);
  $('modalStartBtn').addEventListener('click', startExam);
  $('examModal').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !$('examModal').classList.contains('hidden')) {
      closeModal();
    }
  });
});
