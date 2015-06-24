Meteor.publishComposite('featuredPosts', function () {
	return {
		find: function () {
			var query = {published: true, featured: true};
			return Posts.find(query);
		}
	};
});

Meteor.publishComposite('posts', function (postId) {
	return {
		find: function () {
			var query = {};
			if (!Roles.userIsInRole(this.userId, 'admin')) {
				query.published = true;
			}
			if (postId) {query._id = postId;}
			return Posts.find(query);
		},
		children: [
		{
			find: function (post) {
				if (postId) {
					return Photos.find({postId: post._id});
				} else {
					return Photos.find({postId: post.coverId});
				}
			}
		}]
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
				if (postId) {
					return Photos.find({postId: post._id});
				} else {
					return Photos.find({postId: post.coverId});
				}
			}
		}]
	};
});
