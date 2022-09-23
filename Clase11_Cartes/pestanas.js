let botones = document.querySelectorAll(".boton_pestaña");
let proyectos = document.querySelectorAll(".Proyectos_Sustentables")[0];
let articulos = document.querySelectorAll(".activo");

proyectos.addEventListener('click', hola);

function hola(e) {
    const id = e.target.dataset.id;
    if (id) {
        botones.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        articulos.forEach(function (articulo) {
            articulo.classList.remove("active");
        });
        
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}