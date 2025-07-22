import Bannerpam from "../../dist/assets/BannerPam-B4apFD7k.png";
import Typewriter from "./Typewriter";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

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
          <p>
            <i className="bi bi-geo-alt-fill"></i> Natal - Rio Grande do Norte
          </p>
          <p className="text-content">
            Venho oferecer um espaço de <strong>acolhimento e cuidado</strong>{" "}
            para te ajudar no seu processo de transformação e busca de sentidos.
            O primeiro passo para o cuidado e transformação de si está no
            <strong> autoconhecimento</strong> e no cultivo da criatividade.
          </p>
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Agendar sessão
          </a>
        </div>
        <img src={Bannerpam} loading="eager" alt="imagem da psicóloga" />
      </div>
    </section>
  );
};
export default Inicio;
