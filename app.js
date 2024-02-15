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
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    start: "-40% center",
    end: "30% center",
    scrub: true,
    markers: false,
  },
});
tl.set(".box", {
  opacity: 0,
  duration: 3,
});
tl.to(".box", {
  opacity: 1,
  duration: 3,
  y: -50,
});

// ------------------------------ about page circle animation------------------------
