PostUpdateController = RouteController.extend({
	layoutTemplate: 'appLayout',
	subscriptions: function () {
		this.subscribe('postsAdmin', {slug: this.params.slug});
	},
	data: function () {
		return Posts.findOne({slug: this.params.slug});
	},
	action: function () {
		this.render('postUpdate');
	}
});

PostShowController = RouteController.extend({
	layoutTemplate: 'appLayout',
	subscriptions: function () {
		this.subscribe('posts', {slug: this.params.slug});
	},
	data: function () {
		var query = {slug: this.params.slug};
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
        title: post.title + ' | Fotografia Infantil, Gestante, Feminino | Porto Alegre, Lajeado | Morgana Secco Fotografia',
        meta: {
          'description': post.text
        },
        og: {
          'title': post.title + ' | Morgana Secco Fotografia',
          'description': post.text,
          'type': 'article'
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
