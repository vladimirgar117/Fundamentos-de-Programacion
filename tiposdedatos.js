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
let idUnico = Symbol("id");


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



/*   
 Mas tipos de datos no primitivos:

Además de Object, Array y Function, JavaScript incluye varios objetos especiales incorporados 
que amplían las capacidades del lenguaje.



Date:
Permite trabajar con fechas y horas.

Sirve para:

Obtener fecha actual
Calcular diferencias de tiempo
Formatear fechas    */

let ahora = new Date();
console.log(ahora.getFullYear()); //muestra el año actual

/*
Math
Objeto estático para operaciones matemáticas.

Incluye:

Constantes (PI)
Métodos (random(), round(), sqrt(), etc.)
No se instancia con new    */

console.log(Math.PI); // se muestra el valor de PI (3.141592653589793)


/*
RegExp
Permite trabajar con expresiones regulares.

Sirve para:

Validaciones
Búsqueda de texto
Reemplazos avanzados    */

let patron = /hola/i;
console.log(patron.test("Hola mundo")); // true


/*
Map

Colección de pares clave → valor, pero más flexible que un objeto.

Ventajas:
Permite claves de cualquier tipo

Mantiene orden de inserción    */

let mapa = new Map();
mapa.set("nombre", "Ana");

console.log(mapa.get("nombre"));


/*
Set
Colección de valores únicos.

Ideal para:

Eliminar duplicados
Verificar existencia rápida   */

let numeros = new Set([1, 2, 2, 3]);
console.log(numeros); // {1, 2, 3}


/* WeakMap
Similar a Map, pero:

Solo acepta objetos como claves
Permite recolección de basura automática */

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "dato");

/*
WeakSet
Similar a Set, pero:

Solo almacena objetos
No es iterable */

let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);

/*
Promise

Representa un valor que estará disponible en el futuro (asincronía).

*/

let promesa = new Promise((resolve, reject) => {
  resolve("Listo");
});

promesa.then(res => console.log(res));

/*
Error
Representa errores en JavaScript.
*/

throw new Error("Algo salió mal");
