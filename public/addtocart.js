// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Get references to DOM elements
const cartItemsContainer = document.getElementById('cart-items');
const totalItemsLabel = document.getElementById('totalnum');

// Function to render cart items in the table
function renderCartItems() {
  // Clear current items
  cartItemsContainer.innerHTML = '';

  // Loop through the cart and add each item to the table
  cart.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" />
          <span>${item.name}</span>
        </div>
      </td>
      <td>₹${item.price}</td>
      <td>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="changeQuantity('${item.name}', 'decrease')">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="changeQuantity('${item.name}', 'increase')">+</button>
        </div>
      </td>
      <td>₹${(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
      </td>
    `;
    cartItemsContainer.appendChild(row);
  });

  // Update the total number of items in the cart
  totalItemsLabel.innerText = `${cart.length} items`;
  calculateTotal(); // Recalculate the total price
}

// Function to change the quantity of an item in the cart
function changeQuantity(name, action) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.quantity = action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
    updateCart();
  }
}

// Function to remove an item from the cart
function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  updateCart();
}

// Function to update the cart and localStorage
function updateCart() {
  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCartItems();
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  document.querySelector('.totals-row .total-price').innerText = `₹${total.toFixed(2)}`;
}

// Initialize the cart page
document.addEventListener('DOMContentLoaded', () => {
  renderCartItems();
});