/*
    REPASO
*/
// suma normal inicial=inicial+1
// incremento inicial++
// inicial=+1
/*
    sintaxis de for
    1. palabra reservada, condicion, expresion y cuerpo
    . Partes de la condicion - una expresion inicial, condicion y una expresion final
*/

for (let inicial=1; inicial<10; inicial++){
    console.log("hola")
}
// for es usado para acceder o rrecorrer (iterara) los elmentos de una lista o diccionario

let amigos=["alex","ruht","jose","william"]
console.log(amigos)
console.log(amigos[3])

// existe un metodo para saber la cantidad de elementos que tiene una lista
console.log(amigos.length)

// para acceder al ultimo elemento podemos hacer uso el metodo length y restrle 1
console.log(amigos[amigos.length - 1])

// recorrer la lista de amigos con un for
for (let i=0;i<amigos.length;i++){
    console.log(amigos[i])
}

let frutas=["manzana", "piña", "sandia", "platano", "cereza", "pera"]
console.log(frutas[frutas.length-3])

for (let i=frutas.length-3; i<frutas.length; i++){
    console.log(frutas[i])
}

for (let i=0; i<frutas.length;i++){
    if (frutas[i] == "manzana" || frutas[i] == "platano" || frutas[i] == "pera") {
        console.log(frutas[i])
    }
}

