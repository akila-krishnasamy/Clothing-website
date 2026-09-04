/* ==========================================================================
   VALENCE STUDIOS — MODERN INDIAN FASHION WEB APPLICATION ENGINE
   Vanilla JavaScript for Dynamic Split-Screen Runway, Modal & E-Commerce Flow
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. INDIAN CURRENCY & PRODUCT DATABASE (WITH MULTIPLE IMAGE GALLERIES)
  // ------------------------------------------------------------------------
  const PRODUCTS = [
    {
      id: 'prod-1',
      name: 'Steed Cap Vintage White/Black',
      category: 'accessories',
      price: 2499,
      badge: 'NEW DROP',
      image: 'images/product-4.jpg',
      altImage: 'images/product-4-alt.jpg',
      gallery: ['images/product-4.jpg', 'images/product-4-alt.jpg'],
      colors: ['Vintage White', 'Black Canvas'],
      altText: 'Steed Cap Vintage White and Black Cotton Canvas Cap',
      altTextAlt: 'Steed Cap Rear Embroidery View',
      sizes: ['ONE SIZE'],
      description: 'Unstructured 6-panel baseball cap crafted from heavy washed cotton canvas. Features custom embroidery on front and back adjustable strap. Designed in Kala Ghoda, Mumbai.'
    },
    {
      id: 'prod-2',
      name: 'Steed Raglan Lounge Tee Vintage',
      category: 'tees',
      price: 3999,
      badge: 'BESTSELLER',
      image: 'images/product-1.jpg',
      altImage: 'images/product-1-alt.jpg',
      gallery: ['images/product-1.jpg', 'images/product-1-alt.jpg'],
      colors: ['Vintage Black/White', 'Mineral Wash Gray'],
      altText: 'Steed Raglan Lounge Tee Vintage White and Black Front Profile',
      altTextAlt: 'Steed Raglan Lounge Tee Graphic Back Print Detail',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      description: 'Oversized 240 GSM heavy jersey cotton raglan tee with vintage mineral wash and signature high-contrast graphic placement.'
    },
    {
      id: 'prod-3',
      name: 'Boxy SS Overshirt Blue Stripe',
      category: 'overshirts',
      price: 5999,
      badge: 'POPULAR',
      image: 'images/product-2.jpg',
      altImage: 'images/product-2-alt.jpg',
      gallery: ['images/product-2.jpg', 'images/product-2-alt.jpg'],
      colors: ['Indiranagar Blue Stripe', 'Kala Ghoda Beige Stripe'],
      altText: 'Boxy Short Sleeve Overshirt Blue Stripe Front View',
      altTextAlt: 'Boxy Short Sleeve Overshirt Fabric Texture',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Relaxed drop-shoulder button-up shirt in custom yarn-dyed handloom stripe fabric. Perfect for Bandra & Indiranagar summers.'
    },
    {
      id: 'prod-4',
      name: 'Legacy Work Pant Sand',
      category: 'bottoms',
      price: 6999,
      badge: 'HOT',
      image: 'images/product-3.jpg',
      altImage: 'images/product-3-alt.jpg',
      gallery: ['images/product-3.jpg', 'images/product-3-alt.jpg'],
      colors: ['Sand Beige', 'CyberCity Olive'],
      altText: 'Legacy Work Pant Sand Beige Tailored Trousers Front Profile',
      altTextAlt: 'Legacy Work Pant Sand Pocket and Stitching Details',
      sizes: ['28', '30', '32', '34', '36'],
      description: 'Heavyweight cotton twill straight-leg work trouser with utility pockets and reinforced knee panels. Tailored architectural fit.'
    },
    {
      id: 'prod-5',
      name: 'ZR Football Jersey Forest Stripe',
      category: 'tees',
      price: 4999,
      badge: 'LIMITED DROP',
      image: 'images/product-5.jpg',
      altImage: 'images/product-5-alt.jpg',
      gallery: ['images/product-5.jpg', 'images/product-5-alt.jpg'],
      colors: ['Forest Green Stripe', 'Monochrome Navy'],
      altText: 'ZR Football Jersey Forest Stripe Athletic Mesh Jersey',
      altTextAlt: 'ZR Football Jersey Forest Stripe Back Profile',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Sublimated striped athletic breathable mesh jersey with custom crest patch and rib collar detail.'
    },
    {
      id: 'prod-6',
      name: 'Boxy SS Overshirt Black Linen',
      category: 'overshirts',
      price: 5999,
      badge: 'NEW',
      image: 'images/product-6.jpg',
      altImage: 'images/product-6-alt.jpg',
      gallery: ['images/product-6.jpg', 'images/product-6-alt.jpg'],
      colors: ['Deep Black Linen', 'Natural Off-White'],
      altText: 'Boxy Short Sleeve Overshirt Black Linen Blend',
      altTextAlt: 'Boxy Short Sleeve Overshirt Black Collar Detail',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Deep black boxy resort-style overshirt in premium linen cotton blend. Features concealed front placket and chest patch pocket.'
    },
    {
      id: 'prod-7',
      name: 'Badge Tech Short Dark Army',
      category: 'bottoms',
      price: 4299,
      badge: 'ESSENTIAL',
      image: 'images/product-7.jpg',
      altImage: 'images/product-7-alt.jpg',
      gallery: ['images/product-7.jpg', 'images/product-7-alt.jpg'],
      colors: ['Dark Army Green', 'Stealth Charcoal'],
      altText: 'Badge Tech Short Dark Army Water-Resistant Shorts',
      altTextAlt: 'Badge Tech Short Pocket Detail',
      sizes: ['28', '30', '32', '34'],
      description: 'Monsoon-ready water-resistant nylon stretch short featuring elastic drawstring waistband, zip security pockets, and silicone logo badge.'
    },
    {
      id: 'prod-8',
      name: 'Vibe Holiday SS Shirt Tamil Edition',
      category: 'overshirts',
      price: 5499,
      badge: 'EDITORIAL',
      image: 'images/product-8.jpg',
      altImage: 'images/product-8-alt.jpg',
      gallery: ['images/product-8.jpg', 'images/product-8-alt.jpg'],
      colors: ['Ivory Resort Chikankari', 'Vintage Ochre'],
      altText: 'Vibe Holiday Shirt Tamil Model Front View',
      altTextAlt: 'Vibe Holiday Shirt Tamil Model Campaign Texture',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      description: 'Open-collar Cuban resort shirt modeled by our Tamil campaign face. Crafted from lightweight chikankari-inspired embroidered eyelet cotton.'
    }
  ];

  // Format currency helper function (₹ Indian Rupee)
  function formatINR(amount) {
    return '₹' + amount.toLocaleString('en-IN');
  }

  // ------------------------------------------------------------------------
  // 2. STATE MANAGEMENT & LOCAL STORAGE
  // ------------------------------------------------------------------------
  let cart = JSON.parse(localStorage.getItem('valence_in_cart')) || [];
  let wishlist = JSON.parse(localStorage.getItem('valence_in_wishlist')) || [];
  let activeQuickViewProduct = PRODUCTS[2];
  let activeSplitProduct = PRODUCTS[2]; // Default: Boxy SS Overshirt Blue Stripe

  function saveState() {
    localStorage.setItem('valence_in_cart', JSON.stringify(cart));
    localStorage.setItem('valence_in_wishlist', JSON.stringify(wishlist));
    updateCartUI();
    updateWishlistUI();
  }

  // Expose global helper for inline calls
  window.valenceAddToCart = function(productId, size, qty = 1) {
    addToCart(productId, size, qty);
  };

  // ------------------------------------------------------------------------
  // 3. PRELOADER & HERO LOAD ANIMATION
  // ------------------------------------------------------------------------
  const preloader = document.getElementById('preloader');
  const loaderBarFill = document.querySelector('.loader-bar-fill');
  const heroSection = document.querySelector('.hero-section');
  
  if (preloader) {
    if (loaderBarFill) loaderBarFill.style.width = '100%';
    setTimeout(() => {
      preloader.classList.add('loaded');
      if (heroSection) heroSection.classList.add('is-loaded');
    }, 1000);
  }

  // ------------------------------------------------------------------------
  // 4. INSTANT HIGH-PRECISION CUSTOM CURSOR
  // ------------------------------------------------------------------------
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorFollower = document.querySelector('.custom-cursor-follower');

  if (cursorDot && cursorFollower) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        cursorDot.style.opacity = '1';
        cursorFollower.style.opacity = '1';
      }
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    function animateCursor() {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;
      cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Hover state bindings for interactive elements
    document.querySelectorAll('a, button, input, .product-card, .split-product-card, .asymmetric-card, .gallery-card, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        const mode = el.getAttribute('data-cursor') || 'VIEW';
        cursorFollower.classList.add('hover-active');
        if (mode === 'EXPLORE') {
          cursorFollower.classList.add('hover-explore');
          cursorFollower.setAttribute('data-text', 'EXPLORE');
        } else if (mode === 'ADD') {
          cursorFollower.setAttribute('data-text', 'ADD');
        } else {
          cursorFollower.setAttribute('data-text', 'VIEW');
        }
      });

      el.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('hover-active', 'hover-explore');
        cursorFollower.removeAttribute('data-text');
      });
    });
  }

  // ------------------------------------------------------------------------
  // 5. EDITORIAL SPLIT-SCREEN SHOPPING EXPERIENCE ENGINE
  // ------------------------------------------------------------------------
  const verticalListContainer = document.getElementById('vertical-product-list');
  const featuredImgEl = document.getElementById('featured-split-img');
  const featuredLookNumEl = document.getElementById('featured-look-num');
  const featuredTitleEl = document.getElementById('featured-look-title');
  const featuredPriceEl = document.getElementById('featured-look-price');
  const featuredDescEl = document.getElementById('featured-look-desc');
  const featuredCounterEl = document.getElementById('featured-look-counter');
  const featuredProgressBarEl = document.getElementById('featured-progress-bar');
  const featuredShopNowBtn = document.getElementById('featured-shop-now-btn');

  function renderVerticalProductList() {
    if (!verticalListContainer) return;

    verticalListContainer.innerHTML = PRODUCTS.map((prod, idx) => {
      const isWishlisted = wishlist.includes(prod.id);
      const isActive = prod.id === activeSplitProduct.id;
      return `
        <div class="split-product-card ${isActive ? 'active' : ''}" data-id="${prod.id}" data-index="${idx}" data-cursor="VIEW">
          <div class="split-card-img-box">
            <img src="${prod.image}" alt="${prod.altText || prod.name}" class="split-card-img">
          </div>
          <div class="split-card-details">
            <h4 class="split-card-title">${prod.name}</h4>
            <div class="split-card-price">${formatINR(prod.price)}</div>
          </div>
          <div class="split-card-actions">
            <button class="split-heart-btn ${isWishlisted ? 'active' : ''}" data-id="${prod.id}" aria-label="Wishlist">
              <i class="bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}"></i>
            </button>
            <button class="split-plus-btn trigger-quickview" data-id="${prod.id}" aria-label="Product details">
              <i class="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  function switchFeaturedProduct(product, lookIndex) {
    if (!featuredImgEl || activeSplitProduct.id === product.id) return;
    
    activeSplitProduct = product;

    // Trigger smooth fade & scale out animation
    featuredImgEl.classList.add('switching');
    const infoContainer = document.querySelector('.featured-look-info');
    if (infoContainer) infoContainer.classList.add('switching');

    setTimeout(() => {
      // Swap content
      featuredImgEl.src = product.image;
      featuredImgEl.alt = product.altText || product.name;
      
      if (featuredLookNumEl) featuredLookNumEl.textContent = `LOOK | 0${lookIndex + 1}`;
      if (featuredTitleEl) featuredTitleEl.textContent = product.name;
      if (featuredPriceEl) featuredPriceEl.textContent = formatINR(product.price);
      if (featuredDescEl) featuredDescEl.textContent = product.description;
      if (featuredCounterEl) featuredCounterEl.textContent = `0${lookIndex + 1} / 0${PRODUCTS.length}`;
      if (featuredProgressBarEl) {
        const percent = ((lookIndex + 1) / PRODUCTS.length) * 100;
        featuredProgressBarEl.style.width = `${percent}%`;
      }
      
      // Animate back in smoothly
      featuredImgEl.classList.remove('switching');
      if (infoContainer) infoContainer.classList.remove('switching');
    }, 300);

    // Update active highlight border on vertical cards
    document.querySelectorAll('.split-product-card').forEach(card => {
      if (card.getAttribute('data-id') === product.id) {
        card.classList.add('active');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        card.classList.remove('active');
      }
    });
  }

  if (verticalListContainer) {
    renderVerticalProductList();

    verticalListContainer.addEventListener('click', (e) => {
      const plusBtn = e.target.closest('.split-plus-btn');
      const heartBtn = e.target.closest('.split-heart-btn');
      const card = e.target.closest('.split-product-card');

      if (heartBtn) {
        e.stopPropagation();
        const prodId = heartBtn.getAttribute('data-id');
        toggleWishlist(prodId);
        renderVerticalProductList();
        return;
      }

      if (plusBtn) {
        e.stopPropagation();
        const prodId = plusBtn.getAttribute('data-id');
        const product = PRODUCTS.find(p => p.id === prodId);
        if (product) openQuickView(product);
        return;
      }

      if (card) {
        const prodId = card.getAttribute('data-id');
        const lookIndex = parseInt(card.getAttribute('data-index'));
        const product = PRODUCTS.find(p => p.id === prodId);
        if (product) switchFeaturedProduct(product, lookIndex);
      }
    });

    if (featuredShopNowBtn) {
      featuredShopNowBtn.addEventListener('click', () => {
        openQuickView(activeSplitProduct);
      });
    }
  }

  // ------------------------------------------------------------------------
  // 6. NAVBAR SCROLL EFFECT
  // ------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar-editorial');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll();

  // ------------------------------------------------------------------------
  // 7. MAGNETIC BUTTONS & PARALLAX EFFECT
  // ------------------------------------------------------------------------
  const magneticBtns = document.querySelectorAll('.btn-magnetic');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `translate(0px, 0px)`;
    });
  });

  // Parallax background scaling
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const campaignBg = document.querySelector('.campaign-bg-img');
    const storyBg = document.querySelector('.story-bg-img');

    if (campaignBg) {
      const parentTop = campaignBg.parentElement.offsetTop;
      if (scrollPos > parentTop - window.innerHeight && scrollPos < parentTop + window.innerHeight) {
        const delta = (scrollPos - parentTop) * 0.06;
        campaignBg.style.transform = `scale(1.06) translateY(${delta}px)`;
      }
    }

    if (storyBg) {
      const parentTop = storyBg.parentElement.offsetTop;
      if (scrollPos > parentTop - window.innerHeight && scrollPos < parentTop + window.innerHeight) {
        const delta = (scrollPos - parentTop) * 0.05;
        storyBg.style.transform = `scale(1.08) translateY(${delta}px)`;
      }
    }
  });

  // ------------------------------------------------------------------------
  // 8. SCROLL REVEAL (IntersectionObserver)
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active-reveal');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // ------------------------------------------------------------------------
  // 9. CATEGORY FILTER TABS
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('#collection-grid .product-card-col');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterValue === 'all' || cat === filterValue) {
          card.style.display = 'block';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 10. WISHLIST TOGGLE LOGIC
  // ------------------------------------------------------------------------
  function toggleWishlist(prodId) {
    const index = wishlist.indexOf(prodId);
    if (index > -1) {
      wishlist.splice(index, 1);
      showToast('Item removed from Wishlist');
    } else {
      wishlist.push(prodId);
      showToast('Item added to Wishlist ❤️');
    }
    saveState();
  }

  document.addEventListener('click', (e) => {
    const wishlistBtn = e.target.closest('.wishlist-btn');
    if (wishlistBtn) {
      e.preventDefault();
      e.stopPropagation();
      const prodId = wishlistBtn.getAttribute('data-id');
      toggleWishlist(prodId);
    }
  });

  function updateWishlistUI() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
      const prodId = btn.getAttribute('data-id');
      if (wishlist.includes(prodId)) {
        btn.classList.add('active');
        btn.querySelector('i').className = 'bi bi-heart-fill';
      } else {
        btn.classList.remove('active');
        btn.querySelector('i').className = 'bi bi-heart';
      }
    });

    const wishlistCountBadge = document.getElementById('wishlist-count');
    if (wishlistCountBadge) {
      wishlistCountBadge.textContent = wishlist.length;
    }
  }

  // ------------------------------------------------------------------------
  // 11. FULL-FEATURED PRODUCT DETAIL MODAL (SHOP NOW INTERACTION)
  // ------------------------------------------------------------------------
  const quickViewModalEl = document.getElementById('quickViewModal');
  const quickViewModal = quickViewModalEl ? new bootstrap.Modal(quickViewModalEl) : null;

  document.addEventListener('click', (e) => {
    const qvBtn = e.target.closest('.btn-quick-view') || e.target.closest('.trigger-quickview');
    if (qvBtn && !qvBtn.classList.contains('split-plus-btn') && !qvBtn.classList.contains('trigger-breakdown')) {
      e.preventDefault();
      const prodId = qvBtn.getAttribute('data-id');
      const product = PRODUCTS.find(p => p.id === prodId);
      if (product && quickViewModal) {
        openQuickView(product);
      }
    }
  });

  function openQuickView(product) {
    activeQuickViewProduct = product;
    const qvImg = document.getElementById('qv-img');
    const qvImgContainer = document.querySelector('.quickview-img-wrapper');

    if (qvImg) {
      qvImg.src = product.image;
      qvImg.alt = product.altText || product.name;
    }

    document.getElementById('qv-title').textContent = product.name;
    document.getElementById('qv-price').textContent = formatINR(product.price);
    document.getElementById('qv-desc').textContent = product.description;
    document.getElementById('qv-badge').textContent = product.badge;

    // Render Thumbnail Gallery
    const galleryContainer = document.getElementById('qv-thumbnails');
    if (galleryContainer && product.gallery) {
      galleryContainer.innerHTML = product.gallery.map((imgUrl, idx) => `
        <div class="qv-thumb-item ${idx === 0 ? 'active' : ''}" data-img="${imgUrl}">
          <img src="${imgUrl}" alt="${product.name} Thumbnail ${idx + 1}" class="qv-thumb-img">
        </div>
      `).join('');

      galleryContainer.querySelectorAll('.qv-thumb-item').forEach(thumb => {
        thumb.addEventListener('click', () => {
          galleryContainer.querySelectorAll('.qv-thumb-item').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
          const targetImg = thumb.getAttribute('data-img');
          if (qvImg) {
            qvImg.style.opacity = '0.4';
            setTimeout(() => {
              qvImg.src = targetImg;
              qvImg.style.opacity = '1';
            }, 150);
          }
        });
      });
    }

    // Render Color Options
    const colorContainer = document.getElementById('qv-colors');
    if (colorContainer && product.colors) {
      colorContainer.innerHTML = product.colors.map((c, idx) => `
        <button class="color-selector-btn ${idx === 0 ? 'active' : ''}" data-color="${c}">${c}</button>
      `).join('');

      colorContainer.querySelectorAll('.color-selector-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          colorContainer.querySelectorAll('.color-selector-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    }

    // Render Sizes
    const sizeContainer = document.getElementById('qv-sizes');
    if (sizeContainer && product.sizes) {
      sizeContainer.innerHTML = product.sizes.map((s, idx) => `
        <button class="size-selector-btn ${idx === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
      `).join('');

      sizeContainer.querySelectorAll('.size-selector-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          sizeContainer.querySelectorAll('.size-selector-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    }

    // Interactive Zoom-On-Hover inside Modal
    if (qvImgContainer && qvImg) {
      qvImgContainer.addEventListener('mousemove', (e) => {
        const rect = qvImgContainer.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        qvImg.style.transformOrigin = `${x}% ${y}%`;
        qvImg.style.transform = 'scale(1.7)';
      });

      qvImgContainer.addEventListener('mouseleave', () => {
        qvImg.style.transform = 'scale(1)';
        qvImg.style.transformOrigin = 'center center';
      });
    }

    // Wishlist button state inside modal
    const modalHeartBtn = document.getElementById('qv-wishlist-btn');
    if (modalHeartBtn) {
      const isWishlisted = wishlist.includes(product.id);
      modalHeartBtn.className = `btn btn-outline-dark rounded-0 px-3 ${isWishlisted ? 'active text-danger' : ''}`;
      modalHeartBtn.innerHTML = `<i class="bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'} me-1"></i> ${isWishlisted ? 'SAVED' : 'WISHLIST'}`;
      
      modalHeartBtn.onclick = () => {
        toggleWishlist(product.id);
        const nowWishlisted = wishlist.includes(product.id);
        modalHeartBtn.className = `btn btn-outline-dark rounded-0 px-3 ${nowWishlisted ? 'active text-danger' : ''}`;
        modalHeartBtn.innerHTML = `<i class="bi ${nowWishlisted ? 'bi-heart-fill' : 'bi-heart'} me-1"></i> ${nowWishlisted ? 'SAVED' : 'WISHLIST'}`;
      };
    }

    document.getElementById('qv-qty').textContent = '1';
    if (quickViewModal) quickViewModal.show();
  }

  document.getElementById('qv-qty-minus')?.addEventListener('click', () => {
    const qtyEl = document.getElementById('qv-qty');
    let val = parseInt(qtyEl.textContent);
    if (val > 1) qtyEl.textContent = val - 1;
  });

  document.getElementById('qv-qty-plus')?.addEventListener('click', () => {
    const qtyEl = document.getElementById('qv-qty');
    let val = parseInt(qtyEl.textContent);
    qtyEl.textContent = val + 1;
  });

  document.getElementById('qv-add-to-cart')?.addEventListener('click', () => {
    if (!activeQuickViewProduct) return;
    const activeSizeBtn = document.querySelector('#qv-sizes .size-selector-btn.active');
    const selectedSize = activeSizeBtn ? activeSizeBtn.getAttribute('data-size') : activeQuickViewProduct.sizes[0];
    const qty = parseInt(document.getElementById('qv-qty').textContent);

    addToCart(activeQuickViewProduct.id, selectedSize, qty);
    if (quickViewModal) quickViewModal.hide();
  });

  document.getElementById('qv-buy-now')?.addEventListener('click', () => {
    if (!activeQuickViewProduct) return;
    const activeSizeBtn = document.querySelector('#qv-sizes .size-selector-btn.active');
    const selectedSize = activeSizeBtn ? activeSizeBtn.getAttribute('data-size') : activeQuickViewProduct.sizes[0];
    const qty = parseInt(document.getElementById('qv-qty').textContent);

    addToCart(activeQuickViewProduct.id, selectedSize, qty);
    if (quickViewModal) quickViewModal.hide();
    openCartOffcanvas();
  });

  // ------------------------------------------------------------------------
  // 12. SHOPPING CART LOGIC (INDIAN RUPEES ₹ & EXPRESS COD/UPI)
  // ------------------------------------------------------------------------
  const cartOffcanvasEl = document.getElementById('cartOffcanvas');
  const cartOffcanvas = cartOffcanvasEl ? new bootstrap.Offcanvas(cartOffcanvasEl) : null;

  function openCartOffcanvas() {
    if (cartOffcanvas) cartOffcanvas.show();
  }

  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.btn-quick-add');
    if (addBtn) {
      e.preventDefault();
      const prodId = addBtn.getAttribute('data-id');
      const product = PRODUCTS.find(p => p.id === prodId);
      if (product) {
        addToCart(product.id, product.sizes[0], 1);
      }
    }
  });

  function addToCart(productId, size, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId && item.size === size);
    if (existingIndex > -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        altText: product.altText,
        size: size,
        qty: qty
      });
    }

    saveState();
    showToast(`Added ${product.name} (${size}) to Bag`);
    openCartOffcanvas();
  }

  function updateCartUI() {
    const cartCountBadges = document.querySelectorAll('.cart-badge, #runway-cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    
    cartCountBadges.forEach(b => b.textContent = totalItems);

    const cartContainer = document.getElementById('cart-items-container');
    const cartSubtotalEl = document.getElementById('cart-subtotal');
    const freeShippingBarFill = document.getElementById('free-shipping-fill');
    const freeShippingText = document.getElementById('free-shipping-text');

    if (!cartContainer) return;

    if (cart.length === 0) {
      cartContainer.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-bag-x display-4 text-muted mb-3 d-block"></i>
          <h5 class="font-serif uppercase mb-2">Your Bag is Empty</h5>
          <p class="text-muted small mb-4">Explore our latest drops and elevate your streetwear style.</p>
          <button class="btn-editorial btn-editorial-dark btn-sm" data-bs-dismiss="offcanvas">EXPLORE CATALOG</button>
        </div>
      `;
      if (cartSubtotalEl) cartSubtotalEl.textContent = '₹0';
      if (freeShippingBarFill) freeShippingBarFill.style.width = '0%';
      if (freeShippingText) freeShippingText.textContent = 'Add ₹2,999 to unlock FREE Express Delivery across India';
      return;
    }

    let subtotal = 0;
    cartContainer.innerHTML = cart.map((item, idx) => {
      subtotal += item.price * item.qty;
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.altText || item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <div>
              <div class="d-flex justify-content-between">
                <h6 class="cart-item-title mb-0">${item.name}</h6>
                <button class="btn-remove-item text-muted hover-dark ms-2" data-index="${idx}">
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
              <div class="cart-item-meta mt-1">SIZE: ${item.size} | ${formatINR(item.price)}</div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-2">
              <div class="qty-control">
                <button class="qty-btn btn-cart-qty" data-index="${idx}" data-action="minus">-</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn btn-cart-qty" data-index="${idx}" data-action="plus">+</button>
              </div>
              <div class="fw-bold fs-7">${formatINR(item.price * item.qty)}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (cartSubtotalEl) cartSubtotalEl.textContent = formatINR(subtotal);

    const threshold = 2999;
    const progress = Math.min((subtotal / threshold) * 100, 100);
    if (freeShippingBarFill) freeShippingBarFill.style.width = `${progress}%`;
    if (freeShippingText) {
      if (subtotal >= threshold) {
        freeShippingText.innerHTML = `<span class="text-success fw-bold">✓ UNLOCKED FREE EXPRESS SHIPPING ACROSS INDIA!</span>`;
      } else {
        const remaining = threshold - subtotal;
        freeShippingText.textContent = `Add ${formatINR(remaining)} more to unlock FREE Express Shipping across India`;
      }
    }
  }

  document.getElementById('cart-items-container')?.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.btn-remove-item');
    if (removeBtn) {
      const idx = parseInt(removeBtn.getAttribute('data-index'));
      cart.splice(idx, 1);
      saveState();
      return;
    }

    const qtyBtn = e.target.closest('.btn-cart-qty');
    if (qtyBtn) {
      const idx = parseInt(qtyBtn.getAttribute('data-index'));
      const action = qtyBtn.getAttribute('data-action');
      if (action === 'plus') {
        cart[idx].qty += 1;
      } else if (action === 'minus') {
        cart[idx].qty -= 1;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
      }
      saveState();
    }
  });

  saveState();

  // ------------------------------------------------------------------------
  // 13. HORIZONTAL GALLERY DRAG SCROLL FOR DESKTOP
  // ------------------------------------------------------------------------
  const gallery = document.getElementById('horizontal-gallery');
  if (gallery) {
    let isDown = false;
    let startX;
    let scrollLeft;

    gallery.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - gallery.offsetLeft;
      scrollLeft = gallery.scrollLeft;
      gallery.style.cursor = 'grabbing';
    });
    gallery.addEventListener('mouseleave', () => {
      isDown = false;
      gallery.style.cursor = 'grab';
    });
    gallery.addEventListener('mouseup', () => {
      isDown = false;
      gallery.style.cursor = 'grab';
    });
    gallery.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - gallery.offsetLeft;
      const walk = (x - startX) * 2;
      gallery.scrollLeft = scrollLeft - walk;
    });
  }

  // ------------------------------------------------------------------------
  // 14. NEWSLETTER FORM VALIDATION
  // ------------------------------------------------------------------------
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterFeedback = document.getElementById('newsletter-feedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      const val = emailInput.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!val || !emailRegex.test(val)) {
        newsletterFeedback.className = 'form-feedback error';
        newsletterFeedback.textContent = 'Please enter a valid email address.';
        return;
      }

      newsletterFeedback.className = 'form-feedback success';
      newsletterFeedback.textContent = 'Namaste! Welcome to the Creator’s Club. Check your inbox for your ₹500 welcome code!';
      emailInput.value = '';
      setTimeout(() => { newsletterFeedback.style.display = 'none'; }, 6000);
    });
  }

  // ------------------------------------------------------------------------
  // 15. LANGUAGE SELECTOR (EN | HINDI | MARATHI)
  // ------------------------------------------------------------------------
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = opt.getAttribute('data-lang');
      document.getElementById('current-lang').textContent = lang.toUpperCase();
      if (lang === 'hi') {
        showToast('भाषा बदलकर हिंदी कर दी गई है (Hindi)');
      } else if (lang === 'mr') {
        showToast('भाषा बदलून मराठी केली आहे (Marathi)');
      } else {
        showToast('Language switched to English');
      }
    });
  });

  // ------------------------------------------------------------------------
  // 16. TOAST NOTIFICATION UTILITY
  // ------------------------------------------------------------------------
  const toastEl = document.getElementById('editorial-toast');
  let toastTimeout;

  function showToast(message) {
    if (!toastEl) return;
    document.getElementById('toast-message').textContent = message;
    toastEl.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3500);
  }

});
