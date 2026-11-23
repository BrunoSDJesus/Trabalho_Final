const input = document.getElementById("input");
const botao = document.getElementById("botao")
const lista = document.getElementById("lista")
const li = document.createElement("li")
let text = ""

function adicionarLista(){
    text = input.value.trim()
    
    li.textContent = text
    lista.appendChild(li)
    input.value = ""


}

botao.addEventListener("click", adicionarLista)