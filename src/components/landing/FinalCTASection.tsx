import CTAButton from "@/components/CTAButton";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-chocolate text-primary-foreground">
      <div className="container max-w-2xl text-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-serif">
          Sua Páscoa Lucrativa{" "}
          <span className="text-gradient-gold">Começa Agora</span>
        </h2>
        <p className="text-gold-light/80 text-lg max-w-xl mx-auto">
          Não deixe mais uma Páscoa passar sem aproveitar essa oportunidade.
          Comece hoje, siga o método, e transforme chocolate em dinheiro.
        </p>
        <div className="pt-4">
          <CTAButton size="lg" onClick={() => document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" })}>
            QUERO COMEÇAR AGORA
          </CTAButton>
        </div>
        <p className="text-gold-light/40 text-sm">
          Por apenas R$19,90 · Acesso imediato · Garantia de 7 dias
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
