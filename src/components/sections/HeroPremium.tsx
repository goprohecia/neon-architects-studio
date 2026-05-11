import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const heroBadges = ["Design premium", "Performance & SEO", "Délais cadrés", "Stack moderne"];

export function HeroPremium() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-24 md:pb-24">
      {/* Gradients radiaux ambre */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 800px 600px at 60% 50%, rgba(251,191,36,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle 400px at 20% 80%, rgba(234,88,12,0.10) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Colonne gauche */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label mb-6"
            >
              IMPARTIAL GAMES
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-syne font-bold text-[42px] sm:text-5xl lg:text-[64px] xl:text-[72px] leading-[1.05] tracking-tight text-[#1C1917]"
            >
              Expériences digitales{" "}
              <span className="block text-[#F59E0B]">sur-mesure.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 text-base md:text-lg text-[#78716C] font-inter leading-[1.7] max-w-xl"
            >
              Web, mobile & SaaS, design raffiné, performance et animations maîtrisées.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://calendly.com/yannis-bezriche/impartial-games"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-[#1C1917] font-semibold font-inter transition-all shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_10px_28px_rgba(245,158,11,0.4)] hover:-translate-y-0.5"
              >
                Planifier un appel
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/#offres"
                onClick={(e) => {
                  const el = document.getElementById("offres");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#1C1917] text-[#1C1917] font-medium font-inter hover:bg-[#1C1917] hover:text-[#FAFAF7] transition-colors"
              >
                Découvrir nos offres
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {heroBadges.map((b) => (
                <span
                  key={b}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium font-inter bg-[#FEF3C7] text-[#92400E] border border-[#F59E0B]/30 uppercase tracking-wide"
                >
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Colonne droite — mockup flottant */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-white rounded-[24px] border border-[#E7E5E4] shadow-[0_25px_60px_-15px_rgba(245,158,11,0.25),0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              {/* Header style macOS */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#E7E5E4] bg-[#FAFAF7]">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                <span className="ml-3 text-xs text-[#A8A29E] font-inter">weclose.app</span>
              </div>
              {/* Contenu */}
              <div className="p-6 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#A8A29E] font-syne mb-1">
                    Projet en cours
                  </p>
                  <h3 className="font-syne font-bold text-2xl text-[#1C1917]">We Close Agency</h3>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FEF3C7] border border-[#F59E0B]/30">
                  <div className="h-10 w-10 rounded-lg bg-[#F59E0B] flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-[#1C1917]" />
                  </div>
                  <div>
                    <p className="text-2xl font-syne font-bold text-[#1C1917] leading-none">
                      +340%
                    </p>
                    <p className="text-xs text-[#78716C] font-inter mt-1">de trafic organique</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs font-inter mb-2">
                    <span className="text-[#78716C]">Avancement</span>
                    <span className="text-[#1C1917] font-semibold">82%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#F5F0E8] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "82%" }}
                      transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] rounded-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {["Design", "Dev", "SEO"].map((tag) => (
                    <span
                      key={tag}
                      className="text-center text-[11px] font-inter px-2 py-1.5 rounded-md bg-[#F5F0E8] text-[#78716C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
