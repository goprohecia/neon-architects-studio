import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Curseur custom ambré avec trail.
 * Désactivé sur tactile + sous 1024px.
 * Détecte les éléments interactifs (a, button, [data-cursor]).
 */
export function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.3 });

  const trailX = useSpring(x, { stiffness: 80, damping: 20, mass: 0.6 });
  const trailY = useSpring(y, { stiffness: 80, damping: 20, mass: 0.6 });

  const [variant, setVariant] = useState<"default" | "hover">("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.innerWidth < 1024) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a,button,[role="button"],[data-cursor]');
      setVariant(interactive ? "hover" : "default");
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Trail / halo */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full mix-blend-multiply"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: variant === "hover" ? 56 : 32,
          height: variant === "hover" ? 56 : 32,
          background:
            "radial-gradient(circle, rgba(245,158,11,0.35) 0%, rgba(245,158,11,0) 70%)",
          transition: "width 0.25s ease, height 0.25s ease",
        }}
      />
      {/* Dot principal */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#1C1917]"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          width: variant === "hover" ? 14 : 8,
          height: variant === "hover" ? 14 : 8,
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
}
