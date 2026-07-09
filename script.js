document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".hero-content, .hero-image, .intro, .collection, .collection-grid img, .tracker, .details, .features div, .video, .cta"
  );

  elements.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
});
