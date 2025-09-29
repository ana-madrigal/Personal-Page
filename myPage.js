const multimedia = [
  "img/yo1.jpg",
  "img/yo2.jpg",
  "img/yo5.jpg",
  "img/Stardew.mp4",
  "img/yo5.jpg"
];

const textos = [
  "At the LXVII National Physics Congress, Chihuahua, 2023 📸",
  "Me and my dog Jack 🐶",
  "In the lab 🔬",
  "My farm in Stardew Valley🎮",
  "Me in Animal Crossing 🌴"
];

// Cargar contenido dinámico
multimedia.forEach((url, i) => {
  const slide = document.querySelector(`.slide[data-slide="${i}"]`);
  if (slide) {
    slide.innerHTML = url.endsWith(".mp4")
      ? `
        <video controls autoplay muted loop>
          <source src="${url}" type="video/mp4">
          Tu navegador no soporta video.
        </video>
        <p class="author-info">${textos[i]}</p>
      `
      : `
        <img src="${url}" alt="Imagen personalizada">
        <p class="author-info">${textos[i]}</p>
      `;
  }
});

// --- Lógica del slider ---
let currentSlide = 0;
const totalSlides = multimedia.length;
const slidesContainer = document.querySelector(".slides");

function showSlide(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  currentSlide = index;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});
document.querySelector(".prev").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

document.addEventListener("DOMContentLoaded", () => {

    new Typed("#hi", {
    strings: ["I'm a mexican Physicist who found joy in analysis, code, and the little sparks of clarity that come with learning something new."],
    typeSpeed: 60,
    backSpeed: 40,
    loop: false,
    showCursor: false,
    cursorChar: "|"
  });

  new Typed("#welcome-message", {
    strings: ["Welcome to my personal page!", "¡Bienvenidos a mi página personal!"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
    showCursor: false,
    cursorChar: "|"
  });

  new Typed("#working", {
    strings: ["We are currently working on this!", "¡Estamos trabajando en esto!", "Stay tuned!", "¡Mantente al tanto!"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
    showCursor: false,
    cursorChar: "|"
  });

  new Typed("#typed-aboutme", {
    strings: ["ABOUT ME"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: false,
    showCursor: false,
    cursorChar: "|"
  });
});

function translatePage(lang) {
  var iframe = document.createElement('iframe');
  iframe.src = `https://translate.google.com/translate?hl=${lang}&sl=auto&u=${encodeURIComponent(window.location.href)}`;
  iframe.style.width = '100%';
  iframe.style.height = '100vh';
  iframe.style.border = 'none';
  document.body.innerHTML = '';
  document.body.appendChild(iframe);
}
