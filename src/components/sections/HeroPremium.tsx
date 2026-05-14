import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { MagneticButton, RevealText, PrismObject } from "@/components/wow";

const heroBadges = ["Design éditorial", "Motion maîtrisé", "Performance & SEO", "Stack moderne"];

export function HeroPremium() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-28 md:pb-24 bg-[#FBFAF7]">
      {/* Halos de fond */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="prisme-halo-violet" style={{ top: "-8%", right: "-6%" }} />
        <span className="prisme-halo-rose" style={{ bottom: "-12%", left: "20%" }} />
        <span className="prisme-halo-peach" style={{ top: "20%", right: "30%" }} />
      </div>

      {/* Lignes filaires gradient très fines */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hero-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFB996" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[15, 35, 55, 75].map((y) => (
          <line key={y} x1="0" y1={`${y}%`} x2="100%" y2={`${y + 3}%`} stroke="url(#hero-line)" strokeWidth="0.7" />
        ))}
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Colonne gauche */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label mb-6"
            >
              Studio Impartial · Paris
            </motion.div>

            <h1 className="font-serif text-[44px] sm:text-[56px] lg:text-[78px] xl:text-[88px] leading-[1.02] tracking-[-0.02em] text-[#0E0B14]">
              <RevealText by="word" stagger={0.06}>Créateurs</RevealText>
              <span className="block">
                <RevealText by="word" stagger={0.06} delay={0.15}>
                  d&apos;expériences
                </RevealText>
              </span>
              <span className="block">
                <span className="prisme-italic-grad prisme-shimmer">digitales sur-mesure.</span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-[17px] md:text-[19px] text-[#6F6580] leading-[1.65] max-w-xl"
            >
              Web, mobile et SaaS premium — design éditorial, motion intentionnel et performance Core Web Vitals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton
                as="a"
                href="https://calendly.com/yannis-bezriche/impartial-games"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-prisme group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-[15px]"
              >
                Planifier un appel
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                as={Link}
                to="/#offres"
                onClick={(e: React.MouseEvent) => {
                  const el = document.getElementById("offres");
                  if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#0E0B14] text-[#0E0B14] font-medium text-[15px] hover:bg-[#0E0B14] hover:text-[#FBFAF7] transition-colors"
              >
                Découvrir nos offres
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {heroBadges.map((b, i) => (
                <motion.span
                  key={b}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.05 + i * 0.06 }}
                  className="prisme-pill px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-wide"
                >
                  {b}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Colonne droite — sculpture iridescente */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <PrismObject />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#6F6580]"
        animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
