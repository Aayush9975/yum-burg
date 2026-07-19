let cart = [];

function addToCart(name) {

    let item = cart.find(burger => burger.name === name);

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            name: name,
            quantity: 1
        });
    }

    displayCart();
}

function displayCart() {

    let cartList = document.getElementById("cart");

    cartList.innerHTML = "";

    cart.forEach(item => {

        cartList.innerHTML += `
            <li>
                ${item.name} - Quantity: ${item.quantity}
            </li>
        `;

    });

}