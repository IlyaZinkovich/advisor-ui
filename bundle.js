var map;
var geocoder;
var destinationCoordinates = {
  lat: 40.716667,
  lng: -74
};

function getPins() {
  var results = ["New York",
    "Cologne, Germany",
    "NYC, USA",
    "New York City",
    "New York NY, USA",
    "Hoboken, USA",
    "Milan, Italy",
    "Lambersart, France",
    "New York, USA",
    "New York",
    "Upper West Side, USA",
    "New York City, USA",
    "USA",
    "Brooklyn",
    "Brooklyn, USA",
    "Faro, Portugal",
    "Seattle area, USA",
    "New York City",
    "USA",
    "France",
    "New York, NY, America",
    "Reggio Emilia, Italy",
    "paris alger new-york",
    "New York",
    "Clifton, NJ, USA",
    "Washington, DC, United States",
    "USA",
    "Brooklyn, USA",
    "New York City, United States ",
    "New York",
    "Jersey City, NJ, USA",
    "new york",
    "Roma, Italia",
    "Cali, Valle del Cauca, Colombia",
    "New York, USA",
    "USA",
    "USA",
    "Washington, DC, United States",
    "New York, NY, USA",
    "Toronto, Canada",
    "Helsinki, Finland",
    "New York, USA",
    "Mar del Plata, Argentina",
    "Commack, NY, USA",
    "Bangalore, India",
    "Paris, France",
    "Washington, D.C. , United States ",
    "The Bronx, New York, USA",
    "New York, USA",
    "España",
    "New York, NY",
    "New York City, United States",
    "berlin",
    "Passaic County, New Jersey, USA",
    "New York City, USA",
    "Montréal, Canada",
    "Bussy Saint Georges, France",
    "Brooklyn, USA",
    "Lyon, France",
    "Rockaway Beach, New York, USA",
    "Philadelphia, USA",
    "New York City",
    "Maidstone, UK",
    "Deutschland",
    "New York, USA",
    "New York City, USA",
    "NYC, United States",
    "Trinidad & Tobago",
    "New York City Metro Area, USA",
    "Fort Lauderdale, FL, USA",
    "Andalucia, Spain",
    "Des Moines, IA, USA",
    "New York, NY, USA",
    "Toronto, Canada",
    "Jamaica Plain, MA, USA",
    "London, UK",
    "New York, USA",
    "Vilnius, Lithuania",
    "Portsmouth, UK",
    "New York City",
    "Brooklyn, USA",
    "Bethlehem, PA, USA",
    "Buenos Aires, Argentina",
    "Havertown, USA",
    "Brooklyn, NY, USA",
    "San Jose, USA",
    "Brooklyn, USA",
    "Wolverhampton",
    "Settimo Torinese, Italy",
    "Swindon, England",
    "Edinburgh, UK",
    "RVA, USA",
    "Glasgow, Scotland",
    "Trier, Germany",
    "Chesterfield, Virginia",
    "Los Angeles, USA",
    "Hudson Valley & Syracuse, USA",
    "New York, NY, USA",
    "New York, USA",
    "Whaletown/NYC, Canada/USA",
    "Lichfield, UK",
    "UK",
    "Mountain View California, united states",
    "Ukraine",
    "United Kingdom",
    "New York City, USA",
    "NJ, USA",
    "Absecon, New Jersey, USA",
    "US",
    "Kaohsiung City, Taiwan",
    "USA",
    "New York, NY, USA",
    "New York, USA",
    "New York",
    "Austria",
    "New York, NY, United States",
    "São Caetano do Sul, Brasil",
    "New York, NY, United States",
    "Brooklyn, New York, USA",
    "South Orange, NJ, USA",
    "LBC, USA",
    "New York, USA",
    "New York City, U.S.",
    "New York, NY, United States"
  ]

  results.filter(function(value) {
    return !(value.includes("New York") || value === "USA" || value === "NYC");
  }).forEach(function(result) {
    geocodeAddress(result);
  })
}

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: destinationCoordinates,
    zoom: 4
  });

  var marker = new google.maps.Marker({
    position: destinationCoordinates,
    map: map
  });
  geocoder = new google.maps.Geocoder();
}

function geocodeAddress(address) {
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var resultLocation = results[0].geometry.location;
      var marker = new google.maps.Marker({
        position: resultLocation,
        map: map
      });
      var route = [
        destinationCoordinates,
        resultLocation
      ];

      var path = new google.maps.Polyline({
        path: route,
        strokeColor: "972BC1",
        strokeOpacity: 0.75,
        strokeWeight: 2,
        geodesic: true
      });
      path.setMap(map);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
