$(document).ready(function(){
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

		$("#time").html(days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds");
	}, 1000);
});