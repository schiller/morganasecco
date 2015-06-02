Router.configure({
  layoutTemplate: 'appLayout',

  // the appNotFound template is used for unknown routes and missing galleries
  notFoundTemplate: 'appNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',

  // wait on the following subscriptions before rendering the page to ensure
  // the data it's expecting is present
  waitOn: function() {
    return [
      Meteor.subscribe('featuredGalleries'),
      Meteor.subscribe('featuredPhotos')
    ];
  }
});

// dataReadyHold = null;

if (Meteor.isClient) {
  // Keep showing the launch screen on mobile devices until we have loaded
  // the app's data
  // dataReadyHold = LaunchScreen.hold();

  // Show the loading screen on desktop
  Router.onBeforeAction('loading', {except: ['login', 'signup']});
  Router.onBeforeAction('dataNotFound', {except: ['login', 'signup']});
}

Router.route('/', function () {
  this.render('home');
});

Router.route('/galleries/:_id/update',
  function () {
    this.render('galleryUpdate');
  },
  {
    name: 'galleryUpdate',
    subscriptions: function () {
      this.subscribe('galleries', {_id: this.params._id});
      this.subscribe('photos', {galleryId: this.params._id});
    },
    data: function () {
      return Galleries.findOne({_id: this.params._id});
    }
  }
);

Router.route('/galleries/:_id',
  function () {
    this.render('galleryShow');
  },
  {
    name: 'galleryShow',
    subscriptions: function () {
      this.subscribe('galleries', {_id: this.params._id});
      this.subscribe('photos', {galleryId: this.params._id});
    },
    data: function () {
      return Galleries.findOne({_id: this.params._id});
    }
  }
);

Router.route('/galleries',
  function () {
    this.render('galleries');
  },
  {
    name: 'galleries',
    subscriptions: function () {
      this.subscribe('galleries');
      this.subscribe('photos');
    }
  }
);

Router.route('/login');
Router.route('/signup');
Router.route('/admin');
