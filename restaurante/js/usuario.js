function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipo_documento = document.getElementById("tipo_documento").value;
    let numero_documento = document.getElementById("numero_documento").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let genero = document.getElementById("genero").value;
    let cargo = document.getElementById("cargo").value;
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    let contraseña = document.getElementById("contraseña").value;
    if (nombre === "" || apellido === "" || tipo_documento === "" || numero_documento === "" || telefono === "" || correo === "" || genero === "" || cargo === "" || fecha_nacimiento === "" || contraseña === "") {
        console.log("Por favor, complete todos los campos del formulario.");
        Swal.fire({
            title: "Por favor, complete todos los campos del formulario.",
            icon: "error",
        });
        return false;
    }
    if (!/^[a-zA-Z]+$/.test(nombre)) {
        console.log("El nombre solo debe contener letras.");
        Swal.fire({
            title: "El nombre solo debe contener letras.",
            icon: "error"
        });
        return false;
    }
    if (!/^[a-zA-Z]+$/.test(apellido)) {
        console.log("El apellido solo debe contener letras.");
        Swal.fire({
            title: "El apellido solo debe contener letras.",
            icon: "error"
        });
        return false;
    }
    if (!/^\d+$/.test(numero_documento)) {
        console.log("El número de documento solo debe contener números.");
        Swal.fire({
            title: "El número de documento solo debe contener números.",
            icon: "error"
        });
        return false;
    }
    if (!/^\d+$/.test(telefono)) {
        console.log("El teléfono solo debe contener números.");
        Swal.fire({
            title: "El teléfono solo debe contener números.",
            icon: "error"
        });
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        console.log("Por favor, ingrese un correo electrónico válido.");
        Swal.fire({
            title: "Por favor, ingrese un correo electrónico válido.",
            icon: "error"
        });
        return false;
    }
    if (contraseña.length < 6) {
        console.log("La contraseña debe tener al menos 6 caracteres.");
        Swal.fire({
            title: "La contraseña debe tener al menos 6 caracteres.",
            icon: "error"
        });
        return false;
    }
    if (isNaN(Date.parse(fecha_nacimiento))) {
        console.log("Por favor, ingrese una fecha de nacimiento válida.");
        Swal.fire({
            title: "Por favor, ingrese una fecha de nacimiento válida.",
            icon: "error"
        });
        return false;
    }
    if (new Date(fecha_nacimiento) > new Date()) {
        console.log("La fecha de nacimiento no puede ser en el futuro.");
        Swal.fire({
            title: "La fecha de nacimiento no puede ser en el futuro.",
            icon: "error"
        });
        return false;
    }
    if (cargo !== "Administrador" && cargo !== "Cocinero" && cargo !== "Mesero") {
        console.log("Por favor, seleccione un cargo válido.");
        Swal.fire({
            title: "Por favor, seleccione un cargo válido.",
            icon: "error"
        });
        return false;
    }
    if (genero !== "Masculino" && genero !== "Femenino" && genero !== "Otro") {
        console.log("Por favor, seleccione un género válido.");
        Swal.fire({
            title: "Por favor, seleccione un género válido.",
            icon: "error"
        });
        return false;
    }
    if (tipo_documento !== "C.C" && tipo_documento !== "T.I") {
        console.log("Por favor, seleccione un tipo de documento válido.");
        Swal.fire({
            title: "Por favor, seleccione un tipo de documento válido.",
            icon: "error"
        });
        return false;
    }
    return true;
}

document.getElementById("btnRegistrar").onclick = validarFormulario;