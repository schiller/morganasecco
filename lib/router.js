// Global subscriptions
if (Meteor.isClient) {
  // Meteor.subscribe('galleries', {featured: true});
  Meteor.subscribe('featuredGalleries');
}

Router.configure({
  layoutTemplate: 'appLayout'
});

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
    name: 'galleryList',
    subscriptions: function () {
      this.subscribe('galleries');
      this.subscribe('photos');
    }
  }
);
