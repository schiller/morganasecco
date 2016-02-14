Template.fileUploader.onCreated(function () {
  this.uploaders = new ReactiveVar([]);
});

Template.fileUploader.helpers({
  uploaders: function () {
    return Template.instance().uploaders.get();
  }
});

Template.fileUploader.events({
  'change #file-input': function (event, template) {
    var files = event.currentTarget.files;
    if (files.length > 0) {
      var uploaders = [];

      _.map(files, function (file) {
        var metaContext = {postId: template.data.postId};
        var uploaderVeryLarge = new Slingshot.Upload('veryLargePictures', metaContext);
        var uploaderLarge = new Slingshot.Upload('largePictures', metaContext);
        var uploaderMedium = new Slingshot.Upload('mediumPictures', metaContext);
        var uploaderSmall = new Slingshot.Upload('smallPictures', metaContext);
        var uploaderMicro = new Slingshot.Upload('microPictures', metaContext);

        var largeSize = 1024;
        var mediumSize = 640;
        var smallSize = 320;
        var microSize = 12;

        uploaderVeryLarge.send(file, function (error, urlVeryLarge) {
          if (error) {
            sAlert.error('Error uploading' + uploaderVeryLarge.xhr.response);
          } else {
            Resizer.resize(file, {height: largeSize, width: largeSize, cropSquare: false}, function(error, largeImg) {
              if (error) {
                sAlert.error('Error uploading' + error);
              } else {
                uploaderLarge.send(largeImg, function (error, urlLarge) {
                  if (error) {
                    sAlert.error('Error uploading' + uploaderLarge.xhr.response);
                  } else {
                    Resizer.resize(file, {height: mediumSize, width: mediumSize, cropSquare: false}, function(error, mediumImg) {
                      if (error) {
                        sAlert.error('Error uploading' + error);
                      } else {
                        uploaderMedium.send(mediumImg, function (error, urlMedium) {
                          if (error) {
                            sAlert.error('Error uploading' + uploaderMedium.xhr.response);
                          } else {
                            Resizer.resize(file, {height: smallSize, width: smallSize, cropSquare: false}, function(error, smallImg) {
                              if (error) {
                                sAlert.error('Error uploading' + error);
                              } else {
                                uploaderSmall.send(smallImg, function (error, urlSmall) {
                                  if (error) {
                                    sAlert.error('Error uploading' + uploaderSmall.xhr.response);
                                  } else {
                                    Resizer.resize(file, {height: microSize, width: microSize, cropSquare: false}, function(error, microImg) {
                                      if (error) {
                                        sAlert.error('Error uploading' + error);
                                      } else {
                                        uploaderMicro.send(microImg, function (error, urlMicro) {
                                          if (error) {
                                            sAlert.error('Error uploading' + uploaderMicro.xhr.response);
                                          } else {
                                            Photos.insert(
                                              {
                                                title: file.name,
                                                urlVeryLarge: urlVeryLarge,
                                                urlLarge: urlLarge,
                                                urlMedium: urlMedium,
                                                urlSmall: urlSmall,
                                                urlMicro: urlMicro,
                                                postId: template.data.postId
                                              },
                                              function (error, result) {
                                                if (error) {
                                                  sAlert.error('Error inserting' + error);
                                                }
                                                console.log('result: ' + result);
                                              }
                                            );
                                          }
                                        });
                                      }
                                    });
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });

        uploaders.push(uploaderVeryLarge);
        uploaders.push(uploaderLarge);
        uploaders.push(uploaderMedium);
        uploaders.push(uploaderSmall);
        uploaders.push(uploaderMicro);
      });

      template.uploaders.set(uploaders);
    }

    return false;
  }
});