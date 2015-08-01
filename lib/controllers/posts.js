PostUpdateController = RouteController.extend({
	layoutTemplate: 'appLayout',
	subscriptions: function () {
		this.subscribe('postsAdmin', {postId: this.params._id});
	},
	data: function () {
		return Posts.findOne({_id: this.params._id});
	},
	action: function () {
		this.render('postUpdate');
	}
});

PostShowController = RouteController.extend({
	layoutTemplate: 'appLayout',
	subscriptions: function () {
		this.subscribe('posts', {postId: this.params._id});
	},
	data: function () {
		var query = {_id: this.params._id};
		if (!Roles.userIsInRole(Meteor.userId(), 'admin')) {
			query.published = true;
		}
		return Posts.findOne(query);
	},
	action: function () {
		this.render('postShow');
	}
});

PostListController = RouteController.extend({
	layoutTemplate: 'appLayout',
	subscriptions: function () {
		this.subscribe('posts');
	},
	data: function () {
		return {posts: Posts.find({published: true}, {sort: {updatedAt: -1, createdAt: -1}})};
	},
	action: function () {
		this.render('posts');
	}
});

PostAdminController = RouteController.extend({
	layoutTemplate: 'appLayout',
	subscriptions: function () {
		this.subscribe('postsAdmin');
	},
	data: function () {
		return {posts: Posts.find({}, {sort: {updatedAt: -1, createdAt: -1}})};
	},
	action: function () {
		this.render('postsAdmin');
	}
});
