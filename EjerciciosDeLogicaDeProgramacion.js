/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

function contarCaracteres(str){
    return str.length;
}

//otra forma usando funcion expresada y arrow function y opeardores ternarios
// uso console porque estaba hecho para una html
const contarCaracteres = (str="") => 
    (!cadena) 
        ? console.warn('No ingresaste ninguna cadena')
        :console.info(`La cadena"${str}" tiene ${str.length} caracteres`)

contarCaracteres("Hola Mundo")
///////////////////////////////////////

function recortarCadena(str,n){
    return str.substring(0,n);
}

// otra forma (lo que hizo Jonatan Mircha)
const recortarCadena = (str="",n=undefined) => 
    (!cadena) 
        ? console.warn('No ingresaste ninguna cadena')
        :(n===undefined)
            ?console.warn('No ingresaste ninguna longitud')
            :console.info(str.substring(0,n))

recortarCadena("Hola Mundo",4)       
//////////////////////////////////////////////////////////////////

function deCadenaAArreglo(str, car){
    return str.split(car)
}


// otra forma (lo que hizo Jonatan Mircha)
const deCadenaAArreglo = (str="",car=undefined) => 
    (!cadena) 
        ? console.warn('No ingresaste ninguna cadena')
        :(n===undefined)
            ?console.warn('No ingresaste ningun separador')
            :console.info(str.split(car))

deCadenaAArreglo("Hola Mundo", ",")       
//////////////////////////////////////////////////////////////////

function repetirCadena(str, rep){
    return str.repeat(rep);
}
// otra forma (lo hice yo porque Jonatan Mircha lo hizo con un for)
// no se si no sabia que existia repeat o no se porque 
const repetirCadena = (str="",rep=undefined) => 
    (!cadena) 
        ? console.warn('No ingresaste ninguna cadena')
        :(rep===undefined)
            ?console.warn('No ingresaste ningun separador')
            :console.info(str.repeat(rep))

repetirCadena("Hola Mundo", 5)       

//otra con mas validaciones
const repetirCadena = (str="",rep=undefined) =>{
    if(!str) return console.warn('No ingresaste ninguna cadena')
    if(rep===undefined) return console.warn('No ingresaste ningun separador')
    if(rep===0) return console.warn('El numero de veces no puede ser 0')
    if(Math.sign(rep)===-1) return console.warn('El numero de veces no puede ser negativo')
    console.info(str.repeat(rep))
}

//////////////////////////////////////////////

/*
5) Programa una función que invierta las palabras de una cadena de texto, 
   pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

//FUNCION EXPRESADA CON ARROW FUNCTION con operador ternario(IF)
const invertirCadena = (cadena = '') => (!cadena) 
    ? console.warn('No ingresaste ninguna cadena') 
    : console.info(cadena.split('').reverse().join(''))


//FUNCION DECLARADA  con operador ternario(IF)

function invertirCadena2(cadena=''){
    (!cadena) 
        ? console.warn('No ingresaste ninguna cadena') 
        : console.info(cadena.split('').reverse().join(''))

}

invertirCadena2('Hola que tal.')
invertirCadena('Hola como te va.')

/*
6) Programa una función para contar el número de veces que se repite 
una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") 
devolverá 2.
*/

const contarPalabra2 = (texto='', palabra='') => {
    if(!texto) return console.warn('Ingrese un texto')
    if(!palabra)return console.warn('Ingrese la palabra que desea encontrar')
    let arrTexto = texto.split(' ')
    
    return console.info(`La palabra "${palabra}" se repite ${arrTexto.filter(cada => cada === palabra).length} veces`)
    //return console.info(`La palabra "${palabra}" se repite ${texto.matchAll(new RegExp(palabra,'ig')).length} veces`)

}  

contarPalabra2('arbol flores pajaro estrella arbol pajaro pajaro flores arbol arbol', 'arbol')

function contarPalabra(texto='', palabra=''){
    if(!texto) return console.warn('Ingrese un texto')
    if(!palabra)return console.warn('Ingrese la palabra que desea encontrar')
    
    let arrTexto = texto.split(' ')
    
    //Asi lo hice al principio, con un for, pero despues lo cambie usando filter
    //tambien se puede hacer usando match() pero tengo que convertir la palabra en expresion regular
    /*var cont = 0
    for(let i=0; i<arrTexto.length; i++){
        if(arrTexto[i]===palabra) cont ++
    }*/
    //return console.info(`La palabra "${palabra}" se repite ${cont} veces`)    
    //esto era de prueba       
    //console.log(arrTexto.filter(cada => cada === palabra))

    return console.info(`La palabra "${palabra}" se repite ${arrTexto.filter(cada => cada === palabra).length} veces`)
 
}

contarPalabra('ivana frontroth ivana frontroth frontroth ivana ivana ivana fontroth', 'ivana')
contarPalabra2('arbol, flores, pajaro, estrella, arbol, pajaro, pajaro, flores, arbol, arbol', 'arbol')
/*
7) Programa una función que valide si una palabra o frase dada, 
es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

const palindromo = (text='')=>{
    if(!text) return console.warn('Ingrese un texto valido')
    if(text.split('').reverse().join('').toLowerCase() === text.toLowerCase())console.info(true)
    else console.info(false)
}

function palindromo2(text=''){
    if(!text) return console.warn('Ingrese un texto valido')
    if(text.split('').reverse().join('').toLowerCase() === text.toLowerCase())console.info(true)
    else console.info(false)
}

palindromo('Menem')
palindromo2('Ana')

/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
const eliminarCaracteres = (texto='', patron='') =>



function eliminePatron(text='', patron=''){
    if(!text) return console.warn('ingrese texto')
    if(!patron) return console.warn('ingrese patron')
    return text.replaceAll(patron,'')
}

/////////////////////////////////////////

/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/
const random = (min, max) => {return Math.round(Math.random() * (max - min) + min);}

random(501,600)

/*
10) Programa una función que reciba un número y evalúe si es capicúa o no 
    (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/
    const capicua = (numero=0)=>{
    if(typeof numero !== 'number') return console.error('Ingresa un numero Valido')
    if(!numero) return console.warn('Ingrese un numero valido')
    if(Number(numero.toString().split('').reverse().join('')) === numero)console.info(`El numero ${numero} es Capicua`)
    else console.info(`El numero ${numero} No es Capicua`)
}

capicua(8676768)
capicua(78694)

/*   
11) Programa una función que calcule el factorial de un número 
    (El factorial de un entero positivo n, se define como el producto de todos los 
    números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

//opcion imperativa normal
const factorial = (num)=> {
    if(typeof num !== 'number') return console.error('Ingresa un numero Valido')
    if(num===0 || !num) console.info('Ingresa un numero mayor a 0')
    else {
        let x = 1
        for(let i=num; i>1; i--){
            x *= i
        }
    return x
    }

}

factorial(5)

// funcion recurrente
function factorial2(num){
    if(typeof num !== 'number') return console.error('Ingresa un numero Valido')
    if (num < 0) return console.info('El numero no puede ser negativo')
    else if (num <= 1) return 1 
    else return num * factorial2(num-1)
}

////////////////////////////

/*
12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/

const esPrimo = (n) => {
    let d = n-1
    let resto
    while(d > 1){
        resto = n % d
        if(resto === 0) return console.info(`${n} No Es Primo`)
        d--
    }
    return console.info(`${n} Es Primo`)
}

esPrimo(7)

/*
13) Programa una función que determine si un número es par o impar, 
pe. miFuncion(29) devolverá Impar.
*/

const parOImpar = (n) => {
    if(!n) return console.warn('Ingrese un numero');
    if(n<0) return console.warn('Ingrese un numero entero positivo');
    (n%2 === 0)
        ? console.info(`El numero ${n} es Par`)
        : console.info(`El numero ${n} No es Par`) 
}


parOImpar(34)
parOImpar(67)
parOImpar()
parOImpar(-54)
/*
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F.
*/

const GaFyFaG = (n,u) => {
    if(!n || !u) return console.error('Ingresa el valor y la unidad a covertir')
    let c = 0;
    if(u === "C"){
        c = (n * 1.8) +32
        return console.info(`${n}° Celsius es ${c}° Fahrenheit`)
    }else if (u === "F") {
        c = (n-32)/1.8 
        return console.info(`${n}° Fahrenheit es ${c}° Celsius`)
    }else console.warn('Ingresa "C" para Celsius y "F" para Fahrenheit')
}

GaFyFaG(30,"C")
GaFyFaG(67,"F")
GaFyFaG(56,"u")
GaFyFaG()
GaFyFaG(7)
//GaFyFaG(,6)

/*
15) Programa una función para convertir números de base binaria a decimal y 
viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/

const bianAdeciYdeciAbin = (num, base) => {
    if(!num || !base) return console.error ('Ingrese dos parametros, el numero a convertir y su base')
    let bin = []
    let cos
    let deci = 0
    if(base === 2){
        //return parseInt(num,2)  //DESCUBRI QUE HAY UN METODO DE NUMBER QUE HACE ESTOS PASAJES
        
        for(let i = 0; i < num.toString().length; i++){
            if(num.toString()[num.toString().length - 1 - i] === '1'){
                deci = deci + Math.pow(2,i)
            }
        }

        return console.info(`El numero binario introducido es equivalente a ${deci} en decimal. `)
        
    }else if(base === 10){
        //resulta que tambien hay un m etodo que transforma un desimal a binario
        //y es toString(2), o sea le digo que al numero lo trasforme en texto pero con
        //el 2 de parametro lo convierte a binario

        //return console.info(`El numero decimal introducido es equivalente a ${num.toString(2)} en binario. `)

        do{
            bin.unshift(num % 2)
            cos = Math.floor(num / 2)
            num = cos
        }while (cos > 0)
        
        return console.info(`El numero decimal introducido es equivalente a ${bin.join('')} en binario. `)
        

    }else return console.warn ('Ingrese como base: 2 o 10. Otro mumero es incorrecto')
}

bianAdeciYdeciAbin(156,10)
bianAdeciYdeciAbin()
bianAdeciYdeciAbin(2)
bianAdeciYdeciAbin(10011011,2)
bianAdeciYdeciAbin(10011011,3)
/*
16) Programa una función que devuelva el monto final después de aplicar un descuento
a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/

const descuento = (m = undefined, d = 0) => {
    if(!m) return console.error('Ingerese en Monto a cobrar.')
    if(m<=0) return console.error('El monto no puede ser 0 o negativo')
    if(typeof m !== 'number') return console.error('El monto debe ser un numero')

    if(!d) return console.error('Igrese el porcentaje de descuento.')
    if(m<0) return console.error('El descuento no puede ser negativo')
    if(typeof m !== 'number') return console.error('El descuento debe ser un numero')
    
    return console.info(`El monto a cobrar con descuento es $${m - (m*d/100)}`)
}

descuento(1000,20)
descuento()
descuento(456)

/*
17) Programa una función que dada una fecha válida determine cuantos años han 
pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

// Esta fue mi forma pero no da bien la fecha porque da siempre un año mas
const añosPasados = (año, mes, dia) =>{
    if(!año) return console.error('Ingrese el año')
    if(!mes) return console.error('Ingrese el mes')
    if(!dia) return console.error('Ingrese el dia')

    let fecha = new Date(año,mes,dia)
    let hoy = new Date()
    //let restar = hoy - fecha
    let restar = hoy.getFullYear() - fecha.getFullYear()
    return console.info(restar) //.toLocaleDateString('en-US'))
}

// fecha de nacimiento de mi familia, recordar que los meses en el objeto Date
// arrancan desde 0 por eso tengo que poner un numero menos en el mes
añosPasados(1978,2,24)
añosPasados(1975,11,9)
añosPasados(2004,4,3)
añosPasados(2007,7,15)
añosPasados(2009,6,9)

// ESTA ES LA FORMA DE JONATAN MIRCHA

const añosPasados2 = (fecha = undefined)=>{
if(fecha === undefined) return console.warn ('No ingresaste fecha')
if(!(fecha instanceof Date)) return console.error('El valor que ingresaste no es una fecha valida')

let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
 añosEnMS = 1000 * 60 * 60 * 24 * 365, // años en milisiegundos
 añosHumanos = Math.floor(hoyMenosFecha/añosEnMS);

 return (Math.sign(añosHumanos) === -1)
  ?console.info(`Faltan ${Math.abs(añosHumanos)} años para el ${fecha.getFullYear()}.`)
  :(Math.sign(añosHumanos) === 1)
    ?console.info(`Han pasado ${añosHumanos} años desde ${fecha.getFullYear()}.`)
    :console.info (`Estamos en el año actual ${fecha.getFullYear()}.`)

}
añosPasados2()
añosPasados2('ggg')
añosPasados2([])
añosPasados2(false)
añosPasados2(new Date(1978,2,24))
añosPasados2(new Date(1975,11,9))
añosPasados2(new Date(2004,4,3))
añosPasados2(new Date(2007,7,15))
añosPasados2(new Date(2009,6,9))

/*
18) Programa una función que dada una cadena de texto cuente el 
número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, 
Consonantes: 5.
*/

const cuantasVocales = (cadena) =>{
if(!cadena) return console.error('Ingrese una cadena de texto.')
if(typeof cadena !== 'string') return console.error('Ingrese solo cadena de texto.')

let cantVoc = 0
let cantCon = 0
let cantOtros = 0
let vocal = /[aeiou]/i
let vocalatilde = /[áéíóú]/i
let conson = /[a-zA-Z]/ // AQUI TENGO EN CUENTA LAS VOCALES TAMBIEN PORQUE EN AL 
                        //ENTRAR POR EL ELSE IF SIGNIFICA QUE NO ES VOCAL.
for(let i = 0; i < cadena.length; i++){
    if(vocal.test(cadena[i]) || vocalatilde.test(cadena[i])) cantVoc ++
    else if (conson.test(cadena[i])) cantCon ++ 
    else cantOtros ++
}

console.info(`Vocales: ${cantVoc}, Consonates: ${cantCon}, Otros: ${cantOtros}`)

}

cuantasVocales('Está es una prueba de funcion')
cuantasVocales('aeiou 5 dfghwp 6 AIOEU 5 QWRTYP 6')


/*
19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

const nombreValido = (nombre = '')=>{
    if(!nombre) return console.warn('Ingresa un nombre')
    if(typeof nombre !== 'string') return console.warn('Ingresa solo cadena de texto')

    let expReg = /^[a-zñáéíóúü\s]+$/ig //provar las mayusculas Ñ Ü

    return (expReg.test(nombre))
        ? console.info('El nombre ingresado es valido')
        : console.info('El nombre ingresado NO es valido')

}

nombreValido()
nombreValido(56)
nombreValido('Ivana')
nombreValido('Ñoño')

/*
20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

const validarEmail = (email = '')=>{
if(!email) return console.warn('Ingrese un correo')
if(typeof email !== 'string') return console.warn('El email ingresado No es una cadena de texto')

let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

return (expReg.test(email))
    ? console.info('El email ingresado es valido')
    : console.info('El email ingresado NO es valido')

}



/*
21) Programa una función que dado un array numérico devuelve otro array con los números 
elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/

const expoCuadrado = (arr = []) =>{
    if(arr.length === 0) return console.warn ('Ingrese un arreglo de enteros.')
    if(!(arr instanceof Array)) return console.error('Ingrese Solamente Arreglo de Enteros.')
    let arr2 = []
    for (let num of arr){
        if(typeof num !== 'number') return console.error('Ingrese Solamente Arreglo de "Numeros Enteros".')
        arr2.push(Math.pow(num, 2))
    }

    //TAMBIEN PODIA USAR UN METODO DE LOS ARREGLOS LLAMADO MAP QUE QUE DEVUELVE
    //OTRO ARREGLO SACADO DEL PRIMERO PERO CON UNA MODIFICACION QUE NOSOTROS 
    //LE HAYAMOS PASADO COMO POR PARAMETRO COMO FUNCION FLECHA
    //let newarr = arr.map(el => el*el) a cada elemento lo cambia por su cuadrado.
    return console.info(`El arreglo: ${arr} elevado al cuadrado queda: ${arr2}`)
}

expoCuadrado()
expoCuadrado(45)
expoCuadrado('hola')
expoCuadrado(['a',4,5,7])
expoCuadrado([1,2,3,4,5])

/*
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de
dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

const maxYMin = (arr = undefined)=>{
    if(arr === undefined) return console.warn ('Ingrese un arreglo de enteros.')
    if(arr.length === 0) return console.warn ('El arreglo esta vacio.')
    if(!(arr instanceof Array)) return console.error('Ingrese Solamente Arreglo de "Numeros Enteros".')
    for (let num of arr) if(typeof num !== 'number') return console.error(`${num} no es un numero. Ingrese Solamente numeros enteros en su arrgelo.`)
       
    console.info(`El numero mas alto es: ${Math.max(...arr)}.\nEl numero mas bajo es: ${Math.min(...arr)}.`)

}

maxYMin()
maxYMin('jj')
maxYMin([2,78,45,1,987])

/*
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos 
en el primero almacena los números pares y en el segundo los impares, pe. 
miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

const separaParImpar = (arr = undefined) =>{
    if(arr === undefined) return console.warn ('Ingrese un arreglo de enteros.')
    if(arr.length === 0) return console.warn ('El arreglo esta vacio.')
    if(!(arr instanceof Array)) return console.error('Ingrese Solamente Arreglo de "Numeros Enteros".')
    for (let num of arr) if(typeof num !== 'number') return console.error(`${num} no es un numero. Ingrese Solamente numeros enteros en su arrgelo.`)
       
    let obj = {pares: [], impares: []}

    //TAMBIEN podria ser usando EL metodo FILTER asi
    // let obj = {
    //     pares: arr.filter(valor => valor % 2 === 0)
    //     impares: arr.filter(valor => valor % 2 === 1)
    // }
    //Y YA NO HARIA FALTA EL FOR

    for(let num of arr){
        if(num % 2 === 0) obj.pares.push(num)
        else obj.impares.push(num)
    }


    return console.info(`El arreglo ${arr} fue dividido \nen Pares: ${obj.pares} y Impares: ${obj.impares}`)

}

separaParImpar([2,3,4,5,6,7,8,9,10,11,12,13,14,15])

/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos 
arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo 
de forma descendiente, pe. miFuncion([7, 5,7,8,6])
 devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const ordenarArreglo = (arr = undefined)=>{
    if(arr === undefined) return console.warn ('NO ingresaste ningun arreglo.')
    if(arr.length === 0) return console.warn ('El arreglo esta vacio.')
    if(!(arr instanceof Array)) return console.error('Ingrese Solamente Arreglo de "Numeros Enteros".')
    for (let num of arr) if(typeof num !== 'number') return console.error(`${num} no es un numero. Ingrese Solamente numeros enteros en su arrgelo.`)
  
    return console.info (`El arreglo; ${arr} ordenado \nen forma asecndente es: ${arr.sort()},\ny en forma descendente: ${arr.sort().reverse()} `)
    

}

ordenarArreglo([7, 5,7,8,6])
ordenarArreglo()
ordenarArreglo('juh')
ordenarArreglo([])
ordenarArreglo([2,4,true])

/*
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/

const eliminarDuplicado = (arr = undefined)=>{
    if(arr === undefined) return console.warn ('NO ingresaste ningun arreglo.')
    if(arr.length === 0) return console.warn ('El arreglo esta vacio.')

    let arr2 = []
    arr.forEach(element => {
        if(!arr2.includes(element)) arr2.push(element)
    });

    return console.info(`El arreglo ${arr} sin duplicados es ${arr2}`)
}


eliminarDuplicado(["x", 10, "x", 2, "10", 10, true, true])


/*
26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const promedio = (arr = undefined) =>{
    if(arr === undefined) return console.warn ('NO ingresaste ningun arreglo.')
    if(arr.length === 0) return console.warn ('El arreglo esta vacio.')
    if(!(arr instanceof Array)) return console.error('Ingrese Solamente Arreglo de "Numeros Enteros".')

    let suma = 0, prom = 0
    for(let num of arr){
        suma += num 
     }
     prom = suma / arr.length

    return console.info(`El promedio del arreglo ${arr} es: ${prom}.`)
}

promedio([9,8,7,6,5,4,3,2,1,0])

/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
id de la película en IMDB, titulo, director, año de estreno, país o países de origen, 
géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, 
Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, 
Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, 
War, Western.
*/

class Pelicula {
    constructor(pel){
            this.id = pel.id,
            this.ti = pel.titulo,
            this.dir = pel.director,
            this.año = pel.año,
            this.pais = pel.paises,
            this.gen = pel.generos,
            this.cal = pel.calificación

            this.validarID(pel.id)
            this.validarTitulo(pel.titulo)
            this.validarDirector(pel.director)
            this.validarAño(pel.año)
            this.validarPais(pel.paises)
            this.validarGenero(pel.generos)
            this.validarCalificacion(pel.calificación)
        }

        static generosValidos(){
            return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 
                'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film-Noir', 'Game-Show', 'History', 'Horror', 'Musical', 
                'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 
                'War', 'Western']
        }

        validarStr(propiedad,str){
            if(!str) return console.warn(`${propiedad} ${str} esta vacio.`);

            if(typeof str !== 'string') return console.error(`${propiedad} "${str}" no es una cadena de texto.`)
            return true;
        }

        //Estas las hizo Mircha pero yo no
        //validarNumero(){}
        //validarLongitudDeCadena(){}
        
        //Esta tambien es de Mircha, yo al principio no la hice, luego la incorpore porqu
        //habia mas validaciones de las que yo habia hecho.
        validarArreglo(propiedad,valor){
            if(!valor) return console.warn(`${propiedad} ${valor} esta vacio.`);
            if(!(valor instanceof Array)) return console.error(`${propiedad} ${valor} ingresados No es un arrgelo.`)
            if(valor.length === 0) return console.error(`${propiedad} ${valor} No tiene datos, ingrese al menos uno.`)
            for(let c of valor){
                if(typeof c !== 'string') return console.error(`El valor ${c} no es una cadena de texto.`)
            }

            return true
        }
              
        validarID(id){
        
            if(this.validarStr('IMDB id',id))
                if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
                    return console.warn(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas y los 7 restantes numeros`)
          
        }
        
        validarTitulo(ti){
            if(this.validarStr('Titulo',ti)){
                if(ti.length > 100) return console.warn(`El Titulo no debe tener mas de 100 caracteres`)
            }

        }

        validarDirector(dir){
            if(this.validarStr('Director',dir)){
                if(dir.length > 50) return console.warn(`El Director no debe tener mas de 50 caracteres`)
            }
        }
        
        validarAño(año){
            if(!año) return console.warn(`El Año esta vacio, ingrese un año.`);
            if(typeof año !== 'number') return console.error(`El año "${año}" no es un numero.`)
            if(año.toString().length !== 4) return console.error(`El año debe tener 4 digitos`)
        }

        validarPais(pais){
            this.validarArreglo('Paices',pais)
        }

        
        validarGenero(gen){
            if(this.validarArreglo('Genero',gen))
            for(let a of gen)
                if(!(Pelicula.generosValidos().includes(a))) return console.error(`El genero ${a} ingresado no es un genero aceptado. Los generos validos son: ${Pelicula.generosValidos()}`)
        }

        validarCalificacion(cal){
            if(!cal) return console.warn(`Calificación esta vacio, ingrese una calificación.`);
            if(typeof cal !== 'number') return console.error(`La  calificación "${cal}" no es un numero, ingreselo como numero.`)  
            if(cal < 0 || cal > 10) return console.error(`${cal} es incorrecto. La calificacion debe ser un numero entre 0 y 10.`)      
            this.cal = cal.toFixed(1) 
            //console.log(this.cal)
        }

        fichaTecnica(){
            console.info(`Ficha Tectica:
            \nTitulo: ${this.ti}\nDirector: ${this.dir}\nAño de Estreno: ${this.año}\nPais: ${this.pais.join(', ')}\nGenero: ${this.gen.join(', ')}\nCalificación: ${this.cal}\nIMDB id: ${this.id}`)
        }

}

let peli1 = {
    id: 'df5476692',
    titulo: 'Se Busca', 
    director: 'no Se', 
    año: 8245, 
    paises: ['argen', 'españa', 'chile'], 
    generos: ['Action', 'Adult'], 
    calificación: 5
}

let peli2 = {
    id: 'as5476693',
    titulo: 'Malefica', 
    director: 'no Se', 
    año: 2000, 
    paises: ['argen', 'españa', 'chile'], 
    generos: ['Action', 'Adult'], 
    calificación: 9.876
}
let peli3 = {
    id: 'uu8547664',
    titulo: 'Iluminados', 
    director: 'no Sek',
    año: 8542, 
    paises: ['argen', 'españa', 'chile'], 
    generos: ['Action', 'Adult'], 
    calificación: 4.987
}

let misPelis = [peli1, peli2, peli3]

misPelis.forEach(el => new Pelicula(el).fichaTecnica())

mostrarPelis(mispelis)

/*
CONJETURA DE COLLATZ

Sea la siguiente operación, aplicable a cualquier número entero positivo:

Si el número es par, se divide entre 2.
Si el número es impar, se multiplica por 3 y se suma 1.
Formalmente, esto equivale a una función 
f(n) = n/2 si n es par y 3n+1 si es impar

Como resultado tendremos un arreglo de sucesion de numero que siempre termina en 1

*/
 
const conjeturaCollatz = (numero = 0, tupla = []) =>{
    if(!numero) return console.warn('Ingresa un numero mayor a 0.')
    if(typeof numero !== 'number') return console.error('Ingresa un numero.')
    let resul = 0
    
    if(tupla.length === 0){
        numOri = numero
    }
    
    tupla.push(numero)
    if(numero === 1) {
        let prom = 0, suma = 0
        for(let num of tupla){
           suma += num 
        }
        prom = suma / tupla.length
        return console.info(`La tupla de ${numOri} es ${tupla} y el tamaño es ${tupla.length}, \n El mayor de toda la tupla es ${Math.max(...tupla)}. \n El promedio de la tupla es ${prom}`)
    }
    if(numero % 2 === 0){
        resul = numero/2
    }

    if(numero % 2 !== 0){
        resul = 3*numero +1
    }

    //tupla.push(resul)
    conjeturaCollatz(resul, tupla)

}

// conjeturaCollatz(0)
// conjeturaCollatz('g')
// conjeturaCollatz(1)
conjeturaCollatz(13)

