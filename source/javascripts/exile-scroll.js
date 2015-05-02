$(document).on('ready', function(){

	if ($("body.the_exile").length > 0) {

		var scrollLimit = 500;

		$(window).on('scroll', function(){
			var scrollPos = $(this).scrollTop();

			// Title Opacity Change
			if(scrollPos < scrollLimit) {
				$('.landing-img.bg, .landing-img.mg').css({'opacity' : (1 - scrollPos / scrollLimit)});
			}
			if(scrollPos > scrollLimit) {
				$('.landing-img.bg, .landing-img.mg').css({'opacity' : 0});
			}

		});
	}

});