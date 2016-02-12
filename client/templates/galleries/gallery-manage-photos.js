Template.galleryManagePhotos.onRendered(function () {
  var self = this;

  function updatePhotoOrder () {
    var photos = self.$('#sortable li');
    _.each(photos, function (photo, index) {
      var photoId = photo.dataset.photoId;
      Photos.update(photoId, {$set: {order: index}}, function (error, result) {
        if (error) {
          sAlert.error(error.invalidKeys);
        } else {
          sAlert.success('Ordem atualizada');
        }
      });
    });

    return false;
  }

  Tracker.autorun(function () {
    var count = Photos.find({postId: self.data._id}).count();
    if (count > 0) {
      self.$('#sortable').multisortable({
        stop: updatePhotoOrder
      });
    }
  });
});

Template.galleryManagePhotos.helpers({
  photos: function () {
    return Photos.find({postId: this._id}, {sort: {order: 1}});
  }
});

Template.galleryManagePhotos.events({
  'click #delete-photos-btn': function (event, template) {
    event.preventDefault();

    var confirmDelete = confirm('Tem certeza que deseja deletar as fotos selecionadas? Esta ação é irreversível.');

    if (confirmDelete === true) {
      var selectedPhotos = Template.galleryManagePhotos.selectedPhotos();

      _.each(selectedPhotos, function (photoId) {
        //Photos.remove(photoId);
        Meteor.call('deletePhoto', photoId);
      });
    }

    return false;
  },
  'click #set-cover-btn': function (event, template) {
    event.preventDefault();

    var selectedPhotos = Template.galleryManagePhotos.selectedPhotos();

    if (selectedPhotos.length > 0) {
      var photo = selectedPhotos[0];

      Posts.update(this._id, {$set: {coverId: photo}}, function (error, result) {
        if (error) {
          sAlert.error(error.invalidKeys);
        } else {
          sAlert.success('Capa atualizada');
        }
      });
    }

    return false;
  }
});

Template.galleryManagePhotos.selectedPhotos = function () {
  var photos = Template.instance().$('#sortable .selected');
  var photoIds = [];
  _.each(photos, function (photo) {
    photoIds.push(photo.dataset.photoId);
  });

  return photoIds;
};
