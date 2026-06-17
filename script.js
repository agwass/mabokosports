// ===== PRODUCTS DATA =====
const products = [
    { id: 1, name: "Pro Strike FG Cleats - Purple/Red", category: "shoes", price: "KES 4,990", badge: "NEW", emoji: "👟", whatsappText: "Hi, I'm interested in Pro Strike FG Cleats (Purple/Red) - KES 4,990" },
    { id: 2, name: "Home Jersey - Yellow/Blue", category: "jerseys", price: "KES 3,500", badge: "POPULAR", emoji: "👕", whatsappText: "Hi, I'm interested in Home Jersey (Yellow/Blue) - KES 3,500" },
    { id: 3, name: "UEFA Europa League Ball - Size 5", category: "football", price: "KES 4,200", badge: "POPULAR", emoji: "⚽", whatsappText: "Hi, I'm interested in UEFA Europa League Ball (Size 5) - KES 4,200" },
    { id: 4, name: "Reversible Training Bib - Red", category: "bibs", price: "KES 850", badge: null, emoji: "🦺", whatsappText: "Hi, I'm interested in Reversible Training Bib (Red) - KES 850" },
    { id: 5, name: "Pro Basketball - Official Size", category: "basketball", price: "KES 3,800", badge: null, emoji: "🏀", whatsappText: "Hi, I'm interested in Pro Basketball (Official Size) - KES 3,800" },
    { id: 6, name: "Pro Hockey Stick - Carbon", category: "hockey", price: "KES 8,500", badge: "NEW", emoji: "🏑", whatsappText: "Hi, I'm interested in Pro Hockey Stick (Carbon) - KES 8,500" }
];

// ===== DOM ELEMENTS =====
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');
const productsGrid = document.getElementById('productsGrid');
const WHATSAPP_NUMBER = '254700000000';

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    if (productsGrid) {
        renderProducts();
    }
    setupEventListeners();
    setupScrollEffects();
});

// ===== RENDER PRODUCTS =====
function renderProducts() {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = products.map(product => `
        <article class="product-card fade-in">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappText)}" 
                   class="btn-whatsapp" 
                   target="_blank" 
                   rel="noopener">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Inquire Now
                </a>
            </div>
        </article>
    `).join('');
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    if (!navLinks || !mobileMenuToggle) return;
    
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    if (!navLinks || !mobileMenuToggle) return;
    
    navLinks.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== SCROLL EFFECTS =====
function setupScrollEffects() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
    
    // Intersection Observer for fade-in animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe product cards
        document.querySelectorAll('.product-card').forEach(card => {
            observer.observe(card);
        });
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Error:', e.error);
});

// ===== CONSOLE MESSAGE =====
console.log('%c🏆 MABOKO SPORTS WEAR', 'color: #00A651; font-size: 24px; font-weight: bold;');
console.log('%cPremium Sportswear in Kenya', 'color: #6B7280; font-size: 12px;');