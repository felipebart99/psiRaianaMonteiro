import rosto from "../assets/rosto.png";

import { useState } from "react";

const Problemas = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const problemas = [
    {
      titulo: "Atendimento Psicológico Individual ",
      descricao:
        "Atendo adolescentes e adultos em processos de autoconhecimento, ansiedade, luto, autoestima, corpo e transições de vida. ",
    },
    {
      titulo: "Oficinas e Grupos",
      descricao:
        "Espaços de partilha e reflexão sobre temas como corpo, identidade, cuidado e subjetividade. As oficinas e grupos terapêuticos são pensados como territórios de criação coletiva, onde o diálogo e o encontro entre experiências se tornam parte do cuidado. Porque também é no coletivo que a vida encontra forma e sentido.",
    },
    {
      titulo: "Colaborações e Projetos",
      descricao:
        "Parcerias com profissionais, coletivos e instituições que buscam pensar o cuidado de forma ética e crítica. Podem incluir grupos temáticos, rodas de conversa, ações de saúde mental e produções de conteúdo voltadas à sensibilização e à escuta do outro. ",
    },
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="problems" className="py-5">
      <img
        src={rosto}
        alt="imagem de um rosto com flor na cabeça"
        style={{ width: "200px", height: "200px" }}
      />
      <div className="container">
        <h2 className="text-center mb-5">Meus Serviços</h2>

        <div className="accordion">
          {problemas.map((problema, index) => (
            <div
              key={index}
              className={`accordion-item ${
                index % 2 === 0 ? "destaque" : "destaque2"
              } ${activeIndex === index ? "active" : ""}`}
            >
              <h3
                className="accordion-header"
                onClick={() => toggleItem(index)}
              >
                {problema.titulo}
                <span className="accordion-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </h3>

              <div
                className="accordion-content"
                style={{
                  maxHeight: activeIndex === index ? "500px" : "0",
                  opacity: activeIndex === index ? "1" : "0",
                }}
              >
                <p>{problema.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problemas;
