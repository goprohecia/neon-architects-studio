import { Layout } from "@/components/Layout";
import { FAQ } from "@/components/FAQ";
import { ScrollVelocityText } from "@/components/wow";
import {
  HeroPremium,
  ProofStrip,
  OffresSection,
  ServicesSection,
  RealisationsSection,
  MethodeSection,
  PrincipesSection,
  CTAFinal,
} from "@/components/sections";

const Index = () => {
  return (
    <Layout>
      <HeroPremium />
      <ProofStrip />
      <OffresSection />
      <ServicesSection />
      <RealisationsSection />

      {/* Velocity divider */}
      <section aria-hidden className="bg-[#FAFAF7] py-10 md:py-14 overflow-hidden">
        <ScrollVelocityText
          text="Design · Code · Impact · Studio · "
          baseVelocity={-2}
          className="text-[#1C1917]/10"
        />
      </section>

      <MethodeSection />
      <PrincipesSection />
      <FAQ />
      <CTAFinal />
    </Layout>
  );
};

export default Index;
