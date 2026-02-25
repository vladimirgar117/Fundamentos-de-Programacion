//callback
//es una funcion que se pasa como argumento a otra funcion para que se ejecute despues.

function saludar(nombre) {
  console.log("Hola " + nombre);
}

function procesarUsuario(callback) {
  const nombre = "Ana";
  callback(nombre);
}

procesarUsuario(saludar);



/*
Promesas
es un objeto que representa el resultado futuro de una operación asíncrona.

Estados de una Promesa
Una promesa puede estar en uno de estos estados:

Pending (pendiente)
Fulfilled (resuelta correctamente)
Rejected (rechazada con error).       */


function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Terminó la espera");
    }, ms);
  });
}

esperar(2000)
  .then(mensaje => console.log(mensaje));


  //async/await
  //Es una forma más clara y fácil de trabajar con promesas.
//Hace que el código asíncrono parezca síncrono.




//async

//Una función marcada como async siempre devuelve una promesa.

async function saludar() {
  return "Hola";
}

saludar().then(console.log); // "Hola"




//await
//pausa la ejecución hasta que la promesa se resuelva.

function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve("Listo"), ms);
  });
}

async function ejecutar() {
  const resultado = await esperar(2000);
  console.log(resultado);
}

ejecutar();
//await espera 2 segundos
//Luego continúa la ejecución



/*
Manejo de errores 
permite que el programa no se detenga cuando ocurre un imprevisto como una falla o error.

El bloque try...catch 
Es la estructura estándar para capturar excepciones en tiempo de ejecución. 

try: Aquí se coloca el código que "podría" fallar.
catch(error): Este bloque solo se ejecuta si ocurre un error en el try. Recibe un objeto con información sobre lo que salió mal.
finally: (Opcional) Se ejecuta siempre, haya habido error o no.  
*/

try {
  // Código que puede fallar
} catch (err) {
  console.error("Algo salió mal:", err.message);
} finally {
  console.log("Proceso terminado");
}






/*
Truthy y Falsy
se refieren a valores que se traducen  como true(verdadero) o false(falso) cuando se evaluan en un contexto booleano.  */

/* 
Valores Falsy
son valores que el motor del lenguaje siempre interpreta como falsos:

false 
0, -0 y 0n (Bigint cero)
"",'',``(cadenas de texto vacias)
null
undefined
NaN(not a Number)


Valores Truthy
cualquier valor que no este en la lista anterior se considera verdadero.

ejemplos con los que suelen confundir son:

"0"(una cadena con el caracter cero)
"false"(una cadena con texto)
[](un array vacio)
{}(un objeto vacio)
cualquier numero distinto de cero(incluyendo negativos como -1)



*/

