Template.galleryShow.onCreated(function() {
	var self = this;
	this.pageLimit = new ReactiveVar(pageLimit);
});

Template.galleryShow.onRendered(function(){
	var self = this;

	self.$("#mygallery").justifiedGallery({
		rowHeight : 350,
		margins : 10,
		rel: 'group'
	}).on('jg.complete', function () {
		self.$(this).find('a').colorbox({
			maxWidth : '100%',
			maxHeight : '100%',
			opacity : 0.9,
			transition : 'elastic',
			current : ''
		});
	});

	this.autorun(function () {
		Template.currentData();

		setTimeout(function () {
			self.$("#mygallery").justifiedGallery({
				rowHeight : 350,
				margins : 10,
				rel: 'group'
			}).on('jg.complete', function () {
				self.$(this).find('a').colorbox({
					maxWidth : '100%',
					maxHeight : '100%',
					opacity : 0.9,
					transition : 'elastic',
					current : ''
				});
			});
		}, 100);
	});

	// this.autorun(function() {
	// 	var limit = self.pageLimit.get();

	// 	setTimeout(function () {
	// 		self.$("#mygallery").justifiedGallery('norewind');
	// 	}, 0);
	// });

	// // is triggered every time we scroll
	// $(window).scroll(function() {
	// 	if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
	// 		incrementLimit();
	// 	}
	// });
});

Template.photoThumbnail.onRendered(function () {
	$("#mygallery").justifiedGallery('norewind');
});

Template.galleryShow.helpers({
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

Template.galleryShow.events({
	'click #load-more-btn': function (event, template) {
		incrementLimit(template);
	}
});

pageLimit = 10;

incrementLimit = function(template, inc) {
	inc = typeof inc !== 'undefined' ? inc : pageLimit;
	var limit = template.pageLimit.get();
	newLimit = limit + inc;
	template.pageLimit.set(newLimit);
};
