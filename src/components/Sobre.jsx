import pampam from "../assets/pampam.png";
import Typewriter from "../../src/components/Typewriter";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Sobre = () => {
  return (
    <section id="sobre">
      <img src={pampam} />
      <div className="principal">
        <h2>Sobre mim</h2>
        <h3>
          <Typewriter text=" Pamela Sousa" speed={200} startOnView={true} />
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas saepe
          quae voluptatem quidem nam possimus. Fuga exercitationem fugit
          delectus deserunt! Voluptate ratione nesciunt amet quos quae
          blanditiis reiciendis. Modi, natus.
        </p>
        <p>
          Atendo a partir da perspectiva da <strong>Gestalt-terapia</strong> e
          atualmente estou em formação em
          <strong> Psicologia Transpessoal</strong>.
        </p>
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Entrar em Contato
        </a>
      </div>
    </section>
  );
};
export default Sobre;
