
function make_entree_video()
{
    var canvas = document.getElementById('canvas-entree-video');
    var context = canvas.getContext('2d');
    base_image = new Image();
    base_image.src = 'capture.png';
    base_image.onload = function(){
        context.drawImage(base_image, 0, 0,700,500);
    }
}

function takePhoto(quality) {
    var div = document.getElementById('entree-video');

    var video = document.createElement('video');
    video.style.display = 'block';
    var stream = await
    navigator.mediaDevices.getUserMedia({video: true});

    document.body.appendChild(div);
    div.appendChild(video);
    video.srcObject = stream;
    await
    video.play();

    // Resize the output to fit the video element.
    //google.colab.output.setIframeHeight(document.documentElement.scrollHeight, true);

    //Prend la photo et l'enregistre temporairement
    var canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    stream.getVideoTracks()[0].stop();
    div.remove();
    return canvas.toDataURL('image/jpeg', quality);

}
//takePhoto();
make_entree_video();