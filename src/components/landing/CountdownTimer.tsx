import { useState, useEffect } from "react";

const CountdownTimer = ({ compact = false }: { compact?: boolean }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const stored = localStorage.getItem("pascoa-countdown-end");
    if (stored) {
      const diff = Math.max(0, Math.floor((parseInt(stored) - Date.now()) / 1000));
      if (diff > 0) return diff;
    }
    // Set 2 hours from now
    const end = Date.now() + 2 * 60 * 60 * 1000;
    localStorage.setItem("pascoa-countdown-end", end.toString());
    return 2 * 60 * 60;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          // Reset timer
          const end = Date.now() + 2 * 60 * 60 * 1000;
          localStorage.setItem("pascoa-countdown-end", end.toString());
          return 2 * 60 * 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (n: number) => n.toString().padStart(2, "0");

  if (compact) {
    return (
      <span className="font-bold text-cta tabular-nums">
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </span>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3">
      {[
        { value: pad(hours), label: "Horas" },
        { value: pad(minutes), label: "Min" },
        { value: pad(seconds), label: "Seg" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-chocolate-dark/90 border border-gold/30 rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-gradient-gold tabular-nums font-serif">
              {item.value}
            </span>
          </div>
          <span className="text-[10px] md:text-xs text-gold-light/50 mt-1 uppercase tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
