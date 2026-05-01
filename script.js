const year = document.querySelector("#year");
const brandMenuButton = document.querySelector(".brand-menu-toggle");
const brandMenuPanel = document.querySelector(".brand-menu-panel");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (brandMenuButton && brandMenuPanel) {
  brandMenuButton.addEventListener("click", () => {
    const isOpen = brandMenuPanel.classList.toggle("open");
    brandMenuButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu =
      brandMenuPanel.contains(event.target) || brandMenuButton.contains(event.target);

    if (!clickedInsideMenu) {
      brandMenuPanel.classList.remove("open");
      brandMenuButton.setAttribute("aria-expanded", "false");
    }
  });
}
