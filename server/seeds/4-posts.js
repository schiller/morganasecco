// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Posts.find().count() === 0) {
    var user = Meteor.users.findOne();
    var gallery = Galleries.findOne();

    var data = [
    {
      title: "Post 1",
      text: "lalalalala Texto teste 1",
      published: true,
      authorId: user._id,
      galleryId: gallery._id
    },
    {
      title: "Post 2",
      text: "lalalalala Texto teste 2",
      published: true,
      authorId: user._id,
      galleryId: gallery._id
    },
    {
      title: "Post 3",
      text: "lalalalala Texto teste 3",
      published: true,
      authorId: user._id
    }
    ];

    _.each(data, function(post) {
      Posts.insert({
        title: post.title,
        text: post.text,
        published: post.published,
        authorId: post.authorId,
        galleryId: post.galleryId
      });
    });
  }
});
