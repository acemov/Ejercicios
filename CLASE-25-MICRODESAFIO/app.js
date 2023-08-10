const express = require('express');
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, ("./public"))
app.use(express.static(publicPath))

const viewsPath = path.resolve(__dirname,("./views"))
app.use(express.static(viewsPath))

app.listen(3000, () => {
    console.log("Servidor corriendo");
})
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, ("./views/home.html")))
})