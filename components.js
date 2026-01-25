// Component Loader - Dynamically loads header and footer
(function() {
  // Function to load HTML from template
  async function loadComponentsFile() {
    try {
      const response = await fetch('components.html');
      if (!response.ok) {
        throw new Error('Failed to load components.html');
      }
      const html = await response.text();
      
      // Create a temporary container to parse the HTML
      const temp = document.createElement('div');
      temp.innerHTML = html;
      
      return temp;
    } catch (error) {
      console.error('Error loading components:', error);
      return null;
    }
  }

  // Function to load specific component from templates
  async function loadComponent(elementId, templateId) {
    const container = await loadComponentsFile();
    if (!container) return;
    
    const template = container.querySelector(`#${templateId}`);
    if (!template) {
      console.error(`Template ${templateId} not found`);
      return;
    }
    
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = template.innerHTML;
    }
  }

  // Function to set active nav link based on current page
  function setActiveNavLink() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    // Remove .html extension to get page name
    const pageName = currentPage.replace('.html', '') || 'index';
    
    console.log('Current page:', currentPage, 'Page name:', pageName); // Debug log
    
    // Wait a bit for the nav to load
    setTimeout(() => {
      const navLinks = document.querySelectorAll('.nav-links a');
      navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('data-page');
        
        console.log('Checking link:', linkPage, 'against:', pageName); // Debug log
        
        // Match if data-page equals pageName, or if both are index/empty
        if (linkPage === pageName || 
            (pageName === '' && linkPage === 'index') ||
            (pageName === 'index' && linkPage === 'index')) {
          link.classList.add('active');
          console.log('Activated:', linkPage); // Debug log
        }
      });
    }, 100);
  }

  // Function to initialize mobile menu
  function initMobileMenu() {
    setTimeout(() => {
      const toggle = document.querySelector('.mobile-menu-toggle');
      const navLinks = document.querySelector('.nav-links');
      const body = document.body;

      if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
          toggle.classList.toggle('active');
          navLinks.classList.toggle('active');
          body.classList.toggle('menu-open');
        });

        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
          link.addEventListener('click', () => {
            toggle.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
          });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
          if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
            toggle.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
          }
        });
      }
    }, 100);
  }

  // Load components when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', async () => {
      await loadComponent('header-placeholder', 'header-template');
      
      // Use store-footer for store page, regular footer for others
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const footerTemplate = currentPage === 'store.html' ? 'store-footer-template' : 'footer-template';
      await loadComponent('footer-placeholder', footerTemplate);
      
      setActiveNavLink();
      initMobileMenu();
    });
  } else {
    (async () => {
      await loadComponent('header-placeholder', 'header-template');
      
      // Use store-footer for store page, regular footer for others
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const footerTemplate = currentPage === 'store.html' ? 'store-footer-template' : 'footer-template';
      await loadComponent('footer-placeholder', footerTemplate);
      
      setActiveNavLink();
      initMobileMenu();
    })();
  }
})();