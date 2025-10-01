let datosAlumno={
    "nombre": "Juan",
    "apellido": "Perez",
}
// agregar edad y sexo
datosAlumno["edad"] = 30
datosAlumno["sexo"] = "M"
console.log(datosAlumno)
// actualizar el apellido
datosAlumno["apellido"] = "sanchez"
console.log(datosAlumno)
// eliminar sexo
delete datosAlumno["sexo"]
console.log(datosAlumno)


// primera practica calificada
let alumnos =[
    {"nombre": "Juana","apellido": "Perez","edad": 18,},
    {"nombre": "Ana","apellido": "Gomez","edad": 17,},
    {"nombre": "Luisa","apellido": "Martinez","edad": 28,}
]

// deseo mostrar solo de lo menores de 19 años
let menores = alumnos.filter(alumno => alumno.edad < 19)
console.log(menores)

// actualizar la lista de objetos y agregarle el genero femenino a todos los alumnos
let agregarGenero = alumnos.map(alumno => {alumno["genero"] = "F";return alumno})
console.log(alumnos)


// de mi lista deseo mostrar a la persona que tenga como nombre ana
let buscaNombre=alumnos.find(al => al.nombre==="Ana")
console.log(buscaNombre)

