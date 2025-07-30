let nombreDeAmigos = [];


function mostrarAmigos(elemento, texto) {
    let listaDeAmigos = document.getElementById(elemento);
    listaDeAmigos.innerHTML = Array.isArray(texto) ? texto.join('<br>') : texto;
}


function limpiarInput() {
    document.getElementById('amigo').value = '';
}


function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    nombreDeAmigos.push(nombre);
    limpiarInput();
    mostrarAmigos('listaAmigos', nombreDeAmigos);
}


