// Main script.js - Works with component system
// This file should load AFTER header.js and footer.js

// Smooth scroll for anchor links
document.addEventListener(‘DOMContentLoaded’, function() {
// Wait a bit for header to be inserted
setTimeout(function() {
document.querySelectorAll(‘a[href^=”#”]’).forEach(anchor => {
anchor.addEventListener(‘click’, function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute(‘href’));
if (target) {
const offset = 80; // Account for fixed navbar
const targetPosition = target.offsetTop - offset;
window.scrollTo({
top: targetPosition,
behavior: ‘smooth’
});
}
});
});
}, 100);
});

// Add animation on scroll
const observerOptions = {
threshold: 0.1,
rootMargin: ‘0px 0px -100px 0px’
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = ‘1’;
entry.target.style.transform = ‘translateY(0)’;
}
});
}, observerOptions);

// Observe elements for animation
document.addEventListener(‘DOMContentLoaded’, () => {
const animateElements = document.querySelectorAll(’.feature-card, .community-card, .rule-card, .guide-card, .changelog-entry, .product-card’);

```
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
```

});

// Navbar background on scroll
window.addEventListener(‘scroll’, () => {
const navbar = document.querySelector(’.navbar’);
if (navbar) {
if (window.scrollY > 50) {
navbar.style.background = ‘rgba(15, 23, 42, 0.98)’;
} else {
navbar.style.background = ‘rgba(15, 23, 42, 0.95)’;
}
}
});