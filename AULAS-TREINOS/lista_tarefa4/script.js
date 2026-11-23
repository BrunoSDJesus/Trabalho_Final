const texto = document.getElementById("texto");
const botao = document.getElementById("botao");
const lista = document.getElementById("lista");

memory = null

function addTarefaLista(){
    if (memory === null){
    let tarefa = texto.value.trim()
    let li = document.createElement("li")
    let span = document.createElement("span")
    span.textContent = tarefa
    li.appendChild(span)
    let del = document.createElement("button")
    del.textContent = "deletar"
    li.appendChild(del)
    let updt = document.createElement("button")
    updt.textContent = "atualizar"
    li.appendChild(updt)
    lista.appendChild(li)
    del.addEventListener("click", () => li.remove())
    updt.addEventListener("click", function(){
        memory = span
        texto.value = span.textContent
        

    })
    texto.value = ""
    } else {
        memory.textContent = texto.value.trim()
        memory = null
        texto.value = ""
    }
    



}

botao.addEventListener("click", addTarefaLista)
