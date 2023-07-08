console.log("Item 1")
console.log("------")
// item 1
function losdiezsiguientes(numero) {
    for (let i = numero; i <= numero + 10; i++) {
        console.log(i)
    }
} losdiezsiguientes(1)
console.log("Item 2")
console.log("------")
//item 2
function deAtresEnTres() {
    let acumulador = 1;
    while (acumulador <= 57) {
        console.log(acumulador)
        acumulador = acumulador + 3
    }
} deAtresEnTres()
//item 3
console.log("Item 3")
console.log("------")
let acumulador2 = 0
for (let i = 0; i <= 100; i++) {
    acumulador2 = acumulador2 + i
}
console.log(acumulador2)
//item 4
console.log("Item 4")
console.log("------")
let tex = "Practicando javascript";
function converMayus(texto) {
    return console.log(texto.toUpperCase())
} converMayus(tex)
//item 5
console.log("Item 5")
console.log("------")
let lista2 = [2323, 424, -23, 24, -54, 756, 22, 50, -23]
function espar(array) {
    let newarray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            if ((array[i] % 2) == 0) {
                newarray.push(array[i])
            }
        }
    }
    return console.log(newarray)
} espar(lista2)