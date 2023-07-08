let pagoMes = 2000;
let consumoKWH = 400;
let consumoMax = 300
let respuesta = consumoKWH > consumoMax ? /*if*/ "Debido a que su hogar tuvo un consumo de "+ consumoKWH + "KWH en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de " + (pagoMes + ((20*pagoMes)/100)): /*else*/ "Usted paga: " + pagoMes + "y consumio: "+consumoKWH; console.log(respuesta);