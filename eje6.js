/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3
*/

let input = prompt('Ingrese el primer número');
let input2 = prompt('Ingrese un segundo numero');

let numero = input !== '' && !isNaN(input) && parseInt(input) ? Number(input) : null;
let numero2 = input2 !== '' && !isNaN(input) && parseInt(input) ? Number(input2) : null;

if (numero !== null) {
    if (numero2 !== null) {

        if (numero > numero2) {
            alert(numero);
        }else{
            alert(numero2);
        }

    }else{
        alert('el segundo ingreso es invalido');
    }
    
}else{
    alert('el primer ingreso es invalido');
}