// JavaScript to handle iframe visibility
const exploreButton = document.getElementById('explore-button');
const iframeContainer = document.getElementById('iframe-container');
const closeButton = document.getElementById('close-button');
const iframeWrapper = document.querySelector('.iframe-wrapper');

// Toggle the iframe when the explore button is clicked
exploreButton.addEventListener('click', function () {
    if (iframeContainer.style.display === 'block') {
        iframeContainer.style.display = 'none'; // Hide if already shown
    } else {
        iframeContainer.style.display = 'block'; // Show if hidden
    }
});

// Hide the iframe when the close button is clicked
closeButton.addEventListener('click', function () {
    iframeContainer.style.display = 'none';
});

// Hide the iframe when clicking outside of the iframe area
iframeContainer.addEventListener('click', function (event) {
    if (!iframeWrapper.contains(event.target)) {
        iframeContainer.style.display = 'none';
    }
});
