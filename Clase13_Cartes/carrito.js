//VARIABLES GLOBALES
let carrito = [];
let menos = document.getElementsByClassName('-')[0];
let agregar = document.getElementsByClassName('+')[0];
let menos1 = document.getElementsByClassName('-')[1];
let agregar1 = document.getElementsByClassName('+')[1];

//EVENTOS
menos.addEventListener('click', restar);
agregar.addEventListener('click', suma);
menos1.addEventListener('click', restar1);
agregar1.addEventListener('click', suma1);


// BOTON P1 [0]
function restar(){
    let cantidad = document.getElementsByClassName('display')[0];
    let numero = parseInt(cantidad.innerHTML);
    let precio_unidad = parseInt(document.getElementsByClassName('precio_unit_productos')[0].innerHTML);
    let precio_total = document.getElementsByClassName('precio_total_productos')[0];
    
    if (numero == 0) {
        Swal.fire({
            title: "Producto no se encuentra en carrito",
            icon: "error",
            background: "#b5ffff",
        })
    } else if (numero ==1 ) {
        cantidad.innerHTML = numero - 1;
        precio_total.innerHTML = parseInt(cantidad.innerHTML) * precio_unidad;
        precio_total.innerHTML = "-";
        carrito.pop({'p1': cantidad.innerHTML = numero - 1});
        console.log(carrito);
    } else {
        cantidad.innerHTML = numero - 1;
        precio_total.innerHTML = parseInt(cantidad.innerHTML) * precio_unidad;
        carrito.pop({'p1': cantidad.innerHTML = numero - 1});
        console.log(carrito);
    }
}

function suma(){
    let cantidad = document.getElementsByClassName('display')[0];
    let numero = parseInt(cantidad.innerHTML);
    let precio_unidad = parseInt(document.getElementsByClassName('precio_unit_productos')[0].innerHTML);
    let precio_total = document.getElementsByClassName('precio_total_productos')[0];

    cantidad.innerHTML = numero + 1;
    precio_total.innerHTML = parseInt(cantidad.innerHTML) * precio_unidad;
    carrito.push({'p1': cantidad.innerHTML = numero + 1});
    console.log(carrito);
    Toastify({
        text: `p1 ha sido agregado, cantidad actual en carro es ${cantidad.innerHTML}`,
        duration: 1800,
        gravity: "top",
        position: "right",
        backgroundColor: "#bc544b",
    }).showToast();
}

// BOTON P1 [1]
function restar1(){
    let cantidad = document.getElementsByClassName('display')[1];
    let numero = parseInt(cantidad.innerHTML);
    let precio_unidad = parseInt(document.getElementsByClassName('precio_unit_productos')[1].innerHTML);
    let precio_total = document.getElementsByClassName('precio_total_productos')[1];
    
    if (numero == 0) {
        Swal.fire({
            title: "Producto no se encuentra en carrito",
            icon: "error",
            background: "#b5ffff",
        })
    } else if (numero ==1 ) {
        cantidad.innerHTML = numero - 1;
        precio_total.innerHTML = parseInt(cantidad.innerHTML) * precio_unidad;
        precio_total.innerHTML = "-";
        carrito.pop({'p2': cantidad.innerHTML = numero - 1});
        console.log(carrito);
    } else {
        cantidad.innerHTML = numero - 1;
        precio_total.innerHTML = parseInt(cantidad.innerHTML) * precio_unidad;
        carrito.pop({'p2': cantidad.innerHTML = numero - 1});
        console.log(carrito);
    }
}

function suma1(){
    let cantidad = document.getElementsByClassName('display')[1];
    let numero = parseInt(cantidad.innerHTML);
    let precio_unidad = parseInt(document.getElementsByClassName('precio_unit_productos')[1].innerHTML);
    let precio_total = document.getElementsByClassName('precio_total_productos')[1];

    cantidad.innerHTML = numero + 1;
    precio_total.innerHTML = parseInt(cantidad.innerHTML) * precio_unidad;
    carrito.push({'p2': cantidad.innerHTML = numero + 1});
    console.log(carrito);
    Toastify({
        text: `p2 ha sido agregado, cantidad actual en carro es ${cantidad.innerHTML}`,
        duration: 1800,
        gravity: "top",
        position: "right",
        backgroundColor: "#bc544b",
    }).showToast();
}

while (condition) {
    
}
