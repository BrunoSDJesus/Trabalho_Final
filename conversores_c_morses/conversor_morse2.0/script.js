const texto = document.getElementById("texto");
const morse = document.getElementById("morse");

const tradMorse = {
    // Letras
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",

    // Números
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",

    // Pontuação
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    "\"": ".-..-.",
    "$": "...-..-",
    "@": ".--.-."
};

function textoToMorse() {
    let palavra = texto.value.toUpperCase()
    let result = ""
    let caractere = null

    for (let i = 0; i < palavra.length; i++) {
        caractere = palavra[i]
        if (caractere === " ") {
            result += " "
            result += "/"
            result += " "
        } else {
            result += " "
            result += tradMorse[caractere]
        }

        
    }

    morse.value = result

}



texto.addEventListener("input", function(){
    textoToMorse()
})