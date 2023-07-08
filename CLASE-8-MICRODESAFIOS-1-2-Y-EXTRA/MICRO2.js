let HTML5 = "30 45 25 34 18 23 16 50 72 70"
let CSS3 = "50 45 71 34 23 45 65 75 63 43 74 70"
let JAVASCRIPT = "70 65 58 45 23 57 34 17 72"
let NODEJS = "45 56 73 34 65 72 70 32"

let arrayHTML5 = HTML5.split(" ") //convertimos a cada string en un array
let arrayCSS3 = CSS3.split(" ")
let arrayJAVASCRIPT = JAVASCRIPT.split(" ")
let arrayNODEJS = NODEJS.split(" ")


function calcularpromedio(array) {
    arrayENnumeros = []
    for (let i = 0; i < array.length; i++) { //este for agrega a arrayENnumeros los elemenots en tipo numero, ya que antes estaban tipo string y no se podia calcular el promedio
        arrayENnumeros.push(Number(array[i])) //Number() ---> sirve para tranformar a tipo numero, osea que en este caso lo paso de string a number
    }

    let acumulador = 0;
    for (let i = 0; i < array.length; i++) { // en este for hacemo la sumatoria de cada elemento del arrayENnumeros
        acumulador = acumulador + arrayENnumeros[i]
    }
    return (acumulador / array.length).toFixed(2) //aca sacamos el promedio y con .toFixed(2) lo reondemos a 2 decimales
}

function promedio(curso1, curso2, curso3, curso4, numero, calculadora) { // con esta funcion mostramos el mensaje que queremos que figura de acuerdo a la variable numero
    if (numero === 1) {
        return `El promedio del curso de HTML5 es: ${calculadora(curso1)}`
    } else if (numero === 2) {
        return `El promedio del curso de CSS3 es: ${calculadora(curso2)}`
    } else if (numero === 3) {
        return `El promedio del curso de JAVASCRIPT es: ${calculadora(curso3)}`
    } else if (numero === 4) {
        return `El promedio del curso de NODEJS es: ${calculadora(curso4)}`
    } else {
        console.log("1 = HTML5")
        console.log("2 = CSS3")
        console.log("3 = JAVASCRIPT")
        console.log("4 = NODEJS")
    }
}

console.log(promedio(arrayHTML5, arrayCSS3, arrayJAVASCRIPT, arrayNODEJS, 3, calcularpromedio)); //pasamos los parametros a la funcion 
                                                                       // a este 3 lo podemos cambiar