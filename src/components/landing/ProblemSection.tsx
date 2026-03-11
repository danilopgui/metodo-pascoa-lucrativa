import { AlertTriangle, TrendingDown, HelpCircle } from "lucide-react";

const painPoints = [
  { icon: TrendingDown, text: "O custo de vida não para de subir e o salário não acompanha" },
  { icon: AlertTriangle, text: "Falta de oportunidades para ganhar uma renda extra de verdade" },
  { icon: HelpCircle, text: "Muitas pessoas perdem a melhor época do ano por não saber como começar" },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl text-center space-y-8">
        <h2 className="text-2xl md:text-4xl font-serif text-foreground">
          A Páscoa é Uma das Épocas <span className="text-gradient-gold">Mais Lucrativas</span> do Ano
        </h2>
        <p className="text-muted-foreground text-lg">
          Mas a maioria das pessoas deixa essa oportunidade passar por não saber como transformá-la em dinheiro real.
        </p>

        <div className="grid gap-4 md:gap-6 text-left">
          {painPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border">
              <point.icon className="w-6 h-6 text-cta flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-medium">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
