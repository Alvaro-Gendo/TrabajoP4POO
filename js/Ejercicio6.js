class Libro {
  constructor(isbn, titulo, autor, numPaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }

  set cambiarIsbn(isbnNuevo) {
    this.isbn = isbnNuevo;
  }
  set cambiarTitulo(tituloNuevo) {
    this.titulo = tituloNuevo;
  }

  set cambiarAutor(autorNuevo) {
    this.autor = autorNuevo;
  }

  set cambiarNumPaginas(numPaginasNuevo) {
    this.numPaginas = numPaginasNuevo;
  }

  get mostrarIsbn() {
    return this.isbn;
  }

  get mostrarTitulo() {
    return this.titulo;
  }

  get mostrarAutor() {
    return this.autor;
  }

  get mostrarNumPaginas() {
    return this.numPaginas;
  }

  mostrarLibro() {
    document.write(`El libro ${this.mostrarTitulo}, con ISBN: ${this.mostrarIsbn}, creado por el 
        autor ${this.mostrarAutor}, tiene ${this.mostrarNumPaginas} páginas<br>`);
  }
}

let libros = [];

let libro1 = new Libro("9788418008504","La llamada de Cthulhu","H.P Lovecraft",96);
let libro2 = new Libro("9788417430702","En las montañas de la locura","H.P Lovecraft",240);

libros.push(libro1);
libros.push(libro2);


let maxPaginas = Math.max(libros)

function maxPag(){
    if(libro1.numPaginas > libro2.numPaginas){
        document.write(`<p>El libro ${libro1.titulo} tiene mas páginas</p>`)
    }else if(libro1.numPaginas < libro2.numPaginas){
        document.write(`<p>El libro ${libro2.titulo} tiene mas páginas</p>`)
    }else{
        document.write(`<p>El libro ${libro1.titulo} y ${libro2.titulo} tienen las mismas cantidad páginas</p>`)
    }
}

for (let i = 0; i < libros.length; i++) {
   libros[i].mostrarLibro();
}

maxPag()