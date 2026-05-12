import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { TiltCard } from "@/components/wow";
import wecloseImg from "@/assets/portfolio/weclose-logo.jpeg";
import altarysImg from "@/assets/portfolio/altarys-logo.png";
import propheciaImg from "@/assets/portfolio/prophecia-logo.jpeg";

const projects = [
  {
    title: "We Close Agency",
    objective: "Site vitrine premium pour agence de closers",
    role: "Design & Développement",
    result: "Expérience fluide et premium",
    image: wecloseImg,
    url: "/portfolio/weclose",
    externalUrl: "https://wecloseagency.fr/",
    tags: ["Design", "Développement"],
  },
  {
    title: "Altarys Group",
    objective: "Plateforme DeFi avec dashboard admin",
    role: "UI/UX & Développement",
    result: "Interface intuitive et scalable",
    image: altarysImg,
    url: "/portfolio/altarys",
    externalUrl: "https://altarys-group.fr/",
    tags: ["UI/UX", "Développement", "DeFi"],
  },
  {
    title: "Guardian Of Prophecia",
    objective: "Plateforme gaming avec rewards",
    role: "Design & Développement",
    result: "Communauté engagée",
    image: propheciaImg,
    url: "/portfolio/prophecia",
    externalUrl: "https://goprophecia.gg?inviteCode=YANNI-DZ94",
    tags: ["Design", "Développement", "Gaming"],
  },
];

export function RealisationsSection() {
  return (
    <section id="realisations" className="py-20 md:py-24 bg-[#FAFAF7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="section-label justify-center mb-5">RÉALISATIONS</div>
          <h2 className="font-syne font-bold text-[32px] md:text-[44px] leading-[1.15] text-[#1C1917] mb-5">
            Sélection de <span className="text-[#F59E0B]">projets.</span>
          </h2>
          <p className="font-inter text-[#78716C] text-base md:text-lg leading-relaxed">
            Quelques réalisations qui illustrent notre approche premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard max={6} className="h-full rounded-[20px]">
              <div className="group h-full bg-white rounded-[20px] border border-[#E7E5E4] overflow-hidden hover:border-[#F59E0B]/40 hover:shadow-[0_12px_40px_rgba(245,158,11,0.12)] transition-all duration-300">
                <div className="relative h-44 overflow-hidden bg-[#F5F0E8]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay clip-path reveal au hover */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold font-syne uppercase tracking-wider bg-[#FEF3C7] text-[#92400E] border border-[#F59E0B]/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-syne font-bold text-xl text-[#1C1917] mb-4">{p.title}</h3>

                  <dl className="space-y-2 mb-5 text-sm font-inter">
                    <div>
                      <dt className="text-[#A8A29E] inline">Objectif : </dt>
                      <dd className="text-[#1C1917] inline">{p.objective}</dd>
                    </div>
                    <div>
                      <dt className="text-[#A8A29E] inline">Rôle : </dt>
                      <dd className="text-[#1C1917] inline">{p.role}</dd>
                    </div>
                    <div>
                      <dt className="text-[#A8A29E] inline">Résultat : </dt>
                      <dd className="text-[#D97706] font-medium inline">{p.result}</dd>
                    </div>
                  </dl>

                  <div className="flex items-center gap-4 pt-4 border-t border-[#E7E5E4]">
                    <Link
                      to={p.url}
                      className="inline-flex items-center gap-1.5 text-sm font-medium font-inter text-[#F59E0B] hover:text-[#D97706]"
                    >
                      Voir le projet
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href={p.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-[#A8A29E] hover:text-[#1C1917] transition-colors"
                      aria-label={`Visiter ${p.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#1C1917] text-[#1C1917] font-medium font-inter hover:bg-[#1C1917] hover:text-[#FAFAF7] transition-colors"
          >
            Voir toutes nos réalisations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
