var swiper = new Swiper(".insta-swiper", {
  slidesPerView: 4,
  spaceBetween: 2,
  loop: true,
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
    pauseOnMouseEnter: true
  }
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
  autoHeight: true,
  
  navigation: {
    nextEl: '.big-slider-next',
    prevEl: '.big-slider-prev',
    
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  
  // autoplay: {
  //   delay: 3000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true
  // },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class ="' + className + '">' + "0" + (index + 1) + '</span>';
    },
  },
  on: {
    slideChange(swiper) {
      let counterEl = document.querySelector('.big-slider-count');
      let currentSlide = ++swiper3.realIndex;
      counterEl.textContent ='0'+ (swiper.activeIndex+1);
    }
  },

        
});      

let myImageSlider

var swiper4 = new Swiper(".swiper-popular", {
  slidesPerView: 'auto',
  loop: true,
  grabCursor: true,
  
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  
  autoplay: {
    delay: 3500,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },

  on: {
    slideChange(swiper) {
      const index = swiper.activeIndex
      const active = $(this.el).find('.swiper-slide').eq(index)

      const goods = $('.block-popular .main-slide .swiper-slide-info')
      const title = active.find('.swiper-slide-link').html()
      const descr = active.find('.swiper-slide-descr').text()
      const btn = active.find('.swiper-slide-button').attr('href')
      const pic = active.find('.swiper-slide-pic img').attr('src')

      goods.find('.swiper-slide-link').html(title)
      goods.find('.swiper-slide-descr').text(descr)
      goods.find('.swiper-slide-button').attr('href',btn)
      $('.block-popular .main-slide .swiper-slide-pic img').attr('src',pic)
    }
  },
});

      
var swiper5 = new Swiper(".swiper-news", {
  slidesPerView: 'auto',
  loop: true,
  grabCursor: true,
  // initialSlide: 0,
  // spaceBetween: 80,
  

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  
  autoplay: {
    delay: 3500,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },

  on: {

    slideChange(swiper) {
      const index = swiper.activeIndex

      const active = $(this.el).find('.swiper-slide').eq(index)
      const goods = $('.block-news .main-slide .swiper-slide-info')
      const title = active.find('.swiper-slide-link').html()
      const descr = active.find('.swiper-slide-descr').text()
      const btn = active.find('.swiper-slide-button').attr('href')
      const pic = active.find('.swiper-slide-pic img').attr('src')

      goods.find('.swiper-slide-link').html(title)
      goods.find('.swiper-slide-descr').text(descr)
      goods.find('.swiper-slide-button').attr('href',btn)
      $('.block-news .main-slide .swiper-slide-pic img').attr('src',pic)
    }
  },
});


var swiper6 = new Swiper(".op-slider", {
        slidesPerView: 4,
        spaceBetween: 0,
        
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
       
        autoplay: {
          delay: 6000,
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


var swiper7 = new Swiper(".pr-card-imgs", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,          
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
  },
});



//menu-toggler
$('header .h-right').append('<div class="mm-toggler" onclick=""><div class="mm-line-1"></div><div class="mm-line-2"></div><div class="mm-line-3"></div></div>');

$(document).on('click','.mm-toggler',function(e){
  e.preventDefault();
  $(this).toggleClass('opened');
  $('.h-nav').toggleClass('opened');
  $('.header-search-drop, .header-search-toggler').removeClass('opened');
});


//search toggler
$(document).on('click','.header-search-toggler',function(e){
  e.preventDefault();
  $(this).toggleClass('opened');
  $('.header-search-drop').toggleClass('opened');
  $('.h-nav, .mm-toggler').removeClass('opened')
})


//langs-toggler
$(document).on('click','.langs-menu-current',function(e) {
  e.preventDefault();
  $(this).toggleClass('opened')
  $('.langs-menu-langs').toggleClass('opened');
})

$(document).on('mouseup',function(e){
  if ($('.h-nav').has(e.target).length === 0 && $(e.target).closest('.mm-toggler').length === 0){
    $('.h-nav, .mm-toggler').removeClass('opened');
  }

  if ($('.header-search-drop').has(e.target).length === 0 && $(e.target).closest('.header-search-toggler').length === 0){
    $('.header-search-drop, .header-search-toggler').removeClass('opened');
  }

  if ($('.langs-menu').has(e.target).length === 0){
    $('.langs-menu-current, .langs-menu-langs').removeClass('opened');
  }
});
