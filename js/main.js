function openButton(){
    document.getElementById ("header--navbar").style.width = "60%"
    document.getElementById ("open--Button").style.display = "none"
    document.getElementById ("close--Button").style.display = "block"
    document.getElementById ("close--Button").style.zIndex = "2"
    document.getElementById ("header--navbar--ul").style.width = "100%"
    
}

function closeButton(){
    document.getElementById ("header--navbar").style.width = "0%"
    document.getElementById ("open--Button").style.display = "block"
    document.getElementById ("close--Button").style.display = "none"
    document.getElementById ("close--Button").style.zIndex = "0"

} 

// Seleccionamos el contenedor de las tarjetas
const cardsContainer = document.getElementById("cards-container");

// Cargar productos desde JSON
fetch("productos.json")
    .then(response => response.json())
    .then(productos => {
        // Tomamos solo los 3 primeros productos
        const productosMostrados = productos.slice(0, 3);

        productosMostrados.forEach(producto => {
            // Crear la tarjeta
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <div class="img--food-container">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="card--food-container">
                    <h3 class="card--food-name">${producto.nombre}</h3>
                    <p class="card--food-price">${producto.precio}</p>
                    <p class="card--food-description">${producto.descripcion}</p>
                </div>
                <a href="#">AGREGAR A MI PEDIDO</a>
            `;

            // Insertar tarjeta en el contenedor
            cardsContainer.appendChild(card);
        });
    })
    .catch(error => console.error("Error al cargar productos:", error));

// Seleccionamos el contenedor de las tarjetas
const menuContainer = document.getElementById("ver-menu-cards-container");

// Cargar productos desde JSON
fetch("productos.json")
  .then(response => response.json())
  .then(productos => {
    productos.forEach(producto => {
      // Crear la tarjeta
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <div class="img--food-container">
          <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="card--food-container">
          <h3 class="card--food-name">${producto.nombre}</h3>
          <p class="card--food-price">${producto.precio}</p>
          <p class="card--food-description">${producto.descripcion}</p>
        </div>
        <a href="#">AGREGAR A MI PEDIDO</a>
      `;

      menuContainer.appendChild(card);
    });
  })
  .catch(error => console.error("Error al cargar productos:", error));
