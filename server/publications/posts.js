Meteor.publishComposite('posts', function (postId) {
	return {
		find: function () {
			var query = {published: true};
			if (postId) {query._id = postId;}
			return Posts.find(query);
		},
		children: [
		{
			find: function (post) {
				return Galleries.find({_id: post.galleryId});
			}
		}
		]
	};
});

Meteor.publishComposite('postsAdmin', function (postId) {
	return {
		find: function () {
			if (!Roles.userIsInRole(this.userId, 'admin')) {
				return this.stop();
			}
			var query = {};
			if (postId) {query._id = postId;}			
			return Posts.find(query);
		},
		children: [
		{
			find: function (post) {
				return Galleries.find({_id: post.galleryId});
			}
		}
		]
	};
});
