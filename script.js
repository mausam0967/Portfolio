// Typing animation
const typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const typed2 = new Typed(".typing-2", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Sticky navbar
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 20);
});

// Menu toggle
document.querySelector(".menu-btn").addEventListener("click", function() {
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
});

// Contact Form Handling
(function() {
    // Initialize EmailJS with your public key
    // TODO: Replace "YOUR_PUBLIC_KEY" with the Public Key from your EmailJS account
    emailjs.init("YOUR_PUBLIC_KEY");

    const form = document.getElementById('contact-form');
    const status = document.getElementById('status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable submit button and show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        status.textContent = '';

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Send email using EmailJS
        // TODO: Replace 'YOUR_SERVICE_ID' with the Service ID from your EmailJS account
        // TODO: Replace 'YOUR_TEMPLATE_ID' with the Template ID from your EmailJS account
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
            .then(function() {
                // Show success message
                status.textContent = 'Message sent successfully!';
                status.style.color = 'var(--primary-color)';
                form.reset();
            })
            .catch(function(error) {
                // Show specific error message based on the error
                if (error.text.includes('insufficient authentication scopes')) {
                    status.textContent = 'Authentication error. Please check EmailJS setup.';
                    console.error('EmailJS authentication error. Please ensure proper Gmail permissions are granted.');
                } else {
                    status.textContent = 'Failed to send message. Please try again.';
                    console.error('EmailJS error:', error);
                }
                status.style.color = 'red';
            })
            .finally(function() {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send message';
            });
    });
})();

// Scroll reveal animation
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
} 