"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { POLES, getWhatsAppLink, COMPANY } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex flex-col items-center sm:items-start">
            <span className="font-serif font-bold text-2xl text-brand-dark tracking-tight leading-none">
              SinoAfrica
            </span>
            <div className="flex items-center gap-2 w-full mt-1">
              <span className="h-[1.5px] flex-1 bg-brand-red" />
              <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">
                Trade
              </span>
              <span className="h-[1.5px] flex-1 bg-brand-red" />
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {POLES.map((p) => (
              <a
                key={p.id}
                href={p.href}
                className="text-slate-600 hover:text-brand-red transition-colors font-medium text-sm"
              >
                {p.label}
              </a>
            ))}
          </nav>

          <a
            href={getWhatsAppLink(`Bonjour ${COMPANY.name}, je souhaite demander une cotation.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-full transition-all hover:scale-105 shadow-md shadow-brand-red/20"
          >
            <MessageCircle className="w-4 h-4" />
            Demander une cotation
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-600 p-2"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2">
          {POLES.map((p) => (
            <a
              key={p.id}
              href={p.href}
              onClick={() => setOpen(false)}
              className="block text-slate-700 hover:text-brand-red font-medium py-2"
            >
              {p.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink("Bonjour, je souhaite demander une cotation.")}
            target="_blank"
            className="flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-5 py-3 rounded-full mt-3"
          >
            <MessageCircle className="w-4 h-4" />
            Demander une cotation
          </a>
        </div>
      )}
    </header>
  );
}