const addVoucher = document.querySelector(".basket-price__add-voucher");
const removeVoucher = document.querySelector(".basket-price__remove-voucher");
const voucherInput = document.querySelector(".basket-price__input");
const voucherButton = document.querySelector(".basket-price__button");

addVoucher.addEventListener("click", function () {
  addVoucher.style.display = "none";
  removeVoucher.style.display = "flex";
  voucherInput.style.display = "initial";
  voucherButton.style.display = "initial";
});

removeVoucher.addEventListener("click", function () {
  addVoucher.style.display = "flex";
  removeVoucher.style.display = "none";
  voucherInput.style.display = "";
  voucherButton.style.display = "";
});
