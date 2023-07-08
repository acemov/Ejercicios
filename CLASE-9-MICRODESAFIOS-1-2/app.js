let lis = require("./peliculas");
/* for (let i = 0; i < lis.length; i++) {
    console.log(lis[i])
} 

/* let libreria = require("fs");
let datos = libreria.readFileSync(__dirname + "/mensaje.txt", "utf-8");
console.log(datos)
 */

// Item 2.a

function buscarBici(inID) {
    let encontrar = lis.filter(function (numeros) {
        return numeros.id == inID
    })
    return encontrar
}

// Item 2.b

function venderBici(Nid) {
    if (buscarBici(Nid).length > 0) {
        let sevende = buscarBici(Nid)
        sevende[0].vendida = "si"
        for (let i = 0; i < lis.length; i++) {
            if (lis[i].id === sevende[0].id) {
                lis[i].vendida = "si"
            }
        }
        return sevende;
    } else {
        return "Bicicleta no encontrada"
    }
}

// Item 2.c
function biciParaLaVenta(lista) {
    let noVendidas = lista.filter(function (todo) {
        return todo.vendida != "si"
    })
    return noVendidas
}

// Item 2.d
function total(lis2) {
    let totalDeVentas = lis2.reduce(function (acumulador, objeto) {
        if (objeto.vendida === "si") {
            return acumulador + objeto.precio;
        } else {
            return acumulador; // Devolver el acumulador sin cambios
        }
    }, 0);
    return totalDeVentas
}




// Item 2.a
console.log("------------------------Item 2.a------------------------");
let ingresarid = 14;
console.log(buscarBici(ingresarid))
// Item 2.b
console.log("------------------------Item 2.b------------------------");
let ingresarid2 = 4;
console.log(venderBici(ingresarid2))
let ingresarid3 = 3;
console.log(venderBici(ingresarid3))
// Item 2.c
console.log("------------------------Item 2.c------------------------");
console.log(biciParaLaVenta(lis))
// Item 2.d
console.log("------------------------Item 2.d------------------------");
console.log(total(lis));


// extra
// item 1
console.log("------------------------ EXTRA item 1------------------------");
console.log(total(lis));
function aumentoBici(porcentaje, lista) {
    let aumento = lista.map(function (dato) {
        dato.precio = (porcentaje * dato.precio / 100) + dato.precio
        return dato
    })
    return aumento
}
console.log(aumentoBici(100, lis))
// item 2
console.log("------------------------ EXTRA item 2------------------------");
function biciPorRodado(rodado) {
    encontrados = lis.filter(function (numero) {
        return rodado == numero.rodado
    })
    return encontrados
}
console.log(biciPorRodado(30))
// item 3
console.log("------------------------ EXTRA item 3------------------------");
function listarTodasLasBici (lista){
    lista.forEach(function(bicis){
        console.log(bicis.nombre)
    })
}
console.log(listarTodasLasBici(lis));