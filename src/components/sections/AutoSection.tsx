"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGasPump, FaUsers, FaArrowRight } from "react-icons/fa";
import { getWhatsAppLink } from "@/lib/constants";
import { VEHICLES, FILTERS } from "@/data/vehicles";

export default function AutoSection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tous");
  const filtered = VEHICLES.filter((v) => filter === "Tous" || v.state === filter);

  return (
    <section id="auto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-brand-green font-semibold mb-2">Pole 1</div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-4">
            Export Automobile
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Vehicules neufs et d'occasion expedies depuis la Chine vers le Gabon. Prix transparents, fiches techniques et devis express.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-brand-dark text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((v) => (
            <div
              key={v.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={v.img}
                  alt={v.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span className="absolute top-3 left-3 bg-brand-green text-white text-xs font-semibold px-2.5 py-1 rounded-full z-10">
                  {v.state}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-brand-dark mb-1">{v.name}</h3>
                <p className="text-xs text-slate-500 mb-3">{v.type}</p>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <FaUsers className="w-3 h-3" />
                    {v.seats}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaGasPump className="w-3 h-3" />
                    {v.fuel}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-brand-blue">{v.price}</div>
                  <a
                    href={getWhatsAppLink(`Bonjour, je souhaite un devis pour : ${v.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-red hover:bg-red-700 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1 transition-colors"
                  >
                    Devis <FaArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}