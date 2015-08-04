Template.postsAdmin.onRendered(function () {
	Tracker.autorun(function () {
		var count = Photos.find().count();

		if (count > 0) {
			setTimeout(function () {
				self.$(".masonry").imagesLoaded(function () {
					$(".masonry").masonry();
				});
			}, 100);
		}
	});
});

Template.postsAdmin.events({
	'click #create-post-btn': function () {
		Posts.insert(
		{
			title: "Sem título",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			published: false,
			authorId: Meteor.userId()
		}, function (error, result) {
			if (error) {
				alert(error.invalidKeys);
				return;
			}

			Router.go('postUpdate', {_id: result});
		});

		return false;
	}
});
