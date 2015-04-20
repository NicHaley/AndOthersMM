$(document).ready(function(){
        
    if ($("body.the_echo").length > 0) {

        navigator.getMedia = (
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia
        );

        if (navigator.getMedia) {    
             navigator.getMedia(
                 {
                    audio : false,
                    video : true
                 },
                 function (stream) {
                    if (navigator.mozGetUserMedia) {
                         video.mozSrcObject = stream;
                    } else {
                         var vendorURL = window.URL || window.webkitURL;
                         video.src = vendorURL.createObjectURL(stream);
                    }

                    video.play();
                 },
                 function (err) {
                     alert("OH GOD WHAT HAPPENED!?!??!!! " + err);
                 }
            );
        }
        else
        {
            alert("Sorry, your browser does not support WebRTC.");
        }

    }
});