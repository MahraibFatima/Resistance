// Injects shared header, mobile sidebar, overlay, and footer
(function injectLayout() {
    document.addEventListener('DOMContentLoaded', function() {
        // Header
        if (!document.querySelector('header.header')) {
            const header = document.createElement('header');
            header.className = 'header';
            header.innerHTML = `
                <nav class="navbar">
                    <div class="logo">
                    <a href="index.html">
                        <img  src="imgs/outLand.png" alt="Resistance Logo">
                    </div>
                    <div class="content">
                        <ul>
                            <li><a href="tl.html">timeline</a></li>
                            <li><a href="gallery.html">gallery</a></li>
                            <li><a href="poems.html">poems</a></li>
                        </ul>
                    </div>
                    <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-sidebar">
                        <span></span><span></span><span></span>
                    </button>
                </nav>
            `;
            document.body.insertBefore(header, document.body.firstChild);
        }

        // Hamburger button
        if (!document.getElementById('hamburger')) {
            const hamburger = document.createElement('button');
            hamburger.className = 'hamburger';
            hamburger.id = 'hamburger';
            hamburger.setAttribute('aria-label', 'Open menu');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('aria-controls', 'mobile-sidebar');
            hamburger.innerHTML = '<span></span><span></span><span></span>';
            document.body.insertBefore(hamburger, document.body.children[1] || null);
        }

        // Sidebar
        if (!document.getElementById('mobile-sidebar')) {
            const aside = document.createElement('aside');
            aside.className = 'mobile-sidebar';
            aside.id = 'mobile-sidebar';
            aside.setAttribute('aria-hidden', 'true');
            aside.innerHTML = `
                <nav>
                    <ul>
                        <li><a href="tl.html">timeline</a></li>
                        <li><a href="gallery.html">gallery</a></li>
                        <li><a href="poems.html">poems</a></li>
                    </ul>
                </nav>
            `;
            document.body.insertBefore(aside, document.body.children[2] || null);
        }

        // Overlay
        if (!document.getElementById('screen-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'screen-overlay';
            overlay.id = 'screen-overlay';
            document.body.insertBefore(overlay, document.body.children[3] || null);
        }

        // Footer
        if (!document.querySelector('footer')) {
            const footer = document.createElement('footer');
            footer.textContent = 'built with love for 🇵🇸';
            document.body.appendChild(footer);
        }
    });
})();


