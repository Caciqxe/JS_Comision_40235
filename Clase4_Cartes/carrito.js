let menos = document.getElementsByClassName('-')[0];
let agregar = document.getElementsByClassName('+')[0];

menos.addEventListener('click', restar);
agregar.addEventListener('click', suma);

function restar(){
    let cantidad = document.getElementsByClassName('display')[0];
    let numero = parseInt(cantidad.innerHTML);
    let precio_unidad = parseInt(document.getElementsByClassName('precio_unit_productos')[0].innerHTML);
    let precio_total = document.getElementsByClassName('precio_total_productos')[0];
    
    if (numero == 0) {
        alert ("Carrito ya se encuentra en 0")
    } else if (numero ==1 ) {
        cantidad.innerHTML = numero - 1;
        precio_total.innerHTML = parseInt(cantidad.innerHTML) * precio_unidad
        precio_total.innerHTML = "-"
    } else {
        cantidad.innerHTML = numero - 1;
        precio_total.innerHTML = parseInt(cantidad.innerHTML) * precio_unidad
    }
}

function suma(){
    let cantidad = document.getElementsByClassName('display')[0];
    let numero = parseInt(cantidad.innerHTML);
    let precio_unidad = parseInt(document.getElementsByClassName('precio_unit_productos')[0].innerHTML);
    let precio_total = document.getElementsByClassName('precio_total_productos')[0];

    cantidad.innerHTML = numero + 1;
    precio_total.innerHTML = parseInt(cantidad.innerHTML) * precio_unidad
}