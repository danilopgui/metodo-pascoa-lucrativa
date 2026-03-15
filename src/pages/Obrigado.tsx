import { useEffect } from "react";

export default function Obrigado() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Purchase", {
        value: 19.9,
        currency: "BRL",
      });
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>🎉 Compra confirmada!</h1>

      <p>Seu pagamento foi aprovado com sucesso.</p>

      <p>Clique no botão abaixo para acessar seu material.</p>

      <a
        href="/downloads/metodo-pascoa-lucrativa.pdf"
        style={{
          background: "#ffa200",
          padding: "15px 25px",
          borderRadius: "8px",
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Acessar o Método
      </a>
    </div>
  );
}
