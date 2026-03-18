import CTAButton from "@/components/CTAButton";
import ebookPreview4 from "@/assets/ebook-preview-4.jpg";

const stats = [
  { number: "10x", label: "Retorno sobre o investimento inicial" },
  { number: "50+", label: "Receitas testadas e lucrativas" },
  { number: "R$5k", label: "Potencial de faturamento sazonal" },
];

const OpportunitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-chocolate text-primary-foreground relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-3xl text-center space-y-8 relative z-10">
        <span className="inline-block bg-gold/20 text-gold text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          💰 Oportunidade real
        </span>

        <h2 className="text-2xl md:text-4xl font-serif">
          E se Você Pudesse Faturar{" "}
          <span className="text-gradient-gold">R$1.000 a R$5.000</span>{" "}
          nas Próximas Semanas?
        </h2>
        <p className="text-gold-light/80 text-lg max-w-2xl mx-auto">
          Fazer e vender ovos de Páscoa artesanais é um dos negócios sazonais <strong className="text-gold">mais lucrativos do Brasil</strong>.
          Investimento baixo, retorno rápido, e qualquer pessoa pode começar — mesmo sem experiência.
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto py-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center bg-chocolate-dark/50 border border-gold/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl md:text-3xl font-bold text-gradient-gold font-serif">{stat.number}</div>
              <div className="text-[11px] md:text-xs text-gold-light/60 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <img
            src={ebookPreview4}
            alt="Cardápio de ovos de colher para vender"
            className="w-full max-w-sm rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>

        <CTAButton onClick={() => document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" })}>
          QUERO GARANTIR MINHA VAGA
        </CTAButton>
      </div>
    </section>
  );
};

export default OpportunitySection;
