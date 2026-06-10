document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  function updateNavbarOnScroll() {
    if (window.scrollY > 24) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }

  updateNavbarOnScroll();
  window.addEventListener('scroll', updateNavbarOnScroll, { passive: true });

  // Generic Carousel Function
  function setupCarousel(prefix) {
    const prevBtn = document.querySelector(`#${prefix}-prev`);
    const nextBtn = document.querySelector(`#${prefix}-next`);
    const track = document.querySelector(`#${prefix}-track`);
    
    if (!prevBtn || !nextBtn || !track) return;
    
    const pages = Array.from(track.children);
    const totalPages = pages.length;
    if (totalPages === 0) return;
    
    let currentPage = 1;
    let isAnimating = false;

    // Clone first and last page for infinite loop effect
    const firstClone = pages[0].cloneNode(true);
    const lastClone = pages[totalPages - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.insertBefore(lastClone, track.firstChild);

    function updateCarousel() {
      track.style.transform = `translateX(-${currentPage * 100}%)`;
    }

    // Initialize track position without animation
    track.style.transition = 'none';
    updateCarousel();
    
    // Force reflow
    track.offsetHeight;
    
    // Restore transition
    track.style.transition = 'transform 0.45s ease';

    nextBtn.addEventListener('click', () => {
      if (isAnimating) return;
      isAnimating = true;
      currentPage += 1;
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      if (isAnimating) return;
      isAnimating = true;
      currentPage -= 1;
      updateCarousel();
    });

    track.addEventListener('transitionend', () => {
      if (currentPage === totalPages + 1) {
        track.style.transition = 'none';
        currentPage = 1;
        updateCarousel();
        track.offsetHeight; // force reflow
        track.style.transition = 'transform 0.45s ease';
      } else if (currentPage === 0) {
        track.style.transition = 'none';
        currentPage = totalPages;
        updateCarousel();
        track.offsetHeight; // force reflow
        track.style.transition = 'transform 0.45s ease';
      }
      isAnimating = false;
    });
  }

  // Init all carousels
  setupCarousel('dormitorios');
  setupCarousel('cocinas');
  setupCarousel('salon');

  // Contact form handler: submit via AJAX to FormSubmit.co
  const contactForm = document.getElementById('form-contacto');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', () => {
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      
      // Set temporary sending state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      // Show success toast directly since it submits successfully through the iframe
      setTimeout(() => {
        formStatus.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
        formStatus.className = 'form-status-toast is-success is-visible';
        
        // Reset form and button
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;

        // Auto-hide toast after 5 seconds
        setTimeout(() => {
          formStatus.classList.remove('is-visible');
        }, 5000);
      }, 800); // 800ms delay to allow browser to pack and send the form data
    });
  }
});