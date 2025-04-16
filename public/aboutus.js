let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalSlides = testimonials.length;
const testimonialsToShow = 3; // Adjust this to match the number of testimonials visible at a time
const slider = document.querySelector('.testimonials');

// Function to update the position of the slider
function updateTestimonials() {
    const translateXValue = -(currentSlide * (testimonials[0].offsetWidth + 20)); // OffsetWidth + gap
    slider.style.transform = `translateX(${translateXValue}px)`;
}

// Next button functionality
document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentSlide + testimonialsToShow < totalSlides) {
        currentSlide++;
    } else {
        currentSlide = 0; // Loop back to start
    }
    updateTestimonials();
});

// Previous button functionality
document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - testimonialsToShow; // Loop back to last set
    }
    updateTestimonials();
});

// Initial display
updateTestimonials();

let currentItem = 0; // Ensure this is declared only once

function showItem(index) {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function nextItem() {
    currentItem = (currentItem + 1) % document.querySelectorAll('.carousel-item').length;
    showItem(currentItem);
}

setInterval(nextItem, 1300); // Change item every 2 seconds

document.querySelectorAll('.carouse-item1').forEach((item, index) => {
    item.addEventListener('click', () => {
        currentItem = index;
        showItem(index);
    });
});
// Event listener for images to open modal
document.querySelectorAll('.carousel-item img').forEach((img) => {
    img.addEventListener('click', function () {
        const modal = document.getElementById('gameModal');
        const modalImage = document.getElementById('modalImage');
        const modalText = document.getElementById('modalText');
        modalImage.src = this.src;
        modalText.textContent = this.nextElementSibling.textContent;
        modal.style.display = 'flex';
    });
});

// Close modal when clicking the close button
document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('gameModal').style.display = 'none';
});

// Close modal when clicking outside the modal content
document.getElementById('gameModal').addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

// Clone slides to make the loop smooth and continuous
const track = document.querySelector('.slider-track');
const slides = Array.from(track.children);
slides.forEach(slide => {
    const clone = slide.cloneNode(true); // Clone each slide
    track.appendChild(clone); // Append the clone to the end of the slider track
});
// Event listener for images to open modal
document.querySelectorAll('.carousel-item1 img').forEach((img) => {
    img.addEventListener('click', function () {
        const modal = document.getElementById('gameModal');
        const modalImage = document.getElementById('modalImage');
        const modalText = document.getElementById('modalText');
        
        // Set the modal content
        modalImage.src = this.src; // Set clicked image in modal
        modalText.textContent = this.nextElementSibling.textContent; // Set image description
        
        // Display the modal
        modal.style.display = 'flex';
    });
});

// Close modal when clicking the close button
document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('gameModal').style.display = 'none';
});

// Close modal when clicking outside the modal content
document.getElementById('gameModal').addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});