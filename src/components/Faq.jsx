import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const FAQ = () => {
  const faqItems = [
    {
      question: "Como sei se preciso de terapia?",
      answer:
        "Se você está enfrentando dificuldades emocionais, padrões repetitivos de comportamento que causam sofrimento, ou se sente que sua qualidade de vida está comprometida, a terapia pode ajudar. Qualquer pessoa que queira se conhecer melhor ou melhorar seu bem-estar pode se beneficiar.",
    },
    {
      question: "Quantas sessões são necessárias?",
      answer:
        "O número de sessões varia conforme cada caso e objetivos terapêuticos. Algumas pessoas sentem melhoras em poucos meses, enquanto outras podem precisar de acompanhamento por mais tempo. Avaliamos isso juntos durante o processo.",
    },
    {
      question: "Como funciona o atendimento online?",
      answer:
        "O atendimento online ocorre por plataformas seguras de videoconferência. Você receberá um link de acesso antes de cada sessão. É importante estar em um ambiente privado e confortável durante a sessão.",
    },
    {
      question: "Qual a diferença entre psicólogo e psiquiatra?",
      answer:
        "O psicólogo atua com terapia e processos psicológicos, enquanto o psiquiatra é um médico especializado em diagnóstico e tratamento medicamentoso. Muitas vezes trabalhamos em conjunto para melhor atender o paciente.",
    },
    {
      question: "Os conteúdos das sessões são confidenciais?",
      answer:
        "Sim, sigilo é um princípio ético fundamental. Tudo discutido nas sessões é confidencial, exceto em situações específicas previstas por lei que envolvam risco à vida.",
    },
    {
      question: "A psicoterapia online tem a mesma eficácia da presencial?",
      answer:
        "Sim. Diversos estudos mostram que a psicoterapia online é tão eficaz quanto a presencial, desde que realizada em um ambiente reservado, com boa conexão e comprometimento do paciente. O vínculo terapêutico e a qualidade do atendimento permanecem os mesmos.",
    },
    {
      question:
        "Como funciona a questão da privacidade e da confidencialidade?",
      answer:
        "A privacidade é uma prioridade. As sessões são realizadas em plataformas seguras e sigilosas, e todas as informações compartilhadas são protegidas pelo código de ética profissional do psicólogo, garantindo total confidencialidade do que é dito em sessão.",
    },
    {
      question: "E se eu tiver dificuldade com a tecnologia?",
      answer:
        "Não há problema. Antes da primeira sessão, a psicóloga pode orientar você sobre como acessar a plataforma e realizar testes simples de áudio e vídeo. O processo é pensado para ser acessível mesmo para quem não tem muita familiaridade com tecnologia.",
    },
  ];

  return (
    <section id="faq" className="py-5 ">
      <Container>
        <h2 className="text-center mb-5">Perguntas Frequentes</h2>

        <Accordion flush>
          {faqItems.map((item, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              className="mb-3 border-0 shadow-sm"
            >
              <Accordion.Header className="fw-bold">
                {item.question}
              </Accordion.Header>
              <Accordion.Body className="bg-white">
                {item.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="text-center mt-4">
          <p className="text-muted">
            Não encontrou sua dúvida?
            <a href={whatsAppLink} target="_blank">
              Pergunte aqui!
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
