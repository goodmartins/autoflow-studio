const steps = [
  {
    num: "01",
    title: "Audit & Vision",
    description:
      "On plonge dans vos processus. Identification des goulots d'étranglement, définition des KPIs et choix de la stratégie.",
  },
  {
    num: "02",
    title: "Architecture",
    description:
      "Mapping complet des flux de données. On dessine le schéma technique de votre future machine de guerre.",
  },
  {
    num: "03",
    title: "Build & Connect",
    description:
      "Développement des scénarios (Make/n8n), configuration des bases de données et connexions API.",
  },
  {
    num: "04",
    title: "Livraison & Training",
    description:
      "Tests de robustesse, mise en production et formation vidéo pour vos équipes. Vous avez les clés.",
  },
];

export default function Methodology() {
  return (
    <section id="a-propos" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-muted text-lg">
            Une méthodologie carrée pour des projets sans surprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-card-border to-transparent z-0" />
              )}
              <div className="bg-card border border-card-border rounded-xl p-6 relative z-10 h-full">
                <span className="text-3xl font-bold text-accent/30 font-mono">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
