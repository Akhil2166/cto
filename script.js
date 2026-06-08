document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Mobile Menu Toggle (Simplified)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });

    // Form Submission Handling
    const appointmentForm = document.getElementById('appointmentForm');
    
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation feedback
        const submitBtn = appointmentForm.querySelector('button');
        const originalText = submitBtn.innerText;
        
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you! Your appointment request has been sent. We will contact you shortly.');
            appointmentForm.reset();
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });

    // Smooth Scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
