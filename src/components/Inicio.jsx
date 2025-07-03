import Bannerpam from "../assets/BannerPam.png";
import Typewriter from "./Typewriter";

const Inicio = () => {
  return (
    <section id="inicio">
      <div className="principal">
        <div className="description text-center text-md-start py-5">
          <h1 className="title-main">
            Pamela Sousa Psicóloga Clínica CRP 17/7870
          </h1>

          <h2 className="subtitle">Psicoterapia Presencial e Online</h2>
          <h2>
            <Typewriter
              text="para adultos, crianças e
            adolescentes"
              speed={70}
              startOnView={true}
            />
          </h2>

          <p className="text-content">
            Venho oferecer um espaço de <strong>acolhimento e cuidado</strong>{" "}
            para te ajudar no seu processo de transformação e busca de sentidos.
            O primeiro passo para o cuidado e transformação de si está no
            <strong> autoconhecimento</strong> e no cultivo da criatividade.
          </p>

          <button>Agendar sessão</button>
        </div>
        <img src={Bannerpam} />
      </div>
    </section>
  );
};
export default Inicio;
