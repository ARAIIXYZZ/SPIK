// Simple interactive effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const profileImg = document.querySelector('.profile-img');
    
    // Button hover effects
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Ripple click effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Profile image interaction
    profileImg.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08)';
    });
    
    profileImg.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Lock background function
    function lockBackground() {
        const body = document.querySelector('body');
        const html = document.querySelector('html');
        
        // Ensure background is fixed and covers entire screen
        body.style.backgroundAttachment = 'fixed';
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        body.style.backgroundRepeat = 'no-repeat';
        
        html.style.height = '100%';
        body.style.minHeight = '100vh';
        body.style.overflowX = 'hidden';
    }
    
    // Initialize background lock
    lockBackground();
    
    // Re-lock background on window resize
    window.addEventListener('resize', lockBackground);
    window.addEventListener('orientationchange', lockBackground);
});

// Prevent zoom on double tap
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
});

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
