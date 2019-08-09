document.body.onload = addElement;

var image = "https://jbe-media.s3.amazonaws.com/images/stills/"
var thumbnail = "https://jbe-media.s3.amazonaws.com/images/thumbnails/stills/"

function addElement () {
	for (var i=1; i < 10; i++) {
		
		var a = document.createElement("a"); 
		var href = document.createAttribute("href");
		href.value = image + pad(i,2) + ".jpg";

		var img = document.createElement("img"); 
		var src = document.createAttribute("src");
		src.value = thumbnail + pad(i,2) + ".jpg";
		img.setAttributeNode(src);

		a.setAttributeNode(href);
		
		a.insertAdjacentElement('afterbegin', img);
		
		var currentDiv = document.getElementById("photo-gallery"); 		
		currentDiv.insertAdjacentElement('afterbegin', a);
		
		setAttributes(a, {
			"class": "highslide",
			"title": "",
			"onclick": "return hs.expand(this)"
		});		
	}
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}