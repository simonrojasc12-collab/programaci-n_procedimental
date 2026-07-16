function validarFormulario() {
let ventas = document.getElementById("ventas").value;
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let concepto = document.getElementById("concepto").value;
let valor = document.getElementById("valor").value;
let tipo_movimiento = document.getElementById("usuario").value;

    if (ventas === "" || fecha === "" || ingresos === "" || concepto === "" || valor === "") {
        console.log("Por favor, complete todos los campos del formulario.");
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
        });
    }
    if (!/^\d+$/.test(ventas)) {
        console.log("Las ventas solo deben contener números.");
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
        });
    }
    if (isNaN(Date.parse(fecha))) {
        console.log("Por favor, ingrese una fecha válida.");
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
        });
    }
    if (new Date(fecha) > new Date()) {
        console.log("La fecha no puede ser en el futuro.");
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
        });
    }
    if (!/^\d+(\.\d{1,2})?$/.test(ingresos)) {
        console.log("Los ingresos solo deben contener números y pueden tener hasta dos decimales.");
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
        });
    }
    if (!/^\d+(\.\d{1,2})?$/.test(valor)) {
        console.log("El valor solo debe contener números y puede tener hasta dos decimales.");
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
        });
    }
    if (!/^[a-zA-Z]+$/.test(nombre)) {
        console.log("El nombre solo debe contener letras.");
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
        });
    }
}


document.getElementById("btnGuardar").onclick = validarFormulario;