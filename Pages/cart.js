// 1. Get the stored data from localStorage
let productName = localStorage.getItem("name");
let productPrice = localStorage.getItem("price");
let productImage = localStorage.getItem("image");

let cart = document.getElementById("cart-product");

// 2. Check if the cart has items before trying to render it
if (productName) {
    cart.innerHTML = `
        <img src="${productImage}" width="200" alt="${productName}">
        <h2>${productName}</h2>
        <h3>${productPrice}</h3>
        <button onclick="removeCart()">Remove</button>
    `;
} else {
    cart.innerHTML = `<p>Your cart is empty.</p>`;
}

// 3. Clear the cart and refresh
function removeCart() {
    localStorage.clear();
    location.reload();
}