const services = [
  {
    tag: "Ops",
    title: "CRM Sur-Mesure",
    description:
      "Fini Excel. Centralisez clients, stocks et factures dans une interface fluide adaptée à votre métier.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    tag: "Product",
    title: "POC & MVP Rapide",
    description:
      "Testez votre idée de startup en 2 semaines avec une app fonctionnelle pour valider le marché.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    tag: "AI",
    title: "Agents IA & RAG",
    description:
      "Chatbots intelligents formés sur vos données d'entreprise pour le support client ou interne.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    tag: "Sales",
    title: "Outreach Automatisé",
    description:
      "Scraping, enrichissement de leads et séquences d'emails : prospectez en pilote automatique.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    tag: "Data",
    title: "Reporting 360°",
    description:
      "Vos KPIs agrégés de tous vos outils (Stripe, Ads, Analytics) envoyés chaque lundi sur Slack.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    tag: "Admin",
    title: "Génération Documentaire",
    description:
      "Créez automatiquement devis, factures et contrats PDF depuis un formulaire ou CRM.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
];

export default function Services() {
  return (
    <section id="prestations" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            L&apos;IA et le No-Code au service
            <br />
            <span className="text-muted">de vos opérations.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card border border-card-border rounded-xl p-6 hover:bg-card-hover hover:border-muted/20 transition-all duration-300"
            >
              <span
                className={`inline-block text-xs font-mono ${s.color} ${s.bg} px-2 py-1 rounded mb-4`}
              >
                {s.tag}
              </span>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
