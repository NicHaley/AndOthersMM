$(document).ready(function(){
	setTimeout(function(){
		$(".audio-ex")[0].loop = true;
		$(".audio-ex")[0].play();

		$('.icon').click(function() {
			if ($(".audio-ex")[0].paused == false) {
				$(".audio-ex")[0].pause();
			    // alert('music paused');
			} else {
				$(".audio-ex")[0].play();
			    // alert('music playing');
			}
		});
	}, 500);

	$('.poem-ex').selectionSharer();
	$('.intro-quote').selectionSharer();
	$('.poem-tr').selectionSharer();
	$('.intro-tr').selectionSharer();
});