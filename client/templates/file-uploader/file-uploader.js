Template.fileUploader.onCreated(function () {
  this.uploaders = new ReactiveVar([]);
});

Template.fileUploader.helpers({
  uploaders: function () {
    return Template.instance().uploaders.get();
  }
});

Template.fileUploader.events({
  "change #file-input": function (event, template) {

    var files = document.getElementById('file-input').files;

    if (files.length > 0) {
      var uploaders = _.map(files, function (file) {

        var uploader = new Slingshot.Upload("myFileUploader");

        uploader.send(file, function (error, downloadUrl) {
          if (error) {
            console.error('Error uploading', uploader.xhr.response);
          } else {
            Photos.insert({title: file.name, url: downloadUrl, galleryId: template.data.galleryId},
              function (error, result) {
                if (error) {
                  console.error('Error inserting', error);
                }
              }
            );
          }
        });

        return uploader;
      });

      template.uploaders.set(uploaders);
    }

    return false;
  }
});
