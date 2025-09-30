/*
1. crear, haciendo uso de una funcion un contador de vocales
la funcion debe recibir un texto y devolver la vocal a buscar y retornar la cantidad de veces que aparece en el texto
*/
function contarVocales(texto, vocal) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === vocal.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales("hola como estan", "A"));
/*
2. crear un programa que haciendo uso de una funcion pueda recibir una lista de amigos y que retorne otra lista pero con los nombres en mayusculas
*/
function nombreMayuscula(amigos) {
    let resultado = [];
    for (let i = 0; i < amigos.length; i++) {
        resultado[i] = amigos[i].toUpperCase();
    }
    return resultado;
}
console.log(nombreMayuscula(["percy", "michell", "antony", "chistian"]));