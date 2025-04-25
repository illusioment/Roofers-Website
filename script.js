// Unified mobile menu handling and other site-wide functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Resource tabs functionality (if on resources page)
    const tabButtons = document.querySelectorAll('.tab-button');
    const resourcesContents = document.querySelectorAll('.resources-content');

    if (tabButtons.length > 0 && resourcesContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                resourcesContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks.length > 0 && navToggle) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
});