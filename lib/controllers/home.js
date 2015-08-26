HomeController = RouteController.extend({
	layoutTemplate: 'appLayout',
	waitOn: function () {
		Meteor.subscribe('homePost');
	},
	data: function () {
		return Posts.findOne({home: true});
	},
	action: function () {
		this.render('home');
	}
});
