document.addEventListener('DOMContentLoaded', () => {
    
    // Bring a Guest Toggle
    const guestCheckbox = document.getElementById('bring-guest');
    const guestDetails = document.getElementById('guest-details');
    const guestNameInput = document.getElementById('guest-name');

    if (guestCheckbox && guestDetails) {
        guestCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                guestDetails.classList.remove('hidden');
                guestNameInput.setAttribute('required', 'true');
                // Smoothly focus/scroll if needed, or just display
                guestDetails.style.opacity = '0';
                setTimeout(() => {
                    guestDetails.style.transition = 'opacity 0.3s ease';
                    guestDetails.style.opacity = '1';
                }, 10);
            } else {
                guestDetails.classList.add('hidden');
                guestNameInput.removeAttribute('required');
                guestNameInput.value = ''; // Clear input if unchecked
            }
        });
    }

    // Form Submission Handling
    const form = document.getElementById('workshop-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get values
            const formData = new FormData(form);
            const name = formData.get('full-name');
            const guest = formData.get('bring-guest');
            const guestName = formData.get('guest-name');
            
            let message = `Thank you, ${name}! Your registration has been received.`;
            if (guest) {
                message += ` We also look forward to welcoming ${guestName}!`;
            }
            
            // Simulate API call / Show Success
            alert(message + "\n\n(This is a demo site - no data was actually sent)");
            
            // Reset form
            form.reset();
            guestDetails.classList.add('hidden');
        });
    }

    // Smooth Scroll for older browsers (optional polyfill-like behavior if needed)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
