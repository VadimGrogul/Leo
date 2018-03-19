$(document).ready(function() {
    
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },

      autoplay: {
        delay: 2000,
      },

    spaceBetween: 20,
    slidesPerView : 4,

    breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 10
    },
  }
})


});