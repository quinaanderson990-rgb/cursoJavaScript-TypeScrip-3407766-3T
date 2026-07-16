// Ejercicio 04 - Tienda de tecnología

// se guarda los productos de la tienda con su precio y cantidad disponible
const productos = [
    { nombre: "Laptop", precio: 1800.000, stock: 3 },
    { nombre: "Mouse", precio: 50000, stock: 10 },
    { nombre: "Teclado", precio: 120000, stock: 0 },
    { nombre: "Monitor", precio: 800000, stock: 5 },
    { nombre: "Audífonos", precio: 150000, stock: 8 },
    { nombre: "Cámara", precio: 600000, stock: 0 }
];

//  filtro los productos que tienen unidades disponibles
const productosDisponibles = productos.filter(producto => producto.stock > 0);

//  creo una lista con el nombre y precio de cada producto disponible
const listaProductos = productosDisponibles.map(producto => {
    return producto.nombre + " — $" + producto.precio.toLocaleString("es-CO");
});

// Muestro los productos disponibles
console.log("Productos disponibles:");

listaProductos.forEach(producto => {
    console.log(producto);
});

// se suma el valor total del inventario disponible
const totalInventario = productosDisponibles.reduce((total, producto) => {
    return total + (producto.precio * producto.stock);
}, 0);

//  el valor total del inventario
console.log("Valor total del inventario: $" + totalInventario.toLocaleString("es-CO"));