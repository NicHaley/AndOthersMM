$(document).on('ready', function(){

	   if ($("body.the_hermit").length > 0) {

	   		startUp();
	   		$("#form").submit(function(event){
	   			event.preventDefault();
	   			var userText = $('#input').val();
	   			$('.conversation > .message').append("<div class='user-container'><div class='user'>" + userText + "</div></div>");
	   			response(userText);

	   			$('#input').val("");
	   		});
		}

		function response(input){
			if(input == "poem") {
				$('.conversation > .message').append("<div class='sender'>" + "poem" + "</div>");
			} else if (input == "video"){
				$('.conversation > .message').append("<div class='sender'>" + "video" + "</div>");
			} else {
				$('.conversation > .message').append("<div class='sender'>" + "Not Valid" + "</div>");
			}
		}

		function startUp(){
			$('.conversation > .message').append("<div class='sender'>" + "Welcome to the poem content management system! Kind regards from your hosts of sprocket v2345.003 of the digital LAN system. " + "</div>");
		}
});