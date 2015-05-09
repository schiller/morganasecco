Photos = new Mongo.Collection('photos');

Schemas.Photo = new SimpleSchema([Schemas.BaseSchema, {
    name: {
        type: String,
        label: "Nome",
        max: 200
    },
    url: {
    	type: String,
    	label: "URL"
    },
    galleries: {
    	type: [Schemas.Gallery],
    	minCount: 1
    }
}]);

Photos.attachSchema(Schemas.Photo);