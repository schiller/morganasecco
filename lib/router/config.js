Router.configure({
	controller: 'AppController',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	waitOn: function() {
		return [
		Meteor.subscribe('featuredPosts'),
		// Meteor.subscribe('featuredPhotos')
		];
	}
});

if (Meteor.isClient) {
  // Show the loading screen on desktop
  Router.onBeforeAction('loading', {except: ['login', 'signup']});
  Router.onBeforeAction('dataNotFound', {except: ['login', 'signup']});

  AutoForm.setDefaultTemplate('plain');
}
