document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home-projects').innerHTML = window.portfolioProjects.slice(0, 2).map(p => window.projectCard(p, 'compact')).join('');
    const posts = window.getPublishedPosts();
    const post = posts.find(p => p.featured) || posts[0];
    if (!post) return;
    const slot = document.getElementById('home-publication');
    const label = document.createElement('p'); label.className = 'eyebrow'; label.textContent = 'Do Bunker';
    const h3 = document.createElement('h3');
    const link = document.createElement('a'); link.className = 'inline-link'; link.href = 'bunker/' + post.url.slice(2); link.textContent = post.title; h3.append(link);
    const summary = document.createElement('p'); summary.textContent = post.summary;
    slot.append(label, h3, summary); slot.hidden = false;
});
