
function alternarInformacoes() {
    var informacoes = document.getElementById("informacoes");
    var botao = document.getElementById("botaoEntrega");

    if (informacoes.style.display === "none") {
        informacoes.style.display = "block";
        botao.innerText = "Ocultar informações";
    } else {
        informacoes.style.display = "none";
        botao.innerText = "Mostrar informações";
    }
}
