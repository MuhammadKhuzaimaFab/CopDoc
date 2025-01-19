// Select elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

// Function to toggle menu
function toggleMenu() {
  navLinks.classList.toggle("active");
}

// Close menu when clicking on a link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("active");
  }
});

// Event listener for hamburger click
hamburger.addEventListener("click", toggleMenu);

