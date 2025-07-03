import { useState } from "react";

const Problemas = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const problemas = [
    {
      titulo: "Ansiedade",
      descricao:
        "Preocupações excessivas que não conseguia controlar, sensação constante de que algo ruim vai acontecer.",
    },
    {
      titulo: "Sobrecarga Emocional",
      descricao:
        "Sensação de estar sempre no limite, sentimento de estar sobrecarregado com tarefas simples.",
    },
    {
      titulo: "Estresse constante",
      descricao:
        "Pensamentos acelerados que não desaceleram, dificuldade de concentração e memória.",
    },
    {
      titulo: "Oscilações de Humor",
      descricao:
        "Reações desproporcionais a pequenos acontecimentos do dia a dia, Arrependimento frequente, irritabilidade.",
    },
    {
      titulo: "Problemas de Sono",
      descricao:
        "Sonolência excessiva como escape emocional, pesadelos recorrentes ou sonhos perturbadores.",
    },
    {
      titulo: "Crise Pessoal",
      descricao:
        "Crise de identidade ou valores, busca por propósito e significado.",
    },
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="problems" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">É provável que você já sentiu...</h2>

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
