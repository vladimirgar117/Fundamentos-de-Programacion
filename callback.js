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
manejo de errores 
permite gestionar situaciones inesperadas durante la ejecución de un programa, evitando que la aplicación se detenga por completo.

La Estructura Fundamental: try...catch...finally
Este bloque se utiliza para envolver código que podría generar un error. 

try: Contiene el código que se quiere ejecutar y que puede fallar.
catch(error): Se ejecuta solo si ocurre un error en el bloque try. Recibe un objeto de error con información sobre lo sucedido.
finally: Bloque opcional que se ejecuta siempre, haya ocurrido un error o no.   */


try {
  // Código que puede fallar
  let resultado = 10 / variableInexistente; 
} catch (error) {
  // Qué hacer si falla
  console.error("Se detectó un error:", error.message);
} finally {
  // Se ejecuta pase lo que pase
  console.log("Proceso finalizado.");
}
