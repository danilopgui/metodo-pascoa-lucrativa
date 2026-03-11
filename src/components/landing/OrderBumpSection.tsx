import kitImage from "@/assets/kit-criativos.png";

const OrderBumpSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="bg-card border-2 border-gold/40 rounded-xl p-8 space-y-6">
          <div className="text-center">
            <span className="bg-gradient-gold text-chocolate-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Oferta Especial
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mt-4">
              Kit Criativos para Vender Ovos de Páscoa
            </h2>
            <p className="text-muted-foreground mt-2">
              Imagens prontas para você usar e vender mais rápido
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={kitImage}
                alt="Kit Criativos para Instagram e WhatsApp"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-3">
              <p className="text-foreground font-medium">Inclui artes prontas para:</p>
              {[
                "Posts para Feed do Instagram",
                "Stories para Instagram",
                "Status para WhatsApp",
                "Posts de promoção",
                "Cardápios prontos",
                "Posts de urgência e escassez",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="text-gold">✓</span> {item}
                </div>
              ))}
              <p className="text-muted-foreground text-sm pt-2">
                Com essas artes, você vai vender muito mais rápido sem precisar ser designer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderBumpSection;
