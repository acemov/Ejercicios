let fs = require("fs");
function importar(nombre) {
    {
        if (nombre === "hotToys") {
            array = JSON.parse(fs.readFileSync(__dirname + "/datos/figuras1.json"));
            return array;
        } else if (nombre === "bandai") {
            array = JSON.parse(fs.readFileSync(__dirname + "/datos/figuras2.json"));
            return array;
        } else if (nombre === "star wars") {
            array = JSON.parse(fs.readFileSync(__dirname + "/datos/figuras3.json"));
            return array;
        }else{
            return "nombre mal escrito"
        }
    };

}
module.exports = importar;