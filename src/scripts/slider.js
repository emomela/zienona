var swiper = new Swiper(".insta-swiper", {
        slidesPerView: 4,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

var swiper2 = new Swiper(".foto-slider", {
        
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          
        },
      });

      
var swiper3 = new Swiper(".big-slider", {
        slidesPerView: 1,
        spaceBetween: 0,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          
        },



        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });      


let mySliderCurrentSlide = document.querySelector('.top-swiper-count');
let myImageSlider 


swiper3.on('slideChange', function () {
  console.log(swiper3.realIndex);
  let currentSlide = ++swiper3.realIndex;
  mySliderCurrentSlide.innerHTML ='0'+ currentSlide;
});


var swiper4 = new Swiper(".swiper-popular", {
        slidesPerView: 4,
        initialSlide: 0,
      });

      
var swiper5 = new Swiper(".swiper-news", {
        slidesPerView: 4,
        initialSlide: 0,
      });      