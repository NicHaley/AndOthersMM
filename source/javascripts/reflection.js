$(window).load(function(){
	try {
		$('.ec-bg').ripples({
			resolution: 512,
					dropRadius: 20, //px
					perturbance: 0.04,
				});
	}
	catch (e) {
		$('.error').show().text(e);
	}

	// Automatic drops
	setInterval(function() {
		var $el = $('.ec-bg');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.03 + Math.random() * 0.03;
		
		$el.ripples('drop', x, y, dropRadius, strength);
	}, 2000);
});