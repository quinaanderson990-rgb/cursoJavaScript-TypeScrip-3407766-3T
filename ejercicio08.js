// Ejercicio 08 - gym clientes activos

// se guarda los clientes con su edad, plan y si están activos
const clientes = [
    { nombre: "geronimo", edad: 17, plan: 1, activo: true },
    { nombre: "Laura", edad: 25, plan: 2, activo: true },
    { nombre: "Pablo", edad: 65, plan: 3, activo: true },
    { nombre: "Ana", edad: 30, plan: 1, activo: false },
    { nombre: "karen", edad: 16, plan: 3, activo: true }
];


// se filtra solamente los clientes que están activos
const clientesActivos = clientes.filter(cliente => cliente.activo);


//  se  calcula el precio de cada cliente según su plan
const preciosClientes = clientesActivos.map(cliente => {

    let precio = 0;

    // Reviso el precio según el plan elegido
    if (cliente.plan === 1) {
        precio = 80000;
    }
    else if (cliente.plan === 2) {
        precio = 130000;
    }
    else if (cliente.plan === 3) {
        precio = 200000;
    }


    // Aplico descuentos según la edad
    if (cliente.edad < 18) {
        precio = precio * 0.80;
    }
    else if (cliente.edad >= 60 && cliente.edad <= 99) {
        precio = precio * 0.70;
    }


    // Retorno los datos del cliente con su valor final
    return {
        nombre: cliente.nombre,
        plan: cliente.plan,
        valorFinal: precio
    };

});


// Muestro los clientes con el precio final
preciosClientes.forEach(cliente => {

    console.log(
        "Nombre: " + cliente.nombre +
        " | Plan: " + cliente.plan +
        " | Valor final: $" + cliente.valorFinal.toLocaleString("es-CO")
    );

});


// Sumo todo el dinero que recibe el gimnasio
const ingresoTotal = preciosClientes.reduce((total, cliente) => {
    return total + cliente.valorFinal;
}, 0);


// Muestro el ingreso total del mes
console.log(
    "Ingreso total del mes: $" + ingresoTotal.toLocaleString("es-CO")
);