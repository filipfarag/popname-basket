const addItem = document.querySelector(".pop-basket__add");
const removeItem = document.querySelector(".pop-basket__remove");

const voucherInputs = document.querySelectorAll(".basket-price__input");
const voucherButtons = document.querySelectorAll(".basket-price__button");
const basketForms = document.querySelectorAll(".basket-form__billing");

if (addItem && removeItem) {
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
}

document.addEventListener("DOMContentLoaded", function () {
  const burgerWrapper = document.querySelector(".pop-header__burger-wrapper");

  if (burgerWrapper) {
    burgerWrapper.addEventListener("click", function () {
      this.classList.toggle("pop-header__burger-wrapper--open");
    });
  }
});

document
  .querySelectorAll(".balikovna-iframe-trigger")
  .forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      const iframe = document.getElementById("balikovna-iframe");
      iframe.classList.add("balikovna-iframe--visible");
      document.body.style.overflow = "hidden";
    });
  });

document
  .querySelector(".balikovna-iframe__button")
  .addEventListener("click", function () {
    const iframe = document.getElementById("balikovna-iframe");
    iframe.classList.remove("balikovna-iframe--visible");
    document.body.style.overflow = "auto";
  });
