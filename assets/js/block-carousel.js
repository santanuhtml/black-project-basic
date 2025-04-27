
// Default Slider
const defaultSlider = new Swiper('.js-default-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Hero Slider
const jsHeroSlider = new Swiper('.js-hero-slider', {
  effect: 'fade',
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Hero slider with content
const jsHeroSliderContent = new Swiper('.js-hero-slider-contnet', {
  effect: 'fade',
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Hero slider multiple content
const jsHeroSliderMultipleContent = new Swiper('.js-hero-slider-multiple-content', {
  effect: 'fade',
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Carousel
const jsCarousel = new Swiper(".js-carousel", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Carousel Centered Slide
const jsCarouselCenteredSlide = new Swiper(".js-carousel-centered-slide", {
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});


// Thumbs Gallery
var jsThumbsSlider = new Swiper(".js-thumbs-slider", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var jsThumbGallery = new Swiper(".js-thumb-gallery", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: jsThumbsSlider,
  },
});