let persona = {}
persona["nombre"] = "Juan"
persona["edad"] = 30

// notacion de tipo punto
console.log(persona.nombre)
// notacion de tipo corchete
console.log(persona["nombre"])
for (n in persona){
    console.log(persona[n])
}
console.log(persona.edad)
delete persona.edad
console.log(persona)