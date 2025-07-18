function showSection(event, id) {
    event.preventDefault(); 

    // Show only the selected section
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = (section.id === id) ? 'block' : 'none';
    });

    // Update active class
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');

    // Move progress bar
    const progressBar = document.getElementById('progressBar');
    const navLinks = Array.from(document.querySelectorAll('#tabNav .nav-link'));
    const index = navLinks.indexOf(event.target);
    const percent = (100 / navLinks.length) * (index + 1);
    progressBar.style.width = percent + '%';
}



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