let duda = document.getElementById('duda');
let boton_consulta = document.getElementById('gatillante')
let boton = document.getElementById('random');
let carta = document.getElementById('carta');
let opciones = document.getElementById('opciones');
let por_elegir = document.getElementById('por_elegir');
let feedback = document.getElementsByClassName('feedback')[0];
let link_feedback = "https://github.com/Caciqxe/JS_Comision_40235/tree/master/Final_Cartes"

var botones_nuevos = [];
var lista_nombre_tipos = []
var lista_url_tipos = []
var lista_pokemones_posibles = []
var nombre_tipo = []
var url_tipo = []

feedback.addEventListener("click", reportar_error)
boton_consulta.addEventListener("click", triger_consulta)
boton.addEventListener("click", triger)

function reportar_error() {
    Swal.fire({
        title: "Lamentamos los inconvenientes",
        html:`¡Si gusta puede dejar un comentario en el repositorio de <a href="${link_feedback}">GitHub</a> para revisarlo!`,
        icon: "error",
        background: "#e6e6e6",
    })
}

function triger_consulta() {
    let consultar = duda.value;
    carta.innerHTML = "";
    por_elegir.innerHTML = ""
    opciones.innerHTML = ""
    por_elegir.innerHTML = ""
    lista_nombre_tipos = []
    lista_url_tipos = []

    if (isNaN(parseInt(consultar)) || ((parseInt(consultar)>898) || parseInt(consultar)<1)) {
        Swal.fire({
            title: "Ingrese un N° valido de pokedex porfavor (1 - 898)",
            icon: "error",
            background: "#e6e6e6",
        })
    } else {
        let url = `https://pokeapi.co/api/v2/pokemon-form/${consultar}`
        rescatar_info(url)
    }
}


function triger() {
    let random1 = Math.floor(Math.random()*10)
    let random2 = Math.floor(Math.random()*10) 
    let random3 = Math.floor(Math.random()*10)
    let pokemon_enemigo = parseInt('' + random1 + random2 + random3)
    duda.value = ""
    carta.innerHTML = "";
    por_elegir.innerHTML = ""
    lista_nombre_tipos = []
    lista_url_tipos = []
    if (((pokemon_enemigo>898) || pokemon_enemigo<1)) {
        triger()
    } else {
        let url = `https://pokeapi.co/api/v2/pokemon-form/${pokemon_enemigo}`
        rescatar_info(url)
    }
}

function rescatar_info(url) {
    fetch(url)
    .then(info => info.json())
    .then(info => {
        let nombre_pokemon = info.pokemon['name']
        let sprite_pokemon = info.sprites['front_default']
        let largo_type = (info['types']).length
        console.log(largo_type);
        if (largo_type === 2) {
            const type_pokemon1 = info.types[0]['type']['name']
            const type_pokemon2 = info.types[1]['type']['name']
            const type_pokemon_url_1 = info.types[0]['type']['url']
            const type_pokemon_url_2 = info.types[1]['type']['url']
            rescatar_lista_tipos_2(type_pokemon_url_1,type_pokemon_url_2)
            carta.innerHTML += `<div class="card">
            <p>Nombre: ${nombre_pokemon}</p>
            <img src="${sprite_pokemon}" alt="">
            <p>Tipo 1: ${type_pokemon1}</p>
            <p>Tipo 2: ${type_pokemon2}</p>
            </div>`;
        } else {
            const type_pokemon1 = info.types[0]['type']['name']
            const type_pokemon_url_1 = info.types[0]['type']['url']
            rescatar_lista_tipo(type_pokemon_url_1)
            carta.innerHTML += `<div class="card">
            <p>Nombre: ${nombre_pokemon}</p>
            <img src="${sprite_pokemon}" alt="">
            <p>Tipo 1: ${type_pokemon1}</p>
            </div>`;
            ;
            lista_nombre_tipos.splice(0,lista_nombre_tipos.length)
        }
    })
}

function rescatar_lista_tipos_2(url_tipo1,url_tipo2) {
    lista_nombre_tipos.splice(0,lista_nombre_tipos.length)
    rescatar_lista_tipo(url_tipo1);
    rescatar_lista_tipo(url_tipo2);
}

function rescatar_lista_tipo(url) {
    console.log(url);
    fetch(url)
    .then(info => info.json())
    .then(info => {
    let lista = info.damage_relations['double_damage_from']
    numero_elementos = Object.keys(lista).length
    let i = 0
    while (i < numero_elementos) {
        lista_nombre_tipos.push(lista[i]['name']);
        lista_url_tipos.push(lista[i]['url'])
        i++
    }
    console.log(lista_nombre_tipos);

    opciones.innerHTML = ""
    crear_botones()
    })
}

function crear_botones () {
    if (ver_si_unico(lista_nombre_tipos)) {
        for (var i = 0; i < lista_nombre_tipos.length; i++) {
            opciones.innerHTML += `<button id="${lista_url_tipos[i]}">` + `${lista_nombre_tipos[i].toUpperCase()}` + "</button>";
            botones_nuevos[i] = document.getElementById(lista_url_tipos[i]);
        }

        let escuchar_click = document.getElementsByTagName("button")

        const boton_apretado = e =>{
            if (lista_url_tipos.includes(e.target.id)) {
                console.log(e.target.id);
                fetch(e.target.id)
                .then(info => info.json())
                .then(info => {
                    por_elegir.innerHTML = ""
                    let i = 0
                    while (i < 9) {
                        let pokemones = info.pokemon[i]['pokemon']['url'];
                        let pokemones_transformados = pokemones.replace("pokemon","pokemon-form");
                        lista_pokemones_posibles.push(pokemones_transformados);
                        recomendar_pokemon(lista_pokemones_posibles[i])
                        i++
                    }
                    lista_pokemones_posibles = []
                    });
            } else {
                
            }
        }

        for (let button of escuchar_click){
            button.addEventListener("click", boton_apretado)
        }
    } else {
        opciones.innerHTML += `
        <p>Este pokemon tiene un tipo de daño que se repite, por lo que ese haria el cuadruple del daño, te animamos a que hagas el intento de encontrarlo en esta tabla!!</p>
        <img src="./images/Efectividades.webp" alt="">`;
    }
}

function ver_si_unico(arr) {
    var map = {}, i, tamaño;

    for (i = 0, tamaño = arr.length; i < tamaño; i++){
        if (map[arr[i]]){
            return false;
        }

        map[arr[i]] = true;
    }

    return true;
}

function recomendar_pokemon(url) {
    fetch(url)
    .then(info => info.json())
    .then(info => {
        let nombre_pokemon = info.pokemon['name']
        let sprite_pokemon = info.sprites['front_default']
        por_elegir.innerHTML += `<div class="card_opcion">
        <p>Nombre: ${nombre_pokemon} </p>
        <img src="${sprite_pokemon}" alt="">
        </div">`;
    })
}
