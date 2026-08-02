const image=document.querySelector(".left-slider-img");
const description=document.querySelector(".description");


const imagess=[
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1016/400/300",
    "https://picsum.photos/id/1018/400/300"
];

const descriptions=[
     "Beautiful mountains with fresh air.",
    "A peaceful lake surrounded by trees.",
    "A wonderful road through nature."
];

let currentIndex=0;
setInterval(()=>{
    currentIndex++;
    if(currentIndex >= imagess.length){
        currentIndex=0;
    }
    image.src=imagess[currentIndex];
    description.textContent=descriptions[currentIndex];
},3000
);  