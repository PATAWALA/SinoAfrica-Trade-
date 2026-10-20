import { MessageCircle, Mail, MapPin, Instagram } from "lucide-react";
import { getWhatsAppLink, POLES, COMPANY, WHATSAPP_DISPLAY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 pb-8 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex flex-col items-start mb-4">
              <span className="font-serif font-bold text-2xl text-white">SinoAfrica</span>
              <div className="flex items-center gap-2 w-32 mt-1">
                <span className="h-[1.5px] flex-1 bg-brand-red" />
                <span className="text-brand-red text-[10px] font-bold tracking-[0.3em] uppercase">
                  Trade
                </span>
                <span className="h-[1.5px] flex-1 bg-brand-red" />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-4">
              Votre passerelle directe vers la Chine pour l'automobile, le sourcing et les etudes. Entre le Gabon et la Chine.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-brand-green" />
              {COMPANY.zones.join(" - ")}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Nos poles</h4>
            <ul className="space-y-3 text-sm">
              {POLES.map((p) => (
                <li key={p.id}>
                  <a href={p.href} className="hover:text-brand-yellow transition-colors">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact direct</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={getWhatsAppLink("Bonjour SinoAfrica Trade")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-green transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 hover:text-brand-yellow transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@sinoafricatrade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-yellow transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  {COMPANY.tiktok}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            {new Date().getFullYear()} {COMPANY.name}. Tous droits reserves.
          </div>
          <div>Entre le Gabon et la Chine</div>
        </div>
      </div>
    </footer>
  );
}