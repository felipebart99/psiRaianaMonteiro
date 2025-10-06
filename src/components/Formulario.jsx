const Formulario = () => {
  return (
    <section id="formulario">
      <div class="container mt-5 mb-5">
        <div class="form-container">
          <h2 class="mb-4 text-center form-title">Entre em Contato</h2>
          <p class="text-center mb-4">
            Envie sua mensagem e entrarei em contato em breve.
          </p>

          <form
            id="contactForm"
            action="https://formsubmit.co/pamelabatistadeandrades@gmail.com"
            method="POST"
          >
            <div class="mb-3">
              <label for="nome" class="form-label">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                class="form-control rounded-pill"
                id="nome"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                class="form-control rounded-pill"
                id="email"
                placeholder="seuemail@email.com"
                required
              />
            </div>

            <div class="mb-3">
              <label for="telefone" class="form-label">
                Telefone
              </label>
              <input
                type="tel"
                name="telefone"
                class="form-control rounded-pill"
                id="telefone"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div class="mb-3">
              <label for="mensagem" class="form-label">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                class="form-control rounded"
                id="mensagem"
                rows="4"
                placeholder="Escreva sua mensagem"
                required
              ></textarea>
            </div>

            <input type="hidden" name="_captcha" value="false" />

            <button type="submit" class="btn btn-primary w-100 rounded-pill">
              Enviar Mensagem
            </button>
          </form>

          <div class="alert alert-success text-center" id="successMessage">
            Mensagem enviada com sucesso! 😊
          </div>
        </div>
      </div>
    </section>
  );
};
export default Formulario;
