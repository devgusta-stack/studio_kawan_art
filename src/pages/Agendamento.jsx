import { useEffect } from "react";

export default function Agendamento() {
  useEffect(() => {
    if (!document.querySelector("script[src='https://assets.calendly.com/assets/external/widget.js']")) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ height: "100vh", padding: 20 }}>
      <h1>Agende sua sessão</h1>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/SEU_USUARIO"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
}
