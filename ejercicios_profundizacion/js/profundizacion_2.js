"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.

const primer = parseInt(prompt('Ingrese el primer número:\n'));

const segundo = parseInt(prompt('Ingrese el segundo número:\n'));

const tercer = parseInt(prompt('Ingrese el primer número:\n'));

if(primer % 2 === 0 ){
    alert("El numero 1 es par")
}else{
    alert("el numero 1 es impar ")
}

if(segundo % 2 === 0 ){
    alert("El numero 2 es par")
}else{
    alert("el numero 2 es impar ")
}

if(tercer % 2 === 0 ){
    alert("El numero 3 es par")
}else{
    alert("el numero 3 es impar ")
}
