let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Butonlara tıklama
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Noktalara tıklama
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});

// Otomatik kaydırma
setInterval(() => {
  nextSlide();
}, 5000); // 5 saniyede bir kayar
function openLightbox(element) {
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lightbox-content");
  content.innerHTML = ""; // önce temizle

  if (element.tagName === "IMG") {
    const img = document.createElement("img");
    img.src = element.src;
    content.appendChild(img);
  } else if (element.tagName === "VIDEO") {
    const video = document.createElement("video");
    video.src = element.querySelector("source").src;
    video.controls = true;
    video.autoplay = true;
    content.appendChild(video);
  }

  lightbox.classList.add("active");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lightbox-content");
  content.innerHTML = ""; // video/resim temizlensin
  lightbox.classList.remove("active");
}
// Hamburger menü aç/kapa
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if(toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});
