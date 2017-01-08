var map;
var geocoder;
var elements = [];

function getPins() {

  var city = $('input[name="city"]').val();
  var country = $('input[name="country"]').val();
  var startDate = $('input[name="startDate"]').val();
  var endDate = $('input[name="endDate"]').val();

  $.ajax({
    type: 'GET',
    url: 'http://localhost:8881/routes?city=' + city + '&country=' + country +
      '&startDate=' + startDate + '&endDate=' + endDate,
    dataType: "json",
    xhrFields: {
      withCredentials: false
    },
    success: function(results) {
      results.forEach(function(result) {
        var fromPlaceLocation = {
          lat: result.fromPlace.latitude,
          lng: result.fromPlace.longitude
        };

        var toPlaceLocation = {
          lat: result.toPlace.latitude,
          lng: result.toPlace.longitude
        };

        var marker = new google.maps.Marker({
          position: fromPlaceLocation,
          map: map
        });

        var route = [fromPlaceLocation, toPlaceLocation];

        map.setCenter(toPlaceLocation);

        var path = new google.maps.Polyline({
          path: route,
          strokeColor: "972BC1",
          strokeOpacity: 0.75,
          strokeWeight: 2,
          geodesic: true
        });

        path.setMap(map);
      })
    }
  });
}

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 40.716667,
      lng: -74
    },
    zoom: 4
  });
  geocoder = new google.maps.Geocoder();
}
