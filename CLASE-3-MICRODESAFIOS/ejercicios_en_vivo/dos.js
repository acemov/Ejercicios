let nombre = "Franco";
let apellido = "Gallego";
let sueldoActual = 10000;
let porcentajeAumento = 25;
let calculoAumentado = ((sueldoActual * porcentajeAumento)/100);
let nuevoSueldo = calculoAumentado + sueldoActual;

console.log ("Hola, estimado "+nombre);
console.log ("En base a suldo actual: ");
console.log ("$"+sueldoActual);
console.log ("Ha recibido un aumento del 25%:");
console.log ("$"+ calculoAumentado);
console.log ("y su nuevo sueldo es de: $"+ nuevoSueldo);