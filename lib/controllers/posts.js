PostListController = RouteController.extend({
	layoutTemplate: 'appLayout',
    subscriptions: function () {
      this.subscribe('posts');
    },
    data: function () {
    	return {posts: Posts.find({published: true})};
    },
    action: function () {
    	this.render('posts');
    }
});

PostShowController = RouteController.extend({
    layoutTemplate: 'appLayout',
    subscriptions: function () {
      this.subscribe('posts', {_id: this.params._id});
    },
    data: function () {
        return Posts.findOne({_id: this.params._id});
    },
    action: function () {
        this.render('postShow');
    }
});
