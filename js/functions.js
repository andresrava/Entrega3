
function renderizaProductos() {
    let salida = "";

for (const elemento of productos) {
    salida += `<div class="col-md-3">
                    <div class="card border-0 mb-3">
                        <img src="${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${elemento.nombre}</h5>
                            <p class="card-text">${elemento.precio}</p>
                            <a href="" class="btn btn-primary" id="${"elemento" + elemento.id}" >Agrega a la compra</a>
                        </div>
                    </div>
                </div>`;
}

let contenido = document.getElementById("lista");
contenido.innerHTML = salida;
}

function activaBotones() {
    for (let i = 1; i <= productos.length; i++) {
        let clave = "elemento";
        clave = clave.concat(i);
        let boton = document.getElementById(clave);
        boton.addEventListener("click", () => {
            agregaAlCarrito(productos[i-1]);
        })
    }
}

function agregaAlCarrito(articulo) {
    console.log(articulo)
    let lista = sessionStorage.getItem('carrito');
    if (!lista) {
        lista = [];
    } else {
        lista = JSON.parse(lista); 
    }
    lista.push(JSON.stringify(articulo)); 
    sessionStorage.setItem('carrito', JSON.stringify(lista));
}

function renderizaCarrito() {
    
    const carrito = JSON.parse(sessionStorage.getItem('carrito'));
    let salida = "";
    let total = 0;
    for (const element of carrito) {
        let elementObj = JSON.parse(element);
        let nombre = elementObj.nombre;
        let precio = elementObj.precio;
        total += precio;
        salida += `<li>${nombre}-- precio: ${precio}<button type="button" class="btn btn-secondary">Elimina</button></li>`
    }
    let listaCarrito = document.getElementById("listaCarrito");
    listaCarrito.innerHTML = salida;
    let importe = document.getElementById("total");
    importe.innerText = total;
}

function calculaCuota (monto, cuotas) {
    let cuota = monto * 0.015 / (1-(1+0.015) ** (-cuotas));
    return cuota.toFixed(1);
}

function factura() {
    const carrito = JSON.parse(sessionStorage.getItem('carrito'));
    let total = document.getElementById("total").innerText;
    continua = confirm("¿Pagas contado?");
    if (continua) {
        // Si paga contado se termina el programa
        alert("Muchas gracias por tu compra");
    }
    else {
        //Si no paga contado la pregunto en cuántas cuotas
        while (true)   {
            let cuotas = prompt("¿Cuántas cuotas mensuales? (la tasa anual es de 18%)");
            if (isNaN(cuotas)) {
                //Valido
                alert("Por favor, ingrese solo números!")
            }
            else {
                //Calculo las cuotas
                cuotas = parseInt(cuotas);
                let cuota = calculaCuota(total, cuotas) 
                //Informo           
                alert("Tu cuota será: " + cuota);
                break
            }
        } 
        
    }
    
}

