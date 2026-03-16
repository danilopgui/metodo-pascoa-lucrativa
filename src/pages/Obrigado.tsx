import { useEffect } from "react";
import { CheckCircle2, Mail, MessageCircle, ShieldCheck, Clock3 } from "lucide-react";

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
        background: "linear-gradient(180deg, #fff8ef 0%, #fff 100%)",
        fontFamily: "Arial, sans-serif",
        color: "#2b2b2b",
        padding: "32px 16px",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "24px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
            overflow: "hidden",
            border: "1px solid #f2e6d3",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #ffa200 0%, #ff8a00 100%)",
              color: "#fff",
              textAlign: "center",
              padding: "36px 24px",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 18px",
              }}
            >
              <CheckCircle2 size={40} />
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "34px",
                lineHeight: 1.1,
                fontWeight: 800,
              }}
            >
              Compra confirmada!
            </h1>

            <p
              style={{
                margin: "14px auto 0",
                maxWidth: "560px",
                fontSize: "17px",
                lineHeight: 1.6,
                opacity: 0.96,
              }}
            >
              Parabéns pela sua compra. Seu acesso ao <strong>Método Páscoa Lucrativa</strong> e aos materiais adquiridos está sendo enviado automaticamente.
            </p>
          </div>

          <div style={{ padding: "32px 24px" }}>
            <div
              style={{
                background: "#fffaf2",
                border: "1px solid #f4dfb7",
                borderRadius: "18px",
                padding: "20px",
                marginBottom: "24px",
              }}
            >
              <h2
                style={{
                  margin: "0 0 14px",
                  fontSize: "22px",
                  color: "#5c2b00",
                }}
              >
                O que acontece agora
              </h2>

              <div
                style={{
                  display: "grid",
                  gap: "14px",
                }}
              >
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <Mail size={20} color="#ff9800" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Verifique seu e-mail</strong>
                    <div style={{ color: "#555", marginTop: "4px", lineHeight: 1.6 }}>
                      O acesso ao seu conteúdo foi enviado para o e-mail informado na compra.
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <MessageCircle size={20} color="#ff9800" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Verifique seu WhatsApp</strong>
                    <div style={{ color: "#555", marginTop: "4px", lineHeight: 1.6 }}>
                      Você também poderá receber as instruções de acesso diretamente no WhatsApp cadastrado.
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <Clock3 size={20} color="#ff9800" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Aguarde alguns instantes</strong>
                    <div style={{ color: "#555", marginTop: "4px", lineHeight: 1.6 }}>
                      Em alguns casos, o envio pode levar até 2 minutos para ser concluído.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #ececec",
                borderRadius: "18px",
                padding: "20px",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "20px",
                  color: "#222",
                }}
              >
                Não encontrou o acesso?
              </h3>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: "18px",
                  color: "#555",
                  lineHeight: 1.8,
                }}
              >
                <li>Confira a caixa de spam ou promoções do seu e-mail.</li>
                <li>Verifique se o número e o e-mail informados na compra estão corretos.</li>
                <li>Aguarde até 2 minutos para o envio automático ser concluído.</li>
              </ul>
            </div>

            <div
              style={{
                background: "#f9fafb",
                border: "1px solid #ececec",
                borderRadius: "18px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "8px",
                  alignItems: "center",
                  marginBottom: "10px",
                  color: "#198754",
                  fontWeight: 700,
                }}
              >
                <ShieldCheck size={18} />
                Pagamento confirmado com segurança
              </div>

              <p
                style={{
                  margin: 0,
                  color: "#666",
                  lineHeight: 1.7,
                  fontSize: "15px",
                }}
              >
                Esta é uma página segura de confirmação de compra.
                <br />
                Seu pedido foi processado com sucesso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
