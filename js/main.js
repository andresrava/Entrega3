
const productos = [
    { "id": 1, "nombre": "zapatos de temporada", "precio": 2000, "imagen": "../resources/images/zapatos.jpeg" },
    { "id": 2, "nombre": "camisa de vestir", "precio": 1500, "imagen": "../resources/images/camisa.jpeg" },
    { "id": 3, "nombre": "pantalón jean", "precio": 1800, "imagen": "../resources/images/pantalon.png" },
    { "id": 4, "nombre": "Parca de salón", "precio": 4000, "imagen": "../resources/images/campera.jpeg" },
    { "id": 5, "nombre": "Mochila aventurera", "precio": 3000, "imagen": "../resources/images/mochila.png"} 
];

renderizaProductos();

activaBotones(); 

renderizaCarrito();

let btnFactura = document.getElementById("factura");
btnFactura.addEventListener("click", () => {
    factura();
})