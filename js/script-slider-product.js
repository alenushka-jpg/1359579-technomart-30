const slides = document.querySelectorAll(".slider-product-item");
const dots = document.querySelectorAll(".circle-slide");

const prev = document.querySelector(".last-left");
const next = document.querySelector(".next-right");

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    currentDiv(i+1);
  })
}

prev.addEventListener("click", function(evt) {
  evt.preventDefault();
  plusDivs(-1);
});

next.addEventListener("click", function(evt) {
  evt.preventDefault();
  plusDivs(1);
});

function showDivs(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("current-slide");
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("current");
  }

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  slides[slideIndex-1].classList.add("current-slide");
  dots[slideIndex-1].classList.add("current");
}
