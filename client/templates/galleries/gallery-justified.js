pageLimit = 10;

incrementLimit = function(template, inc) {
	inc = typeof inc !== 'undefined' ? inc : pageLimit;
	var limit = template.pageLimit.get();
	newLimit = limit + inc;
	template.pageLimit.set(newLimit);
};

Template.galleryJustified.onCreated(function() {
	this.pageLimit = new ReactiveVar(pageLimit);
});

Template.galleryJustified.onRendered(function(){
	var self = this;

	var rowHeight = 250;
	var margins = 10;
	var rel = 'group';

	var maxWidth = '100%';
	var	maxHeight = '100%';
	var opacity = 0.9;
	var transition = 'elastic';
	var current = '';

	self.$("#justified-gallery").justifiedGallery({
		rowHeight : rowHeight,
		margins : margins,
		rel: rel
	}).on('jg.complete', function () {
		self.$(this).find('a').colorbox({
			maxWidth : maxWidth,
			maxHeight : maxHeight,
			opacity : opacity,
			transition : transition,
			current : current
		});
	});

	this.autorun(function () {
		Template.currentData();

		setTimeout(function () {
			self.$("#justified-gallery").justifiedGallery({
				rowHeight : rowHeight,
				margins : margins,
				rel: rel
			}).on('jg.complete', function () {
				self.$(this).find('a').colorbox({
					maxWidth : maxWidth,
					maxHeight : maxHeight,
					opacity : opacity,
					transition : transition,
					current : current
				});
			});
		}, 100);
	});
});

Template.galleryJustified.helpers({
	photos: function () {
		var limit = Template.instance().pageLimit.get();
		if (this._id) {
			return Photos.find({galleryId: this._id}, { limit: limit });
		} else {
			// return Photos.find({}, { limit: limit });
			Router.go('/');
			return false;
		}
	},
	hidden: function () {
		var limit = Template.instance().pageLimit.get();
		var photosCount = this._id ?
		Photos.find({galleryId: this._id}).count() :
		Photos.find().count();

		if (photosCount <= limit) {
			return 'hidden';
		} else {
			return '';
		}
	}
});

Template.galleryJustified.events({
	'click #load-more-btn': function (event, template) {
		incrementLimit(template);
	}
});