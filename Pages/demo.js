let cart =[];

function addToCart(name){

  let item =  cart.find(burger=>burger.name===name);

    if (item){
        item.quatity++;
    }

    else{
        cart.push({
            name:name,
            quatity:1
        });
    }


}

function displayCart(){
    let cartList =document.getElementById("cart");

    cartList.innerHTML="";
    cart.forEach(item=>{
        cartList.innerHTML+=`
        <li> ${item.name}-Quantity ${item.quatity};
        </li>
        `
    })
}

