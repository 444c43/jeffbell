$(window).load(function() {
  $("body").removeClass("preload");
});

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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}