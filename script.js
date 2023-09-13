document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav a");
  
    // Function to close the mobile menu
    function closeMobileMenu() {
      navbarNav.classList.remove("active");
    }
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - document.querySelector(".navbar").offsetHeight,
            behavior: "smooth",
          });
  
          // Close the mobile menu when a link is clicked on small screens
          if (window.innerWidth < 768) {
            closeMobileMenu();
          }
        }
      });
    });
  
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarNav = document.querySelector(".navbar-nav");
  
    menuToggle.addEventListener("click", function () {
      navbarNav.classList.toggle("active");
    });
  
    // Function to close the mobile menu when clicking outside the menu
    document.addEventListener("click", function (e) {
      if (!menuToggle.contains(e.target) && !navbarNav.contains(e.target)) {
        closeMobileMenu();
      }
    });
  
    // Close the mobile menu when the window is resized to a larger size
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    });
  });
  