
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






// Formula para escribir TERNARIO

condición ? 
valor_si_true : 
valor_si_false ; 


/*Maneras de escribir TERNARIOS

En una asignación   */
let resultado = condicion ? A : B;

// En un return
function esMayor(edad) {
  return edad >= 18 ? true : false;
}

//Directamente en un console.log
console.log(edad >= 18 ? "Puede pasar" : "No puede pasar");

//Dentro de template strings
let edad = 16;
let mensaje = `El usuario es ${edad >= 18 ? "mayor" : "menor"} de edad`;

//Ternario anidado
let nota = 85;

let resultado =
  nota >= 90 ? "Excelente" :
  nota >= 70 ? "Aprobado" :
  nota >= 50 ? "Regular" :
  "Reprobado";

  //Con operadores lógicos combinados
  let acceso = usuarioActivo && esAdmin ? "Acceso total" : "Acceso limitado";

  //Dentro de objetos
  let usuario = {
  nombre: "Ana",
  estado: edad >= 18 ? "Adulto" : "Menor"
};

//Dentro de JSX (React)
{isLoggedIn ? <Dashboard /> : <Login />}



/*OPERADOR NULLISH
?? Se llama Nullish Coalescing Operator y sirve para asignar
 un valor por defecto solo cuando el valor es null o undefined.
*/
valor ?? valorPorDefecto;

//ejemplo
let nombre = null;

let resultado = nombre ?? "Invitado";

console.log(resultado); // "Invitado"


/*Diferencia con ||
El operador || considera falsy estos valores:

false
0
""
null
undefined
NaN

En cambio, ?? solo reemplaza si es null o undefined.   */

//ejemplo comparativo
let numero = 0;

console.log(numero || 10); // 10 ❌ (porque 0 es falsy)
console.log(numero ?? 10); // 0 ✅ (porque no es null ni undefined)


/*Truthy
Truthy es cualquier valor en JavaScript que, al convertirse a booleano, se evalúa como true.

Ejemplos de valores truthy:

"Hola"
"0"
[]
{}
42
-1
true
"false"
Infinity
*/

if ("Hola") {
  console.log("Esto se ejecuta");
}   //Se ejecuta porque "Hola" es truthy.


/* Falsy
Falsy es cualquier valor en JavaScript que, al evaluarse en un contexto booleano se convierte en false. JavaScript hace esta conversión automáticamente.

Los valores falsy 
Solo existen 8 valores falsy en JavaScript:

false
0
-0
0n
""
null
undefined
NaN                                   */


let nombre = "";

if (nombre) {
  console.log("Tiene nombre");
} else {
  console.log("Está vacío");
}  //"" (string vacío) es falsy.

