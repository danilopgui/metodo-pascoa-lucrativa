import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Aprenda as Receitas", desc: "Siga o passo a passo simples e ilustrado do ebook", emoji: "📖" },
  { num: "02", title: "Produza os Ovos", desc: "Monte ovos com acabamento profissional na sua cozinha", emoji: "🥚" },
  { num: "03", title: "Divulgue e Venda", desc: "Use as estratégias de marketing prontas para WhatsApp e Instagram", emoji: "📱" },
  { num: "04", title: "Lucre Alto!", desc: "Receba encomendas e fature de R$1.000 a R$5.000", emoji: "💰" },
];

const TransformationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl space-y-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-serif text-foreground">
            4 Passos para Sair do{" "}
            <span className="text-gradient-gold">Zero ao Lucro</span>
          </h2>
          <p className="text-muted-foreground mt-3">Simples, direto e sem enrolação</p>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border hover:border-gold/30 hover:shadow-gold/10 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform">
                {step.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gold uppercase tracking-wider">Passo {step.num}</span>
                  {i < steps.length - 1 && <ArrowRight className="w-3 h-3 text-gold/40" />}
                </div>
                <h3 className="font-semibold text-foreground text-lg mt-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
