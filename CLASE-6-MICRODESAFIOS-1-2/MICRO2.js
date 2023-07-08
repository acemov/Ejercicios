let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"]

let nombreAbuscar = "Thor: amor y trueno";

function buscar(lista, nombre) {
    let cajon1 = lista.indexOf(nombre)
    if (cajon1 !== -1) {
        lista.splice(cajon1, 1)
        let cajon2 = nombre.toUpperCase();
        lista.unshift(cajon2)
    }
    return lista
}
console.log("----------------------------")
console.log(buscar(peliculas, nombreAbuscar))
console.log("----------------------------")
let newPeliculas = "Counter-Strike NOP Vértigo Nick Avatar"
let newPeliculasArray = newPeliculas.split(" ");
// excluimos el juego
let juegos = newPeliculasArray.shift()
console.log("----------------------------")
console.log(newPeliculasArray)
console.log("----------------------------")
function unirarrays(array1, array2) {
    return array1.concat(array2);
}
console.log("La union de los array es: ")
console.log(unirarrays(peliculas, newPeliculasArray))