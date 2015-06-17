Template.postShow.helpers({
	gallery: function () {
		return Galleries.findOne({_id: this.galleryId});
	}
});