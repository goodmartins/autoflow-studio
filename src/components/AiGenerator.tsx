"use client";

import { useState } from "react";

export default function AiGenerator() {
  const [sector, setSector] = useState("");
  const [instructions, setInstructions] = useState("");

  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Générateur <span className="gradient-text">IA</span>
          </h2>
          <p className="text-muted">
            Entrez votre secteur d&apos;activité et vos contraintes, notre IA
            vous propose une automatisation rentable.
          </p>
        </div>

        <div className="bg-card border border-card-border rounded-2xl p-8 border-gradient">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-muted mb-2">
                Secteur
              </label>
              <input
                type="text"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                placeholder="Ex: Immobilier, E-commerce..."
                className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-mono text-muted mb-2">
                Instructions
              </label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Ex: Focus budget réduit, pour les RH, sans Zapier..."
                rows={3}
                className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />
            </div>
            <button className="w-full bg-accent hover:bg-accent-hover text-background font-medium py-3 rounded-lg transition-colors">
              Générer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
