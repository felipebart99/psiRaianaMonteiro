import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Footer = () => {
  return (
    <footer class="footer bg-secondary text-dark py-4 mt-5">
      <div class="container text-center text-white">
        <h5 class="fw-bold mb-2">Dra. Raiana Monteiro</h5>
        <p class="mb-2">Psicóloga | CRP 02/32814</p>

        <p class="mb-3">
          <a
            href="raianamonteiropsicologia@gmail.com"
            class="text-white text-decoration-none"
          >
            raianamonteiropsicologia@gmail.com
          </a>
          |
          <a href={whatsAppLink} target="_blank" class="text-white">
            +55(81)99293-5806
          </a>
        </p>

        <div class="social-icons mb-3 text-white">
          <a
            href="https://www.instagram.com/raianamonteiro.psi"
            target="_blank"
            class="text-white mx-2"
          >
            <i class="bi bi-instagram"></i>
          </a>
        </div>

        <p class="small mb-0">
          &copy; 2025 Psicóloga Raiana Monteiro. Todos os direitos reservados.
        </p>
        <p class="small  mb-0">
          Desenvolvido por{" "}
          <a
            href="https://www.instagram.com/felipebart.dev"
            class=" text-decoration-none text-white"
          >
            @Felipebart.Dev
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
