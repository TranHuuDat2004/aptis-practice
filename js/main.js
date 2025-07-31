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
    });

});