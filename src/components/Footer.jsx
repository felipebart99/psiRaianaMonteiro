import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Footer = () => {
  return (
    <footer class="footer bg-light text-dark py-4 mt-5">
      <div class="container text-center">
        <h5 class="fw-bold mb-2">Dra. Pâmela Sousa</h5>
        <p class="mb-2">Psicóloga | CRP 17/7870</p>

        <p class="mb-3">
          <a
            href="mailto:contato@psicologapamelasousa.com"
            class="text-dark text-decoration-none"
          >
            contato@psicologapamelasousa.com
          </a>
          |
          <a href={whatsAppLink} target="_blank">
            +558488708809
          </a>
        </p>

        <div class="social-icons mb-3">
          <a
            href="https://www.instagram.com/psipamelasousa"
            target="_blank"
            class="text-dark mx-2"
          >
            <i class="bi bi-instagram"></i>
          </a>
        </div>

        <p class="small mb-0">
          &copy; 2025 Psicóloga Pâmela Sousa. Todos os direitos reservados.
        </p>
        <p class="small text-muted mb-0">
          Desenvolvido por{" "}
          <a
            href="https://www.instagram.com/felipebart.dev"
            class="text-muted text-decoration-none"
          >
            Felipebart.Dev
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
