function validarFormulario() {
let producto = document.getElementById("producto").value;
let direccion = document.getElementById("direccion").value;
let nombre_usuario = document.getElementById("nombre_usuario").value;
let cantidad = document.getElementById("cantidad").value;
let metodo_pago = document.getElementById("metodo_pago").value;
let telefono = document.getElementById("telefono").value;
    if (producto === "" || direccion === "" || nombre_usuario === "" || cantidad === "" || metodo_pago === "" || telefono === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }
    if (!/^\d+$/.test(cantidad)) {
        alert("La cantidad solo debe contener números.");
        return false;
    }
    if (!/^\d+$/.test(telefono)) {
        alert("El teléfono solo debe contener números.");
        return false;
    }
    if (metodo_pago !== "Efectivo" && metodo_pago !== "Tarjeta" && metodo_pago !== "Transferencia") {
        alert("Por favor, seleccione un método de pago válido.");
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(producto)) {
        alert("El producto solo debe contener letras y espacios.");
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(nombre_usuario)) {
        alert("El nombre del usuario solo debe contener letras y espacios.");
        return false;
    }
    return true;
}

document.getElementById("btnGuardar").onclick = validarFormulario;