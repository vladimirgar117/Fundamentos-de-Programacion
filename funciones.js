
//Una funcion es un "subprograma" que puede ser llamado por codigo externo (o interno en caso de recursión) a la función. 
// Al igual que el programa en sí mismo, una función se compone de una secuencia de declaraciones, 
// que conforman el llamado cuerpo de la función. Se pueden pasar valores a una función, y la función puede devolver un valor.



/* Maneras de escribir una funcion:


Declaración de función (Function Declaration)
es la forma mas tradicional, se puede llamar la funcion antes de que aparezca escrita en el codigo.  */


function nombre([param[, param[, ...param]]]) {
   instrucciones
}
   
/*
nombre
El nombre de la función.

param
El nombre de un argumento que se pasará a la función. Una función puede tener hasta 255 argumentos.

instrucciones
Las instruciones que forman el cuerpo de la función.        */


function saludar(nombre) {
  return "Hola " + nombre;
}



/*
Expresión de función (Function Expression)
Una expresión function es similar y tiene la misma sintaxis que una declaración de función.
aqui la funcion se guarda dentro de una variable , solo se puede usar despues de haberla definido.   */


function [nombre]([param[, param[, ...param]]]) {
   instrucciones
}


/*
nombre
El nombre de la función, se puede omitir, en ese caso la función se conoce como función anónima.

param
El nombre de los argumentos que se pasarán a la función.

instrucciones
Las instrucciones que forman el cuerpo de la función.  */

const saludar = function(nombre) {
  return "Hola " + nombre;
};


/* 
Funciones de Flecha (Arrow Functions)
Una expresión de función flecha tiene una sintaxis más corta y su léxico se une a este valor.  /*


([param] [, param]) => { instrucciones }
param => expresión          


param
El nombre de un argumento. Si no hay argumentos se tiene que indicar con (). Para un único argumento no son necesarios los parentesis. (como foo => 1)

instrucciones o expresión
Multiples instrucciones deben ser encerradas entre llaves. Una única expresión no necesita llaves. La expresión es, así mismo, el valor de retorno implícito de esa función.  */


// Versión estándar
const saludar = (nombre) => {
  return `Hola, ${nombre}`;
};

// Versión simplificada (retorno implícito)
const saludar = nombre => `Hola, ${nombre}`;







//Métodos en Objetos
// si se define una funcion dentro de un objeto, se conoce como metodo.
// existe una sintaxis abreviada muy comun.

const usuario = {
  nombre: "Alex",
  saludar() { // Sintaxis corta de método
    return `Hola, soy ${this.nombre}`;
  }
};







function sumar(a, b) {
    return a + b;
}

sumar(2,1);


let resultado = sumar(1, 1);
console.log(resultado); 











