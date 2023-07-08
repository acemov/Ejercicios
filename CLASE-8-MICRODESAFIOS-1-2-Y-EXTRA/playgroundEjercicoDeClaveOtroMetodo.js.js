function laClaveSecreta(caracteres) {
    let arrayenreversa = caracteres.reverse();
    let Astring = arrayenreversa.join("")

    let remplazo = Astring.replace(/\*/g,"") //la g  es un indicador de global, asi que replanplaza a todas, y las dos barras // es parte de la g, ya que sin esas barras la g no puede funcionar, PEROOO la otra barra \ sirve para que no se comente el codigo, si quitamos esta barra \ el codigo se comensa y el indicador no funcionaria 
    return remplazo
}
laClaveSecreta(["s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]);  
laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"])