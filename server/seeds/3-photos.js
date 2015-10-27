// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Photos.find().count() === 0) {
    var post = Posts.findOne();

    var data = [{
      title: 'Foto de Família',
      urlLarge: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      urlThumb: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      postId: post._id
    }, {
      title: 'Foto de Família',
      urlLarge: 'http://dummyimage.com/300x200/b8f/ffb.jpg',
      urlThumb: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      postId: post._id
    }, {
      title: 'Foto de Família',
      urlLarge: 'http://dummyimage.com/300x200/8ff/ffc.jpg',
      urlThumb: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      postId: post._id
    }];

    _.each(data, function(photo) {
      Photos.insert({
        title: photo.title,
        urlLarge: photo.urlLarge,
        urlThumb: photo.urlThumb,
        postId: photo.postId
      });
    });
  }
});
