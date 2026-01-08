# Double A SMP Website

A modern, beautiful GitHub Pages website for your Minecraft server.

## 📁 Files Included

- `index.html` - Homepage with server information
- `rules.html` - Server rules page
- `guides.html` - Comprehensive guides for players
- `changelog.html` - Server update history
- `styles.css` - Main stylesheet
- `pages.css` - Additional page styles
- `script.js` - JavaScript for smooth interactions

## 🚀 Setup Instructions

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub Repository:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it whatever you like (e.g., `doubleasmp-website`)

2. **Upload Files:**
   - Upload all the HTML, CSS, and JS files to your repository
   - Make sure `index.html` is in the root directory

3. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Under "Source", select the branch (usually `main`)
   - Click Save

4. **Configure Custom Domain:**
   - Still in Settings → Pages
   - Under "Custom domain", enter: `doubleasmp.net`
   - Click Save

5. **Update DNS (Cloudflare):**
   - Add these A records for `@` (root domain):
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Make sure Proxy Status is "DNS only" (gray cloud)
   - Keep your existing Minecraft SRV record

6. **Wait for DNS:**
   - Can take up to 24 hours
   - Usually works within 30 minutes

### Option 2: Other Hosting

You can also host these files on:
- Netlify (free, easy deploy)
- Vercel (free, easy deploy)
- Any web hosting service

## 🎨 Customization

### Update Server Information

1. **Server IP** (in `index.html`):
   ```html
   <code class="info-value">play.doubleasmp.net</code>
   ```

2. **Discord Link** (in `index.html`):
   ```html
   <a href="#" class="btn btn-discord">Join Discord</a>
   ```
   Replace `#` with your Discord invite URL

3. **Store Link** (in `index.html`):
   ```html
   <a href="#" class="btn btn-store">Visit Store</a>
   ```
   Replace `#` with your webstore URL

### Change Colors

Edit `styles.css` at the top:
```css
:root {
    --primary: #3b82f6;      /* Main blue color */
    --secondary: #10b981;    /* Green accent */
    --accent: #f59e0b;       /* Orange accent */
    /* Change these to your preferred colors */
}
```

### Add Logo

Replace the emoji icons:
```html
<span class="logo-icon">⚡</span>
```

With an image:
```html
<img src="logo.png" alt="Logo" style="height: 32px;">
```

## 📝 Content Updates

### Add New Rules
Edit `rules.html` and add a new rule card:
```html
<div class="rule-card">
    <div class="rule-number">08</div>
    <h2>Your Rule Title</h2>
    <p>Your rule description</p>
</div>
```

### Add New Guides
Edit `guides.html` and add a new guide card following the existing format.

### Add Changelog Entries
Edit `changelog.html` and add new entries at the top following the existing format.

## 🎯 Features

- ✨ Modern, clean design
- 📱 Fully responsive (mobile-friendly)
- ⚡ Smooth animations and transitions
- 🎨 Beautiful gradient effects
- 🔍 Easy to navigate
- 📖 Comprehensive documentation
- 🎭 Professional appearance

## 🛠️ Technical Details

- Pure HTML/CSS/JavaScript (no frameworks needed)
- Uses Google Fonts: Outfit & Space Mono
- Optimized for performance
- SEO-friendly structure
- Accessible design

## 📞 Support

Need help? Join your Discord server or reach out to your web admin!

## 📄 License

Feel free to modify and use this template for your server!

---

**Built for Double A SMP** ⚡
