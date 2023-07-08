let nro1 = 3;
let nro2 = 5;
let operador = ""
switch (operador){
    case "+":
        console.log("El resultado de "+nro1+" + "+nro2+" = " +nro1+nro2)
        break;
    case "-":
        console.log("El resultado de "+nro1+" - "+nro2+" = " +nro1-nro2)
        break;
    case "*":
        console.log("El resultado de "+nro1+" * "+nro2+" = " +nro1*nro2)
        break;
    case "/":
        console.log("El resultado de "+nro1+" / "+nro2+" = " +nro1/nro2)
        break;
    default:
        console.log("No indico ninguna operacion aritmetica")
}