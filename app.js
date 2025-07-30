let nombreDeAmigos = [];


function mostrarAmigos(elemento, texto) {
    let listaDeAmigos = document.getElementById(elemento);
    listaDeAmigos.innerHTML = Array.isArray(texto) ? texto.join('<br>') : texto;
}


