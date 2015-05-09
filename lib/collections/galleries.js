Galleries = new Mongo.Collection('galleries');

Schemas.Gallery = new SimpleSchema([Schemas.BaseSchema, {
    name: {
        type: String,
        label: "Nome",
        max: 200
    },
    cover: {
    	type: Schemas.Photo,
    	optional: true
    }
}]);

Galleries.attachSchema(Schemas.Gallery);