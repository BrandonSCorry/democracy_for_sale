// set map view coordinates and zoom level
var mymap = L.map('mapid').setView([38.307989, -79.269187], 7);

// add tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiZWxtOSIsImEiOiJjam05Yzl4a281MHhhM2tvZ3M1ZmtqaXRiIn0.KigR8xW7dn9FGF2TmDsoaw'
}).addTo(mymap);

// geoJSON congressional districts with a pop
var districts = $.getJSON("./data/map.geojson", function(data){
  L.geoJson(data, {
    style: function(feature){
      return{
        // set opacity to 50%
        fillOpacity: 0.5
      };
    },
    // call on each feature
    onEachFeature: function(feature, layer){
      layer.on({
        // function on mouseover
        mouseover: function(event) {
          layer = event.target
          // change opacity to show user a difference in layer
          layer.setStyle({
            fillOpacity: 0.9
          });
          // popup shows which district it is
          layer.bindPopup("<h1>"+feature.properties.District+" District</h1>");
        },
        //function when mouse no longer is hovering over location
        mouseout: function(event) {
          layer = event.target
          // return opacity to 50%
          layer.setStyle({
            fillOpacity: 0.5
          });
        }
      });
    }

  }).addTo(mymap);
  console.log(L.geoJson(data));

});



