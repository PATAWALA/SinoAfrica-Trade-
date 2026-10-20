"use client";

import { useState } from "react";
import { FaSearch, FaShieldAlt, FaShip } from "react-icons/fa";
import { getWhatsAppLink } from "@/lib/constants";

const STEPS = [
  { icon: FaSearch, title: "1. Recherche fournisseur", desc: "Identification et verification des usines en Chine." },
  { icon: FaShieldAlt, title: "2. Controle qualite", desc: "Inspection en usine avant expedition." },
  { icon: FaShip, title: "3. Expedition Fret", desc: "Livraison Air/Mer securisee vers le Gabon." },
];

export default function SourcingSection() {
  const [weight, setWeight] = useState("");
  const [cbm, setCbm] = useState("");
  const estimate = cbm ? Math.round(parseFloat(cbm) * 350000) : 0;

  return (
    <section id="sourcing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-brand-blue font-semibold mb-2">Pole 2</div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-4">
            Sourcing & Logistique Chine-Afrique
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            De la recherche du fournisseur a la livraison, nous securisons chaque etape de votre import.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {STEPS.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-brand-dark rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-2">Calculateur express de cotation</h3>
          <p className="text-white/60 text-sm mb-6">Estimation indicative - devis precis via WhatsApp.</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Poids (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Ex : 100"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-brand-green"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Volume (CBM)</label>
              <input
                type="number"
                value={cbm}
                onChange={(e) => setCbm(e.target.value)}
                placeholder="Ex : 2.5"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-brand-green"
              />
            </div>
          </div>

          {estimate > 0 && (
            <div className="bg-brand-green/10 border border-brand-green/30 rounded-xl p-4 mb-4">
              <div className="text-xs text-white/60 mb-1">Estimation indicative :</div>
              <div className="text-2xl font-bold text-brand-green">
                {estimate.toLocaleString("fr-FR")} FCFA
              </div>
            </div>
          )}

          <a
            href={getWhatsAppLink(`Bonjour, je souhaite une cotation fret : ${weight}kg / ${cbm} CBM`)}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-brand-green hover:bg-brand-green/90 text-white font-semibold text-center py-3 rounded-xl transition-colors"
          >
            Obtenir une cotation exacte
          </a>
        </div>
      </div>
    </section>
  );
}