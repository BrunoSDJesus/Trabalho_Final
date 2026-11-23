const tarefa = document.getElementById("tarefa")
const botao = document.getElementById("add")
const lista = document.getElementById("lista")

function add_tarefa_lista(){
    let afazer = tarefa.value.trim()
    const span = document.createElement("span")
    span.textContent = afazer
    let li = document.createElement("li")
    let del = document.createElement("button")
    del.textContent = "del"
    del.addEventListener("click", () => li.remove())

    li.appendChild(span)
    li.appendChild(del)
    lista.appendChild(li)
    
    
}


botao.addEventListener("click", add_tarefa_lista)

