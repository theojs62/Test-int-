// Get the mobile menu button and the mobile menu itself
const menuButton = document.getElementById("menu-mobile-button");
const mobileMenu = document.getElementById("menu-mobile");
const menuCloseButton = document.getElementById("menu-mobile-close");
const menuOverlay = document.getElementById("menu-mobile-overlay");

// Function to show the mobile menu
function showMobileMenu() {
  mobileMenu.classList.add("trans-x-0"); // Assuming 'translate-x-0' is the class to show the menu
  menuOverlay.classList.add("opacity-100", "pointer-events-auto"); // Assuming 'opacity-100' and 'pointer-events-auto' are the classes to show overlay
}

// Function to hide the mobile menu
function hideMobileMenu() {
  mobileMenu.classList.remove("trans-x-0");
  menuOverlay.classList.remove("opacity-100", "pointer-events-auto");
}

// Event listener for clicking the mobile menu button to show the menu
menuButton.addEventListener("click", showMobileMenu);

// Event listener for clicking the close button to hide the menu
menuCloseButton.addEventListener("click", hideMobileMenu);

// Event listener for clicking the overlay to hide the menu
menuOverlay.addEventListener("click", hideMobileMenu);

// swiper

var testimonialsSwiper = new Swiper(".swiper-testimonials", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
});
