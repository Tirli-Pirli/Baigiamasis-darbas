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

  function scrollToContact() {
    var elmnt = document.getElementById("contacts")
    elmnt.scrollIntoView();
  }

  function scrollToReviews() {
    var elmnt = document.getElementById("reviews")
    elmnt.scrollIntoView();
    }

  function scrollToPricing() {
    var elmnt = document.getElementById("pricing")
    elmnt.scrollIntoView();
  }

  function scrollToAbout() {
    var elmnt = document.getElementById("about")
    elmnt.scrollIntoView();
    }

    function scrollToFeatures() {
      var elmnt = document.getElementById("features")
      elmnt.scrollIntoView();
      }