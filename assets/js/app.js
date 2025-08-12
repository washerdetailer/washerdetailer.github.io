$(document).ready(function () {

   "use strict";

   // Initiate JS animate scroll screen
   AOS.init({
      once: true,
      debounceDelay: 50,
      throttleDelay: 99
   });

   // NAVBAR
   if (window.matchMedia("(min-width: 720px)").matches) {
      $(window).scroll(function () {
         if ($(window).scrollTop() >= 500) {
            $('nav').fadeIn();
         } else {
            $('nav').fadeOut();
         }
      });
   }
   if (window.matchMedia("(max-width: 720px)").matches) {

      document.addEventListener('swiped-right', function () {
         $('nav').animate({
            left: '0'
         });
      });

      $('nav').click(function () {
         $('nav').animate({
            left: '-1000px'
         });
      });

      document.addEventListener('swiped-left', function () {
         $('nav').animate({
            left: '-1000px'
         });
      });

      // Vérifiez si l'utilisateur a déjà vu la modal
      const hasSeenModal = localStorage.getItem('hasSeenModal');
      if (!hasSeenModal) {
         // Si la modal n'a pas encore été vue, affichez-la
         $('.modal').removeClass('hiden_modal');

         $('.close').click(function () {
            $('.modal').addClass('hiden_modal');
            localStorage.setItem('hasSeenModal', 'true');
         });

         $('.modal').click(function (e) {
            if (e.target == e.currentTarget) {
               $(this).addClass('hiden_modal');
               localStorage.setItem('hasSeenModal', 'true');
            }
         });

      }

   }

   // SCROLL LINK
   $("a[href*='#']:not([href='#'])").click(function () {
      if (
         location.hostname == this.hostname &&
         this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
      ) {
         var anchor = $(this.hash);
         anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
         if (anchor.length) {
            $("html, body").animate({
               scrollTop: anchor.offset().top
            }, 1000);
         }
      }
   });

   // SVG ANIMATION
   const svg = document.getElementById('logo_svg_1');
   const paths = svg.querySelectorAll('path');
   let currentColor = '#E21F25';

   function toggleColor() {
      const newColor = currentColor === '#E21F25' ? 'black' : '#E21F25';
      paths.forEach(path => path.setAttribute('fill', newColor));
      currentColor = newColor;
   }
   setInterval(toggleColor, 5000);

   // HOME BACKGROUND CAROUSEL
   const home_container = document.getElementById("home");
   const pictures_home = [
      "assets/img/cars/cars5-5.jpg",
      "assets/img/cars/cars18.jpg",
      "assets/img/cars/cars34-4.jpg",
      "assets/img/cars/cars33-3.jpg",
   ]
   const backgroundSlideOptimized = (images, container, step) => {
      let index = 0;
      const changeBackground = () => {
         container.style.backgroundImage = `url(${images[index]})`;
         index = (index + 1) % images.length;
         setTimeout(() => requestAnimationFrame(changeBackground), step);
      };
      changeBackground();
   };
   const preloadImages = (images) => {
      images.slice(0, 6).forEach((src) => {
         const img = new Image();
         img.src = src;
      });
   };
   preloadImages(pictures_home);
   backgroundSlideOptimized(pictures_home, home_container, 5000);


   // SCROLL-UP BUTTON
   $(window).scroll(function () {
      if ($(window).scrollTop() >= 500) {
         $('#back_top').fadeIn();
      } else {
         $('#back_top').fadeOut();
      }
   });

   // SCROLL BUTTON MAIN HOME PICTURE
   $('#scroll_button').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: $($('#biographie')).offset().top
      }, 1000, 'linear');
   });

   // JS ANIMATION
   $('.main-animate').fadeOut().delay(1000).fadeIn(1500);
   $('#scroll_button').fadeOut().delay(2000).fadeIn(1500);

});
const backgroundSlideOptimized = (images, container, step) => {
   let index = 0;
   const changeBackground = () => {
      container.style.backgroundImage = `url(${images[index]})`;
      index = (index + 1) % images.length;
      setTimeout(() => requestAnimationFrame(changeBackground), step);
   };
   changeBackground();
};