let cambio_color = document.getElementById("cambio_color");
let titulo = document.getElementById("titulo");
let elemento = document.querySelector('body');

let abecedario = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];

//Posiciones Aleatorias

function Aleatorio() {
    let aleatorio1 = abecedario[Math.floor(Math.random()*abecedario.length)];
    let aleatorio2 = abecedario[Math.floor(Math.random()*abecedario.length)];
    let aleatorio3 = abecedario[Math.floor(Math.random()*abecedario.length)];
    let aleatorio4 = abecedario[Math.floor(Math.random()*abecedario.length)];
    let aleatorio5 = abecedario[Math.floor(Math.random()*abecedario.length)];
    let aleatorio6 = abecedario[Math.floor(Math.random()*abecedario.length)];

    let nuevo_color = '#'+aleatorio1+aleatorio2+aleatorio3+aleatorio4+aleatorio5+aleatorio6
    //let Aleatorio = document.body.style.background()
    elemento.style.background = nuevo_color
    titulo.innerHTML = nuevo_color
    console.log(nuevo_color);
}

cambio_color.addEventListener("click", Aleatorio);





console.log(cambio_color);


//GENERA NÚMERO ALEATORIO ENTRE 0 Y 1
console.log(Math.random());
