let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalSlides = testimonials.length;
const testimonialsToShow = 3; // Number of testimonials to show at a time

function updateTestimonials() {
    testimonials.forEach((testimonial, index) => {
        // Show testimonials in the current slide range
        testimonial.style.display = (index >= currentSlide && index < currentSlide + testimonialsToShow) ? 'block' : 'none';
    });
}

// Next button functionality
document.querySelector('.next-btn').addEventListener('click', () => {
    currentSlide = (currentSlide + testimonialsToShow) % totalSlides; // Loop back to start
    updateTestimonials();
});

// Previous button functionality
document.querySelector('.prev-btn').addEventListener('click', () => {
    currentSlide = (currentSlide - testimonialsToShow + totalSlides) % totalSlides; // Loop back to end
    updateTestimonials();
});

// Initial display
updateTestimonials();


// Duplicate slides for continuous loop
const track = document.querySelector('.slider-track');
const slides = Array.from(track.children);
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
});

document.querySelectorAll('.slide img').forEach((img) => {
    img.addEventListener('click', function () {
        const modal = document.getElementById('gameModal');
        const modalImage = document.getElementById('modalImage');
        const modalText = document.getElementById('modalText');
        modalImage.src = this.src;
        modalText.textContent = this.nextElementSibling.textContent;
        modal.style.display = 'flex';
    });
});

// Close modal when clicking close button
document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('gameModal').style.display = 'none';
});

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

document.querySelectorAll('.carousel-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        currentItem = index;
        showItem(index);
    });
});
