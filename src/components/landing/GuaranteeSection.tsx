import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-2xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mx-auto">
          <ShieldCheck className="w-10 h-10 text-gold" />
        </div>
        <h2 className="text-2xl md:text-3xl font-serif text-foreground">
          Garantia Incondicional de <span className="text-gradient-gold">7 Dias</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          Compre agora, experimente o método completo. Se em até 7 dias você sentir que não é para você,
          devolvemos <strong className="text-foreground">100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
        </p>
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-6 py-3">
          <ShieldCheck className="w-5 h-5 text-gold" />
          <span className="text-foreground font-semibold">Risco ZERO para você</span>
        </div>
        <p className="text-muted-foreground text-sm">
          Ou seja: você pode testar tudo e, se não gostar, recebe tudo de volta. O risco é todo nosso.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
