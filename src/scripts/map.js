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
