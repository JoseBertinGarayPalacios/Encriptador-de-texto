const textArea = document.querySelector(".textArea");
const mensajeDesifrado = document.querySelector(".mensajeDesifrado");
let textoEncriptado = "";

//La letra// "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//BOTÓN PARA ENCRIPTAR
function btnEncriptar(){
    textoEncriptado = encriptar(textArea.value)
    mensajeDesifrado.value = textoEncriptado
    textArea.value = "";
    mensajeDesifrado.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i=0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

//BOTÓN PARA DESENCRIPTAR
function btnDesencriptar(){
    textoEncriptado = desencriptar(textArea.value)
    mensajeDesifrado.value = textoEncriptado
    textArea.value = "";
    mensajeDesifrado.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i=0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

//BOTÓN PARA COPIAR
function btnCopiar() {
    const textarea = document.createElement('textarea');
    textarea.value = textoEncriptado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

//BOTÓN PARA PREINGRESAR
function btnpreingreso(){
    const textoCopiado = mensajeDesifrado.value;
    textArea.value = textoCopiado;
    mensajeDesifrado.value = "";
    mensajeDesifrado.style.backgroundImage = "reset";
}