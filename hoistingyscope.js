/* El hoisting (o elevación):
es el comportamiento por el cual las declaraciones de variables y funciones se “elevan” al
inicio de su contexto (scope) durante la fase de compilación, antes de que el código se ejecute.
Solo se elevan las declaraciones, no las asignaciones.


Comportamiento según el tipo de declaración:

Hoisting con var

Las variables declaradas con var:
Se elevan.
Se inicializan automáticamente con undefined.  */

console.log(x); // undefined
var x = 5;


/*
Hoisting con let y const

También se elevan, pero no se inicializan.
Si se intentan usar antes de declararlas, se obtiene un error: */

console.log(y); // ReferenceError
let y = 10;

//Esto ocurre por la Zona Muerta Temporal (TDZ – Temporal Dead Zone)
//  que es el período entre el inicio del bloque y la declaración.

/*
Hoisting en funciones

Declaración de función (Function Declaration)
Se eleva completamente (nombre y cuerpo):  */

saludar();

function saludar() {
  console.log("Hola");
}

//Funciona porque la función se eleva completa.



/*Expresión de función (Function Expression)

No se eleva como función, sino como variable.*/

saludar(); // TypeError

var saludar = function() {
  console.log("Hola");
};

//Internamente:

var saludar; // undefined
saludar();   // undefined()




/*El scope (ámbito):
es el contexto donde una variable es accesible.
Define desde dónde se puede usar una variable o función.
 

Tipos principales de Scope 


Scope Global
Una variable declarada fuera de cualquier función o bloque pertenece al ámbito global. */

let nombre = "Ana";

function saludar() {
  console.log(nombre);
}

saludar(); // "Ana"

//nombre  puede usarse en cualquier parte del programa.


/*
Scope de Función
Las variables declaradas dentro de una función solo existen dentro de esa función.  */

function saludar() {
  let mensaje = "Hola";
  console.log(mensaje);
}

saludar();
console.log(mensaje); //  ReferenceError

//mensaje no existe fuera de la función.


/*
Scope de Bloque (Block Scope)
(let y const), los bloques {} crean un nuevo ámbito. */

if (true) {
  let edad = 25;
}

console.log(edad); //  ReferenceError

//let y const respetan el bloque.
//var NO respeta el bloque:
if (true) {
  var ciudad = "Madrid";
}

console.log(ciudad); //  "Madrid"


/*Scope Léxico (Lexical Scope)
JavaScript usa scope léxico, lo que significa que el ámbito depende de dónde se escribe el código, 
no de dónde se ejecuta.  */

function externa() {
  let mensaje = "Hola";

  function interna() {
    console.log(mensaje);
  }

  interna();
}

externa(); // "Hola"

//La función interna puede acceder a mensaje porque fue definida dentro de externa.

 
/*
Cadena de Scope (Scope Chain)

Cuando JavaScript busca una variable:

Busca en el scope actual
Luego en el scope padre
Sigue subiendo hasta el global
Si no la encuentra → ReferenceError



*/