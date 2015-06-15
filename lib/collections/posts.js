Posts = new Mongo.Collection('posts');

Schemas.Post = new SimpleSchema([Schemas.BaseSchema, {
    title: {
      type: String,
      label: "Título",
      max: 200
    },
    text: {
      type: String,
      label: "Texto"
    },
    published: {
      type: Boolean,
      label: "Publicado"
    },
    authorId: {
      type: String
    },
    coverId: {
    	type: String,
    	optional: true
    },
    galleryId: {
      type: String,
      optional: true
    }
}]);

Posts.attachSchema(Schemas.Post);
