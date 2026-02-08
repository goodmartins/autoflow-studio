const solutions = [
  {
    title: "Surveillance LinkedIn",
    description:
      "Recevez une alerte Slack chaque fois qu'un concurrent poste ou commente.",
    price: "199€ / mois",
  },
  {
    title: "Rédaction Blog Automatisée",
    description:
      "Transformez vos notes vocales en articles de blog SEO-friendly.",
    price: "450€ (Setup unique)",
  },
  {
    title: "Facturation & Onboarding",
    description:
      "Génération de contrats, factures et accès projet en 1 clic.",
    price: "800€ (Setup unique)",
  },
  {
    title: "Enrichissement de Leads",
    description:
      "Transformez un simple email en une fiche prospect complète.",
    price: "0.10€ / lead",
  },
];

export default function PlugAndPlay() {
  return (
    <section id="plug-and-play" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Nos Solutions
              <br />
              <span className="gradient-text">Plug &amp; Play.</span>
            </h2>
            <p className="text-muted mt-4 max-w-lg">
              Des modules d&apos;automatisation clés en main, pré-configurés et
              prêts à être déployés dans votre écosystème.
            </p>
          </div>
          <a
            href="#prestations"
            className="mt-6 md:mt-0 text-sm text-accent hover:underline font-mono"
          >
            Tout voir →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group bg-card border border-card-border rounded-xl p-6 hover:bg-card-hover hover:border-muted/20 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-base font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-1">
                {s.description}
              </p>
              <div className="mt-4 pt-4 border-t border-card-border">
                <span className="text-sm font-mono text-accent">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
