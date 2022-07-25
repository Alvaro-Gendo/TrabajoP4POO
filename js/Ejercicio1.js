let auto = {
    marca: "Audi",
    modelo: "R8",
    colores: ["rojo"," gris"," negro"," azul"],
    velocidadMaxima: "331km/h",
    precio: "170.000€",
     encenderMotor: function (){document.write(`Encendiendo el motor`)},
     apagandoMotro: function (){document.write(`Apagando el motor`)}
}

document.write(`Marca: ${auto.marca}`)
document.write(`<br>Modelo: ${auto.modelo}`)
document.write(`<br>Precio: $${auto.precio}`)
document.write(`<br>Velocidad maxima ${auto.velocidadMaxima}`)
document.write(`<br>Colores ${auto.colores}`)
document.write("<br>")

auto.encenderMotor()
document.write("<br>")
auto.apagandoMotro()
console.log(auto)

