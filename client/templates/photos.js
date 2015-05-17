Template.photos.onCreated(function() {
	var template = this;
	this.pageLimit = new ReactiveVar(10);

	this.autorun(function() {
		var limit = template.pageLimit.get();
		Meteor.subscribe('paginatedPhotos', limit, {
			onReady: function () {$("#mygallery").justifiedGallery('norewind');}
		});		
	});
});

Template.photos.onRendered(function(){
	$("#mygallery").justifiedGallery({
		rowHeight : 300,
		lastRow : 'nojustify',
		margins : 25
	});

	// // is triggered every time we scroll
	// $(window).scroll(function() {
	// 	if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
	// 		incrementLimit();
	// 	}
	// });
});

Template.photos.helpers({
	photos: function () {
		var limit = Template.instance().pageLimit.get();
		if (this._id) {
			return Photos.find({galleryId: this._id}, { limit: limit });
		} else {
			return Photos.find({}, { limit: limit });
		}
	},
	hidden: function () {
		var limit = Template.instance().pageLimit.get();
		var photosCount = this._id ? Photos.find({galleryId: this._id}).count() : Photos.find().count();

		if (photosCount <= limit) {
			return 'hidden';
		} else {
			return '';
		}
	}
});

Template.photos.events({
	'click #load-more-btn': function (event, template) {
		incrementLimit(template);
	}
});

incrementLimit = function(template, inc) {
	inc = typeof inc !== 'undefined' ? inc : 10;
	var limit = template.pageLimit.get();
	newLimit = limit + inc;
	template.pageLimit.set(newLimit);
};
