document.addEventListener("DOMContentLoaded", () => {
    // Initial Fade-in Effect for Content
    const content = document.querySelector('.content');
    if (content) {
        content.style.opacity = 0;
        content.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => content.style.opacity = 1, 50);
    }

    // Load Header HTML
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            requestAnimationFrame(initializeHeader); // Ensure header elements exist before running scripts
        })
        .catch(error => console.error('Error loading the header:', error));

    function initializeHeader() {
        const menuButton = document.getElementById('menuButton');
        const mobileNav = document.getElementById('mobileNav');
        const navLinks = document.querySelectorAll(".nav-link, .sign-up");
        const logo = document.getElementById('logo');

        if (logo) {
            logo.style.cursor = "pointer"; // Make logo look clickable
            logo.addEventListener("click", () => {
                window.location.href = "index.html"; // Redirect to index.html
            });
        }

        if (menuButton && mobileNav) {
            const backdrop = document.createElement('div');
            backdrop.className = 'menu-backdrop fade-transition';
            document.body.appendChild(backdrop);

            const toggleMenu = () => {
                const isOpen = mobileNav.classList.toggle('open');
                backdrop.classList.toggle('active', isOpen);
                document.body.style.overflow = isOpen ? 'hidden' : 'auto';
                menuButton.classList.toggle('open', isOpen);
            };

            const closeMenu = () => {
                mobileNav.classList.remove('open');
                backdrop.classList.remove('active');
                document.body.style.overflow = 'auto';
                menuButton.classList.remove('open');
            };

            menuButton.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleMenu();
            });

            backdrop.addEventListener('click', closeMenu);
            document.addEventListener('click', (e) => {
                if (!mobileNav.contains(e.target) && !menuButton.contains(e.target)) {
                    closeMenu();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeMenu();
            });

            mobileNav.addEventListener('click', (e) => {
                if (e.target.tagName === 'A') closeMenu();
            });
        }

        highlightActiveLink(navLinks);
        addPageTransition(navLinks);

        // Dynamically adjust content margin for specific pages
        adjustContentMargin();
        window.addEventListener('resize', adjustContentMargin); // Adjust on window resize
    }

    function highlightActiveLink(navLinks) {
    let currentPage = window.location.pathname.split('/').pop();
    
    // If accessing the root, set it to 'index.html' manually
    if (currentPage === '' || currentPage === '/') {
        currentPage = 'index.html';
    }

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href').endsWith(currentPage)) {
            link.classList.add('active');
        }
    });
}

    

    function addPageTransition(navLinks) {
        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                const href = link.getAttribute("href");
                if (href && !href.startsWith("#") && !href.includes("mailto:")) {
                    e.preventDefault();
                    fadeOutAndNavigate(href);
                }
            });
        });
    }

    function fadeOutAndNavigate(url) {
        const content = document.querySelector('.content');
        if (content) {
            content.style.opacity = 0;
            setTimeout(() => {
                window.location.href = url;
                adjustContentMargin(); // Adjust margin after navigation
            }, 500);
        } else {
            window.location.href = url;
        }
    }

    // Function to adjust content margin based on the current page
    function adjustContentMargin() {
        const header = document.querySelector('.header-bar');
        const content = document.querySelector('.content');

        if (header && content) {
            const currentPage = window.location.pathname.split('/').pop();

            // Define margin rules for specific pages
            const marginRules = {
                "container-activities.html": "0px",
                "id.html": "70px"
                // Add more pages and their margins here if needed
            };

            // Apply the margin if the current page is in the marginRules object
            if (marginRules[currentPage]) {
                content.style.marginTop = marginRules[currentPage];
            } else {
                content.style.marginTop = "0"; // No margin for other pages
            }
        }
    }
});

function addFavicon() {
    // Check if a favicon already exists
    let existingFavicon = document.querySelector("link[rel='icon']");
    
    if (!existingFavicon) {
        let favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.type = "image/png";
        favicon.href = "./assets/Logo.png";
        favicon.loading = "lazy";
        document.head.appendChild(favicon);
    }
}

// Run the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", addFavicon);

