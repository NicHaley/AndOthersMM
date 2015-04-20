$(document).ready(function(){

	if ($("body.the_troubadour").length > 0) {

		var scrollLimit = 500;
		var sectionTwo = $('.section-two-tr').offset().top;
		var poemOneTop = ($('.poem1-tr').offset().top - $(window).height()/2);
		var poemTwoTop = ($('.poem2-tr').offset().top - $(window).height()/2);
		var poemThreeTop = ($('.poem3-tr').offset().top - $(window).height()/2);


		$(window).on('scroll', function(){
			var scrollPos = $(this).scrollTop();

			// Title Opacity Change
			if(scrollPos < scrollLimit) {
				$('.landing-bg').css({'opacity' : (1 - scrollPos / scrollLimit)});
			}
			if(scrollPos > scrollLimit) {
				$('.landing-bg').css({'opacity' : 0});
			}

			$('.vid-tr-container1').toggleClass("active", ((scrollPos > sectionTwo) && (scrollPos < poemOneTop)));
			$('.vid-tr-container2').toggleClass("active", ((scrollPos > poemOneTop) && (scrollPos < poemTwoTop)));
			$('.vid-tr-container3').toggleClass("active", ((scrollPos > poemTwoTop) && (scrollPos < poemThreeTop)));
		});
	}

});