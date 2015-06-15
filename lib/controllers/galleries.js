GalleryListController = RouteController.extend({
	layoutTemplate: 'appLayout',
    subscriptions: function () {
      this.subscribe('galleries');
      this.subscribe('photos');
    },
    action: function () {
    	this.render('galleries');
    }
});

GalleryShowController = RouteController.extend({
	layoutTemplate: 'appLayout',
	subscriptions: function () {
		this.subscribe('galleries', {_id: this.params._id});
		this.subscribe('photos', {galleryId: this.params._id});
	},
	data: function () {
		return Galleries.findOne({_id: this.params._id});
	},
	action: function () {
		this.render('galleryShow');
	}
});

GalleryUpdateController = RouteController.extend({
	layoutTemplate: 'appLayout',
	subscriptions: function () {
		this.subscribe('galleries', {_id: this.params._id});
		this.subscribe('photos', {galleryId: this.params._id});
	},
	data: function () {
		return Galleries.findOne({_id: this.params._id});
	},
	action: function () {
		this.render('galleryUpdate');
	}
});
