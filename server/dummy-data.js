// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Photos.find().count() === 0) {
    var data = [
      // {
      //   name: "Foto de Grávida",
      //   url: "https://d2dct7y3250e4n.cloudfront.net/ht-staging/user_answer/reference_image/1708/large/pregnant.jpeg"
      // },
      // {
      //   name: "Foto de Família",
      //   url: "http://dreamatico.com/data_images/family/family-3.jpg"
      // },
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

    var timestamp = (new Date()).getTime();
    _.each(data, function(photo) {
      var photo_id = Photos.insert({
        name: photo.name,
        url: photo.url
      });
    });
  }
});
