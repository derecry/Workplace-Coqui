console.log("El título de esta página es:", document.title);

let titulo = document.querySelector("#titulopr");
console.log(titulo);
console.log(titulo.textContent);

titulo.textContent = "La tienda de Derek";
titulo.style.color = "white";
titulo.style.background = "#28543c";
titulo.style.fontSize = "1.5rem";


let parrafo = document.querySelector("#parrafopr");
parrafo.textContent = parrafo.textContent + " Los precios están en pesos.";
parrafo.innerHTML += " <i>Los productos en rojo están agotados.</i>";

let caja1 = document.querySelector("#caja1");
caja1.innerHTML += "<p>Paquete de teclado y mouse: $1200</p>";

let presupuesto = prompt("¿Cuánto tienes para gastar?");

if (presupuesto === null || presupuesto.trim() === "" || !Number.isFinite(Number(presupuesto)) || Number(presupuesto) < 0) {
    caja1.innerHTML += "<p>No ingresaste un presupuesto válido.</p>";
} else if (Number(presupuesto) >= 1200) {
    caja1.classList.add("aprobado");
    caja1.innerHTML += "<p>Sí te alcanza para el paquete.</p>";
} else {
    caja1.classList.add("noaprobado");
    caja1.innerHTML += "<p>Te faltan $" + (1200 - Number(presupuesto)) + " para el paquete.</p>";
}

const bodega = [
    {nombre: "Mouse", precio: 100, stock: 3},
    {nombre: "Audífonos", precio: 200, stock: 1},
    {nombre: "Teclado", precio: 350, stock: 0},
    {nombre: "Monitor", precio: 1000, stock: 10},
    {nombre: "Bocinas", precio: 450, stock: 5}
];

let caja = document.querySelector(".caja-vacia");

bodega.forEach(item => {
    let clasecolor = "";
    if (item.stock > 0) {
        clasecolor = "aprobado";
    } else {
        clasecolor = "noaprobado";
    }

    caja.innerHTML += `
        <div class="cajaproducto ${clasecolor}">
            <h2>${item.nombre}</h2>
            <p>Precio: $${item.precio}</p>
            <p>Existencias: ${item.stock}</p>
        </div>
    `;
});
