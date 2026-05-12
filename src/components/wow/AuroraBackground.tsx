import { motion } from "framer-motion";

interface AuroraBackgroundProps {
  className?: string;
  intensity?: "subtle" | "normal" | "strong";
}

/**
 * Fond ambré animé "aurora" — gradients qui respirent.
 * Compose 3 blobs HSL (ambre / orange / ivoire) avec animation infinie.
 */
export function AuroraBackground({ className = "", intensity = "normal" }: AuroraBackgroundProps) {
  const opacityMap = { subtle: 0.4, normal: 0.7, strong: 1 } as const;
  const o = opacityMap[intensity];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden
      style={{ opacity: o }}
    >
      <motion.div
        className="absolute -top-1/3 -left-1/4 h-[60vw] w-[60vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.45) 0%, rgba(245,158,11,0) 60%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 80, -40, 0], y: [0, 40, -30, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[55vw] w-[55vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(234,88,12,0.35) 0%, rgba(234,88,12,0) 60%)",
          filter: "blur(50px)",
        }}
        animate={{ x: [0, -60, 30, 0], y: [0, -50, 30, 0], scale: [1, 1.15, 0.9, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 h-[40vw] w-[40vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(254,243,199,0.5) 0%, rgba(254,243,199,0) 60%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 40, -50, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
