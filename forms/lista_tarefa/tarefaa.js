const tarefa = document.getElementById("tarefa");
const add = document.getElementById("add");
const lista = document.getElementById("lista");

let memory = null;

function adicionarItemLista() {
    let atvd = tarefa.value.trim();

    if (atvd === "") {
        alert("Insira uma tarefa no campo!");
        return;
    }

    const li = document.createElement("li");
    const del = document.createElement("button");
    const updt = document.createElement("button");
    const span = document.createElement("span");

    del.addEventListener("click", () => li.remove());

    updt.addEventListener("click", function() {
        tarefa.value = span.textContent;
        memory = span
    });

    span.textContent = atvd;
    del.textContent = "Del";
    updt.textContent = "Update";
    if (memory == null){
        li.appendChild(span);
        li.appendChild(del);
        li.appendChild(updt)
        lista.appendChild(li);
        tarefa.value = "";
    } else {
        memory.textContent = tarefa.value
        tarefa.value = "";
        memory = null
    }
        

    
}

add.addEventListener("click", adicionarItemLista);