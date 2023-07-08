let electrodomésticosArrays = ["lavaropas", "cafetera", "heladera", "microondas", "vatidora", "lavaplatos"]
// acciones
// de forma aleatoria elige uno
console.log(electrodomésticosArrays[Math.floor(Math.random() * electrodomésticosArrays.length)])
// Extraer el primer elemento del array y agregarlo al final del mismo.
let cajon = electrodomésticosArrays.shift();
console.log(electrodomésticosArrays.push(cajon));
//Agregar al final del array dos (2) nuevos productos.
electrodomésticosArrays.push("aspiradora", "television")
console.log(electrodomésticosArrays)
//cantidad de elementos
console.log("El array tiene " + electrodomésticosArrays.length + " elementos")
//buscador 
let elementoAbuscar = "television";
if ((electrodomésticosArrays.indexOf(elementoAbuscar) != -1)) {
    console.log("Producto encontrado");
} else {
    console.log("Producto no encontrado")
}
//unir los elementos por un espacio
let cajon2 = electrodomésticosArrays.join(" ")
console.log(cajon2)
//saber la cantidad de elemento que pose el punto anterior
console.log("La cantidad de elementos es: " + cajon2.length)
//cambiando una parte de una cadena de texto
console.log(cajon2.replace("cafetera", "aguatera"))
//convertimos la ultima cadena de texto obtenica en array
console.log(cajon2.split(" "))

