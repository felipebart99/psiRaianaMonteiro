import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const FAQ = () => {
  const faqItems = [
    {
      question: " E se eu não souber por onde começar?",
      answer:
        "Não há problema. Muitas pessoas chegam à terapia sem saber exatamente o que dizer e isso já faz parte do processo. A escuta é construída juntos, no tempo de cada um. ",
    },
    {
      question: "Como saber se preciso de terapia?",
      answer:
        "A psicoterapia é indicada não apenas em momentos de sofrimento, mas também para quem deseja se conhecer melhor, compreender suas emoções, fortalecer sua autoestima e melhorar suas relações. ",
    },
    {
      question: "Como funciona a terapia online? ",
      answer:
        "As sessões acontecem por videochamada, em um ambiente seguro e reservado. Basta um local tranquilo, com privacidade e boa conexão. A experiência é acolhedora e eficaz, assim como no formato presencial. ",
    },
    {
      question: " Tenho medo de me expor. Isso é normal? ",
      answer:
        "Sim. É comum sentir receio no início. O processo terapêutico respeita seu tempo e seus limites. Aos poucos, o espaço de fala se torna mais natural e seguro. ",
    },
    {
      question: "Posso falar sobre qualquer coisa nas sessões? ",
      answer:
        "Sim. O espaço terapêutico é um lugar de escuta livre de julgamentos, onde todas as vivências, emoções e pensamentos podem ser compartilhados. ",
    },
    {
      question: "Minha privacidade será protegida? ",
      answer:
        "Sim. O Código de Ética Profissional do Psicólogo assegura o sigilo profissional, garantindo que tudo o que é dito em sessão permanece em confidencialidade, mesmo após o término do acompanhamento. ",
    },
    {
      question: "Qual é o preço da sessão?",
      answer: `De acordo com o Código de Ética Profissional do Psicólogo, o valor das sessões só pode ser informado diretamente ao paciente. Para receber informações sobre valores e formas de pagamento entre em contato pelo WhatsApp.`,
    },
    {
      question: "Quais são as formas de pagamento aceitas? ",
      answer:
        "O pagamento pode ser feito via PIX ou transferência bancária, de forma semanal ou mensal. Para combinar valores e formas de pagamento, basta clicar no botão flutuante para entrar em contato. ",
    },
  ];

  return (
    <section id="faq" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Principais Dúvidas</h2>

        <Row>
          <Col md={6}>
            <Accordion flush>
              {faqItems
                .slice(0, Math.ceil(faqItems.length / 2)) // primeira metade
                .map((item, index) => (
                  <Accordion.Item
                    eventKey={index.toString()}
                    key={index}
                    className="mb-3 border-0 shadow-sm"
                  >
                    <Accordion.Header className="fw-bold">
                      {item.question}
                    </Accordion.Header>
                    <Accordion.Body
                      className="bg-white"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </Accordion.Item>
                ))}
            </Accordion>
          </Col>

          <Col md={6}>
            <Accordion flush>
              {faqItems
                .slice(Math.ceil(faqItems.length / 2)) // segunda metade
                .map((item, index) => (
                  <Accordion.Item
                    eventKey={(
                      index + Math.ceil(faqItems.length / 2)
                    ).toString()}
                    key={index + "right"}
                    className="mb-3 border-0 shadow-sm"
                  >
                    <Accordion.Header className="fw-bold">
                      {item.question}
                    </Accordion.Header>
                    <Accordion.Body
                      className="bg-white"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </Accordion.Item>
                ))}
            </Accordion>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <p className="text-muted">
            Não encontrou sua dúvida?{" "}
            <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
              Pergunte aqui!
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
