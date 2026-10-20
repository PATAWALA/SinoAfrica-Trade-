import { GraduationCap, Plane, Home, ArrowRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

const PROGRAMS = [
  { title: "Licence Informatique", uni: "Tsinghua University", duration: "4 ans" },
  { title: "Master Business", uni: "Peking University", duration: "2 ans" },
  { title: "Ingenierie Mecanique", uni: "Shanghai Jiao Tong", duration: "5 ans" },
  { title: "Medecine", uni: "Fudan University", duration: "6 ans" },
];

const SERVICES = [
  { icon: GraduationCap, label: "Bourses & inscriptions" },
  { icon: Plane, label: "Visa & voyage" },
  { icon: Home, label: "Accueil en Chine" },
];

export default function StudiesSection() {
  return (
    <section id="etudes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-brand-yellow font-semibold mb-2">Pole 3</div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-4">
            Bourses & Etudes en Chine
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Accompagnement complet pour integrer les meilleures universites chinoises : bourses, visa, accueil.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {SERVICES.map((s, i) => (
            <div key={i} className="text-center bg-slate-50 rounded-2xl p-6">
              <div className="w-12 h-12 mx-auto rounded-xl bg-brand-yellow/20 flex items-center justify-center mb-3">
                <s.icon className="w-6 h-6 text-brand-yellow" />
              </div>
              <div className="text-sm font-medium text-brand-dark">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {PROGRAMS.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5 text-brand-blue" />
              </div>
              <h3 className="font-bold text-brand-dark mb-1">{p.title}</h3>
              <p className="text-xs text-slate-500 mb-1">{p.uni}</p>
              <p className="text-xs text-brand-green font-semibold mb-4">{p.duration}</p>
              <a
                href={getWhatsAppLink(`Bonjour, je souhaite des infos sur : ${p.title} - ${p.uni}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-red transition-colors"
              >
                En savoir plus <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={getWhatsAppLink("Bonjour, je souhaite reserver une session d'accompagnement pour mes etudes en Chine.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-brand-red/20 transition-all hover:scale-105"
          >
            Reserver ma session d'accompagnement
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}