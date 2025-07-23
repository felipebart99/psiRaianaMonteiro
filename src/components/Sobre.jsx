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
          Sou apaixonada pelas relações humanas e pelo{" "}
          <strong>poder da escuta</strong>. Desde cedo, me interessei por
          entender o comportamento das pessoas, suas histórias e formas únicas
          de ver o mundo — e foi isso que me levou até a Psicologia.
        </p>
        <p>
          Atendo a partir da perspectiva da <strong>Gestalt-terapia</strong> e,
          atualmente, estou em formação em
          <strong> Psicologia Transpessoal</strong>.
        </p>
        <p>
          Acredito que o processo terapêutico é uma jornada de{" "}
          <strong>reconexão</strong> consigo mesmo, um espaço de acolhimento,
          descoberta e transformação. Procuro conduzir cada atendimento com
          empatia, sensibilidade e presença, respeitando o tempo e a
          singularidade de cada pessoa.
        </p>
        <p>
          Se você sente que é hora de olhar para si com mais cuidado e
          gentileza, será um prazer te acompanhar nesse caminho.
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
