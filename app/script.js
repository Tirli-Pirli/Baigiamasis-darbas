var mySwiper1 = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 120,
  
    breakpoints: {
      1000: {
        slidesPerView: 3
      },
      
        600: {
          slidesPerView: 2
        },
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })



