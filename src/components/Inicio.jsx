import raiana from "../assets/raiana.png";

import Typewriter from "./Typewriter";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Inicio = () => {
  return (
    <section id="inicio">
      <div className="principal">
        <div className="description text-center text-md-start py-5">
          <h1 className="title-main">Psicóloga Clínica CRP 02/31814</h1>
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
            className="btn btn-primary"
          >
            Agendar sessão
          </a>
        </div>
        <img src={raiana} loading="eager" alt="imagem da psicóloga" />
      </div>
    </section>
  );
};
export default Inicio;
