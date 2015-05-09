// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Photos.find().count() === 0) {
    var data = [
      {
        name: "Foto de Família",
        url: "http://dummyimage.com/300x200/aaa/ffb.jpg"
      },
      {
        name: "Foto de Família",
        url: "http://dummyimage.com/300x200/b8f/ffb.jpg"
      },
      {
        name: "Foto de Família",
        url: "http://dummyimage.com/300x200/8ff/ffc.jpg"
      },
      {
        name: "Foto de Família",
        url: "http://dummyimage.com/400x200/88f/ffa.jpg"
      },
      {
        name: "Foto de Família",
        url: "http://dummyimage.com/300x300/8f3b8f/ffb.jpg"
      },
      {
        name: "Foto de Família",
        url: "http://dummyimage.com/350x200/8f3b8f/ffc.jpg"
      },
      {
        name: "Foto de Família",
        url: "http://dummyimage.com/300x200/8f3b8f/ffa.jpg"
      },
      {
        name: "Foto de Família",
        url: "http://dummyimage.com/360x200/8f3b8f/ffb.jpg"
      },
      {
        name: "Foto de Família",
        url: "http://dummyimage.com/400x200/8f3b8f/ffc.jpg"
      }
    ];

    _.each(data, function(photo) {
      var photo_id = Photos.insert({
        name: photo.name,
        url: photo.url
      });
    });
  }

  if (Galleries.find().count() === 0) {
    var galleries_data = [
      {
        name: "Galeria 1"
      },
      {
        name: "Galeria 2"
      },
      {
        name: "Galeria 3"
      },
      {
        name: "Galeria 4"
      }
    ];

    _.each(galleries_data, function(gallery) {
      var gallery_id = Galleries.insert({
        name: gallery.name
      });
    });
  }
});
