"use client";

import { useState } from "react";
import { FaArrowRight, FaShieldAlt, FaStar } from "react-icons/fa";
import { getWhatsAppLink, type PoleId } from "@/lib/constants";

const TABS: { id: PoleId; label: string; placeholder: string; message: string }[] = [
  {
    id: "auto",
    label: "Auto",
    placeholder: "Ex : Toyota RAV4 2023, budget 15M FCFA",
    message: "Bonjour, je souhaite un devis pour un vehicule : ",
  },
  {
    id: "sourcing",
    label: "Sourcing",
    placeholder: "Ex : 2 CBM de marchandises, fret maritime",
    message: "Bonjour, je souhaite une cotation sourcing/fret : ",
  },
  {
    id: "studies",
    label: "Etudes",
    placeholder: "Ex : Licence informatique, bourse 2025",
    message: "Bonjour, je souhaite un accompagnement pour mes etudes en Chine : ",
  },
];

export default function Hero() {
  const [active, setActive] = useState<PoleId>("auto");
  const [input, setInput] = useState("");
  const current = TABS.find((t) => t.id === active)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(getWhatsAppLink(current.message + input), "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm mb-8 shadow-sm">
            <FaStar className="w-4 h-4 text-brand-yellow" />
            <span className="text-slate-700 font-medium">
              Accompagnement certifie Chine-Gabon - plus de 12K abonnes
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-dark tracking-tight leading-[1.1] mb-6">
            Votre Passerelle Directe vers la{" "}
            <span className="text-brand-red">Chine</span> pour l'Auto, le Sourcing et les Etudes
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Securisez vos achats, gagnez du temps, et beneficiez d'un suivi de A a Z. Sans intermediaires, sans mauvaises surprises.
          </p>

          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  active === t.id
                    ? "bg-brand-green text-white shadow-lg shadow-brand-green/30 scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-2 shadow-xl border border-slate-100 flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={current.placeholder}
              required
              className="flex-1 px-5 py-3 text-brand-dark bg-transparent outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="bg-brand-red hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Obtenir mon devis
              <FaArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-500">
            <FaShieldAlt className="w-4 h-4 text-brand-green" />
            <span>Reponse sous 24h - Presence physique en Chine et au Gabon</span>
          </div>
        </div>
      </div>
    </section>
  );
}