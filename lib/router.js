// Global subscriptions
if (Meteor.isClient) {
  Meteor.subscribe('photos');
  Meteor.subscribe('galleries');
}

Router.configure({
  layoutTemplate: 'appLayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/photos');

Router.route('/galleries/:_id/update',
  function () {
    var gallery = Galleries.findOne({_id: this.params._id});
    this.render('galleryUpdate', {data: gallery});
  },
  {name: 'galleryUpdate'}
);

Router.route('/galleries/:_id',
  function () {
    var gallery = Galleries.findOne({_id: this.params._id});
    this.render('photos', {data: gallery});
  },
  {name: 'galleryDetails'}
);

Router.route('/galleries');
