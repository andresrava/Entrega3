

const zapatos = new Articulo(1, "zapatos de temporada", 2000, "../resources/images/mochila.png");
const camisa = new Articulo(2, "camisa de vestir", 1500, "https://www.google.com/imgres?q=camisa%20dibujo&imgurl=https%3A%2F%2Fw1.pngwing.com%2Fpngs%2F650%2F431%2Fpng-transparent-bow-tie-tshirt-necktie-drawing-cartoon-dress-shirt-suit-clothing.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-vthfj&docid=reMdy7T_hBqBzM&tbnid=fKPdOjlTP_SmPM&vet=12ahUKEwidmqWk6oyJAxWUl5UCHWJcGTsQM3oECCUQAA..i&w=920&h=920&hcb=2&ved=2ahUKEwidmqWk6oyJAxWUl5UCHWJcGTsQM3oECCUQAA");
const pantalon = new Articulo(3, "pantalón jean", 1800, "https://www.google.com/imgres?q=pantal%C3%B3n%20dibujo&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F948%2F645%2Fpng-transparent-pants-jeans-t-shirt-cartoon-jeans-blue-cartoon-electric-blue-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Fsearch%3Fq%3Dpantalon%2Bdibujo&docid=GpZyJH5AaTR-xM&tbnid=TKb-d26LO3bmLM&vet=12ahUKEwjU0vW36oyJAxUqq5UCHQ2-I9wQM3oECBkQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwjU0vW36oyJAxUqq5UCHQ2-I9wQM3oECBkQAA");
const campera = new Articulo(4, "Parca de salón", 4000, "https://www.google.com/imgres?q=campera%20dibujo&imgurl=https%3A%2F%2Fimg.freepik.com%2Fvector-premium%2Fdibujo-chaqueta-capucha-el_969863-364636.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.es%2Fvectores%2Fcampera%2F14&docid=ZYU9kUX12z7H3M&tbnid=HvdmyMfDfADC_M&vet=12ahUKEwi84rjF6oyJAxXZs5UCHf-jOgkQM3oECGMQAA..i&w=626&h=626&hcb=2&itg=1&ved=2ahUKEwi84rjF6oyJAxXZs5UCHf-jOgkQM3oECGMQAA");
const mochila = new Articulo(5, "Mochila aventurera", 3000, "https://www.google.com/imgres?q=mochila%20dibujo&imgurl=https%3A%2F%2Fcdn5.dibujos.net%2Fdibujos%2Fpintados%2F202419%2Funa-mochila-escolar-colegio-12791869.jpg&imgrefurl=https%3A%2F%2Fgaleria.dibujos.net%2Fcolegio%2Funa-mochila-escolar-pintado-por--12791869.html&docid=IYM2b7Uqz2RsoM&tbnid=mP0hJ06Hfx6JQM&vet=12ahUKEwjJ7NDV6oyJAxXnuJUCHf6XKuoQM3oECFwQAA..i&w=600&h=470&hcb=2&ved=2ahUKEwjJ7NDV6oyJAxXnuJUCHf6XKuoQM3oECFwQAA");
const articulosHTML = [zapatos, camisa, pantalon, campera, mochila];

let salida = "";

for (const elemento of articulosHTML) {
    salida += `<div class="col-md-3">
        <div class="card border-0 mb-3">
            <img src="${elemento.imagen}" class="card-img-top" alt="${elemento.nombre}">
            <div class="card-body text-center">
                <h5 class="card-title">${elemento.nombre}</h5>
                <p class="card-text">$${elemento.precio}</p>
            </div>
        </div>
    </div>`;
}

let contenido = document.getElementById("lista");
contenido.innerHTML = salida;
