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
  