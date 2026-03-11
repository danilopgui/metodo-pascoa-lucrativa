import { BookOpen, ListChecks, TrendingUp, Megaphone, Calculator } from "lucide-react";

const items = [
  { icon: BookOpen, text: "Ebook completo com todas as receitas" },
  { icon: ListChecks, text: "Passo a passo detalhado de produção" },
  { icon: TrendingUp, text: "Dicas de vendas e precificação" },
  { icon: Megaphone, text: "Estratégias de marketing digital" },
  { icon: Calculator, text: "Método de cálculo de lucro" },
];

const WhatYouReceiveSection = () => {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="container max-w-3xl space-y-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-serif text-foreground">
            Tudo Que Você <span className="text-gradient-gold">Vai Receber</span>
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-chocolate-dark" />
              </div>
              <span className="font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouReceiveSection;
