import CTAButton from "@/components/CTAButton";
import CountdownTimer from "@/components/landing/CountdownTimer";
import { ShieldCheck, Zap, Gift } from "lucide-react";

const bonuses = [
  "Ebook completo com 50+ receitas",
  "Guia de precificação e lucro",
  "Estratégias de venda para WhatsApp",
  "Guia de fotos que vendem",
  "Acesso vitalício",
];

const PriceSection = () => {
  return (
    <section id="preco" className="py-16 md:py-24 bg-gradient-chocolate text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-lg text-center space-y-8 relative z-10">
        {/* Urgency banner */}
        <div className="bg-cta/20 border border-cta/30 rounded-xl p-4 space-y-2">
          <p className="text-cta-foreground font-bold text-sm flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-cta" />
            ⏰ Oferta por tempo limitado
          </p>
          <CountdownTimer />
        </div>

        <h2 className="text-2xl md:text-4xl font-serif">
          Invista Menos que um Ovo de Supermercado e{" "}
          <span className="text-gradient-gold">Comece a Lucrar</span>
        </h2>

        <div className="bg-chocolate-light/20 backdrop-blur-sm border-2 border-gold/40 rounded-2xl p-8 space-y-5 relative">
          {/* Popular badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-cta text-cta-foreground text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider shadow-cta">
              🔥 Mais vendido
            </span>
          </div>

          {/* Bonus stack */}
          <div className="text-left space-y-2 pt-4">
            <p className="text-gold-light/60 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <Gift className="w-3.5 h-3.5" /> Tudo que está incluído:
            </p>
            {bonuses.map((bonus, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gold-light/80">
                <span className="text-gold">✓</span> {bonus}
              </div>
            ))}
          </div>

          <div className="border-t border-gold/20 pt-5 space-y-2">
            <p className="text-gold-light/50 text-sm">De <span className="line-through text-destructive/70">R$97,00</span></p>
            <p className="text-sm text-gold-light/70">Por apenas</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-lg text-gold-light/70">R$</span>
              <span className="text-6xl md:text-7xl font-bold text-gradient-gold font-serif">19</span>
              <span className="text-2xl text-gradient-gold font-bold">,90</span>
            </div>
            <p className="text-gold-light/40 text-xs">Pagamento único · Acesso imediato e vitalício</p>
          </div>

          <div className="pt-2 space-y-3">
            <CTAButton size="lg" className="w-full">
              🛒 QUERO COMEÇAR AGORA — R$19,90
            </CTAButton>
            <div className="flex items-center justify-center gap-4 text-[11px] text-gold-light/40">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> Compra segura</span>
              <span>💳 Cartão, PIX ou boleto</span>
            </div>
          </div>
        </div>

        <p className="text-gold-light/50 text-sm">
          🔒 Satisfação garantida ou seu dinheiro de volta em 7 dias
        </p>
      </div>
    </section>
  );
};

export default PriceSection;
