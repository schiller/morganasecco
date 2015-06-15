Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/login', {
  name: 'login',
  layoutTemplate: 'appLayout'
});

Router.route('/signup', {
  name: 'signup',
  layoutTemplate: 'appLayout'
});

Router.route('/admin', {
  name: 'admin',
  layoutTemplate: 'appLayout'
});

Router.route('/galleries/:_id/update', {
  name: 'galleryUpdate',
  controller: 'GalleryUpdateController'
});

Router.route('/galleries/:_id', {
  name: 'galleryShow',
  controller: 'GalleryShowController'
});

Router.route('/galleries', {
  name: 'galleries',
  controller: 'GalleryListController'
});

Router.route('/posts/:_id', {
  name: 'postShow',
  controller: 'PostShowController'
});

Router.route('/posts', {
  name: 'posts',
  controller: 'PostListController'
});

Router.route('/contact', {
  name: 'contact',
  layoutTemplate: 'appLayout'
});
