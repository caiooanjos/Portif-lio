(() => {
    const formats = { registro: 'Registro', conto: 'Conto', experimento: 'Experimento' };
    const posts = window.getPublishedPosts();
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
