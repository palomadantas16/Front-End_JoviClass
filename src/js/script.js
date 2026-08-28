document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            const isActive = navMenu.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", isActive);
        });

        navMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Mensagem enviada! Obrigado por entrar em contato com o JoviClass.");
            form.reset();
        });
    }
});