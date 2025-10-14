# TALLER DE REPASO DE JAVASCRIPT
> [!WARNING] Observacion: 
> Quokka se debe ejecutar en cada archivo

> [!TIP] 
> Quokka detecta que en nuestro proyecto tenemos `node.js` y lo ejecuta para poder ver la consola en vivo 
## 1. TIPOS DE DATOS
Es la manera de como capturamos la informacion
> [!NOTE]
> Javascript tiene funcione predeterinadas
para mostrar un mensaje por consola `console.log()`, para poder verficar que tipo de dato estamos manejando en javaescript tambien tenemos una funcion por defecto llamada `typeof()`

Se clasifica en 2 grupos:
>### PRIMITIVOS
son datos que siempre existen

**Numericos**
- Enteros positivos
- Enteros negativos
- Decimal positivo
- Decimal negativo
- NaN (Not and Number)

**Textos**
- Caracteres
- Caracteres especiales
- String

**Booleanos**
- True => 1
- False => 0
>### ESTRUCTURADOS
**Array (lista)**
- array de tipo numerico
- array de tipo string
- array de tipo mixto

Como esta estructurado un array en javascript
![alt text](assets/image.png)
**Objetos (diccionario):** Son similares a las listas con la unica diferencia que envez de tener valor e indice sus elementos trabajan con clave y valor.
![alt text](assets/image2.png)
## 2. VARIABLES (ENLACES, BINDING)
Es la tecnica que se usa para apuntar en dirreccion en memoria y al valor o dato relacional o que ese encuentre almacenado en ese momento.

Tenemos dos pasos pra declarar una varibales:
1. Primero declarar la variable/constante
2. Segundo inicializar la variable/constante
> [!Note]
> Para crear una variable primero tenemos que crear el enlace y luego darle el nombre de la variable/constante

> [!Tip] Recomendación
> - `let:` Usar cuando el valor tendra que variar
> - `const:` Usar cuando el valor sera el mismo siempre
> - `var:` evitar usar
> - `let` `var:` Ambos nos permiten crear variables, su unica diferencia es el alcance ambito o `scope` (averiguar)


## 3. OPERADORES
**Su clasificacion general de divide en tres:**
> ### Operadores unarios
Son aquellos que tiene el operador a la izquierda del valor y que retorna un unico valor
- operador de negacion
> ### Operadores binarios
Son aquellos que estan en medio de dos valores y que retorna un unico valor
- operadores aritmeticos
- operadores de comparacion
- operadores logicos
> ### Operadores ternarios
Son aquellos que evaluan tres valores y retornan un solo valor
- operador condicional
## 4. CONTROLES DE FLUJO
> [!NOTE]
> Nuestros programas en javascript contienen mas de una sentencia y las sentencias son ejecutadas una a una como si fuera una historia, de arriba hacia abajo como un camino recto.

>### Control de decision (if-else)
Javascript nos permite crear caminos alternativos en nuestros programas dependiendo de una decision, a esto se le conoce como caminos o ejecucion condicional, que ejecutara una sentencia u otra teniendo encuenta la condicion asi podemos crear multiples caminos u opciones en nuestro programa.
Si tenemos una decision verdadera se ejecutara una sentencia, si tenemos una codicion falsa se ejecutara otra sentencia totalmente distinta.
> [!TIP]
> La ejecución condicional rompe el flujo normal de un programa

>### Bucles (for) - (tarea)
El bucle `for` se utiliza para repetir una acción un número determinado de veces. Es útil cuando conocemos cuántas veces queremos que se repita el bloque de código.
**Ejemplo:**
```js
for (let i = 0; i < 5; i++) {
    console.log("Iteración número " + i);
}
```
>### Bucles (while) (tarea)
El bucle `while` repite un bloque de código mientras una condición sea verdadera. Es útil cuando no sabemos cuántas veces se repetirá el ciclo.
**Ejemplo:**
```js
let contador = 0;
while (contador < 5) {
    console.log("Contador es " + contador);
    contador++;
}
```
## 5. FUNCIONES
Las funciones en Javascrip son bloques de codigo que se ejecutan de manera independiente, podemos decir tambien que son mminprogramas que todas como entrada y retornan otros datos como salida.

Las funciones son fundamentales para el correcto ordenamiento de nuestro codigo ademas que nos permiten separar de una manera mas ordenada nuestra logica y evitar repetir el codigo muchas veces.
### TIPOS DE FUNCIONES
>#### FUNCION POR DECLARACION
Se define usando la palabra clave `function` y pueden ser llamadas antes de su declaracion
```js
function saludo(){
    return
}
console.log(saludo)
```
>#### FUNCION POR EXPRESION
Se asigna a una variable y solo pueden ser llamadas despues de su definicion
```js
const despedir = function(nombre){
    return `Adiós, ${nombre}`;
}
console.log(despedir("Juan"));
```
#### FUNCION FLECHA (arrow functions)
Es una forma concisa y moderna de definir funciones en JavaScript. Se caracteriza por usar el símbolo => (flecha) en lugar de la palabra clave "function".
```js
const sumar = (a, b) => {
    return a + b;
}
console.log(sumar(2, 3));
```

## 6. MÉTODOS PARA TRABAJAR CON DATOS ESTRUCTURADOS
Son funciones que dan funcionalidades extras a los tipos de  datos en los cuales se aplica. Un metodo es antecedido por un tipo de datos y un punto.

> **Ejemplo:**

El ejemplo mas claro de un metodo es el `.lenght`, estos metodos no permite saber la cantidad de caracteres de un string.
```js
"hola".lenght //4
[2,4,5,6,7].lenght //5
```
> [!TIP]
> Los metodos en sun mayoria solo se aplican a tipos de datos string , listas y objetos, en su gran parte son aplicacdos para listas
### METODOS PARA STRING
- `length:` Devuelve la longitud de una cadena o numero de caracteres que tiene
  ```js
  let mensaje="hola como estan"
  console.log(mensaje.length); //15
  ```
- `toLowerCase:` Devuelve una cadena en minuscula
  ```js
  let mensaje="HOLA COMO ESTAN"
  console.log(mensaje.toLowerCase()); //hola como estan
  ```
- `toUpperCase:` Devuelve una cadena en mayuscula
  ```js
  let mensaje="hola como estan"
  console.log(mensaje.toUpperCase()); //HOLA COMO ESTAN
  ```   
- `concat:` Une dos o mas cadenas
  ```js
  let mensaje1="hola"
  let mensaje2="como estan"
  console.log(mensaje1.concat(" ",mensaje2)); //hola como estan
  ```
- `trim:` Elimina los espacios en blanco al inicio y al final de una cadena
  ```js
  let mensaje="   hola como estan   "
  console.log(mensaje.trim()); //hola como estan
  ```
- `slice:` Extrae una parte de una cadena y devuelve una nueva cadena
  ```js
  let mensaje="hola como estan"
  console.log(mensaje.slice(0,4)); //hola
  ```
- `split:` Divide una cadena en un array basandose en lo que se indique
  ```js
  let mensaje="hola como estan"
  console.log(mensaje.split(" ")); //["hola","como","estan"]
  ```
### METODOS PARA LISTAS
#### Crear una lista
  let numeros=[]
  - `push:` Agrega uno o mas elementos al final de una lista
    ```js
    let listas = []
    listas.push("manzana")
    ```
  - `unshift:` Agrega uno o mas elementos al inicio de una lista
    ```js
    let listas = []
    listas.unshift("manzana")
    ```
  - `pop:` Elimina el último elemento de una lista
    ```js
    let frutas = ["manzana", "banana", "cereza"]
    frutas.pop()
    ```
  - `shift:` Elimina el primer elemento de una lista
    ```js
    let frutas = ["manzana", "banana", "cereza"]
    frutas.shift()
    ```
  - `splice:` Agrega o elimina elementos en una posición específica
    ```js
    let frutas = ["manzana", "banana", "cereza"]
    frutas.splice(1, 1, "naranja") 
    ```
  - `delete:` Elimina un elemento de una lista
    ```js
    let frutas = ["manzana", "banana", "cereza"]
    delete frutas[1]
    ```
  - `concat:` Une dos o mas listas  
    ```js
    let lista1 = ["manzana", "banana"]
    let lista2 = ["cereza", "naranja"]
    let lista3 = lista1.concat(lista2)
    ```
#### METODOS PARA ITERAR ELEMENTOS DE UNA LISTA
  - `forEach:` Ejecuta una función anónima por cada elemento de un array
    ```js
    let frutas = ["manzana", "banana", "cereza"]
    frutas.forEach(fruta => {console.log(fruta)}) //manzana, banana, cereza
    ```
  - `map:` Crea un nuevo array aplicando una función a cada elemento
    ```js
    let frutas = ["manzana", "banana", "cereza"]
    let longitudes = frutas.map(fruta => fruta.length)
    console.log(longitudes) // [7, 6, 6]
    ```
#### METODOS PARA BUSCAR ELEMENTOS EN UNA LISTA
  - `includes:` Verifica si un elemento existe en una lista y devuelve `true` o `false`
    ```js
    let frutas = ["manzana", "banana", "cereza"]
    console.log(frutas.includes("banana")) //true
    ```
  - `filter:` Crea un nuevo array con los elementos que cumplan una condición
    ```js
    let numeros = [1, 2, 3, 4, 5]
    let numerosMenores= numeros.filter(numero => numero < 3)
    console.log(numerosMenores) // [1, 2]
    ```
  - `find:` Retorna el primer elemento que cumpla una condición
    ```js
    let numeros = [1, 2, 3, 4, 5]
    let primerNumeroMenorQueTres = numeros.find(numero => numero < 3)
    console.log(primerNumeroMenorQueTres) // 2
    ```
### METODOS PARA OBJETOS
#### CRAENDO UN OBJETO 
```js
// objeto o diccionario vacio
let persona = {}
```
#### COMO AGREGAR ELEMENTOS A UN OBJETO
```js
// Agregar propiedades
persona[nombre] = "Juan"
persona[edad] = 30
persona[hobbies] = ["futbol"]
```
#### ACTUALIZAR ELEMENTOS DE UN OBJETO
```js
persona[nombre] = "Pedro" // Actualiza el nombre a "Pedro"
```
#### ELIMINAR ELEMENTOS DE UN OBJETO
```js
delete persona[edad] // Elimina la propiedad "edad"
```
## 7. es6
### arrow functions
Es una forma concisa y moderna de definir funciones en JavaScript. Se caracteriza por usar el símbolo => (flecha) en lugar de la palabra clave "function".
```js
const sumar = (a, b) => a + b;
```
### destructuring
Permite extraer valores de arrays o propiedades de objetos y asignarlos a variables de manera más concisa y legible.
```js
let persona = {
  nombre: "Juan",
  edad: 30,
};

let { nombre, edad } = persona;
console.log(nombre);
```
## 8. DOM (Document Object Model) (Modelo de objetos del documento)
Es una interfaz de programación para documentos HTML y XML. Representa la página para que los programas puedan cambiar la estructura del documento, estilo y contenido. El DOM proporciona una representación estructurada del documento como un árbol de nodos y objetos, lo que permite a los lenguajes de programación interactuar con el contenido, la estructura y los estilos de la página web.
Es una API del navegador que permite a los desarrolladores web manipular y actualizar dinámicamente el contenido, la estructura y el estilo de una página web sin necesidad de recargarla.
Nos permite comunicarnos entre HTML y JavaScript en objetos.
### SELECCIONAR TRADICIONALES
Estos selectores son metodos del documento por que DOM trabaja con documentos
> [!TIP] 
> En la programacion web `DAW` se hace uso de dos tecnicas:
>
> 1. Obtencion de datos (get)
> 2. Cracion de datos (set)
```js
// Seleccionar por ID
document.getElementById("id")
// Seleccionar por su atributo name
document.getElementsByName("nombre")
// Seleccionar por clase
document.getElementsByClassName("clase")
// Seleccionar por etiqueta 
document.getElementsByTagName("h1")
```
### SELECCIONAR MODERNOS
Estos selectores son metodos del documento por que DOM trabaja con documentos
```js
// Seleccionar por ID
document.querySelector("#id")
// Seleccionar por su atributo name
document.querySelector("[name='nombre']")
// Seleccionar por clase
document.querySelector(".clase")
// Seleccionar por etiqueta 
document.querySelector("h1")
```
Para acceder a todos los elementos que coincidan con el selector y devuelva en un array usamos `querySelectorAll`
```js
document.querySelectorAll(".clase")
```
### ACCEDER CONTENIDO Y ACTUALIZAR CONTENIDO
Para acceder al contenido de un elemento HTML usamos la propiedad `innerHTML` o `textContent` si deseamos actualizar el contenido de un elemento HTML usamos la misma propiedad `innerHTML` o `textContent` y le asignamos el nuevo valor.
```js
let elemento = document.querySelector("#id");
console.log(elemento.textContent); 
elemento.textContent = "Nuevo contenido";
console.log(elemento.textContent); 
```
```js
let elemento = document.querySelector("#id");
console.log(elemento.innerHTML);
elemento.innerHTML = "<p>Nuevo contenido</p>";
console.log(elemento.innerHTML);
```