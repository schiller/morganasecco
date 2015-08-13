Posts = new Mongo.Collection('posts');

Schemas.Post = new SimpleSchema([Schemas.BaseSchema, {
	title: {
		type: String,
		label: "Título",
		max: 200
	},
	slug: {
		type: String,
		label: "Slug",
		max: 200,
		// index: true,
		// unique: true
	},
	text: {
		type: String,
		label: "Texto",
		optional: true
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
	featured: {
		type: Boolean,
		label: "Em destaque",
		optional: true
	},
	home: {
		type: Boolean,
		label: "Home",
		optional: true
	}
}]);

Posts.attachSchema(Schemas.Post);
