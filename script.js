(function initRandomQuote() {
    document.addEventListener('DOMContentLoaded', function() {
        const availableQuotes = (typeof quotes !== 'undefined' && Array.isArray(quotes)) 
            ? quotes 
            : [];

        if (!Array.isArray(availableQuotes) || availableQuotes.length === 0) {
            console.warn('No quotes available');
            document.getElementById('quote-text').textContent = 'No quotes available';
            return;
        }

        const quoteTextEl = document.getElementById('quote-text');
        const quoteAuthorEl = document.getElementById('quote-author');
        const newQuoteBtn = document.getElementById('new-quote-btn');

        if (!quoteTextEl || !quoteAuthorEl || !newQuoteBtn) {
            console.error('Required elements not found');
            return;
        }

        function getRandomIndex() {
            return Math.floor(Math.random() * availableQuotes.length);
        }

        function renderRandomQuote() {
            const randomIndex = getRandomIndex();
            const quote = availableQuotes[randomIndex];
            
            quoteTextEl.textContent = `"${quote.text}"`;
            quoteAuthorEl.textContent = quote.author ? `— ${quote.author}` : '';
        }

        newQuoteBtn.addEventListener('click', renderRandomQuote);
        
        renderRandomQuote();
    });
})();


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