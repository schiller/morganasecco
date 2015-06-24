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
    postId: {
    	type: String
    }
}]);

Photos.attachSchema(Schemas.Photo);

Meteor.methods({
    removePhotos: function (postId) {
        var userId = Meteor.userId();

        if (! Roles.userIsInRole(userId, 'admin')) {
          throw new Meteor.Error("not-authorized");
        }

        Photos.remove({postId: postId});
    }
});
