const rutaImg = "../Imagenes/";

const tortasChocolate = [
  {
    nombre: "Amarga",
    descripcion: "Base de chocolate amargo tipo soufflé, cubierta con mermelada de frambuesa, crema batida y frutos rojos.",
    img: "../amargas/img01.jpg"
  },
  {
    nombre: "Brownie con merengue",
    descripcion: "Base de brownie húmedo, cubierta con dulce de leche, mousse de chocolate y merengue italiano.",
    img: rutaImg + "brownie.jpg"
  },
  {
    nombre: "Chocotorta",
    descripcion: "Clásica torta de galletitas Chocolinas con relleno de dulce de leche y queso crema.",
    img: rutaImg + "chocotorta.jpg"
  },
  {
    nombre: "Marquise con frutos rojos",
    descripcion: "Base de marquise de chocolate, con dulce de leche, crema y cobertura de frutos rojos.",
    img: rutaImg + "marquise.jpg"
  },
  {
    nombre: "Sacher",
    descripcion: "Torta húmeda de chocolate, rellena con dulce de leche y cubierta con baño de chocolate.",
    img: rutaImg + "sacher.jpg"
  },
  {
    nombre: "Bombón",
    descripcion: "Torta de chocolate con nueces, capas de dulce de leche, crema y un delicado toque de café.",
    img: rutaImg + "bombon.jpg"
  },
  {
    nombre: "Brownie con rulos",
    descripcion: "Base de brownie con dulce de leche, mousse de chocolate y rulos de chocolate por encima.",
    img: rutaImg + "rulos.jpg"
  },
  {
    nombre: "Húmeda de chocolate",
    descripcion: "Discos de chocolate bien húmedos, rellenos con crema, dulce de leche y frutos rojos.",
    img: rutaImg + "humeda.jpg"
  }
];

// RENDER
function render(lista, id) {
  const contenedor = document.getElementById(id);

  lista.forEach(item => {
    contenedor.innerHTML += `
      <div class="col-md-6 mb-4">
        <div class="item-postre d-flex align-items-start">

          <img src="${item.img}" 
               class="img-mini"
               onclick="abrirImagen('${item.img}')">

          <div class="info-postre ms-3">
            <h4>${item.nombre}</h4>
            <p>${item.descripcion}</p>
          </div>

        </div>
      </div>
    `;
  });
}

// 👇 ESTO TE FALTABA
render(tortasChocolate, "contenedor-chocolate");

// VISOR
function abrirImagen(src) {
  document.getElementById("visor").style.display = "flex";
  document.getElementById("img-grande").src = src;
}

function cerrarImagen() {
  document.getElementById("visor").style.display = "none";
}


// torta de frutillas
const tortasFrutales = [
  {
    nombre: "Torta de frutilla",
    descripcion: "Bizcochuelo suave con crema y frutillas frescas.",
    img: rutaImg + "frutilla.jpg"
  },
  {
    nombre: "Torta de durazno",
    descripcion: "Capas de bizcochuelo con crema y duraznos naturales.",
    img: rutaImg + "durazno.jpg"
  }
];

render(tortasFrutales, "contenedor-frutales");



//Tortas Clasicas

const tortasClasicas = [
  {
    nombre: "Selva Negra",
    descripcion: "Chocolate, crema y cerezas.",
    img: rutaImg + "selva.jpg"
  },
  {
    nombre: "Tres leches",
    descripcion: "Bizcochuelo húmedo bañado en tres leches.",
    img: rutaImg + "tresleches.jpg"
  }
];

render(tortasClasicas, "contenedor-clasicas");