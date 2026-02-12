
/* las estructuras condicionales se dividen principalmente en tres tipos, 
   según su complejidad y el tipo de evaluación que realizan:

Bloques Lógicos (if, else if, else)
Son las más flexibles, ya que permiten evaluar cualquier expresión booleana (comparaciones, rangos, valores de verdad). */

Simple (if) //Ejecuta un bloque solo si la condición es verdadera.
Compuesta (if...else) //Define un camino para el "sí" y otro para el "no".
Múltiple (if...else if...else) // Permite encadenar varias condiciones en secuencia. 


let temperatura = 25;

if (temperatura > 30) {
  console.log("Hace mucho calor");
} else if (temperatura >= 18) {
  console.log("El clima está agradable"); // Se ejecuta este
} else {
  console.log("Hace frío");
}


/* Selección por casos (switch)
Ideal cuando se tiene una sola variable y se quiere comparar su valor contra muchas opciones exactas. */

let dia = "Lunes";

switch (dia) {
  case "Lunes":
    console.log("Inicio de semana 😴");
    break;
  case "Viernes":
    console.log("Casi fin de semana 🥳");
    break;
  default:
    console.log("Un día normal");
}


/* Operador Ternario (? :)
Es un if...else resumido en una sola línea. Muy útil para asignar valores a variables rápidamente. */

let edad = 20;
let mensaje = edad >= 18 ? "Puedes pasar" : "No puedes pasar";

console.log(mensaje); // "Puedes pasar"


/* Cortocircuito (Operadores Lógicos)
A veces no necesitas un bloque entero, solo validar si algo existe o es verdad para ejecutar una acción.
AND (&&): Ejecuta la derecha solo si la izquierda es verdad.
OR (||): Asigna un valor por defecto si el primero es falso/nulo.  */ 

// Si el usuario está logueado, mostrar mensaje
let logueado = true;
logueado && console.log("Bienvenido de nuevo!");

// Valor por defecto
let nombreUsuario = null;
let nombreAMostrar = nombreUsuario || "Invitado"; 
console.log(nombreAMostrar); // "Invitado"














