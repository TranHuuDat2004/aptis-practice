// js/main.js
document.addEventListener("DOMContentLoaded", function () {
    const loadComponent = (selector, url) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const element = document.querySelector(selector);
                if (element) {
                    element.innerHTML = data;
                }
            })
            .then(() => {
                if (selector === '#header-placeholder') {
                    setupNavigation();
                    setActiveLink();
                }
            })
            .catch(error => console.error(`Error loading ${url}:`, error));
    };

    loadComponent('#header-placeholder', 'components/header.html'); // SỬA ĐƯỜNG DẪN
    loadComponent('#footer-placeholder', 'components/footer.html'); // SỬA ĐƯỜNG DẪN

    function setupNavigation() {
        const hamburger = document.getElementById('hamburger-button');
        const navContainer = document.getElementById('nav-links-container');
        const overlay = document.getElementById('overlay');

        if (hamburger && navContainer && overlay) {
            hamburger.addEventListener('click', () => {
                document.body.classList.toggle('nav-open');
            });
            overlay.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
            });
        }
    }

    // function setActiveLink() {
    //     const navLinks = document.querySelectorAll('.nav-links-container a');
    //     const currentPagePath = window.location.pathname.split('/').pop();
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const currentPart = urlParams.get('part');

    //     navLinks.forEach(link => {
    //         try {
    //             const linkUrl = new URL(link.href);
    //             const linkPath = linkUrl.pathname.split('/').pop();
    //             if (linkPath === currentPagePath) {
    //                 if (linkUrl.search.includes(`part=${currentPart}`)) {
    //                     link.classList.add('active');
    //                     const parentLink = link.closest('.dropdown')?.querySelector('.nav-link');
    //                     if (parentLink) parentLink.classList.add('active');
    //                 } else if (!currentPart && linkPath === 'index.html') {
    //                     link.classList.add('active');
    //                 }
    //             }
    //         } catch (e) { }
    //     });
    // }
});