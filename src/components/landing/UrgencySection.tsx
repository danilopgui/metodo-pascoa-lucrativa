import { Clock, AlertTriangle } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import CountdownTimer from "@/components/landing/CountdownTimer";

const UrgencySection = () => {
  return (
    <section className="py-16 md:py-20 bg-cream-dark">
      <div className="container max-w-2xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-bold">
          <AlertTriangle className="w-4 h-4" />
          Atenção: vagas limitadas
        </div>

        <h2 className="text-2xl md:text-3xl font-serif text-foreground">
          A Páscoa Não Espera — E Essa Oferta Também Não
        </h2>

        <p className="text-muted-foreground text-lg">
          A Páscoa é sazonal. <strong className="text-foreground">Cada dia que passa é um dia a menos</strong> para
          você se preparar, produzir e vender. Quem começa primeiro, vende mais.
        </p>

        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <p className="text-sm font-semibold text-foreground">⏰ Esta oferta expira em:</p>
          <CountdownTimer />
        </div>

        <CTAButton onClick={() => document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" })}>
          QUERO GARANTIR MEU ACESSO AGORA
        </CTAButton>

        <p className="text-muted-foreground text-xs">
          Depois da Páscoa, esse conteúdo não estará mais disponível por esse preço.
        </p>
      </div>
    </section>
  );
};

export default UrgencySection;
