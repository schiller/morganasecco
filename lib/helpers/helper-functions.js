sluggify = function (value) {
	var formatted = value
	.toLowerCase()
	.replace(/ /g,'-')
	.replace(/[-]+/g, '-')
	.replace(/[^\w\x80-\xFF-]+/g,'');

	console.log(formatted + " SLUGGIFY!!");

	return formatted;
};
