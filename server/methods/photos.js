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
      var thumb = photo.urlThumb.substring(photo.urlThumb.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
      var large = photo.urlLarge.substring(photo.urlLarge.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
      keys.push({Key: thumb});
      keys.push({Key: large});
    }

    //remover post do S3
    var bucket = Meteor.settings.aws.s3Bucket;
    var params = {
      Bucket: bucket,
      Delete: {
        Objects: keys
      }
    };

    AWS.config.update({
      accessKeyId: Meteor.settings.aws.accessKeyId,
      secretAccessKey: Meteor.settings.aws.secretAccessKey
    });
    var s3 = new AWS.S3();
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

    AWS.config.update({
      accessKeyId: Meteor.settings.aws.accessKeyId,
      secretAccessKey: Meteor.settings.aws.secretAccessKey
    });

    var s3 = new AWS.S3();
    var bucket = Meteor.settings.aws.s3Bucket;

    var photo = Photos.findOne(photoId);
    var amazonAwsCom = 'amazonaws.com';

    var key = photo.urlLarge.substring(photo.urlLarge.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
    var params = {
      Bucket: bucket,
      Key: key
    };
    Meteor.wrapAsync(
      s3.deleteObject(params, function (error, data) {
        if(error) {
          throw new Meteor.Error('S3 Error: ' + error);
        } 
      })
    );

    key = photo.urlThumb.substring(photo.urlThumb.indexOf(amazonAwsCom) + amazonAwsCom.length + 1);
    params = {
      Bucket: bucket,
      Key: key
    };

    Meteor.wrapAsync(
      s3.deleteObject(params, function (error, data) {
        if(error) {
          throw new Meteor.Error('S3 Error: ' + error);
        }
      })
    );

    Photos.remove(photoId);
  }
});
