/* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
input: Hola mundo
Output: oauo    */

let input = prompt('Escribe una frase');

for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === 'a' || input.charAt(i) === 'e' || input.charAt(i) === 'i' || input.charAt(i) === 'o' || input.charAt(i) === 'u') {
        console.log(input.charAt(i));
    }
}