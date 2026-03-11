import ebookMockup from "@/assets/ebook-mockup.png";

const ProductSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center">
            <img
              src={ebookMockup}
              alt="Ebook Método Páscoa Lucrativa"
              className="w-64 md:w-80 drop-shadow-2xl"
              loading="lazy"
            />
          </div>
          <div className="flex-1 space-y-5 text-center md:text-left">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">
              Apresentando
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-foreground">
              Método Páscoa Lucrativa
            </h2>
            <p className="text-muted-foreground text-lg">
              Um guia prático e completo, criado para iniciantes que querem aprender
              a fazer ovos de Páscoa artesanais profissionais e transformar isso em
              uma fonte de renda real.
            </p>
            <ul className="space-y-2 text-foreground text-left">
              {["Receitas testadas e aprovadas", "Passo a passo com fotos", "Ideal para quem nunca fez antes"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-gold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
