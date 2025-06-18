// Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menu-mobile');
    const navbar = document.querySelector('.navbar');
    
    menuMobile.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.classList.toggle('fa-times');
    });
    
    // Fechar menu quando clica no link
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuMobile.classList.remove('fa-times');
        });
    });
    
    // Efeito header scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Fomulário
    const contactForm = document.getElementById('form-contato');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
            this.reset();
        });
    }
    
    // Notícias
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            alert(`Obrigado por assinar nossa newsletter com o email ${emailInput.value}`);
            emailInput.value = '';
        });
    }
});