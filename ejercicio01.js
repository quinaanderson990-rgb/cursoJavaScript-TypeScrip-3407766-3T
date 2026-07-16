// Ejercicio01 - Empresa de domicilios

// se guarda los pedidos, nombres y pesos
const pedidos = [
    { nombre: "Pedido 1", peso: 0.5 },
    { nombre: "Pedido 2", peso: 2 },
    { nombre: "Pedido 3", peso: 4 },
    { nombre: "Pedido 4", peso: 1.5 },
    { nombre: "Pedido 5", peso: 3.5 }
];

// se guarda el total de todos los costos
let total = 0;

// Recorro cada pedido para revisar su peso
for (const pedido of pedidos) {

    let costo = 0;

    // Si pesa menos de 1 kg cuesta 4000
    if (pedido.peso < 1) {
        costo = 4000;
    }
    // Si pesa entre 1 y 3 kg cuesta 8000
    else if (pedido.peso >= 1 && pedido.peso <= 3) {
        costo = 8000;
    }
    // Si pesa más de 3 kg cuesta 14000
    else {
        costo = 14000;
    }

    // Voy sumando los costos
    total = total + costo;

    // Muestro los datos del pedido
    console.log(
        "Nombre: " + pedido.nombre +
        " | Peso: " + pedido.peso + " kg" +
        " | Costo: $" + costo.toLocaleString("es-CO")
    );
}

//  el total de todos los domicilios
console.log("Total de costos: $" + total.toLocaleString("es-CO"));