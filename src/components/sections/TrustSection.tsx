import { Shield, MapPin, MessageCircle, Star } from "lucide-react";

const REASONS = [
  { icon: MapPin, title: "Presence physique en Chine", desc: "Bureau local pour verifier chaque fournisseur avant achat." },
  { icon: MessageCircle, title: "Suivi WeChat / WhatsApp", desc: "Communication directe et transparente a chaque etape." },
  { icon: Shield, title: "Paiements securises", desc: "Contrats clairs, paiement progressif et securise." },
];

const STATS = [
  { value: "+500", label: "Clients satisfaits" },
  { value: "+12K", label: "Abonnes TikTok" },
  { value: "+200", label: "Vehicules exportes" },
  { value: "98%", label: "Taux de satisfaction" },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
            Pourquoi choisir SinoAfrica Trade ?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Une relation de confiance batie sur la transparence, l'experience terrain et la securite.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {REASONS.map((r, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                <r.icon className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold mb-2">{r.title}</h3>
              <p className="text-sm text-white/60">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-yellow mb-1">{s.value}</div>
              <div className="text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
            ))}
          </div>
          <p className="text-lg italic text-white/80 mb-4">
            "J'ai recu mon Toyota Hilux en 6 semaines, conforme et sans frais caches. Le suivi WhatsApp est impeccable."
          </p>
          <div className="text-sm text-white/60">Marie K., Libreville</div>
        </div>
      </div>
    </section>
  );
}