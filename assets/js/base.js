document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggle = document.getElementById('theme-toggle');
    let saved;
    try { saved = localStorage.getItem('theme'); } catch (_) { /* Storage can be unavailable. */ }
    const applyTheme = theme => {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(theme);
        toggle?.setAttribute('aria-label', theme === 'dark-mode' ? 'Ativar tema claro' : 'Ativar tema escuro');
    };
    applyTheme(['light-mode', 'dark-mode'].includes(saved) ? saved : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : 'light-mode'));
    toggle?.addEventListener('click', () => {
        const theme = body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
        applyTheme(theme);
        try { localStorage.setItem('theme', theme); } catch (_) { /* Theme still works for this page. */ }
    });
    const button = document.querySelector('.hamburger');
    const nav = document.getElementById('site-nav');
    const overlay = document.querySelector('.nav-overlay');
    const mobile = matchMedia('(max-width: 768px)');
    if (!button || !nav) return;
    function setOpen(open, restore = false) {
        button.classList.toggle('active', open);
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        nav.classList.toggle('open', open);
        nav.inert = mobile.matches && !open;
        overlay?.classList.toggle('show', open);
        if (restore) button.focus();
    }
    setOpen(false);
    button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
    overlay?.addEventListener('click', () => setOpen(false, true));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', event => {
        if (button.getAttribute('aria-expanded') !== 'true') return;
        if (event.key === 'Escape') setOpen(false, true);
        if (event.key === 'Tab') {
            const items = [button, ...nav.querySelectorAll('a, button')];
            const first = items[0], last = items.at(-1);
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        }
    });
    mobile.addEventListener('change', () => setOpen(false));
});
