const buyButtons = document.querySelectorAll(".button-buy");
const basketModal = document.querySelector(".modal-basket");
const closeLogin = basketModal.querySelector(".modal-close");

buyButtons.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketModal.classList.add("modal-show");
  console.log("Клик по кнопке купить");
});

closeLogin.addEventListener("click", function (evt) {
evt.preventDefault();
basketModal.classList.remove("modal-show");
});

const mapButton = document.querySelector(".company-contacts-img");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
