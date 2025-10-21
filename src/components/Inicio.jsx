import raiana from "../assets/raianaSF.png";
import folhagem from "../assets/folhagemSF.png";

import Typewriter from "./Typewriter";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Inicio = () => {
  return (
    <section id="inicio">
      <img src={folhagem} alt="imagem de folhas" className="folha" />
      <div className="principal">
        <div className="description text-center text-md-start py-5">
          <h1 className="title-main">Psicóloga Clínica | Raiana Monteiro</h1>
          <h2 className="subtitle">Um espaço de escuta, </h2>
          <h2> presença e criação de sentido </h2>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
            }}
          >
            <Typewriter
              text="Atendimento Online Individual"
              speed={70}
              startOnView={true}
            />
          </div>
          <p className="text-content">
            A psicoterapia é um convite a se escutar com mais cuidado,
            compreender o que dói e reconhecer o que pulsa. Cada encontro é uma
            oportunidade de elaborar, reconstruir e experimentar novas formas de
            existir e se relacionar.
          </p>
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "rgba(215, 224, 182, 1)",
              borderColor: "rgba(215, 224, 182, 1)",
              color: "#000", // opcional, deixa o texto visível
            }}
            className="btn btn-lg"
          >
            AGENDAR UMA CONSULTA
          </a>
        </div>
        <img src={raiana} loading="eager" alt="imagem da psicóloga" />
      </div>
    </section>
  );
};
export default Inicio;
