// Initialize cart from localStorage or set to an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.getElementById('cart-items');
const totalItemsLabel = document.getElementById('totalnum');
const notificationContainer = document.createElement('div');
notificationContainer.classList.add('notification-container');
document.body.appendChild(notificationContainer);

// Function to add item to cart and optionally redirect to cart page
function addToCart(name, price, image, redirect = false) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }
  updateCart();
  showNotification(`Added ${name} to cart`);
  
  // Redirect to cart page if needed
  if (redirect) {
    window.location.href = 'cart.html'; // Change 'cart.html' to your cart page's URL
  }
}

// Function to update cart and localStorage
function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCartItems();
  calculateTotal();
}

// Function to render cart items in the cart page
function renderCartItems() {
  cartItemsContainer.innerHTML = '';
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
  totalItemsLabel.innerText = `${cart.length} items`;
}

// Function to change quantity of items in the cart
function changeQuantity(name, action) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.quantity = action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
    updateCart();
    showNotification(action === 'increase' ? 'Quantity increased' : 'Quantity decreased');
  }
}

// Function to remove item from cart
function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  updateCart();
  showNotification('Item removed from cart');
}

// Function to calculate and display total price
function calculateTotal() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  document.querySelector('.totals-row .total-price').innerText = `₹${total.toFixed(2)}`;
}

// Function to show notification
function showNotification(message, isError = false) {
  const notification = document.createElement('div');
  notification.classList.add('notification', isError ? 'error' : 'success');
  notification.innerText = message;
  notificationContainer.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 500);
  }, 3000);
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
  renderCartItems();
  calculateTotal();
});
