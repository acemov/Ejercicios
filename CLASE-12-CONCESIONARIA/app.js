/* requerir módulo autos */
let autosImportados = require('./autos.js')
const concesionaria = {
    autos: autosImportados,
    buscarAuto: function (patente) {
        let autoEncontrado = this.autos.find(function (valor) {
            return valor.patente == patente;
        });
        if (typeof (autoEncontrado) === "undefined") {
            autoEncontrado = null
            return autoEncontrado
        } else {
            return autoEncontrado;
        }
    },
    venderAuto: function (patente) {
        if (this.buscarAuto(patente) !== null) {
            this.buscarAuto(patente).vendido = true
            return this.buscarAuto(patente)
        } else {
            return "auto no encontrado"
        }
    },
    // muestra todos los autos que no esten vendidos = false
    autosParaLaVenta: function () {
        let mostarFalse = this.autos.filter(function (unidad) {
            return unidad.vendido == false
        })
        return mostarFalse
    },
    // muestra todos los autos que sean menores a 100km y que no esten vendidos 
    autosNuevos: function () {
        let mostrarMenosDe100 = this.autosParaLaVenta().filter(function (kmetros) {
            return kmetros.km < 100
        })
        return mostrarMenosDe100
    },
    listaDeVentas: function () {
        let mostarTrue = this.autos.filter(function (unidad) {
            return unidad.vendido == true
        })
        let listaDePrecios = mostarTrue.map(function (unidades) {
            return unidades.precio
        })
        return listaDePrecios
    },
    totalDeVentas: function () {
        let precioVendidos = this.listaDeVentas()
        let total = precioVendidos.reduce(function (sumatoria, precio) {
            return sumatoria + precio
        }, 0)
        return total
    },
    puedeComprar: function (auto, persona) {
        if ((persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas)) && (auto.precio <= persona.capacidadDePagoTotal)) {
            return true
        }

        return false
    },
    autosQuePuedeComprar: function(user){
        // CON FOR
        let enVentaFalse = this.autosParaLaVenta()
        let puede = []
        for (let i = 0; i < enVentaFalse.length; i++) {
            if (this.puedeComprar(enVentaFalse[i],user)){
                puede.push(enVentaFalse[i])
            }
        }
        return puede
        /* CON FILTER 
        let puede = this.autosParaLaVenta().filter(function(unidades){
                return concesionaria.puedeComprar(unidades,user)
        })
        return puede */
    }

};
let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
}

/* console.log(concesionaria.venderAuto("APL123f"))
console.log("-------------------------------------------");
console.log(concesionaria.autos);
console.log("-------------------------------------------");
console.log(concesionaria.autosParaLaVenta());
console.log("-------------------------------------------");
console.log(concesionaria.autosNuevos());
console.log("-------------------------------------------");
console.log(concesionaria.autos);
console.log("-------------------------------------------");
console.log(concesionaria.listaDeVentas());
console.log(concesionaria.totalDeVentas());
console.log("-------------------------------------------");
console.log(concesionaria.puedeComprar(concesionaria.buscarAuto("APL123"), persona)); */
console.log(concesionaria.autosQuePuedeComprar(persona));