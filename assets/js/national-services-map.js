$(document).ready(function() {
    $('#map').usmap({});

// $('#map').usmap({
//   stateStyles: {fill: 'gray'}
// });
  });


$('#map').usmap({
  // The click action
  click: function(event, data) {


document.location.href='../our-success.html#'
   

  

      
  }

    // $('#clicked-state')
    //   .text('You clicked: '+data.name)
    //   .parent().effect('highlight', {color: '#C7F464'}, 2000);

});

function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);

