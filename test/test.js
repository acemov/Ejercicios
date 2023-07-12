const express = require("express");
const path = require("path");
const app = require();

app.listen(3000, () => { console.log("tamo activo") });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});
app.get("/404", (req, res) => {
    res.send("Error página no encontrada")
});