const buttons = document.querySelectorAll('.menu-btn');
    const displayBox = document.getElementById('display-box');

    buttons.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            const clickedbuttons = e.target;

            const itemname=clickedButton.dataset.item;
             const itemPrice = clickedButton.dataset.price;

                displayBox.style.display = 'block';
        displayBox.innerHTML = `Aapne <b>${itemName}</b> select kiya hai. Price: <b>₹${itemPrice}</b>`;
        
        })
    })