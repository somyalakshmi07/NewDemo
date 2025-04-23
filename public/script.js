const earrings = [
  { name: "Golden Traditional", price: 599, rating: 4, image: "assets/images/ear1.jpg" },
  { name: "Blue Drop", price: 699, rating: 3, image: "assets/images/ear2.jpg" },
  { name: "Red Flower", price: 499, rating: 5, image: "assets/images/ear3.jpg" },
  { name: "Sapphire Dangle", price: 399, rating: 4, image: "assets/images/ear4.jpg" },
  { name: "Gold Stud", price: 299, rating: 3, image: "assets/images/ear5.jpg" },
];

function displayProducts() {
  const grid = document.querySelector('.product-grid');
  earrings.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src=\"${product.image}\" alt=\"${product.name}\" />
      <p><strong>${product.name}</strong></p>
      <p class=\"price\">Price: ₹${product.price}/-</p>
      <p class=\"stars\">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</p>
      <button class=\"details-btn\">Show Details</button>
    `;
    grid.appendChild(div);
  });
}

displayProducts();
