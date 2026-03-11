import kitImage from "@/assets/kit-criativos.png";

const OrderBumpSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="bg-card border-2 border-gold/40 rounded-2xl p-8 space-y-6 relative overflow-hidden">
          {/* Corner ribbon */}
          <div className="absolute top-4 -right-8 bg-cta text-cta-foreground text-xs font-bold px-10 py-1.5 rotate-45 shadow-cta">
            BÔNUS
          </div>

          <div className="text-center">
            <span className="inline-block bg-gradient-gold text-chocolate-dark text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider">
              🎁 Oferta Especial — Incluso Hoje
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mt-4">
              Kit Criativos para Vender Ovos de Páscoa
            </h2>
            <p className="text-muted-foreground mt-2">
              Artes profissionais prontas para você usar e <strong className="text-foreground">vender 3x mais rápido</strong>
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-gold/10 rounded-xl blur-2xl scale-90" />
              <img
                src={kitImage}
                alt="Kit Criativos para Instagram e WhatsApp"
                className="w-full rounded-xl relative z-10"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-3">
              <p className="text-foreground font-semibold">✨ Inclui artes prontas para:</p>
              {[
                "Posts para Feed do Instagram",
                "Stories para Instagram",
                "Status para WhatsApp",
                "Posts de promoção e oferta",
                "Cardápios prontos e editáveis",
                "Posts de urgência e escassez",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs flex-shrink-0">✓</span>
                  {item}
                </div>
              ))}
              <div className="bg-gold/5 border border-gold/20 rounded-lg p-3 mt-4">
                <p className="text-sm text-foreground font-medium">
                  💡 Sem precisar ser designer — é só baixar e postar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderBumpSection;
