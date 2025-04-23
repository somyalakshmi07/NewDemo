const products = [
    { id: 1, name: "Phone", price: 499, image: "assets/images/phone.jpg" },
    { id: 2, name: "Laptop", price: 999, image: "assets/images/laptop.jpg" },
    // Add more products here
  ];
  
  const productList = document.querySelector('.product-list');
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.image}" width="100%">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
  
  function addToCart(id) {
    alert(`Product ${id} added to cart`);
  }
  