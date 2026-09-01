const AddToCartButtons = document.querySelectorAll(".add-to-cart-btn");
AddToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(" Add to Cart button clicked");
  });
});
