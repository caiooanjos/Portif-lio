document.addEventListener('DOMContentLoaded', () => {
    const projects = window.portfolioProjects;
    document.getElementById('featured-project').innerHTML = window.projectCard(projects[0], 'featured');
    document.getElementById('projects-container').innerHTML = projects.map(p => window.projectCard(p)).join('');
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
