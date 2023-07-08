function TablaDeMultiplicar() {
    console.log("Tabla de multiplicar")
    console.log("--------------------")
    for (let i = 1; i <= 10; i++) {
        console.log("--------------------")
        console.log("Tabla del " + i)
        console.log("--------------------")
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`)
        }
    }
}
TablaDeMultiplicar()