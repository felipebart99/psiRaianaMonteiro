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
            Definiremos o melhor horário. Juntos vamos escolher um horário que
            se encaixe na sua rotina. Ofereço flexibilidade de horários,
            incluindo atendimentos no início da manhã e fim da tarde para sua
            conveniência.
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
            um link de acesso (para consultas online). Para presencial, o
            endereço completo e orientações de acesso serão fornecidos.
          </p>
        </div>
      </div>
      <button>AGENDAR CONSULTA</button>
    </section>
  );
};
export default Agendamento;
