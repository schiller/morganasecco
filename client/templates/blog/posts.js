Template.posts.onRendered(function () {
	Tracker.autorun(function () {
		var count = Posts.find({
			published: true,
			home: { '$ne': true },
			featured: { '$ne': true }
		}).count();

		var photosCount = Photos.find().count();

		if (count > 0) {
			self.$(".masonry").imagesLoaded(function () {
				setTimeout(function () {
					self.$(".masonry").masonry();
				}, 200);
			});	
		}   
	});
});

Template.posts.events({
	"submit #post-search-form": function (event, template) {
		event.preventDefault();

		var searchTerm = event.target['post-search-term'].value;

		// this.subscribe('posts', {postId: this.params._id});
	}
});
