var images = document.querySelectorAll(".slide");
var dotsbox = document.querySelector(".dots");
var current = 0;

// Create dots
for (let i = 0; i < images.length; i++) {
    let dot = document.createElement("span");
    dot.className = "dot";
    dotsbox.appendChild(dot);
}

var dots = document.querySelectorAll(".dot");

// Show image function
function showImage() {
    // Hide all images and remove active class
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    // Show current image and activate current dot
    images[current].style.display = "block";
    dots[current].classList.add("active");
}

// Initial image
showImage();

// Next slide function
function nextSlide() {
    current++;

    if (current >= images.length) {
        current = 0;
    }

    showImage();
}

// Auto slide every 3 seconds
var interval = setInterval(nextSlide, 3000);

// Dot click
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
        current = i;
        showImage();

        // Restart timer after clicking
        clearInterval(interval);
        interval = setInterval(nextSlide, 3000);
    });
}