
$(window).on('load', function(){
   $('#preloader').fadeOut();
   $('#status').deley(300).fadeOut();
   // $('body').deley.css({'overflow' : 'visible'});
});

 


$(document).ready(function () {
   
   // menu toggle 
   $('#menu-icon').click(function(){
      $(this).toggleClass('fa-times');
      $('.MyNavbar').toggleClass('active-nav');
   });

   // close nav 
   $('.header .MyNavbar a').click(function(){
      $('#menu-icon').removeClass('fa-times');
      $('.MyNavbar').removeClass('active-nav');
   });

   // scroll to close nav 
   $(window).on('scroll', function(){
      $('#menu-icon').removeClass('fa-times');
      $('.MyNavbar').removeClass('active-nav');
   });


   // click anyway to close nav 
      

   // sticky top
   $(window).on('scroll', function(){
      if ($(window).scrollTop() > 25) {
            $('.header').addClass('scrolled-nav');
      } else {
            $('.header').removeClass('scrolled-nav');
      }
   })


      var sectionIds = $('a.nav-link');
    
        $(document).scroll(function(){
            sectionIds.each(function(){
    
                var container = $(this).attr('href');
                var containerOffset = $(container).offset().top;
                var containerHeight = $(container).outerHeight();
                var containerBottom = containerOffset + containerHeight;
                var scrollPosition = $(document).scrollTop();
        
                if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                    $(this).addClass('active');
                } else{
                    $(this).removeClass('active');
                }
        
            });
        });
      


});



// swiper js 
var swiper = new Swiper(".mySwiper", {
   direction: "vertical",
   slidesPerView: 1,
   spaceBetween: 50,
   loop: true,

   navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

});

// Animation on Scroll 
AOS.init({
   duration: 800,
   offset: 240,
});


//////////////////////    THE END //////////////////
