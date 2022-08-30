var el = document.getElementById("btVerificar");
el.addEventListener("click", isPalindromo, false);

function isPalindromo() {
    let texto = document.getElementById('txtbox').value;
    let textoSemEspaco = texto.replace(" ", "").toLowerCase();
    let textInvertido = inverter(textoSemEspaco);

    if (textoSemEspaco == textInvertido)
        alert(texto + " é um palindromo")
    alert(texto + " não é um palindromo")
}

function inverter(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}