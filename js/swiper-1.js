var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 50,
      grabCursor: true,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
       320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
           // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        }
      }  
});
