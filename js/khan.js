jQuery(document).ready(function($) {
	// Slider script
	$(".frame").mightySlider({
	  // options go here
	  // as an example, enable keyboard arrows nav by 'slides'
	  viewpor: 'fit',
	  navigation: {
	    keyboardNavBy: 'slides',
	    horizontal: 1
	  },
	  commands: {
	    pages:          1, // Enable pages navigation.
	    buttons:        1  // Enable navigation buttons.
	  },
	  pages: {
	  	activateOn: 'click'
	  },
	  cycling: {
	  	cycleBy: 'pages',
	  	pauseTime:  8000,
	  	loop: 1,
	    pauseOnHover: 1
	  },
	  dragging: {
	    mouseDragging: 0,    // Enable navigation by dragging the slideElement with mouse cursor.
	  },
	});
	// End slider script
});