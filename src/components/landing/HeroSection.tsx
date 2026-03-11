import heroImage from "@/assets/hero-eggs.jpg";
import CTAButton from "@/components/CTAButton";
import SocialProofBar from "@/components/landing/SocialProofBar";
import CountdownTimer from "@/components/landing/CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-chocolate overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ovos de Páscoa artesanais gourmet"
          className="w-full h-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate-dark/90 via-chocolate/70 to-chocolate-dark/95" />
      </div>

      <div className="container relative z-10 py-16 md:py-28 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-cta/20 border border-cta/40 text-cta-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse-cta">
            🔥 Oferta expira em <CountdownTimer compact />
          </div>

          <span className="block text-gold-light/70 text-sm md:text-base font-semibold tracking-widest uppercase">
            🐣 Método Páscoa Lucrativa
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-primary-foreground">
            Transforme Sua Cozinha em Uma{" "}
            <span className="text-gradient-gold">Máquina de Lucro</span>{" "}
            Nesta Páscoa
          </h1>

          <p className="text-lg md:text-xl text-gold-light/90 max-w-2xl mx-auto leading-relaxed">
            Descubra o método comprovado que já ajudou <strong className="text-gold">+1.200 pessoas</strong> a
            faturar de <strong className="text-gold">R$1.000 a R$5.000</strong> vendendo
            ovos artesanais — mesmo sem experiência na cozinha.
          </p>

          <div className="pt-2">
            <CTAButton size="lg" onClick={() => document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" })}>
              🛒 QUERO COMEÇAR AGORA — R$19,90
            </CTAButton>
          </div>

          <p className="text-gold-light/50 text-xs">
            ⚡ Acesso imediato · Garantia de 7 dias · Pagamento seguro
          </p>

          <div className="pt-4">
            <SocialProofBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
