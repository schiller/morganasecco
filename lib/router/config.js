Router.configure({
	controller: 'AppController',
	notFoundTemplate: 'appNotFound',
	loadingTemplate: 'appLoading',
	waitOn: function() {
		return [
		Meteor.subscribe('featuredGalleries'),
		Meteor.subscribe('featuredPhotos')
		];
	}
});

if (Meteor.isClient) {
  // Show the loading screen on desktop
  Router.onBeforeAction('loading', {except: ['login', 'signup']});
  Router.onBeforeAction('dataNotFound', {except: ['login', 'signup']});
}