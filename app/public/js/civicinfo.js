

$( document ).ready(function() {

  console.log('test');
  $("#myBtn").on("click", function(event) {
    event.preventDefault();
    console.log("clicked btn");
    var search = $("#term").val();
    var url = "https://www.googleapis.com/civicinfo/v2/representatives?roles=legislatorUpperBody&roles=legislatorLowerBody";
    url += '&' + $.param({
      'key': "AIzaSyDMc43gP3viUAT1YzBjs4cXjOyP1UQHtJQ",
      'address': search,
      'levels': "country",

    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log("result: "+result);

      var search_results = result.officials;

      console.log(search_results[0].name);
      console.log(search_results[0].photoUrl);
      console.log(search_results[0].party);
      console.log(search_results[0].phones[0]);
      console.log(search_results[0].urls[0]);


      $(".repName1").html(search_results[2].name);
      $(".party1").html(search_results[2].party);
      $(".phoneNum1").html(search_results[2].phones[0]);
      $(".webLink1").html(search_results[2].urls[0]);

      $(".repName2").html(search_results[1].name);
      $(".party2").html(search_results[1].party);
      $(".phoneNum2").html(search_results[1].phones[0]);
      $(".webLink2").html(search_results[1].urls[0]);

      $(".repName3").html(search_results[0].name);
      $(".party3").html(search_results[0].party);
      $(".phoneNum3").html(search_results[0].phones[0]);
      $(".webLink3").html(search_results[0].urls[0]);


      $("#img1").css('background-image','url(' + search_results[2].photoUrl + ') no-repeat center center cover');
      $("#img2").css('background-image','url(' + search_results[1].photoUrl +') no-repeat center center cover');
      $("#img3").css('background-image','url(' + search_results[0].photoUrl + ') no-repeat center center cover');

      // $("#img1").attr('src', search_results[2].photoUrl);
      // $("#img2").attr('src', search_results[1].photoUrl);
      // $("#img3").attr('src', search_results[0].photoUrl);




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
    }).fail(function(err) {
      throw err;
    });    console.log(search);
    console.log(url);
    console.log(search_results[0].photoUrl);

  });


});//end doc ready