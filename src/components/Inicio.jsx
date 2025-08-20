import Pamelinha from "../assets/pamelinha.png";

import Typewriter from "./Typewriter";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Inicio = () => {
  return (
    <section id="inicio">
      <div className="principal">
        <div className="description text-center text-md-start py-5">
          <h1 className="title-main">Psicóloga Clínica CRP 17/7870</h1>
          <h2 className="subtitle">Psicoterapia Presencial e Online </h2>
          <h2> para adultos, crianças e adolescentes</h2>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
            }}
          >
            <i className="bi bi-geo-alt-fill"></i>
            <Typewriter
              text="Natal - Rio Grande do Norte"
              speed={70}
              startOnView={true}
            />
          </div>
          <p className="text-content">
            Venho oferecer um espaço de <strong>acolhimento e cuidado</strong>{" "}
            para te ajudar no seu processo de transformação e busca de sentidos.
            O primeiro passo para o cuidado e transformação de si está no
            <strong> autoconhecimento</strong>.
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
        <img src={Pamelinha} loading="eager" alt="imagem da psicóloga" />
      </div>
    </section>
  );
};
export default Inicio;
