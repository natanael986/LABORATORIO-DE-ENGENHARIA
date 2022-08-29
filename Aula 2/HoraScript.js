function horarioAtual() {
    let horario = new Date().toLocaleTimeString();
    document.getElementById("rel").innerHTML = horario;
    setTimeout(horarioAtual, 1000);
}