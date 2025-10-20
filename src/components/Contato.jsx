import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Contato = () => {
  return (
    <div
      id="contato"
      style={{
        position: "relative",
      }}
    >
      {/* Overlay com opacidade só no fundo */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)", // preto com 20% de opacidade
          zIndex: 1,
        }}
      ></div>

      {/* Conteúdo */}
      <div className="principal" style={{ position: "relative", zIndex: 2 }}>
        <h2>Quer iniciar sua terapia? </h2>
        <p>
          Clique abaixo para saber mais sobre o processo ou agendar um
          atendimento.
        </p>
        <div>
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            Falar pelo WhatsApp
          </a>
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-cor"
          >
            Agendar Atendimento
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contato;
