Photos = new Mongo.Collection('photos');

Schemas.Photo = new SimpleSchema([Schemas.BaseSchema, {
  title: {
    type: String,
    label: 'Título',
    max: 200
  },
  urlVeryLarge: {
    type: String,
    label: 'URL'
  },
  urlLarge: {
    type: String,
    label: 'URL'
  },
  urlMedium: {
    type: String,
    label: 'URL'
  },
  urlSmall: {
    type: String,
    label: 'URL'
  },
  urlMicro: {
    type: String,
    label: 'URL'
  },
  urlThumb: {
    type: String,
    label: 'URL',
    optional: true
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
