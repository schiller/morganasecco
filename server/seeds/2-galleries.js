// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Galleries.find().count() === 0) {
    var galleries_data = [
    {
      title: "Destaque 1",
      featured: true
    },
    {
      title: "Galeria 2"
    }
    ];

    _.each(galleries_data, function(gallery) {
      Galleries.insert({title: gallery.title});
    });
  }
});
