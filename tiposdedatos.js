/* Tipos de datos
los tipos de datos se dividen principalmente en dos categorías: primitivos y objetos.

Tipos de Datos Primitivos: 

Number: Representa números tanto enteros y decimales. */

// Number: Enteros y decimales
let edad = 25;
let precio = 99.99;

//String: Cadenas de caracteres utilizadas para texto (ej. "Hola Mundo").

// String: Texto (usa comillas simples, dobles o backticks)
let nombre = "Alex";
let saludo = `Hola, ${nombre}`; // Template string

//Boolean: Valores lógicos que pueden ser únicamente true o false.

// Boolean: Lógica de verdadero o falso
let esMayorDeEdad = true;
let tieneCuenta = false;

//Undefined: Indica que una variable ha sido declarada pero aún no tiene un valor asignado.

// Undefined: Variable declarada pero sin valor
let cajaVacia;
console.log(cajaVacia); // undefined

//Null: Representa la ausencia intencional de cualquier valor de objeto.

// Null: Ausencia intencional de valor
let contacto = null;

//BigInt: Introducido para representar números enteros con precisión arbitraria, más allá del límite de Number.

// BigInt: Números extremadamente grandes
let numeroGigante = 9007199254740991;

//Symbol: Un valor único e inmutable que se utiliza a menudo como clave para propiedades de objetos.

// Symbol: Identificadores únicos
let id Unico = Symbol("id");


//Tipos de Objetos:

/*los objetos son colecciones de propiedades y son mutables.
 
Object: La estructura fundamental que puede contener múltiples valores en forma de pares clave-valor. */

const usuario = {
    id: 1,
    nombre: "Ana",
    activo: true
};

//Array: Un tipo especial de objeto diseñado para almacenar listas ordenadas de datos.

const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // "rojo"


//Function: Bloques de código ejecutables. En JavaScript, las funciones también se consideran objetos.

const despedir = function() {
    return "Adiós";
};

