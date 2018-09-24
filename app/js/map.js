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
var districts = $.getJSON("./assets/JSON/map.geojson", function(data){
    
    
    // new layer for geojson layer
    L.geoJson(data, {
        style: function(feature){
            return{
                // set opacity to 40%
                fillOpacity: 0.4,
                // set border weight to 1.5px
                weight: 1.5
            };
        },
        // call on each feature
        onEachFeature: function(feature, layer){
            
            // create variable for OCDid
            var OCDid = feature.properties.OCDid;
            //API key yes its bad to put this here 
            var api = "?key=AIzaSyBEexgjdV_RBhX9PecP2O8sZxRbGzB9pPA/";
            // get google civic info api link and store in variable called civicInfoLink
            var civicInfoLink = "https://www.googleapis.com/civicinfo/v2/representatives" + api + OCDid;
            console.log(OCDid);
            console.log(civicInfoLink);
            layer.on({
                // function on mouseover 
                mouseover: function(event) {
                    layer = event.target;
                    // change opacity to 80% to show user a difference in layer
                    layer.setStyle({
                        fillOpacity: 0.8
                    });
                    // popup shows which district it is
                    layer.bindPopup("<h1>"+feature.properties.District+" District</h1>");
                },
                //function when mouse no longer is hovering over location
                mouseout: function(event) {
                    layer = event.target
                    // return opacity to 40%
                    layer.setStyle({
                        fillOpacity: 0.4
                    });
                }
            });

        },


    }).addTo(mymap);
    console.log(L.geoJson(data));
    
    
    });
// add google civic API data to map
    // link to API
    




    