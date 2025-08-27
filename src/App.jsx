import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import Problemas from "./components/Problemas";
import Gestalt from "./components/Gestalt";
import FAQ from "./components/Faq";
import WhatsAppButton from "./components/WhatsApp/WhatsAppButton";
import Psicoterapia from "./components/Psicoterapia";
import Sobre from "./components/Sobre";
import Agendamento from "./components/Agendamento";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Psicoterapia />
      <Sobre />
      <Problemas />
      <Agendamento />
      <FAQ />
      <WhatsAppButton />
    </div>
  );
}

export default App;
