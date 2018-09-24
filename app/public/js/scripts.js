function showContent() {
  $('div#notLanding').hide();
  $('div#Landing').show();
  //on click to toggle q & a divs
  $('#maps').on('click',
    function() {

      $('div#notLanding').show();
      $('div#Landing').hide();

    }
  );


}

showContent();