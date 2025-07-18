const form = document.getElementById("contactForm");
  const phoneInput = document.getElementById("phone");

  // Restrict phone input to digits only
  phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, ""); // Remove non-digit characters
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop actual submission

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Validation
    if (!name.value.trim()) {
      alert("Please fill in your name.");
      name.focus();
      return;
    }

    if (!email.value.trim() || !email.value.includes("@gmail.com")) {
      alert("Please enter a valid Gmail address (e.g., youremail@gmail.com).");
      email.focus();
      return;
    }

    if (!phone.value.trim()) {
      alert("Please enter your phone number.");
      phone.focus();
      return;
    }

    if (!subject.value.trim()) {
      alert("Please enter a subject.");
      subject.focus();
      return;
    }

    if (!message.value.trim()) {
      alert("Please enter your message.");
      message.focus();
      return;
    }

    // If all passes
    alert("Thank you! Your message has been submitted.");
    form.reset();
  });