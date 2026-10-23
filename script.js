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

document.querySelectorAll("[data-modal]").forEach((card) => {
  card.addEventListener("click", () => {
    const modal = document.getElementById(card.dataset.modal);
    if (modal) openModal(modal);
  });
});

document.querySelectorAll(".modal-close").forEach((btn) => {
  btn.addEventListener("click", closeModals);
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModals();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    setMenu(false);
    closeModals();
  }
});

// ===== Formulario de contacto: envía por WhatsApp =====
const WHATSAPP_NUMBER = "573132939781";
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("f-nombre").value.trim();
    const empresa = document.getElementById("f-empresa").value.trim();
    const servicio = document.getElementById("f-servicio").value;
    const mensaje = document.getElementById("f-mensaje").value.trim();

    let texto = "Hola, soy " + nombre + ".";
    if (empresa) texto += "\nEmpresa: " + empresa;
    texto += "\nMe interesa: " + servicio;
    if (mensaje) texto += "\nMensaje: " + mensaje;

    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(texto);
    window.open(url, "_blank", "noopener");
  });
}
