$( document ).ready(function() {

  console.log('census-api1-test');
    
  $("#myBtn").on("click", function(event) {
    event.preventDefault();
      
      
      
      
    
    console.log("clicked btn");
    var search = $("#term").val();
    console.log(search);
      
      
      
      
      
      
      
      
    var url = "https://www.googleapis.com/civicinfo/v2/representatives?roles=legislatorLowerBody&divisions";
  url += '&' + $.param({
    'key': "AIzaSyDMc43gP3viUAT1YzBjs4cXjOyP1UQHtJQ",
    'address': search,
    'levels': "country",
      
  });
    $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result.offices[0].divisionId);
        
    var search_results = result.officials;

            console.log("Census API")
            console.log(search_results);
        console.log("result");
        console.log(result.offices[0]);
        var divID = result.offices[0].divisionId;
    
          console.log("divID: " + divID)

      
      
var state = divID.charAt(30) + divID.charAt(31);

var district = divID.charAt(36);
      var stateID;
        var districtID;
      
      if (state == "va") {
          stateID = 51;
      }
      
      else if (state == "md") {
          stateID = 24;
      }
        
        if (district.length == 1) {
            districtID = "0" + district;
        }
        
        else {
            
        }

var queryUrl = "https://api.census.gov/data/2016/acs/acs5?get=NAME,B01001_001E,B99211_001E,B09020_001E,B01002_001E,B01001A_001E,B01001B_001E,B01001D_001E,B01001C_001E,B01001E_001E,B01001F_001E,B01001G_001E,B01001I_001E,B01001H_001E,B21001_002E,B15003_001E,B15003_017E,B15003_018E,B15003_021E,B15003_022E,B15003_023E,B15003_024E,B15003_025E&for=congressional%20district:" + districtID + "&in=state:" + stateID + "&key=afa3ea6d6dd564b60a890c4ac54d3dd3b9a84fbe";

console.log("divID: " + divID);
console.log("state: " + state);
console.log("stateID: " + stateID); 
console.log("district: " + district);
console.log("districtID: " + districtID);
console.log("queryURL: " + queryUrl);
      
      $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {

      console.log(response);

      var censusData = response[1];
          
      var districtNum = $("<h5>").text(censusData[0]);
      var totalPop = $("<h6>").text("Est. Total Population: " + censusData[1]);
      var pop18 = $("<p>").text("Population 18+: " + censusData[2]);
      var pop65 = $("<p>").text("Population 65+: " + censusData[3]);
      var medianAge = $("<p>").text("Median Age: " + censusData[4]);

      $("#census-info").empty();
      $("#census-info").append(districtNum, totalPop, pop18, pop65, medianAge);
  
      });
      

//      console.log(data[1][0]);
//      console.log("Est. Total Population: " + data[1][1]);
//      console.log("Pop. 18+: " + data[1][2]);
//      console.log("Pop. 65+: " + data[1][3]);
//      console.log("Median Age: " + data[1][4]);
//      console.log("White: " + data[1][5]);
//      console.log("Black: " + data[1][6]);
//      console.log("Asian: " + data[1][7]);
//      console.log("Native American: " + (parseInt(data[1][8]) + parseInt(data[1][9])));
//      console.log("Other (race): " + data[1][10]);
//      console.log("Multiracial: " + data[1][11]);
//      console.log("Hispanic or Latino: " + data[1][12]);
//      console.log("White, not Hispanic or Latino: " + data[1][13]);
//      console.log("Veteran: " + data[1][14]);
//      console.log("Pop. 25+: " + data[1][15]);
//      console.log("HS or GED: " + (parseInt(data[1][16]) + parseInt(data[1][17])));
//      console.log("2 or 4 year degree: " + (parseInt(data[1][18]) + parseInt(data[1][19])));
//      console.log("Masters or PHd: " + (parseInt(data[1][20]) + parseInt(data[1][21]) + parseInt(data[1][22])));
      

});
   });     
        
});
