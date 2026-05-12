import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // seconds per loop
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}

/**
 * Marquee infini (fluide, GPU-friendly).
 * Duplique le contenu deux fois pour boucle invisible.
 */
export function Marquee({
  children,
  speed = 30,
  reverse = false,
  className = "",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={`group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
    >
      <div
        className="flex shrink-0 items-center gap-12 pr-12"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
          animationPlayState: "running",
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) (e.currentTarget.style.animationPlayState = "paused");
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) (e.currentTarget.style.animationPlayState = "running");
        }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-12 pr-12"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {children}
      </div>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
