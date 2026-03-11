import heroImage from "@/assets/hero-eggs.jpg";
import CTAButton from "@/components/CTAButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-chocolate overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ovos de Páscoa artesanais gourmet"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate-dark/80 via-chocolate/60 to-chocolate-dark/90" />
      </div>

      <div className="container relative z-10 py-20 md:py-32 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-block text-gradient-gold text-sm md:text-base font-semibold tracking-widest uppercase">
            🐣 Método Páscoa Lucrativa
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-primary-foreground">
            Aprenda a Fazer Ovos de Páscoa Artesanais e{" "}
            <span className="text-gradient-gold">Fature de R$1.000 a R$5.000</span>{" "}
            em Poucas Semanas
          </h1>

          <p className="text-lg md:text-xl text-gold-light/90 max-w-2xl mx-auto">
            Mesmo que você nunca tenha pisado numa cozinha profissional. Um guia completo,
            passo a passo, para iniciantes começarem a lucrar nesta Páscoa.
          </p>

          <div className="pt-4">
            <CTAButton size="lg" onClick={() => document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" })}>
              QUERO COMEÇAR AGORA
            </CTAButton>
          </div>

          <p className="text-gold-light/60 text-sm">
            ⚡ Acesso imediato após a compra
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
