// category slider
if (document.querySelector("#category-slider")) {
  let categorySlider = tns({
    container: "#category-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    navPosition: "bottom",
    navContainer: "#customize-thumbnails",
    navAsThumbnails: true,
    controls: true,
    controlsPosition: "bottom",
    mouseDrag: true,
    animateDelay: 1000,
    rewind: true,
    touch: true,
    swipeAngle: 60,
    onInit: loadWideImages,
    reponsive: {
      761: {
        nav: false,
      },
    },
  });

  var customizedFunction = function (info) {
    if (info.navItems[info.displayIndex - 1]) {
      const src = info.navItems[info.displayIndex - 1].dataset.image;
      document.querySelector(".header-bg .img img").src = src;
      if (info.navItems[info.displayIndex - 1].dataset.loaded == "true") {
        info.navItems[info.displayIndex - 1].dataset.image =
          info.navItems[info.displayIndex - 1].dataset.src;
      } else {
        var imgs = [];
        imgs[info.displayIndex - 1] = new Image();
        imgs[info.displayIndex - 1].src =
          info.navItems[info.displayIndex - 1].dataset.src;
        imgs[info.displayIndex - 1].onload = function () {
          if (imgs[info.displayIndex - 1].complete) {
            info.navItems[info.displayIndex - 1].dataset.image =
              info.navItems[info.displayIndex - 1].dataset.src;
            document.querySelector(".header-bg .img img").src =
              info.navItems[info.displayIndex - 1].dataset.src;
          }
        };
      }
    }
  };

  categorySlider.events.on("indexChanged", customizedFunction);

  //loading wide images
  function loadWideImages() {
    const customizeThumbnails = document
      .getElementById("customize-thumbnails")
      .querySelectorAll("li");
    var imgs = [];

    customizeThumbnails.forEach(function (item, index) {
      imgs[index] = new Image();
      imgs[index].src = item.dataset.src;
      imgs[index].onload = function () {
        if (imgs[index].complete) {
          item.dataset.loaded = "true";
          item.dataset.image = imgs[index].src;
          if (index == 0) {
            document.querySelector(".header-bg .img img").dataset.src =
              imgs[index].src;
          }
        }
      };
    });
  }
}

// secProjectImages
if (document.querySelector("#sec-project__images")) {
  let secProjectImages = tns({
    container: "#sec-project__images",
    items: 1,
    navPosition: "bottom",
    controls: true,
    controlsPosition: "bottom",
    mouseDrag: true,
    rewind: true,
    nav: false,
    controlsText: [
      `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.9167 17L7.08341 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17 26.9167L7.08333 17.0001L17 7.08341" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
      `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.08325 17H26.9166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17 7.08325L26.9167 16.9999L17 26.9166" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    ],
  });
}
// secEquipmentSlider
if (document.querySelector("#sec-equipment-slider")) {
  let secEquipmentSlider = tns({
    container: "#sec-equipment-slider",
    swipeAngle: false,
    speed: 400,
    navPosition: "bottom",
    controls: false,
    controlsPosition: "bottom",
    mouseDrag: true,
    rewind: true,
    nav: true,
    responsive: {
      1200: {
        items: 3,
        gutter: 160,
      },
      992: {
        gutter: 140,
      },
      768: {
        items: 2,
        gutter: 160,
      },
    },
  });
}

// secClientSlider
if (document.querySelector("#sec-client-slider")) {
  let secClientSlider = tns({
    container: "#sec-client-slider",
    swipeAngle: false,
    speed: 400,
    navPosition: "bottom",
    controls: false,
    controlsPosition: "bottom",
    mouseDrag: true,
    rewind: true,
    nav: true,
    responsive: {
      1200: {
        items: 3,
      },
      992: {
        gutter: 52,
      },
      768: {
        items: 2,
        gutter: 40,
      },
      200: {
        items: 1,
        gutter: 40,
      },
    },
  });
}

// header-fixed
window.addEventListener("scroll", navbarAoutoControl);
const navbar = document.querySelector(".navbar");
const navbarFixed = document.querySelector("div.navbar-fixed");
function navbarAoutoControl() {
  if (window.pageYOffset < 500) {
    navbarFixed.style.display = "none";
  } else {
    if (document.body.offsetWidth > 1200) {
      navbarFixed.style.display = "block";
    }
  }
}

window.addEventListener("resize", navbarWidthResize);
const navbarMobil = document.querySelector(".navbar-mobil");
navbarWidthResize();
function navbarWidthResize() {
  if (document.body.offsetWidth < 1200) {
    navbar.style.display = "none";
    navbarFixed.style.display = "none";
    navbarMobil.style.display = "block";
    if (document.body.offsetWidth < 922) {
    }
  } else {
    navbar.style.display = "flex";
    navbarFixed.style.display = "none";
    navbarMobil.style.display = "none";
  }
}

// btnUp
const btnUp = document.querySelector(".btn-up");
btnUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", srollBtnUp);
window.addEventListener("resize", srollBtnUp);
srollBtnUp();
function srollBtnUp() {
  if (window.pageYOffset < 500) {
    btnUp.style.display = "none";
  } else {
    btnUp.style.display = "flex";
  }

  if (document.body.offsetWidth < 820) {
    btnUp.classList.add("btn-up-change");
  } else {
    btnUp.classList.remove("btn-up-change");
  }

  if (window.pageYOffset > 7100) {
    btnUp.style.bottom = "523px";
  } else {
    btnUp.style.bottom = "40px";
  }
}

// Read more card__btn
if (document.querySelector(".card .card__body")) {
  const readMore = document.querySelectorAll(".card");
  const cardList = document.querySelectorAll(".card .card__list");
  const cardLink = document.querySelectorAll(".card .card__link a");

  function cardAouto(number, callBack) {
    readMore.forEach((item, index) => {
      if (callBack === "mouseover") {
        item.addEventListener(callBack, function () {
          if (index === number) {
            cardList.forEach((itemList, indexInit) => {
              if (index === indexInit) {
                itemList.classList.add("active");
                item.classList.add("active");
                cardLink.forEach((link, indexLink) => {
                  if (indexLink === indexInit) {
                    link.textContent = "Подробнее";
                  }
                });
              }
            });
          }
        });
      } else {
        item.addEventListener(callBack, function () {
          if (index === number) {
            cardList.forEach((itemList, indexInit) => {
              if (index === indexInit) {
                itemList.classList.remove("active");
                item.classList.remove("active");
                cardLink.forEach((link, indexLink) => {
                  if (indexLink === indexInit) {
                    link.textContent = "Читать далее";
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  readMore.forEach((item, index) => {
    item.addEventListener("mouseover", () => cardAouto(index, "mouseover"));
    item.addEventListener("mouseout", () => cardAouto(index, "mouseout"));
  });
}

// navbar-mobil btn-toggol
if (document.querySelector("header .category")) {
  const navbarFixedMobil = document.querySelector(".navbar-mobil");
  const btnToggl = document.querySelector(".navbar-mobil .btn-toggol");
  const navbarMobilNavbar = document.querySelector(
    ".navbar-mobil .navbar-mobil__navbar"
  );
  const brandLogo = document.querySelector(
    ".navbar-mobil__menu .brand-logo img"
  );
  const bars = document.querySelector(".navbar-mobil .btn-toggol i");
  const firstBarndLogo = "./images/icons/brand_logo.svg";
  const secondBarndLogo = "./images/icons/cleanlife.svg";

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
    } else {
      navbarFixedMobil.classList.remove("navbar-mobil-active");
    }
  }
}

// modal window
function modalWindows(name) {
  this.order = document.getElementById(name);
  const modalWindow = document.getElementById("modal");
  const modalCloumn = document.getElementById("modal__cloumn");
  const modalClose = document.getElementById("btn-close");

  if (this.order) {
    this.order.addEventListener("click", () => {
      modalWindow.classList.add("modal-active");
      modalCloumn.classList.add("modal__cloumn-active");
    });
    if (modalClose) {
      modalClose.addEventListener("click", () => {
        modalWindow.classList.remove("modal-active");
      });
    }
  }

  // window.onclick = function (e) {
  //   if (
  //     e.target.id !== "first-order" &&
  //     e.target.id !== "modal__cloumn" &&
  //     modalWindow.classList.contains("modal-active")
  //   ) {
  //     modalWindow.classList.remove("modal-active");
  //     modalCloumn.classList.remove("modal__cloumn-active");
  //   }
  // };
}

const firstModal = new modalWindows("first-order");
const secondModal = new modalWindows("second-order");
const thirdModal = new modalWindows("third-order");

// languageBasic
if(document.getElementById('first-lang-basic')){
  function languageControl(firstElement, secondElement, name) {
  const languageBasic = document.getElementById(firstElement);
  const langContent = document.getElementById(secondElement);

    languageBasic.addEventListener("click", () => {
      langContent.classList.toggle("lang__content-active");
    });

  window.addEventListener("click", function (e) {
    if (
      e.target.id !== `${name}-lang-basic` &&
      e.target.id !== `${name}-lang__content`
    ) {
      langContent.classList.remove("lang__content-active");
    }
  });
}
languageControl("first-lang-basic", "first-lang__content", "first");
languageControl("second-lang-basic", "second-lang__content", "second");
languageControl("third-lang-basic", "third-lang__content", "third");
}


// navbar menu-change__link
function navbarMenuChange() {
  const menuChangeLink = document.querySelectorAll(".menu-change__link");
  const navbarMenuInit = document.querySelectorAll(".menu-init");

  menuChangeLink.forEach((item, index) => {
    item.addEventListener("click", () => {
      navbarMenuInit.forEach((itemInit, indexInit) => {
        if (indexInit === index) {
          itemInit.classList.toggle("active");
        }
      });
    });
  });

  window.addEventListener("click", function (e) {
    let navbarlinkBoolean = false;
    navbarMenuInit.forEach((item, index) => {
      if (item.classList.contains("active")) {
        navbarlinkBoolean = item.classList.contains("active");
      }
    });

    if (
      e.target.classList[0] !== "menu-init" &&
      e.target.classList[0] !== "menu-change__link" &&
      navbarlinkBoolean
    ) {
      navbarMenuInit.forEach((item, index) => {
        item.classList.remove("active");
      });
    }
  });
}

if (document.querySelector(".menu-change__link")) {
  navbarMenuChange();
}

if (document.querySelector(".sec-facilities")) {
  document.querySelector(".sec-facilities").parentNode.style.padding = "0";
}
if (document.querySelector(".sec-project")) {
  document.querySelector(".sec-project").childNodes[1].style.padding = "0";
}

//modal-window images
if (document.querySelector(".sec-project__img")) {
  const modalDataset = document.querySelectorAll(".sec-project__img");
  const modalWindow = document.getElementById("modal-image");
  const modalBasicWindow = document.getElementById("modal-basic");
  const modalClose = document.querySelector(".modal-close");

  modalDataset.forEach((item, index) => {
    item.addEventListener("click", () => {
      modalWindow.src = item.dataset.src;
      modalBasicWindow.classList.add("active");
    });
  });

  modalClose.addEventListener("click", () => {
    modalBasicWindow.classList.remove("active");
  });
}

// services_details tabs
function tabsFunction() {
  document.querySelector(".tabs").addEventListener("click", function (e) {
    document.querySelectorAll(".tab-link").forEach((item, index) => {
      item.classList.remove("active");
    });

    if (
      e.target.classList.contains("tab-link") &&
      !e.target.classList.contains("active")
    ) {
      e.target.classList.add("active");

      const tabContentName = e.target.dataset.content;

      document
        .querySelector(`.tabs-content-item.active`)
        .classList.remove("active");
      const tabContent = document.getElementById(tabContentName);

      tabContent.classList.add("active");
    }
  });
}
if (document.querySelector(".tabs")) {
  tabsFunction();
}
