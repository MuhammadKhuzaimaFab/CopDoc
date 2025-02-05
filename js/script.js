function qa(element) {
    const answer = element.parentElement.nextElementSibling;
    
    if (answer.style.display === "block") {
      answer.style.display = "none";
      element.style.transform = "rotate(0deg)";
    } else {
      answer.style.display = "block";
      element.style.transform = "rotate(45deg)";
    }
  }
  let hamburger = document.getElementById("hamburger");
  let navLinks = document.querySelector(".nav-links");
  
  function toggleMenu() {
    navLinks.classList.toggle("active"); // Toggle the `active` class on nav-links
  }
  
  hamburger.addEventListener("click", toggleMenu);
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // 320: {  // For small screens (mobile)
    //   slidesPerView: 1,
    //   spaceBetween: 10,
    // },
    768: {  // For tablets
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: { // For desktops
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
