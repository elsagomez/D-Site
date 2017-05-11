

$(document).ready(function() {

var caseStudies= require("./convertcsv.json");
console.log(caseStudies[2].address);

	
    $('#map').usmap({});
  });

$('#map').usmap({
  // The click action
  click: function(event, data) {

    for(i=0; i<caseStudies.length; i++){
    if (data.name === caseStudies[i].state){

      console.log("this are the results: " + caseStudies[i].buildingName);

    // $('#clicked-state')
    //   .text('You clicked: '+data.name)
    //   .parent().effect('highlight', {color: '#C7F464'}, 2000);
  }
}
}
});