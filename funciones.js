
//Una Funcion es un bloque de codigo diseñado para realizar una tarea especifica.


/* Maneras de escribir una funcion:


Declaración de función (Function Declaration)
Es la forma más clásica. Se definen con la palabra reservada function y un nombre.
Lo más especial de estas es el Hoisting: puedes llamarlas incluso antes de que aparezcan en el código. 
*/


function saludar(nombre) {
  return "Hola " + nombre;
}

saludar("ana");


/*
Expresión de función (Function Expression)
es similar y tiene la misma sintaxis que una declaración de función.
aqui la funcion se guarda dentro de una variable , solo se puede usar despues de haberla definido.   */


const saludar = function(nombre) {
  return "Hola " + nombre;
};



/* 
Funciones de Flecha (Arrow Functions)
Tienen dos características clave: 
Sintaxis corta: Si solo tienen una línea, no necesitan return ni llaves.
this léxico: No crean su propio contexto de this, lo que las hace ideales para métodos dentro de clases o callbacks.
*/


// Versión estándar

const saludar = (nombre) => {
  return `Hola, ${nombre}`;
};


// Versión simplificada (retorno implícito)

const saludar = nombre => `Hola, ${nombre}`;



/*
Funciones Anónimas
Son funciones que no tienen nombre. Generalmente se usan como argumentos para otras funciones (callbacks) o en expresiones de función. */


setTimeout(function() {
  console.log("Pasaron 2 segundos");
}, 2000);



/*
Funciones Autoejecutables (IIFE)
(Immediately Invoked Function Expressions)
Son funciones que se ejecutan justo en el momento en que se definen. */

(function() {
  console.log("Me ejecuto solo");
})();



/*
Funciones Constructoras
Se utilizan para crear objetos. Por convención, empiezan con mayúscula y se invocan con la palabra clave new. */

function Persona(nombre) {
  this.nombre = nombre;
}
const usuario = new Persona("Ana");




/*
Funciones de Orden Superior (Higher-Order Functions)
Son funciones que operan sobre otras funciones. Es decir, pueden recibir una función como argumento o devolver una función como resultado.
*/

const numeros = [1, 2, 3];
// map es una función de orden superior porque recibe otra función
const duplicados = numeros.map(n => n * 2); 



/*
Funciones de Callback
Es una función que se pasa a otra como argumento para ser ejecutada más tarde.
*/

function procesarUsuario(id, callback) {
  // Simula buscar un usuario
  const usuario = { id: id, nombre: "Alex" };
  callback(usuario);
}

procesarUsuario(1, (u) => console.log(u.nombre));



/*
Funciones Generadoras (Generators)
Son funciones especiales que pueden pausar su ejecución y retomarla más tarde. 
En lugar de devolver un solo valor, "emiten" múltiples valores uno a uno. 
Se definen con un asterisco *.
*/

function* generarNumeros() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generarNumeros();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3



/*
Funciones Asíncronas (async/await)
Son funciones que manejan promesas de forma que el código parezca síncrono (lineal). 
Devuelven siempre una Promesa.
*/

async function obtenerDatos() {
  const respuesta = await fetch('https://api.ejemplo.com');
  const datos = await respuesta.json();
  return datos;
}

async function text() {
  return ()=>{};
}



/*
Funciones de Cierre (Closures)
Un closure es una función que "recuerda" el entorno donde fue creada, incluso después de que ese entorno haya desaparecido.
*/

function crearContador() {
  let cuenta = 0;
  return function() {
    cuenta++; // La función hija "recuerda" la variable 'cuenta'
    return cuenta;
  };
}
const miContador = crearContador();

/*



*/

























