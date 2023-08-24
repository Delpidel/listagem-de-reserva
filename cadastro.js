const inputQuarto = document.getElementById("quarto");
const inputNome = document.getElementById("nome-completo");
const inputCpf = document.getElementById("cpf");
const inputEntrada = document.getElementById("entrada");
const inputSaida = document.getElementById("saida");

document.getElementById("cadastro-form")
document.addEventListener("submit", cadastrarReserva);

function cadastrarReserva(event) {
  event.preventDefault();

  const quarto = inputQuarto.value;
  const nome = inputNome.value;
  const cpf = inputCpf.value;
  const entrada = inputEntrada.value;
  const saida = inputSaida.value;

  inputQuarto.classList.remove("input-error");
  document.getElementById("error-quarto").hidden = true;

  inputNome.classList.remove("input-error");
  document.getElementById("error-nome").hidden = true;

  inputCpf.classList.remove("input-error");
  document.getElementById("error-cpf").hidden = true;

  inputEntrada.classList.remove("input-error");
  document.getElementById("error-entrada").hidden = true;

  inputSaida.classList.remove("input-error");
  document.getElementById("error-saida").hidden = true;

  if (quarto === "") {
    inputQuarto.classList.add("input-error");
    inputQuarto.focus();
    document.getElementById("error-quarto").hidden = false;
  } else if (nome === "") {
    inputNome.classList.add("input-error");
    document.getElementById("error-nome").hidden = false;
    document.getElementById("error-nome").innerText = "O nome é obrigatório";
  } else if (cpf === "") {
    inputCpf.classList.add("input-error");
    document.getElementById("error-cpf").hidden = false;
    document.getElementById("error-cpf").innerText = "O CPF é obrigatório";
  } else if (entrada === "") {
    inputEntrada.classList.add("input-error");
    document.getElementById("error-entrada").hidden = false;
    document.getElementById("error-entrada").innerText = "Escolha uma data";
  } else if (saida === "") {
    inputSaida.classList.add("input-error");
    document.getElementById("error-saida").hidden = false;
    document.getElementById("error-saida").innerText = "Escolha uma data";
  } else {
    fetch("http://localhost:3000/reservas")
    .then((response) => {
      if (response.ok === false) {
        throw new Error()
      }
      return response.json()
    })
    .then((dados) => {
      gerarLinhasTabela()
    })
    .catch((error) => {
      alert("Falha ao tentar listar reservas")
    })
  }
}