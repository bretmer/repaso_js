let numeros = [3, 4, 7, 8, 9];
let [a, b] = numeros
console.log(a, b);
let [,, c, d] = numeros
console.log(c, d); 
let [x, ...y] = numeros
console.log(x, y);

let alumno = {
    nombre: 'Julio',
    edad: 18,
};
alumno["dni"] = "12345678A"
// spread operator (...)
let actualizarAlumno = { "id":"1", ...alumno, "t_sangre":"b+" }
console.log(actualizarAlumno);
let {t_sangre} = actualizarAlumno
console.log(t_sangre);

// agregar con el operador spread las letras faltantes de las vocales
let vocales = ['a', 'e'];
let vocalesFaltantes = ['i', 'o', 'u'];
let todaslasVocales = [...vocales, ...vocalesFaltantes];
console.log(todaslasVocales);

let texto = "Hola como estas";
let caracteres = [...texto];
console.log(caracteres);