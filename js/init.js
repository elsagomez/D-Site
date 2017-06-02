(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );

  $('.dropdown-button2').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
       gutter: ($('.dropdown-content').width()*3  )/2.5 , // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button   
     alignment: 'left' // Displays dropdown with edge aligned to the left of button
});


$(function () {
    $("a[id^='link']").click(function (e) {
        e.preventDefault();
        var index = this.id.replace("link", "");
        $(".panel").hide();
        $("#panel" + index).show();
    });
});


  }); // end of document ready
})(jQuery); // end of jQuery name space

 $(document).ready(function(){
      $('.carousel').carousel();
    });
$(document).ready(function(){
    $('.collapsible').collapsible();
  });
 $(document).ready(function() {
    $('select').material_select();
  });



 $(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
       $(".navi").show();
    } else {
        $(".navi").hide();
    }
    this.previousTop = currentTop;
});