import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  CATEGORIAS,
  OFERTAS,
  RANKINGS,
  STACKS,
  getTool,
  toolAnchor,
  toolUrl,
} from "@/data/ferramentas";
import printBusca from "@/assets/plati-busca-ferramentas.png.asset.json";
import printLista from "@/assets/plati-lista-resultados.png.asset.json";
import printProduto from "@/assets/plati-pagina-produto.png.asset.json";
import printVendedor from "@/assets/plati-reputacao-vendedor.png.asset.json";
import printReviews from "@/assets/plati-comentarios-reviews.png.asset.json";
import printCompra from "@/assets/plati-botao-compra.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mapa VIP das IAs — Área de Entrega" },
      {
        name: "description",
        content:
          "Área VIP do Mapa das IAs Baratas 2026: ferramentas, links, preços, rankings, prints e checklist de segurança.",
      },
      { property: "og:title", content: "Mapa VIP das IAs — Área de Entrega" },
      {
        property: "og:description",
        content:
          "Acesse o mapa completo de ferramentas de IA com ofertas, comparativos e rankings.",
      },
    ],
  }),
  component: MapaVIP,
});


const PRINTS = [
  { titulo: "Busca por ferramentas", legenda: "Use a busca para encontrar ofertas relacionadas à ferramenta que você quer.", img: printBusca.url },
  { titulo: "Lista de resultados", legenda: "Compare preço, título, vendedor e tipo de entrega antes de abrir uma oferta.", img: printLista.url },
  { titulo: "Página do produto", legenda: "Leia a descrição completa para entender exatamente o que está sendo vendido.", img: printProduto.url },
  { titulo: "Reputação do vendedor", legenda: "Priorize vendedores com histórico, avaliações e vendas recentes.", img: printVendedor.url },
  { titulo: "Comentários e reviews", legenda: "Comentários recentes ajudam a identificar se a oferta continua funcionando.", img: printReviews.url },
  { titulo: "Botão de compra", legenda: "Só avance depois de conferir preço, descrição, entrega e reputação.", img: printCompra.url },
];

const PASSOS = [
  "Escolha a categoria de IA que você quer",
  "Abra as opções recomendadas",
  "Compare preço, vendedor e descrição",
  "Confira reputação e avaliações",
  "Compre apenas quando a oferta fizer sentido para você",
];

const CHECKLIST = [
  "Conferir o preço final",
  "Ler a descrição inteira",
  "Verificar o tipo de entrega",
  "Conferir reputação do vendedor",
  "Ler comentários recentes",
  "Ver se existe garantia ou prazo de suporte",
  "Evitar ofertas confusas ou incompletas",
  "Comparar com pelo menos 2 opções antes de decidir",
];

const GLOSSARIO = [
  { termo: "Licença", desc: "Autorização para usar a ferramenta por um período definido." },
  { termo: "Key", desc: "Código que ativa a ferramenta em uma conta sua." },
  { termo: "Conta", desc: "Acesso direto a uma conta já pronta com a ferramenta ativa." },
  { termo: "Acesso compartilhado", desc: "Vários usuários usam o mesmo plano premium." },
  { termo: "Créditos", desc: "Unidades de uso (gerações, minutos, tokens) consumíveis." },
  { termo: "Plano família", desc: "Plano oficial que permite vários membros." },
  { termo: "Entrega automática", desc: "Acesso liberado logo após a compra, sem espera." },
  { termo: "Vendedor verificado", desc: "Vendedor com selo, histórico e reputação confirmada." },
  { termo: "Review", desc: "Avaliação deixada por outros compradores." },
  { termo: "Garantia", desc: "Prazo em que o vendedor cobre problemas com o acesso." },
];



const ATUALIZACOES = [
  "Novas ferramentas adicionadas",
  "Links revisados",
  "Rankings reorganizados",
  "Prints atualizados",
  "Novas categorias adicionadas",
];

const MENU = [
  { label: "Comece aqui", href: "#comece-aqui" },
  { label: "Ferramentas", href: "#ferramentas" },
  { label: "Rankings", href: "#rankings" },
  { label: "Como comprar", href: "#como-comprar" },
  { label: "Segurança", href: "#seguranca" },
  { label: "Stacks", href: "#stacks" },
  { label: "Atualizações", href: "#atualizacoes" },
];

function MapaVIP() {
  useEffect(() => {
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    document.querySelectorAll<HTMLElement>(".data-atualizacao").forEach((el) => {
      el.textContent = dataFormatada;
    });
  }, []);

  return (
    <div className="min-h-dvh overflow-x-hidden bg-[#0b0a07] text-[#f5efe0] antialiased scroll-smooth">
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(212,175,55,0.18),transparent)]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(212,175,55,0.08),transparent)]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-white/5 bg-[#0b0a07]/80 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:flex lg:justify-between">
            <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#8a6a1a] text-sm font-black text-black shadow-[0_0_30px_rgba(212,175,55,0.35)]">
                IA
              </span>
              <span className="truncate text-sm font-semibold tracking-tight sm:text-base">
                Mapa das IAs Baratas
              </span>
            </a>
            <nav className="hidden lg:flex items-center gap-7 text-sm text-white/70">
              {MENU.map((m) => (
                <a key={m.label} href={m.href} className="hover:text-[#f5d572] transition">
                  {m.label}
                </a>
              ))}
            </nav>
            <a
              href="#comece-aqui"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#f5d572] to-[#b8881e] px-4 py-2 text-xs font-semibold text-black shadow-[0_0_30px_rgba(212,175,55,0.35)] min-h-11 sm:text-sm"
            >
              Área VIP
            </a>
          </div>
        </header>


        <main id="top" className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* HERO */}
          <section className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:py-24">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-medium text-[#f5d572]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f5d572]" />
                Acesso liberado · Mapa VIP das IAs
              </span>
              <h1 className="mt-6 font-black leading-[1.05] tracking-tight text-[clamp(2rem,7vw,3.75rem)]">
                Seu{" "}
                <span className="bg-gradient-to-r from-[#f5d572] via-[#d4af37] to-[#8a6a1a] bg-clip-text text-transparent">
                  Mapa VIP
                </span>{" "}
                para encontrar ferramentas de IA pagando menos
              </h1>

              <p className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
                Aqui estão os links, preços, categorias, rankings, prints e instruções para você
                encontrar oportunidades em ferramentas de IA sem perder tempo garimpando sozinho.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Lista organizada",
                  "Links de ofertas",
                  "Prints explicativos",
                  "Comparativo de preços",
                  "Checklist de segurança",
                ].map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80"
                  >
                    ✓ {b}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#comece-aqui"
                  className="rounded-full bg-gradient-to-r from-[#f5d572] to-[#b8881e] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(212,175,55,0.4)] transition hover:scale-[1.02]"
                >
                  Começar pelo passo a passo →
                </a>
                <a
                  href="#ferramentas"
                  className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/[0.06]"
                >
                  Ver ofertas
                </a>
              </div>
            </div>

            {/* HERO card */}
            <aside className="relative rounded-3xl border border-[#d4af37]/20 bg-gradient-to-b from-[#1a1610] to-[#0e0c08] p-6 shadow-[0_30px_80px_-30px_rgba(212,175,55,0.3)] sm:p-8">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5d572]">
                Última atualização
              </div>
              <div className="mt-2 font-black tracking-tight text-white text-[clamp(2rem,6vw,3rem)]">
                <span className="data-atualizacao">--/--/----</span>
              </div>
              <p className="mt-3 text-sm text-white/60">
                Atualizado automaticamente todos os dias.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { t: "Produtos e ofertas organizados manualmente", d: "Curadoria atualizada com frequência." },
                  { t: "Verifique o preço final antes da compra", d: "Os valores podem variar de acordo com o vendedor." },
                  { t: "Prints explicativos em cada etapa", d: "Você sabe exatamente onde olhar antes de comprar." },
                ].map((i) => (
                  <div
                    key={i.t}
                    className="rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <div className="text-sm font-semibold text-white">{i.t}</div>
                    <div className="mt-1 text-xs text-white/60">{i.d}</div>
                  </div>
                ))}
              </div>
            </aside>
          </section>

          {/* Aviso */}
          <p className="mb-16 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-xs text-white/55 sm:text-sm">
            ⚠️ Os preços e anúncios foram organizados com base nas ofertas disponíveis no momento da
            curadoria. Antes de comprar, confira o preço final, descrição e reputação do vendedor.
          </p>

          {/* SEÇÃO 1 — Comece aqui */}
          <Section id="comece-aqui" eyebrow="Comece aqui" titulo="Como usar este mapa em 5 minutos">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {PASSOS.map((p, i) => (
                <div
                  key={p}
                  className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 transition hover:border-[#d4af37]/40"
                >
                  <div className="text-3xl font-black text-[#d4af37]/80">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-3 text-sm text-white/85">{p}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* SEÇÃO 2 — Como comprar (prints) */}
          <Section id="como-comprar" eyebrow="Como comprar" titulo="Entenda onde olhar antes de comprar">
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#d4af37]/30 bg-[#d4af37]/5 p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f5d572]">
                  Antes de começar
                </div>
                <h3 className="mt-1 text-base font-bold text-white">Mude o idioma e a moeda no rodapé do Plati</h3>
                <p className="mt-2 text-sm text-white/75">
                  Ao abrir o Plati.Market, role até o rodapé do site e altere o seletor para{" "}
                  <strong className="text-[#f5d572]">USD</strong> e{" "}
                  <strong className="text-[#f5d572]">English</strong>. Assim você vê preços em dólar
                  e a página inteira traduzida — igual aos prints abaixo.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                  Pagamento
                </div>
                <h3 className="mt-1 text-base font-bold text-white">Pode pagar com Pix</h3>
                <p className="mt-2 text-sm text-white/75">
                  Todas as ofertas do Plati.Market aceitam{" "}
                  <strong className="text-emerald-300">Pix</strong> como forma de pagamento. Basta
                  escolher Pix no checkout — sem precisar de cartão internacional.
                </p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PRINTS.map((p, i) => (
                <div
                  key={p.titulo}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#11100b]"
                >
                  <a
                    href={p.img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[16/10] w-full overflow-hidden bg-[#0c0b08]"
                    aria-label={`Abrir print em tamanho real — ${p.titulo}`}
                  >
                    <img
                      src={p.img}
                      alt={`Print do Plati.Market — ${p.titulo}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition group-hover:scale-[1.02]"
                    />
                    <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold text-white/90 backdrop-blur">
                      Clique para ampliar ↗
                    </span>
                  </a>
                  <div className="p-5">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f5d572]">
                      Passo {i + 1}
                    </div>
                    <div className="mt-1 text-base font-bold text-white">{p.titulo}</div>
                    <p className="mt-2 text-sm text-white/70">{p.legenda}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* SEÇÃO 3 — Mapa de categorias */}
          <Section id="ferramentas" eyebrow="Mapa principal" titulo="Mapa das ferramentas por categoria">
            <p className="mb-6 max-w-3xl text-sm text-white/70">
              Primeiro escolha a ferramenta dentro do Mapa VIP. Depois, quando decidir qual opção
              quer analisar, clique em <strong className="text-[#f5d572]">“Abrir opções no Plati”</strong>{" "}
              para comparar as ofertas diretamente no marketplace.
            </p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {CATEGORIAS.map((c) => (
                <div
                  key={c.slug}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition hover:border-[#d4af37]/40"
                >
                  <h3 className="text-lg font-bold text-white">{c.nome}</h3>
                  <p className="mt-1 text-sm text-white/60">{c.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.tools.map((id) => (
                      <li
                        key={id}
                        className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 px-2.5 py-1 text-xs text-[#f5d572]"
                      >
                        {getTool(id).nome}
                      </li>
                    ))}

                  </ul>
                  <a
                    href={`#categoria-${c.slug}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#f5d572] hover:underline"
                  >
                    Ver opções dessa categoria →
                  </a>
                </div>
              ))}
            </div>
          </Section>

          {/* SEÇÃO 3.1 — Listas internas por categoria */}
          <Section id="listas-internas" eyebrow="Listas internas" titulo="Listas internas por categoria">
            <p className="mb-8 max-w-3xl text-sm text-white/70">
              Cada bloco abaixo abre as ferramentas da categoria com detalhes de oferta. Somente o
              botão final de cada ferramenta abre o Plati.Market.
            </p>
            <div className="space-y-12">
              {CATEGORIAS.map((c) => (
                <div key={c.slug} id={`categoria-${c.slug}`} className="scroll-mt-24">
                  <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-3">
                    <div className="min-w-0">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f5d572]">
                        Categoria
                      </div>
                      <h3 className="mt-1 font-black text-white text-[clamp(1.25rem,4vw,1.5rem)]">{c.nome}</h3>
                    </div>
                    <a href="#ferramentas" className="shrink-0 text-xs text-white/50 hover:text-[#f5d572]">
                      ← voltar ao mapa
                    </a>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {c.tools.map((id) => {
                      const t = getTool(id);
                      return (
                      <div
                        key={t.id}
                        id={`ferramenta-${t.id}`}
                        className="scroll-mt-24 flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5"
                      >
                        <h4 className="text-base font-bold text-white">{t.nome}</h4>
                        <p className="mt-1 text-xs text-white/60">{t.para}</p>
                        <dl className="mt-4 space-y-1.5 text-xs">
                          <div className="flex justify-between gap-3">
                            <dt className="text-white/50">Tipo</dt>
                            <dd className="text-right text-white/85">{t.tipo}</dd>
                          </div>
                          <div className="flex justify-between gap-3">
                            <dt className="text-white/50">Preço oficial</dt>
                            <dd className="text-right text-white/50 line-through">{t.oficial}</dd>
                          </div>
                          <div className="flex justify-between gap-3">
                            <dt className="text-white/50">Preço de referência</dt>
                            <dd className="text-right font-semibold text-[#86efac]">{t.encontrado}</dd>
                          </div>
                          <div className="flex justify-between gap-3">
                            <dt className="text-white/50">Economia</dt>
                            <dd className="text-right font-semibold text-[#f5d572]">{t.economia}</dd>
                          </div>
                          <div className="flex items-center justify-between gap-3">
                            <dt className="text-white/50">Atenção</dt>
                            <dd>
                              <span
                                className={`rounded-full px-2 py-0.5 text-[11px] ${
                                  t.atencao === "Baixa"
                                    ? "bg-emerald-500/10 text-emerald-300"
                                    : "bg-amber-500/10 text-amber-300"
                                }`}
                              >
                                {t.atencao}
                              </span>
                            </dd>
                          </div>
                        </dl>
                        <a
                          href={toolUrl(t.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f5d572] to-[#b8881e] px-4 py-2 text-xs font-semibold text-black"
                        >
                          Abrir opções no Plati →
                        </a>
                      </div>
                      );
                    })}

                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* SEÇÃO 4 — Tabela */}
          <Section id="ofertas" eyebrow="Comparativo" titulo="Ofertas organizadas para você comparar">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f0e09]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-left text-sm">
                  <thead className="bg-white/[0.03] text-[11px] uppercase tracking-wider text-white/55">
                    <tr>
                      {["Ferramenta", "Categoria", "Tipo", "Preço oficial", "Preço encontrado", "Economia", "Link"].map((h) => (
                        <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {OFERTAS.map((id) => {
                      const o = getTool(id);
                      return (
                      <tr key={o.id} className="border-t border-white/5 hover:bg-white/[0.02]">
                        <td className="px-4 py-3 font-semibold text-white">{o.nome}</td>
                        <td className="px-4 py-3 text-white/70">{o.cat}</td>
                        <td className="px-4 py-3 text-white/70">{o.tipo}</td>
                        <td className="px-4 py-3 text-white/50 line-through">{o.oficial}</td>
                        <td className="px-4 py-3 font-semibold text-[#86efac]">{o.encontrado}</td>
                        <td className="px-4 py-3 font-semibold text-[#f5d572]">{o.economia}</td>
                        <td className="px-4 py-3">
                          <a
                            href={toolUrl(o.id)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-[#f5d572] to-[#b8881e] px-3 py-1.5 text-xs font-semibold text-black"
                          >
                            Abrir opções
                          </a>
                        </td>
                      </tr>
                      );
                    })}

                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-3 text-xs text-white/50">
              Os links levam para buscas no Plati.Market. Antes de comprar, confira preço final, descrição, reputação do vendedor e comentários recentes.
            </p>
          </Section>

          {/* SEÇÃO 5 — Rankings */}
          <Section id="rankings" eyebrow="Rankings" titulo="Rankings rápidos para decidir melhor">
            <div className="grid gap-5 md:grid-cols-2">
              {RANKINGS.map((r) => (
                <div key={r.titulo} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6">
                  <h3 className="text-lg font-bold text-white">{r.titulo}</h3>
                  <ol className="mt-4 space-y-3">
                    {r.itens.map((item, idx) => {
                      const i = getTool(item.id);
                      return (
                      <li key={i.id} className="flex flex-wrap items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 sm:flex-nowrap">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#d4af37]/15 text-sm font-black text-[#f5d572]">
                          {idx + 1}
                        </span>
                        <a href={toolAnchor(i.id)} className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-white hover:text-[#f5d572]">{i.nome}</div>
                          <div className="text-xs text-white/60">{item.obs}</div>
                        </a>
                        <div className="flex shrink-0 flex-col items-end leading-none">
                          <span className="bg-gradient-to-r from-[#f5d572] to-[#b8881e] bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
                            {i.economia}
                          </span>
                          <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/50">
                            de economia
                          </span>
                        </div>
                        <a
                          href={toolUrl(i.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#f5d572] to-[#b8881e] px-3 py-1.5 text-[11px] font-semibold text-black min-h-11"
                        >
                          Abrir no Plati →
                        </a>
                      </li>
                      );
                    })}

                  </ol>
                </div>
              ))}
            </div>
          </Section>

          {/* SEÇÃO 6 — Checklist */}
          <Section id="seguranca" eyebrow="Segurança" titulo="Checklist antes de comprar qualquer oferta">
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:grid-cols-2">
              {CHECKLIST.map((c) => (
                <label key={c} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-sm text-white/85">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#f5d572]">✓</span>
                  {c}
                </label>
              ))}
            </div>
          </Section>

          {/* SEÇÃO 7 — Glossário */}
          <Section id="glossario" eyebrow="Glossário" titulo="Entenda os termos mais comuns">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {GLOSSARIO.map((g) => (
                <div key={g.termo} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="text-sm font-bold text-[#f5d572]">{g.termo}</div>
                  <div className="mt-1 text-sm text-white/70">{g.desc}</div>
                </div>
              ))}
            </div>
          </Section>

          {/* SEÇÃO 8 — Stacks */}
          <Section id="stacks" eyebrow="Stacks por profissão" titulo="Stacks econômicos prontos por objetivo">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {STACKS.map((s) => (
                <div key={s.slug} className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6">
                  <h3 className="text-lg font-bold text-white">{s.papel}</h3>
                  <p className="mt-1 text-sm text-white/60">{s.uso}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.tools.map((t) => (
                      <li key={t.id} className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 px-2.5 py-1 text-xs text-[#f5d572]">
                        {getTool(t.id).nome}
                      </li>
                    ))}

                  </ul>
                  <div className="mt-5 rounded-xl border border-emerald-500/15 bg-emerald-500/5 p-3 text-sm text-emerald-300">
                    Economia estimada: <strong>{s.economia}</strong>
                  </div>
                  <a
                    href={`#stack-${s.slug}`}
                    className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#f5d572] hover:underline"
                  >
                    Ver ferramentas desse stack →
                  </a>
                </div>
              ))}
            </div>
          </Section>

          {/* SEÇÃO 8.1 — Stacks detalhados */}
          <Section id="stacks-detalhe" eyebrow="Stacks detalhados" titulo="Ferramentas de cada stack">
            <p className="mb-8 max-w-3xl text-sm text-white/70">
              Cada stack abre a lista das ferramentas recomendadas. Somente o botão final de cada
              ferramenta abre o Plati.Market.
            </p>
            <div className="space-y-10">
              {STACKS.map((s) => (
                <div key={s.slug} id={`stack-${s.slug}`} className="scroll-mt-24">
                  <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-3">
                    <div className="min-w-0">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f5d572]">
                        Stack
                      </div>
                      <h3 className="mt-1 font-black text-white text-[clamp(1.25rem,4vw,1.5rem)]">{s.papel}</h3>
                      <p className="mt-1 text-sm text-white/60">{s.uso}</p>
                    </div>
                    <a href="#stacks" className="shrink-0 text-xs text-white/50 hover:text-[#f5d572]">
                      ← voltar aos stacks
                    </a>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                    {s.tools.map((item, i) => {
                      const d = getTool(item.id);
                      return (
                      <div
                        key={d.id}
                        className="group relative flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-5 transition hover:border-[#f5d572]/40 hover:from-[#f5d572]/[0.06]"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f5d572]/10 text-sm font-black text-[#f5d572]">
                            {i + 1}
                          </div>
                          <span className="rounded-full border border-[#f5d572]/30 bg-[#f5d572]/10 px-2 py-0.5 text-[10px] font-semibold text-[#f5d572]">
                            {d.economia} off
                          </span>
                        </div>
                        <div className="mt-3 text-base font-bold text-white">{d.nome}</div>
                        <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-white/40">
                          {d.funcao}
                        </div>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                          {item.papelNoStack}
                        </p>
                        <a
                          href={toolUrl(d.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f5d572] to-[#b8881e] px-4 py-2 text-xs font-semibold text-black transition hover:brightness-110"
                        >
                          Abrir opções no Plati →
                        </a>
                      </div>
                      );
                    })}

                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* SEÇÃO 9 — Atualizações */}
          <Section id="atualizacoes" eyebrow="Atualizações" titulo="Atualizações do Mapa">
            <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
              <div className="rounded-2xl border border-[#d4af37]/20 bg-gradient-to-b from-[#1a1610] to-[#0e0c08] p-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5d572]">
                  Última atualização
                </div>
                <div className="mt-2 text-4xl font-black text-white">
                  <span className="data-atualizacao">--/--/----</span>
                </div>
                <p className="mt-3 text-sm text-white/60">
                  Esta página pode receber novas ferramentas, novos preços, novos prints e novos
                  rankings conforme novas oportunidades forem adicionadas manualmente.
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {ATUALIZACOES.map((a) => (
                  <li key={a} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/85">
                    <span className="h-2 w-2 rounded-full bg-[#f5d572]" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* SEÇÃO 10 — Suporte */}
          <Section id="suporte" eyebrow="Suporte" titulo="Precisa de ajuda para entender uma oferta?">
            <div className="rounded-3xl border border-[#d4af37]/20 bg-gradient-to-br from-[#1a1610] via-[#0f0d09] to-[#0b0a07] p-8 text-center sm:p-12">
              <p className="mx-auto max-w-2xl text-base text-white/75">
                Antes de comprar, compare as opções, leia a descrição e confira a reputação do
                vendedor. Se ficar em dúvida sobre qual categoria olhar primeiro, comece pelo stack
                mais próximo do seu objetivo.
              </p>
              <a
                href="#top"
                className="mt-6 inline-block rounded-full bg-gradient-to-r from-[#f5d572] to-[#b8881e] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(212,175,55,0.4)]"
              >
                Voltar ao início ↑
              </a>
            </div>
          </Section>
        </main>

        <footer className="mt-10 border-t border-white/5 py-10">
          <div className="mx-auto max-w-7xl px-4 text-center text-xs text-white/40 sm:px-6">
            © 2026 Mapa das IAs Baratas. Todos os direitos reservados.
          </div>
        </footer>
      </div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  titulo,
  children,
}: {
  id: string;
  eyebrow: string;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <div className="mb-8 max-w-3xl">
        <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#f5d572]">
          {eyebrow}
        </div>
        <h2 className="mt-2 font-black tracking-tight text-white text-[clamp(1.75rem,5vw,2.25rem)]">
          {titulo}
        </h2>
      </div>

      {children}
    </section>
  );
}
