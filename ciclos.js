/* Los ciclos o bucles permiten repetir un bloque de código mientras se cumpla una condición específica,
 lo que ayuda a automatizar tareas recurrentes y optimizar el flujo de ejecución.


Existen varios tipos de ciclos diseñados para diferentes necesidades:

Ciclo for (Tradicional)

Se utiliza cuando conoces de antemano el número de iteraciones que necesitas realizar.  */

for (let i = 0; i < 5; i++) {
  console.log("Número: " + i); // Se ejecuta 5 veces (0 al 4)
}

/*Ciclo while

Repite el código mientras una condición sea verdadera. Es ideal cuando no sabes exactamente cuántas veces se debe repetir el proceso. */

let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++; // Importante actualizar para evitar bucles infinitos
}

/* Ciclo do...while

Es similar al while, pero garantiza que el código se ejecute al menos una vez, ya que la condición se evalúa al final. */

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);


/* Ciclos Modernos para Iterables

son formas más sencillas de recorrer colecciones de datos:

for...of: Diseñado para recorrer los valores de objetos iterables como Arrays o Strings. */

const frutas = ["manzana", "pera", "uva"];
for (let fruta of frutas) {
  console.log(fruta); // Imprime cada nombre
}

// for...in: Se utiliza para recorrer las propiedades (llaves) de un objeto.

const auto = { marca: "Toyota", modelo: "Corolla" };
for (let clave in auto) {
  console.log(clave + ": " + auto[clave]);
}


//.forEach(): Un método específico de los Arrays que ejecuta una función por cada elemento.

const numeros = [10, 20, 30];
numeros.forEach(num => console.log(num * 2));
