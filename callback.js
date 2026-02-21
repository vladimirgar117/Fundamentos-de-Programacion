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