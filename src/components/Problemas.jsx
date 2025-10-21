import individual from "../assets/individual.png";
import grupo from "../assets/grupo.png";
import projetos from "../assets/projetos.png";

const Problemas = () => {
  return (
    <section id="problems" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Meus Serviços</h2>

        <div>
          <div>
            <img src={individual} alt="" />
            <h3>Atendimento Psicológico Individual</h3>
            <p>
              Atendo adolescentes e adultos em processos de autoconhecimento,
              ansiedade, luto, autoestima, corpo e transições de vida.
            </p>
          </div>
          <div>
            <img src={grupo} alt="" />
            <h3>Oficina de Grupos</h3>
            <p>
              Espaços de partilha e reflexão sobre temas como corpo, identidade,
              cuidado e subjetividade. As oficinas e grupos terapêuticos são
              pensados como territórios de criação coletiva, onde o diálogo e o
              encontro entre experiências se tornam parte do cuidado. Porque
              também é no coletivo que a vida encontra forma e sentido.
            </p>
          </div>
          <div>
            <img src={projetos} alt="" />
            <h3>Colaboração e projetos</h3>
            <p>
              Parcerias com profissionais, coletivos e instituições que buscam
              pensar o cuidado de forma ética e crítica. Podem incluir grupos
              temáticos, rodas de conversa, ações de saúde mental e produções de
              conteúdo voltadas à sensibilização e à escuta do outro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problemas;
