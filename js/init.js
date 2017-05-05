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

 $(document).ready(function(){
      $('.slider').slider();
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