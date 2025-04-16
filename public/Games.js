// JavaScript to handle iframe visibility
const exploreButton = document.getElementById('explore-button');
const iframeContainer = document.getElementById('iframe-container');
const closeButton = document.getElementById('close-button');
const iframeWrapper = document.querySelector('.iframe-wrapper');

// Show the iframe when the explore button is clicked
exploreButton.addEventListener('click', function() {
    iframeContainer.style.display = 'block'; // Show the iframe on click
});

// Hide the iframe when the close button is clicked
closeButton.addEventListener('click', function() {
    iframeContainer.style.display = 'none'; // Hide the iframe when close is clicked
});

// Hide the iframe when clicking outside of the iframe area
iframeContainer.addEventListener('click', function(event) {
    if (!iframeWrapper.contains(event.target)) { 
        // If the clicked element is outside the iframeWrapper, hide the iframe
        iframeContainer.style.display = 'none';
    }
});



        // Search functionality
        document.getElementById('search-bar').addEventListener('input', function() {
            let query = this.value.toLowerCase();
            let games = document.querySelectorAll('.grid-item');
            games.forEach(game => {
                let title = game.querySelector('.game-title').textContent.toLowerCase();
                if (title.includes(query)) {
                    game.style.display = '';
                } else {
                    game.style.display = 'none';
                }
            });
        });