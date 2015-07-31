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

		var files = event.currentTarget.files;

		if (files.length > 0) {
			var uploaders = [];

			_.map(files, function (file) {

				var uploaderLarge = new Slingshot.Upload("largePictures");
				var uploaderThumb = new Slingshot.Upload("thumbnails");

				var thumbHeight = 484;
				var thumbWidth = 730;

				Resizer.resize(file, {height: thumbHeight, width: thumbWidth, cropSquare: false}, function(error, thumb) {
					if (error) {
						console.error('Error uploading', error);
					} else {
						uploaderThumb.send(thumb, function (error, urlThumb) {
							if (error) {
								console.error('Error uploading', uploaderThumb.xhr.response);
							} else {
								uploaderLarge.send(file, function (error, urlLarge) {
									if (error) {
										console.error('Error uploading', uploaderLarge.xhr.response);
									} else {
										Photos.insert(
										{
											title: file.name, 
											urlLarge: urlLarge,
											urlThumb: urlThumb,
											postId: template.data.postId
										},
										function (error, result) {
											if (error) {
												console.error('Error inserting', error);
											}
										}
										);
									}
								});
							}
						});						
					}
				});

				uploaders.push(uploaderLarge);
				uploaders.push(uploaderThumb);
			});

			template.uploaders.set(uploaders);
		}

		return false;
	}
});
