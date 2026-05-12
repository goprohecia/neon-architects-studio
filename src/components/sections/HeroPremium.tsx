import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, ChevronDown } from "lucide-react";
import { AuroraBackground, TextShimmer, MagneticButton, TiltCard, Sparkles, RevealText } from "@/components/wow";

const heroBadges = ["Design premium", "Performance & SEO", "Délais cadrés", "Stack moderne"];

export function HeroPremium() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-24 md:pb-24">
      {/* Aurora ambré + sparkles */}
      <AuroraBackground intensity="normal" />
      <Sparkles count={20} />

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

            <h1 className="font-syne font-bold text-[42px] sm:text-5xl lg:text-[64px] xl:text-[72px] leading-[1.05] tracking-tight text-[#1C1917]">
              <RevealText by="word" stagger={0.06}>Expériences digitales</RevealText>
              <span className="block">
                <TextShimmer duration={5}>sur-mesure.</TextShimmer>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-7 text-base md:text-lg text-[#78716C] font-inter leading-[1.7] max-w-xl"
            >
              Web, mobile & SaaS, design raffiné, performance et animations maîtrisées.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton
                as="a"
                href="https://calendly.com/yannis-bezriche/impartial-games"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-[#1C1917] font-semibold font-inter transition-colors shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_10px_28px_rgba(245,158,11,0.4)]"
              >
                Planifier un appel
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                as={Link}
                to="/#offres"
                onClick={(e: React.MouseEvent) => {
                  const el = document.getElementById("offres");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#1C1917] text-[#1C1917] font-medium font-inter hover:bg-[#1C1917] hover:text-[#FAFAF7] transition-colors"
              >
                Découvrir nos offres
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {heroBadges.map((b, i) => (
                <motion.span
                  key={b}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.06 }}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium font-inter bg-[#FEF3C7] text-[#92400E] border border-[#F59E0B]/30 uppercase tracking-wide"
                >
                  {b}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Colonne droite — mockup tilt 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <TiltCard max={10} className="rounded-[24px]">
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-white rounded-[24px] border border-[#E7E5E4] shadow-[0_25px_60px_-15px_rgba(245,158,11,0.25),0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden"
              >
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#E7E5E4] bg-[#FAFAF7]">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                  <span className="ml-3 text-xs text-[#A8A29E] font-inter">weclose.app</span>
                </div>
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
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#A8A29E]"
        animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-syne">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
