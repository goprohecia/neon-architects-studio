import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Smartphone, Database, Layers, ArrowRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Sites Web", description: "De la vitrine épurée au e-commerce puissant.", href: "/services/web" },
  { icon: Smartphone, title: "Apps Mobiles", description: "Expériences natives iOS & Android.", href: "/services/mobile" },
  { icon: Database, title: "Backoffice", description: "Dashboards et outils sur-mesure.", href: "/services/backoffice" },
  { icon: Layers, title: "Écosystème 360°", description: "Solutions complètes multi-plateformes.", href: "/services/360" },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-24 bg-[#FAFAF7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="section-label justify-center mb-5">SERVICES</div>
          <h2 className="font-syne font-bold text-[32px] md:text-[44px] leading-[1.15] text-[#1C1917] mb-5">
            Nos <span className="text-[#F59E0B]">expertises</span>
          </h2>
          <p className="font-inter text-[#78716C] text-base md:text-lg leading-relaxed">
            Du concept à la production, nous maîtrisons l'ensemble de la chaîne digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={s.href}
                className="group block h-full p-7 rounded-[20px] bg-white border border-[#E7E5E4] hover:border-[#F59E0B]/40 hover:shadow-[0_12px_40px_rgba(245,158,11,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="h-5 w-5 text-[#D97706]" />
                </div>
                <h3 className="font-syne font-semibold text-lg text-[#1C1917] mb-2">{s.title}</h3>
                <p className="text-sm font-inter text-[#78716C] mb-5 leading-relaxed">
                  {s.description}
                </p>
                <div className="inline-flex items-center gap-1.5 text-sm font-medium font-inter text-[#F59E0B]">
                  <span>Découvrir</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
