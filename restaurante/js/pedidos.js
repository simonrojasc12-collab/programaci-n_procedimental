function validarFormulario() {
    let producto = document.getElementById("producto").value;
    let direccion = document.getElementById("direccion").value;
    let nombre_usuario = document.getElementById("nombre_usuario").value;
    let cantidad = document.getElementById("cantidad").value;
    let metodo_pago = document.getElementById("metodo_pago").value;
    let telefono = document.getElementById("telefono").value;
    if (producto === "" || direccion === "" || nombre_usuario === "" || cantidad === "" || metodo_pago === "" || telefono === "") {
        console.log("Por favor, complete todos los campos del formulario.");
        Swal.fire({
            title: "Por favor, complete todos los campos del formulario.",
            icon: "error",
        });
        return false;
    }
    if (!/^\d+$/.test(cantidad)) {
        console.log("La cantidad solo debe contener números.");
        Swal.fire({
            title: "La cantidad solo debe contener números",
            icon: "error",
        });
        return false;
    }
    if (!/^\d+$/.test(telefono)) {
        console.log("El teléfono solo debe contener números.");
        Swal.fire({
            title: "El teléfono solo debe contener números",
            icon: "error",
        });
        return false;
    }
    if (metodo_pago !== "Efectivo" && metodo_pago !== "Tarjeta" && metodo_pago !== "Transferencia") {
        console.log("Por favor, seleccione un método de pago válido.");
        Swal.fire({
            title: "Por favor, seleccione un método de pago válido",
            icon: "error",
        });
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(producto)) {
        console.log("El producto solo debe contener letras y espacios.");
        Swal.fire({
            title: "El producto solo debe contener letras y espacios",
            icon: "error",
        });
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(nombre_usuario)) {
        console.log("El nombre del usuario solo debe contener letras y espacios.");
        Swal.fire({
            title: "El nombre del usuario solo debe contener letras y espacios",
            icon: "error",
        });
        return false;
    }
    return true;
}

document.getElementById("btnGuardar").onclick = validarFormulario;