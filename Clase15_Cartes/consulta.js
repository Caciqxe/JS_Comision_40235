let duda = document.getElementById('duda')
let boton = document.getElementById('gatillante')
let carta = document.getElementById('carta')

console.log(duda);
console.log(boton);
console.log(carta);
console.log(Math.random());

boton.addEventListener("click", triger)

function triger() {
    let consultar = duda.value;
    console.log(parseInt(consultar));
    carta.innerHTML = "";
    if (isNaN(parseInt(consultar)) || ((parseInt(consultar)>898) || parseInt(consultar)<1)) {
        Swal.fire({
            title: "Ingrese un N° valido de pokedex porfavor (1 - 898)",
            icon: "error",
            background: "#e6e6e6",
        })
    } else {
        console.log(consultar);
        let url = `https://pokeapi.co/api/v2/pokemon-form/${consultar}`
        rescatar_info(url)
    }
}

function rescatar_info(url) {
    fetch(url)
    .then(info => info.json())
    .then(info => {
        let nombre_pokemon = info.pokemon['name']
        let sprite_pokemon = info.sprites['front_default']
        console.log(nombre_pokemon);
        console.log(sprite_pokemon);
        carta.innerHTML += `<div class="card">
        <p>${nombre_pokemon}</p>
        <img src="${sprite_pokemon}" alt="">
    </div>`;
    })
}