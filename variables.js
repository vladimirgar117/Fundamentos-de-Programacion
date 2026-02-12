/* Las Variables son contenedores para almacenar datos. 

Donde se guarda la información de las variables?  En la memoria RAM del dispositivo.


Formas de declarar las variables:

let: son para valores que pueden cambiar durante la ejecución del programa. */


let puntaje = 10; // se utilizo la palabra let para declarar la variable "puntaje" con el valor de 10.

puntaje = 20;    // aquí se reasigno el valor de la variable a 20.


//Const: son para valores que no cambian.

const PI = 3.1416; // se utilizo const para declarar la variable PI con el valor de 3.1416. 

PI = 4  //si se reasignara un nuevo valor para PI se lanzaría un error.


//Var: La forma antigua. A diferencia de let, tiene un alcance de función y permite comportamientos extraños como el hoisting (usar la variable antes de declararla), por lo que ya no se recomienda su uso.