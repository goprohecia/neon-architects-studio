import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}

/**
 * Card 3D qui réagit au mouvement souris (tilt + glare ambré).
 * Désactivé sous 1024px.
 */
export function TiltCard({ children, className = "", max = 8, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 200, damping: 20 });

  const glareX = useTransform(mx, (v) => `${v * 100}%`);
  const glareY = useTransform(my, (v) => `${v * 100}%`);
  const glareBg = useMotionTemplate`radial-gradient(380px circle at ${glareX} ${glareY}, rgba(255,235,180,0.45), transparent 55%)`;

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    if (window.innerWidth < 1024) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className={`relative will-change-transform ${className}`}
    >
      <div style={{ transform: "translateZ(0)" }}>{children}</div>
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  );
}
