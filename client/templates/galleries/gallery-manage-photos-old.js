Template.galleryManagePhotosOld.onCreated(function () {
	this.selectedPhotos = new ReactiveVar([]);
});

Template.galleryManagePhotosOld.helpers({
	photos: function () {
		return Photos.find({postId: this._id});
	}
});

Template.galleryManagePhotosOld.events({
	"click .photo-thumbnail": function (event, template) {
		Template.galleryManagePhotosOld.togglePhoto(event.currentTarget);
	},
	"click #select-all-photos-btn": function (event, template) {
		event.preventDefault();

		var photoThumbnails = $(".photo-thumbnail").get();
		_.each(photoThumbnails, Template.galleryManagePhotosOld.selectPhoto);
	},
	"click #unselect-all-photos-btn": function (event, template) {
		event.preventDefault();

		var photoThumbnails = $(".photo-thumbnail").get();
		_.each(photoThumbnails, Template.galleryManagePhotosOld.unselectPhoto);
	},
	"click #delete-photos-btn": function (event, template) {
		event.preventDefault();

		var confirmDelete = confirm("Tem certeza que deseja deletar as fotos selecionadas? Esta ação é irreversível.");

		if (confirmDelete === true) {
			var selectedPhotos = Template.instance().selectedPhotos.get();

			_.each(selectedPhotos, function (photoId) {
				Photos.remove(photoId);
			});

			Template.instance().selectedPhotos.set([]);
		}

		return false;
	},
	"click #set-cover-btn": function (event, template) {
		event.preventDefault();

		var selectedPhotos = Template.instance().selectedPhotos.get();

		if (selectedPhotos.length > 0) {
			var photo = selectedPhotos[0];

			Posts.update(this._id, {$set: {coverId: photo}}, function (error, result) {
				if (error) {
					console.log(error.invalidKeys);
				} else {
					console.log(result);
				}
			});
		}

		return false;
	}
});

Template.galleryManagePhotosOld.selectPhoto = function (photoThumbnail) {
	var photoId = photoThumbnail.dataset.photoId;
	var photoCheck = $(photoThumbnail).find(".photo-check");

	var selectedPhotos = Template.instance().selectedPhotos.get();

	var index = selectedPhotos.indexOf(photoId);
	if (index == -1) {
		selectedPhotos.push(photoId);
		photoCheck.show();
	}

	Template.instance().selectedPhotos.set(selectedPhotos);
};

Template.galleryManagePhotosOld.unselectPhoto = function (photoThumbnail) {
	var photoId = photoThumbnail.dataset.photoId;
	var photoCheck = $(photoThumbnail).find(".photo-check");

	var selectedPhotos = Template.instance().selectedPhotos.get();

	var index = selectedPhotos.indexOf(photoId);
	if (index != -1) {
		selectedPhotos.splice(index, 1);
		photoCheck.hide();
	}

	Template.instance().selectedPhotos.set(selectedPhotos);
};

Template.galleryManagePhotosOld.togglePhoto = function (photoThumbnail) {
	var photoId = photoThumbnail.dataset.photoId;
	var photoCheck = $(photoThumbnail).find(".photo-check");

	var selectedPhotos = Template.instance().selectedPhotos.get();

	var index = selectedPhotos.indexOf(photoId);
	if (index != -1) {
		selectedPhotos.splice(index, 1);
		photoCheck.hide();
	} else {
		selectedPhotos.push(photoId);
		photoCheck.show();
	}

	Template.instance().selectedPhotos.set(selectedPhotos);
};
