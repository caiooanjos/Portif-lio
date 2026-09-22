(() => {
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
    if (!posts.length) return;
    function card(post) {
        const article = document.createElement('article');
        article.className = 'publication-card';
        const meta = document.createElement('p');
        meta.className = 'eyebrow';
        meta.append(formats[post.format] + ' · ');
        const date = document.createElement('time');
        date.dateTime = post.date;
        date.textContent = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(post.date + 'T00:00:00'));
        meta.append(date);
        const h = document.createElement('h3');
        const link = document.createElement('a'); link.href = post.url; link.textContent = post.title; h.append(link);
        const summary = document.createElement('p'); summary.textContent = post.summary;
        if (post.cover) { const img = document.createElement('img'); img.src = post.cover; img.alt = post.coverAlt || ''; img.loading = 'lazy'; article.append(img); }
        article.append(meta, h, summary);
        if (post.tags?.length) { const tags = document.createElement('ul'); tags.className = 'tags'; post.tags.forEach(t => { const li = document.createElement('li'); li.textContent = t; tags.append(li); }); article.append(tags); }
        return article;
    }
    const featured = posts.find(p => p.featured) || posts[0];
    const slot = document.getElementById('featured');
    const heading = document.createElement('h2'); heading.textContent = 'Em destaque';
    slot.append(heading, card(featured)); slot.hidden = false;
    document.getElementById('publications').replaceChildren(...posts.map(card));
})();
