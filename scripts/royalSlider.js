jQuery(document).ready(function($) {
	$('#full-width-slider').royalSlider({
		arrowsNav: true,
		loop: true,
		loopRewind: false,
		keyboardNavEnabled: true,
		controlsInside: false,
		//imageScaleMode: 'fill', //"fill", "fit", "fit-if-smaller" or "none". 
		imageScaleMode: 'fill', //"fill", "fit", "fit-if-smaller" or "none". 
		arrowsNavAutoHide: false,
		//autoScaleSlider: true, 
		autoScaleSliderWidth: 1600,
		autoScaleSliderHeight: 500,
		controlNavigation: 'bullets',
		//imageAlignCenter: true,
		autoHeight: true,
    	fullscreen: {
    		// fullscreen options go gere
    		enabled: true,
    		nativeFS: false
    	},		
		thumbsFitInViewport: false,
		navigateByClick: true,
		startSlideId: 0, //0 first
		//autoPlay: enabled,
    	autoScaleSlider: true,
    	autoPlay: {
    		// autoplay options go gere
    		enabled: true,
    		pauseOnHover: true
    	},	
		transitionType:'move',
		globalCaption: false,
		deeplinking: {
			enabled: true,
			change: false
		},
		imgWidth: 1600,
		imgHeight: 500
	});
});
