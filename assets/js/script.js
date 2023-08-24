'use strict';
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[navbar-link]"); // Change the selector to match your menu item links

navToggler.addEventListener("click", function (event) {
  // Prevent event propagation to the document-level click event
  event.stopPropagation();

  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

// Add click event to each menu item
navLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    // Close the mobile menu
    navbar.classList.remove("active");
    navToggler.classList.remove("active");

    // Prevent event propagation to the parent menu toggler
    event.stopPropagation();
  });
});

// Add click event to the entire document
document.addEventListener("click", function (event) {
  const target = event.target;
  if (!navbar.contains(target)) {
    // Close the mobile menu if the click is outside the menu
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
  }
});
// 

//navToggler.addEventListener("click", function () {
//  navbar.classList.toggle("active");
//  this.classList.toggle("active");
//});

// Add click event to each menu item
//navLinks.forEach(link => {
//  link.addEventListener("click", function (event) {
    // Close the mobile menu
//    navbar.classList.remove("active");
//    navToggler.classList.remove("active");
    
    // Prevent event propagation to the parent menu toggler
//    event.stopPropagation();
//  });
//});

//

//navToggler.addEventListener("click", function () {
//  navbar.classList.toggle("active");
//  this.classList.toggle("active");
//});