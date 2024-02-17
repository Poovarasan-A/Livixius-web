// ------------------------------- active page highlight on navbar ----------------------
document.addEventListener("DOMContentLoaded", () => {
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = document.querySelectorAll("section");

  let currentPage = "home";

  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 220) {
        currentPage = section.id;
      }
    });

    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
      if (navLink.getAttribute("href").substring(1) === currentPage) {
        navLink.classList.add("active");
      }
    });
  });
});

//---------------------------------menu navigation -----------------------------
let menu = document.querySelector(".menu");
let menuList = document.querySelector("nav ul");

menu.addEventListener("click", () => {
  menuList.classList.toggle("showmenu");
});

function hideMenu() {
  menuList.classList.remove("showmenu");
}

// ------------------------------ welcome page image animation------------------------
gsap.set(".wlcmImg", {
  opacity: 0,
});

gsap.to(".wlcmImg", {
  opacity: 1,
  duration: 3,
  x: 20,
});

// ------------------------------ features box animation------------------------
AOS.init({
  delay: 300,
  duration: 1200,
  once: false,
});
// ------------------------------ about page circle animation------------------------

let tl2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".circle1",
      start: "-200% center",
      end: "80% center",
      scrub: 6,
      markers: false,
    },
  })
  .to(".circle1", {
    y: -250,
    duration: 3,
    backgroundColor: "var(--extralight-color)",
    yoyo: true,
  });

let tl3 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".circle2",
      start: "60% center",
      end: "340% center",
      scrub: 6,
      markers: false,
    },
  })
  .to(".circle2", {
    y: 300,
    duration: 3,
    backgroundColor: "var(--primary-color)",
    yoyo: true,
  });
