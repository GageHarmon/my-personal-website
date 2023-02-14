let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');
let slideIndex = 1;


showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


menuToggle.onclick = function () {
    navigation.classList.toggle('open');
}

let list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink))


// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);