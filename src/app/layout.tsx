import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "otolab. | L'IA et le Nocode au service de votre entreprise",
  description:
    "otolab conçoit les outils internes qui manquent à votre entreprise. CRM sur-mesure, tableaux de bord et automatisations IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
