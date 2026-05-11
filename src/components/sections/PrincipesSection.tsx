import { motion } from "framer-motion";
import { Eye, Wand2, Gauge, Accessibility, Sparkles } from "lucide-react";

const principes = [
  { icon: Eye, title: "Lisibilité", description: "Clarté absolue. Chaque élément a sa raison d'être." },
  { icon: Wand2, title: "Finition", description: "Le diable est dans les détails. Nous les soignons." },
  { icon: Gauge, title: "Performance", description: "Core Web Vitals optimisés. Vitesse = conversion." },
  { icon: Sparkles, title: "Motion", description: "Animations subtiles. Jamais gratuites, toujours intentionnelles." },
  { icon: Accessibility, title: "Accessibilité", description: "Un web inclusif. WCAG et bonnes pratiques." },
];

export function PrincipesSection() {
  return (
    <section className="py-20 md:py-24 bg-[#1C1917] relative overflow-hidden">
      {/* Subtle ambre glow top */}
      <div
        className="absolute inset-x-0 top-0 h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 600px 200px at 50% 0%, rgba(245,158,11,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="section-label justify-center mb-5" style={{ color: "#F59E0B" }}>
            <span style={{ background: "#F59E0B", display: "inline-block", width: 24, height: 2 }} />
            STANDARDS
          </div>
          <h2 className="font-syne font-bold text-[32px] md:text-[44px] leading-[1.15] text-white mb-5">
            Ce qui fait la <span className="text-[#F59E0B]">différence</span>
          </h2>
          <p className="font-inter text-[#A8A29E] text-base md:text-lg leading-relaxed">
            Des principes non-négociables qui guident chacune de nos réalisations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {principes.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-full p-6 rounded-[20px] bg-[#2C2917] border border-[#3C3530] hover:border-[#F59E0B]/40 hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#F59E0B]/10 flex items-center justify-center mb-4 border border-[#F59E0B]/20">
                  <p.icon className="h-5 w-5 text-[#F59E0B]" />
                </div>
                <h3 className="font-syne font-semibold text-base text-white mb-2">{p.title}</h3>
                <p className="text-xs md:text-sm font-inter text-[#A8A29E] leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
