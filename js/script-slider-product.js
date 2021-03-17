const leftArrow = document.querySelector(".last-left");
const rightArrow = document.querySelector(".next-right");
const oneSlide = document.querySelector(".main-slide-1");
const twoSlide = document.querySelector(".main-slide-2");
const oneCircle = document.querySelector(".slider-circle-1");
const twoCircle = document.querySelector(".slider-circle-2");


leftArrow&&leftArrow.addEventListener("click", function() {
  twoSlide.classList.toggle("current-slide"),
  oneCircle.classList.toggle("current"),
  twoCircle.classList.toggle("current")
}),

rightArrow&&rightArrow.addEventListener("click", function() {
  oneSlide.classList.toggle("current-slide"),
  twoSlide.classList.toggle("current-slide"),
  oneCircle.classList.toggle("current"),
  twoCircle.classList.toggle("current")
}),

oneCircle&&oneCircle.addEventListener("click", function() {
  oneCircle.classList.add("current"),
  twoCircle.classList.remove("current"),
  oneSlide.classList.add("current-slide"),
  twoSlide.classList.remove("current-slide")
}),

twoCircle&&twoCircle.addEventListener("click", function() {
  twoCircle.classList.add("current"),
  oneCircle.classList.remove("current"),
  twoSlide.classList.add("current-slide"),
  oneSlide.classList.remove("current-slide")
});



