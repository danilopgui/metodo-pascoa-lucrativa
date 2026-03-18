import flavorsImage from "@/assets/flavors.jpg";
import CTAButton from "@/components/CTAButton";
import ebookPreview3 from "@/assets/ebook-preview-3.png";

const flavors = [
  "Brigadeiro", "Leite Ninho", "Oreo", "Kinder Bueno",
  "Brownie com Nutella", "Sonho de Valsa", "4 Leites", "Red Velvet",
  "Limão Siciliano", "Raffaello", "Ganache de Maracujá", "Suflair"
];

const FlavorsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-chocolate text-primary-foreground">
      <div className="container max-w-4xl space-y-10">
        <div className="text-center">
          <span className="inline-block bg-gold/20 text-gold text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            🍫 Os mais pedidos
          </span>
          <h2 className="text-2xl md:text-4xl font-serif">
            Sabores que <span className="text-gradient-gold">Seus Clientes Vão Implorar</span>
          </h2>
          <p className="text-gold-light/70 mt-3">12 receitas dos sabores mais vendidos do mercado</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-2xl scale-90" />
            <img
              src={flavorsImage}
              alt="Sabores de ovos de Páscoa artesanais"
              className="rounded-2xl shadow-2xl w-full relative z-10"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
            {flavors.map((flavor, i) => (
              <div key={i} className="flex items-center gap-2 bg-chocolate-light/20 backdrop-blur-sm px-4 py-3 rounded-xl border border-gold/15 hover:border-gold/40 transition-colors">
                <span className="text-gold text-base">🍫</span>
                <span className="text-sm font-medium text-gold-light">{flavor}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-2">
          <CTAButton onClick={() => document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" })}>
            QUERO APRENDER TODAS AS RECEITAS
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;
