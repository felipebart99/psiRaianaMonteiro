import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Problemas from "./components/Problemas";
import Gestalt from "./components/Gestalt";
import terapiaImg from "../src/assets/psicoterapia.webp";
import pampam from "../src/assets/pampam.png";
import FAQ from "./components/Faq";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Inicio />
      <Problemas />
      <Gestalt />
      <>
        <section id="psicoterapia">
          <div className="principal">
            <h2>Como funciona a Psicoterapia?</h2>
            <p>
              Lorem, ipsum dolor sit amet conseci aperiam saepe henderit rerum
              adipisci, inventore molestias facere reiciendis ex quae dolorem et
              quasi unde.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              aspernatur sunt minima perferendis, nam autem suscipit similique
              nesciunt adipisci est voluptate odit amet iure cupiditate modi
              tempore ducimus corporis perspiciatis?
            </p>
            <button>Mais Informações</button>
          </div>
          <img src={terapiaImg} />
        </section>

        <section id="sobre">
          <img src={pampam} />
          <div className="principal">
            <h2>Sobre mim</h2>
            <h3>Pamela Sousa</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              saepe quae voluptatem quidem nam possimus. Fuga exercitationem
              fugit delectus deserunt! Voluptate ratione nesciunt amet quos quae
              blanditiis reiciendis. Modi, natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              recusandae eos obcaecati ipsam, similique corporis molestias quae
              amet quidem, temporibus nihil, ipsa illo fugit delectus!
              Dignissimos suscipit id corrupti maiores.
            </p>
            <button>ENTRAR EM CONTATO</button>
          </div>
        </section>

        <section id="depoimentos">
          <h2>Depoimentos</h2>
          <h3>O que dizem os pacientes?</h3>
          <div className="pacientes">
            <div className="paciente">
              <h2>Paciente anônimo</h2>
              <div className="star-rating">
  ★★★★★</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus cupiditate eos neque repudiandae hic libero nam
                eveniet impedit error vel. Reprehenderit at laborum laboriosam
                nulla incidunt eveniet accusantium repellat! Culpa.
              </p>
            </div>
            <div className="paciente">
              <h2>Paciente anônimo</h2>
              <div className="star-rating">
  ★★★★★</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus cupiditate eos neque repudiandae hic libero nam
                eveniet impedit error vel. Reprehenderit at laborum laboriosam
                nulla incidunt eveniet accusantium repellat! Culpa.
              </p>
            </div>
          </div>
        </section>
        <section id="agendamento">
          <h2>Como agendar?</h2>
          <div className="metodos">
            <div className="metodo">
              <span>1</span>
              <h3>WhatsApp</h3>
              <p>
                Envie uma mensagem para que possamos conversar sobre suas necessidades e encontrar o melhor tipo de atendimento para você
              </p>
            </div>
            <div className="metodo">
              <span>2</span>
              <h3>Horário</h3>
              <p>
                Definiremos o melhor horário.
Juntos vamos escolher um horário que se encaixe na sua rotina. Ofereço flexibilidade de horários, incluindo atendimentos no início da manhã e fim da tarde para sua conveniência.
              </p>
            </div>
            <div className="metodo">
              <span>3</span>
              <h3>Pagamento</h3>
              <p>
                Para confirmar o agendamento é necessário realizar o pagamento. Enviarei todas as informações bancárias após a confirmação do horário
              </p>
            </div>
            <div className="metodo">
              <span>4</span>
              <h3>Instruções</h3>
              <p>
                Antes do atendimento, enviarei um guia com informações importantes e um link de acesso (para consultas online). Para presencial, o endereço completo e orientações de acesso serão fornecidos.
              </p>
            </div>
          </div>
          <button>AGENDAR CONSULTA</button>
        </section>
        <FAQ />
      </>
    </div>
  );
}

export default App;
