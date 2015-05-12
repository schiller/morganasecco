Template.photos.helpers({
	photos: function () {
    if (this._id) {
      return Photos.find({galleryId: this._id});
    } else {
      return Photos.find({});
    }
  }
});

Template.photos.rendered = function(){
	$("#mygallery").justifiedGallery({
		rowHeight : 200,
		lastRow : 'nojustify',
		margins : 25
	});
};
