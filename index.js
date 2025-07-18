  document.getElementById("newsletter-submit").addEventListener("click", function (e) {
    const emailInput = document.getElementById("newsletter-email");
    const email = emailInput.value.trim();

    if (email === "") {
      e.preventDefault();
      emailInput.style.border = "2px solid red";
      emailInput.placeholder = "Please enter your email";
      emailInput.focus();
    } else {
      emailInput.style.border = ""; // Clear red border if filled
    }
  });


document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll('.progress-bar');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width');
        bar.style.transition = "width 2s ease-in-out";
        bar.style.width = width;
        observer.unobserve(bar); // Run only once
      }
    });
  }, {
    threshold: 0.4
  });

  bars.forEach(bar => observer.observe(bar));
});
