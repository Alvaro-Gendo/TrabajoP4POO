class rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  area(area) {
    area = alto * ancho;
    document.write(`<p>El area del retángulo es ${area}</p>`);
  }

  perimetro(perimetro) {
    perimetro = 2 * (alto + ancho);
    document.write(`<p>El perimetro del retángulo es ${perimetro}</p>`);
  }

  set modificarAlto(nuevaAltura) {
    this.alto = nuevaAltura;
  }

  set modificarAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }

  get mostarAltura() {
    return this.alto;
  }

  get mostarAncho() {
    return this.ancho;
  }
}

let valores = new rectangulo(0, 0);

let alto = Number(prompt("Ingrese un número(altura)"));
let ancho = Number(prompt("Ingrese un número(ancho)"));

let resultado = 0;

document.write(`<p>El alto del retángulo es ${alto.mostarAltura}</p>`);
document.write(`<p>El ancho del retángulo es ${ancho.mostarAncho}</p>`);

valores.area(resultado);
valores.perimetro(resultado);
