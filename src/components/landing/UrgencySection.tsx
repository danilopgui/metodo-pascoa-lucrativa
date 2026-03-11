import { Clock } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const UrgencySection = () => {
  return (
    <section className="py-16 md:py-20 bg-cream-dark">
      <div className="container max-w-2xl text-center space-y-6">
        <Clock className="w-12 h-12 text-cta mx-auto" />
        <h2 className="text-2xl md:text-3xl font-serif text-foreground">
          A Páscoa Não Espera
        </h2>
        <p className="text-muted-foreground text-lg">
          A Páscoa é sazonal. Cada dia que passa é um dia a menos para você se preparar,
          produzir e vender. Não deixe essa oportunidade escapar — comece hoje mesmo.
        </p>
        <CTAButton onClick={() => document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" })}>
          QUERO GARANTIR MEU ACESSO
        </CTAButton>
      </div>
    </section>
  );
};

export default UrgencySection;
