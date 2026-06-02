// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile nav if open
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            if (navLinks && navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
    });
}

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.6)';
        navbar.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.4)';
    } else {
        navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.3)';
        navbar.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe power cards, mission cards, and tools
document.querySelectorAll('.power-card, .mission-card, .tool, .arsenal-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add click effects on power cards
document.querySelectorAll('.power-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'pulse 0.5s ease-out';
        }, 10);
    });
});

// Cursor glow effect
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Optional: Add subtle glow effect near cursor (if you add this div to HTML)
    const glow = document.querySelector('.cursor-glow');
    if (glow) {
        glow.style.left = x + 'px';
        glow.style.top = y + 'px';
    }
});

// Contact button click effects
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.getAttribute('href').startsWith('mailto:') && 
            !this.getAttribute('href').startsWith('http')) {
            e.preventDefault();
        }
    });
});

// Initialize animation on load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Hidden console easter egg
console.log('%c⚡ WELCOME TO AMITH\'S SHIELD AGENT PORTFOLIO ⚡', 'color: #00d4ff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00d4ff;');
console.log('%cInitializing SRE systems...', 'color: #ff6b9d; font-size: 14px;');
console.log('%cAgent Status: ACTIVE', 'color: #ffd700; font-weight: bold;');
console.log('%cAre you looking to hire? Reach out - let\'s build something great!', 'color: #a66bff; font-style: italic;');
