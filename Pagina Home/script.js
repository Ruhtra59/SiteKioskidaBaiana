let botao_avancar = document.getElementById("BtAvanc");
let botao_voltar = document.getElementById("BtVolt");
let moldura = document.getElementById("moldura");

let imagens = ["comida (1).jpeg","comida (2).jpeg","comida (3).jpeg","comida (4).jpeg","comida (5).jpeg"];
let indice = 0;
let temporizador;

const path = "./Pagina Home/img/";
const tempo_espera = 2500;

window.onload = iniciar;

function iniciar(){
    botao_avancar.onclick = avancar_fotos;
    botao_voltar.onclick = voltar_fotos;
    mostrar_foto();
    automatizar_foto();
}

function voltar_fotos(){
    if(indice > 0){
        indice--;
    }

    else{
        indice = imagens.length - 1;
    }

    reiniciar_foto();
}

function avancar_fotos(){
    if(indice < imagens.length - 1){
        indice++;
    }

    else{
        indice = 0;
    }

    reiniciar_foto();
}

function reiniciar_foto(){
    mostrar_foto();
    clearInterval(temporizador);
    automatizar_foto();
}

function automatizar_foto(){
    temporizador = setInterval(avancar_fotos, tempo_espera);
}

function mostrar_foto(){
    moldura.src = path + imagens[indice];
}