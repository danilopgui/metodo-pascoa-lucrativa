import flavorsImage from "@/assets/flavors.jpg";

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
          <h2 className="text-2xl md:text-4xl font-serif">
            Sabores que <span className="text-gradient-gold">Mais Vendem</span>
          </h2>
          <p className="text-gold-light/70 mt-3">Receitas dos sabores mais pedidos pelos clientes</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img
              src={flavorsImage}
              alt="Sabores de ovos de Páscoa artesanais"
              className="rounded-lg shadow-2xl w-full"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
            {flavors.map((flavor, i) => (
              <div key={i} className="flex items-center gap-2 bg-chocolate-light/30 backdrop-blur-sm px-4 py-3 rounded-lg border border-gold/20">
                <span className="text-gold text-lg">🍫</span>
                <span className="text-sm font-medium text-gold-light">{flavor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;
