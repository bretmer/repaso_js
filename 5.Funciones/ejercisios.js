// crear una funcion que reciba por parametro una lista y un elemento a encontrar y  retornar si el elemento fue encontrado o no    

function encontrarElemento(lista, elemento) {
    if (lista.includes(elemento)) {
        return "El elemento fue encontrado";
    } else {
        return "El elemento no fue encontrado";
    }
}

console.log(encontrarElemento([1, 2, 3], 2));
console.log(encontrarElemento([1, 2, 3], 5));

