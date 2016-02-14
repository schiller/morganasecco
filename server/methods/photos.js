Meteor.methods({
  removePhotos: function (postId) {
    check(postId, String);
    var userId = Meteor.userId();
    if (! Roles.userIsInRole(userId, 'admin')) {
      throw new Meteor.Error('not-authorized');
    }

    var photos = Photos.find({postId: postId}).fetch();
    var keys = [];
    var amazonAwsCom = 'amazonaws.com';
    for (var i = photos.length - 1; i >= 0; i--) {
      var photo = photos[i];
      var veryLarge = photo.urlVeryLarge.substring(photo.urlVeryLarge.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
      var large = photo.urlLarge.substring(photo.urlLarge.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
      var medium = photo.urlMedium.substring(photo.urlMedium.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
      var small = photo.urlSmall.substring(photo.urlSmall.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
      var micro = photo.urlMicro.substring(photo.urlMicro.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
      keys.push({Key: veryLarge});
      keys.push({Key: large});
      keys.push({Key: medium});
      keys.push({Key: small});
      keys.push({Key: micro});
    }

    AWS.config.update({
      accessKeyId: Meteor.settings.aws.accessKeyId,
      secretAccessKey: Meteor.settings.aws.secretAccessKey
    });
    var s3 = new AWS.S3();
    var bucket = Meteor.settings.aws.s3Bucket;
    var params = {
      Bucket: bucket,
      Delete: {
        Objects: keys
      }
    };
    Meteor.wrapAsync(
      s3.deleteObjects(params, function(error, data) {
        if (error) {
          throw new Meteor.Error('S3 Error: ' + error);
        }
      })
    );

    Photos.remove({postId: postId});
  },
  deletePhoto: function (photoId) {
    check(photoId, String);
    var userId = Meteor.userId();
    if (! Roles.userIsInRole(userId, 'admin')) {
      throw new Meteor.Error('not-authorized');
    }

    var photo = Photos.findOne(photoId);
    var keys = [];
    var amazonAwsCom = 'amazonaws.com';
    var veryLarge = photo.urlVeryLarge.substring(photo.urlVeryLarge.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
    var large = photo.urlLarge.substring(photo.urlLarge.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
    var medium = photo.urlMedium.substring(photo.urlMedium.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
    var small = photo.urlSmall.substring(photo.urlSmall.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
    var micro = photo.urlMicro.substring(photo.urlMicro.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
    keys.push({Key: veryLarge});
    keys.push({Key: large});
    keys.push({Key: medium});
    keys.push({Key: small});
    keys.push({Key: micro});

    AWS.config.update({
      accessKeyId: Meteor.settings.aws.accessKeyId,
      secretAccessKey: Meteor.settings.aws.secretAccessKey
    });
    var s3 = new AWS.S3();
    var bucket = Meteor.settings.aws.s3Bucket;
    var params = {
      Bucket: bucket,
      Delete: {
        Objects: keys
      }
    };
    Meteor.wrapAsync(
      s3.deleteObjects(params, function (error, data) {
        if(error) {
          throw new Meteor.Error('S3 Error: ' + error);
        } 
      })
    );

    Photos.remove(photoId);
  }
});
