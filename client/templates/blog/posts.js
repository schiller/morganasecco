Template.posts.onRendered(function () {
	(function ($) {
		$(".masonry").imagesLoaded(function () {
			$(".masonry").masonry();
		});
	})(jQuery);
});