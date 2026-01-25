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
  // Check if it's a crate key (contains "key" or "crate" in name)
  const isCrateKey = name.toLowerCase().includes('key') || name.toLowerCase().includes('crate');

  // Check if item already in cart
  const existing = cart.items.find(item => item.packageId === packageId);

  if (existing) {
    if (isCrateKey) {
      // For crate keys, increase quantity
      existing.quantity = (existing.quantity || 1) + 1;
      saveCart();
      customAlert(`Added another ${name} to cart! (${existing.quantity}x)`, 'Quantity Updated', '🛒');
      return;
    } else {
      // For regular items (ranks), don't allow duplicates
      customAlert('This item is already in your cart!', 'Already Added', '🛒');
      return;
    }
  }

  cart.items.push({
    packageId,
    name,
    price,
    image,
    icon,
    isSubscription,
    quantity: 1
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

// Increase quantity
function increaseQuantity(packageId) {
  const item = cart.items.find(item => item.packageId === packageId);
  if (item) {
    item.quantity = (item.quantity || 1) + 1;
    saveCart();
  }
}

// Decrease quantity
function decreaseQuantity(packageId) {
  const item = cart.items.find(item => item.packageId === packageId);
  if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      saveCart();
    } else {
      // If quantity is 1, remove the item
      removeFromCart(packageId);
    }
  }
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

  // Calculate total item count (including quantities)
  const totalItems = cart.items.reduce((sum, item) => sum + (item.quantity || 1), 0);

  if (countBadge) {
    countBadge.textContent = totalItems;
    countBadge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
  }

  // Calculate total price (including quantities)
  const total = cart.items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
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
      container.innerHTML = cart.items.map(item => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        const isCrateKey = item.name.toLowerCase().includes('key') || item.name.toLowerCase().includes('crate');

        return `
        <div class="cart-item">
          ${item.image ?
            `<img src="${item.image}" alt="${item.name}" class="cart-item-image">` :
            `<div class="cart-item-icon">${item.icon}</div>`
          }
          <div class="cart-item-details">
            <div class="cart-item-name">
              ${item.name}
              ${quantity > 1 ? `<span style="color: var(--primary); font-weight: 700; margin-left: 0.5rem;">×${quantity}</span>` : ''}
            </div>
            <div class="cart-item-price">
              $${itemTotal.toFixed(2)}
              ${quantity > 1 ? `<span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.5rem;">($${item.price.toFixed(2)} each)</span>` : ''}
            </div>
            ${isCrateKey && quantity > 1 ? `
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
                <button class="quantity-btn" onclick="decreaseQuantity(${item.packageId})" style="width: 24px; height: 24px; background: var(--border); border: none; border-radius: 4px; color: var(--text); cursor: pointer; display: flex; align-items: center; justify-content: center;">−</button>
                <button class="quantity-btn" onclick="increaseQuantity(${item.packageId})" style="width: 24px; height: 24px; background: var(--border); border: none; border-radius: 4px; color: var(--text); cursor: pointer; display: flex; align-items: center; justify-content: center;">+</button>
              </div>
            ` : ''}
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.packageId})" title="Remove">
            ✕
          </button>
        </div>
      `;
      }).join('');
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
// ========================================
// CHECKOUT SIGN-IN MODAL
// ========================================

async function showCheckoutSignInModal() {
  return new Promise((resolve) => {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10002;
      animation: fadeIn 0.3s ease;
    `;

    modal.innerHTML = `
      <div class="modal-content" style="max-width: 400px; animation: slideUp 0.3s ease;">
        <div class="modal-header" style="background: linear-gradient(135deg, var(--primary), var(--secondary)); padding: 1.5rem; text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔐</div>
          <h2 style="margin: 0; color: white;">Sign In Required</h2>
        </div>
        <div class="modal-body" style="padding: 2rem;">
          <p style="text-align: center; margin-bottom: 1.5rem; color: var(--text);">
            Please enter your Minecraft username to continue with checkout.
          </p>
          <input 
            type="text" 
            id="checkout-username-input" 
            placeholder="Your Minecraft Username"
            style="
              width: 100%;
              padding: 0.75rem;
              border: 1px solid var(--border);
              border-radius: 8px;
              background: var(--card-bg);
              color: var(--text);
              font-size: 1rem;
              margin-bottom: 1.5rem;
            "
          />
          <div style="display: flex; gap: 0.75rem;">
            <button 
              onclick="this.closest('.modal-overlay').remove()" 
              style="
                flex: 1;
                padding: 0.75rem 1.5rem;
                background: var(--border);
                color: var(--text);
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 1rem;
                transition: all 0.2s;
              "
              onmouseover="this.style.background='#3a4a5a'"
              onmouseout="this.style.background='var(--border)'"
            >
              Cancel
            </button>
            <button 
              id="checkout-signin-confirm"
              style="
                flex: 1;
                padding: 0.75rem 1.5rem;
                background: linear-gradient(135deg, var(--primary), var(--secondary));
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 1rem;
                font-weight: 600;
                transition: all 0.2s;
              "
              onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(1, 161, 164, 0.4)'"
              onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const input = document.getElementById('checkout-username-input');
    const confirmBtn = document.getElementById('checkout-signin-confirm');

    // Focus input
    setTimeout(() => input.focus(), 100);

    // Handle confirm
    confirmBtn.onclick = async () => {
      const username = input.value.trim();
      if (!username) {
        input.style.borderColor = '#ef4444';
        input.placeholder = 'Username required!';
        return;
      }

      // Save username
      currentUsername = username;
      localStorage.setItem('minecraft_username', username);

      // Update display (function is defined in store.html)
      if (typeof renderUsernameDisplay === 'function') {
        renderUsernameDisplay();
      }

      // Remove modal
      modal.remove();

      // Proceed with checkout
      proceedToCheckout();
      resolve();
    };

    // Handle enter key
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        confirmBtn.click();
      }
    });

    // Handle escape key
    document.addEventListener('keydown', function escapeHandler(e) {
      if (e.key === 'Escape') {
        modal.remove();
        document.removeEventListener('keydown', escapeHandler);
        resolve();
      }
    });
  });
}

// ========================================
// CHECKOUT
// ========================================

async function proceedToCheckout() {
  if (cart.items.length === 0) {
    await customAlert('Your cart is empty!', 'Empty Cart', '🛒');
    return;
  }

  // Check if user is signed in
  if (!currentUsername) {
    // Show sign-in modal without closing cart
    await showCheckoutSignInModal();
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
      try {
        const quantity = item.quantity || 1;
        // Add package multiple times based on quantity
        for (let i = 0; i < quantity; i++) {
          await addPackageToBasket(basket.ident, item.packageId);
        }
        console.log(`✓ Added ${item.name} to basket${quantity > 1 ? ` (×${quantity})` : ''}`);
      } catch (itemError) {
        // Remove loading overlay on error
        if (document.body.contains(loadingOverlay)) {
          document.body.removeChild(loadingOverlay);
        }

        // Check if it's an "already purchased" error
        const errorMsg = itemError.message.toLowerCase();
        if (errorMsg.includes('purchased too many times') || errorMsg.includes('already purchased')) {
          await customAlert(
            `"${item.name}" has already been purchased the maximum number of times.\n\nPlease remove it from your cart and try again.`,
            'Item Already Purchased',
            '⚠️'
          );
        } else {
          await customAlert(
            `Failed to add "${item.name}" to checkout.\n\nError: ${itemError.message}`,
            'Checkout Error',
            '❌'
          );
        }
        throw itemError; // Re-throw to trigger outer catch
      }
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

    // Make sure loading overlay is removed
    const existingOverlay = document.querySelector('[style*="Preparing checkout"]')?.parentElement;
    if (existingOverlay) {
      existingOverlay.remove();
    }

    // Only show generic error if we haven't already shown a specific error
    if (!error.message.includes('purchased too many times') && !error.message.includes('already purchased')) {
      await customAlert(
        'Failed to initialize checkout. Please try again or contact support.',
        'Checkout Error',
        '❌'
      );
    }
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