export default function ApiSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: visual */}
        <div className="order-2 lg:order-1">
          <div className="bg-card border border-card-border rounded-2xl p-6 font-mono text-sm border-gradient">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-muted">API_GATEWAY_V1</span>
            </div>
            <div className="space-y-2 text-xs">
              <p className="text-muted">
                <span className="text-accent">POST</span> /api/v1/webhook/stripe
              </p>
              <p className="text-muted">
                <span className="text-cyan-400">GET</span> /api/v1/leads/enrich
              </p>
              <p className="text-muted">
                <span className="text-yellow-400">PUT</span> /api/v1/crm/sync
              </p>
              <div className="border-t border-card-border pt-3 mt-3">
                <p className="text-muted">
                  {"{"} <span className="text-accent">&quot;status&quot;</span>:{" "}
                  <span className="text-cyan-400">&quot;connected&quot;</span>,
                </p>
                <p className="text-muted pl-2">
                  <span className="text-accent">&quot;pipelines&quot;</span>:{" "}
                  <span className="text-foreground">12</span>,
                </p>
                <p className="text-muted pl-2">
                  <span className="text-accent">&quot;uptime&quot;</span>:{" "}
                  <span className="text-cyan-400">&quot;99.98%&quot;</span>
                </p>
                <p className="text-muted">{"}"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="order-1 lg:order-2">
          <p className="text-xs font-mono text-accent tracking-wider uppercase mb-4">
            Api First
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Connectez vos outils.
            <br />
            <span className="text-muted">_Libérez la donnée.</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Une automatisation n&apos;est puissante que si elle communique. Nous
            exploitons les APIs et Webhooks de votre stack pour créer des
            pipelines de données invisibles et robustes.
          </p>
        </div>
      </div>
    </section>
  );
}
