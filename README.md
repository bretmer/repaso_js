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
- `lenght:` Devuelve la longitud de una cadena 
  
  ```js
  len mensaje="hola como estan"
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
### METODOS PARA LISTAS

### METODOS PARA OBJETOS
## 7. DOM
### Métodos para Arrays
Son una forma común de almacenar datos estructurados como listas
- `map():` Crea un nuevo array aplicando una funcion a cada elemento.
- `filter():` Crea un nuevo array con los elementos que cumpla una función
- `reduce():` Reduce los elementos a un solo valor
- `find():` Retorna el primer elemento que cumpla una condición
- `some():` Devuelve `True` si al menos uno cumple una condición
- `every():` Devuelve `True` si todos cumplen la condición
- `flat():` Aplana arrays anidados
- `sort():` Ordena los elementos
### Métodos para objetos
Los objetos permite estructurar información como pares clave/valor
- `object.keys():` Devuelve un array con las claves
- `object.values():` Devuelve un array con las valores
- `object.estries():` Devuelve un array de pares `[clave, valor]`
- `object.assing():` Copia propiedades de uno o más objetos a otro
- `hasOwnProperty:` Verifica si una propiedad existe