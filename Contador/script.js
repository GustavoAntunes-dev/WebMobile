const numeroAntigo = document.getElementById("numero");
const btDecrementar = document.getElementById("Decrementar");
const btResetar = document.getElementById("Resetar");
const btIncrementar = document.getElementById("Incrementar");

let numeroAtual = 0;

btIncrementar.onclick = () => {
    numeroAtual++;
    numeroAntigo.innerHTML = numeroAtual;
};

btDecrementar.onclick = () => {

    atualizarNumeroNegativo();
};

btResetar.onclick = () => {
    numeroAtual = 0;
    numeroAntigo.innerHTML = numeroAtual;
};
const atualizarNumeroNegativo = () => {
    if (numeroAtual > 0) {
        numeroAtual--;
        numeroAntigo.innerHTML = numeroAtual;
    } else {
        numeroAtual = 0;
    }

};
