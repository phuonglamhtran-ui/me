   //Custom JS --// 
    <script>
        // Typing Effect Initialization
        document.addEventListener('DOMContentLoaded', function () {
            if (document.querySelector('.typing')) {
                new Typed('.typing', {
                    strings: ["Data Analyst", "BI Developer", "AI Enthusiast", "Space Enthusiast"],
                    loop: true,
                    typeSpeed: 65,
                    backSpeed: 65,
                    backDelay: 2000
                });
            }
            
            // Mobile Menu Toggle Logic
            const openBtn = document.getElementById('mobile-menu-open-btn');
            const drawer = document.getElementById('mobile-menu-drawer');
            let isMenuOpen = false;

            const toggleMobileMenu = () => {
                isMenuOpen = !isMenuOpen;
                // Toggle 'hidden' class based on menu state
                drawer.classList.toggle('hidden', !isMenuOpen);
                // Change icon (Menu <-> Close)
                openBtn.querySelector('i').className = isMenuOpen ? 'bx bx-x' : 'bx bx-menu';
            };

            openBtn.addEventListener('click', toggleMobileMenu);

            // Close menu when a link is clicked (for seamless navigation)
            const navLinks = drawer.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (isMenuOpen) {
                        // Use a slight delay to allow the navigation to register before closing
                        setTimeout(toggleMobileMenu, 200); 
                    }
                });
            });
        });
    </script>