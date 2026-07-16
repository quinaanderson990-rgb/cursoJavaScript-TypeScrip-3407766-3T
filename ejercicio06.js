// Ejercicio 06 - La Librería

//  los primeros libros del carrito
const carrito = [
    { titulo: "si las personas fueran constelaciones", autor: "sofia lopez", precio: 30000 },
    { titulo: "Boolevar", autor: "sofia lopez", precio: 45000 },
    { titulo: "antes de él", autor: "anonimo", precio: 50000 }
];

// Muestro el carrito inicial
console.log("Carrito inicial:");
console.log(carrito);

// Agrego dos libros nuevos al carrito
carrito.push(
    { titulo: "Don Quijote", autor: "Miguel de Cervantes", precio: 60000 },
    { titulo: "Despues de él", autor: "anonimo", precio: 40000 }
);

// Muestro el carrito después de agregar libros
console.log("Carrito después de agregar libros:");
console.log(carrito);


// Quito el último libro agregado
const libroEliminado = carrito.pop();

// Muestro cuál libro fue eliminado
console.log("Libro eliminado:");
console.log(libroEliminado);


// Muestro cómo queda el carrito después de eliminar
console.log("Carrito después de eliminar:");
console.log(carrito);


//  se Creo una lista solo con los títulos de los libros
const titulos = carrito.map(libro => libro.titulo);

// Muestro los títulos
console.log("Títulos de los libros:");
console.log(titulos);


// Sumo el precio de todos los libros
const totalPagar = carrito.reduce((total, libro) => {
    return total + libro.precio;
}, 0);


// Muestro el total a pagar
console.log("Total a pagar: $" + totalPagar.toLocaleString("es-CO"));