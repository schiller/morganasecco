Template.fileUploader.onCreated(function () {
  this.uploaders = new ReactiveVar([]);
});

Template.fileUploader.events({
  "submit .upload-files": function (event, template) {

    var files = document.getElementById('file-input').files;

    if (files.length > 0) {
      var uploaders = _.map(files, function (file) {

        var uploader = new Slingshot.Upload("myFileUploader");

        uploader.send(file, function (error, downloadUrl) {
          if (error) {
            console.error('Error uploading', uploader.xhr.response);
          } else {
            console.log('uploaded file available here: ' + downloadUrl);
          }          
        });

        return uploader;
      });

      template.uploaders.set(uploaders);
    }

    return false;
  }
});

Template.fileUploader.helpers({
  uploaders: function () {
    return Template.instance().uploaders.get();
  }
});