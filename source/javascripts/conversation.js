$(document).on('ready', function(){

	   if ($("body.the_hermit").length > 0) {

	   		$("#form").submit(function(event){
	   			event.preventDefault();
	   			var userText = $('#input').val();

	   			$('.conversation > .user').append("<div>" + userText + "</div>");
	   			$('#input').val("");
	   		});
	   }
});