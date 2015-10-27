Slingshot.createDirective('largePictures', Slingshot.S3Storage, {
  bucket: Meteor.settings.aws.s3Bucket,
  acl: 'public-read',
  AWSAccessKeyId: Meteor.settings.aws.accessKeyId,
  AWSSecretAccessKey: Meteor.settings.aws.secretAccessKey,
  region: Meteor.settings.aws.region,

  authorize: function () {
    if (!Roles.userIsInRole(this.userId, 'admin')) {
      var message = 'Por favor, faça login antes de realizar uploads';
      throw new Meteor.Error('Login Required', message);
    }

    return true;
  },
  key: function (file) {
    return 'large/' + new Date().getTime() + '_' + file.name;
  }
});

Slingshot.createDirective('thumbnails', Slingshot.S3Storage, {
  bucket: Meteor.settings.aws.s3Bucket,
  acl: 'public-read',
  AWSAccessKeyId: Meteor.settings.aws.accessKeyId,
  AWSSecretAccessKey: Meteor.settings.aws.secretAccessKey,
  region: Meteor.settings.aws.region,

  authorize: function () {
    if (!Roles.userIsInRole(this.userId, 'admin')) {
      var message = 'Por favor, faça login antes de realizar uploads';
      throw new Meteor.Error('Login Required', message);
    }

    return true;
  },
  key: function (file) {
    return 'thumb/' + new Date().getTime() + '_' + file.name;
  }
});
