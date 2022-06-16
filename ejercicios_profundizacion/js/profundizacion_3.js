"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// En este ejercicio les pediremos que investiguen por su cuentan
// algunas propiedades de javascript para manipular números
// usando la librería "Math":
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

// Realice un programa que solicite ingresar tres valores de temperatura
// De las temperaturas ingresadas por consola determinar:
// 1 - ¿Cuáles de ellas es la máxima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.max",
// investigue y busque como utilizarla.
// 2 - ¿Cuáles de ellas es la mínima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.min",
// investigue y busque como utilizarla.

// En cada caso imprimir en pantalla el resultado

const tempera1 = parseFloat(prompt('Ingrese la primer temperatura:\n'));

const tempera2 = parseFloat(prompt('Ingrese la segunda temepratura:\n'));

const tempera3 = parseFloat(prompt('Ingrese la tercer temperatura :\n'));

let maxima = (Math.max(tempera1, tempera2, tempera3));
let minima = (Math.min(tempera1, tempera2, tempera3));

alert("la maxima temperatura es," + maxima);
alert("la minima temperatura es ," + minima);