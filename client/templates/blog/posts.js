Template.posts.onRendered(function () {
	(function ($) {
		$(".masonry").imagesLoaded(function () {
			$(".masonry").masonry();
		});
	})(jQuery);
});

Template.posts.events({
	"submit #post-search-form": function (event, template) {
		event.preventDefault();

		var searchTerm = event.target['post-search-term'].value;

		// this.subscribe('posts', {postId: this.params._id});

	}
});
