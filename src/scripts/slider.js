var swiper = new Swiper(".insta-swiper", {
        slidesPerView: 4,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
       
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },

        on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
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

        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
       
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class ="' + className + '">' + "0" + (index + 1) + '</span>';
          },
        },
        on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },

        
      });      


let mySliderCurrentSlide = document.querySelector('.top-swiper-count');
let myImageSlider 


swiper3.on('slideChange', function () {  
  let currentSlide = ++swiper3.realIndex;
  mySliderCurrentSlide.innerHTML ='0'+ currentSlide;
});


var swiper4 = new Swiper(".swiper-popular", {
        slidesPerView: 3.5,
        initialSlide: 0,
        spaceBetween: 80,
        
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
       
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
        
      });

      
var swiper5 = new Swiper(".swiper-news", {
        slidesPerView: 3.5,
        initialSlide: 0,
        spaceBetween: 80,
        

        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
       
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },

        on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
      });     


