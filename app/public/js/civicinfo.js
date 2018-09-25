

$( document ).ready(function() {

  console.log('test');

  var termSubmit = function (e) {

    e.preventDefault();



    console.log("clicked btn");
    var search = $("#term").val().trim();
   console.log(search);
    if (search === "") {
      $("#myModal").hide();
      return alert("Please enter an address to search your representatives.");
    }
    else {



      var url = "https://www.googleapis.com/civicinfo/v2/representatives?roles=legislatorUpperBody&roles=legislatorLowerBody";
      url += '&' + $.param({
        'key': "AIzaSyDMc43gP3viUAT1YzBjs4cXjOyP1UQHtJQ",
        'address': search,
        'levels': "country",

      });
      $.ajax({
        url: url,
        method: 'GET',
      }).done(function (result) {
        console.log("result: " + result);

        var search_results = result.officials;
        var count = 1;
        console.log(search_results);
        console.log(search_results.length);


        if (search_results.length < 3) {
          $(".repName3").empty();
          $(".party3").empty();
          $(".phoneNum3").empty();
          $(".webLink3").empty();
          $("div#img3").empty();
          $("div#polPic3").empty();


          $(".repName3").html("Josiah Barlett");
          $(".party3").html("I'm a TV Star");
          $(".phoneNum3").html("You may not contact me.");
          $(".webLink3").html("Thanks.");
          $("div#img3").html("<img src='http://westwing.bewarne.com/images/nbcmv/1WESau00jb.jpg'>");
          $("div#polPic3").css('height', "100%");

          $("div#polPic3").html("<img style='height:100%' src='http://westwing.bewarne.com/images/nbcmv/1WESau00jb.jpg'>");


        }

        $.each(search_results, function (idx, obj) {

          var repName = ".repName" + count.toString();
          var repParty = ".party" + count.toString();
          var repPhone = ".phoneNum" + count.toString();
          var repWeb = ".webLink" + count.toString();


          $(repName).html(obj.name);
          $(repParty).html(obj.party + " party");
          $(repPhone).html("<a href='" + obj.phones[0] + "'>" + obj.phones[0] + "</a>");
          $(repWeb).html("<a href='" + obj.urls[0] + "'>" + obj.urls[0] + "</a>");

          var polPic = "div#polPic" + count.toString();

          if (obj.party == "Democratic") {
            $(polPic).html("<img src='../assets/images/donkey.png'>")
          }
          else if (obj.party == "Republican") {
            $(polPic).html("<img src='../assets/images/elephant.png'>")

          } else if (obj.party == "Independent") {
            $(polPic).html("<img src='../assets/images/question.png'>")
          }
            else {
              $(polPic).html("<img src='../assets/images/question.png'>");
            }



          var repImg = "div#img" + count.toString();


          if (obj.photoUrl == undefined) {

            $(repImg).html("<img src='http://westwing.bewarne.com/images/nbcmv/1WESau00jb.jpg'>");


          } else {
            $(repImg).html("<img src='" + obj.photoUrl + "'>");
          }


          count++;
          console.log(obj.party);
          console.log(obj.urls[0]);
        });

        console.log(search_results);

        console.log(search_results[0].name);
        console.log(search_results[0].photoUrl);
        console.log(search_results[0].party);
        console.log(search_results[0].phones[0]);
        console.log(search_results[0].urls[0]);

      }).fail(function (err) {

        $("#myModal").hide();


        alert("Please enter a valid address.");


        throw err;


      });
    }
  };
  $("#term").keypress(function(event) {
    if (event.which == 13) termSubmit();
  });
  $("#myBtn").click(termSubmit);


      // $(".repName1").html(search_results[2].name);
      // $(".party1").html(search_results[2].party);
      // $(".phoneNum1").html(search_results[2].phones[0]);
      // $(".webLink1").html("<a href='" + search_results[2].urls[0] +"'>" + search_results[2].urls[0] + "</a>");
      //
      // $(".repName2").html(search_results[1].name);
      // $(".party2").html(search_results[1].party);
      // $(".phoneNum2").html(search_results[1].phones[0]);
      // $(".webLink2").html("<a href='" + search_results[1].urls[0] +"'>" + search_results[1].urls[0] + "</a>");
      //
      // $(".repName3").html(search_results[0].name);
      // $(".party3").html(search_results[0].party);
      // $(".phoneNum3").html(search_results[0].phones[0]);
      // $(".webLink3").html("<a href='" + search_results[0].urls[0] +"'>" + search_results[0].urls[0] + "</a>");


      // $("#img1").css('background-image','url(' + search_results[2].photoUrl + ')');
      // $("#img2").css('background-image','url(' + search_results[1].photoUrl +')');
      // $("#img3").css('background-image','url(' + search_results[0].photoUrl + ')');

      // $("div#img1").html("<img src='" + search_results[2].photoUrl + "'>");
      // $("div#img2").html("<img src='" + search_results[1].photoUrl + "'>");
      // $("div#img3").html("<img src='" + search_results[0].photoUrl + "'>");








    //
    // var publicaSpec = "https://api.propublica.org/campaign-finance/v1/2014/candidates/S6VA00093.json/";
    //
    // var publicaSearch = "https://api.propublica.org/campaign-finance/v1/2016/candidates/search.json?query=Donald S. Beyer";
    //
    // $.ajax({
    //   url: publicaSearch,
    //   type: 'GET',
    //   // cycle: '2014',
    //   dataType: 'json',
    //   // query: "C00545947",
    //   headers: {'X-API-Key': 'okgYNJhUb4A4NGXqcH7fPPsOHv4GiGElqmGiP2Ag'}
    // }).done(function(publicaData) {
    //   console.log(publicaData);

      // var publicaRes = publicData.response;


      // console.log(publicaData);
      // console.log(publicaRes);

      //
      // $(".repName1").html(search_results[0].name);
      // $(".party1").html(search_results[0].party);
      // $(".phoneNum1").html(search_results[0].phones[0]);
      // $(".webLink1").html(search_results[0].urls[0]);
      //
      // $(".repName2").html(search_results[1].name);
      // $(".party2").html(search_results[1].party);
      // $(".phoneNum2").html(search_results[1].phones[0]);
      // $(".webLink2").html(search_results[1].urls[0]);
      //
      // $(".repName3").html(search_results[2].name);
      // $(".party3").html(search_results[2].party);
      // $(".phoneNum3").html(search_results[2].phones[0]);
      // $(".webLink3").html(search_results[2].urls[0]);
      //
      //
      // $("#img1").css('background-image','url(' + search_results[0].photoUrl + ') no-repeat');
      // $("#img2").css('background-image','url(' + search_results[1].photoUrl +') no-repeat');
      // $("#img3").css('background-image','url(' + search_results[2].photoUrl + ') no-repeat');




      // console.log(search_results.photoUrl);

      //
      // for (var i = 0; i < search_results.length; i++){
      //   var div = $("<div>");
      //   var p = $("<p>");
      //   var repImg = search_results[i].headline.main;
      //   var repName = search_results[i].snippet;
      //
      //   $("#civic-dump").append("<strong>" + repName + "</strong>" + "<br>");
      //   $("#civic-dump").append(repImg + "<br>" + "<br>");
      // }
    // }).fail(function(err) {
    //   throw err;
    // });





});//end doc ready