Template.photos.helpers({
	photos: function () {
		return Photos.find({});
	}
});

Template.photos.rendered = function(){
	$("#mygallery").justifiedGallery({
		rowHeight : 200,
		lastRow : 'nojustify',
		margins : 25
	});
};