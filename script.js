document.addEventListener('DOMContentLoaded', function() {
    
    const hireButtons = document.querySelectorAll('.hire-creator-btn');
    
    hireButtons.forEach(button => {
        button.addEventListener('click', function() {
            const creatorName = this.getAttribute('data-creator');
            alert('Thank you! The company will contact you soon regarding ' + creatorName + '.');
        });
    });
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            
            alert('Thank you, ' + name + '! Your message has been received. We will get back to you at ' + email + ' soon.');
            
            contactForm.reset();
        });
    }
    
});
