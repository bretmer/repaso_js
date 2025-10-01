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