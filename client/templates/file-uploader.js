Template.fileUploader.events({
  "submit .upload-files": function (event) {

    var files = document.getElementById('upload-btn').files;

    if (files.length > 0) {
      var uploads = _.map(files, function (file) {
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
    }

    return false;
  }
});