const addItem = document.querySelector(".pop-basket__add");
const removeItem = document.querySelector(".pop-basket__remove");

const voucherInputs = document.querySelectorAll(".basket-price__input");
const voucherButtons = document.querySelectorAll(".basket-price__button");
const basketForms = document.querySelectorAll(".basket-form__billing");

addItem.addEventListener("click", function () {
  addItem.style.display = "none";
  removeItem.style.display = "flex";

  basketForms.forEach((form) => (form.style.display = "grid"));
  voucherInputs.forEach((input) => (input.style.display = "initial"));
  voucherButtons.forEach((button) => (button.style.display = "initial"));
});

removeItem.addEventListener("click", function () {
  addItem.style.display = "flex";
  removeItem.style.display = "none";

  basketForms.forEach((form) => (form.style.display = "none"));
  voucherInputs.forEach((input) => (input.style.display = ""));
  voucherButtons.forEach((button) => (button.style.display = ""));
});
