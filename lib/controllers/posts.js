PostUpdateController = RouteController.extend({
    layoutTemplate: 'appLayout',
    subscriptions: function () {
      this.subscribe('postsAdmin', this.params._id);
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
      this.subscribe('posts', this.params._id);
    },
    data: function () {
        return Posts.findOne({_id: this.params._id, published: true});
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
        return {posts: Posts.find({published: true})};
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
        return {posts: Posts.find()};
    },
    action: function () {
        this.render('postsAdmin');
    }
});
