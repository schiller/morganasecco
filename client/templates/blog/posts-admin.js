Template.postsAdmin.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('postsAdmin');
  });
});

Template.postsAdmin.onRendered(function () {
  var self = this;
  self.$('.masonry').imagesLoaded().progress(function () {
    self.$('.masonry').masonry();
  });
});

Template.postsAdmin.helpers({
  posts() {
    let posts = Posts.find({}, {sort: {createdAt: -1, updatedAt: -1}}).fetch() || [];
    return posts;
  }
});

Template.postsAdmin.events({
  'click #create-post-btn': function () {
    Posts.insert({
      title: 'Sem título',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      published: false,
      authorId: Meteor.userId(),
      slug: new Date()
    }, function (error, result) {
      if (error) {
        alert(error.invalidKeys);
        return;
      }
      var post = Posts.findOne(result);
      FlowRouter.go('postUpdate', {slug: post.slug});
    });

    return false;
  }
});
