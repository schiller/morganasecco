Slingshot.createDirective("largePictures", Slingshot.S3Storage, {
  bucket: Meteor.settings.S3Bucket,
  acl: "public-read",
  AWSAccessKeyId: Meteor.settings.AWSAccessKeyId,
  AWSSecretAccessKey: Meteor.settings.AWSSecretAccessKey,
  region: Meteor.settings.AWSRegion,

  authorize: function () {
    if (!Roles.userIsInRole(this.userId, 'admin')) {
      var message = "Por favor, faça login antes de realizar uploads";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },
  key: function (file) {
    return 'large/' + new Date().getTime() + "_" + file.name;
  }
});

Slingshot.createDirective("thumbnails", Slingshot.S3Storage, {
  bucket: Meteor.settings.S3Bucket,
  acl: "public-read",
  AWSAccessKeyId: Meteor.settings.AWSAccessKeyId,
  AWSSecretAccessKey: Meteor.settings.AWSSecretAccessKey,
  region: Meteor.settings.AWSRegion,

  authorize: function () {
    if (!Roles.userIsInRole(this.userId, 'admin')) {
      var message = "Por favor, faça login antes de realizar uploads";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },
  key: function (file) {
    return 'thumb/' + new Date().getTime() + "_" + file.name;
  }
});