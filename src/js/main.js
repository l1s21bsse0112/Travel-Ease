document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let isValid = validateForm();

      if (isValid) {
        alert("Thank you for your message! Form submitted successfully.");
        contactForm.reset();
      }
    });
  }

  function validateForm() {
    let isValid = true;
    const inputs = contactForm.querySelectorAll(
      "input[required], textarea[required]"
    );

    inputs.forEach((input) => {
      const formGroup = input.parentElement;
      const errorMessage = formGroup.querySelector(".error-message");
      formGroup.classList.remove("error");
      errorMessage.textContent = "";

      if (input.value.trim() === "") {
        isValid = false;
        formGroup.classList.add("error");
        errorMessage.textContent = "This field is required.";
      } else if (input.type === "email" && !isValidEmail(input.value.trim())) {
        isValid = false;
        formGroup.classList.add("error");
        errorMessage.textContent = "Please enter a valid email address.";
      }
    });

    return isValid;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
