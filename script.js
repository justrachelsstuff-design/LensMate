document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".hero-text, .hero-card, .features, .feature-card, .product, .video, .cta"
  );

  elements.forEach(element => {
    element.classList.add("fade");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});
