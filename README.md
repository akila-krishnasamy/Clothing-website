# VALENCE STUDIOS — Editorial Fashion E-Commerce Homepage

A high-end, luxury fashion & streetwear e-commerce homepage crafted with **HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5**.

## 🌟 Key Features

1. **Editorial Aesthetic & Typography**:
   - Palette: Warm luxury off-white (`#FAF9F5`), stark black typography (`#111111`), warm sand accents.
   - Google Fonts: `Cormorant Garamond` (high-fashion serif) & `Plus Jakarta Sans` (modern sans-serif).
2. **Cinematic Full-Screen Hero**:
   - `100vh` height with film grain overlay and interactive mouse parallax effect.
3. **Interactive Navigation & Header**:
   - Transparent header that transitions into a frosted glass backdrop blur on scroll.
   - Bootstrap Offcanvas menu for mobile views.
4. **Infinite Announcement Marquee**:
   - Seamless horizontal ticker featuring key brand messaging.
5. **Product Collections & Interactive Hover Effects**:
   - 4-column responsive grid (`col-lg-3`, `col-md-6`, `col-6`).
   - Image swap on hover, wishlist toggle, quick add, and category filter pills.
6. **Dynamic Product Quick View Modal**:
   - Bootstrap Modal rendered via JavaScript with product details, size selector, quantity control, and Add to Bag/Buy Now buttons.
7. **Interactive Offcanvas Shopping Cart**:
   - Cart badge counter.
   - Dynamic cart items listing with quantity adjustment and removal.
   - Free shipping progress threshold calculator ($150 threshold).
   - Saved state in `localStorage`.
8. **Desktop Custom Cursor & Magnetic Buttons**:
   - Smooth custom ring & dot cursor with dynamic contextual state changes ('VIEW', 'EXPLORE').
   - Subtle magnetic pull on primary CTA buttons.
9. **Scroll-Based Animations**:
   - Lightweight `IntersectionObserver` scroll reveals (`.reveal`, `.fade-up`, `.fade-right`, `.scale-in`).
10. **Horizontal Drag & Touch Collection Gallery**:
    - Mouse-drag for desktop & touch-swipe for mobile devices.

## 📁 File Structure

```text
fashion-website/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── hero.jpg
│   ├── editorial-campaign.jpg
│   ├── brand-story.jpg
│   ├── collection-1.jpg
│   ├── collection-2.jpg
│   ├── collection-3.jpg
│   ├── collection-4.jpg
│   ├── product-1.jpg / product-1-alt.jpg
│   ├── product-2.jpg / product-2-alt.jpg
│   └── ...
│
└── README.md
```

## 🚀 How to Run Locally

1. Open `index.html` directly in any modern web browser or start a local HTTP server:
   ```bash
   npx serve .
   ```
2. View the website at `http://localhost:3000`.
