function Articulo(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
}




function AgregaAlCarrito(codigo) {
    
    let lista = sessionStorage.getItem('carrito');
    if (!lista) {
        lista = [];
    } else {
        lista = JSON.parse(lista);
        
    }
    lista.push(codigo);
    sessionStorage.setItem('carrito', JSON.stringify(lista));
    console.log(lista);
}

