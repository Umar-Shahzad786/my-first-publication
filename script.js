const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlideIndex = 0; // Track the current slide index
const slideInterval = 5000; // Interval time in milliseconds

// Function to show the slide based on the index
function showSlide(index) {
  // Hide all slides and remove active class from dots
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });

  // Show the selected slide and mark the corresponding dot as active
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

// Function to move to the next slide
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Loop back to the first slide
  showSlide(currentSlideIndex);
}

// Add event listeners to dots for navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlideIndex = index; // Update current slide index
    showSlide(currentSlideIndex);
  });
});

// Initialize the first slide as active
showSlide(currentSlideIndex);

// Start automatic slide transitions
setInterval(nextSlide, slideInterval);
