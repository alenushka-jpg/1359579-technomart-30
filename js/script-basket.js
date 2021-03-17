const buyButtons = document.querySelectorAll(".button-buy");
const basketModal = document.querySelector(".modal-basket");
const closeBasket = basketModal.querySelector(".modal-close");

console.log(buyButtons.length);

for (let i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    basketModal.classList.add("modal-show");
  });
}

closeBasket.addEventListener("click", function (evt) {
evt.preventDefault();
basketModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketModal.classList.contains("modal-show")) {
      evt.preventDefault();
      basketModal.classList.remove("modal-show");
    }
  }
});
