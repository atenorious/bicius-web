const WHATSAPP_NUMERO = "56934173749";
const INSTAGRAM_USUARIO = "bici.us";

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const abierto = nav.classList.toggle("is-open");
  menuToggle.classList.toggle("is-active");
  menuToggle.setAttribute("aria-expanded", abierto);
});

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.classList.remove("is-active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const botonesWhatsapp = document.querySelectorAll(".js-whatsapp");
botonesWhatsapp.forEach((boton) => {
  boton.addEventListener("click", (evento) => {
    evento.preventDefault();
    const producto = boton.dataset.producto;
    const precio = boton.dataset.precio;
    let mensaje = "Hola BICIUS! Quiero hacer un pedido de la primera colección.";
    if (producto) {
      mensaje = `Hola BICIUS! Me interesa el poleron "${producto}" (${precio}). ¿Está disponible?`;
    }
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });
});

const elementosParaRevelar = document.querySelectorAll(".reveal");
const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("is-visible");
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.15 }
);
elementosParaRevelar.forEach((el) => observador.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
