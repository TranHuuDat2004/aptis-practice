// js/main.js (FINAL PUSH-CONTENT VERSION)

document.addEventListener("DOMContentLoaded", function() {
    
    const loadComponent = (selector, url) => {
        return fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Could not load ${url}`);
                return response.text();
            })
            .then(data => {
                const element = document.querySelector(selector);
                if (element) element.innerHTML = data;
            })
            .catch(error => console.error(`Error loading component for ${selector}:`, error));
    };

    function setupNavigation() {
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mobileNav = document.getElementById('mobile-nav');
        const closeBtn = document.getElementById('close-btn');
        const body = document.body;

        // Sự kiện mở/đóng menu chính
        const toggleMenu = () => {
            body.classList.toggle('u-nav-open');
        };

        if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMenu);
        if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
        
        // Sự kiện cho dropdown trên mobile
        const dropdownToggles = document.querySelectorAll('.mobile-dropdown .dropdown-toggle');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('open');
            });
        });

        // --- Desktop Dropdown Click Logic ---
        const desktopDropdowns = document.querySelectorAll('.desktop-nav .dropdown > a');

        desktopDropdowns.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                const parent = this.parentElement;
                // Only prevent default for actual dropdowns
                if (parent.classList.contains('dropdown')) {
                    e.preventDefault();
                    const wasActive = parent.classList.contains('active');
                    // Close all other dropdowns
                    document.querySelectorAll('.desktop-nav .dropdown').forEach(d => d.classList.remove('active'));
                    // If it wasn't active before, open it
                    if (!wasActive) {
                        parent.classList.add('active');
                    }
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.desktop-nav .dropdown')) {
                document.querySelectorAll('.desktop-nav .dropdown').forEach(d => d.classList.remove('active'));
            }
        });
    }

    function setActiveNavLink() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-side-menu a');
        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname.split('/').pop() || 'index.html';
            link.classList.remove('active');
            // So sánh chính xác hơn
            if (linkPath === currentPath && window.location.search === new URL(link.href).search) {
                link.classList.add('active');
                if (link.closest('.dropdown-content')) {
                    link.closest('.dropdown').querySelector('a').classList.add('active');
                }
            }
        });
        if (currentPath === 'index.html') {
            document.querySelector('.desktop-nav a[href="index.html"]')?.classList.add('active');
            document.querySelector('.mobile-side-menu a[href="index.html"]')?.classList.add('active');
        }
    }

    Promise.all([
        loadComponent('#header-placeholder', 'components/header.html'),
        loadComponent('#footer-placeholder', 'components/footer.html')
    ]).then(() => {
        setupNavigation();
        setActiveNavLink();
        // THÊM ĐOẠN CODE NÀY VÀO
        const lastUpdatedEl = document.getElementById('last-updated');
        if (lastUpdatedEl) {
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = today.getFullYear();
            lastUpdatedEl.textContent = `${day}/${month}/${year}`;
        }
    });

});