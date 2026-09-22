/* ========================================
   PORTFOLIO.JS — Lógica unificada com as tags e projetos do novo design
======================================== */

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    renderProjects('dev');
});

// =============================================
// DADOS DOS PROJETOS
// =============================================
const portfolioProjects = [
    // DEV
    {
        id: 1,
        category: 'dev',
        title: "Lead Qualifier — Pipeline de Qualificação de Leads",
        description: "Automação Python que cruza planilhas de licenças com o CRM, verifica se os sites estão no ar, aplica scoring e classifica leads prontos para prospecção. Desenvolvido para uso real em empresa.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tags: ["Python", "Pandas", "Requests", "BeautifulSoup"],
        actionText: "Ver no GitHub",
        link: "https://github.com/caiooanjos/lead-qualifier",
        icon: "github"
    },
    {
        id: 2,
        category: 'dev',
        title: "Portfólio DEV.SEC",
        description: "Este próprio portfólio — desenvolvido do zero com HTML, CSS e JavaScript puro, sistema de temas dark/light, navegação responsiva e arquitetura modular por seções.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
        actionText: "Ver código fonte",
        link: "https://github.com/caiooanjos",
        icon: "github"
    },

    // SEGURANÇA
    {
        id: 3,
        category: 'sec',
        title: "Auditoria OWASP Top 10",
        description: "Relatório completo de Pentest realizado em uma aplicação financeira simulada. Identificação e correção de XSS e SQLi.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
        tags: ["Burp Suite", "Nmap", "Metasploit"],
        actionText: "Em breve",
        link: "#",
        icon: "clock"
    },
    {
        id: 4,
        category: 'sec',
        title: "Bug Bounty: E-commerce",
        description: "Descoberta de vulnerabilidade de IDOR (Insecure Direct Object Reference) em um e-commerce em ambiente de testes.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
        tags: ["Análise de Código", "Fuzzing"],
        actionText: "Em breve",
        link: "#",
        icon: "clock"
    },

    // OSINT
    {
        id: 5,
        category: 'osint',
        title: "Caso 'Phantom': Rastreio de Phishing",
        description: "Investigação digital utilizando fontes abertas para mapear a infraestrutura e a origem de uma campanha de phishing corporativo.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        tags: ["Maltego", "Shodan", "Análise de Metadados"],
        actionText: "Em breve",
        link: "#",
        icon: "clock"
    },
    {
        id: 6,
        category: 'osint',
        title: "Auditoria de Vazamento de Dados",
        description: "Mapeamento da exposição digital de uma empresa fictícia na Deep/Dark Web e repositórios públicos, com relatório de mitigação.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Sherlock", "theHarvester", "Dorks"],
        actionText: "Em breve",
        link: "#",
        icon: "clock"
    }
];

// =============================================
// TABS — corrigido para manter estilo azul em todas as abas
// =============================================
function setActiveTab(category) {
    renderProjects(category);

    document.querySelectorAll('.tab-btn').forEach(btn => {
        // Remove todas as classes de estado primeiro
        btn.classList.remove(
            'bg-accent', 'text-white', 'border-accent',
            'bg-card', 'text-sec', 'border-borderMod'
        );

        if (btn.getAttribute('data-tab') === category) {
            // Aba ativa — azul igual ao padrão do DEV
            btn.classList.add('bg-accent', 'text-white', 'border-accent');
        } else {
            // Abas inativas — estilo neutro legível
            btn.classList.add('bg-card', 'text-sec', 'border-borderMod');
        }
    });
}

// =============================================
// RENDER
// =============================================
function renderProjects(category) {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = '';

    const filtered = portfolioProjects.filter(p => p.category === category);

    filtered.forEach(project => {
        const categoryLabel = project.category === 'dev'
            ? 'Desenvolvimento'
            : project.category === 'sec'
                ? 'Segurança'
                : 'Investigação';

        const tagsHtml = project.tags.map(tag =>
            `<span class="px-3 py-1 bg-slate-950 border border-slate-800 text-slate-300 text-xs font-medium rounded-full">${tag}</span>`
        ).join('');

        const card = `
            <div class="bg-card border border-slate-800 rounded-2xl overflow-hidden group hover:border-accent/30 transition-all flex flex-col">
                <div class="h-64 overflow-hidden relative">
                    <div class="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all z-10"></div>
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div class="absolute top-4 left-4 z-20 bg-slate-950/80 backdrop-blur-sm border border-slate-700 px-3 py-1 rounded-md text-xs font-bold text-accent uppercase tracking-wider">
                        ${categoryLabel}
                    </div>
                </div>

                <div class="p-8 flex flex-col flex-grow">
                    <h3 class="text-2xl font-bold mb-3 text-main group-hover:text-accent transition-colors">
                        ${project.title}
                    </h3>
                    <p class="text-sec mb-6 leading-relaxed flex-grow">
                        ${project.description}
                    </p>

                    <div class="flex flex-wrap gap-2 mb-8">
                        ${tagsHtml}
                    </div>

                    <a href="${project.link}" class="inline-flex items-center justify-center gap-2 w-full py-3 bg-slate-800/50 hover:bg-accentLight text-accent border border-accent/20 hover:border-accent/50 rounded-lg transition-all font-medium">
                        <i data-lucide="${project.icon}" class="w-4 h-4"></i>
                        ${project.actionText}
                    </a>
                </div>
            </div>`;

        container.innerHTML += card;
    });

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}