import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function CTAFinal() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAFAF7]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl mx-auto"
        >
          <div
            className="relative bg-[#1C1917] rounded-[28px] p-10 md:p-16 text-center overflow-hidden"
            style={{
              borderTop: "3px solid #F59E0B",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.18) 0%, transparent 50%)",
              }}
            />

            <div className="relative">
              <h2 className="font-syne font-bold text-[28px] md:text-[42px] leading-[1.15] text-white mb-5">
                Prêt à rendre votre produit{" "}
                <span className="text-[#F59E0B]">inoubliable ?</span>
              </h2>
              <p className="font-inter text-[#A8A29E] text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                On vous répond sous 24–48h avec une proposition claire et sans engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://calendly.com/yannis-bezriche/impartial-games"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-[#1C1917] font-semibold font-inter transition-all shadow-[0_4px_20px_rgba(245,158,11,0.35)] hover:shadow-[0_10px_30px_rgba(245,158,11,0.5)] hover:-translate-y-0.5"
                >
                  Planifier un appel
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white text-white font-medium font-inter hover:bg-white hover:text-[#1C1917] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Écrire un message
                </Link>
              </div>

              <div className="mt-10 pt-6 border-t border-[#2C2917]">
                <a
                  href="mailto:studio@impartialgames.com"
                  className="text-sm font-inter text-[#78716C] hover:text-[#F59E0B] transition-colors"
                >
                  studio@impartialgames.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
