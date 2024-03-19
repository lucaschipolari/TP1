/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3
*/

let primerNumero=Number(prompt('Ingrese un numero'));
let secondNumber=Number(prompt('Ingrese otro numero'));
if(primerNumero>secondNumber){
    document.write(primerNumero + ' es el numero mas grande');
}
else if(secondNumber>primerNumero){
    document.write(secondNumber + ' es el numero mas grande');
}
else{
    document.write('Los numeros son iguales');
}