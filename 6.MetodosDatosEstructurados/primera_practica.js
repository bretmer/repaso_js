// crear una lista de objetos de 5 vehiculos que tengan informacion como marca, modelo, año de fabricacion, precio numero de placa
listaVehiculos=[
    {"marca":"toyota","modelo":"corolla","año":2020,"precio":20000,"placa":"ABC123"},
    {"marca":"hondas","modelo":"civic","año":2019,"precio":22000,"placa":"DEF456"},
    {"marca":"ford","modelo":"focus","año":2018,"precio":18000,"placa":"GHI789"},
    {"marca":"chevrolet","modelo":"malibu","año":2021,"precio":25000,"placa":"JKL012"},
    {"marca":"nissan","modelo":"sentra","año":2017,"precio":17000,"placa":"MNO345"},
]
// crear funciones para cada uno de estas acciones
// actualizar el valor de una de sus caracteristicas
let actualizaVehiculo = listaVehiculos.map(vehiculo => {
    if (vehiculo.marca === "hondas") {
        vehiculo.marca = "honda";
    }
    return vehiculo;
});
console.log(listaVehiculos);
// agregar un nuevo vehiculo
let agregaVehiculo = listaVehiculos.push({"marca":"mazda","modelo":"3","año":2022,"precio":27000,"placa":"PQR678"})
console.log(listaVehiculos)
// eliminar un vehiculo
let eliminaVehiculo = listaVehiculos=listaVehiculos.filter(vehiculo => vehiculo.placa !== "DEF456")
console.log(listaVehiculos)
// poder filtrar los vehiculos por su año de fabricacion
let buscaPorAño = listaVehiculos.filter(vehiculo => vehiculo.año >= 2019)
console.log(buscaPorAño)
// poder filtrar un solo vehiculo por su  numero de placa
let buscaPorPlaca = listaVehiculos.find(vehiculo => vehiculo.placa === "ABC123")
console.log(buscaPorPlaca)