import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery",
    description: "Écoute active, analyse des besoins et définition de la stratégie.",
    deliverable: "Cahier des charges",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    description: "Création des maquettes UI/UX et validation du design system.",
    deliverable: "Maquettes Figma",
  },
  {
    icon: Code,
    number: "03",
    title: "Développement",
    description: "Code propre, tests rigoureux et itérations continues.",
    deliverable: "Version beta",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lancement",
    description: "Déploiement, optimisation et suivi des performances.",
    deliverable: "Produit live",
  },
];

export function MethodeSection() {
  return (
    <section id="methode" className="py-20 md:py-24 bg-[#F5F0E8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="section-label justify-center mb-5">MÉTHODE</div>
          <h2 className="font-syne font-bold text-[32px] md:text-[44px] leading-[1.15] text-[#1C1917] mb-5">
            Notre <span className="text-[#F59E0B]">processus</span>
          </h2>
          <p className="font-inter text-[#78716C] text-base md:text-lg leading-relaxed">
            Une méthodologie éprouvée pour des résultats exceptionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative h-full p-7 rounded-[20px] bg-white border border-[#E7E5E4] hover:border-[#F59E0B]/40 hover:shadow-[0_12px_40px_rgba(245,158,11,0.12)] hover:-translate-y-1 transition-all duration-300">
                <span
                  className="absolute top-3 right-4 font-syne font-bold text-[64px] leading-none text-[#F59E0B] opacity-15 select-none pointer-events-none"
                  aria-hidden
                >
                  {step.number}
                </span>

                <div className="relative w-12 h-12 rounded-full bg-[#FEF3C7] border-2 border-[#F59E0B] flex items-center justify-center mb-5 shadow-[0_0_0_4px_rgba(245,158,11,0.08)]">
                  <step.icon className="h-5 w-5 text-[#D97706]" />
                </div>

                <h3 className="font-syne font-bold text-lg text-[#1C1917] mb-2">{step.title}</h3>
                <p className="text-sm font-inter text-[#78716C] mb-5 leading-relaxed">
                  {step.description}
                </p>

                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#F5F0E8] text-xs font-medium font-inter text-[#78716C]">
                  Livrable :&nbsp;<span className="text-[#1C1917] font-semibold">{step.deliverable}</span>
                </div>
              </div>

              {/* Connecteur pointillé ambre */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 -translate-y-1/2"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #F59E0B 50%, transparent 50%)",
                    backgroundSize: "8px 2px",
                    backgroundRepeat: "repeat-x",
                    opacity: 0.5,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
