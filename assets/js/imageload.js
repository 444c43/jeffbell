async function addPhotos() {
  loadImage(1);
}

async function addHelpful() {
  var helpful ="https://jbe-media.s3.amazonaws.com/videos/helpful/"
  var thumbnail = "https://jbe-media.s3.amazonaws.com/images/thumbnails/helpful/"
  var increment = 1;
  var additionalVideosExist = true;

  do {
    var a = document.createElement("a");
    var href = document.createAttribute("href");
    href.value = helpful + pad(increment, 3) + ".mp4";

    var img = document.createElement("img");
    var src = document.createAttribute("src");
    src.value = thumbnail + pad(increment, 3) + ".jpg";

    try {
      const response = await fetch(href.value, { type: 'HEAD' });

      if (response.status == 403) {
        additionalVideosExist = false;
      } else {
        img.setAttributeNode(src);

        a.setAttributeNode(href);

        a.insertAdjacentElement('afterbegin', img);

        var currentDiv = document.getElementById("helpful-videos");
        currentDiv.insertAdjacentElement('afterbegin', a);
        increment += 1;
      }
    } catch(e) {
      additionalVideosExist = false;
    }
  } while(additionalVideosExist);
}

async function addSelfie() {
  var selfie ="https://jbe-media.s3.amazonaws.com/videos/selfie/"
  var thumbnail = "https://jbe-media.s3.amazonaws.com/images/thumbnails/selfie/"
  var increment = 1;
  var additionalVideosExist = true;

  do {
    var a = document.createElement("a");
    var href = document.createAttribute("href");
    href.value = selfie + pad(increment, 3) + ".mp4";

    var img = document.createElement("img");
    var src = document.createAttribute("src");
    src.value = thumbnail + pad(increment, 3) + ".jpg";

    try {
      const response = await fetch(href.value, { type: 'HEAD' });

      if (response.status == 403) {
        additionalVideosExist = false;
      } else {
        img.setAttributeNode(src);

        a.setAttributeNode(href);

        a.insertAdjacentElement('afterbegin', img);

        var currentDiv = document.getElementById("selfie-videos");
        currentDiv.insertAdjacentElement('afterbegin', a);
        increment += 1;
      }
    } catch(e) {
      additionalVideosExist = false;
    }
  } while(additionalVideosExist);
}

async function addLighting() {
  var lighting ="https://jbe-media.s3.amazonaws.com/videos/lighting/"
  var thumbnail = "https://jbe-media.s3.amazonaws.com/images/thumbnails/lighting/"
  var increment = 1;
  var additionalVideosExist = true;

  do {
    var a = document.createElement("a");
    var href = document.createAttribute("href");
    href.value = lighting + pad(increment, 3) + ".mp4";

    var img = document.createElement("img");
    var src = document.createAttribute("src");
    src.value = thumbnail + pad(increment, 3) + ".jpg";

    try {
      const response = await fetch(href.value, { type: 'HEAD' });

      if (response.status == 403) {
        additionalVideosExist = false;
      } else {
        img.setAttributeNode(src);

        a.setAttributeNode(href);

        a.insertAdjacentElement('afterbegin', img);

        var currentDiv = document.getElementById("lighting-videos");
        currentDiv.insertAdjacentElement('afterbegin', a);
        increment += 1;
      }
    } catch(e) {
      additionalVideosExist = false;
    }
  } while(additionalVideosExist);
}

async function addVideos() {
  var video = "https://jbe-media.s3.amazonaws.com/videos/samples/"
  var thumbnail = "https://jbe-media.s3.amazonaws.com/images/thumbnails/video/"
  var increment = 1;
  var additionalVideosExist = true;

  do {
    var a = document.createElement("a");
    var href = document.createAttribute("href");
    href.value = video + pad(increment, 3) + ".mp4";

    var img = document.createElement("img");
    var src = document.createAttribute("src");
    src.value = thumbnail + pad(increment, 3) + ".jpg";


        img.setAttributeNode(src);

        a.setAttributeNode(href);

        a.insertAdjacentElement('afterbegin', img);

        var currentDiv = document.getElementById("video-gallery");
        currentDiv.insertAdjacentElement('afterbegin', a);
        increment += 1;
  } while(increment < 21);
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function loadImage(increment) {
  var image = "https://jbe-media.s3.amazonaws.com/images/stills/Jacksonville+Wedding+DJ+"
  var thumbnail = "https://jbe-media.s3.amazonaws.com/images/thumbnails/stills/Jacksonville+Wedding+DJ+"

  var a = document.createElement("a");
  var href = document.createAttribute("href");
  href.value = image + pad(increment, 2) + ".jpg";

  var img = document.createElement("img");
  var src = document.createAttribute("src");
  src.value = thumbnail + pad(increment, 2) + ".jpg";

  img.setAttributeNode(src);

  a.setAttributeNode(href);

  a.insertAdjacentElement('afterbegin', img);

  var currentDiv = document.getElementById("photo-gallery");
  currentDiv.insertAdjacentElement('afterbegin', a);

  img.onload = function(){
    loadImage(increment + 1);
  }

  img.onerror = function(){
    img.remove();
    a.remove();
    loadPhotoGallery();
  }
}

function loadPhotoGallery() {
  $('#photo-gallery a').simpleLightbox({
    beforeSetContent: function() {
      lightboxOpen.modalOpen = true;
      lightboxOpen.contentLoaded = true;
    },
    beforeClose: function() {
      lightboxOpen.contentLoaded = false;
    },
    videoRegex: new RegExp(/720p/)
  });
}

function loadVideoGallery() {
  $('#video-gallery a').simpleLightbox({
    beforeSetContent: function() {
      lightboxOpen.modalOpen = true;
      lightboxOpen.contentLoaded = true;
    },
    beforeClose: function() {
      lightboxOpen.contentLoaded = false;
    },
    videoRegex: new RegExp(/samples/)
  });
}

function loadHelpfulVideos() {
  $('#helpful-videos a').simpleLightbox({
    beforeSetContent: function() {
      lightboxOpen.modalOpen = true;
      lightboxOpen.contentLoaded = true;
    },
    beforeClose: function() {
      lightboxOpen.contentLoaded = false;
    },
    videoRegex: new RegExp(/helpful/)
  });
}

function loadLightingVideos() {
  $('#lighting-videos a').simpleLightbox({
    beforeSetContent: function() {
      lightboxOpen.modalOpen = true;
      lightboxOpen.contentLoaded = true;
    },
    beforeClose: function() {
      lightboxOpen.contentLoaded = false;
    },
    videoRegex: new RegExp(/lighting/)
  });
}

function loadSelfieVideos() {
  $('#selfie-videos a').simpleLightbox({
    beforeSetContent: function() {
      lightboxOpen.modalOpen = true;
      lightboxOpen.contentLoaded = true;
    },
    beforeClose: function() {
      lightboxOpen.contentLoaded = false;
    },
    videoRegex: new RegExp(/selfie/)
  });
}

$(window).load(async function() {
  addPhotos();

  await addVideos();
  loadVideoGallery();
  
  await addHelpful();
  loadHelpfulVideos();

  await addLighting();
  loadLightingVideos();

  await addSelfie();
  loadSelfieVideos();
});
