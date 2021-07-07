// navbar-mobil btn-toggol
const navbarFixedMobil = document.querySelector(".navbar-mobil");
const btnToggl = document.querySelector(".navbar-mobil .btn-toggol");
const navbarMobilNavbar = document.querySelector(
  ".navbar-mobil .navbar-mobil__navbar"
);
const brandLogo = document.querySelector(".navbar-mobil__menu .brand-logo img");
const bars = document.querySelector(".navbar-mobil .btn-toggol i");
const firstBarndLogo = "../images/icons/brand_logo.svg";
const secondBarndLogo = "../images/icons/cleanlife.svg";

btnToggl.addEventListener("click", () => {
  if (bars.classList.contains("ic_bars")) {
    bars.classList.remove("ic_bars");
    bars.classList.add("ic_times");
    bars.classList.add("color-active");
    navbarMobilNavbar.classList.add("active");
    navbarFixedMobil.classList.add("navbar-mobil-bg");
    brandLogo.src = firstBarndLogo;
  } else {
    bars.classList.remove("ic_times");
    bars.classList.remove("color-active");
    bars.classList.add("ic_bars");
    navbarMobilNavbar.classList.remove("active");
    navbarFixedMobil.classList.remove("navbar-mobil-bg");
    brandLogo.src = secondBarndLogo;
  }
});

// navbar-fixed Auto
window.addEventListener("scroll", navbarFixedAuto);
navbarFixedAuto();
function navbarFixedAuto() {
  if (window.pageYOffset > 500) {
    navbarFixedMobil.classList.add("navbar-mobil-active");
    // navbarMobilNavbar.classList.remove("active");
  } else {
    navbarFixedMobil.classList.remove("navbar-mobil-active");
  }
}
