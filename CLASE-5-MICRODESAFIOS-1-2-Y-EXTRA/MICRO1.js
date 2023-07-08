/* precios */
const Compacto = 14000;
const Mediano = 17000;
const Camioneta = 28000;
const SillaBebe = 1200;
/* nombres */
const CompactoNAME = "COMPACTO"
const MedianoNAME = "MEDIANO"
const CamionetaNAME = "CAMIONETA"


/* lo que el cliente ingresa */
let sillaSIoNO = false;
let modelo = Camioneta;
let dias = 10;

/* FUNCION cuando pide la silla*/
function AlquilerVehículoConSilla(TipoVehiculo, DiasAlquiler, SillaBebe) {
    return (TipoVehiculo * DiasAlquiler) + (SillaBebe * DiasAlquiler);
}
/* FUNCION cuando NO pide la silla*/
function AlquilerVehículoSinSilla(TipoVehiculo, DiasAlquiler) {
    return TipoVehiculo * DiasAlquiler;
}

/* FUNCION de acuerdo al mesanje*/
function silla(TipoVehiculo, name, DiasAlquiler) {
    if (sillaSIoNO) {
        return console.log("Estimado cliente: En base al tipo de vehículo que es " + name + " alquilado, considerando los " + DiasAlquiler + " dias utilizados y la silla para bebes, el monto total a pagar es de: $" + AlquilerVehículoConSilla(TipoVehiculo, DiasAlquiler, SillaBebe));
    }
    else {
        return console.log("Estimado cliente: En base al tipo de vehículo que es " + name + " alquilado, considerando los " + DiasAlquiler + " dias utilizados, el monto total a pagar es de: $" + AlquilerVehículoSinSilla(TipoVehiculo, DiasAlquiler));
    }
}

/* PRINCIPAL */
if (modelo === Compacto) {
    silla(Compacto, CompactoNAME, dias)
} else if (modelo === Mediano) {
    silla(Mediano, MedianoNAME, dias)
} else if (modelo === Camioneta) {
    silla(Camioneta, CamionetaNAME, dias)
} else {
    "Estimado cliente, hay un ERROR en el sistema, lo siento."
}

