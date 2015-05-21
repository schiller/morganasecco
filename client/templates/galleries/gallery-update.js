Template.galleryUpdate.onCreated(function () {
  this.selectedPhotos = new ReactiveVar([]);
});

Template.galleryUpdate.helpers({
	photos: function () {
		return Photos.find({galleryId: this._id});
	}
});

Template.galleryUpdate.events({
  "click #save-gallery-btn": function (event, template) {
    var title = document.getElementById('galleryTitle').value;
    var featured = document.getElementById('galleryFeatured').checked;

    Galleries.update(this._id, {$set: {title: title, featured: featured}}, function (error, result) {
      if (error) {alert(error);}
      alert(result);
    });

    return false;
  },
  "click #delete-gallery-btn": function (event, template) {
    var confirmDelete = confirm("Tem certeza que deseja deletar a galeria e todas suas fotos? Esta ação é irreversível.");
    
    if (confirmDelete === true) {
      Meteor.call("removePhotos", this._id);
      Galleries.remove(this._id);

      Router.go('galleries');
    }   

    return false;
  },
  "click .photo-thumbnail": function (event, template) {
    Template.galleryUpdate.togglePhoto(event.currentTarget);
  },
  "click #select-all-photos-btn": function (event, template) {
    event.preventDefault();

    var photoThumbnails = $(".photo-thumbnail").get();
    _.each(photoThumbnails, Template.galleryUpdate.selectPhoto);
  },
  "click #unselect-all-photos-btn": function (event, template) {
    event.preventDefault();

    var photoThumbnails = $(".photo-thumbnail").get();
    _.each(photoThumbnails, Template.galleryUpdate.unselectPhoto);
  },
  "click #delete-photos-btn": function (event, template) {
    event.preventDefault();

    var confirmDelete = confirm("Tem certeza que deseja deletar as fotos selecionadas? Esta ação é irreversível.");
    
    if (confirmDelete === true) {
      var selectedPhotos = Template.instance().selectedPhotos.get();

      _.each(selectedPhotos, function (photoId) {
        Photos.remove(photoId);
      })

      Template.instance().selectedPhotos.set([]);
    }   

    return false;
  }
});

Template.galleryUpdate.selectPhoto = function (photoThumbnail) {
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

Template.galleryUpdate.unselectPhoto = function (photoThumbnail) {
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

Template.galleryUpdate.togglePhoto = function (photoThumbnail) {
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
