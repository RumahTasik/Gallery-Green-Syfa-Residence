// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilang kan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Slide Show Auto

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Ambil elemen
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];
const navbar = document.getElementById("navbar");

// Ambil semua gambar dengan class "modal-trigger"
const images = document.querySelectorAll(".modal-trigger");

// Loop setiap gambar supaya bisa diklik
images.forEach((img) => {
  img.addEventListener("click", function (e) {
    e.stopPropagation();
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    navbar.style.display = "none"; // sembunyikan navbar
  });
});

// Tombol close
closeBtn.onclick = function () {
  modal.style.display = "none";
  navbar.style.display = "flex"; // tampilkan navbar lagi
};

// Jika klik area luar gambar → modal tertutup
modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    navbar.style.display = "flex";
  }
};
