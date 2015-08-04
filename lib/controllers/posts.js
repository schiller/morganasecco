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
	},
    onAfterAction: function() {
      var post;
      // The SEO object is only available on the client.
      // Return if you define your routes on the server, too.
      if (!Meteor.isClient) {
        return;
      }
      post = this.data();
      SEO.set({
        title: post.title + ' - Morgana Secco Fotografia',
        meta: {
          'description': post.text
        },
        og: {
          'title': post.title,
          'description': post.text
        }
      });
    }
});

PostListController = RouteController.extend({
	layoutTemplate: 'appLayout',
	subscriptions: function () {
		this.subscribe('posts');
	},
	data: function () {
		return {posts: Posts.find(
			{published: true, home: { '$ne': true }, featured: { '$ne': true }}, 
			{sort: {updatedAt: -1, createdAt: -1}}
		)};
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
