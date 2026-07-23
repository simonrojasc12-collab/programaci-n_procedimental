function validarFormulario() {
    let codigo_producto = document.getElementById("codigo_producto").value;
    let nombre_producto = document.getElementById("nombre_producto").value;
    let marca_producto = document.getElementById("marca_producto").value;
    let cantidad_producto = document.getElementById("cantidad_producto").value;

    if (codigo_producto === "" || nombre_producto === "" || marca_producto === "" || cantidad_producto === "") {
        console.log("Por favor, complete todos los campos del formulario.");
        Swal.fire({
            title: "Completa todos los campos del formularios",
            icon: "success",
        });
        return false;
    }
    if (!/^\d+$/.test(codigo_producto)) {
        console.log("El código del producto solo debe contener números.");
        Swal.fire({
            title: "Código del producto solo debe contener números",
            icon: "success",
        });
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(nombre_producto)) {
        console.log("El nombre del producto solo debe contener letras y espacios.");
        Swal.fire({
            title: "Nombre del producto solo debe contener letras y espacios",
            icon: "success",
        });
        return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(marca_producto)) {
        console.log("La marca del producto solo debe contener letras y espacios.");
        Swal.fire({
            title: "Marca del producto solo debe contener letras y espacios",
            icon: "success",
        });
        return false;
    }
    if (!/^\d+$/.test(cantidad_producto)) {
        console.log("La cantidad del producto solo debe contener números.");
        Swal.fire({
            title: "Cantidad del producto solo debe contener números",
            icon: "success",
        });
        return false;
    }
    return true;
}

document.getElementById("btnRegistrar").onclick = validarFormulario;
     