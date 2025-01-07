document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.querySelector('.transition-overlay');
  
  // Hide overlay on load
  overlay.style.opacity = '0';
  overlay.style.pointerEvents = 'none';
  
  // Add click event listener to all links
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';
      setTimeout(function() {
        window.location.href = href;
      }, 300); // Adjust the delay to match the transition duration
    });
  });
});
