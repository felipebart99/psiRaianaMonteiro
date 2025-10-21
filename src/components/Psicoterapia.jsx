import terapiaImg from "../assets/terapiaImg.jpg";
import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Psicoterapia = () => {
  return (
    <section id="psicoterapia">
      <div className="principal">
        <h2 class="mb-4">Como saber se é hora de fazer psicoterapia?</h2>
        <p>
          <i class="bi bi-check-square-fill text-primary"> </i>
          Não existe um único “momento certo”, mas algumas situações podem
          indicar que a psicoterapia pode ser importante para você:
        </p>
        <p>
          <i class="bi bi-check-square-fill text-primary"> </i>
          Se há vontade de se conhecer melhor, fortalecer a autoestima ou
          aprender novas formas de se relacionar. <br />
          <i class="bi bi-check-square-fill text-primary"> </i>Quando
          sentimentos de tristeza, ansiedade ou estresse parecem difíceis de
          lidar sozinho(a). <br />
          <i class="bi bi-check-square-fill text-primary"> </i>
          Se problemas ou conflitos se repetem e você já não sabe como
          enfrentar. <br /> Quando mudanças na vida (perdas, escolhas,
          relacionamentos) trazem dúvidas e sofrimento.
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
          Mais informações
        </a>
      </div>
      <img src={terapiaImg} />
    </section>
  );
};

export default Psicoterapia;
