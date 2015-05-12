Galleries = new Mongo.Collection('galleries');

Schemas.Gallery = new SimpleSchema([Schemas.BaseSchema, {
    title: {
        type: String,
        label: "Título",
        max: 200
    },
    cover: {
    	type: Schemas.Photo,
    	optional: true
    }
}]);

Galleries.attachSchema(Schemas.Gallery);
