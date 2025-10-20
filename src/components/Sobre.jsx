import raiana from "../assets/raianaPerfil.jpg";
import Typewriter from "../../src/components/Typewriter";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Sobre = () => {
  return (
    <section id="sobre">
      <img src={raiana} style={{ width: "500px", height: "500px" }} />
      <div className="principal">
        <h2>
          <Typewriter text="Raiana Monteiro" speed={100} startOnView={true} />
        </h2>
        <h3>
          Psicóloga clínica e Pesquisadora <br />
          em Psicologia Social
        </h3>

        <p>
          Acredito numa psicologia que não reduz o sujeito ao sintoma, mas o
          escuta em sua complexidade, suas potências e contradições.
        </p>
        <p>
          Formada pela Universidade Federal de Pernambuco e atualmente mestranda
          em Psicologia pela mesma instituição, venho tecendo uma prática guiada
          por duas linhas que se entrelaçam: a Gestalt-terapia e a
          Esquizoanálise.
        </p>
        <p>
          Atendo adolescentes e adultos em processos de autoconhecimento,
          ansiedade, luto, autoestima, corpo e transições de vida.
        </p>
        <p>
          {" "}
          A clínica, para mim, é um espaço de encontro e criação, onde o cuidado
          se faz no tempo de cada um, e onde o que antes era dor pode se tornar
          linguagem, movimento, respiro.
        </p>
        <p>
          {" "}
          Trabalho de forma online, oferecendo uma escuta ética, sensível e
          comprometida com o cuidado genuíno e o fortalecimento da potência de
          viver.
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
          CONHEÇA O MEU TRABALHO
        </a>
      </div>
    </section>
  );
};
export default Sobre;
