function comingSoon(event) {
    event.preventDefault(); // stop page jump

    const popup = document.getElementById("popup");
    popup.classList.add("show");

    // Hide after 2 seconds
    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
}


function WaitingPeriod(event) {
    event.preventDefault();

    const pop = document.getElementById("pop");
    pop.classList.add("show");

    setTimeout(() => {
        pop.classList.remove("show");
    }, 2000);

}


function changeColor() {
    document.getElementById("changeColor");
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    button.style.backgroundColor = randomColor;
}



document.querySelector('.search-img').onclick = function () {
    window.location.href = "about.html";
}


document.querySelector('.profile-img').onclick = function () {
    window.location.href = "about.html";
}

function openForm() {
    const modal = document.getElementById('modal');
    const container = document.getElementById('formContainer');

    // Load form.html into the container using fetch
    fetch('form.html')
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;  // form content inject kar do
            modal.style.display = 'flex'; // modal show karo
        })
        .catch(err => console.error('Error loading form:', err));
}

function closeForm() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('formContainer').innerHTML = ''; // cleanup
}

// Optional: click outside modal closes it
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) closeForm();
}

function offer() {
    document.getElementById("offer").textContent = "Buy 1 Get 1 Free";
}

let count = 0;
function increase() {
    count++;
    document.getElementById("count").textContent = count;

}

function decrease() {
    if (count > 0) {
        count--;
        document.getElementById("count").textContent = count;
    }
}

let count2 = 0;
function increase2() {
    count2++;
    document.getElementById("count2").textContent = count2;

}

function decrease2() {
    if (count2 > 0) {
        count2--;
        document.getElementById("count2").textContent = count2;
    }
}


const popup = document.getElementById("popup");
const openbtn = document.getElementById("OpenPopupForm");
const closebtn = document.getElementById("closebtn");

openbtn.addEventListener("click", () => {
    popup.style.display = "block";
});

closebtn.addEventListener("click", () => {
    popup.style.display = "none";
});
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Thanks for clicking!");
    });
});


