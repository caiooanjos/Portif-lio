window.getPublishedPosts = () => {
    const formats = { registro: 'Registro', conto: 'Conto', experimento: 'Experimento' };
    const today = new Date();
    const posts = (window.bunkerPublications || []).filter(p => {
        const date = new Date(p.date + 'T00:00:00');
        const validDate = /^\d{4}-\d{2}-\d{2}$/.test(p.date) && !isNaN(date)
            && date.getFullYear() === Number(p.date.slice(0, 4))
            && date.getMonth() + 1 === Number(p.date.slice(5, 7))
            && date.getDate() === Number(p.date.slice(8, 10));
        return p.status === 'published' && formats[p.format] && validDate && date <= today && /^\.\/[a-z0-9][a-z0-9-]*\.html$/.test(p.url) && p.title && p.summary;
    }).sort((a,b) => b.date.localeCompare(a.date));

return posts;
};
