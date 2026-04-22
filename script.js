const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const cornerMenuButton = document.querySelector(".corner-menu-toggle");
const cornerMenuPanel = document.querySelector(".corner-menu-panel");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

if (cornerMenuButton && cornerMenuPanel) {
  cornerMenuButton.addEventListener("click", () => {
    const isOpen = cornerMenuPanel.classList.toggle("open");
    cornerMenuButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu =
      cornerMenuPanel.contains(event.target) || cornerMenuButton.contains(event.target);

    if (!clickedInsideMenu) {
      cornerMenuPanel.classList.remove("open");
      cornerMenuButton.setAttribute("aria-expanded", "false");
    }
  });
}
