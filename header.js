// header.js - Reusable Header Component
// Include this script in every page: <script src="header.js"></script>

document.addEventListener(‘DOMContentLoaded’, function() {
// Get the current page filename
const currentPage = window.location.pathname.split(’/’).pop() || ‘index.html’;

```
// Define the header HTML
const headerHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">
                <img src="AA_Logo.png" alt="Logo" style="height: 32px;">
                <span class="logo-text">Double A SMP</span>
            </a>
            <ul class="nav-links">
                <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
                <li><a href="rules.html" class="${currentPage === 'rules.html' ? 'active' : ''}">Rules</a></li>
                <li><a href="guides.html" class="${currentPage === 'guides.html' ? 'active' : ''}">Guides</a></li>
                <li><a href="changelog.html" class="${currentPage === 'changelog.html' ? 'active' : ''}">Changelog</a></li>
                <li><a href="store.html" class="${currentPage === 'store.html' ? 'active' : ''}">Store</a></li>
            </ul>
        </div>
    </nav>
    <div class="nav-overlay"></div>
`;

// Insert header at the beginning of body
document.body.insertAdjacentHTML('afterbegin', headerHTML);

// Initialize mobile menu after header is inserted
initMobileMenu();
```

});

// Mobile Menu Toggle Functionality
function initMobileMenu() {
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

// Get overlay (already created in header HTML)
const overlay = document.querySelector('.nav-overlay');

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