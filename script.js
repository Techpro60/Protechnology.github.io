// ===== Menú móvil =====
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

function setMenu(open) {
  nav.classList.toggle("open", open);
  menuBtn.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
}

menuBtn.addEventListener("click", () => {
  setMenu(!nav.classList.contains("open"));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// ===== Ventanas emergentes del Portafolio =====
function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeModals() {
  document.querySelectorAll(".modal.open").forEach((modal) => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  });
  document.body.classList.remove("no-scroll");
}

// Abrir al tocar una tarjeta del portafolio
document.querySelectorAll("[data-modal]").forEach((card) => {
  card.addEventListener("click", () => {
    const modal = document.getElementById(card.dataset.modal);
    if (modal) openModal(modal);
  });
});

// Cerrar con la X
document.querySelectorAll(".modal-close").forEach((btn) => {
  btn.addEventListener("click", closeModals);
});

// Cerrar al tocar fuera de la ventana
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModals();
  });
});

// Cerrar con la tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    setMenu(false);
    closeModals();
  }
});
