let codigo_producto = document.getElementById("codigo_producto").value;
let nombre_producto = document.getElementById("nombre_producto").value;
let marca_producto = document.getElementById("marca_producto").value;
let cantidad_producto = document.getElementById("cantidad_producto").value;

function validarFormulario() {
    if (codigo_producto === "" || nombre_producto === "" || marca_producto === "" || cantidad_producto === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }
    if (!/^\d+$/.test(codigo_producto)) {
        alert("El código del producto solo debe contener números.");
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(nombre_producto)) {
        alert("El nombre del producto solo debe contener letras y espacios.");
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(marca_producto)) {
        alert("La marca del producto solo debe contener letras y espacios.");
        return false;
    }
    if (!/^\d+$/.test(cantidad_producto)) {
        alert("La cantidad del producto solo debe contener números.");
        return false;
    }
    return true;
}