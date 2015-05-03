$(document).on('ready', function(){

	var responseTime = 1000;
	var counter = 0;

	   if ($("body.the_hermit").length > 0) {

	   		startUp();
	   		$("#form").submit(function(event){
	   			event.preventDefault();
	   			counter++;

	   			var userText = $('#input').val();
	   			$('.conversation > .message').append("<div class='user-container'><div class='user'>" + userText + "</div></div>");

	   			
	   			setTimeout(function(){
	   				response(userText);
		   			var messageContainer = $('.message');
					messageContainer.animate({ scrollTop: messageContainer.prop("scrollHeight") - messageContainer.height() }, 650);
	   			}, responseTime);

	   			$('#input').val("");

	   		});
		}

		function response(input){

			if (counter == 1){

				var part2Template = $('#part2Template').html();
				Mustache.parse(part2Template);   // optional, speeds up future uses
				var rendered = Mustache.render(part2Template);
				$('.conversation > .message').append(rendered);

				$("#video-container-hr").html($("<video class='hermit-bg-vid' autoplay loop muted />"));
				$(".hermit-bg-vid").attr('src', 'http://s3.amazonaws.com/sonofsnow/videos/hermit2.mov');	

			} else if (counter == 2){

				var part3Template = $('#part3Template').html();
				Mustache.parse(part3Template);   // optional, speeds up future uses
				var rendered = Mustache.render(part3Template);
				$('.conversation > .message').append(rendered);

				$("#video-container-hr").html($("<video class='hermit-bg-vid' autoplay loop muted />"));
				$(".hermit-bg-vid").attr('src', 'http://s3.amazonaws.com/sonofsnow/videos/hermit3.mov');		

			} else if (counter == 3){

				var part4Template = $('#part4Template').html();
				Mustache.parse(part4Template);   // optional, speeds up future uses
				var rendered = Mustache.render(part4Template);
				$('.conversation > .message').append(rendered);

				$("#video-container-hr").html($("<video class='hermit-bg-vid' autoplay loop muted />"));
				$(".hermit-bg-vid").attr('src', 'http://s3.amazonaws.com/sonofsnow/videos/hermit4.mov');	
				
			} else if (counter == 4){

				var part5Template = $('#part5Template').html();
				Mustache.parse(part5Template);   // optional, speeds up future uses
				var rendered = Mustache.render(part5Template);
				$('.conversation > .message').append(rendered);

				$("#video-container-hr").html($("<video class='hermit-bg-vid' autoplay loop muted />"));
				$(".hermit-bg-vid").attr('src', 'http://s3.amazonaws.com/sonofsnow/videos/hermit5.mov');	

			} else if (counter == 5){

				var part6Template = $('#part6Template').html();
				Mustache.parse(part6Template);   // optional, speeds up future uses
				var rendered = Mustache.render(part6Template);
				$('.conversation > .message').append(rendered);

				$("#video-container-hr").html($("<video class='hermit-bg-vid' autoplay loop muted />"));
				$(".hermit-bg-vid").attr('src', 'http://s3.amazonaws.com/sonofsnow/videos/hermit6.mov');

			} else {
				console.log("This worked");
				alternateResponses(input);
			}
		}

		function startUp (){
			var part1Template = $('#part1Template').html();
			Mustache.parse(part1Template);   // optional, speeds up future uses
			var rendered = Mustache.render(part1Template);
			$('.conversation > .message').append(rendered);

			$("#video-container-hr").append($("<video class='hermit-bg-vid' autoplay loop muted />"));
			$(".hermit-bg-vid").attr('src', 'http://s3.amazonaws.com/sonofsnow/videos/hermit1.mov');
		}

		function alternateResponses(input) {
			if (input == "yolo") {
				alert("get out of my house");
			} else {
				console.log("altres else worked");
				alert("suck a dick");
			}
		}
});