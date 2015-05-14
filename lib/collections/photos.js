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

Photos.allow({
  insert: function (userId, doc) {
    return true;
  }
});