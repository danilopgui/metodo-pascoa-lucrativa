import ebookMockup from "@/assets/ebook-mockup.png";
import CTAButton from "@/components/CTAButton";

const ProductSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center relative">
            {/* Glow behind mockup */}
            <div className="absolute inset-0 bg-gold/10 rounded-full blur-3xl scale-75" />
            <img
              src={ebookMockup}
              alt="Ebook Método Páscoa Lucrativa"
              className="w-64 md:w-80 drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="flex-1 space-y-5 text-center md:text-left">
            <span className="inline-block bg-gold/10 text-gold text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              📘 Seu guia completo
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-foreground">
              Método Páscoa Lucrativa
            </h2>
            <p className="text-muted-foreground text-lg">
              O guia definitivo para iniciantes que querem transformar chocolate em dinheiro de verdade.
              Passo a passo, sem complicação.
            </p>
            <ul className="space-y-3 text-foreground text-left">
              {[
                "Receitas testadas por +1.200 alunas",
                "Passo a passo com fotos detalhadas",
                "Ideal para quem nunca fez um ovo sequer",
                "Estratégias de venda que realmente funcionam",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm flex-shrink-0">✓</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <CTAButton onClick={() => document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" })}>
                QUERO MEU EXEMPLAR
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
