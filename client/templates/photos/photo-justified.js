Template.photoJustified.onRendered(function () {
	var maxWidth = '100%';
	var	maxHeight = '100%';
	var opacity = 0.9;
	var transition = 'elastic';
	var current = '';

	$("#justified-gallery").find('a').colorbox({
		maxWidth : maxWidth,
		maxHeight : maxHeight,
		opacity : opacity,
		transition : transition,
		current : current
	});

	// $("#justified-gallery").justifiedGallery('norewind');
});
