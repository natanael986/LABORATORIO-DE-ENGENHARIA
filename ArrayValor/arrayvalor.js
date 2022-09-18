let btnAdicionar = document.getElementById("btnAdicionar");
let valores = document.getElementById("valores");
let campoValor = document.querySelector('.campoValor');
campoValor.focus();

btnAdicionar.addEventListener("click", function () {

    let elementos = [];
    let valor = document.getElementById("valor").value;
    elementos.push(valor.toString());

    let elementoOL = document.createElement("OL");
    elementos.forEach(element => {
        let elementLI = document.createElement("LI");
        let textNode = document.createTextNode(element);
        elementLI.appendChild(textNode);

        elementoOL.appendChild(textNode);

        campoValor.value = '';
        campoValor.focus();
    });

    valores.appendChild(elementoOL);

}); 