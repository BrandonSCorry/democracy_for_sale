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

// Then run a request to the OMDB API with the movie specified
var queryUrl = "https://api.census.gov/data/2016/acs/acs5?get=NAME,B01001A_001E,B01001B_001E,B01001C_001E,B01001D_001E,B01001E_001E,B01001F_001E,B01001G_001E,B01001H_001E,B01001I_001E,B01002_001E,B01001_001E,B99211_001E,B09020_001E,B01002_001E,B01001A_001E,B01001B_001E,B01001D_001E,B01001C_001E,B01001E_001E,B01001F_001E,B01001G_001E,B01001I_001E,B01001H_001E,B21001_002E,B15003_001E,B15003_017E,B15003_018E,B15003_021E,B15003_022E,B15003_023E,B15003_024E,B15003_025E&for=congressional%20district:" + district + "&in=state:51&key=afa3ea6d6dd564b60a890c4ac54d3dd3b9a84fbe";

//var queryUrl = "https://api.census.gov/data/2016/acs/acs5?get=NAME,B01001A_001E,B01001B_001E,B01001C_001E,B01001D_001E,B01001E_001E,B01001F_001E,B01001G_001E,B01001H_001E,B01001I_001E,B01002_001E,B01001_001E,B99211_001E,B09020_001E,B01002_001E,B01001A_001E,B01001B_001E,B01001D_001E,B01001C_001E,B01001E_001E,B01001F_001E,B01001G_001E,B01001I_001E,B01001H_001E,B21001_002E,B15003_001E,B15003_017E,B15003_018E,B15003_021E,B15003_022E,B15003_023E,B15003_024E,B15003_025E&for=congressional%20district:08&in=state:51&key=afa3ea6d6dd564b60a890c4ac54d3dd3b9a84fbe";

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
      console.log("White: " + data[1][1]);
      console.log("Black: " + data[1][1]);
      console.log("Native American: " + data[1][1] + data[1][1]);
      console.log("White: " + data[1][1]);
      console.log("White: " + data[1][1]);
//    console.log("Release Year: " + JSON.parse(body).Year);
  }
//    else if (error) {
//    console.log("Error!!")
//}
});



//census buruoe afa3ea6d6dd564b60a890c4ac54d3dd3b9a84fbe
//va = state 51
//md = 24
//&for=state:*
//
//500	state› congressional district
//
//https://api.census.gov/data/2016/acs/acs5?get=NAME,B01001A_001E,B01001H_001E,B01001I_001E&for=congressional%20district:*&in=state:51&key=afa3ea6d6dd564b60a890c4ac54d3dd3b9a84fbe
//
//B01001A_001E	Estimate!!Total	SEX BY AGE (WHITE ALONE)
//B01001B_001E	Estimate!!Total	SEX BY AGE (BLACK OR AFRICAN AMERICAN ALONE)
//B01001C_001E	Estimate!!Total	SEX BY AGE (AMERICAN INDIAN AND ALASKA NATIVE ALONE)
//B01001D_001E	Estimate!!Total	SEX BY AGE (ASIAN ALONE)
//B01001E_001E	Estimate!!Total	SEX BY AGE (NATIVE HAWAIIAN AND OTHER PACIFIC ISLANDER ALONE)
//B01001F_001E	Estimate!!Total	SEX BY AGE (SOME OTHER RACE ALONE)
//B01001G_001E	Estimate!!Total	SEX BY AGE (TWO OR MORE RACES)
//B01001H_001E	Estimate!!Total	SEX BY AGE (WHITE ALONE, NOT HISPANIC OR LATINO)
//B01001I_001E	Estimate!!Total	SEX BY AGE (HISPANIC OR LATINO)
//B01002_001E	Estimate!!Median age!!Total	MEDIAN AGE BY SEX
//age to vote
//education
//veteran
//health insurance
//
//total pop: B01001_001E
//pop above 18: B99211_001E
//pop above 65: B09020_001E 
//median age: B01002_001E
//white: B01001A_001E
//black: B01001B_001E
//asian: B01001D_001E
//native american: B01001C_001E + B01001E_001E
//other: B01001F_001E
//multiracial: B01001G_001E
//hispanic: B01001I_001E
//white, nonhispanic: B01001H_001E
//vet: B21001_002E
//
//health insurance: 
//
//edu over 25: B15003_001E
//hs or ged: B15003_017E + B15003_018E
//2 or 4 year: B15003_021E + B15003_022E
//masters or phd: B15003_023E + B15003_024E + B15003_025E