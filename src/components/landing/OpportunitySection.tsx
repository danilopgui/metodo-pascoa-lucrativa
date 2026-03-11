import CTAButton from "@/components/CTAButton";

const OpportunitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-chocolate text-primary-foreground">
      <div className="container max-w-3xl text-center space-y-8">
        <h2 className="text-2xl md:text-4xl font-serif">
          E se Você Pudesse Faturar de{" "}
          <span className="text-gradient-gold">R$1.000 a R$5.000</span>{" "}
          em Poucas Semanas?
        </h2>
        <p className="text-gold-light/80 text-lg max-w-2xl mx-auto">
          Fazer e vender ovos de Páscoa artesanais é um dos negócios sazonais mais lucrativos do Brasil.
          Com receitas simples e ingredientes acessíveis, você pode começar com investimento mínimo
          e ter retorno rápido.
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[
            { number: "10x", label: "Retorno sobre investimento" },
            { number: "50+", label: "Receitas lucrativas" },
            { number: "R$5k", label: "Potencial de faturamento" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{stat.number}</div>
              <div className="text-xs md:text-sm text-gold-light/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <CTAButton onClick={() => document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" })}>
          QUERO COMEÇAR AGORA
        </CTAButton>
      </div>
    </section>
  );
};

export default OpportunitySection;
