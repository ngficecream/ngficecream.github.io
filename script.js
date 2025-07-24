document.addEventListener('DOMContentLoaded', () => {
  // Navbar mobile
  const menuBtn = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // Simple slider logic
  let current = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  function showSlide(idx) {
    slides.forEach((s, i) => { s.style.display = i === idx ? 'block' : 'none'; });
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }
  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }
  showSlide(current);
  setInterval(nextSlide, 3500);
  dots.forEach((dot, idx) => dot.addEventListener('click', () => { current = idx; showSlide(current); }));

  // Newsletter and forms demo
  const newsletter = document.getElementById('newsletter-form');
  if(newsletter) {
    newsletter.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thanks for subscribing! 🎉');
      newsletter.reset();
    });
  }
});
