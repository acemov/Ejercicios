console.log("---------------------")
console.log("      ITEM 1")
let numeritos = [323, 423, 123, -523, 323, 523, 566, 78, 3, 5, 745, 8]

function buscador(arrayNUMEROS, numero) {
    let indicador = arrayNUMEROS.includes(numero) // usamos includes para buscar y devolver una variable tipo boolean
    if (indicador) {
        console.log(`El número ${numero} sí existe en el array.`)
    } else {
        console.log(`El valor solicitado no existe.`)
    }
} buscador(numeritos, 1) // ingresamos los parametros

console.log("---------------------")
console.log("      ITEM 2")
let juego = ["Toma 1", "Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"];
function juegoTrompito(array1, vueltas) {
    if (vueltas < 2 || vueltas > 6) {
        return "La cantidad de vueltas debe estar entre 2 y 6.";
    }
    let indicador = Math.floor(Math.random() * 6);
    return array1[indicador];
} console.log(juegoTrompito(juego, 1));

console.log("---------------------")
console.log("      ITEM 3")
let numeritos2 = [323, 423, 123, 20, 323, 523, 566, 78, 3, 9]
function sumatoria(arraydenum) {
    let acumuladorPOS = 0
    let acumuladorNEG = 0
    for (let i = 0; i < arraydenum.length; i++) {
        if ((arraydenum[i] % 2) === 0) {
            acumuladorPOS = acumuladorPOS + arraydenum[i]
        } else {
            acumuladorNEG = acumuladorNEG + arraydenum[i]
        }
    }
    console.log(`La sumatoria de los numeros positivos es: ${acumuladorPOS}`)
    console.log(`La sumatoria de los numeros negativos es: ${acumuladorNEG}`)
}
sumatoria(numeritos2)