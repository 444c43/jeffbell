function playVideo(videoID) {
  stopVideo();
  var vid = document.getElementById(videoID);
  vid.autoplay = true;
  vid.load();
}

function stopVideo() {
  var vid = document.getElementsByClassName("video");

  for(var i = 0; i < vid.length; i++) {
    vid[i].autoplay = false;
    vid[i].load();
  }
}