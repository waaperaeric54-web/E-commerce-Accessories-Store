// SELECTING THE CART COUNT ELEMENT ON THE HOME PAGE
const homeCartCount = document.querySelector(".home-cart-count");

// const cart = [];
//REPLACING const cart = [] WITH THE NEXT CODE>
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// CALCULATES AND UPDATES THE TOTAL NUMBER OF ITEMS IN THE CART ICON WHEN THE CART CHANGES
function updateCartCount() {
  const totalItems = cart.reduce((sum, product) => {
    return sum + product.quantity;
  }, 0);

  // DISPLAYING THE TOTAL ITEMS HOME CART COUNT
  homeCartCount.textContent = totalItems;
}

const AddToCartButtons = document.querySelectorAll(".add-to-cart-btn");

AddToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.closest(".product-card");

    const productId = productCard.dataset.productId;
    const productName = productCard.querySelector("h4").textContent;
    //REPLACED THE COMMENTED CODE WITH THE NEXT BELOW IT TO COVERT TEXT TO NUMBER>
    // const productPrice = productCard.querySelector("h5").textContent;
    const productPrice = Number(
      productCard.querySelector("h5").textContent.replace("$", ""),
    );
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
    updateCartCount();

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
