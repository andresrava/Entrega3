
const productos = [
    { "id": 1, "nombre": "zapatos de temporada", "precio": 2000, "imagen": "../resources/images/zapatos.jpeg", "promocion": true },
    { "id": 2, "nombre": "camisa de vestir", "precio": 1500, "imagen": "../resources/images/camisa.jpeg", "promocion": true },
    { "id": 3, "nombre": "pantalón jean", "precio": 1800, "imagen": "../resources/images/pantalon.png", "promocion": false },
    { "id": 4, "nombre": "Parca de salón", "precio": 4000, "imagen": "../resources/images/campera.jpeg", "promocion": false },
    { "id": 5, "nombre": "Mochila aventurera", "precio": 3000, "imagen": "../resources/images/mochila.png", "promocion": true } 
];

renderizaProductos();

activaBotones(); 

renderizaCarrito();

let btnFactura = document.getElementById("factura");
btnFactura.addEventListener("click", () => {
    factura();
})

let chPromo = document.getElementById('flexCheckDefault');
chPromo.addEventListener("change", renderizaProductos);