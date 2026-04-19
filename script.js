const root = document.documentElement;
const toggle = document.querySelector('[data-theme-toggle]');

const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');

if (toggle) {
  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const mapRegions = document.querySelectorAll('.country');
mapRegions.forEach((region) => {
  region.setAttribute('tabindex', '0');
  region.setAttribute('role', 'img');
  region.setAttribute('aria-label', region.dataset.country || 'Highlighted country');
});
