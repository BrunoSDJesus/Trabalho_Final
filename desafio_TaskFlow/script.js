const formulario = document.getElementById("form-tarefa");
const nome = document.getElementById("nome-tarefa");
const descricao = document.getElementById("descricao");
const categoria = document.getElementById("categoria");
const prioridade = document.getElementById("prioridade");
const data = document.getElementById("data");
const lista = document.getElementById("lista")
const cadastrar = document.getElementById("cadastrar")

tarefas = []

function criar_tarefa(tarefas){
    let nomeTarefa = nome.value.trim()
    let descricaoTarefa = descricao.value.trim()
    let categoriaTarefa = categoria.value
    let prioridadeTarefa = prioridade.value
    let dataTarefa = data.value

    tarefa = {
        'nome': nomeTarefa,
        'descricao': descricaoTarefa,
        'categoria': categoriaTarefa,
        'prioridade': prioridadeTarefa,
        'data': dataTarefa
    }

    tarefas.append(tarefa)

    return tarefas
}

cadastrar.addEventListener("click", addTarefaLista)

function addTarefaLista(tarefas){
    if (tarefas === null){
        alert("Não existem tarefas para adicionar. ")
    }
    for (tarefa of tarefas){
        lista.appendChild(tarefa)

    }
}
console.log(tarefa.nome)