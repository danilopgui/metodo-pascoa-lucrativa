import {
  BookOpen, Camera, Calculator, MessageCircle, Instagram, ChefHat, LayoutList
} from "lucide-react";

const modules = [
  { icon: BookOpen, title: "Receitas de Recheios Lucrativos", desc: "Os sabores que mais vendem e geram lucro" },
  { icon: ChefHat, title: "Montagem Profissional", desc: "Técnicas para ovos com acabamento perfeito" },
  { icon: LayoutList, title: "Como Montar o Cardápio", desc: "Organize seus produtos de forma estratégica" },
  { icon: Camera, title: "Fotos que Vendem", desc: "Tire fotos irresistíveis com o celular" },
  { icon: Calculator, title: "Cálculo de Lucro", desc: "Saiba exatamente quanto você vai ganhar" },
  { icon: MessageCircle, title: "Vendas pelo WhatsApp", desc: "Scripts e estratégias para fechar vendas" },
  { icon: Instagram, title: "Vendas pelo Instagram", desc: "Crie conteúdo que atrai clientes" },
];

const WhatYouLearnSection = () => {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="container max-w-4xl space-y-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-serif text-foreground">
            O Que Você Vai <span className="text-gradient-gold">Aprender</span>
          </h2>
          <p className="text-muted-foreground mt-3">Do zero à primeira venda</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {modules.map((mod, i) => (
            <div key={i} className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border hover:shadow-gold/10 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                <mod.icon className="w-5 h-5 text-chocolate-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{mod.title}</h3>
                <p className="text-sm text-muted-foreground">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
