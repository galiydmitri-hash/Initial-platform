
const themesItems = document.querySelectorAll('body, .container, p, br');
const btnTheme = document.querySelector('.theme');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

const currentTheme = localStorage.getItem('theme') || 'light';

function updateThemeIcon(isDark) {
    sun.classList.toggle('is-disable', isDark);
    moon.classList.toggle('is-active', isDark);
}

function applyTheme(isDark) {
    themesItems.forEach(el => {
        el.classList.toggle('is-dark', isDark);
    });

    updateThemeIcon(isDark);
}

applyTheme(currentTheme === 'dark');

export default function theme() {
    btnTheme.addEventListener('click', () => {
        const isDarkNow = !document.body.classList.contains('is-dark');

        applyTheme(isDarkNow);

        localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
    });
}
