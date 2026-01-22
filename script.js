// Mobile Menu Toggle Functionality
function initMobileMenu() {
// Create mobile menu toggle button
const navContainer = document.querySelector(’.nav-container’);
const navLinks = document.querySelector(’.nav-links’);

```
if (!navContainer || !navLinks) return;

// Check if button already exists
if (document.querySelector('.mobile-menu-toggle')) return;

// Create toggle button
const toggleBtn = document.createElement('button');
toggleBtn.className = 'mobile-menu-toggle';
toggleBtn.setAttribute('aria-label', 'Toggle menu');
toggleBtn.innerHTML = '☰';

// Create overlay for mobile menu
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

// Add toggle button to nav
navContainer.appendChild(toggleBtn);

// Toggle menu function
function toggleMenu() {
    const isOpen = navLinks.classList.contains('active');
    
    if (isOpen) {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        toggleBtn.innerHTML = '☰';
        document.body.style.overflow = '';
    } else {
        navLinks.classList.add('active');
        overlay.classList.add('active');
        toggleBtn.innerHTML = '✕';
        document.body.style.overflow = 'hidden';
    }
}

// Event listeners
toggleBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close menu when clicking a link
const navLinkItems = navLinks.querySelectorAll('a');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Close menu on window resize if open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        toggleBtn.innerHTML = '☰';
        document.body.style.overflow = '';
    }
});
```

}

// Smooth scroll for anchor links
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
// Initialize mobile menu
initMobileMenu();

```
// Animate elements
const animateElements = document.querySelectorAll('.feature-card, .community-card, .rule-card, .guide-card, .changelog-entry, .product-card');

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
if (window.scrollY > 50) {
navbar.style.background = ‘rgba(15, 23, 42, 0.98)’;
} else {
navbar.style.background = ‘rgba(15, 23, 42, 0.95)’;
}
});