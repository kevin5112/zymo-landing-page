// scroll from "Inquire Now" button to contact form
document.addEventListener("DOMContentLoaded", () => {
  const inquireBtn = document.getElementById("inquireBtn");
  const contactSection = document.getElementById("contact");

  if (inquireBtn && contactSection) {
    inquireBtn.addEventListener("click", (event) => {
      event.preventDefault();
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.style.background = type === "error" ? "#f44336" : "#4caf50";
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ok =
      document.getElementById("firstName").value.trim() &&
      document.getElementById("lastName").value.trim() &&
      document.getElementById("company").value.trim() &&
      document.getElementById("role").value.trim();

    if (ok) {
      form.reset();
      showToast("Thanks! Your message was sent successfully.");
    } else {
      showToast("Please fill out all required fields.", "error");
    }
  });
});
