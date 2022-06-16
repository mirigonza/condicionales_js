"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
let texto1 = '5';
let texto2 = '7';

//  Verifique cual cual de los dos textos es mayor alfabéticamente
//  Imprima en pantalla según corresponda

if(texto1 > texto2){
    alert("El texto1," + texto1+ "es mayor a texto 2," + texto2);
}else{
    alert("El texto2, " + texto2+ "es mayor que el texto1," + texto1)
}

//  Transforma esas variables tipo texto y almacénalas
//  en nuevas variables númericas (Number) con parseInt()
//  Repita el proceso, ¿Cuál de las nuevas variables es mayor?
//  Imprima en pantalla según corresponda
let numeroNuevo1 = parseInt(texto1);
let numeroNuevo2 = parseInt(texto2);

if(numeroNuevo1 > numeroNuevo2){
    alert("El Numero 1," + numeroNuevo1+ "es mayor a Numero 2," + numeroNuevo2);
}else{
    alert("El Numero 2, " + numeroNuevo2+ "es mayor que el Numero 1 ," + numeroNuevo1)
}


//  Para pensar!
//  ¿Por qué cree que texto_2 es mayor a texto_1?
//  Siendo números tiene sentido, pero son caracteres, texto,
//  aún así el operador arroja el mismo resultado que con las
//  variables numéricas, cierto? ¿Por qué creen que es así?
//  Esta pregunta estará repetida en el Campus para que puedan
//  responder.
//  NOTA: La respuesta no se encuentra en el apunte, sino en Google ;)
