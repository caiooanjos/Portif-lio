/* ========================================
   BASE.JS — Theme Toggle + Mobile Menu
   Compartilhado entre todas as páginas
======================================== */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Restaurar tema salvo
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(savedTheme);
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        }
    }

    // Toggle dark/light
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('light-mode')) {
                body.classList.replace('light-mode', 'dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                body.classList.replace('dark-mode', 'light-mode');
                localStorage.setItem('theme', 'light-mode');
            }
        });
    }

    // Hamburger menu (mobile)
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.nav-overlay');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('open');
            if (overlay) overlay.classList.toggle('show');
        });

        if (overlay) {
            overlay.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('open');
                overlay.classList.remove('show');
            });
        }

        // Fechar menu ao clicar em link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('open');
                if (overlay) overlay.classList.remove('show');
            });
        });
    }
});
