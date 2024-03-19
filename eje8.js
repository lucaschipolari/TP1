/*8.- Escribe un programa que pida un número y diga si es divisible por 2 */

let numero = Number(prompt('Ingrese un numero'));

if(numero % 2===0){
document.write(numero + ' es divisible por 2');
} else{
    document.write(numero + ' no es divisible por 2');
}