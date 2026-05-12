import { motion, useScroll, useSpring, useTransform, useVelocity, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

interface ScrollVelocityTextProps {
  text: string;
  baseVelocity?: number;
  className?: string;
}

function wrap(min: number, max: number, v: number) {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
}

/**
 * Texte géant qui défile horizontalement et accélère selon la vitesse de scroll.
 */
export function ScrollVelocityText({
  text,
  baseVelocity = -3,
  className = "",
}: ScrollVelocityTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-25, -75, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div className="flex" style={{ x }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="block pr-12 font-syne font-bold text-[14vw] leading-none tracking-tight">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
