let ArrayMultidimensional = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["nodejs", 15000]]
let ArrayElejidos = ["JAVASCRIPT", "REACT", "NODEJS"]
let nombre = "Franco"
let apellido = "Tito"

function calculadora(arrayCURSOS, arrayALUMNO) {
    let precioTotal = 0
    for (let i = 0; i < arrayCURSOS.length; i++) { // este for es para ir navagenado en los indice  0,1,2,3,4 (todos los curso)
        for (let j = 0; j < arrayALUMNO.length; j++) { // este for es para ir navegando en los indice 0,1 (un curso y su precio)
            if (arrayCURSOS[i][0].toUpperCase() == arrayALUMNO[j]) { // este if es para buscar el curso, y asi obtener el precio
                precioTotal = precioTotal + arrayCURSOS[i][1] //una vez encontrado el curso acumulamos (sumamos) en la variable de la linea 7
            }
        }
    }
    return precioTotal
}
function mostrar(nombre, apellido, arrayM, listaCursos, listaAlumno) { //esta funcion es para mostrar el mensaje final
    console.log(`Estimado ${nombre} ${apellido}, en función de los cursos seleccionados:`);
    for (let i = 0; i < listaAlumno.length; i++) { // este for es para mostrar los cursos seleccionados 
        console.log(`${i + 1}.-${listaAlumno[i]}`); // este mesanje sale por ejemplo asi:   1.- html5 
    }
    console.log(`El monto total a pagar es :$${arrayM(listaCursos, listaAlumno)}`) // aca llamos a array de la calculadora
    console.log("Bienvenido a la gran aventura Digital House.")
}
mostrar(nombre, apellido, calculadora, ArrayMultidimensional, ArrayElejidos) //aca ingresamos todos los parametros