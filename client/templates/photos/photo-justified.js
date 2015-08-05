Template.photoJustified.onRendered(function () {
	// $("#justified-gallery").justifiedGallery('norewind');

	function justify () {
		var rowHeight = 250;
		var margins = 10;
		var rel = 'group';

		var maxWidth = '100%';
		var	maxHeight = '100%';
		var opacity = 0.9;
		var transition = 'elastic';
		var current = '';

		$("#justified-gallery").justifiedGallery({
			rowHeight : rowHeight,
			margins : margins,
			captions: false,
			rel: rel
		}).on('jg.complete', function () {
			$(this).find('a').colorbox({
				maxWidth : maxWidth,
				maxHeight : maxHeight,
				opacity : opacity,
				transition : transition,
				current : current
			});
		});
	}

	justify();

	// $("#justified-gallery").imagesLoaded(function () {
	// 	justify();
	// });
});
