// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Photos.find().count() === 0) {
    var post = Posts.findOne();

    var data = [{
      title: 'Foto de Família',
      urlVeryLarge: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      urlLarge: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      urlMedium: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      urlSmall: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      postId: post._id
    }, {
      title: 'Foto de Família',
      urlVeryLarge: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      urlLarge: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      urlMedium: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      urlSmall: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      postId: post._id
    }, {
      title: 'Foto de Família',
      urlVeryLarge: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      urlLarge: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      urlMedium: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      urlSmall: 'http://dummyimage.com/300x200/aaa/ffb.jpg',
      postId: post._id
    }];

    _.each(data, function(photo) {
      Photos.insert({
        title: photo.title,
        urlVeryLarge: photo.urlVeryLarge,
        urlLarge: photo.urlLarge,
        urlMedium: photo.urlMedium,
        urlSmall: photo.urlSmall,
        postId: photo.postId
      });
    });
  }
});
