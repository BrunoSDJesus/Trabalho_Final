const celsius = document.getElementById("celsius")
const fahrenheit = document.getElementById("fahrenheit")
const botao = document.getElementById("botao")

function converter(){
    let grausC = Number(celsius.value)
    //let grausF = fahrenheit.value
    
   const result = (grausC * 1.8) + 32
    return result
}

botao.addEventListener("click", function(){
    if (celsius.value == ""){
        alert("Você precisa inserir um valor no campo! ")
        return
    }
    fahrenheit.value = converter()
    

})