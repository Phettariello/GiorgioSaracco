const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);

  const ids = ['journey', 'early', 'education', 'beyond', 'impact'];
  let cur = '';

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 220) cur = id;
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
});

function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => document.getElementById('nav-links').classList.remove('open'))
);

function togTl(btn) {
  const col = btn.closest('.tl-content-col');
  const bullets = col.querySelector('.tl-bullets');
  const isOpen = bullets.classList.contains('open');
  bullets.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
}

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('in');
  });
}, {
  threshold: 0.07,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.rv, .rv-l, .rv-r').forEach(el => io.observe(el));

setTimeout(() => {
  document.querySelectorAll('.hero .rv').forEach(el => el.classList.add('in'));
}, 80);
