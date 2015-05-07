Slingshot.createDirective("myFileUploader", Slingshot.S3Storage, {
  bucket: Meteor.settings.S3Bucket,
  acl: "public-read",
  AWSAccessKeyId: Meteor.settings.AWSAccessKeyId,
  AWSSecretAccessKey: Meteor.settings.AWSSecretAccessKey,
  region: Meteor.settings.AWSRegion,

  authorize: function () {
    //Deny uploads if user is not logged in.
    // if (!this.userId) {
    //   var message = "Please login before posting files";
    //   throw new Meteor.Error("Login Required", message);
    // }

    return true;
  },
  key: function (file) {
    return 'uploadDir' + "/" + file.name;
  }
});