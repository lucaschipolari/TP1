/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.*/
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));


let mayor = num1;

if (num2 > mayor) {
    mayor = num2;
}

if (num3 > mayor) {
    mayor = num3;
}

console.log("El mayor de los tres números es: " + mayor);
