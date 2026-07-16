// Ejercicio 03 - la Cooperativa

//  los asociados con su cuota y si están al día
const asociados = [
    { nombre: "Andrey", cuota: 50000, al_dia: true },
    { nombre: "juan", cuota: 60000, al_dia: false },
    { nombre: "Carlos", cuota: 45000, al_dia: true },
    { nombre: "patricia", cuota: 70000, al_dia: false },
    { nombre: "catalina", cuota: 55000, al_dia: true }
];

//  el mes actual (1 = enero, 12 = diciembre)
let mes = 7;

// Reviso el trimestre en el que está el mes
switch (mes) {
    case 1:
    case 2:
    case 3:
        console.log("Bienvenido al primer trimestre");
        break;

    case 4:
    case 5:
    case 6:
        console.log("Bienvenido al segundo trimestre");
        break;

    case 7:
    case 8:
    case 9:
        console.log("Bienvenido al tercer trimestre");
        break;

    case 10:
    case 11:
    case 12:
        console.log("Bienvenido al cuarto trimestre");
        break;

    default:
        console.log("Mes no válido");
}

// cuento cuántos asociados están en mora
let enMora = 0;

// Recorro los asociados para revisar su estado
for (const asociado of asociados) {

    let estado = "";

    // se revisa si está al día o debe dinero
    if (asociado.al_dia) {
        estado = "Al día";
    } else {
        estado = "En mora";
        enMora++;
    }

    // Muestro el nombre y el estado del asociado
    console.log(
        "Nombre: " + asociado.nombre +
        " | Estado: " + estado
    );
}

// la cantidad de personas que están en mora
console.log("Cantidad de asociados en mora: " + enMora);