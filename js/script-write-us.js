const buttonWriteUs = document.querySelector(".button-write-us");
const modalWriteUs = document.querySelector(".modal-write-us");
const closeWriteUs = modalWriteUs.querySelector(".modal-close");
const form = modalWriteUs.querySelector("form");
const name = modalWriteUs.querySelector("[name=name]");
const email = modalWriteUs.querySelector("[name=email]");
const text = modalWriteUs.querySelector(".modal-text-textarea");
const storage = localStorage.getItem("name");


buttonWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal-show");
  name.focus();
  if (storage) {
    login.value = storage;
  }
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя и e-mail");
  } else {
    localStorage.setItem("name", name.value);
  }
});

closeWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27){
    if(modalWriteUs.classList.contains("modal-show")) {
      evt.preventDefault();
      modalWriteUs.classList.remove("modal-show");
    }
  }
})
