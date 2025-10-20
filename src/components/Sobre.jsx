import raiana from "../assets/raiana.png";
import Typewriter from "../../src/components/Typewriter";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Sobre = () => {
  return (
    <section id="sobre">
      <img src={raiana} />
      <div className="principal">
        <h2>Raiana Monteiro</h2>
        <h3>
          <Typewriter
            text="Pesquisadora em Psicologia Social"
            speed={100}
            startOnView={true}
          />
        </h3>

        <p>
          Acredito numa psicologia que não reduz o sujeito ao sintoma, mas o
          escuta em sua complexidade, suas potências e contradições.{" "}
          <p>
            {" "}
            Formada pela Universidade Federal de Pernambuco e atualmente
            mestranda em Psicologia pela mesma instituição, venho tecendo uma
            prática guiada por duas linhas que se entrelaçam: a Gestalt-terapia
            e a Esquizoanálise.{" "}
          </p>{" "}
          <p>
            Atendo adolescentes e adultos em processos de autoconhecimento,
            ansiedade, luto, autoestima, corpo e transições de vida.
          </p>
          <p>
            {" "}
            A clínica, para mim, é um espaço de encontro e criação, onde o
            cuidado se faz no tempo de cada um, e onde o que antes era dor pode
            se tornar linguagem, movimento, respiro.
          </p>
          <p>
            {" "}
            Trabalho de forma online, oferecendo uma escuta ética, sensível e
            comprometida com o cuidado genuíno e o fortalecimento da potência de
            viver.
          </p>
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
