var map;
var geocoder;
var destinationCoordinates = {
  lat: 40.716667,
  lng: -74
};

function getPins() {

  $.ajax({
    type: 'GET',
    url: 'http://localhost:8881/routes?city=Brussels&country=Belgium&month=AUGUST&year=2016',
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
    center: destinationCoordinates,
    zoom: 4
  });
  geocoder = new google.maps.Geocoder();
}
