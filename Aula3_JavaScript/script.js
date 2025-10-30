const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("click", () => menu.classList.toggle("show"));

const content = document.getElementById("content");

const paginas = {
  home: `
    <h2>Início</h2>
    <p>Bem-vindo à ONG Família Brasil!</p>
    <img src="Imagens/sua-imagem.png" alt="Família Feliz Brasil">
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
      <p><strong>Endereço:</strong> Rua da Esperança, 120 – São Paulo/SP</p>
      <p><strong>Telefone:</strong> (11) 90000-0000</p>
      <p><strong>Email:</strong> contato@familiabrasil.org</p>
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
        <label>Nome completo: <input type="text" name="nome" required></label><br>
        <label>E-mail: <input type="email" name="email" required></label><br>
        <label>CPF: <input type="text" name="cpf" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" required></label><br>
        <label>Telefone: <input type="tel" name="telefone" placeholder="(00) 00000-0000" required></label><br>
        <label>Data de Nascimento: <input type="date" name="nascimento" required></label><br>
        <p>Deseja ser:</p>
        <label><input type="radio" name="tipo" value="doador" required> Doador</label>
        <label><input type="radio" name="tipo" value="voluntario" required> Voluntário</label><br>
      </fieldset>
      <fieldset>
        <legend>Endereço</legend>
        <label>CEP: <input type="text" name="cep" pattern="\\d{5}-\\d{3}" placeholder="00000-000" required></label><br>
        <label>Cidade: <input type="text" name="cidade" required></label><br>
        <label>Estado: <input type="text" name="estado" required></label><br>
      </fieldset>
      <button type="submit">Cadastrar</button>
    </form>
  `,
  login: `
    <h2>Login</h2>
    <form id="formLogin">
      <label>Email:<input type="email" name="email" required></label>
      <label>Senha:<input type="password" name="senha" required></label>
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
    const novoForm = formCadastro.cloneNode(true);
    formCadastro.parentNode.replaceChild(novoForm, formCadastro);

    novoForm.addEventListener("submit", e => {
      e.preventDefault();
      const dados = {
        nome: novoForm.nome.value,
        email: novoForm.email.value,
        cpf: novoForm.cpf.value,
        telefone: novoForm.telefone.value,
        nascimento: novoForm.nascimento.value,
        tipo: novoForm.tipo.value,
        cep: novoForm.cep.value,
        cidade: novoForm.cidade.value,
        estado: novoForm.estado.value
      };
      alert(
        `Cadastro realizado com sucesso!\n\n` +
        `Nome: ${dados.nome}\nEmail: ${dados.email}\nCPF: ${dados.cpf}\n` +
        `Telefone: ${dados.telefone}\nNascimento: ${dados.nascimento}\n` +
        `Tipo: ${dados.tipo}\nCEP: ${dados.cep}\nCidade: ${dados.cidade}\nEstado: ${dados.estado}`
      );
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
  });
});

carregarPagina("home");
