import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels sont vos délais de réalisation ?",
    answer:
      "Les délais varient selon la complexité du projet. Un site vitrine prend généralement 2-4 semaines, une application mobile 2-4 mois, et un écosystème 360° de 4 à 8 mois. Nous établissons un planning détaillé dès le début du projet.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Nous utilisons les technologies les plus modernes et performantes : React, Next.js, React Native, Flutter pour le frontend, Node.js, Python pour le backend, et des solutions cloud comme AWS, Supabase et Firebase. Le choix dépend des besoins spécifiques de votre projet.",
  },
  {
    question: "Proposez-vous de la maintenance après la livraison ?",
    answer:
      "Oui, nous proposons des contrats de maintenance adaptés à chaque type de projet. Cela inclut les mises à jour de sécurité, les corrections de bugs, le monitoring des performances et le support technique prioritaire.",
  },
  {
    question: "Comment se déroule un projet avec IMPARTIAL ?",
    answer:
      "Notre processus se décompose en 5 phases : Discovery (compréhension de vos besoins), Design (maquettes et prototypes), Développement (réalisation technique), Tests (qualité et performance), et Déploiement (mise en production avec accompagnement).",
  },
  {
    question: "Puis-je modifier mon projet après la livraison ?",
    answer:
      "Absolument ! Nous vous livrons un code propre et documenté. Vous pouvez soit gérer les évolutions en interne, soit nous confier la maintenance et les évolutions via un contrat dédié.",
  },
  {
    question: "Travaillez-vous avec des clients internationaux ?",
    answer:
      "Oui, nous collaborons avec des clients dans toute la francophonie et à l'international. Nos équipes sont habituées au travail à distance avec des outils de collaboration modernes.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-24 bg-[#FAFAF7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="section-label justify-center mb-5">FAQ</div>
          <h2 className="font-syne font-bold text-[32px] md:text-[44px] leading-[1.15] text-[#1C1917] mb-5">
            Questions <span className="text-[#F59E0B]">Fréquentes</span>
          </h2>
          <p className="font-inter text-[#78716C] text-base md:text-lg leading-relaxed">
            Retrouvez les réponses aux questions les plus courantes sur nos services et notre façon de travailler.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-white rounded-[16px] border border-[#E7E5E4] px-6 data-[state=open]:border-[#F59E0B]/40 data-[state=open]:shadow-[0_8px_24px_rgba(245,158,11,0.08)] transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-syne font-semibold text-[#1C1917] py-5 hover:no-underline [&[data-state=open]>svg]:text-[#F59E0B]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#78716C] font-inter pb-5 leading-[1.7]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm font-inter text-[#78716C] mb-3">Vous avez une autre question ?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[#F59E0B] hover:text-[#D97706] font-medium font-inter transition-colors"
          >
            Contactez-nous directement
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
