$(document).ready(function() {
  $('.link-password-recovery').magnificPopup();
  $('.link-sent-to-mail').magnificPopup();
  $('.link-card-details').magnificPopup();
});


$(document).ready(function(){
    $('.ol-info').on('click', function(){
       console.log(111);
     $('.ol-ordered-product').toggleClass('ol-ordered-product-current');
     $('.ol-ordered-special').toggleClass('ol-ordered-special-active');
  });
});
