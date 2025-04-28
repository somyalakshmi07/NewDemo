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
