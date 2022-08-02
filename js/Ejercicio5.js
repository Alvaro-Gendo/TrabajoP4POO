class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, fechaDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.fechaDeNacimiento = fechaDeNacimiento;
  }
  set cambiarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
  set cambiaredad(nuevaedad) {
    this.edad = nuevaedad;
  }
  set cambiarDni(nuevoDni) {
    this.dni = nuevoDni;
  }
  set cambiarSexo(nuevoSexo) {
    this.sexo = nuevoSexo;
  }
  set cambiarPeso(nuevoPeso) {
    this.peso = nuevoPeso;
  }
  set cambiarAltura(nuevaAltura) {
    this.altura = nuevaAltura;
  }
  set cambiarFechadeNacimiento(nuevaFechaDeNacimiento) {
    this.fechaDeNacimiento = nuevaFechaDeNacimiento;
  }
  get mostrarNomber() {
    return this.nombre;
  }
  get mostrarEdad() {
    return this.edad;
  }
  get mostrarDni() {
    return this.dni;
  }
  get mostrarSexo() {
    return this.sexo;
  }
  get mostrarPeso() {
    return this.peso;
  }
  get mostrarAltura() {
    return this.altura;
  }
  get mostrarFechaDeNacimiento() {
    return this.fechaDeNacimiento;
  }

  mostrarGeneracion(){
    
  }

  mayorDeEdad(){
    if(this.edad >= 18){
        document.write(`<p>${this.nombre} es mayor de 18 años</p>`)
    }else{
        document.write(`<p>${this.nombre} es menor de 18 años</p>`)
    }
  }

  mostrarDatos(){
    document.write(`<ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Edad: ${this.edad}</li>
    <li>DNI: ${this.dni}</li>
    <li>Sexo: ${this.sexo}</li>
    <li>Peso: ${this.peso}</li>
    <li>Altura: ${this.altura}</li>
    <li>Fecha de Nacimiento: ${this.fechaDeNacimiento}</li>
    </ul>`)
  }  
}

let personas = []

let alvaro = new Persona("Alvaro Ruiz", 27, Math.floor(Math.random()* (99999999 - 11111111)+ 11111111), "Masculino", "62kg", "1.60m","07/06/1995")
let sofia = new Persona("Sofia Ruiz", 33, Math.floor(Math.random()* (99999999 - 11111111)+ 11111111), "Femenino", "58kg", "1.60m", "24/11/1988")
let facundo = new Persona("Facundo Ojeda", 12, Math.floor(Math.random()* (99999999 - 11111111)+ 11111111), "Masculino", "60kg", "1.60m", "30/12/2010")

personas.push(alvaro)
personas.push(sofia)
personas.push(facundo)

for (let i = 0; i < personas.length; i++) {
    personas[i].mayorDeEdad();
}
for (let i = 0; i < personas.length; i++) {
    personas[i].mostrarDatos();
}