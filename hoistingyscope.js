/*  El hoisting (o elevación) es un comportamiento  en el que las declaraciones  de variables, funciones y clases 
  parecen moverse a la parte superior de su ámbito (scope) antes de que se ejecute el código. 


  Comportamiento según el tipo de declaración

Variables con var: Se elevan y se inicializan con el valor undefined. Esto permite usar la variable antes de su línea de declaración sin que el programa falle, aunque su valor será "indefinido" hasta que se le asigne uno.

Variables con let y const: También se elevan, pero no se inicializan. Intentar acceder a ellas antes de su declaración resulta en un ReferenceError debido a la "Zona Muerta Temporal" (Temporal Dead Zone).

Declaraciones de funciones: Se elevan completamente, incluyendo su cuerpo. Esto permite llamar a una función incluso antes de que aparezca definida en el archivo.

Expresiones de funciones: Si una función se asigna a una variable (ej. var miFuncion = function() {}), se comporta como una variable; solo se eleva la declaración de la variable, no la definición de la función.  */


// Hoisting con funciones: funciona
saludar(); 

function saludar() {
  console.log("Hola");
}

// Hoisting con var: devuelve undefined
console.log(nombre); 
var nombre = "Alex";

// Hoisting con let: lanza un Error
console.log(edad); 
let edad = 25;



/*El Scope (o ámbito) es el contexto actual de ejecución que determina la visibilidad y accesibilidad de las variables,
 funciones y objetos en tu código. En términos sencillos, define en qué partes del programa puedes usar una variable específica.
 
 Tipos principales de Scope en JavaScript

Scope Global: Es el nivel más externo. Las variables declaradas aquí (fuera de cualquier función o bloque) son accesibles desde cualquier lugar del programa.

Scope de Función (Local): Las variables declaradas dentro de una función solo pueden ser utilizadas dentro de esa misma función y no son visibles desde el exterior.

Scope de Bloque: Introducido en ES6, se aplica a variables declaradas con let y const dentro de un bloque limitado por llaves {} (como un if o un for). A diferencia de var, estas variables mueren al salir del bloque.

Scope de Módulo: En entornos que usan módulos, las declaraciones dentro de un archivo son privadas a ese archivo a menos que se exporten explícitamente. 
 
 
Conceptos clave relacionados

Cadena de Scope (Scope Chain): Cuando buscas una variable, JavaScript comienza en el ámbito local actual. Si no la encuentra, salta al ámbito "padre" y continúa subiendo hasta llegar al global.

Lexical Scope: Significa que el ámbito se determina por la ubicación física de la declaración en el código fuente durante la escritura, no por dónde se llama a la función.

Shadowing (Sombreado): Ocurre cuando una variable en un ámbito interno tiene el mismo nombre que una en un ámbito externo, ocultando temporalmente la versión externa.
 
 
 
 */