import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Contato = () => {
  return (
    <div id="contato">
      <div className="principal">
        <h2>Quer iniciar sua terapia? </h2>
        <p>
          Clique abaixo para saber mais sobre o processo ou agendar um
          atendimento.
        </p>
        <div className="btns">
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
