export default function Approach() {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Standardisé ou
            <br />
            <span className="gradient-text">Sur-Mesure</span> ?
          </h2>
          <p className="text-xl text-muted">On fait les deux.</p>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Chaque entreprise est à un stade différent de maturité digitale.
            Nous adaptons notre intervention à vos enjeux actuels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Plug & Play */}
          <div className="bg-card border border-card-border rounded-2xl p-8 border-gradient">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-bold text-lg">
                1
              </span>
              <h3 className="text-xl font-bold">Solutions Plug &amp; Play</h3>
            </div>
            <p className="text-muted leading-relaxed">
              Des modules pré-construits, inspirés des meilleurs standards du
              marché. On installe, on configure vos clés API, et ça tourne.
            </p>
          </div>

          {/* Sur-mesure */}
          <div className="bg-card border border-card-border rounded-2xl p-8 border-gradient">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-lg">
                2
              </span>
              <h3 className="text-xl font-bold">Architecture Sur-Mesure</h3>
            </div>
            <p className="text-muted leading-relaxed">
              Votre processus est unique ? Nous partons d&apos;une feuille
              blanche. Audit, architecture de données, logique complexe et
              intégration fine dans votre ERP/CRM maison.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
