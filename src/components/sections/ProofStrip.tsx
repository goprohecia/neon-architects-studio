import { motion } from "framer-motion";

const metrics = [
  { value: "12+", label: "Projets livrés" },
  { value: "100%", label: "Dans les délais" },
  { value: "3", label: "Pays clients" },
  { value: "5★", label: "Satisfaction" },
];

export function ProofStrip() {
  return (
    <section className="bg-[#F5F0E8] border-y border-[#E7E5E4] py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto items-center">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`text-center ${i > 0 ? "md:border-l md:border-[#E7E5E4]" : ""}`}
            >
              <div className="font-syne font-bold text-2xl md:text-[28px] text-[#1C1917] leading-tight">
                {m.value}
              </div>
              <div className="text-xs md:text-sm font-inter text-[#78716C] mt-1">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
