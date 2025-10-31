document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const content = document.getElementById("content");
  const themeToggle = document.getElementById("theme-toggle");

  // Toggle menu hamburguer
  menuToggle.addEventListener("click", () => {
    const isShown = menu.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", isShown);
  });

  // Toggle modo escuro
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  const paginas = {
    home: `
      <h2>Início</h2>
      <p>Bem-vindo à ONG Família Brasil!</p>
      <img src="Imagens/sua-imagem.png" alt="Família sorridente representando a ONG Família Brasil">
      <section>
        <h2>Sobre a ONG</h2>
        <p>A ONG Família Brasil apoia famílias carentes em todo o Brasil.</p>
      </section>
      <section>
        <h2>O que fazemos</h2>
        <ul>
          <li>Doações de cestas básicas, roupas e brinquedos</li>
          <li>Material escolar para estudantes</li>
          <li>Oficinas e eventos sociais</li>
        </ul>
      </section>
      <section>
        <h2>Contato</h2>
        <address>
          <p><strong>Endereço:</strong> Rua da Esperança, 120 – São Paulo/SP</p>
          <p><strong>Telefone:</strong> (11) 90000-0000</p>
          <p><strong>Email:</strong> contato@familiabrasil.org</p>
        </address>
      </section>
    `,
    projetos: `
      <h2>Projetos</h2>
      <section>
        <h3>Voluntariado</h3>
        <p>Participe e transforme vidas!</p>
        <ul>
          <li>Auxílio em eventos</li>
          <li>Organização de doações</li>
          <li>Atendimento a famílias</li>
        </ul>
      </section>
      <section>
        <h3>Doações</h3>
        <p>Você pode ajudar com:</p>
        <ul>
          <li>🧺 Alimentos</li>
          <li>👕 Roupas e brinquedos</li>
          <li>📚 Materiais escolares</li>
          <li>💰 Contribuições financeiras (PIX: doacoes@familiabrasil.org)</li>
        </ul>
      </section>
    `,
    cadastro: `
      <h2>Cadastro</h2>
      <form id="formCadastro">
        <fieldset>
          <legend>Informações Pessoais</legend>
          <label for="nome">Nome completo:</label>
          <input type="text" id="nome" name="nome" required>
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required>
          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" required>
          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>
          <label for="nascimento">Data de Nascimento:</label>
          <input type="date" id="nascimento" name="nascimento" required>
          <p>Deseja ser:</p>
          <label><input type="radio" name="tipo" value="doador" required> Doador</label>
          <label><input type="radio" name="tipo" value="voluntario" required> Voluntário</label>
        </fieldset>
        <fieldset>
          <legend>Endereço</legend>
          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" pattern="\\d{5}-\\d{3}" placeholder="00000-000" required>
          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" required>
          <label for="estado">Estado:</label>
          <input type="text" id="estado" name="estado" required>
        </fieldset>
        <button type="submit">Cadastrar</button>
      </form>
    `,
    login: `
      <h2>Login</h2>
      <form id="formLogin">
        <label for="login-email">Email:</label>
        <input type="email" id="login-email" name="email" required>
        <label for="login-senha">Senha:</label>
        <input type="password" id="login-senha" name="senha" required>
        <button type="submit">Entrar</button>
        <p>Não possui cadastro? <a href="#" data-page="cadastro">Cadastre-se aqui</a></p>
      </form>
    `
  };

  function carregarPagina(pagina) {
    content.innerHTML = paginas[pagina] || "<p>Página não encontrada.</p>";
    window.scrollTo(0, 0);

    if (pagina === "cadastro") {
      const formCadastro = document.getElementById("formCadastro");
      formCadastro.addEventListener("submit", e => {
        e.preventDefault();
        alert("Cadastro realizado com sucesso!");
        carregarPagina("home");
      });
    }

    if (pagina === "login") {
      const formLogin = document.getElementById("formLogin");
      formLogin.addEventListener("submit", e => {
        e.preventDefault();
        alert("Login realizado com sucesso!");
        carregarPagina("home");
      });
    }

    content.querySelectorAll("[data-page]").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        carregarPagina(link.getAttribute("data-page"));
      });
    });
  }

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const pagina = link.getAttribute("data-page");
      carregarPagina(pagina);
      menu.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  carregarPagina("home");
});
