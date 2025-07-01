import foto from "../assets/psiPamS.jpg";
const Inicio = () => {
  return (
    <section id="inicio">
      <div className="principal">
        <img src={foto} />
        <div className="description text-center text-md-start py-5">
          <h1 className="title-main">
            Pamela Sousa <small>Psicóloga Clínica CRP 17/7870</small>
          </h1>

          <h2 className="subtitle">
            Psicoterapia Presencial e Online para adultos, crianças e
            adolescentes
          </h2>

          <p className="text-content">
            Venho oferecer um espaço de acolhimento e cuidado para te ajudar no
            seu processo de transformação e busca de sentidos. Acredito que o
            primeiro passo para o cuidado e transformação de si está no
            autoconhecimento e no cultivo da criatividade. Atendo a partir da
            perspectiva da Gestalt-terapia e atualmente estou em formação em
            Psicologia Transpessoal.
          </p>

          <button>Agendar sessão</button>
        </div>
      </div>
    </section>
  );
};
export default Inicio;
