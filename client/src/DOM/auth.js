import $ from "jquery";

$.when($.ready).then(function(){
    $('#goRight').on('click', function(){
        $('#slideBox').animate({
          'marginLeft' : '0'
        });
        $('.topLayer').animate({
          'marginLeft' : '100%'
        });
      });
      $('#goLeft').on('click', function(){
        $('#slideBox').animate({
          'marginLeft' : '50%'
        });
        $('.topLayer').animate({
          'marginLeft': '0'
        });
      });
 });
