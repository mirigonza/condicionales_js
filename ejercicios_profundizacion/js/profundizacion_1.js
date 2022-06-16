"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.

const one = parseInt(prompt('Ingrese el primer número:\n'));

const two = parseInt(prompt('Ingrese el segundo número:\n'));

let diferencia = one - two;

alert("la diferencia entre ellos es, " + diferencia);

if(diferencia > 0){
    alert("La diferencia entre ellos es positiva");
}else{
    if(diferencia === 0){
        alert("la diferencia entre ellos es 0");
    }else{
        alert("la diferencia es negativa");
    }
}