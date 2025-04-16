let currentIndex = 0; 
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

// Move to the next slide every 5 seconds
setInterval(function() {
  moveSlide(1); // Move to the next slide automatically
}, 40000); // 5 seconds interval

function moveSlide(direction, event) {
  if (event) {
    event.preventDefault();
  }

  currentIndex += direction;

  // Wrap around if we reach the end or beginning
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  updateSlider();
}

function updateSlider() {
  slides[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  
  // Hide arrows at the beginning and end (optional, based on your needs)
  document.querySelector('.left-arrow').style.display = currentIndex === 0 ? 'none' : 'block';
  document.querySelector('.right-arrow').style.display = currentIndex === totalSlides - 1 ? 'none' : 'block';
}
let gameIndex = 0;

function moveGames(direction) {
  const gameContainer = document.getElementById('featured-games');
  const gameItems = gameContainer.querySelectorAll('.game-item');
  const itemWidth = gameItems[0].offsetWidth; // Get the width of each game item
  
  // Calculate the new position based on the direction (-1 for left, 1 for right)
  gameIndex += direction;
  
  // Ensure the gameIndex is within the bounds
  if (gameIndex < 0) {
    gameIndex = 0; // Prevent moving beyond the first game
  } else if (gameIndex > gameItems.length - 1) {
    gameIndex = gameItems.length - 1; // Prevent moving beyond the last game
  }

  // Update the game container scroll position
  gameContainer.scrollTo({
    left: itemWidth * gameIndex,
    behavior: 'smooth'
  });
}
function moveGame(direction) {
  const gameContainer = document.getElementById('free');
  const gameItems = gameContainer.querySelectorAll('.game-item');
  const itemWidth = gameItems[0].offsetWidth; // Get the width of each game item
  
  // Calculate the new position based on the direction (-1 for left, 1 for right)
  gameIndex += direction;
  
  // Ensure the gameIndex is within the bounds
  if (gameIndex < 0) {
    gameIndex = 0; // Prevent moving beyond the first game
  } else if (gameIndex > gameItems.length - 1) {
    gameIndex = gameItems.length - 1; // Prevent moving beyond the last game
  }

  // Update the game container scroll position
  gameContainer.scrollTo({
    left: itemWidth * gameIndex,
    behavior: 'smooth'
  });
}
function move(direction) {
  const gameContainer = document.getElementById('original');
  const gameItems = gameContainer.querySelectorAll('.game-item');
  const itemWidth = gameItems[0].offsetWidth; // Get the width of each game item
  
  // Calculate the new position based on the direction (-1 for left, 1 for right)
  gameIndex += direction;
  
  // Ensure the gameIndex is within the bounds
  if (gameIndex < 0) {
    gameIndex = 0; // Prevent moving beyond the first game
  } else if (gameIndex > gameItems.length - 1) {
    gameIndex = gameItems.length - 1; // Prevent moving beyond the last game
  }

  // Update the game container scroll position
  gameContainer.scrollTo({
    left: itemWidth * gameIndex,
    behavior: 'smooth'
  });
}
function moved(direction) {
  const gameContainer = document.getElementById('moved');
  const gameItems = gameContainer.querySelectorAll('.game-item');
  const itemWidth = gameItems[0].offsetWidth; // Get the width of each game item
  
  // Calculate the new position based on the direction (-1 for left, 1 for right)
  gameIndex += direction;
  
  // Ensure the gameIndex is within the bounds
  if (gameIndex < 0) {
    gameIndex = 0; // Prevent moving beyond the first game
  } else if (gameIndex > gameItems.length - 1) {
    gameIndex = gameItems.length - 1; // Prevent moving beyond the last game
  }

  // Update the game container scroll position
  gameContainer.scrollTo({
    left: itemWidth * gameIndex,
    behavior: 'smooth'
  });
}
function movey(direction) {
  const gameContainer = document.getElementById('rexr');
  const gameItems = gameContainer.querySelectorAll('.game-item');
  const itemWidth = gameItems[0].offsetWidth; // Get the width of each game item
  
  // Calculate the new position based on the direction (-1 for left, 1 for right)
  gameIndex += direction;
  
  // Ensure the gameIndex is within the bounds
  if (gameIndex < 0) {
    gameIndex = 0; // Prevent moving beyond the first game
  } else if (gameIndex > gameItems.length - 1) {
    gameIndex = gameItems.length - 1; // Prevent moving beyond the last game
  }

  // Update the game container scroll position
  gameContainer.scrollTo({
    left: itemWidth * gameIndex,
    behavior: 'smooth'
  });
}
// Initialize an empty cart array
// Initialize cart from localStorage or set to an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart and optionally redirect to cart page
function addToCart(gameName, gamePrice, gameImage, isAddNow = false) {
  // Create a game object
  const game = {
    name: gameName,
    price: gamePrice,
    image: gameImage,
    quantity: 1
  };

  // Check if the game already exists in the cart
  const existingItem = cart.find(item => item.name === game.name);
  if (existingItem) {
    existingItem.quantity += 1; // If it exists, increase the quantity
  } else {
    cart.push(game); // If not, add the game to the cart
  }

  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Optional: Redirect to the cart page if "Buy Now" is clicked
  if (isAddNow) {
    window.location.href = 'addtocart.html'; // Redirect to addtocart page
    alert("Added to cart Succesfully!");
  }
}
function addpremium(){
  window.location.href = 'membership.html';
  
}

function addToWishlist(gameName, gameImage, price) {
  // Retrieve current wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Add the new game item to the wishlist
  const gameItem = {
    name: gameName,
    image: gameImage,
    price: price
  };

  wishlist.push(gameItem);

  // Save the updated wishlist back to localStorage
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  alert("Product has been added to your wishlist!");
  
  // Redirect to the wishlist page
  window.location.href = 'addtowishlist.html';
}