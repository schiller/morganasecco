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
    },
    featured: {
      type: Boolean,
      optional: true
    },
    email: {
      type: String,
      label: "Email",
      optional: true
    }
}]);

Galleries.attachSchema(Schemas.Gallery);

Galleries.allow({
  insert: function (userId, doc) {
    if (Roles.userIsInRole(userId, 'admin')) {
      return true;
    }
    return false;
  },
  update: function (userId, doc, fieldNames, modifier) {
    if (Roles.userIsInRole(userId, 'admin')) {
      return true;
    }
    return false;
  },
  remove: function (userId, doc) {
    if (Roles.userIsInRole(userId, 'admin')) {
      return true;
    }
    return false;
  }
});
