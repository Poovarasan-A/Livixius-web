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

gsap.to(".bgAnim1,.bgAnim2", {
  x: -100,
  duration: 2,
});

gsap.set(".wlcmImg", {
  opacity: 0,
});

gsap.to(".wlcmImg", {
  opacity: 1,
  duration: 3,
  x: 20,
});

gsap.set(".box", {
  opacity: 0,
});

gsap.to(".box", {
  opacity: 1,
  duration: 1,
  yoyo: true,
  ease: "power1",
  stagger: {
    amount: 2,
    each: 0.5,
    from: 0,
  },
});
