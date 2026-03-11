import { useEffect, useState } from "react";
import { Users, Star, ShieldCheck } from "lucide-react";

const SocialProofBar = () => {
  const [count, setCount] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm">
      <div className="flex items-center gap-1.5 text-gold-light/80">
        <Users className="w-4 h-4 text-gold" />
        <span><strong className="text-gold">{count.toLocaleString("pt-BR")}+</strong> alunas já compraram</span>
      </div>
      <div className="flex items-center gap-1.5 text-gold-light/80">
        <Star className="w-4 h-4 text-gold fill-gold" />
        <span><strong className="text-gold">4.9</strong> de avaliação</span>
      </div>
      <div className="flex items-center gap-1.5 text-gold-light/80">
        <ShieldCheck className="w-4 h-4 text-gold" />
        <span>Compra <strong className="text-gold">100% segura</strong></span>
      </div>
    </div>
  );
};

export default SocialProofBar;
