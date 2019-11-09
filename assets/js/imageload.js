async function addPhotos() {
  var image = "https://jbe-media.s3.amazonaws.com/images/stills/"
  var thumbnail = "https://jbe-media.s3.amazonaws.com/images/thumbnails/stills/"
  var increment = 1;
  var additionalPhotosExist = true;

  do {
    var a = document.createElement("a");
    var href = document.createAttribute("href");
    href.value = image + pad(increment, 2) + ".jpg";

    var img = document.createElement("img");
    var src = document.createAttribute("src");
    src.value = thumbnail + pad(increment, 2) + ".jpg";

    try {
      const response = await fetch(src.value, { type: 'HEAD' });

      if (response.status == 403) {
        additionalPhotosExist = false;
      } else {
        img.setAttributeNode(src);

        a.setAttributeNode(href);

        a.insertAdjacentElement('afterbegin', img);

        var currentDiv = document.getElementById("photo-gallery");
        currentDiv.insertAdjacentElement('afterbegin', a);
        increment += 1;
      }
    } catch(e) {
      additionalPhotosExist = false;
    }
  } while(additionalPhotosExist);
}

async function addVideos() {
  var video = "https://jbe-media.s3.amazonaws.com/videos/samples/720p/"
  var thumbnail = "images/play_icon.png"
  var increment = 1;
  var additionalVideosExist = true;

  do {
    var a = document.createElement("a");
    var href = document.createAttribute("href");
    href.value = video + pad(increment, 3) + ".mp4";

    var img = document.createElement("img");
    var src = document.createAttribute("src");
    var width = document.createAttribute('width');
    var height = document.createAttribute('height');
    width.value = 150;
    height.value = 150;
    src.value = thumbnail

    try {
      const response = await fetch(href.value, { type: 'HEAD' });

      if (response.status == 403) {
        additionalVideosExist = false;
      } else {
        img.setAttributeNode(src);
        img.setAttributeNode(width);
        img.setAttributeNode(height);

        a.setAttributeNode(href);

        a.insertAdjacentElement('afterbegin', img);

        var currentDiv = document.getElementById("video-gallery");
        currentDiv.insertAdjacentElement('afterbegin', a);
        increment += 1;
      }
    } catch(e) {
      additionalVideosExist = false;
    }
  } while(additionalVideosExist);
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

$(window).load(async function() {
  await addVideos();
  await addPhotos();

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

  $('#video-gallery a').simpleLightbox({
    beforeSetContent: function() {
      lightboxOpen.modalOpen = true;
      lightboxOpen.contentLoaded = true;
    },
    beforeClose: function() {
      lightboxOpen.contentLoaded = false;
    },
    videoRegex: new RegExp(/720p/)
  });
});
