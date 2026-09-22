# Caio Anjos — Portfólio e Bunker

Site estático em HTML, CSS e JavaScript. Não há build, banco de dados ou login.

## Visualizar localmente

Com Node.js instalado, execute `node preview.cjs` na raiz e abra http://127.0.0.1:4173.
O servidor é apenas local (127.0.0.1). Encerre com Ctrl+C.
Também é possível usar o Live Server do VS Code (configurado na porta 5501).
A URL http://127.0.0.1:4173/preview/ permite verificar o site em subdiretório.

Os caminhos são relativos: funcionam na raiz e em hospedagens como GitHub Pages de projeto.
Não existe configuração de hospedagem no repositório que confirme o destino atual.
`lab/index.html` encaminha para `../bunker/` com JavaScript, meta refresh e link de fallback.

## Adicionar a primeira publicação

1. Copie `drafts/publicacao.html` para `drafts/meu-primeiro-registro.html`.
2. Escreva o conteúdo real. Troque título, resumo e metadados (description, og:title e og:description).
3. Escolha um formato: `registro`, `conto` ou `experimento`. O modelo contém exemplos comentados de capa, etiquetas, imagens, links e vídeo com legendas. Remova os exemplos que não usar.
4. Revise localmente em `/drafts/meu-primeiro-registro.html`. Não adicione o rascunho ao catálogo público. Arquivos em drafts não são privados: se enviados à hospedagem, podem ser acessados por URL. Para conteúdo privado, mantenha-o fora do diretório publicado.
5. Quando estiver pronto, copie o arquivo para `bunker/meu-primeiro-registro.html`. Como ambos estão a um nível da raiz, os caminhos relativos do modelo continuam válidos.
6. Remova a meta `robots` com `noindex, nofollow`, substitua “Rascunho · Registro” pelo formato e insira a data real em `<time datetime="AAAA-MM-DD">data por extenso</time>`.
7. Adicione um objeto ao array em `bunker/publications.js`, usando título, resumo, formato e data iguais aos do HTML:

```js
window.bunkerPublications = [
  {
    title: 'Título real do seu texto',
    summary: 'Resumo real do conteúdo.',
    format: 'registro', // registro | conto | experimento
    date: 'AAAA-MM-DD', // substituir pela data real de publicação
    status: 'published', // draft não aparece na listagem
    url: './meu-primeiro-registro.html',
    tags: [], // opcionais; incluir apenas assuntos presentes no texto
    featured: true
    // cover: '../assets/img/capa.jpg',
    // coverAlt: 'Descrição da capa'
  }
];
```

A data do exemplo é deliberadamente inválida até ser substituída. Apenas objetos publicados, com data válida não futura, formato reconhecido e URL HTML são exibidos. A lista é ordenada da publicação mais recente para a mais antiga. O destaque usa a primeira publicação marcada como featured ou a mais recente. Cada texto tem URL própria e é legível mesmo sem JavaScript.

Para retirar uma publicação da vitrine, use `status: 'draft'` ou remova o objeto. Isso não remove o HTML nem torna a URL privada. Atualize também o aviso noscript em `bunker/index.html` quando publicar o primeiro texto.

## Projetos e evidências

Os dois projetos da vitrine estão em `portfolio/portfolio.js`. O link do portfólio corresponde ao remote origin: https://github.com/caiooanjos/Portif-lio.
Os quatro antigos cartões “Em breve” estão preservados em `drafts/projects.json`, com status draft e aviso de que as descrições não foram confirmadas. Eles não são carregados pelo site.

Antes de publicar esses estudos, fornecer código ou documentação, confirmar o que foi executado e identificar explicitamente simulações e trabalhos em andamento. Capturas reais e resultados mensuráveis podem ser acrescentados quando disponíveis. Não há métricas ou casos de clientes novos nesta revisão.

## Estrutura

- `index.html`: apresentação e acesso às duas áreas.
- `assets/css/base.css` e `assets/js/base.js`: navegação, acessibilidade e temas compartilhados.
- `portfolio/`: apresentação profissional e projetos.
- `bunker/`: índice, catálogo, estilos e renderização das publicações.
- `drafts/`: modelo editorial e projetos ainda sem evidências.
- `lab/`: acesso antigo preservado por encaminhamento.

O portfólio mantém as dependências externas existentes de Tailwind e Lucide. A página inicial mantém fontes e ícones externos. O Bunker usa fontes do sistema e não depende de serviços externos para renderizar seu conteúdo.

## Verificação desta revisão

- Navegador: início, portfólio, Bunker e modelo de artigo em 1440 e 390 px, sem rolagem horizontal; revisão de capturas de tela.
- Menu móvel, Escape, retorno de foco, link para pular ao conteúdo e persistência do tema verificados.
- Encaminhamento de /lab/ testado na raiz e em /preview/ (subdiretório).
- Links internos e os dois repositórios responderam HTTP 200. LinkedIn retornou 999 (bloqueio de automação); URL existente preservada. O link mailto foi conferido, sem enviar e-mail.
- Catálogo testado com dados temporários apenas no navegador: publicação exibida em destaque e recentes; rascunho, data futura e data impossível excluídos. Nenhum conteúdo de teste foi publicado ou salvo no catálogo.
- Sem exceções JavaScript nas páginas testadas. O aviso preexistente de uso do CDN Tailwind em produção permanece; não foi introduzido build nesta etapa.
- Sintaxe JavaScript e git diff --check verificados. Nada foi enviado à hospedagem, nem houve push ou merge.
