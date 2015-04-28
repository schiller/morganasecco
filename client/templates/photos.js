Template.photos.helpers({
	photos: function () {
		return Photos.find({});
	}
});

// Meteor.startup(function() {
// 	$("#mygallery").justifiedGallery({
// 		rowHeight : 120,
// 		lastRow : 'nojustify',
// 		margins : 30
// 	});
// });

Template.photos.rendered = function(){
	$("#mygallery").justifiedGallery({
		rowHeight : 200,
		lastRow : 'nojustify',
		margins : 25
	});
};