const tarefa = document.getElementById("tarefa");
const botao = document.getElementById("botao");
const lista = document.getElementById("lista");

memory = null;

function adicionarTextoLista(){
    let texto = tarefa.value.trim()
    if (texto == ""){
        alert("Campo não pode ser enviado em branco. ");
        return
    }
    const li = document.createElement("li")
    const excluir = document.createElement("button")
    const update = document.createElement("button")
    const span = document.createElement("span")

    if (memory != null){
        memory.textContent = texto
        memory = null
        tarefa.value = ""
        return
    } 
     

    excluir.textContent = "Deletar"
    update.textContent = "Update"
   
    // Isso faz com que eu não precise deixar o meu texto direto no LI, tercerizo essa função.
    span.textContent = texto
    // adicionando "complementos" ao meu LI
    li.appendChild(span)
    li.appendChild(excluir)
    li.appendChild(update)
//  Finalmente adiciono o LI com todos seus complementos a lista.
    lista.appendChild(li)
    // adicionando funções aos meus novos botões.
    excluir.addEventListener("click", () => li.remove())
    update.addEventListener("click", () => atualizarTexto(span))
    tarefa.value = ""
}
    

function atualizarTexto(span){
    tarefa.value = span.textContent
    memory = span
    
}


botao.addEventListener("click", adicionarTextoLista)