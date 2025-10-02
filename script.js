(function initMobileSidebar() {
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.getElementById('hamburger');
        const sidebar = document.getElementById('mobile-sidebar');
        const overlay = document.getElementById('screen-overlay');

        if (!hamburger || !sidebar || !overlay) return;

        function openSidebar() {
            sidebar.classList.add('open');
            overlay.classList.add('show');
            hamburger.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
            sidebar.setAttribute('aria-hidden', 'false');
        }

        function closeSidebar() {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            sidebar.setAttribute('aria-hidden', 'true');
        }

        function toggleSidebar() {
            if (sidebar.classList.contains('open')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        }

        hamburger.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', closeSidebar);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeSidebar();
        });
    });
})();