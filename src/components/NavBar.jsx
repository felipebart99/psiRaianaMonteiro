import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logoPam.png"; // Ajuste o caminho conforme sua estrutura

const NavBar = () => {
  // Função para rolagem suave
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="py-3 navbar" sticky="top">
      <Container>
        <Navbar.Brand href="#inicio" onClick={() => handleScroll("inicio")}>
          <img
            src={logo}
            className="d-inline-block align-top logo-img"
            alt="Logo Psicóloga"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              href="#psicoterapia"
              onClick={() => handleScroll("psicoterapia")}
            >
              Psicoterapia
            </Nav.Link>
            <Nav.Link href="#sobre" onClick={() => handleScroll("sobre")}>
              Sobre Mim
            </Nav.Link>
            <Nav.Link
              href="#agendamento"
              onClick={() => handleScroll("agendamento")}
            >
              Agendamento
            </Nav.Link>
            <Nav.Link href="#faq" onClick={() => handleScroll("faq")}>
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
