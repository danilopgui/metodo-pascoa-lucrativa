import {
  BookOpen, Camera, Calculator, MessageCircle, Instagram, ChefHat, LayoutList
} from "lucide-react";
import ebookPreview2 from "@/assets/ebook-preview-2.png";

const modules = [
  { icon: BookOpen, title: "Receitas de Recheios Lucrativos", desc: "Os sabores que mais vendem e geram maior margem de lucro" },
  { icon: ChefHat, title: "Montagem Profissional", desc: "Técnicas para ovos com acabamento que impressiona" },
  { icon: LayoutList, title: "Cardápio Estratégico", desc: "Monte um cardápio irresistível que vende sozinho" },
  { icon: Camera, title: "Fotos que Vendem", desc: "Tire fotos profissionais apenas com o celular" },
  { icon: Calculator, title: "Cálculo de Lucro", desc: "Saiba exatamente quanto cobrar e quanto vai ganhar" },
  { icon: MessageCircle, title: "Vendas pelo WhatsApp", desc: "Scripts prontos para fechar vendas rapidamente" },
  { icon: Instagram, title: "Vendas pelo Instagram", desc: "Conteúdo pronto que atrai clientes todos os dias" },
];

const WhatYouLearnSection = () => {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="container max-w-4xl space-y-10">
        <div className="text-center">
          <span className="inline-block bg-gold/10 text-gold text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Conteúdo completo
          </span>
          <h2 className="text-2xl md:text-4xl font-serif text-foreground">
            Tudo Que Você Vai <span className="text-gradient-gold">Dominar</span>
          </h2>
          <p className="text-muted-foreground mt-3">7 módulos práticos — do zero à primeira venda</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {modules.map((mod, i) => (
            <div key={i} className="flex items-start gap-4 bg-card p-5 rounded-xl border border-border hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <mod.icon className="w-5 h-5 text-chocolate-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{mod.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <img
            src={ebookPreview2}
            alt="Passo a passo do ebook - tutorial e utensílios"
            className="w-full max-w-md rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
