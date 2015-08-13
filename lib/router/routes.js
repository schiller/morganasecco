Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/contato', {
  name: 'contact',
  layoutTemplate: 'appLayout'
});

Router.route('/sobre', {
  name: 'about',
  layoutTemplate: 'appLayout'
});

Router.route('/loading', {
  name: 'loading'
});

Router.route('/not-found', {
  name: 'notFound',
  layoutTemplate: 'appLayout'
});

//================== Auth ==================

Router.route('/login', {
  name: 'login',
  layoutTemplate: 'appLayout'
});

Router.route('/signup', {
  name: 'signup',
  layoutTemplate: 'appLayout'
});

//================== End Auth ==================

//================== Blog ==================

Router.route('/galerias/:slug/update', {
  name: 'postUpdate',
  controller: 'PostUpdateController'
});

Router.route('/galerias/:slug', {
  name: 'postShow',
  controller: 'PostShowController'
});

Router.route('/galerias', {
  name: 'posts',
  controller: 'PostListController'
});

Router.route('/galerias-admin', {
  name: 'postsAdmin',
  controller: 'PostAdminController'
});

//================== End Blog ==================
