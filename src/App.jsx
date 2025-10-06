import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Problemas from "./components/Problemas";
import FAQ from "./components/Faq";
import WhatsAppButton from "./components/WhatsApp/WhatsAppButton";
import Psicoterapia from "./components/Psicoterapia";
import Sobre from "./components/Sobre";
import Agendamento from "./components/Agendamento";
import Atendimento from "./components/Atendimento";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import Beneficios from "./components/Beneficios";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Psicoterapia />
      <Sobre />
      <Problemas />
      <Atendimento />
      <Beneficios />
      <Agendamento />
      <FAQ />
      <Formulario />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
