function buyNow() {
    // 1. Grab the elements
    const nameElement = document.getElementById("name");
    const priceElement = document.getElementById("price");
    const imageElement = document.getElementById("img-org");

    // 2. Extract their specific content (.innerText and .src)
    // .replace() helps clean up extra spaces or words if needed, but innerText works great here
    const productName = nameElement.innerText; 
    const productPrice = priceElement.innerText; 
    const productImage = imageElement.src;

    // 3. Store them in localStorage
    localStorage.setItem("name", productName);
    localStorage.setItem("price", productPrice);
    localStorage.setItem("image", productImage);
    
    // 4. Redirect to the cart page
    window.location.href = "cart.html";
}