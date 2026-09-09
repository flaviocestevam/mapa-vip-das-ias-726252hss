/**
 * ============================================================
 *  BASE CENTRAL DE FERRAMENTAS E LINKS — Mapa VIP das IAs
 * ============================================================
 *
 * Todos os links de marketplace da área VIP saem daqui.
 * Nenhuma URL deve ser escrita manualmente nos componentes.
 *
 * COMO TROCAR PARA LINKS DE AFILIADO NO FUTURO:
 *  1. Preencha `MARKETPLACE.affiliate` (ex.: { param: "ref", value: "SEUID" })
 *     -> todos os botões da página passam a carregar o parâmetro.
 *  2. Ou defina `affiliateUrl` em uma ferramenta específica
 *     -> aquele item passa a usar a URL própria, ignorando a busca padrão.
 * Não é preciso editar nenhum botão.
 */

export const MARKETPLACE = {
  nome: "Plati.Market",
  searchBase: "https://plati.market/search/",
  /** Parâmetro global de afiliado. Deixe `null` enquanto não existir. */
  affiliate: null as { param: string; value: string } | null,
};

export type Atencao = "Baixa" | "Média";

export type Ferramenta = {
  /** Identificador único — também usado nas âncoras (#ferramenta-<id>). */
  id: string;
  nome: string;
  /** Categoria canônica (uma só por ferramenta, evita duplicidade). */
  cat: string;
  para: string;
  funcao: string;
  tipo: string;
  oficial: string;
  encontrado: string;
  economia: string;
  atencao: Atencao;
  /** Termo de busca no marketplace. */
  query: string;
  /** URL de afiliado direta (opcional, tem prioridade sobre a busca). */
  affiliateUrl?: string;
};

const list: Ferramenta[] = [
  // ---------- Texto ----------
  { id: "chatgpt", nome: "ChatGPT Plus", cat: "Texto", para: "Roteiros, ideias e respostas rápidas", funcao: "IA de texto", tipo: "Conta compartilhada", oficial: "R$ 120/mês", encontrado: "R$ 19/mês", economia: "~84%", atencao: "Baixa", query: "chatgpt" },
  { id: "claude", nome: "Claude", cat: "Texto", para: "Texto longo, análise e raciocínio cuidadoso", funcao: "IA de texto", tipo: "Acesso compartilhado", oficial: "R$ 100/mês", encontrado: "R$ 25/mês", economia: "~75%", atencao: "Média", query: "claude" },
  { id: "gemini", nome: "Gemini", cat: "Texto", para: "Pesquisa, integração Google e multimodal", funcao: "IA multimodal", tipo: "Acesso compartilhado", oficial: "R$ 95/mês", encontrado: "R$ 22/mês", economia: "~76%", atencao: "Média", query: "gemini" },
  { id: "perplexity", nome: "Perplexity", cat: "Texto", para: "Busca com IA e fontes citadas", funcao: "Busca com IA", tipo: "Conta pro", oficial: "R$ 100/mês", encontrado: "R$ 29/mês", economia: "~71%", atencao: "Baixa", query: "perplexity" },
  { id: "copilot", nome: "Microsoft Copilot", cat: "Texto", para: "Office, Word, Excel e produtividade", funcao: "IA no Office", tipo: "Licença", oficial: "R$ 110/mês", encontrado: "R$ 35/mês", economia: "~68%", atencao: "Média", query: "copilot" },
  { id: "grok", nome: "Grok", cat: "Texto", para: "Respostas rápidas com tom direto e atual", funcao: "IA de texto", tipo: "Acesso compartilhado", oficial: "R$ 160/mês", encontrado: "R$ 29/mês", economia: "~82%", atencao: "Média", query: "grok" },

  // ---------- Imagem ----------
  { id: "midjourney", nome: "Midjourney", cat: "Imagem", para: "Imagens artísticas de alta qualidade", funcao: "IA de imagem", tipo: "Acesso compartilhado", oficial: "R$ 150/mês", encontrado: "R$ 29/mês", economia: "~80%", atencao: "Média", query: "midjourney" },
  { id: "leonardo", nome: "Leonardo AI", cat: "Imagem", para: "Imagens com controle e estilos", funcao: "IA de imagem", tipo: "Plano com créditos", oficial: "R$ 60/mês", encontrado: "R$ 15/mês", economia: "~75%", atencao: "Baixa", query: "leonardo ai" },
  { id: "freepik", nome: "Freepik", cat: "Imagem", para: "Banco de imagens e IA generativa", funcao: "Banco de mídia", tipo: "Premium anual", oficial: "R$ 600/ano", encontrado: "R$ 59/ano", economia: "~90%", atencao: "Baixa", query: "freepik" },
  { id: "adobe-firefly", nome: "Adobe Firefly", cat: "Imagem", para: "Geração e edição integradas à Adobe", funcao: "IA generativa", tipo: "Acesso compartilhado", oficial: "R$ 90/mês", encontrado: "R$ 25/mês", economia: "~72%", atencao: "Média", query: "adobe firefly" },
  { id: "ideogram", nome: "Ideogram", cat: "Imagem", para: "Imagens com tipografia e textos legíveis", funcao: "IA de imagem", tipo: "Plano com créditos", oficial: "R$ 100/mês", encontrado: "R$ 22/mês", economia: "~78%", atencao: "Média", query: "ideogram" },
  { id: "recraft", nome: "Recraft", cat: "Imagem", para: "Ilustrações, ícones e vetores por IA", funcao: "IA de imagem", tipo: "Plano com créditos", oficial: "R$ 120/mês", encontrado: "R$ 29/mês", economia: "~75%", atencao: "Média", query: "recraft" },

  // ---------- Vídeo ----------
  { id: "capcut-pro", nome: "CapCut Pro", cat: "Vídeo", para: "Edição pro com efeitos e IA", funcao: "Edição de vídeo", tipo: "Licença anual", oficial: "R$ 480/ano", encontrado: "R$ 49/ano", economia: "~90%", atencao: "Baixa", query: "capcut pro" },
  { id: "runway", nome: "Runway", cat: "Vídeo", para: "Geração de vídeo e efeitos com IA", funcao: "IA de vídeo", tipo: "Conta com créditos", oficial: "R$ 180/mês", encontrado: "R$ 39/mês", economia: "~78%", atencao: "Média", query: "runway" },
  { id: "kling", nome: "Kling", cat: "Vídeo", para: "Vídeos cinematográficos com IA", funcao: "IA de vídeo", tipo: "Plano com créditos", oficial: "R$ 130/mês", encontrado: "R$ 29/mês", economia: "~77%", atencao: "Média", query: "kling" },
  { id: "pika", nome: "Pika", cat: "Vídeo", para: "Vídeos curtos e animações com IA", funcao: "IA de vídeo", tipo: "Plano com créditos", oficial: "R$ 110/mês", encontrado: "R$ 25/mês", economia: "~77%", atencao: "Média", query: "pika" },
  { id: "higgsfield", nome: "Higgsfield", cat: "Vídeo", para: "Movimento de câmera e cenas geradas", funcao: "IA de vídeo", tipo: "Plano com créditos", oficial: "R$ 120/mês", encontrado: "R$ 29/mês", economia: "~75%", atencao: "Média", query: "higgsfield" },
  { id: "veo", nome: "Veo", cat: "Vídeo", para: "Geração de vídeos do Google", funcao: "IA de vídeo", tipo: "Acesso compartilhado", oficial: "R$ 180/mês", encontrado: "R$ 39/mês", economia: "~78%", atencao: "Média", query: "veo" },

  // ---------- Voz ----------
  { id: "elevenlabs", nome: "ElevenLabs", cat: "Voz", para: "Vozes naturais e clonagem", funcao: "Voz por IA", tipo: "Créditos", oficial: "R$ 110/mês", encontrado: "R$ 25/mês", economia: "~77%", atencao: "Média", query: "elevenlabs" },
  { id: "murf", nome: "Murf", cat: "Voz", para: "Narração profissional para vídeos", funcao: "Voz por IA", tipo: "Plano com créditos", oficial: "R$ 95/mês", encontrado: "R$ 22/mês", economia: "~76%", atencao: "Baixa", query: "murf" },
  { id: "speechify", nome: "Speechify", cat: "Voz", para: "Leitura de textos em voz natural", funcao: "Voz por IA", tipo: "Licença", oficial: "R$ 80/mês", encontrado: "R$ 19/mês", economia: "~76%", atencao: "Baixa", query: "speechify" },
  { id: "suno", nome: "Suno", cat: "Voz", para: "Geração de músicas com IA", funcao: "Música por IA", tipo: "Plano com créditos", oficial: "R$ 90/mês", encontrado: "R$ 25/mês", economia: "~72%", atencao: "Média", query: "suno" },
  { id: "udio", nome: "Udio", cat: "Voz", para: "Geração de músicas e trilhas", funcao: "Música por IA", tipo: "Plano com créditos", oficial: "R$ 90/mês", encontrado: "R$ 25/mês", economia: "~72%", atencao: "Média", query: "udio" },
  { id: "descript", nome: "Descript", cat: "Voz", para: "Edição de áudio e podcast com IA", funcao: "Edição de áudio", tipo: "Licença", oficial: "R$ 130/mês", encontrado: "R$ 29/mês", economia: "~77%", atencao: "Baixa", query: "descript" },

  // ---------- Design ----------
  { id: "canva", nome: "Canva Pro", cat: "Design", para: "Criação visual com biblioteca completa", funcao: "Design gráfico", tipo: "Plano família", oficial: "R$ 44/mês", encontrado: "R$ 9/mês", economia: "~80%", atencao: "Baixa", query: "canva pro" },
  { id: "envato", nome: "Envato Elements", cat: "Design", para: "Biblioteca infinita de assets e templates", funcao: "Banco de assets", tipo: "Assinatura anual", oficial: "R$ 990/ano", encontrado: "R$ 89/ano", economia: "~91%", atencao: "Média", query: "envato" },
  { id: "motion-array", nome: "Motion Array", cat: "Design", para: "Templates de vídeo e After Effects", funcao: "Templates de vídeo", tipo: "Assinatura anual", oficial: "R$ 720/ano", encontrado: "R$ 79/ano", economia: "~89%", atencao: "Média", query: "motion array" },
  { id: "creative-fabrica", nome: "Creative Fabrica", cat: "Design", para: "Fontes, gráficos e crafts", funcao: "Banco de assets", tipo: "Assinatura anual", oficial: "R$ 600/ano", encontrado: "R$ 69/ano", economia: "~88%", atencao: "Baixa", query: "creative fabrica" },
  { id: "placeit", nome: "Placeit", cat: "Design", para: "Mockups e templates de marca", funcao: "Mockups", tipo: "Assinatura anual", oficial: "R$ 360/ano", encontrado: "R$ 49/ano", economia: "~86%", atencao: "Baixa", query: "placeit" },
  { id: "figma", nome: "Figma", cat: "Design", para: "Design de interfaces colaborativo", funcao: "Design de UI", tipo: "Plano profissional", oficial: "R$ 90/mês", encontrado: "R$ 19/mês", economia: "~78%", atencao: "Média", query: "figma" },

  // ---------- Produtividade ----------
  { id: "notion", nome: "Notion AI", cat: "Produtividade", para: "Organização e IA dentro do Notion", funcao: "Gestão + IA", tipo: "Add-on", oficial: "R$ 50/mês", encontrado: "R$ 12/mês", economia: "~76%", atencao: "Baixa", query: "notion ai" },
  { id: "make", nome: "Make", cat: "Produtividade", para: "Automação visual de fluxos", funcao: "Automação", tipo: "Plano com créditos", oficial: "R$ 90/mês", encontrado: "R$ 25/mês", economia: "~72%", atencao: "Média", query: "make" },
  { id: "zapier", nome: "Zapier", cat: "Produtividade", para: "Conectores e automações entre apps", funcao: "Automação", tipo: "Plano com créditos", oficial: "R$ 120/mês", encontrado: "R$ 35/mês", economia: "~71%", atencao: "Média", query: "zapier" },
  { id: "gamma", nome: "Gamma", cat: "Produtividade", para: "Apresentações em minutos com IA", funcao: "Apresentações IA", tipo: "Plano com créditos", oficial: "R$ 70/mês", encontrado: "R$ 19/mês", economia: "~73%", atencao: "Baixa", query: "gamma" },
  { id: "apis", nome: "APIs / créditos", cat: "Produtividade", para: "Créditos para APIs de IA (OpenAI, etc.)", funcao: "Créditos de API", tipo: "Créditos", oficial: "R$ 100/mês", encontrado: "R$ 29/mês", economia: "~71%", atencao: "Média", query: "api ai" },
  { id: "n8n", nome: "n8n", cat: "Produtividade", para: "Automação open-source com nós e fluxos", funcao: "Automação", tipo: "Plano cloud", oficial: "R$ 110/mês", encontrado: "R$ 29/mês", economia: "~74%", atencao: "Média", query: "n8n" },
];

/** Índice por id — fonte única de verdade. */
export const TOOLS: Record<string, Ferramenta> = Object.fromEntries(
  list.map((t) => [t.id, t]),
);

export function getTool(id: string): Ferramenta {
  const t = TOOLS[id];
  if (!t) throw new Error(`Ferramenta desconhecida: ${id}`);
  return t;
}

/** Link único e centralizado da ferramenta no marketplace. */
export function toolUrl(id: string): string {
  const t = getTool(id);
  if (t.affiliateUrl) return t.affiliateUrl;
  const url = new URL(MARKETPLACE.searchBase + encodeURIComponent(t.query));
  if (MARKETPLACE.affiliate) {
    url.searchParams.set(MARKETPLACE.affiliate.param, MARKETPLACE.affiliate.value);
  }
  return url.toString();
}

/** Âncora interna da ferramenta dentro da área VIP. */
export function toolAnchor(id: string): string {
  return `#ferramenta-${getTool(id).id}`;
}

export type Categoria = {
  slug: string;
  nome: string;
  desc: string;
  cat: string;
  tools: string[];
};

export const CATEGORIAS: Categoria[] = [
  { slug: "texto", nome: "Texto, pesquisa e produtividade", desc: "Assistentes de escrita, pesquisa e raciocínio para o dia a dia.", cat: "Texto", tools: ["chatgpt", "claude", "gemini", "perplexity", "copilot", "grok"] },
  { slug: "imagem", nome: "Imagem e criação visual", desc: "Geração e edição de imagens para social, design e branding.", cat: "Imagem", tools: ["midjourney", "leonardo", "freepik", "adobe-firefly", "ideogram", "recraft"] },
  { slug: "video", nome: "Vídeo e edição", desc: "Ferramentas para roteiro, edição e geração de vídeos com IA.", cat: "Vídeo", tools: ["capcut-pro", "runway", "kling", "pika", "higgsfield", "veo"] },
  { slug: "audio", nome: "Voz, áudio e narração", desc: "Clonagem de voz, narração natural e geração musical.", cat: "Voz", tools: ["elevenlabs", "murf", "speechify", "suno", "udio", "descript"] },
  { slug: "design", nome: "Design, templates e criativos", desc: "Bibliotecas de templates, mockups e elementos prontos.", cat: "Design", tools: ["canva", "envato", "motion-array", "creative-fabrica", "placeit", "figma"] },
  { slug: "automacao", nome: "Automação e negócios", desc: "Automação de fluxos, APIs e produtividade para times.", cat: "Produtividade", tools: ["notion", "make", "zapier", "gamma", "apis", "n8n"] },
];

/** Tabela comparativa — só ids, os dados vêm do registro central. */
export const OFERTAS: string[] = [
  "chatgpt",
  "canva",
  "midjourney",
  "capcut-pro",
  "elevenlabs",
  "runway",
  "freepik",
  "leonardo",
  "notion",
  "envato",
];

export type Stack = {
  slug: string;
  papel: string;
  uso: string;
  economia: string;
  tools: { id: string; papelNoStack: string }[];
};

export const STACKS: Stack[] = [
  {
    slug: "criador",
    papel: "Criador de conteúdo",
    uso: "Roteiro, design e edição rápida",
    economia: "R$ 250/mês",
    tools: [
      { id: "chatgpt", papelNoStack: "Gera roteiros, títulos e ideias de conteúdo" },
      { id: "canva", papelNoStack: "Cria thumbnails, capas e posts prontos" },
      { id: "capcut-pro", papelNoStack: "Edita Reels, Shorts e cortes com efeitos pro" },
      { id: "elevenlabs", papelNoStack: "Faz narração realista para vídeos sem gravar" },
    ],
  },
  {
    slug: "social-media",
    papel: "Social media",
    uso: "Posts, criativos e legendas",
    economia: "R$ 220/mês",
    tools: [
      { id: "chatgpt", papelNoStack: "Escreve legendas, copys e calendário de posts" },
      { id: "canva", papelNoStack: "Monta feeds, stories e carrosséis em minutos" },
      { id: "freepik", papelNoStack: "Fotos, vetores e mockups premium para os criativos" },
      { id: "capcut-pro", papelNoStack: "Corta e legenda vídeos curtos para redes" },
    ],
  },
  {
    slug: "designer",
    papel: "Designer",
    uso: "Imagens, mockups e identidade",
    economia: "R$ 380/mês",
    tools: [
      { id: "midjourney", papelNoStack: "Gera artes conceituais e ilustrações exclusivas" },
      { id: "canva", papelNoStack: "Diagrama apresentações, social kits e identidade" },
      { id: "freepik", papelNoStack: "Vetores, ícones e mockups para acelerar layouts" },
      { id: "adobe-firefly", papelNoStack: "Preenche, expande e remove elementos com IA" },
    ],
  },
  {
    slug: "editor-video",
    papel: "Editor de vídeo",
    uso: "Edição, dublagem e geração de cenas",
    economia: "R$ 450/mês",
    tools: [
      { id: "capcut-pro", papelNoStack: "Edição completa com efeitos, transições e legendas" },
      { id: "runway", papelNoStack: "Gera, expande e edita cenas com IA generativa" },
      { id: "kling", papelNoStack: "Cria clipes a partir de texto ou imagem (texto→vídeo)" },
      { id: "elevenlabs", papelNoStack: "Dublagem e narração realista em vários idiomas" },
    ],
  },
  {
    slug: "infoprodutor",
    papel: "Infoprodutor",
    uso: "Aulas, materiais e apresentações",
    economia: "R$ 300/mês",
    tools: [
      { id: "chatgpt", papelNoStack: "Estrutura módulos, aulas, e-mails e copy de venda" },
      { id: "canva", papelNoStack: "Cria apostilas, slides e capas de módulo" },
      { id: "gamma", papelNoStack: "Gera slides e páginas de aula em segundos" },
      { id: "elevenlabs", papelNoStack: "Narra as aulas sem precisar gravar a própria voz" },
    ],
  },
  {
    slug: "freelancer-agencia",
    papel: "Freelancer / agência",
    uso: "Produtividade e automação de entregas",
    economia: "R$ 500/mês",
    tools: [
      { id: "chatgpt", papelNoStack: "Briefings, propostas e respostas para clientes" },
      { id: "notion", papelNoStack: "Organiza projetos, tarefas e documentação" },
      { id: "canva", papelNoStack: "Entrega criativos e identidade para os clientes" },
      { id: "make", papelNoStack: "Automatiza entregas, integrações e relatórios" },
    ],
  },
];

export type Ranking = {
  titulo: string;
  itens: { id: string; obs: string }[];
};

export const RANKINGS: Ranking[] = [
  {
    titulo: "Maiores economias encontradas",
    itens: [
      { id: "envato", obs: "Assinatura anual completa" },
      { id: "capcut-pro", obs: "Licença anual com edição pro" },
      { id: "freepik", obs: "Banco de mídia anual" },
      { id: "motion-array", obs: "Templates de vídeo anuais" },
      { id: "creative-fabrica", obs: "Fontes e gráficos anuais" },
    ],
  },
  {
    titulo: "Melhores para criadores de conteúdo",
    itens: [
      { id: "chatgpt", obs: "Roteiros e ideias com rapidez" },
      { id: "canva", obs: "Criativos rápidos" },
      { id: "elevenlabs", obs: "Narrações naturais" },
      { id: "midjourney", obs: "Imagens artísticas de alta qualidade" },
      { id: "gamma", obs: "Apresentações em minutos" },
    ],
  },
  {
    titulo: "Melhores para quem trabalha com vídeo",
    itens: [
      { id: "capcut-pro", obs: "Edição pro acessível" },
      { id: "runway", obs: "Geração e efeitos com IA" },
      { id: "kling", obs: "Vídeos cinematográficos com IA" },
      { id: "pika", obs: "Vídeos curtos e animações" },
      { id: "elevenlabs", obs: "Dublagem e narração realista" },
    ],
  },
  {
    titulo: "Melhores para produtividade e negócios",
    itens: [
      { id: "notion", obs: "Organização inteligente" },
      { id: "gamma", obs: "Apresentações em minutos" },
      { id: "make", obs: "Automação de fluxos" },
      { id: "n8n", obs: "Automação open-source" },
      { id: "copilot", obs: "Office, Word e Excel com IA" },
    ],
  },
];
