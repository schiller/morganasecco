Router.configure({
  layoutTemplate: 'appLayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/photos');