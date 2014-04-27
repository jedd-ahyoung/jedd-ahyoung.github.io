/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = '/jedd/js/highslide/graphics/';
hs.outlineType = 'custom';
hs.dimmingOpacity = 0.5;
hs.showCredits = false;
hs.fadeInOut = true;
hs.align = 'center';
hs.captionEval = 'this.a.title';
hs.registerOverlay({
	html: '<div class="closebutton" onclick="return hs.close(this)" title="Close"></div>',
	position: 'top right',
	useOnHtml: true,
	fade: 2 // fading the semi-transparent overlay looks bad in IE
});



// Add the slideshow controller
hs.addSlideshow({
	slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	fixedControls: 'fit',
	overlayOptions: {
		className: 'large-dark',
		opacity: 0.6,
		position: 'bottom center',
		offsetX: 0,
		offsetY: -15,
		hideOnMouseOut: true
	}
});

// gallery config object
var config1 = {
	slideshowGroup: 'group1',
	numberPosition: 'caption',
	transitions: ['expand', 'crossfade']
};
