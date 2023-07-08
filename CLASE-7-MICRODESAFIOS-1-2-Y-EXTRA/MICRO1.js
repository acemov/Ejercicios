let operacionesBancarias = [2324, 12312, 542, 23, -23, 123, -232]
let nombre = "Franco"
let apellido = "Tito"

function calcularDepositos(lista) {
    let acumulador = 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > 0) {
            acumulador = acumulador + lista[i]
        }
    }
    return acumulador
}
function calcularRetiros(lista) {
    let acumulador = 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < 0) {
            acumulador = acumulador + lista[i]
        }
    }
    let acumuladorEnPostivo = Math.abs(acumulador);
    return acumuladorEnPostivo
}
function conclusion(nombre, apellido, d, r, l) {
    console.log(`Estimado ${nombre} ${apellido}:`)
    console.log("El monto total de los depósitos es de: $" + (d(l)));
    console.log("El monto total de los retiros es de: $" + (r(l)));
    console.log(`Por lo tanto, su saldo actual en la cuenta es de: $${d(l) - r(l)}`)

}
conclusion(nombre, apellido, calcularDepositos, calcularRetiros, operacionesBancarias);