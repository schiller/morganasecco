// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Photos.find().count() === 0) {
    var gallery = Galleries.findOne();

    var data = [
    {
      title: "Foto de Família",
      url: "http://dummyimage.com/300x200/aaa/ffb.jpg",
      galleryId: gallery._id
    },
    {
      title: "Foto de Família",
      url: "http://dummyimage.com/300x200/b8f/ffb.jpg",
      galleryId: gallery._id
    },
    {
      title: "Foto de Família",
      url: "http://dummyimage.com/300x200/8ff/ffc.jpg",
      galleryId: gallery._id
    }
    ];

    _.each(data, function(photo) {
      var photo_id = Photos.insert({
        title: photo.title,
        url: photo.url,
        galleryId: photo.galleryId
      });
    });
  }
});
