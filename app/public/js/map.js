

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
var districts = $.getJSON("../../data/map.geojson", function(data){
    var geojson = L.geoJson(data, {

    });
    console.log(geojson);
    geojson.addTo(mymap);
    });





    