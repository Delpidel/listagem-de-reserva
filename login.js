const usuarios = [
    {
      email: "joao@gmail.com",
      nome: "João Silva",
      senha: "123456"
    },
    {
      email: "maria@hotmail.com",
      nome: "Maria Souza",
      senha: "senha123"
    },
    {
      email: "pedro@yahoo.com",
      nome: "Pedro Oliveira",
      senha: "abc123"
    },
    {
      email: "laura@gmail.com",
      nome: "Laura Santos",
      senha: "qwerty"
    },
    {
      email: "gabriel@yahoo.com",
      nome: "Gabriel Costa",
      senha: "senha12345"
    }
  ]
// Validação de login
function validarLogin(event) {
    event.preventDefault() // Impede o envio do formulário por padrão

    const emailInput = document.getElementById("email-input")
    const senhaInput = document.getElementById("senha-input")
    const botao = document.getElementById("login-button")

    const email = emailInput.value
    const senha = senhaInput.value

    emailInput.classList.remove("input-error")
    senhaInput.classList.remove("input-error")

    if (!email || !senha) {
        // Caso os campos estejam vazios, dispara um alert
        emailInput.classList.add("input-error");
        emailInput.focus();
        senhaInput.classList.add("input-error");
        return;
    }

    // Verificar se as credenciais correspondem a um usuário válido
    const usuarioValido = usuarios.find(
        (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuarioValido) {
        botao.style.opacity = 0.5
        botao.innerText = "Entrando..."
        window.location.href = "home.html"
    } else {
        // Caso as credenciais estejam incorretas, dispara um alert

        alert("Credenciais inválidas. Tente novamente.")
    }
}

// addEventListener ao formulário para acionar a função de validação no envio
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", validarLogin);  