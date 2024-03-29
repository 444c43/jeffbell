function fillContactForm() {
  const currentHref = window.location.href;
  if (currentHref.includes('main.html?selectedEvent')) {
    const option = decodeURIComponent(/[^=]*$/.exec(window.location.search)[0]);
    $('#contact-form #message').val(option);
  }
}

$(window).load(function() {
  $("body").removeClass("preload");
  fillContactForm();
});

function playVideo(videoID) {
  stopVideo();
  var vid = document.getElementById(videoID);
  vid.autoplay = true;
  vid.load();

  vid.addEventListener('timeupdate', function() {
    if (!isNaN(vid.duration)) {
      const timeRemaining = vid.duration - vid.currentTime;
      var seconds = pad(parseInt(timeRemaining % 60));
      var minutes = pad(Math.floor(timeRemaining / 60));

      $(vid).siblings('.time-remaining').html(`${minutes}:${seconds}`)

      if (timeRemaining === 0) {
        $(vid).siblings('.actions').show();
        $(vid).siblings('.field.option').show();
      }
    }
  });
}

function sendToContactForm(selection) {
  const currentHref = window.location.href;
  const selectedEvent = $(`#${selection}`).find('option').length > 0 ? $(`#${selection}`).find('option:selected').html() : selection;
  const host = /^(.*[\\\/])/.exec(currentHref)[0];
  window.location.href = `${host}main.html?selectedEvent=${selectedEvent}#contact`;
}

function stopVideo() {
  var vid = document.getElementsByClassName("video");

  for(var i = 0; i < vid.length; i++) {
    vid[i].autoplay = false;
    vid[i].load();
  }
}

function pad(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
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
