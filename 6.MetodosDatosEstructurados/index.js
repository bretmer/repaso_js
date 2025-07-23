// Metodos para arrays
const usuarios = [
  { id: 1, nombre: "Ana", edad: 28 },
  { id: 2, nombre: "Luis", edad: 34 },
  { id: 3, nombre: "Lucía", edad: 25 },
  { id: 4, nombre: "Carlos", edad: 40 }
];
const nombres = usuarios.map(user => user.nombre)
console.log(nombres)

const mayores = usuarios.filter(user => user.edad > 30)
console.log(mayores)

const lucia = usuarios.find(user => user.nombre === "Lucía")
console.log(lucia)

const hayJoven = usuarios.some(user => user.edad < 26)
console.log(hayJoven)

const todosMayores = usuarios.every(user => user.edad > 30)
console.log(todosMayores)

// Metodos para objetos
const persona = {
    nombre: "Ana",
    edad: 28,
    profesion: "Enfermera"
}
const claves = Object.keys(persona)
console.log(claves)

const valor = Object.values(persona)
console.log(valor)

const claveValor = Object.entries(persona)
console.log(claveValor)

const tieneEdad = persona.hasOwnProperty("profesion")
console.log(tieneEdad)