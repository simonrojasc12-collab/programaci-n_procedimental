let ventas = document.getElementById("ventas").value;
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let concepto = document.getElementById("concepto").value;
let valor = document.getElementById("valor").value;
let tipo_movimiento = document.getElementById("usuario").value;

function validarFormulario() {
    if (ventas === "" || fecha === "" || ingresos === "" || concepto === "" || valor === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }
    if (!/^\d+$/.test(ventas)) {
        alert("Las ventas solo deben contener números.");
        return false;
    }
    if (isNaN(Date.parse(fecha))) {
        alert("Por favor, ingrese una fecha válida.");
        return false;
    }
    if (new Date(fecha) > new Date()) {
        alert("La fecha no puede ser en el futuro.");
        return false;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(ingresos)) {
        alert("Los ingresos solo deben contener números y pueden tener hasta dos decimales.");
        return false;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(valor)) {
        alert("El valor solo debe contener números y puede tener hasta dos decimales.");
        return false;
    }
        if (!/^[a-zA-Z]+$/.test(nombre)) {
        alert("El nombre solo debe contener letras.");
        return false;
    }
    return true;
}
