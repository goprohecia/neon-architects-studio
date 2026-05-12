import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Clock } from "lucide-react";
import { TiltCard, MagneticButton } from "@/components/wow";

interface Pack {
  name: string;
  tagline: string;
  description: string;
  price: string;
  delay?: string;
  features: string[];
  recommended?: boolean;
}

const packs: Pack[] = [
  {
    name: "PACK LAUNCH",
    tagline: "Landing / One-page premium",
    description: "Lancer vite, marquer fort.",
    price: "Sur devis",
    delay: "2-3 semaines",
    features: [
      "Direction artistique + UI premium",
      "Copy structurel (hero, preuve, CTA)",
      "Animations légères (micro-interactions)",
      "Optimisation performance (Core Web Vitals)",
      "SEO de base + OpenGraph",
    ],
  },
  {
    name: "PACK STUDIO",
    tagline: "Site multi-pages signature",
    description: "Une présence digitale complète et élégante.",
    price: "Sur devis",
    delay: "4-6 semaines",
    features: [
      "Design system (typo, couleurs, composants)",
      "4 à 6 sections/pages clés",
      "Motion maîtrisé (scroll + reveal)",
      "Intégrations (formulaire, calendrier, analytics)",
      "SEO renforcé + structure Hn + maillage",
    ],
    recommended: true,
  },
  {
    name: "PACK ELITE",
    tagline: "SaaS / Backoffice / Produit",
    description: "Un produit robuste, scalable, premium.",
    price: "Sur devis",
    delay: "8-12 semaines",
    features: [
      "Discovery + cadrage (user flows)",
      "UI complexe + états (empty/loading/error)",
      "Auth / dashboard / backoffice",
      "Intégrations (API, CRM, paiement)",
      "Suivi post-livraison (handover + itérations)",
    ],
  },
];

export function OffresSection() {
  return (
    <section id="offres" className="py-20 md:py-24 bg-[#F5F0E8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="section-label justify-center mb-5">NOS OFFRES</div>
          <h2 className="font-syne font-bold text-[32px] md:text-[44px] leading-[1.15] text-[#1C1917] mb-5">
            Des offres claires.{" "}
            <span className="text-[#F59E0B]">Un rendu premium.</span>
          </h2>
          <p className="font-inter text-[#78716C] text-base md:text-lg leading-relaxed">
            Choisissez un cadre simple, on l'élève au niveau studio : design, motion, performance et finitions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative h-full ${pack.recommended ? "lg:-translate-y-3" : ""}`}
            >
              <TiltCard max={6} className="h-full">
              <div
                className={`relative h-full flex flex-col p-8 md:p-9 rounded-[20px] bg-white transition-all duration-300 ${
                  pack.recommended
                    ? "border-2 border-[#F59E0B] shadow-[0_20px_50px_rgba(245,158,11,0.18)]"
                    : "border border-[#E7E5E4] shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.12)]"
                }`}
              >
                {pack.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#F59E0B] text-[#1C1917] text-xs font-bold font-syne flex items-center gap-1.5 shadow-md uppercase tracking-wider">
                    <Star className="h-3 w-3 fill-current" />
                    Recommandé
                  </div>
                )}

                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold font-syne mb-4 bg-[#FEF3C7] text-[#92400E] uppercase tracking-wider border border-[#F59E0B]/30">
                    {pack.name}
                  </span>
                  <h3 className="font-syne font-bold text-[22px] text-[#1C1917] mb-2 leading-tight">
                    {pack.tagline}
                  </h3>
                  <p className="text-sm font-inter text-[#78716C]">{pack.description}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-[#E7E5E4]">
                  <div className="font-syne font-bold text-3xl text-[#1C1917]">{pack.price}</div>
                  {pack.delay && (
                    <p className="mt-2 text-sm font-inter text-[#A8A29E] flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      Délai indicatif : {pack.delay}
                    </p>
                  )}
                </div>

                <div className="mb-7 flex-1">
                  <p className="font-syne text-[11px] font-bold text-[#F59E0B] uppercase tracking-[0.15em] mb-4">
                    Inclus
                  </p>
                  <ul className="space-y-3">
                    {pack.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-4.5 w-4.5 flex-shrink-0 mt-0.5 text-[#F59E0B]" />
                        <span className="text-sm font-inter text-[#1C1917]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <MagneticButton
                  as={Link}
                  to={`/contact?subject=Demande%20de%20proposition%20-%20${encodeURIComponent(pack.name)}`}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold font-inter text-sm transition-all ${
                    pack.recommended
                      ? "bg-[#F59E0B] hover:bg-[#D97706] text-[#1C1917] shadow-[0_4px_16px_rgba(245,158,11,0.3)] hover:shadow-[0_8px_24px_rgba(245,158,11,0.4)]"
                      : "bg-white border border-[#1C1917] text-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAFAF7]"
                  }`}
                >
                  Recevoir une proposition
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
