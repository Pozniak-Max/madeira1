document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href').substring(1);
          const target = document.getElementById(targetId);
          
          if (target) {
              window.scrollTo({
                  top: target.offsetTop - 50,
                  behavior: 'smooth'
              });
          }
      });
  });
});
// Add this JavaScript to your HTML file
document.addEventListener("DOMContentLoaded", function() {
  var hero = document.querySelector(".hero");
  var heroContent = document.querySelector(".hero-content");

  var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      hero.classList.add("active");
    } else {
      hero.classList.remove("active");
    }
  });

  observer.observe(heroContent);
});
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  menuToggle.addEventListener('click', function () {
    mobileNav.classList.toggle('show');
  });
});
// animations.js
document.addEventListener("DOMContentLoaded", function () {
  // Init ScrollMagic controller
  var controller = new ScrollMagic.Controller();

  // Define the scene for the title animation
  var titleScene = new ScrollMagic.Scene({
    triggerElement: ".intro-title", // The element that triggers the animation
    reverse: false, // Animation only happens once when scrolling down
  })
    .setClassToggle(".intro-title", "fade-in") // Add a class to trigger the animation
    .addTo(controller);

  // Define the scene for the description animation
  var descriptionScene = new ScrollMagic.Scene({
    triggerElement: ".intro-description",
    reverse: false,
  })
    .setClassToggle(".intro-description", "fade-in")
    .addTo(controller);
});











