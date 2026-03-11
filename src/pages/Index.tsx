import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import OpportunitySection from "@/components/landing/OpportunitySection";
import ProductSection from "@/components/landing/ProductSection";
import WhatYouLearnSection from "@/components/landing/WhatYouLearnSection";
import FlavorsSection from "@/components/landing/FlavorsSection";
import TransformationSection from "@/components/landing/TransformationSection";
import WhatYouReceiveSection from "@/components/landing/WhatYouReceiveSection";
import PriceSection from "@/components/landing/PriceSection";
import OrderBumpSection from "@/components/landing/OrderBumpSection";
import UrgencySection from "@/components/landing/UrgencySection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <OpportunitySection />
      <ProductSection />
      <WhatYouLearnSection />
      <FlavorsSection />
      <TransformationSection />
      <WhatYouReceiveSection />
      <PriceSection />
      <OrderBumpSection />
      <UrgencySection />
      <GuaranteeSection />
      <FinalCTASection />

      {/* Footer */}
      <footer className="py-8 bg-chocolate-dark text-gold-light/40 text-center text-xs">
        <div className="container space-y-2">
          <p>© {new Date().getFullYear()} Método Páscoa Lucrativa. Todos os direitos reservados.</p>
          <p>Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho não é garantia de resultado futuro.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
