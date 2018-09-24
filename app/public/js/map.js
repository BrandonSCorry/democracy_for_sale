// set map view coordinates and zoom level
var mymap = L.map('mapid').setView([38.307989, -79.269187], 7);

// function to change color of district based on representative party
function partyColor(party) {
  switch (party) {
    case "Democratic":
      return "blue";
    case "Republican":
      return "red";
  }
}

// add tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiZWxtOSIsImEiOiJjam05Yzl4a281MHhhM2tvZ3M1ZmtqaXRiIn0.KigR8xW7dn9FGF2TmDsoaw'
}).addTo(mymap);


// geoJSON congressional districts with a popup
var districts = $.getJSON("./data/map.geojson", function (data) {
  // new layer for geojson layer
  L.geoJson(data, {
    // call on each feature
    onEachFeature: function (feature, layer) {

      // -----------------------------------------------------------------------------------------
      // here's the Google Civics Info API call
      // -----------------------------------------------------------------------------------------
      // variable for OCDid found in map.geojson
      var OCDid = feature.properties.OCDid;
      //API key, yes its bad to put this here ¯\_(ツ)_/¯
      var api = "?key=AIzaSyBEexgjdV_RBhX9PecP2O8sZxRbGzB9pPA";
      // store google civic info api link in variable called civicInfoLink
      var civicInfoLink = "https://www.googleapis.com/civicinfo/v2/representatives/" + OCDid + api;
      // console.log(OCDid);
      // console.log(civicInfoLink);
      // here's where we call the API itself, the data is stored in data2
      $.ajax({
          url: civicInfoLink,
          type: "GET",
          dataType: "json",
          success: function (data2) {
            console.log(data2);
            // set the fill color based on the party color using my partyColor function above
            layer.setStyle({
              fillColor: partyColor(data2.officials[0].party)
            });
            // popup that shows the congressional district name and representative
            layer.bindPopup("<h4>" + feature.properties.District + " Congressional District</h4>" + "<br>" + "<h5>Representative " + data2.officials[0].name + "</h5>").openPopup();
          }
        }),
        // -----------------------------------------------------------------------------------------


        layer.on({
          
          // function on mouseover 
          mouseover: function (event) {
            layer = event.target;
            // change opacity to 80% to show user a difference in layer
            layer.setStyle({
              fillOpacity: 0.8
            });
          },
          //function when mouse no longer is hovering over location
          mouseout: function (event) {
            layer = event.target
            // return opacity to 40%
            layer.setStyle({
              fillOpacity: 0.6
            });
          }

        });

    },
    style: function (feature) {

      return {
        // set opacity to 40%
        fillOpacity: 0.6,
        // set border weight to 1.5px
        weight: 1.5,
      };
    },
  }).addTo(mymap);
});

