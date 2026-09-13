const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const themeToggle = document.querySelector('.theme-toggle');
const heroPhoto = document.querySelector('.hero-photo');

const setTheme = (isLight) => {
  document.body.classList.toggle('light-theme', isLight);
  themeToggle?.setAttribute('aria-pressed', String(isLight));
  themeToggle?.setAttribute('aria-label', isLight ? 'Включить тёмную тему' : 'Включить светлую тему');
  const label = themeToggle?.querySelector('.theme-toggle-label');
  if (label) label.textContent = isLight ? 'Тёмная' : 'Светлая';
  if (heroPhoto) {
    heroPhoto.src = isLight ? heroPhoto.dataset.lightSrc : heroPhoto.dataset.darkSrc;
    heroPhoto.alt = isLight ? 'Максим Грибинюк у автомобиля в выставочном зале' : 'Максим Грибинюк у деревянной часовни зимой';
  }
};

const savedTheme = localStorage.getItem('maxim-theme');
setTheme(savedTheme === 'light');

themeToggle?.addEventListener('click', () => {
  const isLight = !document.body.classList.contains('light-theme');
  setTheme(isLight);
  localStorage.setItem('maxim-theme', isLight ? 'light' : 'dark');
});

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Открыть меню');
}));
