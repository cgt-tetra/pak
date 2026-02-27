// ─── REVEAL ON SCROLL ───
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ─── NAV ACTIVE ───
window.addEventListener('scroll', () => {
  let cur = '';
  document.querySelectorAll('#hero,#enlaces,#actas,#comics').forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) cur = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
});

// ─── MODAL ───
function openModal(src, isHtml = false) {
  const overlay = document.getElementById('modal-overlay');
  const img = document.getElementById('modal-img');
  const htmlC = document.getElementById('modal-html-container');
  if (isHtml) {
    img.style.display = 'none';
    htmlC.style.display = 'block';
    htmlC.innerHTML = `<iframe src="${src}" style="width:90vw;height:85vh;border:none;"></iframe>`;
  } else {
    img.style.display = 'block';
    htmlC.style.display = 'none';
    img.src = src;
  }
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.getElementById('modal-img').src = '';
  document.getElementById('modal-html-container').innerHTML = '';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });

// ─── FORMAT FILENAME ───
function formatFileName(name) {
  let clean = name.replace(/\.[^/.]+$/, '');
  const dateMatch = clean.match(/^(\d{4})-(\d{2})-(\d{2})[-_\s]?(.*)/);
  if (dateMatch) {
    const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    const date = `${parseInt(dateMatch[3])} ${months[parseInt(dateMatch[2])-1]} ${dateMatch[1]}`;
    const title = dateMatch[4].replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return { date, title: title || 'Documento', dateSort: dateMatch[1]+dateMatch[2]+dateMatch[3] };
  }
  return { date: '', title: clean.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), dateSort: '0' };
}
