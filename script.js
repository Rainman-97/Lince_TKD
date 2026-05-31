const year = document.querySelector("#year");
const brandMenuButton = document.querySelector(".brand-menu-toggle");
const brandMenuPanel = document.querySelector(".brand-menu-panel");
const ethicsOpen = document.querySelector("[data-ethics-open]");
const ethicsModal = document.querySelector("#ethics-modal");
const ethicsClose = document.querySelector(".ethics-close");

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

function openEthicsModal() {
  if (!ethicsModal) return;
  ethicsModal.classList.add("open");
  ethicsModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeEthicsModal() {
  if (!ethicsModal) return;
  ethicsModal.classList.remove("open");
  ethicsModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (ethicsOpen) {
  ethicsOpen.addEventListener("click", openEthicsModal);
}

if (ethicsClose) {
  ethicsClose.addEventListener("click", closeEthicsModal);
}

if (ethicsModal) {
  ethicsModal.addEventListener("click", (event) => {
    if (event.target === ethicsModal) closeEthicsModal();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeEthicsModal();
});
