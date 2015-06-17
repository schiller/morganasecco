Template.postUpdate.helpers({
	gallery: function () {
		return Galleries.findOne({_id: this.galleryId});
	}
});
