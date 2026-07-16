// Ejercicio 05 - Restaurante

// se guarda los pedidos con mesa, plato y valor
const pedidos = [
    { mesa: 1, plato: "bandeja paisa", valor: 45000 },
    { mesa: 2, plato: "trucha al vapor", valor: 55000 },
    { mesa: 3, plato: "Pasta italina", valor: 38000 },
    { mesa: 4, plato: "costilla a la parrilla", valor: 70000 },
    { mesa: 5, plato: "Ensalada defruta super combo", valor: 30000 }
];

// se busca el primer pedido que supera los 50000
const pedidoCostoso = pedidos.find(pedido => pedido.valor > 50000);

// se filtra los pedidos que cuestan 50000 o menos
const pedidosEconomicos = pedidos.filter(pedido => pedido.valor <= 50000);

//  sumo todo el dinero recogido en el día
const totalDia = pedidos.reduce((total, pedido) => {
    return total + pedido.valor;
}, 0);


// Muestro el primer pedido costoso encontrado
console.log("Primer pedido costoso encontrado:");

console.log(
    "Mesa: " + pedidoCostoso.mesa +
    " | Plato: " + pedidoCostoso.plato +
    " | Valor: $" + pedidoCostoso.valor.toLocaleString("es-CO")
);


// Muestro los pedidos económicos
console.log("Pedidos económicos:");

pedidosEconomicos.forEach(pedido => {
    console.log(
        "Mesa: " + pedido.mesa +
        " | Plato: " + pedido.plato +
        " | Valor: $" + pedido.valor.toLocaleString("es-CO")
    );
});


// Muestro el total recaudado del día
console.log("Total recaudado del día: $" + totalDia.toLocaleString("es-CO"));