Template.galleryUpdate.helpers({
	photos: function () {
		return Photos.find({galleryId: this._id});
	}
});

Template.galleryUpdate.events({
  "click #save-gallery-btn": function (event, template) {
    var title = document.getElementById('galleryTitle').value;

    Galleries.update(this._id, {$set: {title: title}}, function (error, result) {
      if (error) {alert(error);}
      alert(result);
    });

    return false;
  }
});
