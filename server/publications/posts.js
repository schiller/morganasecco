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
    children: [{
      find: function (post) {
        return Photos.find({postId: post._id});
      }
    }]
  };
});

Meteor.publishComposite('posts', function (slug) {
  check(slug, Match.Optional(String));

  return {
    find: function () {
      var query = {};
      query.published = true;
      query.home = { '$ne': true };
      // query.featured = { '$ne': true };
      //single post?
      if (slug) {query.slug = slug;}
      return Posts.find(query);
    },
    children: [{
      find: function (post) {
        if (slug) {
          return Photos.find({postId: post._id});
        } else {
          return Photos.find({_id: post.coverId});
        }
      }
    }]
  };
});

Meteor.publishComposite('postsAdmin', function (slug) {
  check(slug, Match.Optional(String));

  return {
    find: function () {
      if (!Roles.userIsInRole(this.userId, 'admin')) {
        return this.stop();
      }
      var query = {};
      if (slug) {query.slug = slug;}
      return Posts.find(query);
    },
    children: [{
      find: function (post) {
        if (slug) {
          return Photos.find({postId: post._id});
        } else {
          return Photos.find({_id: post.coverId});
        }
      }
    }]
  };
});
