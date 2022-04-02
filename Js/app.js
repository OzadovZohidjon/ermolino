// GENERAL FUNCTIONS - START

function openModal(modal){
  modal.classList.add('active')
}

function closeModal(modal){
  modal.classList.remove('active')
}

function counter(decreaseBtn, increaseBtn, counterText){
  let count = 0;

  decreaseBtn.addEventListener('click', () => {
    if(count <= 1){
      count = 0
    }else{
      count = count - 1;
    }
    counterText.innerHTML = count
  })
  
  increaseBtn.addEventListener('click', () => {
    count = count + 1;
    counterText.innerHTML = count
  })
}

// GENERAL FUNCTIONS - END


var deliverySlider = new Swiper(".swiper", {
  slidesPerView: 5,
  freeMode: true,

  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      // spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      // spaceBetween: 50,
    },
  },

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

// var slider = new Swiper('.orderone',{
//   slidesPerView: 4,
//   spaceBetween: 30,
//   centeredSlides: true,

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// })

$('.orderone__list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  arrows: true,
  nextArrow: `<div class="next">
  <img class="slider__icon left" src="./images/index/left icon.svg" alt="icon">
</div>`,
  prevArrow: `<div class="prev">
    <img class="slider__icon right" src="./images/index/left icon.svg" alt="icon">
  </div>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 758,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.Recipes__list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  arrows: true,
  nextArrow: `<div class="next">
  <img class="slider__icon left" src="./images/index/left icon.svg" alt="icon">
</div>`,
  prevArrow: `<div class="prev">
    <img class="slider__icon right" src="./images/index/left icon.svg" alt="icon">
  </div>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 758,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.products__list').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  arrows: true,
  nextArrow: `<div class="next">
  <img class="slider__icon left" src="./images/index/left icon.svg" alt="icon">
</div>`,
  prevArrow: `<div class="prev">
    <img class="slider__icon right" src="./images/index/left icon.svg" alt="icon">
  </div>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 758,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.news__list2').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  arrows: true,
  nextArrow: `<div class="next">
  <img class="slider__icon left" src="./images/index/left icon.svg" alt="icon">
</div>`,
  prevArrow: `<div class="prev">
    <img class="slider__icon right" src="./images/index/left icon.svg" alt="icon">
  </div>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 758,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// MENU START


const menuBtn = document.querySelector('.menyu__left-menyu-img');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
  if(menu.classList.contains('active')){
    menu.classList.remove('active');
    menuBtn.querySelector('img').setAttribute('src', './images/index/menyu header icon.svg')
  }else{
    menu.classList.add('active')
    menuBtn.querySelector('img').setAttribute('src', './images/icons/close.svg')
  }
})

// MENU END

// SEARCH PANEL START

const search = document.querySelector('#search');
const searchPanel = document.querySelector('.search__panel');
const menuSearch = document.querySelector('.menyu__search');
const searchPanelClasses = ['search', 'menyu__search-input','menyu__search-img', 'search__panel', 'search__panel-list', 'search__panel-item', 'search__panel-img', 
'search__panel-name', 'search__panel-price', 'search__panel-itemBtn', 'search__panel-itemBtn-icon', 'search__panel-itemBtn-text', 'search__panel-btn',
];

search.addEventListener('input', function(){
  if(search.value.length > 0){
    searchPanel.classList.add('active');
    menuSearch.classList.add('active');
    
  }else{
    searchPanel.classList.remove('active')
    menuSearch.classList.remove('active')
  }
})

window.addEventListener('click', function(e){
  if(searchPanelClasses.indexOf(e.target.className) === -1){
    searchPanel.classList.remove('active')
    menuSearch.classList.remove('active')
  }
})

search.addEventListener('focus', function(){
  if(search.value.length > 0){
    searchPanel.classList.add('active')
    menuSearch.classList.add('active')
  }
})

// SEARCH PANEL END

// MODAL - CITY - START

const cityModal = document.querySelector('.city__modal');
const closeBtn = cityModal.querySelector('.close-btn');
const yesBtn = document.querySelector('.btn-yes');
const noBtn = document.querySelector('.btn-no');
const cityName = document.querySelector('p.city_name');
const citySelect = document.querySelector('#modal__city-select');
let city = 'г. Омск';





closeBtn.addEventListener('click', () => {closeModal(cityModal)})

yesBtn.addEventListener('click', function(){
  cityName.textContent = city;
  closeModal(cityModal)
})

noBtn.addEventListener('click', function(){
  document.querySelector('.modal__city-name').style.display = 'none';
  noBtn.style.display = 'none';
  yesBtn.textContent = 'Подтвердить';
  document.querySelector('.modal__city-select').style.display = 'block';
})

citySelect.addEventListener('change', function(value){
  city = value.target.value
})

window.setTimeout(() => {openModal(cityModal)}, 15000)

// MODAL - CITY - END

// ACCARDION - START

const accardionHead = document.querySelectorAll('.accardion__head');

accardionHead.forEach(item => {
  
  if(item.classList.contains('active')){
    item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px'
    item.style.marginBottom = '15px'
  }

  item.addEventListener('click', function(){
    if(item.classList.contains('active')){
      item.classList.remove('active');
      item.nextElementSibling.style.height = 0;
      item.style.marginBottom = 0
    }else{
      item.classList.add('active');
      item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px'
      item.style.marginBottom = '15px'
    }
  })
})

// ACCARDION - END


// OPEN - PRODUCT - MODAL - START

const openProductModalBtn = document.querySelectorAll('.open-product-modal');
const productModal = document.querySelector('.product__modal');
const closeProductModal = productModal.querySelector('.close-btn');

openProductModalBtn.forEach(item => {
  item.addEventListener('click', function(){
    openModal(productModal)
  })
})

closeProductModal.addEventListener('click', () => {closeModal(productModal)})
counter(
  document.querySelector('.decrease__btn'),
  document.querySelector('.increase__btn'),
  document.querySelector('.content__counting-text')
)







// OPEN - PRODUCT - MODAL - END

