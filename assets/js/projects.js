window.portfolioProjects = [
    {
        id: 'lead-qualifier',
        status: 'Código disponível',
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
        id: 'portfolio-caio',
        status: 'Em evolução · Site disponível',
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
// Render variants from the same records; no fabricated screenshots or metrics.
window.projectCard = (project, variant = 'full') => {
    const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const featured = variant === 'featured';
    const compact = variant === 'compact';
    const diagram = project.diagram.split(' → ').map(escape);
    const visual = `<div class="project-visual" aria-hidden="true"><p>${project.id === 'lead-qualifier' ? 'Fluxo de qualificação' : 'Estrutura do site'}</p><div class="project-flow">${diagram.map(t => `<span>${t}</span>`).join('<b>→</b>')}</div></div>`;
    const tags = `<ul class="project-tags" aria-label="Tecnologias">${project.technologies.map(t=>`<li>${escape(t)}</li>`).join('')}</ul>`;
    const heading = featured ? 'h2' : 'h3';
    const target = compact ? `portfolio/#${project.id}` : featured ? `#${project.id}` : project.link;
    const label = compact || featured ? `Ver detalhes do ${project.title}` : project.label;
    return `<article class="project-card" ${!compact && !featured ? `id="${project.id}"` : ''}>
        ${variant === 'full' ? '' : visual}
        <div class="project-content"><p class="eyebrow">${featured ? 'Projeto em destaque' : escape(project.status)}</p>
        <${heading}>${escape(project.title)}</${heading}><p>${escape(project.objective)}</p>
        ${!compact && !featured ? `<p>${escape(project.work)}</p>` : ''}
        ${featured ? '' : tags}
        ${!compact && !featured ? `<details class="project-details"><summary>Resultado e evidências</summary><p>${escape(project.evidence)}</p></details>` : ''}
        <a class="${featured ? 'btn-secondary' : 'inline-link'}" href="${escape(target)}">${escape(label)} ${compact || featured ? '→' : '↗'}</a></div></article>`;
};
