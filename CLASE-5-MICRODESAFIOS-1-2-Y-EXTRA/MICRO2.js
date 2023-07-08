/* DATOS */
const Carne_parrilla = 1800;
const Pollo = 1500;
const Vegetariana = 1200;

const Jamón = 30;
const Queso = 25;
const Salsa_tomate = 5;
const Mayonesa = 5;
const Mostaza = 5;
const Tomate = 15;
const Lechuga = 10;
const Cebolla = 10;

/* PARTE MODIFICABLE */

/*datos*/
let nombre = "Franco";
let apellido = "Tito";

/* elije el tipo de hamburguesa*/
let tipo = Carne_parrilla;

/* cambiar a true para agrear Y cambiar a false para sacar */
let Bjamon = false;
let Bqueso = false;
let Bsalsa_tomate = false;
let Bmayonesa = true;
let Bmostaza = false;
let Btomate = true;
let Blechuga = true;
let Bcebolla = false;
/* CALCULADORA */
function pagar(tipoHamburguesa, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let accinar = "hola";
    let procesoPagar = tipoHamburguesa;
    switch (accinar) {
        case "hola":
            if (jamon) {
                procesoPagar = procesoPagar + Jamón;
            }
        case "hola":
            if (queso) {
                procesoPagar = procesoPagar + Queso;
            }
        case "hola":
            if (salsa) {
                procesoPagar = procesoPagar + Salsa_tomate;
            }
        case "hola":
            if (mayonesa) {
                procesoPagar = procesoPagar + Mayonesa;
            }
        case "hola":
            if (mostaza) {
                procesoPagar = procesoPagar + Mostaza;
            }
        case "hola":
            if (tomate) {
                procesoPagar = procesoPagar + Tomate;
            }
        case "hola":
            if (lechuga) {
                procesoPagar = procesoPagar + Lechuga;
            }
        case "hola":
            if (cebolla) {
                procesoPagar = procesoPagar + Cebolla;
            }
    }
    return procesoPagar;
}
/* MENSAJE DEL TOTAL */
function callback(nombre, apellido, maquinaDEpagar) {
    return console.log("Estimado " + nombre + " " + apellido + ", el monto total a pagar es de: $" + maquinaDEpagar(tipo, Bjamon, Bqueso, Bsalsa_tomate, Bmayonesa, Bmostaza, Btomate, Blechuga, Bcebolla));
}

/* PRINCIPAL */
callback(nombre, apellido, pagar);