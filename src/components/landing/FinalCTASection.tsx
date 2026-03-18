import CTAButton from "@/components/CTAButton";
import CountdownTimer from "@/components/landing/CountdownTimer";
import ebookPreview5 from "@/assets/ebook-preview-5.jpg";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-chocolate text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(40_70%_50%/0.05)_0%,transparent_70%)]" />

      <div className="container max-w-2xl text-center space-y-6 relative z-10">
        <h2 className="text-2xl md:text-4xl font-serif">
          Daqui a Uma Semana, Você Vai Desejar Ter{" "}
          <span className="text-gradient-gold">Começado Hoje</span>
        </h2>
        <p className="text-gold-light/80 text-lg max-w-xl mx-auto">
          Enquanto você pensa, outras pessoas já estão produzindo e vendendo.
          A Páscoa não espera. <strong className="text-gold">Comece agora.</strong>
        </p>

        <div className="py-2">
          <CountdownTimer />
        </div>

        <div className="pt-2 space-y-3">
          <CTAButton size="lg" onClick={() => document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" })}>
            🛒 SIM, QUERO COMEÇAR AGORA — R$19,90
          </CTAButton>
          <p className="text-gold-light/40 text-sm">
            Por apenas R$19,90 · Acesso imediato · Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
