import { AlertTriangle, TrendingDown, HelpCircle, XCircle } from "lucide-react";

const painPoints = [
  { icon: TrendingDown, text: "O custo de vida dispara e o salário não acompanha — cada mês fica mais apertado" },
  { icon: AlertTriangle, text: "Você busca uma renda extra, mas não encontra nada que funcione de verdade" },
  { icon: HelpCircle, text: "A Páscoa é a melhor época do ano para faturar, mas você não sabe como começar" },
  { icon: XCircle, text: "Medo de investir e perder dinheiro sem ter um método comprovado" },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl text-center space-y-8">
        <span className="inline-block bg-destructive/10 text-destructive text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Você se identifica?
        </span>
        <h2 className="text-2xl md:text-4xl font-serif text-foreground">
          Enquanto Você Espera, Outras Pessoas Estão{" "}
          <span className="text-gradient-gold">Lucrando com a Páscoa</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          A maioria das pessoas deixa essa oportunidade de ouro passar. Não cometa o mesmo erro.
        </p>

        <div className="grid gap-4 text-left">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-card p-5 rounded-lg border border-destructive/20 hover:border-destructive/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-foreground font-medium">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
