// Earrings Product Data
const earringsProducts = [
  {
    name: "Elegant Stud Earrings",
    price: "₹299/-",
    rating: "★★★★☆",
    image: "assets/images/earrings1.jpg"
  },
  {
    name: "Dangling Earrings",
    price: "₹449/-",
    rating: "★★★★★",
    image: "assets/images/earrings2.jpg"
  }
];

// Dynamically inject earrings into the page
const container = document.getElementById("earrings-container");

earringsProducts.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <p><strong>${product.name}</strong></p>
    <p class="price">Price: ${product.price}</p>
    <p class="stars">${product.rating}</p>
    <button class="details-btn">Show Details</button>
  `;
  container.appendChild(card);
});
async function addToCart(productId) {
  const token = localStorage.getItem('token');
  const res = await fetch('http://localhost:5000/api/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({ productId })
  });
  const data = await res.text();
  alert(data);
}
