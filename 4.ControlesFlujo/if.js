// estructura de una condicion
// palabra reservada if
// crear la condicion
// cuerpo
if (true) {
    let suma=24+34
    let divicion=40/4
    console.log(suma,divicion)
}
else{
    console.log("me ejecuto por que soy falso")
};

// crear un programa que me evalue si un numero es mayor al otro y si este numero es a la vez un numero par
let firstNumbert = 19
let secondNumbert = 15
if (firstNumbert > secondNumbert){
    if (firstNumbert%2==0){
        console.log("el numero es mayor y par")
    } else{
        console.log("el numero es mayor e impar")
    }
}else{
    console.log("el numero es menor")
}

// crear un programa que me muestre el numero en texto
let  numbert = 7
if (numbert==3) {
    console.log("cinco")
}
else if (numbert==4) {
    console.log("cuatro")
}
else if (numbert==2) {
    console.log("dos")
}
switch (numbert) {
    case 1:
        console.log("uno")
        break
    case 2:
        console.log("dos")
        break
    case 3:
        console.log("tres")
        break
    default:
        console.log("fuera de rango")
        break
}