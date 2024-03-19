//  11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo: 
// input: 20
// input: 210
// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.



let numero = Number(prompt('Ingrese un numero'));

function esDivisible(numero) {
    let aux = [];
    for (let i = 2; i <= numero; i++) {
        if (numero % i === 0) {
          aux.push(i);
        }
    }

    return aux.filter(e=> e === 2 || e=== 3 || e === 5 || e === 7); 
}

if (isNaN(numero)){
    console.log('No es un numero');
}else{
    let divisores =  esDivisible(numero);
    console.log('El numero es divisible en: '+divisores);
}



