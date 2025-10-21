import plantas from "../assets/plantas.jpg";
const Atendimento = () => {
  return (
    <section id="atendimento">
      <div>
        <h2>Como funciona uma sessão de psicoterapia comigo?</h2>
        <p>
          Cada sessão dura em média 40 minutos e é um espaço de escuta e
          acolhimento. O protagonismo está sempre com você: é a partir do que
          traz que construímos o encontro.
        </p>
        <div className="cards">
          <p>
            Minha prática se orienta pela Gestalt-terapia e pela Esquizoanálise,
            abordagens que valorizam a singularidade de cada pessoa e a invenção
            de caminhos próprios. Isso significa que não existem sessões
            “iguais” ou receitas prontas: cada encontro é único, construído no
            diálogo entre a sua experiência e meu olhar clínico.
          </p>
          <p>
            O objetivo é criar um espaço seguro, ético e respeitoso para que
            você possa se expressar, elaborar suas questões e experimentar novas
            formas de existir e se relacionar.
          </p>
        </div>
      </div>
      <div>
        <img src={plantas} alt="imagem de cadeira e vasos de plantas" />
      </div>
    </section>
  );
};
export default Atendimento;
