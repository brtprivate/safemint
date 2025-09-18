// INOUT Platform - Main JavaScript File

class INOUTPlatform {
    constructor() {
        this.init();
    }

    init() {
        this.initializeAOS();
        this.setupNavigation();
        this.setupSmoothScrolling();
        this.setupInteractiveElements();
        this.setupStatsAnimation();
        this.setupFormHandling();
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupParticleBackground();
    }

    // Initialize AOS (Animate On Scroll)
    initializeAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
                easing: 'ease-out-cubic'
            });
        }
    }

    // Setup Navigation
    setupNavigation() {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        // Active navigation highlighting
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Navigation background on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // Setup Smooth Scrolling
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Setup Interactive Elements
    setupInteractiveElements() {
        // Glass card hover effects
        const glassCards = document.querySelectorAll('.glass-card');
        glassCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Button click effects
        const buttons = document.querySelectorAll('.btn-primary');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.createRippleEffect(e);
            });
        });

        // Level badge interactions
        const levelBadges = document.querySelectorAll('.level-badge');
        levelBadges.forEach(badge => {
            badge.addEventListener('click', () => {
                this.showLevelDetails(badge.textContent);
            });
        });
    }

    // Create Ripple Effect
    createRippleEffect(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Show Level Details
    showLevelDetails(levelName) {
        const levelInfo = {
            'STARTER': {
                requirements: '1-4 Direct Referrals, 5 Team Members',
                bonus: '2.5% Daily Bonus',
                benefits: ['Basic rewards', 'Team building', 'Entry level access']
            },
            'SILVER': {
                requirements: '5-9 Direct Referrals, 10 Team Members',
                bonus: '1.0% Daily Bonus',
                benefits: ['Enhanced rewards', 'Better team structure', 'Silver privileges']
            },
            'GOLD': {
                requirements: '10-19 Direct Referrals, 20 Team Members',
                bonus: '0.5% Daily Bonus',
                benefits: ['Premium rewards', 'Strong team network', 'Gold benefits']
            },
            'PLATINUM': {
                requirements: '20+ Direct Referrals, 50 Team Members',
                bonus: '0.25% Daily Bonus',
                benefits: ['Elite rewards', 'Large team network', 'Platinum status']
            },
            'DIAMOND': {
                requirements: '20+ Direct Referrals, 100 Team Members',
                bonus: '0.15% Daily Bonus',
                benefits: ['VIP rewards', 'Massive team network', 'Diamond status']
            },
            'BLACK DIAMOND': {
                requirements: '20+ Direct Referrals, 500 Team Members',
                bonus: '0.10% Daily Bonus',
                benefits: ['Ultimate rewards', 'Elite team network', 'Black Diamond status']
            }
        };

        const info = levelInfo[levelName];
        if (info) {
            this.showModal(levelName, info);
        }
    }

    // Show Modal
    showModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content glass-card">
                <div class="modal-header">
                    <h3 class="gradient-text">${title} Level</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="level-detail">
                        <h4>Requirements</h4>
                        <p>${content.requirements}</p>
                    </div>
                    <div class="level-detail">
                        <h4>Daily Bonus</h4>
                        <p class="bonus-highlight">${content.bonus}</p>
                    </div>
                    <div class="level-detail">
                        <h4>Benefits</h4>
                        <ul>
                            ${content.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.style.display = 'flex';

        // Close modal functionality
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Setup Stats Animation
    setupStatsAnimation() {
        const stats = document.querySelectorAll('.stats-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateStats(entry.target);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => observer.observe(stat));
    }

    // Animate Stats
    animateStats(statElement) {
        const numberElement = statElement.querySelector('.text-2xl');
        if (!numberElement) return;

        const finalValue = this.parseStatValue(numberElement.textContent);
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentValue = Math.floor(finalValue * progress);
            numberElement.textContent = this.formatStatValue(currentValue, numberElement.textContent);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }

    // Parse Stat Value
    parseStatValue(value) {
        if (value.includes('$')) {
            return parseFloat(value.replace(/[$,]/g, ''));
        } else if (value.includes('%')) {
            return parseFloat(value.replace('%', ''));
        } else if (value.includes(',')) {
            return parseInt(value.replace(/,/g, ''));
        }
        return parseInt(value) || 0;
    }

    // Format Stat Value
    formatStatValue(value, originalValue) {
        if (originalValue.includes('$')) {
            return '$' + value.toLocaleString();
        } else if (originalValue.includes('%')) {
            return value.toFixed(1) + '%';
        } else if (originalValue.includes(',')) {
            return value.toLocaleString();
        }
        return value.toString();
    }

    // Setup Form Handling
    setupFormHandling() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(form);
            });
        });
    }

    // Handle Form Submission
    handleFormSubmission(form) {
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        
        if (submitBtn) {
            submitBtn.classList.add('loading');
            submitBtn.textContent = 'Processing...';
        }

        // Simulate form processing
        setTimeout(() => {
            if (submitBtn) {
                submitBtn.classList.remove('loading');
                submitBtn.textContent = 'Submit';
            }
            
            this.showNotification('Form submitted successfully!', 'success');
        }, 2000);
    }

    // Show Notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        document.body.appendChild(notification);
        notification.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            notification.style.display = 'none';
            setTimeout(() => notification.remove(), 300);
        }, 5000);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.display = 'none';
            setTimeout(() => notification.remove(), 300);
        });
    }

    // Setup Mobile Menu
    setupMobileMenu() {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        
        const nav = document.querySelector('nav .hidden.md\\:flex');
        if (nav) {
            nav.parentNode.insertBefore(mobileMenuBtn, nav);
            
            mobileMenuBtn.addEventListener('click', () => {
                nav.classList.toggle('mobile-open');
                mobileMenuBtn.innerHTML = nav.classList.contains('mobile-open') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars">';
            });
        }
    }

    // Setup Scroll Effects
    setupScrollEffects() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateScrollEffects();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Update Scroll Effects
    updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-section');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });

        // Fade in elements on scroll
        const fadeElements = document.querySelectorAll('.fade-on-scroll');
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in');
            }
        });
    }

    // Setup Particle Background
    setupParticleBackground() {
        const canvas = document.createElement('canvas');
        canvas.id = 'particle-canvas';
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
            opacity: 0.3;
        `;
        
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.2;
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }
            
            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = '#00d4ff';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }
        
        // Create particles
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }
        
        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }

    // Utility Methods
    debounce(func, wait) {
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

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize the platform when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new INOUTPlatform();
});

// Add CSS for additional elements
const additionalStyles = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        backdrop-filter: blur(10px);
    }

    .modal-content {
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .modal-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.3s ease;
    }

    .modal-close:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    .modal-body {
        padding: 1.5rem;
    }

    .level-detail {
        margin-bottom: 1.5rem;
    }

    .level-detail h4 {
        color: #00d4ff;
        margin-bottom: 0.5rem;
    }

    .level-detail ul {
        list-style: none;
        padding-left: 0;
    }

    .level-detail li {
        padding: 0.25rem 0;
        position: relative;
        padding-left: 1.5rem;
    }

    .level-detail li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #00ff88;
        font-weight: bold;
    }

    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 1rem;
        border-radius: 10px;
        border-left: 4px solid #00d4ff;
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    }

    .notification.show {
        transform: translateX(0);
    }

    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: 1rem;
    }

    .notification-success {
        border-left-color: #00ff88;
    }

    .notification-error {
        border-left-color: #ff4444;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
    }

    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: block;
        }

        .hidden.md\\:flex {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hidden.md\\:flex.mobile-open {
            display: flex;
        }

        .hidden.md\\:flex a {
            padding: 0.75rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hidden.md\\:flex a:last-child {
            border-bottom: none;
        }
    }

    .fade-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .fade-on-scroll.fade-in {
        opacity: 1;
        transform: translateY(0);
    }

    nav.scrolled {
        background: rgba(0, 0, 0, 0.8);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .active {
        color: #00d4ff !important;
    }

    .active::after {
        width: 100% !important;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
