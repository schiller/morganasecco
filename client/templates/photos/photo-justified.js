Template.photoJustified.onRendered(function () {
	$("#justified-gallery")
	.justifiedGallery('norewind')
	.on('jg.complete', function () {
		self.$(this).find('a').colorbox({
			maxWidth : maxWidth,
			maxHeight : maxHeight,
			opacity : opacity,
			transition : transition,
			current : current
		});
	});
});
