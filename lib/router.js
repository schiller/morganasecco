Router.configure({
  layoutTemplate: 'appLayout'
});

// Router.onAfterAction(function () {
// 	Session.set('active', this.route.getName());
// });

Router.route('/', function () {
  this.render('home');
});

Router.route('/photos');

Router.route('/admin');