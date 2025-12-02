// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Set custom validation messages in English
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('invalid', function(e) {
                e.preventDefault();
                
                // Clear previous custom message
                this.setCustomValidity('');
                
                // Set custom English messages based on validation type
                if (this.validity.valueMissing) {
                    this.setCustomValidity('Please fill out this field.');
                } else if (this.validity.typeMismatch && this.type === 'email') {
                    this.setCustomValidity('Please include an "@" in the email address. "' + this.value + '" is missing an "@".');
                } else if (this.validity.patternMismatch) {
                    this.setCustomValidity('Please match the requested format.');
                }
            });
            
            // Clear custom message on input
            input.addEventListener('input', function() {
                this.setCustomValidity('');
            });
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Create mailto link
            const mailtoLink = `mailto:support@hambero.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message (optional)
            alert('Thank you for your message! Your email client will open to send the message.');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        // Set custom validation messages in English
        const formInputs = loginForm.querySelectorAll('input');
        formInputs.forEach(input => {
            input.addEventListener('invalid', function(e) {
                e.preventDefault();
                
                // Clear previous custom message
                this.setCustomValidity('');
                
                // Set custom English messages based on validation type
                if (this.validity.valueMissing) {
                    this.setCustomValidity('Please fill out this field.');
                } else if (this.validity.typeMismatch && this.type === 'email') {
                    this.setCustomValidity('Please include an "@" in the email address. "' + this.value + '" is missing an "@".');
                }
            });
            
            // Clear custom message on input
            input.addEventListener('input', function() {
                this.setCustomValidity('');
            });
        });

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;

            // For demo purposes, show alert
            // In production, this would connect to your backend authentication system
            alert('Login functionality would be implemented here.\n\nEmail: ' + email + '\nRemember me: ' + remember);
            
            // You can add your authentication logic here
            // Example: redirect to dashboard after successful login
            // window.location.href = 'dashboard.html';
        });
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation
    document.querySelectorAll('.feature-card, .product-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

