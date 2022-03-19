var deliverySlider = new Swiper(".swiper", {
  slidesPerView: 5,
  freeMode: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var bannerSlider = new Swiper(".banner-slider", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});