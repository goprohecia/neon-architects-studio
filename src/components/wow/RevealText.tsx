import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  by?: "word" | "char";
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

const container: Variants = {
  hidden: {},
  show: (custom: number) => ({
    transition: { staggerChildren: custom, delayChildren: 0 },
  }),
};

const item: Variants = {
  hidden: { y: "120%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Reveal de texte au scroll, lettre par lettre ou mot par mot.
 * Pousse les éléments depuis le bas avec stagger.
 */
export function RevealText({
  children,
  className = "",
  delay = 0,
  stagger = 0.05,
  by = "word",
  as: Tag = "span",
}: RevealTextProps) {
  const parts = by === "word" ? children.split(" ") : children.split("");
  const MotionTag = motion(Tag) as React.ComponentType<{ children: ReactNode } & Record<string, unknown>>;

  return (
    <MotionTag
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
      custom={stagger}
      transition={{ delay }}
    >
      {parts.map((p, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={item} className="inline-block">
            {p}
            {by === "word" && i < parts.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
