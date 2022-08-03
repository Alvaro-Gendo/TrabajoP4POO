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
    if(this.fechaDeNacimiento >= 1930 && this.fechaDeNacimiento <= 1948){
      document.write(`${this.nombre} pertenece a la Silent Gerenarición, su rasgo carateristico es Austeridad.<br>`)
    }else if(this.fechaDeNacimiento >= 1949 && this.fechaDeNacimiento <= 1968){
      document.write(`${this.nombre} pertenece a la Baby Boom, su rasgo carateristico es Ambición.<br>`)
    }else if(this.fechaDeNacimiento >= 1969 && this.fechaDeNacimiento <= 1980){
      document.write(`${this.nombre} pertenece a la Generación X, su rasgo carateristico es Obsesión por el éxito.<br>`)
    }else if(this.fechaDeNacimiento >= 1981 && this.fechaDeNacimiento <= 1993){
      document.write(`${this.nombre} pertenece a la Generación Y(millennials), su rasgo carateristico es Frustración.<br>`)
    }else if(this.fechaDeNacimiento >= 1994 && this.fechaDeNacimiento <= 2010){
      document.write(`${this.nombre} pertenece a la Generación Z, su rasgo carateristico es Irreverencia.<br>`)
    }else if(this.fechaDeNacimiento >= 2011){
      document.write(`${this.nombre} pertenece a la Generación de Cristal, su rasgo carateristico es Ofendido.<br>`)
    }else{
      document.write("Fecha erronea")
    }
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

let alvaro = new Persona("Alvaro Ruiz", 27, Math.floor(Math.random()* (99999999)), "Masculino", "62kg", "1.60m",1995)
let sofia = new Persona("Sofia Ruiz", 33, Math.floor(Math.random()* (99999999)), "Femenino", "58kg", "1.60m",1988)
let facundo = new Persona("Facundo Ojeda", 12, Math.floor(Math.random()* (99999999)), "Masculino", "60kg", "1.60m",2010)

personas.push(alvaro)
personas.push(sofia)
personas.push(facundo)

for (let i = 0; i < personas.length; i++) {
    personas[i].mayorDeEdad();
}
for (let i = 0; i < personas.length; i++) {
    personas[i].mostrarDatos();
}

for(let i = 0;i < personas.length; i++){
  personas[i].mostrarGeneracion();
}