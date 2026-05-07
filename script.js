document.addEventListener("DOMContentLoaded", function() {

  // -----------------------------
  // 1️⃣ HAMBURGER MENU
  // -----------------------------
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('#nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // -----------------------------
  // 2️⃣ FADE-IN SEZIONI
  // -----------------------------
  function checkSections() {
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        sec.classList.add('visible');
      }
    });
  }

  // Controlla al caricamento e allo scroll
  checkSections(); // controllo iniziale
  window.addEventListener('scroll', checkSections);

  // -----------------------------
  // 3️⃣ FORM CONTATTI
  // -----------------------------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // blocca invio reale
      this.style.display = 'none';
      const formMessage = document.getElementById('formMessage');
      if(formMessage){
        formMessage.style.display = 'block';
      }
    });
  }

});