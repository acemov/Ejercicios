let figuras = require("./collectibles");
// desafio 2 item 2
let Hot_Toys = figuras("hotToys")
let Bandai = figuras("bandai")
let Star_Wars = figuras("star wars")
// item 3
let unifiedCollectibles = [...Hot_Toys,...Bandai,...Star_Wars]
// item 4
let collectibles = {
    figuras : unifiedCollectibles,
    // item 5.a MOSTRAR TODO
    listFigures : function (){
        this.figuras.forEach(function(fig){
            return console.log(fig);
        })
    },
    // item 5.b UNA MARCA
    figuresByBrand: function(marcaAbuscar){

        let view = this.figuras.filter(function(buscar){
            return buscar.marca === marcaAbuscar
        })
        console.log(view);
    }
}
//5.c
console.log("------------item 5.a MOSTRAR TODO---------------");
console.log(collectibles.listFigures());
console.log("------------item 5.b UNA MARCA---------------");
console.log(collectibles.figuresByBrand("Bandai"));