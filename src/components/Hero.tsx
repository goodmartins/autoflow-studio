export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
            Disponible pour nouveaux projets
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            L&apos;IA
            <br />
            <span className="gradient-text">et le Nocode</span>
            <br />
            au service de votre entreprise.
          </h1>

          <p className="text-lg text-muted max-w-lg mb-10">
            otolab conçoit les outils internes qui manquent à votre entreprise.
            CRM sur-mesure, tableaux de bord et automatisations IA.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-background font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Réserver un appel
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#prestations"
              className="inline-flex items-center gap-2 border border-card-border hover:border-muted text-foreground font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Voir les solutions
            </a>
          </div>
        </div>

        {/* Right: decorative dashboard mock */}
        <div className="hidden lg:block">
          <div className="relative animate-float">
            {/* Floating tool badges */}
            <div className="absolute -top-4 -left-4 bg-card border border-card-border rounded-lg px-3 py-2 text-xs font-mono flex items-center gap-2 shadow-lg">
              <span className="w-5 h-5 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px] font-bold">M</span>
              MAKE_WORKFLOW
            </div>
            <div className="absolute top-12 -right-2 bg-card border border-card-border rounded-lg px-3 py-2 text-xs font-mono shadow-lg">
              Tally
            </div>
            <div className="absolute top-28 -left-6 bg-card border border-card-border rounded-lg px-3 py-2 text-xs font-mono shadow-lg">
              OpenAI
            </div>
            <div className="absolute bottom-20 -right-4 bg-card border border-card-border rounded-lg px-3 py-2 text-xs font-mono shadow-lg">
              Notion
            </div>
            <div className="absolute bottom-8 left-4 bg-card border border-card-border rounded-lg px-3 py-2 text-xs font-mono text-accent shadow-lg">
              Update a DB
            </div>

            {/* Main dashboard card */}
            <div className="bg-card border border-card-border rounded-2xl p-6 ml-8 mr-4 glow-green">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted">DASHBOARD_V2.SYS</span>
                <span className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <div className="text-xs text-muted uppercase tracking-wider mb-1">
                Revenus Mensuels
              </div>
              <div className="text-3xl font-bold mb-1">+ 12,450€</div>
              <div className="text-xs text-accent mb-6">+24% vs M-1</div>
              {/* Mini bar chart */}
              <div className="flex items-end gap-2 h-24">
                {[40, 55, 45, 70, 90].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-accent/20 rounded-sm animate-grow-bar"
                      style={{
                        height: `${h}%`,
                        animationDelay: `${i * 0.15}s`,
                      }}
                    >
                      <div
                        className="w-full rounded-sm bg-accent/60"
                        style={{ height: `${h * 0.6}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-muted">M{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
