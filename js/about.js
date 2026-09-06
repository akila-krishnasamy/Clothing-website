/**
 * VALENCE STUDIOS — About Page & Lookbook Showcase Controller
 * Handles interactive 3D Lookbook stage, outfit product catalog sidebar,
 * wishlist toggle, and cart add operations.
 */

(function () {
  'use strict';

  // ─── Lookbook Dataset (Reflects reference video looks & products) ──────
  const LOOKS = [
    {
      id: 1,
      season: "SPRING SUMMER 2019",
      title: "THE OVERSIZED TRENCH & SNAPSHOT",
      description: "Picture perfect and tailored on the dot. The compact Snapshot Small Camera Bag zips open to reveal just enough room for all your essentials.",
      modelImage: "images/about-look-1.jpg",
      items: [
        { id: "L1-1", title: "OVERSIZED COTTON TRENCH COAT", price: "$995", numPrice: 995, image: "images/about-look-1.jpg", category: "OUTERWEAR" },
        { id: "L1-2", title: "KITTEN HEEL SLINGBACK PUMP", price: "$395", numPrice: 395, image: "images/product-1.jpg", category: "SHOES" },
        { id: "L1-3", title: "LEATHER SNAPSHOT CAMERA BAG", price: "$325", numPrice: 325, image: "images/product-5.jpg", category: "BAGS" }
      ]
    },
    {
      id: 2,
      season: "SPRING SUMMER 2019",
      title: "ASYMMETRIC HIGH-LOW DRESS",
      description: "Fluid sky blue chiffon cut in a sweeping asymmetric high-low silhouette, cinched with a dramatic black satin waist bow ribbon.",
      modelImage: "images/about-look-2.jpg",
      items: [
        { id: "L2-1", title: "ASYMMETRIC SILK BOW DRESS", price: "$1,250", numPrice: 1250, image: "images/about-look-2.jpg", category: "DRESSES" },
        { id: "L2-2", title: "BLACK ANKLE STRAP STILETTO", price: "$425", numPrice: 425, image: "images/product-6.jpg", category: "SHOES" },
        { id: "L2-3", title: "ONYX DROP EARRINGS", price: "$195", numPrice: 195, image: "images/product-7.jpg", category: "ACCESSORIES" }
      ]
    },
    {
      id: 3,
      season: "SPRING SUMMER 2019",
      title: "RUFFLED ROSETTE & DENIM TROUSER",
      description: "Sculptural black architectural rosette shoulder ruffles paired effortlessly with relaxed white high-waisted belted trousers.",
      modelImage: "images/about-look-3.jpg",
      items: [
        { id: "L3-1", title: "RUFFLED ROSETTE TOP", price: "$495", numPrice: 495, image: "images/about-look-3.jpg", category: "TOPS" },
        { id: "L3-2", title: "BELTED DENIM TROUSER", price: "$695", numPrice: 695, image: "images/product-3.jpg", category: "PANTS" },
        { id: "L3-3", title: "GOLD METALLIC HEELS", price: "$450", numPrice: 450, image: "images/product-2.jpg", category: "SHOES" }
      ]
    },
    {
      id: 4,
      season: "SPRING SUMMER 2019",
      title: "TWEED BLAZER & PLEATED SKIRT",
      description: "Structured pastel blue tweed jacket featuring gold crest buttons, paired with a crisp navy pleated silk skirt and silver pumps.",
      modelImage: "images/about-look-4.jpg",
      items: [
        { id: "L4-1", title: "LIGHT BLUE TWEED BLAZER", price: "$850", numPrice: 850, image: "images/about-look-4.jpg", category: "JACKETS" },
        { id: "L4-2", title: "NAVY SILK PLEATED SKIRT", price: "$595", numPrice: 595, image: "images/product-4.jpg", category: "SKIRTS" },
        { id: "L4-3", title: "KITTEN HEEL SLINGBACK PUMP", price: "$450", numPrice: 450, image: "images/product-6.jpg", category: "SHOES" }
      ]
    },
    {
      id: 5,
      season: "SPRING SUMMER 2019",
      title: "FEATHERED TWEED & MICRO SEQUINS",
      description: "Exquisite ostrich feather trim adorns a cropped pink tweed blazer, harmonized with high-shine rose micro sequin trousers.",
      modelImage: "images/about-look-5.jpg",
      items: [
        { id: "L5-1", title: "CROPPED FEATHERED TWEED JACKET", price: "$2,900", numPrice: 2900, image: "images/about-look-5.jpg", category: "JACKETS" },
        { id: "L5-2", title: "MICRO SEQUIN DRESS PANTS", price: "$895", numPrice: 895, image: "images/product-8.jpg", category: "PANTS" },
        { id: "L5-3", title: "METALLIC EVENING CLUTCH", price: "$520", numPrice: 520, image: "images/product-7.jpg", category: "BAGS" }
      ]
    }
  ];

  let currentLookIndex = 0;
  const wishlistSet = new Set(JSON.parse(localStorage.getItem('valence_wishlist') || '[]'));

  // ─── DOM Elements ──────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    initLookbook();
  });

  function initLookbook() {
    renderCarousel();
    updateActiveLook(0);

    // Controls
    const prevBtn = document.getElementById('lookPrevBtn');
    const nextBtn = document.getElementById('lookNextBtn');
    const shopLookBtn = document.getElementById('shopLookBtn');

    if (prevBtn) prevBtn.addEventListener('click', () => changeLook(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeLook(1));
    if (shopLookBtn) shopLookBtn.addEventListener('click', () => scrollToCatalog());
  }

  function changeLook(dir) {
    let newIndex = currentLookIndex + dir;
    if (newIndex < 0) newIndex = LOOKS.length - 1;
    if (newIndex >= LOOKS.length) newIndex = 0;
    updateActiveLook(newIndex);
  }

  function updateActiveLook(index) {
    currentLookIndex = index;
    const look = LOOKS[index];

    // 1. Update Header / Left Info
    const seasonEl = document.getElementById('lookSeasonText');
    const descEl = document.getElementById('lookDescText');
    const counterEl = document.getElementById('lookCounterText');

    if (seasonEl) seasonEl.textContent = look.season;
    if (descEl) descEl.textContent = look.description;
    if (counterEl) counterEl.textContent = `LOOK 0${index + 1} / 0${LOOKS.length}`;

    // 2. Update Carousel Stage Positions
    const cards = document.querySelectorAll('.model-stage-card');
    cards.forEach((card, i) => {
      card.classList.remove('active', 'prev-1', 'next-1', 'far-left', 'far-right');
      
      const diff = i - index;
      if (diff === 0) {
        card.classList.add('active');
      } else if (diff === -1 || (index === 0 && i === LOOKS.length - 1)) {
        card.classList.add('prev-1');
      } else if (diff === 1 || (index === LOOKS.length - 1 && i === 0)) {
        card.classList.add('next-1');
      } else if (diff < -1) {
        card.classList.add('far-left');
      } else {
        card.classList.add('far-right');
      }
    });

    // 3. Render Right Catalog Sidebar Items
    renderRightCatalog(look.items);
  }

  // ─── Render Carousel Stage Cards ───────────────────────────────────────
  function renderCarousel() {
    const stageContainer = document.getElementById('stageCarouselTrack');
    if (!stageContainer) return;

    stageContainer.innerHTML = '';

    LOOKS.forEach((look, i) => {
      const card = document.createElement('div');
      card.className = 'model-stage-card';
      card.dataset.index = i;

      card.innerHTML = `
        <div class="model-image-wrapper">
          <img src="${look.modelImage}" alt="${look.title}" class="model-img">
          <div class="model-hotspot-circle" title="Click to view details"></div>
        </div>
      `;

      card.addEventListener('click', () => {
        if (currentLookIndex !== i) {
          updateActiveLook(i);
        }
      });

      stageContainer.appendChild(card);
    });
  }

  // ─── Render Product Catalog Sidebar ───────────────────────────────────
  function renderRightCatalog(items) {
    const catalogContainer = document.getElementById('rightCatalogList');
    if (!catalogContainer) return;

    catalogContainer.innerHTML = '';
    let totalPrice = 0;

    items.forEach((item) => {
      totalPrice += item.numPrice;
      const isWishlisted = wishlistSet.has(item.id);

      const itemCard = document.createElement('div');
      itemCard.className = 'video-catalog-card';
      itemCard.innerHTML = `
        <div class="card-thumb">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="card-info">
          <span class="card-category">${item.category}</span>
          <h4 class="card-title">${item.title}</h4>
          <span class="card-price">${item.price}</span>
        </div>
        <div class="card-actions">
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${item.id}" title="Add to Wishlist">
            <i class="bi ${isWishlisted ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
          </button>
          <button class="add-cart-btn" data-id="${item.id}" title="Add to Bag">
            <i class="bi bi-plus-lg"></i>
          </button>
        </div>
      `;

      // Wishlist Click Event
      const wishBtn = itemCard.querySelector('.wishlist-btn');
      wishBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(item, wishBtn);
      });

      // Add to Cart Click Event
      const addBtn = itemCard.querySelector('.add-cart-btn');
      addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(item);
      });

      catalogContainer.appendChild(itemCard);
    });

    // Update Sticky Footer Summary
    const totalEl = document.getElementById('catalogTotalPrice');
    const countEl = document.getElementById('catalogItemCount');
    if (totalEl) totalEl.textContent = `$${totalPrice.toLocaleString()}`;
    if (countEl) countEl.textContent = items.length;

    // Set Add All Button listener
    const addAllBtn = document.getElementById('btnAddAllLookItems');
    if (addAllBtn) {
      addAllBtn.onclick = () => {
        items.forEach(item => addToCart(item, false));
        showNotification(`Added all ${items.length} items from this look to your bag!`);
      };
    }
  }

  // ─── Wishlist Toggle ───────────────────────────────────────────────────
  function toggleWishlist(item, btn) {
    if (wishlistSet.has(item.id)) {
      wishlistSet.delete(item.id);
      btn.classList.remove('active');
      btn.querySelector('i').className = 'bi bi-heart';
      showNotification(`Removed ${item.title} from Wishlist`);
    } else {
      wishlistSet.add(item.id);
      btn.classList.add('active');
      btn.querySelector('i').className = 'bi bi-heart-fill text-danger';
      showNotification(`Added ${item.title} to Wishlist ❤️`);
    }
    localStorage.setItem('valence_wishlist', JSON.stringify(Array.from(wishlistSet)));
    
    // Update global navbar wishlist badge
    const navWishlistCount = document.getElementById('nav-wishlist-count');
    if (navWishlistCount) navWishlistCount.textContent = wishlistSet.size;
  }

  // ─── Add to Cart ──────────────────────────────────────────────────────
  function addToCart(item, notify = true) {
    let cart = JSON.parse(localStorage.getItem('valence_cart') || '[]');
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      cart.push({ id: item.id, name: item.title, price: item.price, image: item.image, qty: 1 });
    }
    localStorage.setItem('valence_cart', JSON.stringify(cart));

    // Update Navbar Cart Count
    const totalItems = cart.reduce((acc, curr) => acc + (curr.qty || 1), 0);
    const navCartCount = document.getElementById('nav-cart-count');
    if (navCartCount) navCartCount.textContent = totalItems;

    if (notify) {
      showNotification(`Added "${item.title}" to Shopping Bag! 🛍️`);
    }
  }

  // ─── Toast Notification Helper ────────────────────────────────────────
  function showNotification(msg) {
    let toast = document.getElementById('aboutToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'aboutToast';
      toast.className = 'about-toast-banner';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  function scrollToCatalog() {
    const catalog = document.getElementById('rightCatalogList');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  }

})();
