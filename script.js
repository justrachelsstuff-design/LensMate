document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(
    ".hero-text, .hero-image-card, .section, .card, .product-section, .quote-box, .cta"
  );

  items.forEach(item => item.classList.add("fade"));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.15
  });

  items.forEach(item => observer.observe(item));
});
