// Meteor.startup(function () {
//   var photos = Photos.find().fetch();

//   _.each(photos, function (photo) {
//     Photos.update(
//       {_id: photo._id},
//       {$set: {
//         urlVeryLarge: photo.urlLarge,
//         urlMedium: photo.urlThumb,
//         urlSmall: photo.urlThumb,
//         urlMicro: photo.urlThumb
//       }}
//     );
//   });
// });
