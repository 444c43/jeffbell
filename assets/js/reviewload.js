//var jsonFile;
fetch("https://jbe-media.s3.amazonaws.com/reviews.json")
    .then(function(resp) {
    	return resp.json();
    })
    .then(function(data) {
    	console.log(data);
    });