import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-2xl text-center space-y-6">
        <ShieldCheck className="w-16 h-16 text-gold mx-auto" />
        <h2 className="text-2xl md:text-3xl font-serif text-foreground">
          Garantia de 7 Dias
        </h2>
        <p className="text-muted-foreground text-lg">
          Se por qualquer motivo você não ficar satisfeito(a) com o conteúdo,
          basta solicitar o reembolso em até 7 dias e devolvemos 100% do seu dinheiro.
          Sem perguntas, sem burocracia.
        </p>
        <div className="inline-block bg-card border border-gold/30 rounded-lg px-6 py-3">
          <span className="text-foreground font-semibold">Risco zero para você</span>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
