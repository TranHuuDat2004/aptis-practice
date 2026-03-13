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
        initWarningPopup();
    });

});

// === GLOBAL TOUR HINT SYSTEM ===
window.showTourHint = function(tourKey, onStartTour) {
    const hasSeenHint = localStorage.getItem('hasSeenGlobalTourHint_' + tourKey);
    if (hasSeenHint) return;

    const tourBtn = document.getElementById('restart-tour');
    if (!tourBtn) return;

    let hintBubble = document.getElementById('tour-hint-bubble');
    if (!hintBubble) {
        hintBubble = document.createElement('div');
        hintBubble.id = 'tour-hint-bubble';
        hintBubble.className = 'tour-hint-bubble';
        hintBubble.innerHTML = `
            <div style="font-size: 14px; margin-bottom: 12px; color: #333; line-height: 1.4;">
                Bạn lần đầu tiên đến trang web, hãy xem qua hướng dẫn ngay nhé!
            </div>
            <div style="display: flex; gap: 8px; justify-content: flex-end;">
                <button id="close-tour-hint" style="background: #f1f3f5; border: none; padding: 6px 12px; border-radius: 6px; font-size: 12px; cursor: pointer; color: #495057;">Để sau</button>
                <button id="start-tour-hint" style="background: #007bff; border: none; padding: 6px 12px; border-radius: 6px; font-size: 12px; cursor: pointer; color: #fff; font-weight: 600;">Xem ngay</button>
            </div>
        `;
        document.body.appendChild(hintBubble);

        document.getElementById('start-tour-hint').onclick = () => {
            hintBubble.classList.remove('active');
            localStorage.setItem('hasSeenGlobalTourHint_' + tourKey, 'true');
            if (onStartTour) onStartTour();
        };

        document.getElementById('close-tour-hint').onclick = () => {
            hintBubble.classList.remove('active');
            localStorage.setItem('hasSeenGlobalTourHint_' + tourKey, 'true');
        };
    }

    setTimeout(() => {
        hintBubble.classList.add('active');
    }, 2000);
};

// === GLOBAL WARNING POPUP SYSTEM ===
function initWarningPopup() {
    const updateWarning = document.getElementById('update-warning');
    const closeWarningBtn = document.getElementById('close-warning');
    const reopenBtn = document.getElementById('reopen-warning-btn');
    
    if (!updateWarning || !closeWarningBtn) return;

    // Hiển thị lần đầu (chỉ ở trang chủ index.html)
    const path = window.location.pathname;
    const isHomePage = path.endsWith('index.html') || path.endsWith('/') || path === '' || path.split('/').pop() === '';
    const hasSeenWarning = localStorage.getItem('hasSeenUpdateWarning');

    if (isHomePage && !hasSeenWarning) {
        setTimeout(() => {
            updateWarning.classList.add('active');
        }, 500);
    }

    // Đóng popup
    closeWarningBtn.onclick = () => {
        updateWarning.classList.remove('active');
        localStorage.setItem('hasSeenUpdateWarning', 'true');
    };

    // Mở lại từ footer
    if (reopenBtn) {
        reopenBtn.onclick = (e) => {
            e.preventDefault();
            updateWarning.classList.add('active');
        };
    }
}

// Gọi init khi footer đã được load (trong Main logic của Promise.all)