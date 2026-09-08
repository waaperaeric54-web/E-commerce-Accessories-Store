const cart = JSON.parse(localStorage.getItem("cart")) || [];

//CREATING THE TOTAL-SUM VARIABLE WERE THE TOTAL VALUE WILL BE STORED
const totalSum = document.querySelector(".total-sum");

// SELECTING THE CART COUNT ELEMENT ON THE CART PAGE
const cartCount = document.querySelector(".cart-count");

function updateCart() {
  const totalItems = cart.reduce((sum, product) => {
    return sum + product.quantity;
  }, 0);

  cartCount.textContent = `(${totalItems})`;

  const total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  totalSum.textContent = `$${total.toFixed(2)}`;
}

updateCart();

/* THE WHOLE BRACKET NEXT IS REPLACED BY THE CODE AT THE TOP TO CREATE A REUSEABLE FUNCTION [

// CALCULATING THE TOTAL QUANTITY OF ITEMS IN THE CART
const totalItems = cart.reduce((sum, product) => {
  return sum + product.quantity;
}, 0);

// DISPLAYING THE TOTAL ITEMS INSIDE THE CART COUNT USING A TEMPLATE LITERAL
cartCount.textContent = `(${totalItems})`;

const total = cart.reduce((sum, product) => {
  // HOW TO CALCULATE
  return sum + product.price * product.quantity;
}, 0); // (0) WERE TO START FROM
console.log(total);


totalSum.textContent = `$${total.toFixed(2)}`;
// total.toFixed(2) fomart the number to always show two decimal place] */

const cartProductContainer = document.querySelector(".cart-product-container");

if (cart.length === 0) {
  const emptyMessage = document.createElement("p");
  emptyMessage.classList.add("empty-cart-message");
  emptyMessage.textContent = "Your cart is empty.";
  cartProductContainer.appendChild(emptyMessage);

  const continueShopping = document.createElement("a");
  continueShopping.href = "e-commerce.html";
  continueShopping.textContent = "Continue Shopping";
  cartProductContainer.appendChild(continueShopping);
  continueShopping.classList.add("continue-shopping");
}

console.log(cart);

cart.forEach((product) => {
  const cartProduct = document.createElement("div");
  cartProduct.classList.add("cart-product");
  cartProduct.dataset.productId = product.id;

  cartProduct.innerHTML = `
    <div class="cart-product-img">
      <img src="${product.image}" alt="${product.name}" />
    </div>

    <div class="cart-product_text">
      <div class="cart-product_name">
        <h5>${product.name}</h5>
        <span>Star</span>
        <span>(5)</span>
      </div>

      <div class="cart-price_quantity">
        <span>$${product.price}</span>

        <div class="quantity-control">
          <button class="minus-btn">−</button>
          <span class="quantity">${product.quantity}</span>
          <button class="plus-btn">+</button>
        </div>
      </div>
    </div>
  `;

  const plusButton = cartProduct.querySelector(".plus-btn");
  const minusButton = cartProduct.querySelector(".minus-btn");
  const quantityDisplay = cartProduct.querySelector(".quantity");

  plusButton.addEventListener("click", () => {
    product.quantity++;

    quantityDisplay.textContent = product.quantity;

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
  });

  // CALLINGG A FUNCTION

  minusButton.addEventListener("click", () => {
    if (product.quantity > 1) {
      product.quantity--;

      quantityDisplay.textContent = product.quantity;
    } else {
      const productIndex = cart.findIndex(
        (cartProduct) => cartProduct.id === product.id,
      );

      cart.splice(productIndex, 1);

      cartProduct.remove();
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
  });

  cartProductContainer.appendChild(cartProduct);
  console.log(cartProduct);
});
