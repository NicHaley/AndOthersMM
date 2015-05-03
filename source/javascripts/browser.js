$(document).on('ready', function(){
	if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
	} else {
		$('.chrome').css("display", "none");
		// alert("Please Use Chrome!");
	}
});