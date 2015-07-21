HomeController = RouteController.extend({
	layoutTemplate: 'appLayout',
	subscriptions: function () {
		this.subscribe('homePost');
	},
	data: function () {
		return Posts.findOne({home: true});
	},
	action: function () {
		this.render('home');
	}
});
