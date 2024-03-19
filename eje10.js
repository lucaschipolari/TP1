// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo: 
// input: 20
// Output: El 20 es divisible por 2.

let variable = prompt('ingrese un numero');

function esDivisible(numero) {
    return numero % 2 === 0 ? 'El '+numero+' es divisible por 2' 
    : numero % 3 === 0? 'El '+numero+' es divisible por 3' 
    : numero % 5 === 0? 'El '+numero+' es divisible por 5' 
    : numero % 7 === 0? 'El '+numero+' es divisible por 7' : 'nada xd';
}

console.log(esDivisible(variable));




