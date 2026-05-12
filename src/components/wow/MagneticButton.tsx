import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef, MouseEvent, ElementType } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: ElementType;
  [key: string]: unknown;
}

/**
 * Bouton magnétique : suit le curseur dans un rayon limité.
 * Désactivé sur tactile (CSS pointer:fine).
 */
export function MagneticButton({
  children,
  className = "",
  strength = 0.4,
  as: Component = "button",
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent) => {
    if (!ref.current) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionComp = motion(Component as ElementType);

  return (
    <MotionComp
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
      {...rest}
    >
      {children}
    </MotionComp>
  );
}
