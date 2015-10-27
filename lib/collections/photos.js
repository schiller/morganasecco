Photos = new Mongo.Collection('photos');

Schemas.Photo = new SimpleSchema([Schemas.BaseSchema, {
  title: {
    type: String,
    label: 'Título',
    max: 200
  },
  urlLarge: {
    type: String,
    label: 'URL'
  },
  urlThumb: {
    type: String,
    label: 'URL'
  },
  postId: {
    type: String
  },
  order: {
    type: Number,
    optional: true
  }
}]);

Photos.attachSchema(Schemas.Photo);

Meteor.methods({
  removePhotos: function (postId) {
    var userId = Meteor.userId();

    if (! Roles.userIsInRole(userId, 'admin')) {
      throw new Meteor.Error('not-authorized');
    }

    Photos.remove({postId: postId});
  }
});
