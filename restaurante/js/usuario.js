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

function validarFormulario() {
    if (nombre === "" || apellido === "" || tipo_documento === "" || numero_documento === "" || telefono === "" || correo === "" || genero === "" || cargo === "" || fecha_nacimiento === "" || contraseña === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }
    if (!/^[a-zA-Z]+$/.test(nombre)) {
        alert("El nombre solo debe contener letras.");
        return false;
    }
    if (!/^[a-zA-Z]+$/.test(apellido)) {
        alert("El apellido solo debe contener letras.");
        return false;
    }
    if (!/^\d+$/.test(numero_documento)) {
        alert("El número de documento solo debe contener números.");
        return false;
    }
    if (!/^\d+$/.test(telefono)) {
        alert("El teléfono solo debe contener números.");
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }
    if (contraseña.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }
    if (isNaN(Date.parse(fecha_nacimiento))) {
        alert("Por favor, ingrese una fecha de nacimiento válida.");
        return false;
    }
    if (new Date(fecha_nacimiento) > new Date()) {
        alert("La fecha de nacimiento no puede ser en el futuro.");
        return false;
    }
    if (cargo !== "Administrador" && cargo !== "Cocinero" && cargo !== "Mesero") {
        alert("Por favor, seleccione un cargo válido.");
        return false;
    }
    if (genero !== "Masculino" && genero !== "Femenino" && genero !== "Otro") {
        alert("Por favor, seleccione un género válido.");
        return false;
    }
    if (tipo_documento !== "DNI" && tipo_documento !== "Pasaporte" && tipo_documento !== "Carnet de Extranjería") {
        alert("Por favor, seleccione un tipo de documento válido.");
        return false;
    }
    return true;
}