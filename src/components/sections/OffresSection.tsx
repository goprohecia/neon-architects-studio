import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Clock } from "lucide-react";
import { MagneticButton } from "@/components/wow";

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
    <section id="offres" className="relative py-24 md:py-32 bg-[#FBFAF7] overflow-hidden">
      {/* Halos pêche/violet de chaque côté */}
      <span className="prisme-halo-violet" style={{ top: "10%", left: "-15%" }} />
      <span className="prisme-halo-peach" style={{ bottom: "5%", right: "-12%" }} />
      <span className="prisme-halo-rose" style={{ top: "40%", left: "40%", opacity: 0.5 }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="section-label justify-center mb-6">Nos offres</div>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[#0E0B14] mb-6">
            Des offres claires.{" "}
            <span className="prisme-italic-grad">Un rendu premium.</span>
          </h2>
          <p className="text-[#6F6580] text-base md:text-lg leading-relaxed">
            Choisissez un cadre simple, on l&apos;élève au niveau studio : design, motion, performance et finitions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 max-w-6xl mx-auto items-stretch">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative h-full ${pack.recommended ? "lg:-translate-y-4" : ""}`}
            >
              {/* Badge "Recommandé" flottant au-dessus */}
              {pack.recommended && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -top-5 left-1/2 -translate-x-1/2 z-20"
                >
                  <span className="prisme-pill-grad inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.12em] uppercase">
                    <Star className="h-3 w-3 fill-current" />
                    Recommandé
                  </span>
                </motion.div>
              )}

              <div
                className={`relative h-full flex flex-col p-9 md:p-10 rounded-[28px] bg-white/85 backdrop-blur-md transition-all duration-500 ${
                  pack.recommended
                    ? "prisme-border-grad shadow-[0_30px_70px_-20px_rgba(124,58,237,0.28)]"
                    : "border border-[#EEEAF4] shadow-[0_12px_40px_-15px_rgba(124,58,237,0.12)] hover:shadow-[0_24px_60px_-20px_rgba(124,58,237,0.25)] hover:-translate-y-1"
                }`}
              >
                <div className="mb-7">
                  <span className="prisme-pill inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase mb-5">
                    {pack.name}
                  </span>
                  <h3 className="font-inter font-semibold text-[22px] md:text-[24px] text-[#0E0B14] mb-3 leading-tight tracking-tight">
                    {pack.tagline}
                  </h3>
                  <p className="text-[15px] text-[#6F6580] leading-relaxed">{pack.description}</p>
                </div>

                <div className="mb-7 pb-7 border-t border-[#EEEAF4] pt-6">
                  <div className="font-serif italic text-[42px] leading-none text-[#7C3AED]">{pack.price}</div>
                  {pack.delay && (
                    <p className="mt-3 text-sm text-[#6F6580] flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      Délai indicatif : {pack.delay}
                    </p>
                  )}
                </div>

                <div className="mb-8 flex-1">
                  <p className="text-[11px] font-semibold text-[#7C3AED] uppercase tracking-[0.18em] mb-5">
                    Inclus
                  </p>
                  <ul className="space-y-3.5">
                    {pack.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full flex items-center justify-center"
                          style={{
                            background: pack.recommended
                              ? "var(--prisme-gradient)"
                              : "rgba(124, 58, 237, 0.1)",
                          }}
                        >
                          <Check
                            className="h-3 w-3"
                            style={{ color: pack.recommended ? "#FFFFFF" : "#7C3AED" }}
                            strokeWidth={3}
                          />
                        </span>
                        <span className="text-[14.5px] text-[#0E0B14] leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <MagneticButton
                  as={Link}
                  to={`/contact?subject=Demande%20de%20proposition%20-%20${encodeURIComponent(pack.name)}`}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all ${
                    pack.recommended
                      ? "btn-prisme text-white"
                      : "bg-white border border-[#0E0B14] text-[#0E0B14] hover:bg-[#0E0B14] hover:text-[#FBFAF7]"
                  }`}
                >
                  Recevoir une proposition
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
