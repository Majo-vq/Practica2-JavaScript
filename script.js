document.getElementById("formulario").addEventListener("submit", function(evento) {

    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let contacto = document.getElementById("contacto").value;
    let fecha = document.getElementById("fecha").value;
    let personas = document.getElementById("personas").value;
    let comentarios = document.getElementById("comentarios").value;
    let mensaje = document.getElementById("mensaje");

    let errores = "";

    if (nombre.trim() == "") {
        errores += "Debe ingresar su nombre completo.<br>";
    }

    if (contacto.trim() == "") {
        errores += "Debe ingresar su correo electrónico.<br>";
    } else {
        let correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!correoValido.test(contacto)) {
            errores += "El correo electrónico no es válido.<br>";
        }
    }

    let hoy = new Date();
    let fechaActual = hoy.getFullYear() + "-" +
        String(hoy.getMonth() + 1).padStart(2, "0") + "-" +
        String(hoy.getDate()).padStart(2, "0");

    if (fecha == "") {
        errores += "Debe seleccionar una fecha.<br>";
    } else if (fecha < fechaActual) {
        errores += "La fecha no puede ser anterior a hoy.<br>";
    }

    if (personas == "") {
        errores += "Debe ingresar el número de personas.<br>";
    } else if (Number(personas) <= 0 || !Number.isInteger(Number(personas))) {
        errores += "El número de personas debe ser un entero mayor a cero.<br>";
    }

    if (comentarios.trim() == "") {
        errores += "Debe ingresar un comentario.<br>";
    }

    mensaje.style.display = "block";

    if (errores != "") {
        mensaje.className = "error";
        mensaje.innerHTML = errores;
    } else {
        mensaje.className = "exito";

        mensaje.innerHTML = "<strong>Información enviada correctamente.</strong>";

function agregarDato(etiqueta, valor) {
    let parrafo = document.createElement("p");
    parrafo.textContent = etiqueta + valor;
    mensaje.appendChild(parrafo);
}

agregarDato("Nombre: ", nombre);
agregarDato("Contacto: ", contacto);
agregarDato("Fecha: ", fecha);
agregarDato("Número de personas: ", personas);
agregarDato("Comentarios: ", comentarios);
    }

});