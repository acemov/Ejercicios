// extra item 2
let arrayDEnumeritos = [23, 523, 12, 5, 34, 63, 123, 51, 76, 45]
// extra item 3
let [numero0, , numero2, , numero4] = arrayDEnumeritos

function nuevo(lista, ...indefinido) {
    let nuevoArray = []
    lista.forEach(function (numeros) {
        if (numeros !== numero0 && numeros !== numero2 && numeros !== numero4) {
            nuevoArray.push(numeros)
        }
    })
    return nuevoArray
}
console.log(nuevo(arrayDEnumeritos, numero0, numero2, numero4));
// extra item 4
let mascotas = {
    nombre: "minina",
    tipo: "gata",
    color: "blanco",
    raza: "leona"
}
let { nombre, tipo, color, raza } = mascotas
console.log("Hola les presento a mi mascota su nombre es: " + nombre + " es un hermoso " + tipo + " de color: " + color + " y su raza es: " + raza + ".");