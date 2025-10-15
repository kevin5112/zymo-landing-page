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
