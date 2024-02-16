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

// ------------------------------ background circle animation------------------------
gsap.to(".bgAnim1,.bgAnim2", {
  x: -100,
  duration: 2,
});

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
// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".box",
//     start: "-40% center",
//     end: "30% center",
//     scrub: true,
//     markers: false,
//   },
// });
// tl.set(".box", {
//   opacity: 0,
//   duration: 3,
// });
// tl.to(".box", {
//   opacity: 1,
//   duration: 3,
//   y: -50,
// });

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
    backgroundColor: "#ab9ff2d8",
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
    backgroundColor: "#ab9ff228",
    yoyo: true,
  });
