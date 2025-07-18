document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const finalWidth = bar.getAttribute('data-width');
          bar.style.transition = "width 2s ease";
          bar.style.width = finalWidth;
          obs.unobserve(bar); // only animate once
        }
      });
    }, {
      threshold: 0.5
    });

    progressBars.forEach(bar => observer.observe(bar));
  });