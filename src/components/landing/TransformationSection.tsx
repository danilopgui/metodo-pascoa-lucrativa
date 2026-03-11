const steps = [
  { num: "01", title: "Aprenda as Receitas", desc: "Siga o passo a passo simples do ebook" },
  { num: "02", title: "Produza os Ovos", desc: "Monte ovos profissionais na sua cozinha" },
  { num: "03", title: "Divulgue e Venda", desc: "Use as estratégias de marketing incluídas" },
  { num: "04", title: "Lucre!", desc: "Receba suas encomendas e fature alto" },
];

const TransformationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl space-y-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-serif text-foreground">
            Do Zero à <span className="text-gradient-gold">Primeira Venda</span>
          </h2>
          <p className="text-muted-foreground mt-3">Um caminho simples e direto para começar a lucrar</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-card p-6 rounded-lg border border-border">
              <span className="text-4xl font-bold text-gold/20 absolute top-3 right-4 font-serif">{step.num}</span>
              <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
