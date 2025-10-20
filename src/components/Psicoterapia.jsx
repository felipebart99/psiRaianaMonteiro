import terapiaImg from "../assets/terapiaImg.jpg";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Psicoterapia = () => {
  return (
    <section id="psicoterapia">
      <div className="principal">
        <h2>Como funciona a Psicoterapia?</h2>
        <p>
          A psicoterapia é um processo que ajuda a identificar padrões
          emocionais e comportamentais que causam sofrimento. Através de um{" "}
          <strong>diálogo</strong> acolhedor com o psicólogo, o paciente
          desenvolve novas perspectivas e ferramentas para lidar com desafios
          pessoais e relacionamentos.
        </p>
        <p>
          Com técnicas específicas adaptadas a cada pessoa, a terapia promove
          mudanças profundas e duradouras, aliviando sintomas como
          <strong> ansiedade e estresse</strong>, e fortalecendo a capacidade de
          enfrentar crises com mais <strong>equilíbrio e autonomia</strong>.
        </p>
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Mais informações
        </a>
      </div>
      <img src={terapiaImg} style={{ width: "600px", height: "500px" }} />
    </section>
  );
};

export default Psicoterapia;
