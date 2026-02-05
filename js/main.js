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
                  <img src="${producto.image}" alt="${producto.name}">
                </div>
                <div class="card--food-container">
                  <h3 class="card--food-name">${producto.name}</h3>
                  <p class="card--food-price">$ ${producto.price}</p>
                  <p class="card--food-description">${producto.desc}</p>
                </div>
                <button class="agregar"
                data-name="${producto.name}" 
                data-price="${producto.price}" 
                data-image="${producto.image}"
                >Agregar</button>
            `;

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
          <img src="${producto.image}" alt="${producto.name}">
        </div>
        <div class="card--food-container">
          <h3 class="card--food-name">${producto.name}</h3>
          <p class="card--food-price">$ ${producto.price}</p>
          <p class="card--food-description">${producto.desc}</p>
        </div>
        <button class="agregar" 
        data-name="${producto.name}" 
        data-price="${producto.price}" 
        data-image="${producto.image}"
        >Agregar</button>
      `;

      menuContainer.appendChild(card);
    });
  })
  .catch(error => console.error("Error al cargar productos:", error));


  let cartStorage = JSON.parse(localStorage.getItem('myProducts')) || []

  function saveInStorage(){
    localStorage.setItem('myProducts', JSON.stringify(cartStorage))
  }

  document.addEventListener('click', (e) => {
  if ( e.target.classList.contains('agregar')) {
    const name = e.target.dataset.name;
    const price = e.target.dataset.price;
    const image = e.target.dataset.image;
  
    addToCart(name, price, image);
  }
});


function addToCart(name,price, image){
  const product = {
    name: name,
    price: price,
    image: image,
    quantity : 1,
  }

  cartStorage.push(product)
  saveInStorage()
  renderCart()

}

function renderCart(){
  const productsContainer = document.getElementById('products-container')
  if (!productsContainer) return;
  
  productsContainer.innerHTML = ''

  cartStorage.forEach((product, index) => {

    const productContent = document.createElement('div')
    productContent.classList.add('product-content')

    productContent.innerHTML =`
      <div class="img--food-container">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <h3>${product.name}</h3>
      <p>$ ${product.price}</p>
      <button class="eliminar">Eliminar</button>
    `

    productContent.querySelector('.eliminar').addEventListener('click', ()=>{
      cartStorage.splice(index, 1)
      saveInStorage()
      renderCart()
    })

    productsContainer.appendChild(productContent)

  })

  updateTotal()
}

function updateTotal(){
  const totalContainer = document.getElementById('totalContainer')

  const total = cartStorage.reduce((acc, product) => acc + (parseFloat(product.price) * product.quantity), 0)

  if(totalContainer){
    totalContainer.innerHTML = `
    <h2>Total: $${total.toFixed(3)}</h2>
    <button class="buy--button">COMPRAR</button>
    `
  }
}

renderCart()