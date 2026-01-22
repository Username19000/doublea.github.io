// footer.js - Reusable Footer Component
// Include this script in every page: <script src="footer.js"></script>

document.addEventListener(‘DOMContentLoaded’, function() {
// Define the footer HTML
const footerHTML = `<footer class="footer"> <div class="container"> <div class="footer-content"> <div class="footer-brand"> <img src="AA_Logo.png" alt="Logo" style="height: 32px;"> <span>Double A SMP</span> </div> <p class="footer-text">A community-driven Minecraft survival server</p> </div> </div> </footer>`;

```
// Insert footer at the end of body
document.body.insertAdjacentHTML('beforeend', footerHTML);
```

});