"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/constants";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const quickMessages = [
    { label: "Devis vehicule", msg: "Bonjour, je souhaite un devis pour un vehicule." },
    { label: "Cotation fret", msg: "Bonjour, je souhaite une cotation pour du fret." },
    { label: "Etudes en Chine", msg: "Bonjour, je souhaite des informations sur les etudes en Chine." },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-slate-200">
          <div className="bg-[#075E54] p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                SA
              </div>
              <div>
                <div className="font-bold text-sm">SinoAfrica Trade</div>
                <div className="text-xs text-green-200 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  En ligne
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#ECE5DD] space-y-2">
            <div className="bg-white rounded-lg p-3 text-sm text-slate-700 shadow-sm">
              Bonjour, comment pouvons-nous vous aider aujourd'hui ?
            </div>
            {quickMessages.map((q, i) => (
              <a
                key={i}
                href={getWhatsAppLink(q.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white hover:bg-brand-green hover:text-white rounded-lg p-2.5 text-sm text-slate-700 shadow-sm transition-colors"
              >
                {q.label}
              </a>
            ))}
          </div>

          <div className="p-3 bg-white border-t border-slate-100 text-center">
            <a
              href={getWhatsAppLink("Bonjour SinoAfrica Trade")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-green font-semibold hover:underline"
            >
              Ouvrir WhatsApp - {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      )}

      {showBubble && !isOpen && (
        <div className="bg-white rounded-2xl rounded-br-none shadow-xl px-4 py-2.5 text-sm text-slate-700 max-w-[220px] relative border border-slate-200">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-2 -right-2 bg-slate-200 hover:bg-slate-300 rounded-full p-0.5"
            aria-label="Fermer"
          >
            <X size={12} />
          </button>
          Besoin d'un devis ? Ecrivez-nous.
        </div>
      )}

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBubble(false);
        }}
        className="relative bg-[#25D366] hover:bg-[#1ebe5d] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle size={30} fill="white" />
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-brand-red rounded-full border-2 border-white animate-pulse" />
        )}
      </button>
    </div>
  );
}