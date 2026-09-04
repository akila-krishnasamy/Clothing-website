/**
 * VALENCE STUDIOS — Shared Dynamic Components
 * Injects navbar and footer into every page automatically.
 * Edit here once → updates everywhere.
 */

(function () {
  // ─── Detect current page for active nav link ─────────────────────────
  const path = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    return path === page ? 'nav-link-editorial active' : 'nav-link-editorial';
  }

  // ─── Navbar HTML ──────────────────────────────────────────────────────
  const NAVBAR_HTML = `
    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/919876543210?text=Hi%20VALENCE%20Studios%2C%20I%20have%20an%20inquiry" target="_blank" class="whatsapp-float-btn" title="Chat on WhatsApp (+91 98765 43210)">
      <i class="bi bi-whatsapp"></i>
    </a>

    <!-- Top Announcement Bar -->
    <div class="top-announcement-bar text-center">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <span class="d-none d-md-inline-block"><i class="bi bi-telephone me-1"></i> SUPPORT: +91 98765 43210</span>
        <span>FREE EXPRESS SHIPPING ACROSS INDIA ON ORDERS OVER ₹2,999 — <a href="runway.html" class="text-white text-decoration-underline ms-1">RUNWAY SHOP</a></span>
        <div class="dropdown d-none d-sm-inline-block">
          <button class="btn btn-sm text-white dropdown-toggle p-0 border-0" type="button" data-bs-toggle="dropdown">
            <i class="bi bi-globe me-1"></i> <span id="current-lang">EN</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm">
            <li><a class="dropdown-item lang-option" href="#" data-lang="en">English (EN)</a></li>
            <li><a class="dropdown-item lang-option" href="#" data-lang="hi">हिंदी (Hindi)</a></li>
            <li><a class="dropdown-item lang-option" href="#" data-lang="mr">मराठी (Marathi)</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-editorial">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <!-- Mobile Hamburger -->
        <button class="navbar-toggler border-0 p-0 text-dark d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-label="Toggle navigation">
          <i class="bi bi-list fs-2" id="nav-toggle-icon"></i>
        </button>

        <!-- Brand Logo -->
        <a class="navbar-brand me-0" href="index.html">VALENCE</a>

        <!-- Desktop Center Links -->
        <div class="collapse navbar-collapse justify-content-center d-none d-lg-flex" id="navbarNav">
          <ul class="navbar-nav align-items-center gap-2">
            <li class="nav-item">
              <a class="nav-link ${isActive('runway.html')} text-warning fw-bold" href="runway.html">
                <i class="bi bi-stars me-1"></i> RUNWAY SHOP
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${isActive('collection.html')}" href="collection.html">COLLECTION</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-editorial" href="index.html#asymmetric-section">EDITORIAL GALLERY</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-editorial" href="index.html#campaign-section">LOOKBOOK</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${isActive('contact.html')}" href="contact.html">CONTACT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-editorial" href="index.html#story-section">ABOUT</a>
            </li>
          </ul>
        </div>

        <!-- Right Action Icons -->
        <div class="d-flex align-items-center gap-1 gap-md-2">
          <button class="nav-icon-btn" id="nav-search-btn" data-bs-toggle="modal" data-bs-target="#searchModal" aria-label="Search">
            <i class="bi bi-search"></i>
          </button>
          <button class="nav-icon-btn d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#accountModal" aria-label="Account">
            <i class="bi bi-person"></i>
          </button>
          <button class="nav-icon-btn" data-bs-toggle="offcanvas" data-bs-target="#wishlistOffcanvas" aria-label="Wishlist">
            <i class="bi bi-heart"></i>
            <span class="cart-badge" id="nav-wishlist-count">0</span>
          </button>
          <button class="nav-icon-btn position-relative" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-label="Shopping Bag">
            <i class="bi bi-bag"></i>
            <span class="cart-badge" id="nav-cart-count">0</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Offcanvas Menu -->
    <div class="offcanvas offcanvas-start offcanvas-editorial" tabindex="-1" id="mobileMenu">
      <div class="offcanvas-header">
        <span class="font-serif fs-4 tracking-wider fw-bold">VALENCE STUDIOS</span>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body d-flex flex-column justify-content-between p-4">
        <div>
          <a href="runway.html" class="nav-link-mobile text-warning fw-bold">✨ RUNWAY SHOP</a>
          <a href="collection.html" class="nav-link-mobile" data-bs-dismiss="offcanvas">SHOP COLLECTION</a>
          <a href="index.html#asymmetric-section" class="nav-link-mobile" data-bs-dismiss="offcanvas">EDITORIAL GALLERY</a>
          <a href="index.html#campaign-section" class="nav-link-mobile" data-bs-dismiss="offcanvas">CAMPAIGNS</a>
          <a href="contact.html" class="nav-link-mobile" data-bs-dismiss="offcanvas">CONTACT</a>
          <a href="index.html#story-section" class="nav-link-mobile" data-bs-dismiss="offcanvas">THE BRAND STORY</a>
        </div>
        <div class="pt-4 border-top">
          <div class="d-flex justify-content-between mb-3 text-muted small">
            <span>CURRENCY: <strong>INR (₹)</strong></span>
            <span>LOCATION: <strong>INDIA</strong></span>
          </div>
          <div class="d-flex gap-3 text-dark fs-5">
            <a href="https://wa.me/919876543210" target="_blank"><i class="bi bi-whatsapp"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  `;

  // ─── Footer HTML ──────────────────────────────────────────────────────
  const FOOTER_HTML = `
    <!-- Paint Drops SVG Separator -->
    <div class="footer-drops-wrapper">
      <svg class="footer-drops-svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#1A1A1A">
        <path d="M0,120 L1200,120 L1200,30 Q1170,5 1140,30 Q1110,75 1080,30 Q1050,95 1020,30 Q990,5 960,30 Q930,85 900,30 Q870,10 840,30 Q810,105 780,30 Q750,15 720,30 Q690,95 660,30 Q630,10 600,30 Q570,80 540,30 Q510,5 480,30 Q450,90 420,30 Q390,15 360,30 Q330,100 300,30 Q270,10 240,30 Q210,80 180,30 Q150,5 120,30 Q90,90 60,30 Q30,15 0,30 Z"></path>
      </svg>
    </div>

    <!-- Dark Luxury Footer -->
    <footer class="flaunter-dark-footer">
      <div class="container">
        <a href="index.html" class="flaunter-brand-logo">Valence</a>

        <ul class="flaunter-primary-nav">
          <li><a href="index.html#collection-section">NEW DROPS</a></li>
          <li><a href="index.html#asymmetric-section">EDITORIAL GALLERY</a></li>
          <li><a href="runway.html">RUNWAY SHOWCASE</a></li>
        </ul>

        <div class="flaunter-divider"></div>

        <ul class="flaunter-sub-nav">
          <li><a href="runway.html"><i class="bi bi-stars text-warning me-1"></i> RUNWAY SHOP</a></li>
          <li><a href="index.html#collection-section">COLLECTION</a></li>
          <li><a href="index.html#asymmetric-section">EDITORIAL GALLERY</a></li>
          <li><a href="index.html#lookbook-section">LOOKBOOK</a></li>
          <li><a href="index.html#story-section">ABOUT</a></li>
          <li><a href="contact.html">CONTACT</a></li>
        </ul>

        <div class="flaunter-social-row">
          <a href="#" class="flaunter-social-btn" title="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="flaunter-social-btn" title="Twitter"><i class="bi bi-twitter-x"></i></a>
          <a href="#" class="flaunter-social-btn" title="Pinterest"><i class="bi bi-pinterest"></i></a>
          <a href="#" class="flaunter-social-btn" title="LinkedIn"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="flaunter-social-btn" title="Instagram"><i class="bi bi-instagram"></i></a>
        </div>

        <p class="flaunter-copy-text mb-2">
          <a href="#">Terms &amp; Conditions</a> &nbsp;|&nbsp; <a href="#">Privacy Policy</a>
        </p>
        <p class="flaunter-copy-text">
          Copyright &copy; 2026 VALENCE STUDIOS, Ltd. All rights reserved. Site credit.
        </p>
      </div>
    </footer>
  `;

  // ─── Inject navbar ────────────────────────────────────────────────────
  const navbarPlaceholder = document.getElementById('site-navbar');
  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = NAVBAR_HTML;
  }

  // ─── Inject footer ────────────────────────────────────────────────────
  const footerPlaceholder = document.getElementById('site-footer');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = FOOTER_HTML;
  }

  // ─── Sync cart & wishlist badge counts from localStorage ─────────────
  function syncBadges() {
    const cartCount = parseInt(localStorage.getItem('valence_cart_count') || '0');
    const wishlistCount = parseInt(localStorage.getItem('valence_wishlist_count') || '0');
    const cartEl = document.getElementById('nav-cart-count');
    const wishEl = document.getElementById('nav-wishlist-count');
    if (cartEl) cartEl.textContent = cartCount;
    if (wishEl) wishEl.textContent = wishlistCount;
  }
  syncBadges();
  window.addEventListener('storage', syncBadges);

})();
