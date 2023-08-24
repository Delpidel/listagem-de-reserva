
// Criando o evento de click 
document.getElementById("logout").addEventListener("click", () => {
  window.location.href = "../login.html"
})

let dadosReserva = []

function gerarLinhasTabela() {
    const dadosTabela = dadosReserva
  
    dadosTabela.map((reserva) => {
      const tr = document.createElement("tr")
      tr.setAttribute("id", reserva.id)
  
      const quarto = document.createElement("td")
      quarto.innerHTML = reserva.quarto
      tr.appendChild(quarto)
  
      const cliente = document.createElement("td")
      cliente.innerHTML = reserva.cliente
      tr.appendChild(cliente)
  
      const cpf = document.createElement("td")
      cpf.innerHTML = reserva.cpf
      tr.appendChild(cpf)
  
      const periodo = document.createElement("td")
      periodo.innerHTML = reserva.checkin + "-" + reserva.checkout
      tr.appendChild(periodo)
  
      const acoes = document.createElement("td")
  
      const deleteButton = document.createElement("button")
      deleteButton.innerText = "Deletar reserva"
  
      deleteButton.addEventListener("click", () => deletarItem(reserva.id))
      acoes.appendChild(deleteButton)
      tr.appendChild(acoes)
      document.getElementById("table-body").appendChild(tr)
    })
  
}

function pegarListaReserva(){
    fetch("http://localhost:3000/reservas")
    .then((response) => {
        if (response.ok === false) {
            throw new Error()
        }
        return response.json()
    })
    .then((dados) => {
        dadosReserva = dados
        gerarLinhasTabela()
    })
    .catch((error) => {
        alert("Falha ao tentar listar reservas")
    })
};

window.onload = pegarListaReserva;