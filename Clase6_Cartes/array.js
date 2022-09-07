// Elementos
let correos = [];
let nuevo_correo = document.getElementsByClassName('mail')[0];
let mostrar = document.getElementsByClassName('mostrar_correos')[0]; 
let numero = document.getElementsByClassName('numero_correos')[0]; 

//Funcion
function AgregarCorreo() {
    if (nuevo_correo.value=="") {
        event.preventDefault();
        alert("INGRESE CORREO")

    } else {
        event.preventDefault();

        let agregar_correo = correos.push(nuevo_correo.value);
        console.log(nuevo_correo.value);
        console.log(correos);
    
        mostrar.innerHTML = correos;
        numero.innerHTML = correos.length;
        nuevo_correo.value = "";
    }
}