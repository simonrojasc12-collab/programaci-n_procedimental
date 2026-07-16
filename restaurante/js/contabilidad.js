function validarFormulario() {
let ventas = document.getElementById("ventas").value;
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let concepto = document.getElementById("concepto").value;
let valor = document.getElementById("valor").value;
let tipo_movimiento = document.getElementById("usuario").value;

    if (ventas === "" || fecha === "" || ingresos === "" || concepto === "" || valor === "") {
        Swal.fire({
            title: "Los campos estan vacios",
            icon: "Error",
        });
        console.log("Por favor, complete todos los campos del formulario.");
        return;
    }
    if (!/^\d+$/.test(ventas)) {
        Swal.fire({
            title: "Complete el campo correctamente!",
            icon: "Error",
        });
        console.log("Las ventas solo deben contener números.");
        return;
    }
    if (isNaN(Date.parse(fecha))) {
        Swal.fire({
            title: "Drag me!",
            icon: "Error",
            draggable: true
        });
        console.log("Por favor, ingrese una fecha válida.");
        return;       
    }
    if (new Date(fecha) > new Date()) {
        Swal.fire({
            title: "Drag me!",
            icon: "Error",
            draggable: true
        });
        console.log("La fecha no puede ser en el futuro.");
        return;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(ingresos)) {
        Swal.fire({
            title: "Drag me!",
            icon: "Error",
            draggable: true
        });
        console.log("Los ingresos solo deben contener números y pueden tener hasta dos decimales.");
        return;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(valor)) {
        Swal.fire({
            title: "Drag me!",
            icon: "Error",
            draggable: true
        });
        console.log("El valor solo debe contener números y puede tener hasta dos decimales.");
        return;
    }
    if (!/^[a-zA-Z]+$/.test(nombre)) {
        Swal.fire({
            title: "Drag me!",
            icon: "Error",
            draggable: true
        });
        console.log("El nombre solo debe contener letras.");
        return;
    }
}


document.getElementById("btnRegistrar").onclick = validarFormulario;