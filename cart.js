// ========================================
// SHOPPING CART FUNCTIONALITY
// ========================================

let cart = {
  items: [],
  basketIdent: null
};

// Load cart from sessionStorage
function loadCart() {
  const saved = sessionStorage.getItem('shopping_cart');
  if (saved) {
    try {
      cart = JSON.parse(saved);
    } catch (e) {
      console.error('Error loading cart:', e);
      cart = { items: [], basketIdent: null };
    }
  }
  updateCartUI();
}

// Save cart to sessionStorage
function saveCart() {
  sessionStorage.setItem('shopping_cart', JSON.stringify(cart));
  updateCartUI();
}

// Add item to cart
function addToCart(packageId, name, price, image, icon, isSubscription = false) {
  // Check if item already in cart
  const existing = cart.items.find(item => item.packageId === packageId);
  if (existing) {
    customAlert('This item is already in your cart!', 'Already Added', '🛒');
    return;
  }
  
  cart.items.push({
    packageId,
    name,
    price,
    image,
    icon,
    isSubscription
  });
  
  saveCart();
  
  // Show feedback
  const cartBtn = document.getElementById('cart-button');
  if (cartBtn) {
    cartBtn.style.animation = 'none';
    setTimeout(() => {
      cartBtn.style.animation = 'bounce 0.5s ease';
    }, 10);
  }
}

// Remove item from cart
function removeFromCart(packageId) {
  cart.items = cart.items.filter(item => item.packageId !== packageId);
  saveCart();
}

// Clear cart
function clearCart() {
  cart = { items: [], basketIdent: null };
  sessionStorage.removeItem('shopping_cart');
  updateCartUI();
}

// Update cart UI
function updateCartUI() {
  const countBadge = document.getElementById('cart-count');
  const totalPrice = document.getElementById('cart-total-price');
  const container = document.getElementById('cart-items-container');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  if (countBadge) {
    countBadge.textContent = cart.items.length;
    countBadge.style.display = cart.items.length > 0 ? 'inline-flex' : 'none';
  }
  
  const total = cart.items.reduce((sum, item) => sum + item.price, 0);
  if (totalPrice) {
    totalPrice.textContent = `$${total.toFixed(2)}`;
  }
  
  if (checkoutBtn) {
    checkoutBtn.disabled = cart.items.length === 0;
  }
  
  if (container) {
    if (cart.items.length === 0) {
      container.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <p>Your cart is empty</p>
          <p style="font-size: 0.875rem; margin-top: 0.5rem;">Add items from the store</p>
        </div>
      `;
    } else {
      container.innerHTML = cart.items.map(item => `
        <div class="cart-item">
          ${item.image ? 
            `<img src="${item.image}" alt="${item.name}" class="cart-item-image">` :
            `<div class="cart-item-icon">${item.icon}</div>`
          }
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.packageId})" title="Remove">
            ✕
          </button>
        </div>
      `).join('');
    }
  }
}

// Open cart
function openCart() {
  document.getElementById('cart-sidebar').classList.add('active');
  document.getElementById('cart-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close cart
function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('active');
  document.getElementById('cart-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Proceed to checkout
async function proceedToCheckout() {
  if (cart.items.length === 0) {
    await customAlert('Your cart is empty!', 'Empty Cart', '🛒');
    return;
  }
  
  // Check if user is signed in
  if (!currentUsername) {
    closeCart();
    await customAlert('Please sign in with your Minecraft username before checking out!', 'Sign In Required', '⚠️');
    // Open the sign-in modal
    signIn();
    return;
  }
  
  try {
    // Show loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10001;
    `;
    loadingOverlay.innerHTML = `
      <div style="text-align: center; color: var(--text);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">⏳</div>
        <p style="font-size: 1.25rem;">Preparing checkout...</p>
      </div>
    `;
    document.body.appendChild(loadingOverlay);
    
    // Create basket
    const basket = await createBasket(currentUsername);
    console.log('✓ Basket created:', basket.ident);
    
    // Add all items to basket
    for (const item of cart.items) {
      await addPackageToBasket(basket.ident, item.packageId);
      console.log(`✓ Added ${item.name} to basket`);
    }
    
    // Detect if mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    // Remove loading overlay
    document.body.removeChild(loadingOverlay);
    closeCart();
    
    // Launch checkout
    if (typeof Tebex !== 'undefined' && typeof Tebex.checkout !== 'undefined') {
      if (isMobile) {
        // On mobile, redirect directly to checkout page
        console.log('Mobile detected, using redirect mode');
        
        // Store purchase info for when user returns
        sessionStorage.setItem('pendingPurchase', JSON.stringify({
          packageName: 'Cart Items',
          price: cart.items.reduce((sum, item) => sum + item.price, 0),
          username: currentUsername,
          isSubscription: false,
          isGift: false,
          timestamp: Date.now()
        }));
        
        // Clear cart before redirect
        clearCart();
        
        const checkoutUrl = `https://checkout.tebex.io/checkout/${basket.ident}`;
        window.location.href = checkoutUrl;
      } else {
        // On desktop, use modal
        console.log('Initializing Tebex checkout modal...');
        
        // Track whether payment was completed
        let paymentCompleted = false;
        
        // Initialize Tebex with proper event handlers
        Tebex.checkout.init({
          ident: basket.ident,
          theme: 'dark',
          colors: [
            { name: "primary", color: "#01a1a4" },
            { name: "secondary", color: "#f2b841" }
          ]
        });
        
        // Launch checkout
        Tebex.checkout.launch();
        
        // Listen for checkout complete event
        window.addEventListener('message', function checkoutListener(event) {
          if (event.data && event.data.type === 'tebex:checkout:complete') {
            paymentCompleted = true;
            window.removeEventListener('message', checkoutListener);
            
            // Clear cart on successful purchase
            clearCart();
            
            // Show success modal
            showSuccessModal(
              'Cart Items',
              cart.items.reduce((sum, item) => sum + item.price, 0),
              currentUsername,
              false,
              false
            );
          }
        });
      }
    } else {
      throw new Error('Tebex checkout is not available');
    }
  } catch (error) {
    console.error('Checkout error:', error);
    await customAlert(
      'Failed to initialize checkout. Please try again or contact support.',
      'Checkout Error',
      '❌'
    );
  }
}

// Add CSS animation for cart button bounce
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;
document.head.appendChild(style);

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', loadCart);
