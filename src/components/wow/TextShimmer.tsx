import { ReactNode } from "react";

interface TextShimmerProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

/**
 * Texte avec animation shimmer (gradient ambre qui défile).
 * Utilise le clip-text pour un effet métallique.
 */
export function TextShimmer({ children, className = "", duration = 4 }: TextShimmerProps) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(110deg, #F59E0B 30%, #FCD34D 45%, #FFFFFF 50%, #FCD34D 55%, #F59E0B 70%)",
        backgroundSize: "300% 100%",
        animation: `text-shimmer ${duration}s linear infinite`,
      }}
    >
      {children}
      <style>{`
        @keyframes text-shimmer {
          0% { background-position: 200% 0%; }
          100% { background-position: -200% 0%; }
        }
      `}</style>
    </span>
  );
}
