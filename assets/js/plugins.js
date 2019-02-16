$(document).ready(function () {
	
	// Start mainSlider
  $('.mainSlider .flexslider').flexslider({
    animation: "slide"
  });
    // End mainSlider
    // start secondSlider

     $('.latestWorks .flexslider').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    itemWidth: 210,
	    itemMargin: 5
	  });
    // End secondSlider

  
});
