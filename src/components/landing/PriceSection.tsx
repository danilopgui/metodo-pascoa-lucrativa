import CTAButton from "@/components/CTAButton";

const PriceSection = () => {
  return (
    <section id="preco" className="py-16 md:py-24 bg-gradient-chocolate text-primary-foreground">
      <div className="container max-w-lg text-center space-y-8">
        <h2 className="text-2xl md:text-4xl font-serif">
          Comece Agora por um Valor <span className="text-gradient-gold">Especial</span>
        </h2>

        <div className="bg-chocolate-light/30 backdrop-blur-sm border border-gold/30 rounded-xl p-8 space-y-4">
          <p className="text-gold-light/60 text-sm">De <span className="line-through">R$97,00</span></p>
          <p className="text-sm text-gold-light/70">Por apenas</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-lg text-gold-light/70">R$</span>
            <span className="text-6xl md:text-7xl font-bold text-gradient-gold font-serif">19</span>
            <span className="text-2xl text-gradient-gold font-bold">,90</span>
          </div>
          <p className="text-gold-light/50 text-xs">Pagamento único · Acesso imediato</p>

          <div className="pt-4">
            <CTAButton size="lg">
              QUERO COMEÇAR AGORA
            </CTAButton>
          </div>

          <p className="text-gold-light/40 text-xs flex items-center justify-center gap-1">
            🔒 Compra 100% segura
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
