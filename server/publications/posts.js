Meteor.publishComposite('featuredPosts', function () {
	return {
		find: function () {
			var query = {published: true, featured: true};
			return Posts.find(query);
		}
	};
});

Meteor.publishComposite('homePost', function () {
	return {
		find: function () {
			var query = {};
			query.home = true;
			return Posts.find(query, {limit: 1});
		},
		children: [
		{
			find: function (post) {
				return Photos.find({postId: post._id});
			}
		}]
	};
});

Meteor.publishComposite('posts', function (options) {
	if (!options) {options = {};}
	return {
		find: function () {
			var query = {};
			if (!Roles.userIsInRole(this.userId, 'admin')) {
				query.published = true;
			}
			if (options.postId) {query._id = options.postId;}
			return Posts.find(query);
		},
		children: [
		{
			find: function (post) {
				if (options.postId) {
					return Photos.find({postId: post._id});
				} else {
					return Photos.find({_id: post.coverId});
				}
			}
		}]
	};
});

Meteor.publishComposite('postsAdmin', function (options) {
	if (!options) {options = {};}
	return {
		find: function () {
			if (!Roles.userIsInRole(this.userId, 'admin')) {
				return this.stop();
			}
			var query = {};
			if (options.postId) {query._id = options.postId;}
			return Posts.find(query);
		},
		children: [
		{
			find: function (post) {
				if (options.postId) {
					return Photos.find({postId: post._id});
				} else {
					return Photos.find({_id: post.coverId});
				}
			}
		}]
	};
});
