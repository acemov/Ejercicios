// funcion de convertir a mayuscula
function minusculaAmayusculas(palabra) {
    return console.log("La frase o palabra en minuscula ( " + palabra + " ) en mayuscula es: " + palabra.toUpperCase());
}
// da el tipo de dato 
function tipo(dato) {
    return console.log("El tipo de datos es: " + typeof (dato));
}
// calcula la edad en años perros
function edadPERROS(añoH) {
    return console.log("Si el perro tiene " + añoH + " años humanos, entoces en años perros tendra: " + añoH * 7)
}
//calculadora de hora de trabajo
function calculadoraDeHoras(salarioM,CantidadDias,CantidadHoras){
    return console.log("Si en el mes gano: $"+salarioM+", trabajo la cantidad de dias: "+CantidadDias+" y la cantidad de horas promedio son: "+CantidadHoras+ "hs. Entoces el valor de una hora de trabajo es: " + (salarioM / CantidadDias)/CantidadHoras);
}

//Lo que ingresa el usuario

//para la funcion de convertidor
let frase = "Holaa genteee, como estan?!!!";

//para la funcion tipo de dato
let que_tipo_de_dato_soy = 34;

//para la funcion de años caninos
let mi_perro_tiene = 6;

//calculadora de cuanto vale una hora de trabajo
let salarioMensual = 80000;
let diaslaborales = 15;
let CantidadHoras = 7;

// LLamando a las funciones
minusculaAmayusculas(frase);
tipo(que_tipo_de_dato_soy);
edadPERROS(mi_perro_tiene);
calculadoraDeHoras(salarioMensual,diaslaborales,CantidadHoras);
