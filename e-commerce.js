// const cart = [];
//REPLACING const cart = [] WITH THE NEXT CODE>
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const AddToCartButtons = document.querySelectorAll(".add-to-cart-btn");

AddToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.closest(".product-card");

    const productId = productCard.dataset.productId;
    const productName = productCard.querySelector("h4").textContent;
    const productPrice = productCard.querySelector("h5").textContent;
    const productImage = productCard.querySelector("img").src;

    const product = {
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1,
    };

    // cart.push(product);
    // REPLACING CART.PUSH(PRODUCT); WITH THE CODE BELOW>
    const existingProduct = cart.find(
      (cartProduct) => cartProduct.id === productId,
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push(product);
    }
    // COVERTING CART ARRAYs OBJECTS TO STRINGS
    localStorage.setItem("cart", JSON.stringify(cart));

    // TESTING THE CODES LINE BY LINE>
    // console.log(productId);
    // console.log(productName);
    // console.log(productPrice);
    // console.log(productImage);

    // console.log(productCard);
    // console.log(" Add to Cart button clicked");

    // console.log(product);
    console.log(cart);
  });
});
