Meteor.publish('photos', function() {
  return Photos.find();
});

Meteor.publish('galleries', function() {
  return Galleries.find();
});