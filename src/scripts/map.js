let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
window.onload = initMap;


$ (function () {
  $("#faktura2").click(function() {
    $("#faktura2").is(':checked');
  $('.dp-factura-block').toggleClass("chosen");

  })  
});

$ (function () {
  $("#faktura3").click(function() {
    $("#faktura3").is(':checked');
  $('.dp-factura-block').toggleClass("chosen");
  })  
});


$(function() {
  var $speed = 200; 
  var $class = 'ol-ordered-product';
  var $class_open = '.ol-ordered-special-active';
  var $class_bg = '.ol-ordered-product-current';
  var $class_hid = '.ol-ordered-special';

  
  $(document).ready(function() {
     $('.ol-info').on('click', function() {
       $ul = $(this).closest('ul');
       $answer = $(this).closest('li').find($class_open);
       
       if( !$(this).closest('li').hasClass($class) ) {
       
         $ul.find('li').each(function() {
           if( $(this).hasClass($class) )
             $(this).removeClass($class).find($class_open).slideUp($speed);
         });
       }
       
       $answer
         .slideToggle($speed)
         .closest('li')
         .toggleClass($class);
     });
  });
});

