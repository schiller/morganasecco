// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Posts.find().count() === 0) {
    var user = Meteor.users.findOne();

    var data = [
    {
      title: "Post 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      published: true,
      authorId: user._id,
      slug: "post-1"
    },
    {
      title: "Post 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      published: true,
      authorId: user._id,
      slug: "post-2"
    },
    {
      title: "Post 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      published: true,
      authorId: user._id,
      slug: "post-3"
    }
    ];

    _.each(data, function (post) {
      Posts.insert({
        title: post.title,
        text: post.text,
        published: post.published,
        authorId: post.authorId,
        slug: post.slug
      });
    });
  }

  // var posts = Posts.find().fetch();
  // _.each(posts, function (item) {
  //   var post = item;
  //   if (!post.slug) {
  //     Posts.update(post._id, {$set: {slug: sluggify(post.title)}});
  //   }
  // });
});
