Template.posts.onRendered(function () {
	Tracker.autorun(function () {
		var count = Posts.find({
			published: true,
			home: { '$ne': true },
			featured: { '$ne': true }
		}).count();

		var photosCount = Photos.find().count();

		Template.currentData();

		setTimeout(function () {
			self.$(".masonry").imagesLoaded(function () {
				$(".masonry").masonry();
			});
		}, 100);
	});
});

Template.posts.events({
	"submit #post-search-form": function (event, template) {
		event.preventDefault();

		var searchTerm = event.target['post-search-term'].value;

		// this.subscribe('posts', {postId: this.params._id});

	}
});
