Photos = new Mongo.Collection('photos');

Schemas.Photo = new SimpleSchema([Schemas.BaseSchema, {
    title: {
        type: String,
        label: "Título",
        max: 200
    },
    url: {
    	type: String,
    	label: "URL"
    },
    galleryId: {
    	type: String
    }
}]);

Photos.attachSchema(Schemas.Photo);

Meteor.methods({
    removePhotos: function (galleryId) {
        var userId = Meteor.userId();

        if (! Roles.userIsInRole(userId, 'admin')) {
          throw new Meteor.Error("not-authorized");
        }

        Photos.remove({galleryId: galleryId});
    }
});
