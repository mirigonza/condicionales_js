"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Investigación y desarrollo.
// Busque en la red qué es y cómo utilizar el método .length 
// Realice un programa que solicite por consola 3 palabras cualesquiera
// Luego el programa debe imprimir la cantidad de caracteres de cada palabra
// ingresada utilizando .length 

// el metodo .length cuenta la cantidad de caracteres en una palabra 

const palabra1 = prompt('Ingrese la primer palabra:\n');

const palabra2 = prompt('Ingrese la segunda palabra:\n');

const palabra3 = prompt('Ingrese la tercer palabra :\n');

let conta1 = palabra1.length;
let conta2 = palabra2.length;
let conta3 = palabra3.length;

alert("la palabra 1 tiene" + conta1 + "caracteres");
alert("la palabra 2 tiene" + conta2 + "caracteres");
alert("la palabra 3 tiene" + conta3 + "caracteres");