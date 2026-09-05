const cart = JSON.parse(localStorage.getItem("cart")) || [];

// SELECTING THE CART COUNT ELEMENT ON THE CART PAGE
const cartCount = document.querySelector(".cart-count");

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

//CREATING THE TOTAL-SUM VARIABLE WERE THE TOTAL VALUE WILL BE STORED
const totalSum = document.querySelector(".total-sum");
totalSum.textContent = `$${total.toFixed(2)}`;
// total.toFixed(2) fomart the number to always show two decimal place

const cartProductContainer = document.querySelector(".cart-product-container");

console.log(cart);

cart.forEach((product) => {
  const cartProduct = document.createElement("div");
  cartProduct.classList.add("cart-roduct");
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
        <span>${product.price}</span>

        <div class="quantity-control">
          <button class="minus-btn">−</button>
          <span>${product.quantity}</span>
          <button class="plus-btn">+</button>
        </div>
      </div>
    </div>
  `;

  const plusButton = cartProduct.querySelector(".plus-btn");
  const minusButton = cartProduct.querySelector(".minus-btn");
  plusButton.addEventListener("click", () => {
    product.quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  });

  // CALLINGG A FUNCTION

  minusButton.addEventListener("click", () => {
    if (product.quantity > 1) {
      product.quantity--;

      localStorage.setItem("cart", JSON.stringify(cart));

      location.reload();
    }
  });

  cartProductContainer.appendChild(cartProduct);
  console.log(cartProduct);
});
