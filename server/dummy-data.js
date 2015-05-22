// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  var gallery_ids = [];

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
      var gallery_id = Galleries.insert({
        title: gallery.title
      });
      gallery_ids.push(gallery_id);
    });
  }

  if (Photos.find().count() === 0) {
    var data = [
    {
      title: "Foto de Família",
      url: "http://dummyimage.com/300x200/aaa/ffb.jpg",
      galleryId: gallery_ids[0]
    },
    {
      title: "Foto de Família",
      url: "http://dummyimage.com/300x200/b8f/ffb.jpg",
      galleryId: gallery_ids[0]
    },
    {
      title: "Foto de Família",
      url: "http://dummyimage.com/300x200/8ff/ffc.jpg",
      galleryId: gallery_ids[0]
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

  if (Meteor.users.find().count() === 0) {
    var users = [
    {name:"Normal User",email:"normal@example.com",roles:[]},
    {name:"Admin User",email:"admin@example.com",roles:['admin']}
    ];

    _.each(users, function (user) {
      var id;

      id = Accounts.createUser({
        email: user.email,
        password: "1234",
        profile: { name: user.name }
      });

      if (user.roles.length > 0) {
        // Need _id of existing user record so this call must come
        // after `Accounts.createUser` or `Accounts.onCreate`
        Roles.addUsersToRoles(id, user.roles);
      }

    });
  }
});


