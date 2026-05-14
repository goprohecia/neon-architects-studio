import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Prisme — SVG sculpture iridescente (rubans + prismes R/G/B).
 * Parallax doux au scroll, rotation lente, halos colorés.
 */
export function PrismObject({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const rot = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <div ref={ref} className={`relative aspect-square w-full ${className}`}>
      {/* Halos colorés en fond */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="prisme-halo-violet" style={{ top: "-10%", right: "-15%" }} />
        <span className="prisme-halo-rose" style={{ bottom: "-15%", left: "-10%" }} />
        <span className="prisme-halo-peach" style={{ top: "30%", right: "10%" }} />
      </div>

      <motion.div
        style={{ y, rotate: rot }}
        className="relative w-full h-full"
      >
        {/* Ruban filaire animé en arrière-plan */}
        <motion.svg
          viewBox="0 0 600 600"
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 1.4, delay: 0.2 }}
        >
          <defs>
            <linearGradient id="ribbon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#F0AFC8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#FFB996" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="thin-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5E7AFF" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FF5E78" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Couches de rubans concentriques */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <motion.path
              key={i}
              d={`M 60 ${300 + i * 6} Q 200 ${120 - i * 8} 380 ${260 + i * 4} T 580 ${340 - i * 5}`}
              fill="none"
              stroke="url(#ribbon-grad)"
              strokeWidth={1.2}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.4, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.path
              key={`thin-${i}`}
              d={`M 80 ${440 - i * 4} Q 280 ${480 + i * 3} 500 ${400 - i * 6}`}
              fill="none"
              stroke="url(#thin-grad)"
              strokeWidth={0.8}
              opacity={0.4}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6 + i * 0.1 }}
            />
          ))}
        </motion.svg>

        {/* Prisme central — rotation lente */}
        <motion.div
          className="absolute inset-[10%] flex items-center justify-center"
          animate={{ rotate: [0, 4, -3, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_30px_60px_rgba(124,58,237,0.18)]">
            <defs>
              <linearGradient id="prism-red" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#FF5E78" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#FF5E78" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="prism-green" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="55%" stopColor="#5EE7B1" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#5EE7B1" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="prism-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="55%" stopColor="#5E7AFF" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#5E7AFF" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Lame verre rouge */}
            <motion.polygon
              points="160,40 230,110 200,300 130,230"
              fill="url(#prism-red)"
              stroke="rgba(255,94,120,0.5)"
              strokeWidth={1}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            {/* Lame verre verte */}
            <motion.polygon
              points="200,80 290,140 260,330 180,260"
              fill="url(#prism-green)"
              stroke="rgba(94,231,177,0.45)"
              strokeWidth={1}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65 }}
            />
            {/* Lame verre bleue */}
            <motion.polygon
              points="240,120 340,180 320,360 230,300"
              fill="url(#prism-blue)"
              stroke="rgba(94,122,255,0.5)"
              strokeWidth={1}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            />

            {/* Reflets fins */}
            <motion.line
              x1="160" y1="40" x2="200" y2="300"
              stroke="#FFFFFF" strokeWidth={1} opacity={0.7}
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            />
            <motion.line
              x1="290" y1="140" x2="260" y2="330"
              stroke="#FFFFFF" strokeWidth={0.8} opacity={0.6}
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 1.35 }}
            />
            <motion.line
              x1="340" y1="180" x2="320" y2="360"
              stroke="#FFFFFF" strokeWidth={0.8} opacity={0.6}
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 1.5 }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
