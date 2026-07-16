// Ejercicio 07 - Empresa de ventas

// se guarda las ventas de cada día de la semana
const ventas = [
    { dia: "Lunes", totalVendido: 300000 },
    { dia: "Martes", totalVendido: 450000 },
    { dia: "Miércoles", totalVendido: 250000 },
    { dia: "Jueves", totalVendido: 600000 },
    { dia: "Viernes", totalVendido: 500000 },
    { dia: "Sábado", totalVendido: 700000 },
    { dia: "Domingo", totalVendido: 400000 }
];


// Esta función suma todas las ventas de la semana
function calcularTotal(ventas) {

    const total = ventas.reduce((suma, venta) => {
        return suma + venta.totalVendido;
    }, 0);

    return total;
}


// Esta función busca el día con más ventas
function encontrarMejorDia(ventas) {

    const mejorDia = ventas.reduce((mayor, venta) => {

        if (venta.totalVendido > mayor.totalVendido) {
            return venta;
        } else {
            return mayor;
        }

    });

    return mejorDia;
}


// Esta función busca los días que superan un valor mínimo
function filtrarDiasDestacados(ventas, minimo) {

    return ventas.filter(venta => venta.totalVendido > minimo);

}


// Llamo las funciones y guardo los resultados
const totalSemana = calcularTotal(ventas);

const mejorVenta = encontrarMejorDia(ventas);

const diasDestacados = filtrarDiasDestacados(ventas, 450000);


// Muestro el total vendido en la semana
console.log(
    "Total vendido en la semana: $" + totalSemana.toLocaleString("es-CO")
);


// Muestro el mejor día de ventas
console.log(
    "Mejor día: " + mejorVenta.dia +
    " | Venta: $" + mejorVenta.totalVendido.toLocaleString("es-CO")
);


// Muestro los días destacados
console.log("Días destacados:");

diasDestacados.forEach(venta => {
    console.log(
        venta.dia +
        " | $" + venta.totalVendido.toLocaleString("es-CO")
    );
});