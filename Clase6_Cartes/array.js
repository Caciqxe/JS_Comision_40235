// Elementos
let correos = [];
let nuevo_correo = document.getElementsByClassName('mail')[0];
let mostrar = document.getElementsByClassName('mostrar_correos')[0]; 

// Evento
//respuesta.addEventListener('sumbit',AgregarCorreo);

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
        nuevo_correo.value = "";
    }
}
