// Navbar: adiciona fundo sólido + blur ao rolar além de 80px
const navbar = document.getElementById('navbar');

function handleScroll() {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

// Marca as seções principais para animação de entrada
document.querySelectorAll('.problem-inner, .process-text, .process-steps .step, .pricing-inner, .cta-inner').forEach(el => {
  el.classList.add('reveal');
});

// Intersection Observer: revela elementos ao entrarem na viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
