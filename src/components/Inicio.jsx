import foto from "../assets/Bannerpam.png";
const Inicio = () => {
  return (
    <section id="inicio">
      <div className="principal">
        
        <div className="description text-center text-md-start py-5">
          <h1 className="title-main">
            Pamela Sousa Psicóloga Clínica CRP 17/7870
          </h1>

          <h2 className="subtitle">
            Psicoterapia Presencial e Online para adultos, crianças e
            adolescentes
          </h2>

          <p className="text-content">
            Venho oferecer um espaço de <strong>acolhimento e cuidado</strong> para te ajudar no
            seu processo de transformação e busca de sentidos. O
            primeiro passo para o cuidado e transformação de si está no 
            <strong> autoconhecimento</strong> e no cultivo da criatividade. Atendo a partir da
            perspectiva da <strong>Gestalt-terapia</strong> e atualmente estou em formação em
           <strong> Psicologia Transpessoal</strong>.
          </p>

          <button>Agendar sessão</button>
        </div>
        <img src={foto} />
      </div>
    </section>
  );
};
export default Inicio;
