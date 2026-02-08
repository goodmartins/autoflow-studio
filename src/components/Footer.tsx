const menuLinks = [
  { label: "Plug & Play", href: "#plug-and-play" },
  { label: "Prestations", href: "#prestations" },
  { label: "À Propos", href: "#a-propos" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-card-border bg-card/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-xl font-bold tracking-tight">
              otolab<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted mt-4 leading-relaxed max-w-xs">
              otolab conçoit les outils internes qui manquent à votre
              entreprise. CRM sur-mesure, tableaux de bord et automatisations
              IA.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Menu
            </h4>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href="mailto:hello@otolab.tech"
                  className="hover:text-foreground transition-colors"
                >
                  hello@otolab.tech
                </a>
              </li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-card-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; 2026 otolab. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
