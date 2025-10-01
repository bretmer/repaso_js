let listas = []
listas[0]= "Manzana"
listas[1]= "Pera"
console.log(listas.length)

// crear una lista vacia y agregar de manera automatica los numeros pares que existen entre 0 y 20
let pares = []
let index = 0;
for(let i=2; i<=20; i++){
    if(i%2==0){
        pares[index] = i;
        index++;
    }
}
console.log(pares)

let frutas = ["manzana", "banana", "cereza"]
let longitudes = frutas.map(fruta => fruta.length)
console.log(longitudes) 

let numeros = [1, 2, 3, 4, 5]
let numerosMenores= numeros.filter(numero => {return numero < 3})
console.log(numerosMenores)

// de una lista numeros del 1 a 10 usando filter elimina el numero 1
let numeros2 = [1,2,3,4,5,6,7,8,9,10]
let sinElUno = numeros2.filter(numero => {return numero !== 1})
console.log(sinElUno)





