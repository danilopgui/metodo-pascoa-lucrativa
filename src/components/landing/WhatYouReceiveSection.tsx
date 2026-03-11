import { BookOpen, ListChecks, TrendingUp, Megaphone, Calculator, Gift } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const items = [
  { icon: BookOpen, text: "Ebook completo com 50+ receitas lucrativas", value: "R$47" },
  { icon: ListChecks, text: "Passo a passo detalhado de produção com fotos", value: "R$27" },
  { icon: TrendingUp, text: "Guia de vendas e precificação inteligente", value: "R$37" },
  { icon: Megaphone, text: "Estratégias de marketing para WhatsApp e Instagram", value: "R$47" },
  { icon: Calculator, text: "Planilha de cálculo de lucro automática", value: "R$17" },
];

const WhatYouReceiveSection = () => {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="container max-w-3xl space-y-10">
        <div className="text-center">
          <span className="inline-block bg-gold/10 text-gold text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <Gift className="w-3.5 h-3.5 inline mr-1.5" />
            Valor total: R$175,00
          </span>
          <h2 className="text-2xl md:text-4xl font-serif text-foreground">
            Tudo Isso por Apenas{" "}
            <span className="text-gradient-gold">R$19,90</span>
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border group hover:border-gold/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <item.icon className="w-5 h-5 text-chocolate-dark" />
              </div>
              <span className="font-medium text-foreground flex-1">{item.text}</span>
              <span className="text-sm text-muted-foreground line-through">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton onClick={() => document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" })}>
            QUERO TUDO ISSO POR R$19,90
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default WhatYouReceiveSection;
