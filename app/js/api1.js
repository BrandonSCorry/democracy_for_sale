var request = require("request");

var nodeArgs = process.argv;

var district = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    district = district + "+" + nodeArgs[i];

  }

  else {

    district += nodeArgs[i];

  }
}
//Virginia
//var state = 51

//Maryland
var state = 24 


// Then run a request to the OMDB API with the movie specified
var queryUrl = "https://api.census.gov/data/2016/acs/acs5?get=NAME,B01001_001E,B99211_001E,B09020_001E,B01002_001E,B01001A_001E,B01001B_001E,B01001D_001E,B01001C_001E,B01001E_001E,B01001F_001E,B01001G_001E,B01001I_001E,B01001H_001E,B21001_002E,B15003_001E,B15003_017E,B15003_018E,B15003_021E,B15003_022E,B15003_023E,B15003_024E,B15003_025E&for=congressional%20district:" + district + "&in=state:" + state + "&key=afa3ea6d6dd564b60a890c4ac54d3dd3b9a84fbe";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {
    
    console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//      console.log(queryUrl);
//      console.log(JSON.parse(body));
//      console.log("here" + JSON.parse(body)[1][1]);
      var data = JSON.parse(body);
      console.log(data[1][0]);
      console.log("Est. Total Population: " + data[1][1]);
      console.log("Pop. 18+: " + data[1][2]);
      console.log("Pop. 65+: " + data[1][3]);
      console.log("Median Age: " + data[1][4]);
      console.log("White: " + data[1][5]);
      console.log("Black: " + data[1][6]);
      console.log("Asian: " + data[1][7]);
      console.log("Native American: " + (parseInt(data[1][8]) + parseInt(data[1][9])));
      console.log("Other (race): " + data[1][10]);
      console.log("Multiracial: " + data[1][11]);
      console.log("Hispanic or Latino: " + data[1][12]);
      console.log("White, not Hispanic or Latino: " + data[1][13]);
      console.log("Veteran: " + data[1][14]);
      console.log("Pop. 25+: " + data[1][15]);
      console.log("HS or GED: " + (parseInt(data[1][16]) + parseInt(data[1][17])));
      console.log("2 or 4 year degree: " + (parseInt(data[1][18]) + parseInt(data[1][19])));
      console.log("Masters or PHd: " + (parseInt(data[1][20]) + parseInt(data[1][21]) + parseInt(data[1][22])));
      
//    console.log("Release Year: " + JSON.parse(body).Year);
  }
//    else if (error) {
//    console.log("Error!!")
//}
});

