

const zapatos = new Articulo(1, "zapatos de temporada", 2000, "../resources/images/zapatos.jpeg");
const camisa = new Articulo(2, "camisa de vestir", 1500, "../resources/images/camisa.jpeg");
const pantalon = new Articulo(3, "pantalón jean", 1800, "../resources/images/pantalon.png");
const campera = new Articulo(4, "Parca de salón", 4000, "../resources/images/campera.jpeg");
const mochila = new Articulo(5, "Mochila aventurera", 3000, "../resources/images/mochila.png");
const articulosHTML = [zapatos, camisa, pantalon, campera, mochila];

let salida = "";

for (const elemento of articulosHTML) {
    salida += `<div class="col-md-3">
        <div class="card border-0 mb-3">
            <img src="${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
            <div class="card-body text-center">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">${elemento.precio}</p>
                <a href="" class="btn btn-primary" id="${"elemento" + elemento.id}" onclick="AgregaAlCarrito('${elemento.id}');" >Agrega a la compra</a>
            </div>
        </div>
    </div>`;
    // console.log("elemento" + elemento.id);
    

}

let contenido = document.getElementById("lista");
contenido.innerHTML = salida;

const elegidos = JSON.parse(sessionStorage.getItem("carrito"));
console.log("Elegidos: " );
console.log(elegidos);
let seleccion = "";
for (const elemento of elegidos) {
    let indice = Number(elemento);
    console.log(indice);
    let articulo = articulosHTML[indice].nombre;
    seleccion += '<li class="list-group-item">${artculo}<button type="button" class="btn btn-secondary">Secondary</button></li>'
}