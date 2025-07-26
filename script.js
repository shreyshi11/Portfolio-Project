
  document.addEventListener("DOMContentLoaded", () => {
    // Dark mode toggle
    const toggleButton = document.querySelector(".dark-mode-toggle");
    if (toggleButton) {
      toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  });

