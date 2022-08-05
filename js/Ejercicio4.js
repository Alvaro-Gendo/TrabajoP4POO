class Producto{
    constructor(nombre, precio, codigo){
        this.nombre = nombre
        this.precio = precio 
        this.codigo = codigo
    }
    
    set cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre
    }
    set cambiarPrecio(nuevoPrecio){
        this.nombre = nuevoPrecio
    }
    set cambiarCodigo(nuevoCodigo){
        this.nombre = nuevoCodigo
    }
    get mostrarNombre(){
        return this.nombre
    }
    get mostrarPrecio(){
        return this.precio
    }
    get mostrarCodigo(){
        return this.codigo
    }

    infoProducto(){
       document.write(`<p>El producto ${this.nombre} cuesta $${this.precio}, su codígo es ${this.codigo}.</p>`)
    }
}

let productos = []

let azucar = new Producto("Azucar", + 180,"789812184")
let leche = new Producto("leche", + 150,"7984121423")
let agua = new Producto("Agua", + 100,"7894132145")

productos.push(azucar)
productos.push(leche)
productos.push(agua)

for(let i=0; i < productos.length; i++){
    productos[i].infoProducto();
}