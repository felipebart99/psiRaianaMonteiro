import React from "react";
import { Accordion, Container } from "react-bootstrap";

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
  ];

  return (
    <section id="faq" className="py-5 bg-light">
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
            Não encontrou sua dúvida? <a href="#contato">Entre em contato </a>
            conosco.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
