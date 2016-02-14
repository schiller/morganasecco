Slingshot.createDirective('veryLargePictures', Slingshot.S3Storage, {
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
  key: function (file, metaContext) {
    return metaContext.postId + '/very-large/' + new Date().getTime() + '_' + file.name;
  }
});

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
  key: function (file, metaContext) {
    return metaContext.postId + '/large/' + new Date().getTime() + '_' + file.name;
  }
});

Slingshot.createDirective('mediumPictures', Slingshot.S3Storage, {
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
  key: function (file, metaContext) {
    return metaContext.postId + '/medium/' + new Date().getTime() + '_' + file.name;
  }
});

Slingshot.createDirective('smallPictures', Slingshot.S3Storage, {
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
  key: function (file, metaContext) {
    return metaContext.postId + '/small/' + new Date().getTime() + '_' + file.name;
  }
});

Slingshot.createDirective('microPictures', Slingshot.S3Storage, {
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
  key: function (file, metaContext) {
    return metaContext.postId + '/micro/' + new Date().getTime() + '_' + file.name;
  }
});
