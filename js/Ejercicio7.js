class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Agenda {
    constructor(tamanio) {
      this.contactos = [];
      this.tamanio = tamanio;
    }
  
    agregarContacto(contactoNuevo) {
      //verificar si el contacto existe
      if (this.existeContacto(contactoNuevo.nombre) === true) {
        console.log("El contacto ya existe");
      } else {
        //verificar si el metodo agendaLlena retorna false (if(!this.agendaLlena()) es lo mismo que usar lo de abajo)
        if(this.agendaLlena() === false){   //if(!this.agendaLlena())
            this.contactos.push(contactoNuevo);
        }
        
      }
      console.log(this.contactos);
    }
  
    existeContacto(nombre) {
      // es porque el contacto existe
      const contactoExistente = this.contactos.find((itemContacto) => {
        return nombre === itemContacto.nombre;
      });
      console.log(contactoExistente);
      if (contactoExistente) {
        console.log("El contaco existe");
        return true;
      } else {
        console.log("El contaco no existe");
  
        return false;
      }
    }
  
    agendaLlena() {
      if (this.contactos.length === this.tamanio) {
        console.log("Agenda llena");
        return true;
      } else {
        console.log("Agenda libre");
        return false;
      }
    }
  
    eliminarContacto(nombre){
      let contactosFiltrados = this.contactos.filter((itemContacto)=>{return itemContacto.nombre != nombre})
      this.contactos = contactosFiltrados
      console.log("Elemento eliminado")
      console.log(this.contactos)
    }
  }
  
  //crear la genda
  
  let agendaTelefonica = new Agenda(10);
  console.log(agendaTelefonica);
  // menu de opciones
  
  do {
    let opcion = parseInt(
      prompt(`Seleccione una opcion:
      1- Agregar un contacto
      2- consultar si el contacto existe
      3- Listar los contactos
      4- Buscar contacto
      5- Eliminar un contacto
      6- Consultar si la agenda esta llena
      7- Cuantos espacios libres en agenda quedan
      8- Agregar mas agendas`)
    );
  
    switch (opcion) {
      case 1:
        // 1- Agregar un contacto
        //pedir nombre y telefono
        let nombre = prompt("Ingrese un nombre").toLowerCase();
        let telefono = prompt("Ingrese el telefono");
        //crear el contacto
        let nuevoContacto = new Contacto(nombre, telefono);
        //invocar a agregar Contacto
        agendaTelefonica.agregarContacto(nuevoContacto);
        break;
      case 2:
        // 2- consultar si el contacto existe
        let nombreBuscado = prompt("Ingrese un nombre").toLowerCase();
        agendaTelefonica.existeContacto(nombreBuscado);
        break;
      case 3:
        // 3- Listar los contactos
        break;
      case 4:
        // 4- Buscar contacto
        break;
      case 5:
        // 5- Eliminar un contacto
        let contactoBorrar = prompt("Ingrese un nombre").toLowerCase();
        agendaTelefonica.eliminarContacto(contactoBorrar);
        break;
      case 6:
        // 6- Consultar si la agenda esta llena
        break;
      case 7:
        // 7- Cuantos espacios libres en agenda quedan
        break;
      case 8:
        // 8- Agregar mas agendas
        break;
      default:
        alert("Opción invalida");
        break;
    }
  } while (confirm("Continue?"));
  