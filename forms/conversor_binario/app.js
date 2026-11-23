const numero = document.getElementById("numero")
const binario = document.getElementById("binario")
const botao = document.getElementById("botao")
const clear = document.getElementById("clear")

let lista = []
let binarios = ""
function conversor(){
    let num = Number(numero.value)
    let result = ""
    let resto = 0
    if (num === 0){
        alert("Insira um valor maior que 0. ")
    } else {
        while (num > 0) {
        resto = (num % 2)
        num = Math.floor(num / 2)
        result += resto
    }
    }
    
    lista = result.split("")
    lista.reverse()
    binarios = lista.join("")   
}

botao.addEventListener("click", function(){
    conversor()
    binario.value = binarios
})

clear.addEventListener("click", function(){
    numero.value = ""
    binario.value = ""
})
