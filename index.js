function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");


    let textoCifrado = texto
     .replace(/e/gi, "enter")
     .replace(/i/gi, "imes")
     .replace(/a/gi, "ai")
     .replace(/o/gi, "ober")
     .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        document.getElementById("texto2").value = textoCifrado;
        document.getElementById("mostrar").style.display = "block";
        tituloMensaje.textContent = "texto encriptado con exito";
        parrafo.textContent = "";
        muñeco.src = document.getElementById("muñeco").style.display = "none";
    } 
    else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
     .replace(/enter/gi, "e")
     .replace(/imes/gi, "i")
     .replace(/ai/gi, "a")
     .replace(/ober/gi, "o")
     .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        document.getElementById("texto2").value = textoCifrado;
        document.getElementById("mostrar").style.display = "block";
        tituloMensaje.textContent = "texto desencriptado con exito";
        parrafo.textContent = "";
        muñeco.src = document.getElementById("muñeco").style.display = "none";
    } 
    else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function copiar() {
    let texto = document.querySelector("#texto2");
    texto.select();
    document.execCommand("copy");
}





