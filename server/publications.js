Meteor.publish('galleries', function() {
  return Galleries.find();
});

Meteor.publish('photos', function() {
  return Photos.find();
});

Meteor.publish('paginatedPhotos', function(limit) {
  if (limit > Photos.find().count()) {
    limit = 0;
  }

  return Photos.find({}, {limit: limit});
});