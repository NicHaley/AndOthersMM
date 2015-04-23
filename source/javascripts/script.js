$(document).ready(function(){
	setTimeout(function(){
		$(".audio")[0].loop = true;
		$(".audio")[0].play();

		$('.icon').click(function() {
			$('.icon').toggleClass('audio-active');
			if ($(".audio")[0].paused == false) {
				$(".audio")[0].pause();
			    // alert('music paused');
			} else {
				$(".audio")[0].play();
			    // alert('music playing');
			}
		});
	}, 500);

	$('.poem-ex').selectionSharer();
	$('.intro-quote').selectionSharer();
	$('.poem-tr').selectionSharer();
	$('.intro-tr').selectionSharer();
});