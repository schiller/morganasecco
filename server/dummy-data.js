// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Photos.find().count() === 0) {
    var data = [
      {
        title: "Foto de Família",
        url: "http://dummyimage.com/300x200/aaa/ffb.jpg"
      },
      {
        title: "Foto de Família",
        url: "http://dummyimage.com/300x200/b8f/ffb.jpg"
      },
      {
        title: "Foto de Família",
        url: "http://dummyimage.com/300x200/8ff/ffc.jpg"
      },
      {
        title: "Foto de Família",
        url: "http://dummyimage.com/400x200/88f/ffa.jpg"
      },
      {
        title: "Foto de Família",
        url: "http://dummyimage.com/300x300/8f3b8f/ffb.jpg"
      },
      {
        title: "Foto de Família",
        url: "http://dummyimage.com/350x200/8f3b8f/ffc.jpg"
      },
      {
        title: "Foto de Família",
        url: "http://dummyimage.com/300x200/8f3b8f/ffa.jpg"
      },
      {
        title: "Foto de Família",
        url: "http://dummyimage.com/360x200/8f3b8f/ffb.jpg"
      },
      {
        title: "Foto de Família",
        url: "http://dummyimage.com/400x200/8f3b8f/ffc.jpg"
      }
    ];

    _.each(data, function(photo) {
      var photo_id = Photos.insert({
        title: photo.title,
        url: photo.url
      });
    });
  }

  if (Galleries.find().count() === 0) {
    var galleries_data = [
      {
        title: "Galeria 1"
      },
      {
        title: "Galeria 2"
      },
      {
        title: "Galeria 3"
      },
      {
        title: "Galeria 4"
      }
    ];

    _.each(galleries_data, function(gallery) {
      var gallery_id = Galleries.insert({
        title: gallery.title
      });
    });
  }
});
