let isLightMode = localStorage.getItem('theme') === 'light';

function applyTheme() {
    const themeName = document.getElementById('theme-name');
    const toggleButton = document.querySelector('.toggle-button');

    document.documentElement.classList.toggle('light-mode', isLightMode);
}

function switchTheme() {
    document.documentElement.classList.add('animate-theme');

    isLightMode = !isLightMode;
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

    applyTheme();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTheme);
} else {
    applyTheme();
}