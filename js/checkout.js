console.log("checkout.js is connected");

// GET CART DATA FROM LOCAL STORAGE
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// SELECT THE CHECKOUT ITEM COUNT
const checkoutCount = document.querySelector(".checkout-count");

//SELECT THE ORDER SUMMARY CONTAINER
const orderSummary = document.querySelector(".order-summary");

const checkoutItem = document.querySelector(".checkout-item");

//SELECTING THE SUBTOTAL VALUE
const subtotalValue = document.querySelector(".subtotal-value");

//SELECTING DELIVERY VALUE
const deliveryValue = document.querySelector(".delivery-value");

//CREATING A VARIABLE FOR DELIVERY FEE
const deliveryFee = 10;

//SELECTING THE TOTAL VALUE
const totalValue = document.querySelector(".total-value");

// CALCULATE THE TOTAL NUMBER OF ITEMS
const totalItems = cart.reduce((sum, product) => {
  return sum + product.quantity;
}, 0);

// DISPLAY THE TOTAL NUMBER OF ITEMS
checkoutCount.textContent = `(${totalItems})`;

// CREATING AN ELEMENT FOR EACH PRODUCT && DISPLAY
cart.forEach((product) => {
  const item = document.createElement("div");
  item.classList.add("item");

  item.innerHTML = `
  <span>${product.name} (x${product.quantity})<span>
  <span>$${(product.price * product.quantity).toFixed(2)}<span>`;

  checkoutItem.appendChild(item);
});

//CALCULATING SUBTOTAL
const subtotal = cart.reduce((sum, product) => {
  return sum + product.price * product.quantity;
}, 0);

//DISPLAYING SUBTOTAL VALUE
subtotalValue.textContent = `($${subtotal.toFixed(2)})`;

//DISPLAYING DELIVERY VALUE
deliveryValue.textContent = `($${deliveryFee})`;

//CALCULATE TOTAL
const total = subtotal + deliveryFee;

//DISPLAY TOTAL VALUE
totalValue.textContent = `($${total.toFixed(2)})`;

//CONNECTING CUSTOMERS INFORMATION FORM TO JAVASCRIPT >

// SELETING THE FORM ELEMENT
const customerForm = document.querySelector(".customer-form");
console.log(customerForm);

//SELECTING THE INPUTS
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const phoneNumber = document.querySelector("#phone-number");
const email = document.querySelector("#email");
const deliveryAddress = document.querySelector("#delivery-address");

customerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(firstName.value);
  console.log(lastName.value);
  console.log(phoneNumber.value);
  console.log(email.value);
  console.log(deliveryAddress.value);
});
