let nombreDeAmigos = [];


function mostrarAmigos(elemento, texto) {
    let listaDeAmigos = document.getElementById(elemento);
    listaDeAmigos.innerHTML = Array.isArray(texto) ? texto.join('<br>') : texto;
}


function limpiarInput() {
    document.getElementById('amigo').value = '';
}


function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    if (!nombre) {
        alert('No puedes agregar valores vacios')
    } else {
        nombreDeAmigos.push(nombre);
    }
    limpiarInput();
    mostrarAmigos('listaAmigos', nombreDeAmigos);
}

function sortearAmigo() {
    if (nombreDeAmigos.length === 0) {
        alert('Agrega algunos amigos para poder sortear');
        return false;
    }
    let indiceAleatorio = Math.floor(Math.random() * nombreDeAmigos.length);
    let nombreGanador = nombreDeAmigos[indiceAleatorio];
    mostrarAmigos('resultado', nombreGanador);
}
