let btnAdicionar = document.getElementById("btnAdicionar");
let valor = document.querySelector('.valor');
btnAdicionar.addEventListener("click", function () {
    valor.focus();

    let elementos = [];
    let valor = document.getElementById("valor").value;
    elementos.push(valor.toString());

    let elementoOL = document.createElement("OL");
    elementos.forEach(element => {
        let elementLI = document.createElement("LI");
        let textNode = document.createTextNode(element);
        elementLI.appendChild(textNode);

        elementoOL.appendChild(textNode);
    });

    document.body.appendChild(elementoOL);

}); 