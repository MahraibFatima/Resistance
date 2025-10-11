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

// Poems
function closeAll() {
    document.querySelectorAll('.poem-title').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.poem-content').forEach(c => c.classList.remove('active'));
}

function renderPoems(data) {
    const root = document.getElementById('poems-root');
    if (!root) return;
    root.innerHTML = '';

    data.forEach(poem => {
        const section = document.createElement('div');
        section.className = 'poem-section';

        const title = document.createElement('div');
        title.className = 'poem-title';
        title.textContent = poem.title;

        const content = document.createElement('div');
        content.className = 'poem-content';

        const text = document.createElement('div');
        text.className = 'poem-text';

        poem.verses.forEach(line => {
            if (line === '') {
                const br = document.createElement('br');
                text.appendChild(br);
            } else {
                const p = document.createElement('p');
                p.className = 'verse';
                p.textContent = line;
                text.appendChild(p);
            }
        });

        const author = document.createElement('p');
        author.className = 'author';
        author.textContent = `- ${poem.author}`;
        text.appendChild(author);

        content.appendChild(text);
        section.appendChild(title);
        section.appendChild(content);
        root.appendChild(section);

        title.addEventListener('click', () => {
            const isActive = title.classList.contains('active');
            closeAll();
            if (!isActive) {
                title.classList.add('active');
                content.classList.add('active');
            }
        });

        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.poems && Array.isArray(window.poems)) {
        renderPoems(window.poems);
    }
});


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




function displayTimeline() {
    const container = document.getElementById('timeline-events');
    
    // Sort events by year
    const sortedEvents = [...timelineEvents].sort((a, b) => a.year - b.year);
    
    sortedEvents.forEach((event, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-year">${event.year}</div>
            <div class="timeline-content">
                <div class="timeline-title">${event.title}</div>
                <div class="timeline-description">${event.description}</div>
                <div class="timeline-category ${event.category}">${event.category}</div>
            </div>
        `;
        
        container.appendChild(timelineItem);
    });
}

// Display timeline when page loads
document.addEventListener('DOMContentLoaded', displayTimeline);
