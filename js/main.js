// js/main.js
document.addEventListener("DOMContentLoaded", function() {
    // Hàm tải component
    const loadComponent = (selector, url) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).innerHTML = data;
                // Sau khi tải header, kích hoạt link active
                if (selector === '#header-placeholder') {
                    setActiveLink();
                }
            })
            .catch(error => console.error(`Error loading ${url}:`, error));
    };

    // Tải header và footer
    loadComponent('#header-placeholder', '_header.html');
    loadComponent('#footer-placeholder', '_footer.html');

    // Hàm để đánh dấu link đang active
    function setActiveLink() {
        const navLinks = document.querySelectorAll('.main-nav a.nav-link, .dropdown-content a');
        const currentPagePath = window.location.pathname.split('/').pop(); // Lấy tên file, vd: "reading.html"
        const urlParams = new URLSearchParams(window.location.search);
        const currentPart = urlParams.get('part'); // Lấy part, vd: "2"

        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname.split('/').pop();
            
            // Xử lý cho trang chủ
            if (linkPath === 'index.html' && currentPagePath === 'index.html') {
                link.classList.add('active');
            }
            
            // Xử lý cho các trang có part
            if (linkPath === currentPagePath && link.href.includes(`part=${currentPart}`)) {
                 // Đánh dấu link con trong dropdown
                link.classList.add('active');
                // Đánh dấu cả link cha (Reading)
                const parentLink = link.closest('.dropdown')?.querySelector('.nav-link');
                if (parentLink) {
                    parentLink.classList.add('active');
                }
            }
        });
    }
});