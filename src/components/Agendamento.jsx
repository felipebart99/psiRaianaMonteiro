import { whatsAppLink } from "./WhatsApp/WhatsAppLink";
const Agendamento = () => {
  return (
    <section id="agendamento">
      <h2>Como agendar?</h2>
      <div className="metodos">
        <div className="metodo">
          <span>1</span>
          <h3>WhatsApp</h3>
          <p>
            Envie uma mensagem para que possamos conversar sobre suas
            necessidades e encontrar o melhor tipo de atendimento para você
          </p>
        </div>
        <div className="metodo">
          <span>2</span>
          <h3>Horário</h3>
          <p>
            Juntos vamos escolher um horário que se encaixe na sua rotina.
            Ofereço flexibilidade de horários para sua conveniência.
          </p>
        </div>
        <div className="metodo">
          <span>3</span>
          <h3>Pagamento</h3>
          <p>
            Para confirmar o agendamento é necessário realizar o pagamento.
            Enviarei todas as informações bancárias após a confirmação do
            horário
          </p>
        </div>
        <div className="metodo">
          <span>4</span>
          <h3>Instruções</h3>
          <p>
            Antes do atendimento, enviarei um guia com informações importantes e
            um link de acesso (para consultas online).
          </p>
        </div>
      </div>
      <a
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Agendar Consulta
      </a>
    </section>
  );
};
export default Agendamento;
