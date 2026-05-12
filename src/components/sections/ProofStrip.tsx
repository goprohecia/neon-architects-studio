import { Marquee } from "@/components/wow";

const proofs = [
  "12+ projets livrés",
  "100% dans les délais",
  "3 pays clients",
  "5★ satisfaction",
  "React · Next · TypeScript",
  "Figma · Framer Motion",
  "Supabase · Vercel",
  "SEO · Core Web Vitals",
];

export function ProofStrip() {
  return (
    <section className="bg-[#1C1917] border-y border-[#2C2917] py-6 overflow-hidden">
      <Marquee speed={40}>
        {proofs.map((p, i) => (
          <div key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="font-syne font-semibold text-base md:text-lg text-[#FAFAF7] uppercase tracking-wider">
              {p}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" aria-hidden />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
