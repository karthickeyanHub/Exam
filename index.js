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
        '<a class="exam-card" href="exam.html?exam=' +
        encodeURIComponent(name) +
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
        '</a>'
      );
    })
    .join('');
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

document.addEventListener('DOMContentLoaded', loadExams);
