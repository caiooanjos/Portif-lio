const portfolioProjects = [
    {
        title: 'Lead Qualifier',
        objective: 'Organizar a qualificação de leads a partir de planilhas e dados do CRM.',
        work: 'Automação que cruza planilhas de licenças com o CRM, verifica sites e aplica scoring para classificar leads.',
        technologies: ['Python', 'Pandas', 'Requests', 'BeautifulSoup'],
        evidence: 'Código disponível para consulta. Não há métricas de impacto publicadas nesta vitrine.',
        link: 'https://github.com/caiooanjos/lead-qualifier',
        label: 'Consultar código do Lead Qualifier',
        diagram: 'Planilhas → Verificação → Qualificação'
    },
    {
        title: 'Portfólio de Caio Anjos',
        objective: 'Apresentar projetos profissionais e manter um espaço autoral para publicações.',
        work: 'Site estático com navegação responsiva, modo claro e escuro e páginas de conteúdo no Bunker.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
        evidence: 'Este site é a demonstração: navegação, temas e estrutura de publicação podem ser explorados aqui.',
        link: 'https://github.com/caiooanjos/Portif-lio',
        label: 'Consultar código do portfólio',
        diagram: 'Início → Portfólio + Bunker'
    }
];
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projects-container');
    if (container) container.innerHTML = portfolioProjects.map(project => `
        <article class="project-card">
            <div class="project-diagram" aria-hidden="true">${project.diagram}</div>
            <div class="project-content"><p class="eyebrow">Desenvolvimento · Código disponível</p><h3>${project.title}</h3>
            <dl><dt>Objetivo</dt><dd>${project.objective}</dd><dt>O que desenvolvi</dt><dd>${project.work}</dd><dt>Resultado verificável</dt><dd>${project.evidence}</dd></dl>
            <ul class="project-tags" aria-label="Tecnologias">${project.technologies.map(t => `<li>${t}</li>`).join('')}</ul>
            <a class="inline-link" href="${project.link}">${project.label} ↗</a></div>
        </article>`).join('');
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
