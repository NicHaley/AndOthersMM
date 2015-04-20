$(document).ready(function(){
    if ($("body.son_of_snow").length > 0) {

		endDate = new Date(2015, 04, 5, 00, 00, 00);

		setInterval(function(){
			thisDate  = new Date();
			thisDate  = new Date(thisDate.getFullYear(), thisDate.getMonth(), thisDate.getDate(), thisDate.getHours(), thisDate.getMinutes(), thisDate.getSeconds(), 00, 00);

			var left = parseInt(endDate - thisDate);
			var daysLeft = parseInt((endDate-thisDate)/86400000);
			var hoursLeft = parseInt((endDate-thisDate)/3600000); 
			var minutsLeft = parseInt((endDate-thisDate)/60000);
			var secondsLeft = parseInt((endDate-thisDate)/1000);

			seconds = minutsLeft*60;
			seconds = secondsLeft-seconds;

			minutes = hoursLeft*60;
			minutes = minutsLeft-minutes;

			hours = daysLeft*24;
			hours = (hoursLeft-hours) < 0 ? 0 : hoursLeft-hours;

			days = daysLeft;

			if(left < 0) {
				$("#time").html("");
			} else {
				$("#time").html(('0' + days).slice(-2) + "d " + ('0' + hours).slice(-2) + "h " + ('0' + minutes).slice(-2) + "m " + ('0' + seconds).slice(-2) + "s");
			}
		}, 1000);
	}
});
