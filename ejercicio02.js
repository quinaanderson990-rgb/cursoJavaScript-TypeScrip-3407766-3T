// Ejercicio 02 - Clasificación de estudiantes segun su promedio

// Aquí guardo los estudiantes con su nombre y promedio
const estudiantes = [
    { nombre: "sandra", promedio: 4.8 },
    { nombre: "sara", promedio: 3.9 },
    { nombre: "Laura", promedio: 3.2 },
    { nombre: "Jhoan", promedio: 2.5 },
    { nombre: "yeison", promedio: 4.6 },
    { nombre: "jose", promedio: 3.7 }
];

// Aquí guardo la cantidad de estudiantes de cada categoría
let excelente = 0;
let bueno = 0;
let basico = 0;
let bajo = 0;

// Recorro cada estudiante para revisar su promedio
for (const estudiante of estudiantes) {

    let categoria = "";

    // Reviso en qué categoría queda según su promedio
    if (estudiante.promedio >= 4.5) {
        categoria = "EXCELENTE";
        excelente++;
    }
    else if (estudiante.promedio >= 3.5) {
        categoria = "BUENO";
        bueno++;
    }
    else if (estudiante.promedio >= 3.0) {
        categoria = "BÁSICO";
        basico++;
    }
    else {
        categoria = "BAJO";
        bajo++;
    }

    //  datos del estudiante
    console.log(
        "Nombre: " + estudiante.nombre +
        " | Promedio: " + estudiante.promedio +
        " | Categoría: " + categoria
    );
}

//  la cantidad de estudiantes en cada categoría
console.log("Cantidad EXCELENTE: " + excelente);
console.log("Cantidad BUENO: " + bueno);
console.log("Cantidad BÁSICO: " + basico);
console.log("Cantidad BAJO: " + bajo);