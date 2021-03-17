const oneServiceButton = document.querySelector(".service-slider-1");
const twoServiceButton = document.querySelector(".service-slider-2");
const threeServiceButton = document.querySelector(".service-slider-2");
const serviceDelivery = document.querySelector(".slide-delivery");
const serviceGuarantee = document.querySelector(".slide-guarantee");
const serviceCredit = document.querySelector(".slide-credit");

oneServiceButton&&oneServiceButton.addEventListener("click", function(evt) {
  evt.preventDefault(),
  oneServiceButton.classList.add("slider-desription-active"),
  serviceDelivery.classList.add("slide-current-service"),
  twoServiceButton.classList.remove("slider-desription-active"),
  threeServiceButton.classList.remove("slider-desription-active"),
  serviceGuarantee.classList.remove("slide-current-service"),
  serviceCredit.classList.remove("slide-current-service")
}),

twoServiceButton&&twoServiceButton.addEventListener("click", function(evt) {
  evt.preventDefault(),
  twoServiceButton.classList.add("slider-desription-active"),
  serviceGuarantee.classList.add("slide-current-service"),
  oneServiceButton.classList.remove("slider-desription-active"),
  threeServiceButton.classList.remove("slider-desription-active"),
  serviceDelivery.classList.remove("slide-current-service"),
  serviceCredit.classList.remove("slide-current-service")
}),

threeServiceButton&&threeServiceButton.addEventListener("click", function() {
  threeServiceButton.classList.add("slider-desription-active"),
  serviceCredit.classList.add("slide-current-service"),
  oneServiceButton.classList.remove("slider-desription-active"),
  twoServiceButton.classList.remove("slider-desription-active"),
  serviceDelivery.classList.remove("slide-current-service"),
  serviceGuarantee.classList.remove("slide-current-service")
});
