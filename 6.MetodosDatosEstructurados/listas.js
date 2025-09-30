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